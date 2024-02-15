var EventReceiver = (function () {
    "use strict";
    function log(msg) {
        if (console.log) {
            console.log(msg);
        }
    }

    var xhrPoll = function (url, option) {
        var end = true;
        var close = false;
        var pingHandler = null;
        var errorHandler = null;
        var messageHandler = null;
        var req = null;
        function newXhrObject() {
            if (window.XMLHttpRequest) {
                // code for modern browsers
                return new XMLHttpRequest();
            } else {
                // code for old IE browsers
                return new ActiveXObject("Microsoft.XMLHTTP");
            }
        }


        String.prototype.isStartWith = function (s) {
            return this.indexOf(s) === 0;
        };

        function parseRawMessage(messageLines) {
            var event = {};
            for (var i = 0; i < messageLines.length; i++) {
                var kv = messageLines[i];

                if (kv.isStartWith('data:')) {
                    event['data'] = JSON.parse(kv.replace('data:', ''));
                } else if (kv.isStartWith('id:')){
                    event['id'] = kv.replace('id:', '');
                } else if (kv.isStartWith('event:')) {
                    event['event'] = kv.replace('event:', '');
                } else if (kv.isStartWith('comment:')) {
                    event['comment'] = kv.replace('comment:', '');
                } else if (kv.isStartWith('event:')) {
                    event['retry'] = kv.replace('retry:', '');
                }
            }

            return event;
        }

        function stateCallback() {
            end = true;
            if (this.readyState !== 4) {
                return;
            }

            // 지연 재시작이 필요한지 체크할 때 사용하는 플래그
            var delayRetry = false;
            if (this.status / 100 === 2) {
                var event;
                try {
                    event = JSON.parse(this.responseText);
                } catch (e) {
                    var bodyList = this.responseText.split('\n');
                    event = parseRawMessage(bodyList);
                }

                if (event.event === 'ping') {
                    if (pingHandler) {
                        pingHandler(event.data);
                    } else {
                        log("receive ping in xhrPoll " + event.time);
                    }
                } else if (event.event === 'retry') {
                    log('reconnect after '+event.data.retry+'ms');
                    // retry 필드가 있을 경우 지정된 시간 이후에 다시 시도
                    delayRetry = true;
                } else if (messageHandler) {
                    messageHandler(event.data);
                }

                if (close) {
                    return;
                }
            } else {
                var errData = {
                    code: this.status,
                    value: this.responseText
                };
                if (errorHandler) {
                    errorHandler(errData);
                } else {
                    log("event request fail in xhrPoll " + errData.code + " / " + errData.value);
                }

                if (close) {
                    return;
                }
                delayRetry = true;
            }

            if (delayRetry) {
                setTimeout(function () {
                    doReq();
                }, 500);
            } else {
                doReq();
            }
        }

        function doReq() {
            var request = newXhrObject();
            request.open("POST", url, true);

            request.onreadystatechange = stateCallback;

            if (!close && end) {
                end = false;
                request.send();
            }
        }

        doReq();
        return {
            then: function (callback) {
                messageHandler = callback;
                return this;
            },
            ping: function (handler) {
                pingHandler = handler;
                return this;
            },
            error: function (handler) {
                errorHandler = handler;
                return this;
            },
            close: function (){
                close = true;
            }
        };
    };

    var eventPoll = function (url, option) {
        "use strict";

        var eventReceiver = new EventSource(url, option);
        var pingHandler = null;
        var errorHandler = null;
        var messageHandler = null;

        function onMessage(event) {
            log("triggered session " + event);
            var parsed = JSON.parse(event.data);

            if (messageHandler) {
                messageHandler(parsed);
            } else {
                log(parsed);
            }
        }

        function onPing(e) {
            var parsed = JSON.parse(e.data);
            if (pingHandler) {
                pingHandler(parsed);
            } else {
                log("receive ping in eventPoll " + parsed.time);
            }
        }

        function onError(e) {
            log("event request fail in eventPoll");
            if (errorHandler) {
                errorHandler(e);
            }
        }

        function onRetry(event) {
            var retryData = JSON.parse(event.data);
            log('reconnect after '+retryData.retry+'ms');
            eventReceiver.close();
            setTimeout(function () {
                eventReceiver = new EventSource(url, option);
                init(eventReceiver);
            }, retryData.retry);
        }

        function init(eventSource) {
            eventSource.onmessage = onMessage;
            eventSource.addEventListener("ping", onPing);
            eventSource.addEventListener("retry", onRetry);
            eventSource.onerror = onError;
        }

        init(eventReceiver);

        return {
            then: function (callback) {
                messageHandler = callback;
                return this;
            },
            ping: function (handler) {
                pingHandler = handler;
                return this;
            },
            error: function (handler) {
                errorHandler = handler;
                return this;
            },
            close: function () {
                if (eventReceiver != null) {
                    eventReceiver.close();
                }
            }
        };
    };

    if (window.EventSource) {
        return eventPoll;
    } else {
        return xhrPoll;
    }
})();