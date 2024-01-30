(function r(t) {
    console.log('t : ',t)
    var e = {};
    console.log('e : ',e)
    t.onmessage = function(a) {
        switch (a.data.type) {
        case "ping":
            t.postMessage({
                type: "pong"
            });
            break;
        case "set_timeout":
            e[a.data.id] = setTimeout((function() {
                t.postMessage({
                    type: "tick",
                    id: a.data.id
                })
            }
            ), a.data.delay);
            break;
        case "clear_timeout":
            clearTimeout(e[a.data.id]);
            break;
        case "set_interval":
            e[a.data.id] = setInterval((function() {
                t.postMessage({
                    type: "tick",
                    id: a.data.id
                })
            }
            ), a.data.interval);
            break;
        case "clear_interval":
            clearInterval(e[a.data.id]);
            break
        }
    }
}
)(this)