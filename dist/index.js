!(function(e) {
    var n = {};
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = (n[r] = { i: r, l: !1, exports: {} });
        return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    (t.m = e),
        (t.c = n),
        (t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r });
        }),
        (t.r = function(e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (t.t = function(e, n) {
            if ((1 & n && (e = t(e)), 8 & n)) return e;
            if (4 & n && 'object' == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (
                (t.r(r),
                Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
                2 & n && 'string' != typeof e)
            )
                for (var o in e)
                    t.d(
                        r,
                        o,
                        function(n) {
                            return e[n];
                        }.bind(null, o),
                    );
            return r;
        }),
        (t.n = function(e) {
            var n =
                e && e.__esModule
                    ? function() {
                          return e.default;
                      }
                    : function() {
                          return e;
                      };
            return t.d(n, 'a', n), n;
        }),
        (t.o = function(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n);
        }),
        (t.p = '/'),
        t((t.s = 3));
})([
    function(e, n) {
        function t(n) {
            return (
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? (e.exports = t = function(e) {
                          return typeof e;
                      })
                    : (e.exports = t = function(e) {
                          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                              ? 'symbol'
                              : typeof e;
                      }),
                t(n)
            );
        }
        e.exports = t;
    },
    function(e, n) {
        e.exports = function(e, n) {
            if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
        };
    },
    function(e, n) {
        function t(e, n) {
            for (var t = 0; t < n.length; t++) {
                var r = n[t];
                (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    'value' in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
            }
        }
        e.exports = function(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
        };
    },
    function(e, n, t) {
        'use strict';
        t.r(n);
        var r = t(0),
            o = t.n(r),
            u = t(1),
            i = t.n(u),
            c = t(2),
            a = t.n(c),
            f = (function() {
                function e() {
                    var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    i()(this, e);
                    var t = n.target;
                    this.target = t;
                }
                return (
                    a()(e, [
                        {
                            key: 'log',
                            value: function() {
                                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                this.render(n, 'log');
                            },
                        },
                        {
                            key: 'info',
                            value: function() {
                                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                this.render(n, 'info');
                            },
                        },
                        {
                            key: 'render',
                            value: function(e, n) {
                                var t = e
                                        .map(function(e) {
                                            switch (o()(e)) {
                                                case 'object':
                                                    return Array.isArray(e)
                                                        ? JSON.stringify(e, null, 0).replace(/,/gi, ', ')
                                                        : JSON.stringify(e, null, 0);
                                                default:
                                                    return e;
                                            }
                                        })
                                        .join(' '),
                                    r = document.createElement('pre');
                                (r.className = n), (r.innerHTML = '<code>'.concat(t, '</code>')), this.target.append(r);
                            },
                        },
                    ]),
                    e
                );
            })();
        function l(e) {
            var n = document.querySelector(e) || document.body;
            return new f({ target: n });
        }
        t.d(n, 'consoleFactory', function() {
            return l;
        });
        var y = { consoleFactory: l };
        window.WebConsole = y;
    },
]);
//# sourceMappingURL=index.js.map
