/*!
 * OverlayScrollbars
 * Version: 2.0.0-beta.0
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */

var OverlayScrollbars = function(r) {
  "use strict";
  function each(r, a) {
    if (g(r)) {
      for (var e = 0; e < r.length; e++) {
        if (false === a(r[e], e, r)) {
          break;
        }
      }
    } else if (r) {
      each(Object.keys(r), (function(e) {
        return a(r[e], e, r);
      }));
    }
    return r;
  }
  function style(r, a) {
    var e = l(a);
    var n = d(a) || e;
    if (n) {
      var t = e ? "" : {};
      if (r) {
        var v = window.getComputedStyle(r, null);
        t = e ? Pr(r, v, a) : a.reduce((function(a, e) {
          a[e] = Pr(r, v, e);
          return a;
        }), t);
      }
      return t;
    }
    r && each(E(a), (function(e) {
      return zr(r, e, a[e]);
    }));
  }
  function getDefaultExportFromCjs(r) {
    return r && r.v && Object.prototype.hasOwnProperty.call(r, "default") ? r["default"] : r;
  }
  var a = function createCache(r, a) {
    var e = r.o, n = r.u, t = r.g;
    var v = e;
    var i;
    var o = function cacheUpdateContextual(r, a) {
      var e = v;
      var o = r;
      var u = a || (n ? !n(e, o) : e !== o);
      if (u || t) {
        v = o;
        i = e;
      }
      return [ v, u, i ];
    };
    var u = function cacheUpdateIsolated(r) {
      return o(a(v, i), r);
    };
    var f = function getCurrentCache(r) {
      return [ v, !!r, i ];
    };
    return [ a ? u : o, f ];
  };
  var e = Node.ELEMENT_NODE;
  var n = Object.prototype, t = n.toString, v = n.hasOwnProperty;
  var i = function isUndefined(r) {
    return void 0 === r;
  };
  var o = function isNull(r) {
    return null === r;
  };
  var u = function type(r) {
    return i(r) || o(r) ? "" + r : t.call(r).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
  };
  var f = function isNumber(r) {
    return "number" === typeof r;
  };
  var l = function isString(r) {
    return "string" === typeof r;
  };
  var c = function isBoolean(r) {
    return "boolean" === typeof r;
  };
  var s = function isFunction(r) {
    return "function" === typeof r;
  };
  var d = function isArray(r) {
    return Array.isArray(r);
  };
  var h = function isObject(r) {
    return "object" === typeof r && !d(r) && !o(r);
  };
  var g = function isArrayLike(r) {
    var a = !!r && r.length;
    var e = f(a) && a > -1 && a % 1 == 0;
    return d(r) || !s(r) && e ? a > 0 && h(r) ? a - 1 in r : true : false;
  };
  var p = function isPlainObject(r) {
    if (!r || !h(r) || "object" !== u(r)) {
      return false;
    }
    var a;
    var e = "constructor";
    var n = r[e];
    var t = n && n.prototype;
    var o = v.call(r, e);
    var f = t && v.call(t, "isPrototypeOf");
    if (n && !o && !f) {
      return false;
    }
    for (a in r) {}
    return i(a) || v.call(r, a);
  };
  var w = function isHTMLElement(r) {
    var a = HTMLElement;
    return r ? a ? r instanceof a : r.nodeType === e : false;
  };
  var b = function isElement(r) {
    var a = Element;
    return r ? a ? r instanceof a : r.nodeType === e : false;
  };
  var m = function indexOf(r, a, e) {
    return r.indexOf(a, e);
  };
  var y = function push(r, a, e) {
    !e && !l(a) && g(a) ? Array.prototype.push.apply(r, a) : r.push(a);
    return r;
  };
  var S = function from(r) {
    var a = Array.from;
    var e = [];
    if (a && r) {
      return a(r);
    }
    if (r instanceof Set) {
      r.forEach((function(r) {
        y(e, r);
      }));
    } else {
      each(r, (function(r) {
        y(e, r);
      }));
    }
    return e;
  };
  var C = function isEmptyArray(r) {
    return !!r && 0 === r.length;
  };
  var O = function runEachAndClear(r, a, e) {
    var n = function runFn(r) {
      return r && r.apply(void 0, a || []);
    };
    each(r, n);
    !e && (r.length = 0);
  };
  var x = function hasOwnProperty(r, a) {
    return Object.prototype.hasOwnProperty.call(r, a);
  };
  var E = function keys(r) {
    return r ? Object.keys(r) : [];
  };
  var A = function assignDeep(r, a, e, n, t, v, i) {
    var u = [ a, e, n, t, v, i ];
    if (("object" !== typeof r || o(r)) && !s(r)) {
      r = {};
    }
    each(u, (function(a) {
      each(E(a), (function(e) {
        var n = a[e];
        if (r === n) {
          return true;
        }
        var t = d(n);
        if (n && (p(n) || t)) {
          var v = r[e];
          var i = v;
          if (t && !d(v)) {
            i = [];
          } else if (!t && !p(v)) {
            i = {};
          }
          r[e] = assignDeep(i, n);
        } else {
          r[e] = n;
        }
      }));
    }));
    return r;
  };
  var P = function isEmptyObject(r) {
    for (var a in r) {
      return false;
    }
    return true;
  };
  var z = function getSetProp(r, a, e, n) {
    if (i(n)) {
      return e ? e[r] : a;
    }
    e && (l(n) || f(n)) && (e[r] = n);
  };
  var L = function attr(r, a, e) {
    if (i(e)) {
      return r ? r.getAttribute(a) : null;
    }
    r && r.setAttribute(a, e);
  };
  var T = function attrClass(r, a, e, n) {
    if (e) {
      var t = L(r, a) || "";
      var v = new Set(t.split(" "));
      v[n ? "add" : "delete"](e);
      L(r, a, S(v).join(" ").trim());
    }
  };
  var H = function hasAttrClass(r, a, e) {
    var n = L(r, a) || "";
    var t = new Set(n.split(" "));
    return t.has(e);
  };
  var D = function removeAttr(r, a) {
    r && r.removeAttribute(a);
  };
  var M = function scrollLeft(r, a) {
    return z("scrollLeft", 0, r, a);
  };
  var R = function scrollTop(r, a) {
    return z("scrollTop", 0, r, a);
  };
  var I = Element.prototype;
  var V = function find(r, a) {
    var e = [];
    var n = a ? b(a) ? a : null : document;
    return n ? y(e, n.querySelectorAll(r)) : e;
  };
  var k = function findFirst(r, a) {
    var e = a ? b(a) ? a : null : document;
    return e ? e.querySelector(r) : null;
  };
  var j = function is(r, a) {
    if (b(r)) {
      var e = I.matches || I.msMatchesSelector;
      return e.call(r, a);
    }
    return false;
  };
  var B = function contents(r) {
    return r ? S(r.childNodes) : [];
  };
  var F = function parent(r) {
    return r ? r.parentElement : null;
  };
  var q = function closest(r, a) {
    if (b(r)) {
      var e = I.closest;
      if (e) {
        return e.call(r, a);
      }
      do {
        if (j(r, a)) {
          return r;
        }
        r = F(r);
      } while (r);
    }
    return null;
  };
  var U = function liesBetween(r, a, e) {
    var n = r && q(r, a);
    var t = r && k(e, n);
    var v = q(t, a) === n;
    return n && t ? n === r || t === r || v && q(q(r, e), a) !== n : false;
  };
  var N = function before(r, a, e) {
    if (e && r) {
      var n = a;
      var t;
      if (g(e)) {
        t = document.createDocumentFragment();
        each(e, (function(r) {
          if (r === n) {
            n = r.previousSibling;
          }
          t.appendChild(r);
        }));
      } else {
        t = e;
      }
      if (a) {
        if (!n) {
          n = r.firstChild;
        } else if (n !== a) {
          n = n.nextSibling;
        }
      }
      r.insertBefore(t, n || null);
    }
  };
  var Y = function appendChildren(r, a) {
    N(r, null, a);
  };
  var W = function insertBefore(r, a) {
    N(F(r), r, a);
  };
  var G = function insertAfter(r, a) {
    N(F(r), r && r.nextSibling, a);
  };
  var X = function removeElements(r) {
    if (g(r)) {
      each(S(r), (function(r) {
        return removeElements(r);
      }));
    } else if (r) {
      var a = F(r);
      if (a) {
        a.removeChild(r);
      }
    }
  };
  var Z = function createDiv(r) {
    var a = document.createElement("div");
    if (r) {
      L(a, "class", r);
    }
    return a;
  };
  var $ = function createDOM(r) {
    var a = Z();
    a.innerHTML = r.trim();
    return each(B(a), (function(r) {
      return X(r);
    }));
  };
  var J = function firstLetterToUpper(r) {
    return r.charAt(0).toUpperCase() + r.slice(1);
  };
  var K = function getDummyStyle() {
    return Z().style;
  };
  var Q = [ "-webkit-", "-moz-", "-o-", "-ms-" ];
  var rr = [ "WebKit", "Moz", "O", "MS", "webkit", "moz", "o", "ms" ];
  var ar = {};
  var er = {};
  var nr = function cssProperty(r) {
    var a = er[r];
    if (x(er, r)) {
      return a;
    }
    var e = J(r);
    var n = K();
    each(Q, (function(t) {
      var v = t.replace(/-/g, "");
      var i = [ r, t + r, v + e, J(v) + e ];
      return !(a = i.find((function(r) {
        return void 0 !== n[r];
      })));
    }));
    return er[r] = a || "";
  };
  var tr = function jsAPI(r) {
    var a = ar[r] || window[r];
    if (x(ar, r)) {
      return a;
    }
    each(rr, (function(e) {
      a = a || window[e + J(r)];
      return !a;
    }));
    ar[r] = a;
    return a;
  };
  var vr = tr("MutationObserver");
  var ir = tr("IntersectionObserver");
  var or = tr("ResizeObserver");
  var ur = tr("cancelAnimationFrame");
  var fr = tr("requestAnimationFrame");
  var lr = window.setTimeout;
  var cr = window.clearTimeout;
  var sr = /[^\x20\t\r\n\f]+/g;
  var dr = function classListAction(r, a, e) {
    var n = r && r.classList;
    var t;
    var v = 0;
    var i = false;
    if (n && a && l(a)) {
      var o = a.match(sr) || [];
      i = o.length > 0;
      while (t = o[v++]) {
        i = !!e(n, t) && i;
      }
    }
    return i;
  };
  var hr = function hasClass(r, a) {
    return dr(r, a, (function(r, a) {
      return r.contains(a);
    }));
  };
  var gr = function removeClass(r, a) {
    dr(r, a, (function(r, a) {
      return r.remove(a);
    }));
  };
  var pr = function addClass(r, a) {
    dr(r, a, (function(r, a) {
      return r.add(a);
    }));
    return gr.bind(0, r, a);
  };
  var _r = function equal(r, a, e, n) {
    if (r && a) {
      var t = true;
      each(e, (function(e) {
        var v = n ? n(r[e]) : r[e];
        var i = n ? n(a[e]) : a[e];
        if (v !== i) {
          t = false;
        }
      }));
      return t;
    }
    return false;
  };
  var wr = function equalWH(r, a) {
    return _r(r, a, [ "w", "h" ]);
  };
  var br = function equalXY(r, a) {
    return _r(r, a, [ "x", "y" ]);
  };
  var mr = function equalTRBL(r, a) {
    return _r(r, a, [ "t", "r", "b", "l" ]);
  };
  var yr = function equalBCRWH(r, a, e) {
    return _r(r, a, [ "width", "height" ], e && function(r) {
      return Math.round(r);
    });
  };
  var Sr = function noop() {};
  var Cr = function selfCancelTimeout(r) {
    var a;
    var e = r ? lr : fr;
    var n = r ? cr : ur;
    return [ function(t) {
      n(a);
      a = e(t, s(r) ? r() : r);
    }, function() {
      return n(a);
    } ];
  };
  var Or = function debounce(r, a) {
    var e;
    var n;
    var t;
    var v = Sr;
    var i = a || {}, o = i.p, u = i._, l = i.m;
    var c = function invokeFunctionToDebounce(a) {
      v();
      cr(e);
      e = n = void 0;
      v = Sr;
      r.apply(this, a);
    };
    var d = function mergeParms(r) {
      return l && n ? l(n, r) : r;
    };
    var h = function flush() {
      if (v !== Sr) {
        c(d(t) || t);
      }
    };
    var g = function debouncedFn() {
      var r = S(arguments);
      var a = s(o) ? o() : o;
      var i = f(a) && a >= 0;
      if (i) {
        var l = s(u) ? u() : u;
        var g = f(l) && l >= 0;
        var p = a > 0 ? lr : fr;
        var w = a > 0 ? cr : ur;
        var b = d(r);
        var m = b || r;
        var y = c.bind(0, m);
        v();
        var C = p(y, a);
        v = function clear() {
          return w(C);
        };
        if (g && !e) {
          e = lr(h, l);
        }
        n = t = m;
      } else {
        c(r);
      }
    };
    g.S = h;
    return g;
  };
  var xr = {
    opacity: 1,
    zindex: 1
  };
  var Er = function parseToZeroOrNumber(r, a) {
    var e = a ? parseFloat(r) : parseInt(r, 10);
    return e === e ? e : 0;
  };
  var Ar = function adaptCSSVal(r, a) {
    return !xr[r.toLowerCase()] && f(a) ? a + "px" : a;
  };
  var Pr = function getCSSVal(r, a, e) {
    return null != a ? a[e] || a.getPropertyValue(e) : r.style[e];
  };
  var zr = function setCSSVal(r, a, e) {
    try {
      var n = r.style;
      if (!i(n[a])) {
        n[a] = Ar(a, e);
      } else {
        n.setProperty(a, e);
      }
    } catch (t) {}
  };
  var Lr = function directionIsRTL(r) {
    return "rtl" === style(r, "direction");
  };
  var Tr = function topRightBottomLeft(r, a, e) {
    var n = a ? a + "-" : "";
    var t = e ? "-" + e : "";
    var v = n + "top" + t;
    var i = n + "right" + t;
    var o = n + "bottom" + t;
    var u = n + "left" + t;
    var f = style(r, [ v, i, o, u ]);
    return {
      t: Er(f[v]),
      r: Er(f[i]),
      b: Er(f[o]),
      l: Er(f[u])
    };
  };
  var Hr = Math.round;
  var Dr = {
    w: 0,
    h: 0
  };
  var Mr = function windowSize() {
    return {
      w: window.innerWidth,
      h: window.innerHeight
    };
  };
  var Rr = function offsetSize(r) {
    return r ? {
      w: r.offsetWidth,
      h: r.offsetHeight
    } : Dr;
  };
  var Ir = function clientSize(r) {
    return r ? {
      w: r.clientWidth,
      h: r.clientHeight
    } : Dr;
  };
  var Vr = function scrollSize(r) {
    return r ? {
      w: r.scrollWidth,
      h: r.scrollHeight
    } : Dr;
  };
  var kr = function fractionalSize(r) {
    var a = parseFloat(style(r, "height")) || 0;
    var e = parseFloat(style(r, "width")) || 0;
    return {
      w: e - Hr(e),
      h: a - Hr(a)
    };
  };
  var jr = function getBoundingClientRect(r) {
    return r.getBoundingClientRect();
  };
  var Br;
  var Fr = function supportPassiveEvents() {
    if (i(Br)) {
      Br = false;
      try {
        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
          get: function get() {
            Br = true;
          }
        }));
      } catch (r) {}
    }
    return Br;
  };
  var qr = function splitEventNames(r) {
    return r.split(" ");
  };
  var Ur = function off(r, a, e, n) {
    each(qr(a), (function(a) {
      r.removeEventListener(a, e, n);
    }));
  };
  var Nr = function on(r, a, e, n) {
    var t;
    var v = Fr();
    var i = null != (t = v && n && n.C) ? t : v;
    var o = n && n.O || false;
    var u = n && n.A || false;
    var f = [];
    var l = v ? {
      passive: i,
      capture: o
    } : o;
    each(qr(a), (function(a) {
      var n = u ? function(t) {
        r.removeEventListener(a, n, o);
        e && e(t);
      } : e;
      y(f, Ur.bind(null, r, a, n, o));
      r.addEventListener(a, n, l);
    }));
    return O.bind(0, f);
  };
  var Yr = function stopPropagation(r) {
    return r.stopPropagation();
  };
  var Wr = function preventDefault(r) {
    return r.preventDefault();
  };
  var Gr = {
    x: 0,
    y: 0
  };
  var Xr = function absoluteCoordinates(r) {
    var a = r ? jr(r) : 0;
    return a ? {
      x: a.left + window.pageYOffset,
      y: a.top + window.pageXOffset
    } : Gr;
  };
  var Zr = function manageListener(r, a) {
    each(d(a) ? a : [ a ], r);
  };
  var $r = function createEventListenerHub(r) {
    var a = new Map;
    var e = function removeEvent(r, e) {
      if (r) {
        var n = a.get(r);
        Zr((function(r) {
          if (n) {
            n[r ? "delete" : "clear"](r);
          }
        }), e);
      } else {
        a.forEach((function(r) {
          r.clear();
        }));
        a.clear();
      }
    };
    var n = function addEvent(r, n) {
      var t = a.get(r) || new Set;
      a.set(r, t);
      Zr((function(r) {
        r && t.add(r);
      }), n);
      return e.bind(0, r, n);
    };
    var t = function triggerEvent(r, e) {
      var n = a.get(r);
      each(S(n), (function(r) {
        if (e && !C(e)) {
          r.apply(0, e);
        } else {
          r();
        }
      }));
    };
    var v = E(r);
    each(v, (function(a) {
      n(a, r[a]);
    }));
    return [ n, e, t ];
  };
  var Jr = function opsStringify(r) {
    return JSON.stringify(r, (function(r, a) {
      if (s(a)) {
        throw new Error;
      }
      return a;
    }));
  };
  var Kr = {
    paddingAbsolute: false,
    showNativeOverlaidScrollbars: false,
    update: {
      elementEvents: [ [ "img", "load" ] ],
      debounce: [ 0, 33 ],
      attributes: null,
      ignoreMutation: null
    },
    overflow: {
      x: "scroll",
      y: "scroll"
    },
    scrollbars: {
      theme: "os-theme-dark",
      visibility: "auto",
      autoHide: "never",
      autoHideDelay: 1300,
      dragScroll: true,
      clickScroll: false,
      pointers: [ "mouse", "touch", "pen" ]
    }
  };
  var Qr = function getOptionsDiff(r, a) {
    var e = {};
    var n = E(a).concat(E(r));
    each(n, (function(n) {
      var t = r[n];
      var v = a[n];
      if (h(t) && h(v)) {
        A(e[n] = {}, getOptionsDiff(t, v));
      } else if (x(a, n) && v !== t) {
        var i = true;
        if (d(t) || d(v)) {
          try {
            if (Jr(t) === Jr(v)) {
              i = false;
            }
          } catch (o) {}
        }
        if (i) {
          e[n] = v;
        }
      }
    }));
    return e;
  };
  var ra = "os-environment";
  var aa = ra + "-flexbox-glue";
  var ea = aa + "-max";
  var na = "data-overlayscrollbars";
  var ta = na + "-overflow-x";
  var va = na + "-overflow-y";
  var ia = "overflowVisible";
  var oa = "scrollbarHidden";
  var ua = "updating";
  var fa = "os-padding";
  var la = "os-viewport";
  var ca = la + "-arrange";
  var sa = "os-content";
  var da = la + "-scrollbar-hidden";
  var ha = "os-overflow-visible";
  var ga = "os-size-observer";
  var pa = ga + "-appear";
  var _a = ga + "-listener";
  var wa = _a + "-scroll";
  var ba = _a + "-item";
  var ma = ba + "-final";
  var ya = "os-trinsic-observer";
  var Sa = "os-scrollbar";
  var Ca = Sa + "-rtl";
  var Oa = Sa + "-horizontal";
  var xa = Sa + "-vertical";
  var Ea = Sa + "-track";
  var Aa = Sa + "-handle";
  var Pa = Sa + "-visible";
  var za = Sa + "-cornerless";
  var La = Sa + "-transitionless";
  var Ta = Sa + "-interaction";
  var Ha = Sa + "-unusable";
  var Da = Sa + "-auto-hidden";
  var Ma = Sa + "-wheel";
  var Ra = Ea + "-interactive";
  var Ia = Aa + "-interactive";
  var Va = {};
  var ka = function getPlugins() {
    return Va;
  };
  var ja = function addPlugin(r) {
    each(d(r) ? r : [ r ], (function(r) {
      var a = E(r)[0];
      Va[a] = r[a];
    }));
  };
  var Ba = {
    exports: {}
  };
  (function(r) {
    function _extends() {
      r.exports = _extends = Object.assign ? Object.assign.bind() : function(r) {
        for (var a = 1; a < arguments.length; a++) {
          var e = arguments[a];
          for (var n in e) {
            if (Object.prototype.hasOwnProperty.call(e, n)) {
              r[n] = e[n];
            }
          }
        }
        return r;
      }, r.exports.v = true, r.exports["default"] = r.exports;
      return _extends.apply(this, arguments);
    }
    r.exports = _extends, r.exports.v = true, r.exports["default"] = r.exports;
  })(Ba);
  var Fa = getDefaultExportFromCjs(Ba.exports);
  var qa = {
    boolean: "__TPL_boolean_TYPE__",
    number: "__TPL_number_TYPE__",
    string: "__TPL_string_TYPE__",
    array: "__TPL_array_TYPE__",
    object: "__TPL_object_TYPE__",
    function: "__TPL_function_TYPE__",
    null: "__TPL_null_TYPE__"
  };
  var Ua = function validateRecursive(r, a, e, n) {
    var t = {};
    var v = Fa({}, a);
    var o = E(r).filter((function(r) {
      return x(a, r);
    }));
    each(o, (function(o) {
      var f = a[o];
      var c = r[o];
      var s = p(c);
      var h = n ? n + "." : "";
      if (s && p(f)) {
        var g = validateRecursive(c, f, e, h + o), w = g[0], b = g[1];
        t[o] = w;
        v[o] = b;
        each([ v, t ], (function(r) {
          if (P(r[o])) {
            delete r[o];
          }
        }));
      } else if (!s) {
        var m = false;
        var S = [];
        var C = [];
        var O = u(f);
        var x = !d(c) ? [ c ] : c;
        each(x, (function(r) {
          var a;
          each(qa, (function(e, n) {
            if (e === r) {
              a = n;
            }
          }));
          var e = i(a);
          if (e && l(f)) {
            var n = r.split(" ");
            m = !!n.find((function(r) {
              return r === f;
            }));
            y(S, n);
          } else {
            m = qa[O] === r;
          }
          y(C, e ? qa.string : a);
          return !m;
        }));
        if (m) {
          t[o] = f;
        } else if (e) {
          console.warn('The option "' + h + o + "\" wasn't set, because it doesn't accept the type [ " + O.toUpperCase() + ' ] with the value of "' + f + '".\r\n' + "Accepted types are: [ " + C.join(", ").toUpperCase() + " ].\r\n" + (S.length > 0 ? "\r\nValid strings are: [ " + S.join(", ") + " ]." : ""));
        }
        delete v[o];
      }
    }));
    return [ t, v ];
  };
  var Na = function validateOptions(r, a, e) {
    return Ua(r, a, e);
  };
  var Ya;
  var Wa = qa.number;
  var Ga = qa.boolean;
  var Xa = [ qa.array, qa.null ];
  var Za = "hidden scroll visible visible-hidden";
  var $a = "visible hidden auto";
  var Ja = "never scroll leavemove";
  var Ka = {
    paddingAbsolute: Ga,
    showNativeOverlaidScrollbars: Ga,
    update: {
      elementEvents: Xa,
      attributes: Xa,
      debounce: [ qa.number, qa.array, qa.null ],
      ignoreMutation: [ qa.function, qa.null ]
    },
    overflow: {
      x: Za,
      y: Za
    },
    scrollbars: {
      theme: [ qa.string, qa.null ],
      visibility: $a,
      autoHide: Ja,
      autoHideDelay: Wa,
      dragScroll: Ga,
      clickScroll: Ga,
      pointers: [ qa.array, qa.null ]
    }
  };
  var Qa = "__osOptionsValidationPlugin";
  Ya = {}, Ya[Qa] = {
    P: function _(r, a) {
      var e = Na(Ka, r, a), n = e[0], t = e[1];
      return Fa({}, t, n);
    }
  }, Ya;
  var re;
  var ae = 3333333;
  var ee = "scroll";
  var ne = "__osSizeObserverPlugin";
  var te = (re = {}, re[ne] = {
    P: function _(r, a, e) {
      var n = $('<div class="' + ba + '" dir="ltr"><div class="' + ba + '"><div class="' + ma + '"></div></div><div class="' + ba + '"><div class="' + ma + '" style="width: 200%; height: 200%"></div></div></div>');
      Y(r, n);
      pr(r, wa);
      var t = n[0];
      var v = t.lastChild;
      var i = t.firstChild;
      var o = null == i ? void 0 : i.firstChild;
      var u = Rr(t);
      var f = u;
      var l = false;
      var c;
      var s = function reset() {
        M(i, ae);
        R(i, ae);
        M(v, ae);
        R(v, ae);
      };
      var d = function onResized(r) {
        c = 0;
        if (l) {
          u = f;
          a(true === r);
        }
      };
      var h = function onScroll(r) {
        f = Rr(t);
        l = !r || !wr(f, u);
        if (r) {
          Yr(r);
          if (l && !c) {
            ur(c);
            c = fr(d);
          }
        } else {
          d(false === r);
        }
        s();
      };
      var g = y([], [ Nr(i, ee, h), Nr(v, ee, h) ]);
      style(o, {
        width: ae,
        height: ae
      });
      fr(s);
      return [ e ? h.bind(0, false) : s, g ];
    }
  }, re);
  var ve;
  var ie = 0;
  var oe = Math.round, ue = Math.abs;
  var fe = function getWindowDPR() {
    var r = window.screen.deviceXDPI || 0;
    var a = window.screen.logicalXDPI || 1;
    return window.devicePixelRatio || r / a;
  };
  var le = function diffBiggerThanOne(r, a) {
    var e = ue(r);
    var n = ue(a);
    return !(e === n || e + 1 === n || e - 1 === n);
  };
  var ce = "__osScrollbarsHidingPlugin";
  var se = (ve = {}, ve[ce] = {
    L: function _createUniqueViewportArrangeElement(r) {
      var a = r.T, e = r.H, n = r.D;
      var t = !n && !a && (e.x || e.y);
      var v = t ? document.createElement("style") : false;
      if (v) {
        L(v, "id", ca + "-" + ie);
        ie++;
      }
      return v;
    },
    M: function _overflowUpdateSegment(r, a, e, n, t, v, i) {
      var o = function arrangeViewport(a, v, i, o) {
        if (r) {
          var u = t(), f = u.R;
          var l = a.I, c = a.V;
          var s = c.x, d = c.y;
          var h = l.x, g = l.y;
          var p = o ? "paddingRight" : "paddingLeft";
          var w = f[p];
          var b = f.paddingTop;
          var m = v.w + i.w;
          var y = v.h + i.h;
          var S = {
            w: g && d ? g + m - w + "px" : "",
            h: h && s ? h + y - b + "px" : ""
          };
          if (n) {
            var C = n.sheet;
            if (C) {
              var O = C.cssRules;
              if (O) {
                if (!O.length) {
                  C.insertRule("#" + L(n, "id") + " + ." + ca + "::before {}", 0);
                }
                var x = O[0].style;
                x.width = S.w;
                x.height = S.h;
              }
            }
          } else {
            style(e, {
              "--os-vaw": S.w,
              "--os-vah": S.h
            });
          }
        }
        return r;
      };
      var u = function undoViewportArrange(n, o, u) {
        if (r) {
          var f = u || v(n);
          var l = t(), c = l.R;
          var s = f.V;
          var d = s.x, h = s.y;
          var g = {};
          var p = function assignProps(r) {
            return each(r.split(" "), (function(r) {
              g[r] = c[r];
            }));
          };
          if (d) {
            p("marginBottom paddingTop paddingBottom");
          }
          if (h) {
            p("marginLeft marginRight paddingLeft paddingRight");
          }
          var w = style(e, E(g));
          gr(e, ca);
          if (!a) {
            g.height = "";
          }
          style(e, g);
          return [ function() {
            i(f, o, r, w);
            style(e, w);
            pr(e, ca);
          }, f ];
        }
        return [ Sr ];
      };
      return [ o, u ];
    },
    k: function _envWindowZoom() {
      var r = {
        w: 0,
        h: 0
      };
      var a = 0;
      return function(e, n, t) {
        var v = Mr();
        var i = {
          w: v.w - r.w,
          h: v.h - r.h
        };
        if (0 === i.w && 0 === i.h) {
          return;
        }
        var o = {
          w: ue(i.w),
          h: ue(i.h)
        };
        var u = {
          w: ue(oe(v.w / (r.w / 100))),
          h: ue(oe(v.h / (r.h / 100)))
        };
        var f = fe();
        var l = o.w > 2 && o.h > 2;
        var c = !le(u.w, u.h);
        var s = f !== a && f > 0;
        var d = l && c && s;
        if (d) {
          var h = n(), g = h[0], p = h[1];
          A(e.j, g);
          if (p) {
            t();
          }
        }
        r = v;
        a = f;
      };
    }
  }, ve);
  var de;
  var he = function getNativeScrollbarSize(r, a, e, n) {
    Y(r, a);
    var t = Ir(a);
    var v = Rr(a);
    var i = kr(e);
    n && X(a);
    return {
      x: v.h - t.h + i.h,
      y: v.w - t.w + i.w
    };
  };
  var ge = function getNativeScrollbarsHiding(r) {
    var a = false;
    var e = pr(r, da);
    try {
      a = "none" === style(r, nr("scrollbar-width")) || "none" === window.getComputedStyle(r, "::-webkit-scrollbar").getPropertyValue("display");
    } catch (n) {}
    e();
    return a;
  };
  var pe = function getRtlScrollBehavior(r, a) {
    var e = "hidden";
    style(r, {
      overflowX: e,
      overflowY: e,
      direction: "rtl"
    });
    M(r, 0);
    var n = Xr(r);
    var t = Xr(a);
    M(r, -999);
    var v = Xr(a);
    return {
      i: n.x === t.x,
      n: t.x !== v.x
    };
  };
  var _e = function getFlexboxGlue(r, a) {
    var e = pr(r, aa);
    var n = jr(r);
    var t = jr(a);
    var v = yr(t, n, true);
    var i = pr(r, ea);
    var o = jr(r);
    var u = jr(a);
    var f = yr(u, o, true);
    e();
    i();
    return v && f;
  };
  var we = function createEnvironment() {
    var r = document, e = r.body;
    var n = $('<div class="' + ra + '"><div></div></div>');
    var t = n[0];
    var v = t.firstChild;
    var i = $r(), o = i[0], u = i[2];
    var f = a({
      o: he(e, t, v),
      u: br
    }, he.bind(0, e, t, v, true)), l = f[0], c = f[1];
    var s = c(), d = s[0];
    var h = ge(t);
    var g = {
      x: 0 === d.x,
      y: 0 === d.y
    };
    var p = {
      elements: {
        host: null,
        padding: !h,
        viewport: function viewport(r) {
          return h && r === r.ownerDocument.body && r;
        },
        content: false
      },
      scrollbars: {
        slot: true
      },
      cancel: {
        nativeScrollbarsOverlaid: false,
        body: null
      }
    };
    var w = A({}, Kr);
    var b = {
      j: d,
      H: g,
      T: h,
      D: "-1" === style(t, "zIndex"),
      B: pe(t, v),
      F: _e(t, v),
      q: function _addListener(r) {
        return o("_", r);
      },
      U: A.bind(0, {}, p),
      N: function _setDefaultInitialization(r) {
        A(p, r);
      },
      Y: A.bind(0, {}, w),
      W: function _setDefaultOptions(r) {
        A(w, r);
      },
      G: A({}, p),
      X: A({}, w)
    };
    D(t, "style");
    X(t);
    if (!h && (!g.x || !g.y)) {
      var m;
      window.addEventListener("resize", (function() {
        var r = ka()[ce];
        m = m || r && r.k();
        m && m(b, l, u.bind(0, "_"));
      }));
    }
    return b;
  };
  var be = function getEnvironment() {
    if (!de) {
      de = we();
    }
    return de;
  };
  var me = function resolveInitialization(r, a) {
    return s(r) ? r.apply(0, a) : r;
  };
  var ye = function staticInitializationElement(r, a, e, n) {
    var t = i(n) ? e : n;
    var v = me(t, r);
    return v || a();
  };
  var Se = function dynamicInitializationElement(r, a, e, n) {
    var t = i(n) ? e : n;
    var v = me(t, r);
    return !!v && (w(v) ? v : a());
  };
  var Ce = function cancelInitialization(r, a) {
    var e = r || {}, n = e.nativeScrollbarsOverlaid, t = e.body;
    var v = a.Z;
    var u = be(), f = u.U, l = u.H, c = u.T;
    var s = f().cancel, d = s.nativeScrollbarsOverlaid, h = s.body;
    var g = null != n ? n : d;
    var p = i(t) ? h : t;
    var w = (l.x || l.y) && g;
    var b = v && (o(p) ? !c : p);
    return !!w || !!b;
  };
  var Oe = new WeakMap;
  var xe = function addInstance(r, a) {
    Oe.set(r, a);
  };
  var Ee = function removeInstance(r) {
    Oe.delete(r);
  };
  var Ae = function getInstance(r) {
    return Oe.get(r);
  };
  var Pe = function getPropByPath(r, a) {
    return r ? a.split(".").reduce((function(r, a) {
      return r && x(r, a) ? r[a] : void 0;
    }), r) : void 0;
  };
  var ze = function createOptionCheck(r, a, e) {
    return function(n) {
      return [ Pe(r, n), e || void 0 !== Pe(a, n) ];
    };
  };
  var Le = function createState(r) {
    var a = r;
    return [ function() {
      return a;
    }, function(r) {
      a = A({}, a, r);
    } ];
  };
  var Te = "tabindex";
  var He = Z.bind(0, "");
  var De = function unwrap(r) {
    Y(F(r), B(r));
    X(r);
  };
  var Me = function addDataAttrHost(r, a) {
    L(r, na, a);
    return D.bind(0, r, na);
  };
  var Re = function createStructureSetupElements(r) {
    var a = be();
    var e = a.U, n = a.T;
    var t = ka()[ce];
    var v = t && t.L;
    var i = e(), o = i.elements;
    var u = o.host, f = o.viewport, l = o.padding, c = o.content;
    var s = w(r);
    var d = s ? {} : r;
    var h = d.elements;
    var g = h || {}, p = g.host, b = g.padding, S = g.viewport, C = g.content;
    var x = s ? r : d.target;
    var A = j(x, "textarea");
    var P = x.ownerDocument;
    var z = x === P.body;
    var M = P.defaultView;
    var R = ye.bind(0, [ x ]);
    var I = Se.bind(0, [ x ]);
    var V = R(He, f, S);
    var k = V === x;
    var q = k && z;
    var U = P.activeElement;
    var N = !k && M.top === M && U === x;
    var Z = {
      $: x,
      J: A ? R(He, u, p) : x,
      K: V,
      rr: !k && I(He, l, b),
      ar: !k && I(He, c, C),
      er: !k && !n && v && v(a),
      nr: q ? P.documentElement : V,
      tr: q ? P : V,
      vr: M,
      ir: P,
      ur: A,
      Z: z,
      lr: s,
      cr: k,
      sr: function _viewportHasClass(r, a) {
        return k ? H(V, na, a) : hr(V, r);
      },
      dr: function _viewportAddRemoveClass(r, a, e) {
        return k ? T(V, na, a, e) : (e ? pr : gr)(V, r);
      }
    };
    var $ = E(Z).reduce((function(r, a) {
      var e = Z[a];
      return y(r, e && !F(e) ? e : false);
    }), []);
    var J = function elementIsGenerated(r) {
      return r ? m($, r) > -1 : null;
    };
    var K = Z.$, Q = Z.J, rr = Z.rr, ar = Z.K, er = Z.ar, nr = Z.er;
    var tr = [];
    var vr = A && J(Q);
    var ir = A ? K : B([ er, ar, rr, Q, K ].find((function(r) {
      return false === J(r);
    })));
    var or = er || ar;
    var ur = function appendElements() {
      var r = Me(Q, k ? "viewport" : "host");
      var a = pr(rr, fa);
      var e = pr(ar, !k && la);
      var t = pr(er, sa);
      var v = z ? pr(F(x), da) : Sr;
      if (vr) {
        G(K, Q);
        y(tr, (function() {
          G(Q, K);
          X(Q);
        }));
      }
      Y(or, ir);
      Y(Q, rr);
      Y(rr || Q, !k && ar);
      Y(ar, er);
      y(tr, (function() {
        v();
        r();
        D(ar, ta);
        D(ar, va);
        if (J(er)) {
          De(er);
        }
        if (J(ar)) {
          De(ar);
        }
        if (J(rr)) {
          De(rr);
        }
        a();
        e();
        t();
      }));
      if (n && !k) {
        y(tr, gr.bind(0, ar, da));
      }
      if (nr) {
        W(ar, nr);
        y(tr, X.bind(0, nr));
      }
      if (N) {
        var i = L(ar, Te);
        L(ar, Te, "-1");
        ar.focus();
        var o = Nr(P, "pointerdown keydown", (function() {
          i ? L(ar, Te, i) : D(ar, Te);
          o();
        }));
      } else if (U && U.focus) {
        U.focus();
      }
      ir = 0;
    };
    return [ Z, ur, O.bind(0, tr) ];
  };
  var Ie = function createTrinsicUpdateSegment(r, a) {
    var e = r.ar;
    var n = a[0];
    return function(r) {
      var a = be(), t = a.F;
      var v = n(), i = v.hr;
      var o = r.gr;
      var u = (e || !t) && o;
      if (u) {
        style(e, {
          height: i ? "" : "100%"
        });
      }
      return {
        pr: u,
        _r: u
      };
    };
  };
  var Ve = function createPaddingUpdateSegment(r, e) {
    var n = e[0], t = e[1];
    var v = r.J, i = r.rr, o = r.K, u = r.cr;
    var f = a({
      u: mr,
      o: Tr()
    }, Tr.bind(0, v, "padding", "")), l = f[0], c = f[1];
    return function(r, a, e) {
      var v = c(e), f = v[0], s = v[1];
      var d = be(), h = d.T, g = d.F;
      var p = n(), w = p.wr;
      var b = r.pr, m = r._r, y = r.br;
      var S = a("paddingAbsolute"), C = S[0], O = S[1];
      var x = !g && m;
      if (b || s || x) {
        var E = l(e);
        f = E[0];
        s = E[1];
      }
      var P = !u && (O || y || s);
      if (P) {
        var z = !C || !i && !h;
        var L = f.r + f.l;
        var T = f.t + f.b;
        var H = {
          marginRight: z && !w ? -L : 0,
          marginBottom: z ? -T : 0,
          marginLeft: z && w ? -L : 0,
          top: z ? -f.t : 0,
          right: z ? w ? -f.r : "auto" : 0,
          left: z ? w ? "auto" : -f.l : 0,
          width: z ? "calc(100% + " + L + "px)" : ""
        };
        var D = {
          paddingTop: z ? f.t : 0,
          paddingRight: z ? f.r : 0,
          paddingBottom: z ? f.b : 0,
          paddingLeft: z ? f.l : 0
        };
        style(i || o, H);
        style(o, D);
        t({
          rr: f,
          mr: !z,
          R: i ? D : A({}, H, D)
        });
      }
      return {
        yr: P
      };
    };
  };
  var ke = Math.max;
  var je = ke.bind(0, 0);
  var Be = "visible";
  var Fe = "hidden";
  var qe = 42;
  var Ue = {
    u: wr,
    o: {
      w: 0,
      h: 0
    }
  };
  var Ne = {
    u: br,
    o: {
      x: Fe,
      y: Fe
    }
  };
  var Ye = function getOverflowAmount(r, a) {
    var e = window.devicePixelRatio % 1 !== 0 ? 1 : 0;
    var n = {
      w: je(r.w - a.w),
      h: je(r.h - a.h)
    };
    return {
      w: n.w > e ? n.w : 0,
      h: n.h > e ? n.h : 0
    };
  };
  var We = function conditionalClass(r, a, e) {
    return e ? pr(r, a) : gr(r, a);
  };
  var Ge = function overflowIsVisible(r) {
    return 0 === r.indexOf(Be);
  };
  var Xe = function createOverflowUpdateSegment(r, e) {
    var n = e[0], t = e[1];
    var v = r.J, i = r.rr, o = r.K, u = r.er, f = r.cr, l = r.dr, c = r.Z, s = r.vr;
    var d = be(), h = d.j, g = d.F, p = d.T, w = d.H;
    var b = ka()[ce];
    var m = !f && !p && (w.x || w.y);
    var y = c && f;
    var S = a(Ue, kr.bind(0, o)), C = S[0], O = S[1];
    var x = a(Ue, Vr.bind(0, o)), E = x[0], A = x[1];
    var P = a(Ue), z = P[0], H = P[1];
    var D = a(Ue), M = D[0], R = D[1];
    var I = a(Ne), V = I[0];
    var k = function fixFlexboxGlue(r, a) {
      style(o, {
        height: ""
      });
      if (a) {
        var e = n(), t = e.mr, i = e.rr;
        var u = r.Sr, f = r.I;
        var l = kr(v);
        var c = Ir(v);
        var s = "content-box" === style(o, "boxSizing");
        var d = t || s ? i.b + i.t : 0;
        var h = !(w.x && s);
        style(o, {
          height: c.h + l.h + (u.x && h ? f.x : 0) - d
        });
      }
    };
    var j = function getViewportOverflowState(r, a) {
      var e = !p && !r ? qe : 0;
      var n = function getStatePerAxis(r, n, t) {
        var v = style(o, r);
        var i = a ? a[r] : v;
        var u = "scroll" === i;
        var f = n ? e : t;
        var l = u && !p ? f : 0;
        var c = n && !!e;
        return [ v, u, l, c ];
      };
      var t = n("overflowX", w.x, h.x), v = t[0], i = t[1], u = t[2], f = t[3];
      var l = n("overflowY", w.y, h.y), c = l[0], s = l[1], d = l[2], g = l[3];
      return {
        Cr: {
          x: v,
          y: c
        },
        Sr: {
          x: i,
          y: s
        },
        I: {
          x: u,
          y: d
        },
        V: {
          x: f,
          y: g
        }
      };
    };
    var B = function setViewportOverflowState(r, a, e, n) {
      var t = function setAxisOverflowStyle(r, a) {
        var e = Ge(r);
        var n = a && e && r.replace(Be + "-", "") || "";
        return [ a && !e ? r : "", Ge(n) ? "hidden" : n ];
      };
      var v = t(e.x, a.x), i = v[0], o = v[1];
      var u = t(e.y, a.y), f = u[0], l = u[1];
      n.overflowX = o && f ? o : i;
      n.overflowY = l && i ? l : f;
      return j(r, n);
    };
    var F = function hideNativeScrollbars(r, a, e, t) {
      var v = r.I, i = r.V;
      var o = i.x, u = i.y;
      var f = v.x, l = v.y;
      var c = n(), s = c.R;
      var d = a ? "marginLeft" : "marginRight";
      var h = a ? "paddingLeft" : "paddingRight";
      var g = s[d];
      var p = s.marginBottom;
      var w = s[h];
      var b = s.paddingBottom;
      t.width = "calc(100% + " + (l + -1 * g) + "px)";
      t[d] = -l + g;
      t.marginBottom = -f + p;
      if (e) {
        t[h] = w + (u ? l : 0);
        t.paddingBottom = b + (o ? f : 0);
      }
    };
    var q = b ? b.M(m, g, o, u, n, j, F) : [ function() {
      return m;
    }, function() {
      return [ Sr ];
    } ], U = q[0], N = q[1];
    return function(r, a, e) {
      var u = r.pr, c = r.Or, d = r._r, h = r.yr, b = r.gr, m = r.br;
      var S = n(), x = S.hr, P = S.wr;
      var D = a("showNativeOverlaidScrollbars"), I = D[0], q = D[1];
      var Y = a("overflow"), W = Y[0], G = Y[1];
      var X = I && w.x && w.y;
      var Z = !f && !g && (u || d || c || q || b);
      var $ = Ge(W.x);
      var J = Ge(W.y);
      var K = $ || J;
      var Q = O(e);
      var rr = A(e);
      var ar = H(e);
      var er = R(e);
      var nr;
      if (q && p) {
        l(da, oa, !X);
      }
      if (Z) {
        nr = j(X);
        k(nr, x);
      }
      if (u || h || d || m || q) {
        if (K) {
          l(ha, ia, false);
        }
        var tr = N(X, P, nr), vr = tr[0], ir = tr[1];
        var or = Q = C(e), ur = or[0], fr = or[1];
        var lr = rr = E(e), cr = lr[0], sr = lr[1];
        var dr = Ir(o);
        var hr = cr;
        var gr = dr;
        vr();
        if ((sr || fr || q) && ir && !X && U(ir, cr, ur, P)) {
          gr = Ir(o);
          hr = Vr(o);
        }
        var pr = {
          w: je(ke(cr.w, hr.w) + ur.w),
          h: je(ke(cr.h, hr.h) + ur.h)
        };
        var _r = {
          w: je(y ? s.innerWidth : gr.w + je(dr.w - cr.w) + ur.w),
          h: je(y ? s.innerHeight : gr.h + je(dr.h - cr.h) + ur.h)
        };
        er = M(_r);
        ar = z(Ye(pr, _r), e);
      }
      var wr = er, br = wr[0], mr = wr[1];
      var yr = ar, Sr = yr[0], Cr = yr[1];
      var Or = rr, xr = Or[0], Er = Or[1];
      var Ar = Q, Pr = Ar[0], zr = Ar[1];
      var Lr = {
        x: Sr.w > 0,
        y: Sr.h > 0
      };
      var Tr = $ && J && (Lr.x || Lr.y) || $ && Lr.x && !Lr.y || J && Lr.y && !Lr.x;
      if (h || m || zr || Er || mr || Cr || G || q || Z) {
        var Hr = {
          marginRight: 0,
          marginBottom: 0,
          marginLeft: 0,
          width: "",
          overflowY: "",
          overflowX: ""
        };
        var Dr = B(X, Lr, W, Hr);
        var Mr = U(Dr, xr, Pr, P);
        if (!f) {
          F(Dr, P, Mr, Hr);
        }
        if (Z) {
          k(Dr, x);
        }
        if (f) {
          L(v, ta, Hr.overflowX);
          L(v, va, Hr.overflowY);
        } else {
          style(o, Hr);
        }
      }
      T(v, na, ia, Tr);
      We(i, ha, Tr);
      !f && We(o, ha, K);
      var Rr = V(j(X).Cr), kr = Rr[0], jr = Rr[1];
      t({
        Cr: kr,
        Er: {
          x: br.w,
          y: br.h
        },
        Ar: {
          x: Sr.w,
          y: Sr.h
        },
        Pr: Lr
      });
      return {
        zr: jr,
        Lr: mr,
        Tr: Cr
      };
    };
  };
  var Ze = function prepareUpdateHints(r, a, e) {
    var n = {};
    var t = a || {};
    var v = E(r).concat(E(t));
    each(v, (function(a) {
      var v = r[a];
      var i = t[a];
      n[a] = !!(e || v || i);
    }));
    return n;
  };
  var $e = function createStructureSetupUpdate(r, a) {
    var e = r.$, n = r.K, t = r.dr, v = r.cr;
    var i = be(), o = i.T, u = i.H, f = i.F;
    var l = !o && (u.x || u.y);
    var c = [ Ie(r, a), Ve(r, a), Xe(r, a) ];
    return function(r, a, i) {
      var o = Ze(A({
        pr: false,
        yr: false,
        br: false,
        gr: false,
        Lr: false,
        Tr: false,
        zr: false,
        Or: false,
        _r: false
      }, a), {}, i);
      var u = l || !f;
      var s = u && M(n);
      var d = u && R(n);
      t("", ua, true);
      var h = o;
      each(c, (function(a) {
        h = Ze(h, a(h, r, !!i) || {}, i);
      }));
      M(n, s);
      R(n, d);
      t("", ua);
      if (!v) {
        M(e, 0);
        R(e, 0);
      }
      return h;
    };
  };
  var Je = 3333333;
  var Ke = function domRectHasDimensions(r) {
    return r && (r.height || r.width);
  };
  var Qe = function createSizeObserver(r, e, n) {
    var t = n || {}, v = t.Hr, i = void 0 === v ? false : v, o = t.Dr, u = void 0 === o ? false : o;
    var f = ka()[ne];
    var l = be(), s = l.B;
    var g = $('<div class="' + ga + '"><div class="' + _a + '"></div></div>');
    var p = g[0];
    var w = p.firstChild;
    var b = Lr.bind(0, r);
    var m = a({
      o: void 0,
      g: true,
      u: function _equal(r, a) {
        return !(!r || !Ke(r) && Ke(a));
      }
    }), S = m[0];
    var C = function onSizeChangedCallbackProxy(r) {
      var a = d(r) && r.length > 0 && h(r[0]);
      var n = !a && c(r[0]);
      var t = false;
      var v = false;
      var o = true;
      if (a) {
        var u = S(r.pop().contentRect), f = u[0], l = u[2];
        var g = Ke(f);
        var w = Ke(l);
        t = !l || !g;
        v = !w && g;
        o = !t;
      } else if (n) {
        o = r[1];
      } else {
        v = true === r;
      }
      if (i && o) {
        var b = n ? r[0] : Lr(p);
        M(p, b ? s.n ? -Je : s.i ? 0 : Je : Je);
        R(p, Je);
      }
      if (!t) {
        e({
          pr: !n,
          Mr: n ? r : void 0,
          Dr: !!v
        });
      }
    };
    var x = [];
    var E = u ? C : false;
    return [ function() {
      O(x);
      X(p);
    }, function() {
      if (or) {
        var e = new or(C);
        e.observe(w);
        y(x, (function() {
          e.disconnect();
        }));
      } else if (f) {
        var n = f.P(w, C, u), t = n[0], v = n[1];
        E = t;
        y(x, v);
      }
      if (i) {
        var o = a({
          o: !b()
        }, b), l = o[0];
        y(x, Nr(p, "scroll", (function(r) {
          var a = l();
          var e = a[0], n = a[1];
          if (n) {
            gr(w, "ltr rtl");
            if (e) {
              pr(w, "rtl");
            } else {
              pr(w, "ltr");
            }
            C(a);
          }
          Yr(r);
        })));
      }
      if (E) {
        pr(p, pa);
        y(x, Nr(p, "animationstart", E, {
          A: !!or
        }));
      }
      Y(r, p);
    } ];
  };
  var rn = function isHeightIntrinsic(r) {
    return 0 === r.h || r.isIntersecting || r.intersectionRatio > 0;
  };
  var an = function createTrinsicObserver(r, e) {
    var n;
    var t = Z(ya);
    var v = [];
    var i = a({
      o: false
    }), o = i[0];
    var u = function triggerOnTrinsicChangedCallback(r, a) {
      if (r) {
        var n = o(rn(r));
        var t = n[1];
        if (t) {
          !a && e(n);
          return [ n ];
        }
      }
    };
    var f = function intersectionObserverCallback(r, a) {
      if (r && r.length > 0) {
        return u(r.pop(), a);
      }
    };
    return [ function() {
      O(v);
      X(t);
    }, function() {
      if (ir) {
        n = new ir((function(r) {
          return f(r);
        }), {
          root: r
        });
        n.observe(t);
        y(v, (function() {
          n.disconnect();
        }));
      } else {
        var a = function onSizeChanged() {
          var r = Rr(t);
          u(r);
        };
        var e = Qe(t, a), i = e[0], o = e[1];
        y(v, i);
        o();
        a();
      }
      Y(r, t);
    }, function() {
      if (n) {
        return f(n.takeRecords(), true);
      }
    } ];
  };
  var en = function createEventContentChange(r, a, e) {
    var n;
    var t = false;
    var v = function destroy() {
      t = true;
    };
    var i = function updateElements(v) {
      if (e) {
        var i = e.reduce((function(a, e) {
          if (e) {
            var n = e[0];
            var t = e[1];
            var i = t && n && (v ? v(n) : V(n, r));
            if (i && i.length && t && l(t)) {
              y(a, [ i, t.trim() ], true);
            }
          }
          return a;
        }), []);
        each(i, (function(r) {
          return each(r[0], (function(e) {
            var v = r[1];
            var i = n.get(e);
            if (i) {
              var o = i[0];
              var u = i[1];
              if (o === v) {
                u();
              }
            }
            var f = Nr(e, v, (function(r) {
              if (t) {
                f();
                n.delete(e);
              } else {
                a(r);
              }
            }));
            n.set(e, [ v, f ]);
          }));
        }));
      }
    };
    if (e) {
      n = new WeakMap;
      i();
    }
    return [ v, i ];
  };
  var nn = function createDOMObserver(r, a, e, n) {
    var t = false;
    var v = n || {}, i = v.Rr, o = v.Ir, u = v.Vr, f = v.kr, c = v.jr, s = v.Br;
    var d = Or((function() {
      if (t) {
        e(true);
      }
    }), {
      p: 33,
      _: 99
    });
    var h = en(r, d, u), g = h[0], p = h[1];
    var w = i || [];
    var b = o || [];
    var S = w.concat(b);
    var O = function observerCallback(t, v) {
      var i = c || Sr;
      var o = s || Sr;
      var u = [];
      var d = [];
      var h = false;
      var g = false;
      var w = false;
      each(t, (function(e) {
        var t = e.attributeName, v = e.target, c = e.type, s = e.oldValue, p = e.addedNodes;
        var S = "attributes" === c;
        var C = "childList" === c;
        var O = r === v;
        var x = S && l(t) ? L(v, t) : 0;
        var E = 0 !== x && s !== x;
        var A = m(b, t) > -1 && E;
        if (a && !O) {
          var P = !S;
          var z = S && A;
          var T = z && f && j(v, f);
          var H = T ? !i(v, t, s, x) : P || z;
          var D = H && !o(e, !!T, r, n);
          y(d, p);
          g = g || D;
          w = w || C;
        }
        if (!a && O && E && !i(v, t, s, x)) {
          y(u, t);
          h = h || A;
        }
      }));
      if (w && !C(d)) {
        p((function(r) {
          return d.reduce((function(a, e) {
            y(a, V(r, e));
            return j(e, r) ? y(a, e) : a;
          }), []);
        }));
      }
      if (a) {
        !v && g && e(false);
        return [ false ];
      }
      if (!C(u) || h) {
        !v && e(u, h);
        return [ u, h ];
      }
    };
    var x = new vr((function(r) {
      return O(r);
    }));
    x.observe(r, {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: S,
      subtree: a,
      childList: a,
      characterData: a
    });
    t = true;
    return [ function() {
      if (t) {
        g();
        x.disconnect();
        t = false;
      }
    }, function() {
      if (t) {
        d.S();
        var r = x.takeRecords();
        return !C(r) && O(r, true);
      }
    } ];
  };
  var tn = "[" + na + "]";
  var vn = "." + la;
  var un = [ "tabindex" ];
  var fn = [ "wrap", "cols", "rows" ];
  var ln = [ "id", "class", "style", "open" ];
  var cn = function createStructureSetupObservers(r, e, n) {
    var t;
    var v;
    var i;
    var o = e[1];
    var u = r.J, c = r.K, h = r.ar, g = r.ur, p = r.cr, w = r.sr, b = r.dr;
    var S = be(), C = S.F;
    var O = a({
      u: wr,
      o: {
        w: 0,
        h: 0
      }
    }, (function() {
      var r = w(ha, ia);
      var a = w(ca, "");
      var e = a && M(c);
      var n = a && R(c);
      b(ha, ia);
      b(ca, "");
      b("", ua, true);
      var t = Vr(h);
      var v = Vr(c);
      var i = kr(c);
      b(ha, ia, r);
      b(ca, "", a);
      b("", ua);
      M(c, e);
      R(c, n);
      return {
        w: v.w + t.w + i.w,
        h: v.h + t.h + i.h
      };
    })), x = O[0];
    var P = g ? fn : ln.concat(fn);
    var z = Or(n, {
      p: function _timeout() {
        return t;
      },
      _: function _maxDelay() {
        return v;
      },
      m: function _mergeParams(r, a) {
        var e = r[0];
        var n = a[0];
        return [ E(e).concat(E(n)).reduce((function(r, a) {
          r[a] = e[a] || n[a];
          return r;
        }), {}) ];
      }
    });
    var T = function updateViewportAttrsFromHost(r) {
      each(r || un, (function(r) {
        if (m(un, r) > -1) {
          var a = L(u, r);
          if (l(a)) {
            L(c, r, a);
          } else {
            D(c, r);
          }
        }
      }));
    };
    var H = function onTrinsicChanged(r, a) {
      var e = r[0], t = r[1];
      var v = {
        gr: t
      };
      o({
        hr: e
      });
      !a && n(v);
      return v;
    };
    var I = function onSizeChanged(r) {
      var a = r.pr, e = r.Mr, t = r.Dr;
      var v = !a || t ? n : z;
      var i = false;
      if (e) {
        var u = e[0], f = e[1];
        i = f;
        o({
          wr: u
        });
      }
      v({
        pr: a,
        br: i
      });
    };
    var V = function onContentMutation(r, a) {
      var e = x(), t = e[1];
      var v = {
        _r: t
      };
      var i = r ? n : z;
      if (t) {
        !a && i(v);
      }
      return v;
    };
    var k = function onHostMutation(r, a, e) {
      var n = {
        Or: a
      };
      if (a) {
        !e && z(n);
      } else if (!p) {
        T(r);
      }
      return n;
    };
    var j = h || !C ? an(u, H) : [ Sr, Sr, Sr ], B = j[0], F = j[1], N = j[2];
    var Y = !p ? Qe(u, I, {
      Dr: true,
      Hr: true
    }) : [ Sr, Sr ], W = Y[0], G = Y[1];
    var X = nn(u, false, k, {
      Ir: ln,
      Rr: ln.concat(un)
    }), Z = X[0], $ = X[1];
    var J = p && or && new or(I.bind(0, {
      pr: true
    }));
    J && J.observe(u);
    T();
    return [ function() {
      B();
      W();
      i && i[0]();
      J && J.disconnect();
      Z();
    }, function() {
      G();
      F();
    }, function() {
      var r = {};
      var a = $();
      var e = N();
      var n = i && i[1]();
      if (a) {
        A(r, k.apply(0, y(a, true)));
      }
      if (e) {
        A(r, H.apply(0, y(e, true)));
      }
      if (n) {
        A(r, V.apply(0, y(n, true)));
      }
      return r;
    }, function(r) {
      var a = r("update.ignoreMutation"), e = a[0];
      var n = r("update.attributes"), o = n[0], u = n[1];
      var l = r("update.elementEvents"), g = l[0], w = l[1];
      var b = r("update.debounce"), m = b[0], y = b[1];
      var S = w || u;
      var C = function ignoreMutationFromOptions(r) {
        return s(e) && e(r);
      };
      if (S) {
        if (i) {
          i[1]();
          i[0]();
        }
        i = nn(h || c, true, V, {
          Ir: P.concat(o || []),
          Rr: P.concat(o || []),
          Vr: g,
          kr: tn,
          Br: function _ignoreContentChange(r, a) {
            var e = r.target, n = r.attributeName;
            var t = !a && n && !p ? U(e, tn, vn) : false;
            return t || !!q(e, "." + Sa) || !!C(r);
          }
        });
      }
      if (y) {
        z.S();
        if (d(m)) {
          var O = m[0];
          var x = m[1];
          t = f(O) && O;
          v = f(x) && x;
        } else if (f(m)) {
          t = m;
          v = false;
        } else {
          t = false;
          v = false;
        }
      }
    } ];
  };
  var sn = {
    x: 0,
    y: 0
  };
  var dn = {
    rr: {
      t: 0,
      r: 0,
      b: 0,
      l: 0
    },
    mr: false,
    R: {
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0
    },
    Er: sn,
    Ar: sn,
    Cr: {
      x: "hidden",
      y: "hidden"
    },
    Pr: {
      x: false,
      y: false
    },
    hr: false,
    wr: false
  };
  var hn = function createStructureSetup(r, a) {
    var e = ze(a, {});
    var n = Le(dn);
    var t = $r(), v = t[0], i = t[1], o = t[2];
    var u = n[0];
    var f = Re(r), l = f[0], c = f[1], s = f[2];
    var d = $e(l, n);
    var h = function triggerUpdateEvent(r, a, e) {
      var n = E(r).some((function(a) {
        return r[a];
      }));
      if (n || !P(a) || e) {
        o("u", [ r, a, e ]);
      }
    };
    var g = cn(l, n, (function(r) {
      h(d(e, r), {}, false);
    })), p = g[0], w = g[1], b = g[2], m = g[3];
    var y = u.bind(0);
    y.Fr = function(r) {
      v("u", r);
    };
    y.qr = function() {
      var r = l.$, a = l.K;
      var e = M(r);
      var n = R(r);
      w();
      c();
      M(a, e);
      R(a, n);
    };
    y.Ur = l;
    return [ function(r, e) {
      var n = ze(a, r, e);
      m(n);
      h(d(n, b(), e), r, !!e);
    }, y, function() {
      i();
      p();
      s();
    } ];
  };
  var gn = Math.round;
  var pn = function getClientOffset(r) {
    return {
      x: r.clientX,
      y: r.clientY
    };
  };
  var _n = function getScale(r) {
    var a = jr(r), e = a.width, n = a.height;
    var t = Rr(r), v = t.w, i = t.h;
    return {
      x: gn(e) / v || 1,
      y: gn(n) / i || 1
    };
  };
  var wn = function continuePointerDown(r, a, e) {
    var n = a.scrollbars;
    var t = r.button, v = r.isPrimary, i = r.pointerType;
    var o = n.pointers;
    return 0 === t && v && n[e] && (o || []).includes(i);
  };
  var bn = function createRootClickStopPropagationEvents(r, a) {
    return Nr(r, "mousedown", Nr.bind(0, a, "click", Yr, {
      A: true,
      O: true
    }), {
      O: true
    });
  };
  var mn = function createDragScrollingEvents(r, a, e, n, t, v) {
    var i = be(), o = i.B;
    var u = e.Nr, f = e.Yr, l = e.Wr;
    var c = "scroll" + (v ? "Left" : "Top");
    var s = v ? "x" : "y";
    var d = v ? "w" : "h";
    var h = function createOnPointerMoveHandler(r, a, e) {
      return function(i) {
        var h = t(), g = h.Ar;
        var p = (pn(i)[s] - a) * e;
        var w = Rr(f)[d] - Rr(u)[d];
        var b = p / w;
        var m = b * g[s];
        var y = Lr(l);
        var S = y && v ? o.n || o.i ? 1 : -1 : 1;
        n[c] = r + m * S;
      };
    };
    return Nr(u, "pointerdown", (function(e) {
      if (wn(e, r, "dragScroll")) {
        var t = Nr(a, "selectstart", (function(r) {
          return Wr(r);
        }), {
          C: false
        });
        var v = Nr(u, "pointermove", h(n[c] || 0, pn(e)[s], 1 / _n(n)[s]));
        Nr(u, "pointerup", (function(r) {
          t();
          v();
          u.releasePointerCapture(r.pointerId);
        }), {
          A: true
        });
        u.setPointerCapture(e.pointerId);
      }
    }));
  };
  var yn = function createScrollbarsSetupEvents(r, a) {
    return function(e, n, t, v, i, o) {
      var u = e.Wr;
      var f = Cr(333), l = f[0], c = f[1];
      var s = !!i.scrollBy;
      var d = true;
      return O.bind(0, [ Nr(u, "pointerenter", (function() {
        n(Ta, true);
      })), Nr(u, "pointerleave pointercancel", (function() {
        n(Ta);
      })), Nr(u, "wheel", (function(r) {
        var a = r.deltaX, e = r.deltaY, t = r.deltaMode;
        if (s && d && 0 === t && F(u) === v) {
          i.scrollBy({
            left: a,
            top: e,
            behavior: "smooth"
          });
        }
        d = false;
        n(Ma, true);
        l((function() {
          d = true;
          n(Ma);
        }));
        Wr(r);
      }), {
        C: false,
        O: true
      }), bn(u, t), mn(r, t, e, i, a, o), c ]);
    };
  };
  var Sn = Math.min, Cn = Math.max, On = Math.abs, xn = Math.round;
  var En = function getScrollbarHandleLengthRatio(r, a, e, n) {
    if (n) {
      var t = e ? "x" : "y";
      var v = n.Ar, i = n.Er;
      var o = i[t];
      var u = v[t];
      return Cn(0, Sn(1, o / (o + u)));
    }
    var f = e ? "w" : "h";
    var l = Rr(r)[f];
    var c = Rr(a)[f];
    return Cn(0, Sn(1, l / c));
  };
  var An = function getScrollbarHandleOffsetRatio(r, a, e, n, t, v) {
    var i = be(), o = i.B;
    var u = v ? "x" : "y";
    var f = v ? "Left" : "Top";
    var l = n.Ar;
    var c = xn(l[u]);
    var s = On(e["scroll" + f]);
    var d = v && t;
    var h = o.i ? s : c - s;
    var g = d ? h : s;
    var p = Sn(1, g / c);
    var w = En(r, a, v);
    return 1 / w * (1 - w) * p;
  };
  var Pn = function createScrollbarsSetupElements(r, a, e) {
    var n = be(), t = n.U;
    var v = t(), i = v.scrollbars;
    var o = i.slot;
    var u = a.ir, f = a.$, l = a.J, s = a.K, d = a.lr, h = a.nr;
    var g = d ? {} : r, p = g.scrollbars;
    var w = p || {}, b = w.slot;
    var m = Se([ f, l, s ], (function() {
      return l;
    }), o, b);
    var S = function scrollbarStructureAddRemoveClass(r, a, e) {
      var n = e ? pr : gr;
      each(r, (function(r) {
        n(r.Wr, a);
      }));
    };
    var x = function scrollbarsHandleStyle(r, a) {
      each(r, (function(r) {
        var e = a(r), n = e[0], t = e[1];
        style(n, t);
      }));
    };
    var E = function scrollbarStructureRefreshHandleLength(r, a, e) {
      x(r, (function(r) {
        var n;
        var t = r.Nr, v = r.Yr;
        return [ t, (n = {}, n[e ? "width" : "height"] = (100 * En(t, v, e, a)).toFixed(3) + "%", 
        n) ];
      }));
    };
    var A = function scrollbarStructureRefreshHandleOffset(r, a, e) {
      var n = e ? "X" : "Y";
      x(r, (function(r) {
        var t = r.Nr, v = r.Yr, i = r.Wr;
        var o = An(t, v, h, a, Lr(i), e);
        var u = o === o;
        return [ t, {
          transform: u ? "translate" + n + "(" + (100 * o).toFixed(3) + "%)" : ""
        } ];
      }));
    };
    var P = [];
    var z = [];
    var L = [];
    var T = function scrollbarsAddRemoveClass(r, a, e) {
      var n = c(e);
      var t = n ? e : true;
      var v = n ? !e : true;
      t && S(z, r, a);
      v && S(L, r, a);
    };
    var H = function refreshScrollbarsHandleLength(r) {
      E(z, r, true);
      E(L, r);
    };
    var D = function refreshScrollbarsHandleOffset(r) {
      A(z, r, true);
      A(L, r);
    };
    var M = function generateScrollbarDOM(r) {
      var a = r ? Oa : xa;
      var n = r ? z : L;
      var t = C(n) ? La : "";
      var v = Z(Sa + " " + a + " " + t);
      var i = Z(Ea);
      var o = Z(Aa);
      var f = {
        Wr: v,
        Yr: i,
        Nr: o
      };
      Y(v, i);
      Y(i, o);
      y(n, f);
      y(P, [ X.bind(0, v), e(f, T, u, l, h, r) ]);
      return f;
    };
    var R = M.bind(0, true);
    var I = M.bind(0, false);
    var V = function appendElements() {
      Y(m, z[0].Wr);
      Y(m, L[0].Wr);
      lr((function() {
        T(La);
      }), 300);
    };
    R();
    I();
    return [ {
      Gr: H,
      Xr: D,
      Zr: T,
      $r: {
        Jr: z,
        Kr: R,
        Qr: x.bind(0, z)
      },
      ra: {
        Jr: L,
        Kr: I,
        Qr: x.bind(0, L)
      }
    }, V, O.bind(0, P) ];
  };
  var zn = function createScrollbarsSetup(r, a, e) {
    var n;
    var t;
    var v;
    var i;
    var o;
    var u = 0;
    var f = Le({});
    var l = f[0];
    var c = Cr(), s = c[0], d = c[1];
    var h = Cr(), g = h[0], p = h[1];
    var w = Cr(100), b = w[0], m = w[1];
    var y = Cr(100), S = y[0], C = y[1];
    var x = Cr((function() {
      return u;
    })), E = x[0], A = x[1];
    var P = Pn(r, e.Ur, yn(a, e)), z = P[0], L = P[1], T = P[2];
    var H = e.Ur, D = H.J, I = H.K, V = H.nr, k = H.tr, j = H.cr, B = H.Z;
    var q = z.$r, U = z.ra, N = z.Zr, Y = z.Gr, W = z.Xr;
    var G = q.Qr;
    var X = U.Qr;
    var Z = function styleScrollbarPosition(r) {
      var a = r.Wr;
      var e = j && !B && F(a) === I && a;
      return [ e, {
        transform: e ? "translate(" + M(V) + "px, " + R(V) + "px)" : ""
      } ];
    };
    var $ = function manageScrollbarsAutoHide(r, a) {
      A();
      if (r) {
        N(Da);
      } else {
        var e = function hide() {
          return N(Da, true);
        };
        if (u > 0 && !a) {
          E(e);
        } else {
          e();
        }
      }
    };
    var J = function onHostMouseEnter() {
      i = t;
      i && $(true);
    };
    var K = [ m, A, C, p, d, T, Nr(D, "pointerover", J, {
      A: true
    }), Nr(D, "pointerenter", J), Nr(D, "pointerleave", (function() {
      i = false;
      t && $(false);
    })), Nr(D, "pointermove", (function() {
      n && s((function() {
        m();
        $(true);
        S((function() {
          n && $(false);
        }));
      }));
    })), Nr(k, "scroll", (function() {
      g((function() {
        W(e());
        v && $(true);
        b((function() {
          v && !i && $(false);
        }));
      }));
      j && G(Z);
      j && X(Z);
    })) ];
    var Q = l.bind(0);
    Q.Ur = z;
    Q.qr = L;
    return [ function(r, i, f) {
      var l = f.Lr, c = f.Tr, s = f.zr, d = f.br;
      var h = ze(a, r, i);
      var g = e();
      var p = g.Ar, w = g.Cr, b = g.wr;
      var m = h("scrollbars.theme"), y = m[0], S = m[1];
      var C = h("scrollbars.visibility"), O = C[0], x = C[1];
      var E = h("scrollbars.autoHide"), A = E[0], P = E[1];
      var z = h("scrollbars.autoHideDelay"), L = z[0];
      var T = h("scrollbars.dragScroll"), H = T[0], D = T[1];
      var M = h("scrollbars.clickScroll"), R = M[0], I = M[1];
      var V = l || c || d || i;
      var k = s || x || i;
      var j = function setScrollbarVisibility(r, a) {
        var e = "visible" === O || "auto" === O && "scroll" === r;
        N(Pa, e, a);
        return e;
      };
      u = L;
      if (S) {
        N(o);
        N(y, true);
        o = y;
      }
      if (P) {
        n = "move" === A;
        t = "leave" === A;
        v = "never" !== A;
        $(!v, true);
      }
      if (D) {
        N(Ia, H);
      }
      if (I) {
        N(Ra, R);
      }
      if (k) {
        var F = j(w.x, true);
        var q = j(w.y, false);
        var U = F && q;
        N(za, !U);
      }
      if (V) {
        Y(g);
        W(g);
        N(Ha, !p.x, true);
        N(Ha, !p.y, false);
        N(Ca, b && !B);
      }
    }, Q, O.bind(0, K) ];
  };
  var Ln = function OverlayScrollbars(r, a, e) {
    var n = be(), t = n.Y, v = n.q;
    var i = ka();
    var o = w(r);
    var u = o ? r : r.target;
    var f = Ae(u);
    if (a && !f) {
      var l = false;
      var c = i[Qa];
      var d = function validateOptions(r) {
        var a = r || {};
        var e = c && c.P;
        return e ? e(a, true) : a;
      };
      var h = A({}, t(), d(a));
      var g = $r(e), p = g[0], b = g[1], m = g[2];
      var y = hn(r, h), S = y[0], C = y[1], O = y[2];
      var x = zn(r, h, C), z = x[0], L = x[1], T = x[2];
      var H = function update(r, a) {
        S(r, !!a);
      };
      var D = v(H.bind(0, {}, true));
      var M = function destroy(r) {
        Ee(u);
        D();
        T();
        O();
        l = true;
        m("destroyed", [ R, !!r ]);
        b();
      };
      var R = {
        options: function options(r) {
          if (r) {
            var a = Qr(h, d(r));
            if (!P(a)) {
              A(h, a);
              H(a);
            }
          }
          return A({}, h);
        },
        on: p,
        off: function off(r, a) {
          r && a && b(r, a);
        },
        state: function state() {
          var r = C(), a = r.Er, e = r.Ar, n = r.Cr, t = r.Pr, v = r.rr, i = r.mr, o = r.wr;
          return A({}, {
            overflowEdge: a,
            overflowAmount: e,
            overflowStyle: n,
            hasOverflow: t,
            padding: v,
            paddingAbsolute: i,
            directionRTL: o,
            destroyed: l
          });
        },
        elements: function elements() {
          var r = C.Ur, a = r.$, e = r.J, n = r.rr, t = r.K, v = r.ar, i = r.nr, o = r.tr;
          var u = L.Ur, f = u.$r, l = u.ra;
          var c = function translateScrollbarStructure(r) {
            var a = r.Nr, e = r.Yr, n = r.Wr;
            return {
              scrollbar: n,
              track: e,
              handle: a
            };
          };
          var s = function translateScrollbarsSetupElement(r) {
            var a = r.Jr, e = r.Kr;
            var n = c(a[0]);
            return A({}, n, {
              clone: function clone() {
                var r = c(e());
                z({}, true, {});
                return r;
              }
            });
          };
          return A({}, {
            target: a,
            host: e,
            padding: n || t,
            viewport: t,
            content: v || t,
            scrollOffsetElement: i,
            scrollEventElement: o,
            scrollbarHorizontal: s(f),
            scrollbarVertical: s(l)
          });
        },
        update: function update(r) {
          H({}, r);
          return R;
        },
        destroy: M.bind(0)
      };
      C.Fr((function(r, a, e) {
        z(a, e, r);
      }));
      each(E(i), (function(r) {
        var a = i[r];
        if (s(a)) {
          a(OverlayScrollbars, R);
        }
      }));
      if (Ce(!o && r.cancel, C.Ur)) {
        M(true);
        return R;
      }
      C.qr();
      L.qr();
      xe(u, R);
      m("initialized", [ R ]);
      C.Fr((function(r, a, e) {
        var n = r.pr, t = r.br, v = r.gr, i = r.Lr, o = r.Tr, u = r.zr, f = r._r, l = r.Or;
        m("updated", [ R, {
          updateHints: {
            sizeChanged: n,
            directionChanged: t,
            heightIntrinsicChanged: v,
            overflowEdgeChanged: i,
            overflowAmountChanged: o,
            overflowStyleChanged: u,
            contentMutation: f,
            hostMutation: l
          },
          changedOptions: a,
          force: e
        } ]);
      }));
      return R.update(true);
    }
    return f;
  };
  Ln.plugin = ja;
  Ln.valid = function(r) {
    var a = r && r.elements;
    var e = s(a) && a();
    return p(e) && !!Ae(e.target);
  };
  Ln.env = function() {
    var r = be(), a = r.j, e = r.H, n = r.T, t = r.B, v = r.F, i = r.D, o = r.G, u = r.X, f = r.U, l = r.N, c = r.Y, s = r.W;
    return A({}, {
      scrollbarsSize: a,
      scrollbarsOverlaid: e,
      scrollbarsHiding: n,
      rtlScrollBehavior: t,
      flexboxGlue: v,
      cssCustomProperties: i,
      staticDefaultInitialization: o,
      staticDefaultOptions: u,
      getDefaultInitialization: f,
      setDefaultInitialization: l,
      getDefaultOptions: c,
      setDefaultOptions: s
    });
  };
  r.OverlayScrollbars = Ln;
  r.scrollbarsHidingPlugin = se;
  r.sizeObserverPlugin = te;
  Object.defineProperty(r, "v", {
    value: true
  });
  return r;
}({});
//# sourceMappingURL=overlayscrollbars.browser.es5.js.map
