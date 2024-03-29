/**
 * oclazyload - Load modules on demand (lazy load) with angularJS
 * @version v1.0.10
 * @link https://github.com/ocombe/ocLazyLoad
 * @license MIT
 * @author Olivier Combe <olivier.combe@gmail.com>
 */
!function(e, n) {
    "use strict";
    var r = ["ng", "oc.lazyLoad"]
      , o = {}
      , t = []
      , i = []
      , a = []
      , s = []
      , u = e.noop
      , c = {}
      , d = []
      , l = e.module("oc.lazyLoad", ["ng"]);
    l.provider("$ocLazyLoad", ["$controllerProvider", "$provide", "$compileProvider", "$filterProvider", "$injector", "$animateProvider", function(l, f, p, m, v, y) {
        function L(n, o, t) {
            if (o) {
                var i, s, l, f = [];
                for (i = o.length - 1; i >= 0; i--)
                    if (s = o[i],
                    e.isString(s) || (s = E(s)),
                    s && -1 === d.indexOf(s) && (!w[s] || -1 !== a.indexOf(s))) {
                        var h = -1 === r.indexOf(s);
                        if (l = g(s),
                        h && (r.push(s),
                        L(n, l.requires, t)),
                        l._runBlocks.length > 0)
                            for (c[s] = []; l._runBlocks.length > 0; )
                                c[s].push(l._runBlocks.shift());
                        e.isDefined(c[s]) && (h || t.rerun) && (f = f.concat(c[s])),
                        j(n, l._invokeQueue, s, t.reconfig),
                        j(n, l._configBlocks, s, t.reconfig),
                        u(h ? "ocLazyLoad.moduleLoaded" : "ocLazyLoad.moduleReloaded", s),
                        o.pop(),
                        d.push(s)
                    }
                var p = n.getInstanceInjector();
                e.forEach(f, function(e) {
                    p.invoke(e)
                })
            }
        }
        function $(n, r) {
            function t(n, r) {
                var o, t = !0;
                return r.length && (o = i(n),
                e.forEach(r, function(e) {
                    t = t && i(e) !== o
                })),
                t
            }
            function i(n) {
                return e.isArray(n) ? M(n.toString()) : e.isObject(n) ? M(S(n)) : e.isDefined(n) && null !== n ? M(n.toString()) : n
            }
            var a = n[2][0]
              , s = n[1]
              , c = !1;
            e.isUndefined(o[r]) && (o[r] = {}),
            e.isUndefined(o[r][s]) && (o[r][s] = {});
            var d = function(e, n) {
                o[r][s].hasOwnProperty(e) || (o[r][s][e] = []),
                t(n, o[r][s][e]) && (c = !0,
                o[r][s][e].push(n),
                u("ocLazyLoad.componentLoaded", [r, s, e]))
            };
            if (e.isString(a))
                d(a, n[2][1]);
            else {
                if (!e.isObject(a))
                    return !1;
                e.forEach(a, function(n, r) {
                    e.isString(n) ? d(n, a[1]) : d(r, n)
                })
            }
            return c
        }
        function j(n, r, o, i) {
            if (r) {
                var a, s, u, c;
                for (a = 0,
                s = r.length; s > a; a++)
                    if (u = r[a],
                    e.isArray(u)) {
                        if (null !== n) {
                            if (!n.hasOwnProperty(u[0]))
                                throw new Error("unsupported provider " + u[0]);
                            c = n[u[0]]
                        }
                        var d = $(u, o);
                        if ("invoke" !== u[1])
                            d && e.isDefined(c) && c[u[1]].apply(c, u[2]);
                        else {
                            var l = function(n) {
                                var r = t.indexOf(o + "-" + n);
                                (-1 === r || i) && (-1 === r && t.push(o + "-" + n),
                                e.isDefined(c) && c[u[1]].apply(c, u[2]))
                            };
                            if (e.isFunction(u[2][0]))
                                l(u[2][0]);
                            else if (e.isArray(u[2][0]))
                                for (var f = 0, h = u[2][0].length; h > f; f++)
                                    e.isFunction(u[2][0][f]) && l(u[2][0][f])
                        }
                    }
            }
        }
        function E(n) {
            var r = null;
            return e.isString(n) ? r = n : e.isObject(n) && n.hasOwnProperty("name") && e.isString(n.name) && (r = n.name),
            r
        }
        function _(n) {
            if (!e.isString(n))
                return !1;
            try {
                return g(n)
            } catch (r) {
                if (/No module/.test(r) || r.message.indexOf("$injector:nomod") > -1)
                    return !1
            }
        }
        var w = {}
          , O = {
            $controllerProvider: l,
            $compileProvider: p,
            $filterProvider: m,
            $provide: f,
            $injector: v,
            $animateProvider: y
        }
          , x = !1
          , b = !1
          , z = []
          , D = {};
        z.push = function(e) {
            -1 === this.indexOf(e) && Array.prototype.push.apply(this, arguments)
        }
        ,
        this.config = function(n) {
            e.isDefined(n.modules) && (e.isArray(n.modules) ? e.forEach(n.modules, function(e) {
                w[e.name] = e
            }) : w[n.modules.name] = n.modules),
            e.isDefined(n.debug) && (x = n.debug),
            e.isDefined(n.events) && (b = n.events)
        }
        ,
        this._init = function(o) {
            if (0 === i.length) {
                var t = [o]
                  , a = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"]
                  , u = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/
                  , c = function(e) {
                    return e && t.push(e)
                };
                e.forEach(a, function(n) {
                    a[n] = !0,
                    c(document.getElementById(n)),
                    n = n.replace(":", "\\:"),
                    "undefined" != typeof o[0] && o[0].querySelectorAll && (e.forEach(o[0].querySelectorAll("." + n), c),
                    e.forEach(o[0].querySelectorAll("." + n + "\\:"), c),
                    e.forEach(o[0].querySelectorAll("[" + n + "]"), c))
                }),
                e.forEach(t, function(n) {
                    if (0 === i.length) {
                        var r = " " + o.className + " "
                          , t = u.exec(r);
                        t ? i.push((t[2] || "").replace(/\s+/g, ",")) : e.forEach(n.attributes, function(e) {
                            0 === i.length && a[e.name] && i.push(e.value)
                        })
                    }
                })
            }
            0 !== i.length || (n.jasmine || n.mocha) && e.isDefined(e.mock) || console.error("No module found during bootstrap, unable to init ocLazyLoad. You should always use the ng-app directive or angular.boostrap when you use ocLazyLoad.");
            var d = function l(n) {
                if (-1 === r.indexOf(n)) {
                    r.push(n);
                    var o = e.module(n);
                    j(null, o._invokeQueue, n),
                    j(null, o._configBlocks, n),
                    e.forEach(o.requires, l)
                }
            };
            e.forEach(i, function(e) {
                d(e)
            }),
            i = [],
            s.pop()
        }
        ;
        var S = function(n) {
            try {
                return JSON.stringify(n)
            } catch (r) {
                var o = [];
                return JSON.stringify(n, function(n, r) {
                    if (e.isObject(r) && null !== r) {
                        if (-1 !== o.indexOf(r))
                            return;
                        o.push(r)
                    }
                    return r
                })
            }
        }
          , M = function(e) {
            var n, r, o, t = 0;
            if (0 == e.length)
                return t;
            for (n = 0,
            o = e.length; o > n; n++)
                r = e.charCodeAt(n),
                t = (t << 5) - t + r,
                t |= 0;
            return t
        };
        this.$get = ["$log", "$rootElement", "$rootScope", "$cacheFactory", "$q", function(n, t, a, c, l) {
            function f(e) {
                var r = l.defer();
                return n.error(e.message),
                r.reject(e),
                r.promise
            }
            var p, m = c("ocLazyLoad");
            return x || (n = {},
            n.error = e.noop,
            n.warn = e.noop,
            n.info = e.noop),
            O.getInstanceInjector = function() {
                return p ? p : p = t.data("$injector") || e.injector()
            }
            ,
            u = function(e, r) {
                b && a.$broadcast(e, r),
                x && n.info(e, r)
            }
            ,
            {
                _broadcast: u,
                _$log: n,
                _getFilesCache: function() {
                    return m
                },
                toggleWatch: function(e) {
                    e ? s.push(!0) : s.pop()
                },
                getModuleConfig: function(n) {
                    if (!e.isString(n))
                        throw new Error("You need to give the name of the module to get");
                    return w[n] ? e.copy(w[n]) : null
                },
                setModuleConfig: function(n) {
                    if (!e.isObject(n))
                        throw new Error("You need to give the module config object to set");
                    return w[n.name] = n,
                    n
                },
                getModules: function() {
                    return r
                },
                isLoaded: function(n) {
                    var o = function(e) {
                        var n = r.indexOf(e) > -1;
                        return n || (n = !!_(e)),
                        n
                    };
                    if (e.isString(n) && (n = [n]),
                    e.isArray(n)) {
                        var t, i;
                        for (t = 0,
                        i = n.length; i > t; t++)
                            if (!o(n[t]))
                                return !1;
                        return !0
                    }
                    throw new Error("You need to define the module(s) name(s)")
                },
                _getModuleName: E,
                _getModule: function(e) {
                    try {
                        return g(e)
                    } catch (n) {
                        throw (/No module/.test(n) || n.message.indexOf("$injector:nomod") > -1) && (n.message = 'The module "' + S(e) + '" that you are trying to load does not exist. ' + n.message),
                        n
                    }
                },
                moduleExists: _,
                _loadDependencies: function(n, r) {
                    var o, t, i, a = [], s = this;
                    if (n = s._getModuleName(n),
                    null === n)
                        return l.when();
                    try {
                        o = s._getModule(n)
                    } catch (u) {
                        return f(u)
                    }
                    return t = s.getRequires(o),
                    e.forEach(t, function(o) {
                        if (e.isString(o)) {
                            var t = s.getModuleConfig(o);
                            if (null === t)
                                return void z.push(o);
                            o = t,
                            t.name = void 0
                        }
                        if (s.moduleExists(o.name))
                            return i = o.files.filter(function(e) {
                                return s.getModuleConfig(o.name).files.indexOf(e) < 0
                            }),
                            0 !== i.length && s._$log.warn('Module "', n, '" attempted to redefine configuration for dependency. "', o.name, '"\n Additional Files Loaded:', i),
                            e.isDefined(s.filesLoader) ? void a.push(s.filesLoader(o, r).then(function() {
                                return s._loadDependencies(o)
                            })) : f(new Error("Error: New dependencies need to be loaded from external files (" + o.files + "), but no loader has been defined."));
                        if (e.isArray(o)) {
                            var u = [];
                            e.forEach(o, function(e) {
                                var n = s.getModuleConfig(e);
                                null === n ? u.push(e) : n.files && (u = u.concat(n.files))
                            }),
                            u.length > 0 && (o = {
                                files: u
                            })
                        } else
                            e.isObject(o) && o.hasOwnProperty("name") && o.name && (s.setModuleConfig(o),
                            z.push(o.name));
                        if (e.isDefined(o.files) && 0 !== o.files.length) {
                            if (!e.isDefined(s.filesLoader))
                                return f(new Error('Error: the module "' + o.name + '" is defined in external files (' + o.files + "), but no loader has been defined."));
                            a.push(s.filesLoader(o, r).then(function() {
                                return s._loadDependencies(o)
                            }))
                        }
                    }),
                    l.all(a)
                },
                inject: function(n) {
                    var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]
                      , o = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2]
                      , t = this
                      , a = l.defer();
                    if (e.isDefined(n) && null !== n) {
                        if (e.isArray(n)) {
                            var s = [];
                            return e.forEach(n, function(e) {
                                s.push(t.inject(e, r, o))
                            }),
                            l.all(s)
                        }
                        t._addToLoadList(t._getModuleName(n), !0, o)
                    }
                    if (i.length > 0) {
                        var u = i.slice()
                          , c = function f(e) {
                            z.push(e),
                            D[e] = a.promise,
                            t._loadDependencies(e, r).then(function() {
                                try {
                                    d = [],
                                    L(O, z, r)
                                } catch (e) {
                                    return t._$log.error(e.message),
                                    void a.reject(e)
                                }
                                i.length > 0 ? f(i.shift()) : a.resolve(u)
                            }, function(e) {
                                a.reject(e)
                            })
                        };
                        c(i.shift())
                    } else {
                        if (r && r.name && D[r.name])
                            return D[r.name];
                        a.resolve()
                    }
                    return a.promise
                },
                getRequires: function(n) {
                    var o = [];
                    return e.forEach(n.requires, function(e) {
                        -1 === r.indexOf(e) && o.push(e)
                    }),
                    o
                },
                _invokeQueue: j,
                _registerInvokeList: $,
                _register: L,
                _addToLoadList: h,
                _unregister: function(n) {
                    e.isDefined(n) && e.isArray(n) && e.forEach(n, function(e) {
                        o[e] = void 0
                    })
                }
            }
        }
        ],
        this._init(e.element(n.document))
    }
    ]);
    var f = e.bootstrap;
    e.bootstrap = function(n, l, g) {
        return r = ["ng", "oc.lazyLoad"],
        o = {},
        t = [],
        i = [],
        a = [],
        s = [],
        u = e.noop,
        c = {},
        d = [],
        e.forEach(l.slice(), function(e) {
            h(e, !0, !0)
        }),
        f(n, l, g)
    }
    ;
    var h = function(n, r, o) {
        (s.length > 0 || r) && e.isString(n) && -1 === i.indexOf(n) && (i.push(n),
        o && a.push(n))
    }
      , g = e.module;
    e.module = function(e, n, r) {
        return h(e, !1, !0),
        g(e, n, r)
    }
    ,
    "undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "oc.lazyLoad")
}(angular, window),
function(e) {
    "use strict";
    e.module("oc.lazyLoad").directive("ocLazyLoad", ["$ocLazyLoad", "$compile", "$animate", "$parse", "$timeout", function(n, r, o, t, i) {
        return {
            restrict: "A",
            terminal: !0,
            priority: 1e3,
            compile: function(i, a) {
                var s = i[0].innerHTML;
                return i.html(""),
                function(i, a, u) {
                    var c = t(u.ocLazyLoad);
                    i.$watch(function() {
                        return c(i) || u.ocLazyLoad
                    }, function(t) {
                        e.isDefined(t) && n.load(t).then(function() {
                            o.enter(s, a),
                            r(a.contents())(i)
                        })
                    }, !0)
                }
            }
        }
    }
    ])
}(angular),
function(e) {
    "use strict";
    e.module("oc.lazyLoad").config(["$provide", function(n) {
        n.decorator("$ocLazyLoad", ["$delegate", "$q", "$window", "$interval", function(n, r, o, t) {
            var i = !1
              , a = !1
              , s = o.document.getElementsByTagName("head")[0] || o.document.getElementsByTagName("body")[0];
            return n.buildElement = function(u, c, d) {
                var l, f, h = r.defer(), g = n._getFilesCache(), p = function(e) {
                    var n = (new Date).getTime();
                    return e.indexOf("?") >= 0 ? "&" === e.substring(0, e.length - 1) ? e + "_dc=" + n : e + "&_dc=" + n : e + "?_dc=" + n
                };
                switch (e.isUndefined(g.get(c)) && g.put(c, h.promise),
                u) {
                case "css":
                    l = o.document.createElement("link"),
                    l.type = "text/css",
                    l.rel = "stylesheet",
                    l.href = d.cache === !1 ? p(c) : c;
                    break;
                case "js":
                    l = o.document.createElement("script"),
                    l.src = d.cache === !1 ? p(c) : c;
                    break;
                default:
                    g.remove(c),
                    h.reject(new Error('Requested type "' + u + '" is not known. Could not inject "' + c + '"'))
                }
                l.onload = l.onreadystatechange = function(e) {
                    l.readyState && !/^c|loade/.test(l.readyState) || f || (l.onload = l.onreadystatechange = null,
                    f = 1,
                    n._broadcast("ocLazyLoad.fileLoaded", c),
                    h.resolve(l))
                }
                ,
                l.onerror = function() {
                    g.remove(c),
                    h.reject(new Error("Unable to load " + c))
                }
                ,
                l.async = d.serie ? 0 : 1;
                var m = s.lastChild;
                if (d.insertBefore) {
                    var v = e.element(e.isDefined(window.jQuery) ? d.insertBefore : document.querySelector(d.insertBefore));
                    v && v.length > 0 && (m = v[0])
                }
                if (m.parentNode.insertBefore(l, m),
                "css" == u) {
                    if (!i) {
                        var y = o.navigator.userAgent.toLowerCase();
                        if (y.indexOf("phantomjs/1.9") > -1)
                            a = !0;
                        else if (/iP(hone|od|ad)/.test(o.navigator.platform)) {
                            var L = o.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)
                              , $ = parseFloat([parseInt(L[1], 10), parseInt(L[2], 10), parseInt(L[3] || 0, 10)].join("."));
                            a = 6 > $
                        } else if (y.indexOf("android") > -1) {
                            var j = parseFloat(y.slice(y.indexOf("android") + 8));
                            a = 4.4 > j
                        } else if (y.indexOf("safari") > -1) {
                            var E = y.match(/version\/([\.\d]+)/i);
                            a = E && E[1] && parseFloat(E[1]) < 6
                        }
                    }
                    if (a)
                        var _ = 1e3
                          , w = t(function() {
                            try {
                                l.sheet.cssRules,
                                t.cancel(w),
                                l.onload()
                            } catch (e) {
                                --_ <= 0 && l.onerror()
                            }
                        }, 20)
                }
                return h.promise
            }
            ,
            n
        }
        ])
    }
    ])
}(angular),
function(e) {
    "use strict";
    e.module("oc.lazyLoad").config(["$provide", function(n) {
        n.decorator("$ocLazyLoad", ["$delegate", "$q", function(n, r) {
            return n.filesLoader = function(o) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]
                  , i = []
                  , a = []
                  , s = []
                  , u = []
                  , c = null
                  , d = n._getFilesCache();
                n.toggleWatch(!0),
                e.extend(t, o);
                var l = function(r) {
                    var o, l = null;
                    if (e.isObject(r) && (l = r.type,
                    r = r.path),
                    c = d.get(r),
                    e.isUndefined(c) || t.cache === !1) {
                        if (null !== (o = /^(css|less|html|htm|js)?(?=!)/.exec(r)) && (l = o[1],
                        r = r.substr(o[1].length + 1, r.length)),
                        !l)
                            if (null !== (o = /[.](css|less|html|htm|js)?((\?|#).*)?$/.exec(r)))
                                l = o[1];
                            else {
                                if (n.jsLoader.hasOwnProperty("ocLazyLoadLoader") || !n.jsLoader.hasOwnProperty("requirejs"))
                                    return void n._$log.error("File type could not be determined. " + r);
                                l = "js"
                            }
                        "css" !== l && "less" !== l || -1 !== i.indexOf(r) ? "html" !== l && "htm" !== l || -1 !== a.indexOf(r) ? "js" === l || -1 === s.indexOf(r) ? s.push(r) : n._$log.error("File type is not valid. " + r) : a.push(r) : i.push(r)
                    } else
                        c && u.push(c)
                };
                if (t.serie ? l(t.files.shift()) : e.forEach(t.files, function(e) {
                    l(e)
                }),
                i.length > 0) {
                    var f = r.defer();
                    n.cssLoader(i, function(r) {
                        e.isDefined(r) && n.cssLoader.hasOwnProperty("ocLazyLoadLoader") ? (n._$log.error(r),
                        f.reject(r)) : f.resolve()
                    }, t),
                    u.push(f.promise)
                }
                if (a.length > 0) {
                    var h = r.defer();
                    n.templatesLoader(a, function(r) {
                        e.isDefined(r) && n.templatesLoader.hasOwnProperty("ocLazyLoadLoader") ? (n._$log.error(r),
                        h.reject(r)) : h.resolve()
                    }, t),
                    u.push(h.promise)
                }
                if (s.length > 0) {
                    var g = r.defer();
                    n.jsLoader(s, function(r) {
                        e.isDefined(r) && (n.jsLoader.hasOwnProperty("ocLazyLoadLoader") || n.jsLoader.hasOwnProperty("requirejs")) ? (n._$log.error(r),
                        g.reject(r)) : g.resolve()
                    }, t),
                    u.push(g.promise)
                }
                if (0 === u.length) {
                    var p = r.defer()
                      , m = "Error: no file to load has been found, if you're trying to load an existing module you should use the 'inject' method instead of 'load'.";
                    return n._$log.error(m),
                    p.reject(m),
                    p.promise
                }
                return t.serie && t.files.length > 0 ? r.all(u).then(function() {
                    return n.filesLoader(o, t)
                }) : r.all(u)["finally"](function(e) {
                    return n.toggleWatch(!1),
                    e
                })
            }
            ,
            n.load = function(o) {
                var t, i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], a = this, s = null, u = [], c = r.defer(), d = e.copy(o), l = e.copy(i);
                if (e.isArray(d))
                    return e.forEach(d, function(e) {
                        u.push(a.load(e, l))
                    }),
                    r.all(u).then(function(e) {
                        c.resolve(e)
                    }, function(e) {
                        c.reject(e)
                    }),
                    c.promise;
                if (e.isString(d) ? (s = a.getModuleConfig(d),
                s || (s = {
                    files: [d]
                })) : e.isObject(d) && (s = e.isDefined(d.path) && e.isDefined(d.type) ? {
                    files: [d]
                } : a.setModuleConfig(d)),
                null === s) {
                    var f = a._getModuleName(d);
                    return t = 'Module "' + (f || "unknown") + '" is not configured, cannot load.',
                    n._$log.error(t),
                    c.reject(new Error(t)),
                    c.promise
                }
                e.isDefined(s.template) && (e.isUndefined(s.files) && (s.files = []),
                e.isString(s.template) ? s.files.push(s.template) : e.isArray(s.template) && s.files.concat(s.template));
                var h = e.extend({}, l, s);
                return e.isUndefined(s.files) && e.isDefined(s.name) && n.moduleExists(s.name) ? n.inject(s.name, h, !0) : (n.filesLoader(s, h).then(function() {
                    n.inject(null, h).then(function(e) {
                        c.resolve(e)
                    }, function(e) {
                        c.reject(e)
                    })
                }, function(e) {
                    c.reject(e)
                }),
                c.promise)
            }
            ,
            n
        }
        ])
    }
    ])
}(angular),
function(e) {
    "use strict";
    e.module("oc.lazyLoad").config(["$provide", function(n) {
        n.decorator("$ocLazyLoad", ["$delegate", "$q", function(n, r) {
            return n.cssLoader = function(o, t, i) {
                var a = [];
                e.forEach(o, function(e) {
                    a.push(n.buildElement("css", e, i))
                }),
                r.all(a).then(function() {
                    t()
                }, function(e) {
                    t(e)
                })
            }
            ,
            n.cssLoader.ocLazyLoadLoader = !0,
            n
        }
        ])
    }
    ])
}(angular),
function(e) {
    "use strict";
    e.module("oc.lazyLoad").config(["$provide", function(n) {
        n.decorator("$ocLazyLoad", ["$delegate", "$q", function(n, r) {
            return n.jsLoader = function(o, t, i) {
                var a = [];
                e.forEach(o, function(e) {
                    a.push(n.buildElement("js", e, i))
                }),
                r.all(a).then(function() {
                    t()
                }, function(e) {
                    t(e)
                })
            }
            ,
            n.jsLoader.ocLazyLoadLoader = !0,
            n
        }
        ])
    }
    ])
}(angular),
function(e) {
    "use strict";
    e.module("oc.lazyLoad").config(["$provide", function(n) {
        n.decorator("$ocLazyLoad", ["$delegate", "$templateCache", "$q", "$http", function(n, r, o, t) {
            return n.templatesLoader = function(i, a, s) {
                var u = []
                  , c = n._getFilesCache();
                return e.forEach(i, function(n) {
                    var i = o.defer();
                    u.push(i.promise),
                    t.get(n, s).then(function(o) {
                        var t = o.data;
                        e.isString(t) && t.length > 0 && e.forEach(e.element(t), function(e) {
                            "SCRIPT" === e.nodeName && "text/ng-template" === e.type && r.put(e.id, e.innerHTML)
                        }),
                        e.isUndefined(c.get(n)) && c.put(n, !0),
                        i.resolve()
                    })["catch"](function(e) {
                        i.reject(new Error('Unable to load template file "' + n + '": ' + e.data))
                    })
                }),
                o.all(u).then(function() {
                    a()
                }, function(e) {
                    a(e)
                })
            }
            ,
            n.templatesLoader.ocLazyLoadLoader = !0,
            n
        }
        ])
    }
    ])
}(angular),
Array.prototype.indexOf || (Array.prototype.indexOf = function(e, n) {
    var r;
    if (null == this)
        throw new TypeError('"this" is null or not defined');
    var o = Object(this)
      , t = o.length >>> 0;
    if (0 === t)
        return -1;
    var i = +n || 0;
    if (Math.abs(i) === 1 / 0 && (i = 0),
    i >= t)
        return -1;
    for (r = Math.max(i >= 0 ? i : t - Math.abs(i), 0); t > r; ) {
        if (r in o && o[r] === e)
            return r;
        r++
    }
    return -1
}
);

