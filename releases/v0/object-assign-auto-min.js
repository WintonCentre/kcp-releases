! function r(e, t, n) {
    function o(u, f) { if (!t[u]) { if (!e[u]) { var c = "function" == typeof require && require; if (!f && c) return c(u, !0); if (i) return i(u, !0); var a = new Error("Cannot find module '" + u + "'"); throw a.code = "MODULE_NOT_FOUND", a } var l = t[u] = { exports: {} };
            e[u][0].call(l.exports, function(r) { var t = e[u][1][r]; return o(t ? t : r) }, l, l.exports, r, e, t, n) } return t[u].exports } for (var i = "function" == typeof require && require, u = 0; u < n.length; u++) o(n[u]); return o }({ 1: [function(r, e, t) { "use strict";
        r("./index").polyfill() }, { "./index": 2 }], 2: [function(r, e, t) { "use strict";

        function n(r, e) { if (void 0 === r || null === r) throw new TypeError("Cannot convert first argument to object"); for (var t = Object(r), n = 1; n < arguments.length; n++) { var o = arguments[n]; if (void 0 !== o && null !== o)
                    for (var i = Object.keys(Object(o)), u = 0, f = i.length; u < f; u++) { var c = i[u],
                            a = Object.getOwnPropertyDescriptor(o, c);
                        void 0 !== a && a.enumerable && (t[c] = o[c]) } } return t }

        function o() { Object.assign || Object.defineProperty(Object, "assign", { enumerable: !1, configurable: !0, writable: !0, value: n }) }
        e.exports = { assign: n, polyfill: o } }, {}] }, {}, [1]);