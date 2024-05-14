var nt = Object.defineProperty;
var st = (e, t, r) => t in e ? nt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var re = (e, t, r) => (st(e, typeof t != "symbol" ? t + "" : t, r), r);
function ge(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: it } = Object.prototype, { getPrototypeOf: de } = Object, Q = /* @__PURE__ */ ((e) => (t) => {
  const r = it.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), j = (e) => (e = e.toLowerCase(), (t) => Q(t) === e), Z = (e) => (t) => typeof t === e, { isArray: L } = Array, z = Z("undefined");
function ot(e) {
  return e !== null && !z(e) && e.constructor !== null && !z(e.constructor) && g(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ue = j("ArrayBuffer");
function at(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ue(e.buffer), t;
}
const ct = Z("string"), g = Z("function"), De = Z("number"), ee = (e) => e !== null && typeof e == "object", ut = (e) => e === !0 || e === !1, X = (e) => {
  if (Q(e) !== "object")
    return !1;
  const t = de(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, lt = j("Date"), ft = j("File"), ht = j("Blob"), dt = j("FileList"), pt = (e) => ee(e) && g(e.pipe), mt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || g(e.append) && ((t = Q(e)) === "formdata" || // detect form-data instance
  t === "object" && g(e.toString) && e.toString() === "[object FormData]"));
}, yt = j("URLSearchParams"), bt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function J(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), L(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    const u = r ? Object.getOwnPropertyNames(e) : Object.keys(e), l = u.length;
    let d;
    for (n = 0; n < l; n++)
      d = u[n], t.call(null, e[d], d, e);
  }
}
function Ie(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const je = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, qe = (e) => !z(e) && e !== je;
function ae() {
  const { caseless: e } = qe(this) && this || {}, t = {}, r = (n, o) => {
    const u = e && Ie(t, o) || o;
    X(t[u]) && X(n) ? t[u] = ae(t[u], n) : X(n) ? t[u] = ae({}, n) : L(n) ? t[u] = n.slice() : t[u] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && J(arguments[n], r);
  return t;
}
const xt = (e, t, r, { allOwnKeys: n } = {}) => (J(t, (o, u) => {
  r && g(o) ? e[u] = ge(o, r) : e[u] = o;
}, { allOwnKeys: n }), e), wt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Rt = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Et = (e, t, r, n) => {
  let o, u, l;
  const d = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), u = o.length; u-- > 0; )
      l = o[u], (!n || n(l, e, t)) && !d[l] && (t[l] = e[l], d[l] = !0);
    e = r !== !1 && de(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Ot = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, St = (e) => {
  if (!e)
    return null;
  if (L(e))
    return e;
  let t = e.length;
  if (!De(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, At = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && de(Uint8Array)), Ft = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const u = o.value;
    t.call(e, u[0], u[1]);
  }
}, Tt = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, _t = j("HTMLFormElement"), Ct = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), Re = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Nt = j("RegExp"), ve = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  J(r, (o, u) => {
    let l;
    (l = t(o, u, e)) !== !1 && (n[u] = l || o);
  }), Object.defineProperties(e, n);
}, Pt = (e) => {
  ve(e, (t, r) => {
    if (g(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (g(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Bt = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((u) => {
      r[u] = !0;
    });
  };
  return L(e) ? n(e) : n(String(e).split(t)), r;
}, gt = () => {
}, Ut = (e, t) => (e = +e, Number.isFinite(e) ? e : t), ne = "abcdefghijklmnopqrstuvwxyz", Ee = "0123456789", ke = {
  DIGIT: Ee,
  ALPHA: ne,
  ALPHA_DIGIT: ne + ne.toUpperCase() + Ee
}, Dt = (e = 16, t = ke.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function It(e) {
  return !!(e && g(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const jt = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (ee(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[o] = n;
        const u = L(n) ? [] : {};
        return J(n, (l, d) => {
          const x = r(l, o + 1);
          !z(x) && (u[d] = x);
        }), t[o] = void 0, u;
      }
    }
    return n;
  };
  return r(e, 0);
}, qt = j("AsyncFunction"), vt = (e) => e && (ee(e) || g(e)) && g(e.then) && g(e.catch), f = {
  isArray: L,
  isArrayBuffer: Ue,
  isBuffer: ot,
  isFormData: mt,
  isArrayBufferView: at,
  isString: ct,
  isNumber: De,
  isBoolean: ut,
  isObject: ee,
  isPlainObject: X,
  isUndefined: z,
  isDate: lt,
  isFile: ft,
  isBlob: ht,
  isRegExp: Nt,
  isFunction: g,
  isStream: pt,
  isURLSearchParams: yt,
  isTypedArray: At,
  isFileList: dt,
  forEach: J,
  merge: ae,
  extend: xt,
  trim: bt,
  stripBOM: wt,
  inherits: Rt,
  toFlatObject: Et,
  kindOf: Q,
  kindOfTest: j,
  endsWith: Ot,
  toArray: St,
  forEachEntry: Ft,
  matchAll: Tt,
  isHTMLForm: _t,
  hasOwnProperty: Re,
  hasOwnProp: Re,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ve,
  freezeMethods: Pt,
  toObjectSet: Bt,
  toCamelCase: Ct,
  noop: gt,
  toFiniteNumber: Ut,
  findKey: Ie,
  global: je,
  isContextDefined: qe,
  ALPHABET: ke,
  generateString: Dt,
  isSpecCompliantForm: It,
  toJSONObject: jt,
  isAsyncFn: qt,
  isThenable: vt
};
function S(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o);
}
f.inherits(S, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: f.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Le = S.prototype, Me = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Me[e] = { value: e };
});
Object.defineProperties(S, Me);
Object.defineProperty(Le, "isAxiosError", { value: !0 });
S.from = (e, t, r, n, o, u) => {
  const l = Object.create(Le);
  return f.toFlatObject(e, l, function(x) {
    return x !== Error.prototype;
  }, (d) => d !== "isAxiosError"), S.call(l, e.message, t, r, n, o), l.cause = e, l.name = e.name, u && Object.assign(l, u), l;
};
const kt = null;
function ce(e) {
  return f.isPlainObject(e) || f.isArray(e);
}
function He(e) {
  return f.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Oe(e, t, r) {
  return e ? e.concat(t).map(function(o, u) {
    return o = He(o), !r && u ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function Lt(e) {
  return f.isArray(e) && !e.some(ce);
}
const Mt = f.toFlatObject(f, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function te(e, t, r) {
  if (!f.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = f.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(R, T) {
    return !f.isUndefined(T[R]);
  });
  const n = r.metaTokens, o = r.visitor || w, u = r.dots, l = r.indexes, x = (r.Blob || typeof Blob < "u" && Blob) && f.isSpecCompliantForm(t);
  if (!f.isFunction(o))
    throw new TypeError("visitor must be a function");
  function y(b) {
    if (b === null)
      return "";
    if (f.isDate(b))
      return b.toISOString();
    if (!x && f.isBlob(b))
      throw new S("Blob is not supported. Use a Buffer instead.");
    return f.isArrayBuffer(b) || f.isTypedArray(b) ? x && typeof Blob == "function" ? new Blob([b]) : Buffer.from(b) : b;
  }
  function w(b, R, T) {
    let _ = b;
    if (b && !T && typeof b == "object") {
      if (f.endsWith(R, "{}"))
        R = n ? R : R.slice(0, -2), b = JSON.stringify(b);
      else if (f.isArray(b) && Lt(b) || (f.isFileList(b) || f.endsWith(R, "[]")) && (_ = f.toArray(b)))
        return R = He(R), _.forEach(function(D, V) {
          !(f.isUndefined(D) || D === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            l === !0 ? Oe([R], V, u) : l === null ? R : R + "[]",
            y(D)
          );
        }), !1;
    }
    return ce(b) ? !0 : (t.append(Oe(T, R, u), y(b)), !1);
  }
  const h = [], A = Object.assign(Mt, {
    defaultVisitor: w,
    convertValue: y,
    isVisitable: ce
  });
  function N(b, R) {
    if (!f.isUndefined(b)) {
      if (h.indexOf(b) !== -1)
        throw Error("Circular reference detected in " + R.join("."));
      h.push(b), f.forEach(b, function(_, B) {
        (!(f.isUndefined(_) || _ === null) && o.call(
          t,
          _,
          f.isString(B) ? B.trim() : B,
          R,
          A
        )) === !0 && N(_, R ? R.concat(B) : [B]);
      }), h.pop();
    }
  }
  if (!f.isObject(e))
    throw new TypeError("data must be an object");
  return N(e), t;
}
function Se(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function pe(e, t) {
  this._pairs = [], e && te(e, this, t);
}
const ze = pe.prototype;
ze.append = function(t, r) {
  this._pairs.push([t, r]);
};
ze.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Se);
  } : Se;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function Ht(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Je(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || Ht, o = r && r.serialize;
  let u;
  if (o ? u = o(t, r) : u = f.isURLSearchParams(t) ? t.toString() : new pe(t, r).toString(n), u) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + u;
  }
  return e;
}
class Ae {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    f.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const We = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, zt = typeof URLSearchParams < "u" ? URLSearchParams : pe, Jt = typeof FormData < "u" ? FormData : null, Wt = typeof Blob < "u" ? Blob : null, Kt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: zt,
    FormData: Jt,
    Blob: Wt
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ke = typeof window < "u" && typeof document < "u", Vt = ((e) => Ke && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), $t = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ke,
  hasStandardBrowserEnv: Vt,
  hasStandardBrowserWebWorkerEnv: $t
}, Symbol.toStringTag, { value: "Module" })), I = {
  ...Xt,
  ...Kt
};
function Gt(e, t) {
  return te(e, new I.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, u) {
      return I.isNode && f.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : u.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Yt(e) {
  return f.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Qt(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let u;
  for (n = 0; n < o; n++)
    u = r[n], t[u] = e[u];
  return t;
}
function Ve(e) {
  function t(r, n, o, u) {
    let l = r[u++];
    if (l === "__proto__")
      return !0;
    const d = Number.isFinite(+l), x = u >= r.length;
    return l = !l && f.isArray(o) ? o.length : l, x ? (f.hasOwnProp(o, l) ? o[l] = [o[l], n] : o[l] = n, !d) : ((!o[l] || !f.isObject(o[l])) && (o[l] = []), t(r, n, o[l], u) && f.isArray(o[l]) && (o[l] = Qt(o[l])), !d);
  }
  if (f.isFormData(e) && f.isFunction(e.entries)) {
    const r = {};
    return f.forEachEntry(e, (n, o) => {
      t(Yt(n), o, r, 0);
    }), r;
  }
  return null;
}
function Zt(e, t, r) {
  if (f.isString(e))
    try {
      return (t || JSON.parse)(e), f.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const W = {
  transitional: We,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, u = f.isObject(t);
    if (u && f.isHTMLForm(t) && (t = new FormData(t)), f.isFormData(t))
      return o ? JSON.stringify(Ve(t)) : t;
    if (f.isArrayBuffer(t) || f.isBuffer(t) || f.isStream(t) || f.isFile(t) || f.isBlob(t))
      return t;
    if (f.isArrayBufferView(t))
      return t.buffer;
    if (f.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let d;
    if (u) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Gt(t, this.formSerializer).toString();
      if ((d = f.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const x = this.env && this.env.FormData;
        return te(
          d ? { "files[]": t } : t,
          x && new x(),
          this.formSerializer
        );
      }
    }
    return u || o ? (r.setContentType("application/json", !1), Zt(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || W.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (t && f.isString(t) && (n && !this.responseType || o)) {
      const l = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (d) {
        if (l)
          throw d.name === "SyntaxError" ? S.from(d, S.ERR_BAD_RESPONSE, this, null, this.response) : d;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: I.classes.FormData,
    Blob: I.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
f.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  W.headers[e] = {};
});
const er = f.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), tr = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(l) {
    o = l.indexOf(":"), r = l.substring(0, o).trim().toLowerCase(), n = l.substring(o + 1).trim(), !(!r || t[r] && er[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Fe = Symbol("internals");
function H(e) {
  return e && String(e).trim().toLowerCase();
}
function G(e) {
  return e === !1 || e == null ? e : f.isArray(e) ? e.map(G) : String(e);
}
function rr(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const nr = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function se(e, t, r, n, o) {
  if (f.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!f.isString(t)) {
    if (f.isString(n))
      return t.indexOf(n) !== -1;
    if (f.isRegExp(n))
      return n.test(t);
  }
}
function sr(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function ir(e, t) {
  const r = f.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, u, l) {
        return this[n].call(this, t, o, u, l);
      },
      configurable: !0
    });
  });
}
class U {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function u(d, x, y) {
      const w = H(x);
      if (!w)
        throw new Error("header name must be a non-empty string");
      const h = f.findKey(o, w);
      (!h || o[h] === void 0 || y === !0 || y === void 0 && o[h] !== !1) && (o[h || x] = G(d));
    }
    const l = (d, x) => f.forEach(d, (y, w) => u(y, w, x));
    return f.isPlainObject(t) || t instanceof this.constructor ? l(t, r) : f.isString(t) && (t = t.trim()) && !nr(t) ? l(tr(t), r) : t != null && u(r, t, n), this;
  }
  get(t, r) {
    if (t = H(t), t) {
      const n = f.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return rr(o);
        if (f.isFunction(r))
          return r.call(this, o, n);
        if (f.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = H(t), t) {
      const n = f.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || se(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function u(l) {
      if (l = H(l), l) {
        const d = f.findKey(n, l);
        d && (!r || se(n, n[d], d, r)) && (delete n[d], o = !0);
      }
    }
    return f.isArray(t) ? t.forEach(u) : u(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const u = r[n];
      (!t || se(this, this[u], u, t, !0)) && (delete this[u], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return f.forEach(this, (o, u) => {
      const l = f.findKey(n, u);
      if (l) {
        r[l] = G(o), delete r[u];
        return;
      }
      const d = t ? sr(u) : String(u).trim();
      d !== u && delete r[u], r[d] = G(o), n[d] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return f.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && f.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(t) {
    const n = (this[Fe] = this[Fe] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function u(l) {
      const d = H(l);
      n[d] || (ir(o, l), n[d] = !0);
    }
    return f.isArray(t) ? t.forEach(u) : u(t), this;
  }
}
U.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
f.reduceDescriptors(U.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
f.freezeMethods(U);
function ie(e, t) {
  const r = this || W, n = t || r, o = U.from(n.headers);
  let u = n.data;
  return f.forEach(e, function(d) {
    u = d.call(r, u, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), u;
}
function $e(e) {
  return !!(e && e.__CANCEL__);
}
function K(e, t, r) {
  S.call(this, e ?? "canceled", S.ERR_CANCELED, t, r), this.name = "CanceledError";
}
f.inherits(K, S, {
  __CANCEL__: !0
});
function or(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new S(
    "Request failed with status code " + r.status,
    [S.ERR_BAD_REQUEST, S.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const ar = I.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, o, u) {
      const l = [e + "=" + encodeURIComponent(t)];
      f.isNumber(r) && l.push("expires=" + new Date(r).toGMTString()), f.isString(n) && l.push("path=" + n), f.isString(o) && l.push("domain=" + o), u === !0 && l.push("secure"), document.cookie = l.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function cr(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ur(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Xe(e, t) {
  return e && !cr(t) ? ur(e, t) : t;
}
const lr = I.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function o(u) {
      let l = u;
      return t && (r.setAttribute("href", l), l = r.href), r.setAttribute("href", l), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = o(window.location.href), function(l) {
      const d = f.isString(l) ? o(l) : l;
      return d.protocol === n.protocol && d.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function fr(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function hr(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, u = 0, l;
  return t = t !== void 0 ? t : 1e3, function(x) {
    const y = Date.now(), w = n[u];
    l || (l = y), r[o] = x, n[o] = y;
    let h = u, A = 0;
    for (; h !== o; )
      A += r[h++], h = h % e;
    if (o = (o + 1) % e, o === u && (u = (u + 1) % e), y - l < t)
      return;
    const N = w && y - w;
    return N ? Math.round(A * 1e3 / N) : void 0;
  };
}
function Te(e, t) {
  let r = 0;
  const n = hr(50, 250);
  return (o) => {
    const u = o.loaded, l = o.lengthComputable ? o.total : void 0, d = u - r, x = n(d), y = u <= l;
    r = u;
    const w = {
      loaded: u,
      total: l,
      progress: l ? u / l : void 0,
      bytes: d,
      rate: x || void 0,
      estimated: x && l && y ? (l - u) / x : void 0,
      event: o
    };
    w[t ? "download" : "upload"] = !0, e(w);
  };
}
const dr = typeof XMLHttpRequest < "u", pr = dr && function(e) {
  return new Promise(function(r, n) {
    let o = e.data;
    const u = U.from(e.headers).normalize();
    let { responseType: l, withXSRFToken: d } = e, x;
    function y() {
      e.cancelToken && e.cancelToken.unsubscribe(x), e.signal && e.signal.removeEventListener("abort", x);
    }
    let w;
    if (f.isFormData(o)) {
      if (I.hasStandardBrowserEnv || I.hasStandardBrowserWebWorkerEnv)
        u.setContentType(!1);
      else if ((w = u.getContentType()) !== !1) {
        const [R, ...T] = w ? w.split(";").map((_) => _.trim()).filter(Boolean) : [];
        u.setContentType([R || "multipart/form-data", ...T].join("; "));
      }
    }
    let h = new XMLHttpRequest();
    if (e.auth) {
      const R = e.auth.username || "", T = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      u.set("Authorization", "Basic " + btoa(R + ":" + T));
    }
    const A = Xe(e.baseURL, e.url);
    h.open(e.method.toUpperCase(), Je(A, e.params, e.paramsSerializer), !0), h.timeout = e.timeout;
    function N() {
      if (!h)
        return;
      const R = U.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), _ = {
        data: !l || l === "text" || l === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: R,
        config: e,
        request: h
      };
      or(function(D) {
        r(D), y();
      }, function(D) {
        n(D), y();
      }, _), h = null;
    }
    if ("onloadend" in h ? h.onloadend = N : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(N);
    }, h.onabort = function() {
      h && (n(new S("Request aborted", S.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function() {
      n(new S("Network Error", S.ERR_NETWORK, e, h)), h = null;
    }, h.ontimeout = function() {
      let T = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const _ = e.transitional || We;
      e.timeoutErrorMessage && (T = e.timeoutErrorMessage), n(new S(
        T,
        _.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
        e,
        h
      )), h = null;
    }, I.hasStandardBrowserEnv && (d && f.isFunction(d) && (d = d(e)), d || d !== !1 && lr(A))) {
      const R = e.xsrfHeaderName && e.xsrfCookieName && ar.read(e.xsrfCookieName);
      R && u.set(e.xsrfHeaderName, R);
    }
    o === void 0 && u.setContentType(null), "setRequestHeader" in h && f.forEach(u.toJSON(), function(T, _) {
      h.setRequestHeader(_, T);
    }), f.isUndefined(e.withCredentials) || (h.withCredentials = !!e.withCredentials), l && l !== "json" && (h.responseType = e.responseType), typeof e.onDownloadProgress == "function" && h.addEventListener("progress", Te(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && h.upload && h.upload.addEventListener("progress", Te(e.onUploadProgress)), (e.cancelToken || e.signal) && (x = (R) => {
      h && (n(!R || R.type ? new K(null, e, h) : R), h.abort(), h = null);
    }, e.cancelToken && e.cancelToken.subscribe(x), e.signal && (e.signal.aborted ? x() : e.signal.addEventListener("abort", x)));
    const b = fr(A);
    if (b && I.protocols.indexOf(b) === -1) {
      n(new S("Unsupported protocol " + b + ":", S.ERR_BAD_REQUEST, e));
      return;
    }
    h.send(o || null);
  });
}, ue = {
  http: kt,
  xhr: pr
};
f.forEach(ue, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const _e = (e) => `- ${e}`, mr = (e) => f.isFunction(e) || e === null || e === !1, Ge = {
  getAdapter: (e) => {
    e = f.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const o = {};
    for (let u = 0; u < t; u++) {
      r = e[u];
      let l;
      if (n = r, !mr(r) && (n = ue[(l = String(r)).toLowerCase()], n === void 0))
        throw new S(`Unknown adapter '${l}'`);
      if (n)
        break;
      o[l || "#" + u] = n;
    }
    if (!n) {
      const u = Object.entries(o).map(
        ([d, x]) => `adapter ${d} ` + (x === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let l = t ? u.length > 1 ? `since :
` + u.map(_e).join(`
`) : " " + _e(u[0]) : "as no adapter specified";
      throw new S(
        "There is no suitable adapter to dispatch the request " + l,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: ue
};
function oe(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new K(null, e);
}
function Ce(e) {
  return oe(e), e.headers = U.from(e.headers), e.data = ie.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ge.getAdapter(e.adapter || W.adapter)(e).then(function(n) {
    return oe(e), n.data = ie.call(
      e,
      e.transformResponse,
      n
    ), n.headers = U.from(n.headers), n;
  }, function(n) {
    return $e(n) || (oe(e), n && n.response && (n.response.data = ie.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = U.from(n.response.headers))), Promise.reject(n);
  });
}
const Ne = (e) => e instanceof U ? { ...e } : e;
function k(e, t) {
  t = t || {};
  const r = {};
  function n(y, w, h) {
    return f.isPlainObject(y) && f.isPlainObject(w) ? f.merge.call({ caseless: h }, y, w) : f.isPlainObject(w) ? f.merge({}, w) : f.isArray(w) ? w.slice() : w;
  }
  function o(y, w, h) {
    if (f.isUndefined(w)) {
      if (!f.isUndefined(y))
        return n(void 0, y, h);
    } else
      return n(y, w, h);
  }
  function u(y, w) {
    if (!f.isUndefined(w))
      return n(void 0, w);
  }
  function l(y, w) {
    if (f.isUndefined(w)) {
      if (!f.isUndefined(y))
        return n(void 0, y);
    } else
      return n(void 0, w);
  }
  function d(y, w, h) {
    if (h in t)
      return n(y, w);
    if (h in e)
      return n(void 0, y);
  }
  const x = {
    url: u,
    method: u,
    data: u,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    withXSRFToken: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: d,
    headers: (y, w) => o(Ne(y), Ne(w), !0)
  };
  return f.forEach(Object.keys(Object.assign({}, e, t)), function(w) {
    const h = x[w] || o, A = h(e[w], t[w], w);
    f.isUndefined(A) && h !== d || (r[w] = A);
  }), r;
}
const Ye = "1.6.8", me = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  me[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Pe = {};
me.transitional = function(t, r, n) {
  function o(u, l) {
    return "[Axios v" + Ye + "] Transitional option '" + u + "'" + l + (n ? ". " + n : "");
  }
  return (u, l, d) => {
    if (t === !1)
      throw new S(
        o(l, " has been removed" + (r ? " in " + r : "")),
        S.ERR_DEPRECATED
      );
    return r && !Pe[l] && (Pe[l] = !0, console.warn(
      o(
        l,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(u, l, d) : !0;
  };
};
function yr(e, t, r) {
  if (typeof e != "object")
    throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const u = n[o], l = t[u];
    if (l) {
      const d = e[u], x = d === void 0 || l(d, u, e);
      if (x !== !0)
        throw new S("option " + u + " must be " + x, S.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new S("Unknown option " + u, S.ERR_BAD_OPTION);
  }
}
const le = {
  assertOptions: yr,
  validators: me
}, q = le.validators;
class v {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Ae(),
      response: new Ae()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let o;
        Error.captureStackTrace ? Error.captureStackTrace(o = {}) : o = new Error();
        const u = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        n.stack ? u && !String(n.stack).endsWith(u.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + u) : n.stack = u;
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = k(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: u } = r;
    n !== void 0 && le.assertOptions(n, {
      silentJSONParsing: q.transitional(q.boolean),
      forcedJSONParsing: q.transitional(q.boolean),
      clarifyTimeoutError: q.transitional(q.boolean)
    }, !1), o != null && (f.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : le.assertOptions(o, {
      encode: q.function,
      serialize: q.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let l = u && f.merge(
      u.common,
      u[r.method]
    );
    u && f.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (b) => {
        delete u[b];
      }
    ), r.headers = U.concat(l, u);
    const d = [];
    let x = !0;
    this.interceptors.request.forEach(function(R) {
      typeof R.runWhen == "function" && R.runWhen(r) === !1 || (x = x && R.synchronous, d.unshift(R.fulfilled, R.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function(R) {
      y.push(R.fulfilled, R.rejected);
    });
    let w, h = 0, A;
    if (!x) {
      const b = [Ce.bind(this), void 0];
      for (b.unshift.apply(b, d), b.push.apply(b, y), A = b.length, w = Promise.resolve(r); h < A; )
        w = w.then(b[h++], b[h++]);
      return w;
    }
    A = d.length;
    let N = r;
    for (h = 0; h < A; ) {
      const b = d[h++], R = d[h++];
      try {
        N = b(N);
      } catch (T) {
        R.call(this, T);
        break;
      }
    }
    try {
      w = Ce.call(this, N);
    } catch (b) {
      return Promise.reject(b);
    }
    for (h = 0, A = y.length; h < A; )
      w = w.then(y[h++], y[h++]);
    return w;
  }
  getUri(t) {
    t = k(this.defaults, t);
    const r = Xe(t.baseURL, t.url);
    return Je(r, t.params, t.paramsSerializer);
  }
}
f.forEach(["delete", "get", "head", "options"], function(t) {
  v.prototype[t] = function(r, n) {
    return this.request(k(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
f.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(u, l, d) {
      return this.request(k(d || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: l
      }));
    };
  }
  v.prototype[t] = r(), v.prototype[t + "Form"] = r(!0);
});
class ye {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(u) {
      r = u;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners)
        return;
      let u = n._listeners.length;
      for (; u-- > 0; )
        n._listeners[u](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let u;
      const l = new Promise((d) => {
        n.subscribe(d), u = d;
      }).then(o);
      return l.cancel = function() {
        n.unsubscribe(u);
      }, l;
    }, t(function(u, l, d) {
      n.reason || (n.reason = new K(u, l, d), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new ye(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
function br(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function xr(e) {
  return f.isObject(e) && e.isAxiosError === !0;
}
const fe = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(fe).forEach(([e, t]) => {
  fe[t] = e;
});
function Qe(e) {
  const t = new v(e), r = ge(v.prototype.request, t);
  return f.extend(r, v.prototype, t, { allOwnKeys: !0 }), f.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return Qe(k(e, o));
  }, r;
}
const C = Qe(W);
C.Axios = v;
C.CanceledError = K;
C.CancelToken = ye;
C.isCancel = $e;
C.VERSION = Ye;
C.toFormData = te;
C.AxiosError = S;
C.Cancel = C.CanceledError;
C.all = function(t) {
  return Promise.all(t);
};
C.spread = br;
C.isAxiosError = xr;
C.mergeConfig = k;
C.AxiosHeaders = U;
C.formToJSON = (e) => Ve(f.isHTMLForm(e) ? new FormData(e) : e);
C.getAdapter = Ge.getAdapter;
C.HttpStatusCode = fe;
C.default = C;
var wr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Rr(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var Ze = { exports: {} };
const Er = {}, Or = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Er
}, Symbol.toStringTag, { value: "Module" })), Be = /* @__PURE__ */ Rr(Or);
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.8.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */
(function(e) {
  (function() {
    var t = "input is invalid type", r = "finalize already called", n = typeof window == "object", o = n ? window : {};
    o.JS_MD5_NO_WINDOW && (n = !1);
    var u = !n && typeof self == "object", l = !o.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    l ? o = wr : u && (o = self);
    var d = !o.JS_MD5_NO_COMMON_JS && !0 && e.exports, x = !o.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", y = "0123456789abcdef".split(""), w = [128, 32768, 8388608, -2147483648], h = [0, 8, 16, 24], A = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], N = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), b = [], R;
    if (x) {
      var T = new ArrayBuffer(68);
      R = new Uint8Array(T), b = new Uint32Array(T);
    }
    var _ = Array.isArray;
    (o.JS_MD5_NO_NODE_JS || !_) && (_ = function(s) {
      return Object.prototype.toString.call(s) === "[object Array]";
    });
    var B = ArrayBuffer.isView;
    x && (o.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !B) && (B = function(s) {
      return typeof s == "object" && s.buffer && s.buffer.constructor === ArrayBuffer;
    });
    var D = function(s) {
      var a = typeof s;
      if (a === "string")
        return [s, !0];
      if (a !== "object" || s === null)
        throw new Error(t);
      if (x && s.constructor === ArrayBuffer)
        return [new Uint8Array(s), !1];
      if (!_(s) && !B(s))
        throw new Error(t);
      return [s, !1];
    }, V = function(s) {
      return function(a) {
        return new F(!0).update(a)[s]();
      };
    }, et = function() {
      var s = V("hex");
      l && (s = tt(s)), s.create = function() {
        return new F();
      }, s.update = function(i) {
        return s.create().update(i);
      };
      for (var a = 0; a < A.length; ++a) {
        var c = A[a];
        s[c] = V(c);
      }
      return s;
    }, tt = function(s) {
      var a = Be, c = Be.Buffer, i;
      c.from && !o.JS_MD5_NO_BUFFER_FROM ? i = c.from : i = function(m) {
        return new c(m);
      };
      var E = function(m) {
        if (typeof m == "string")
          return a.createHash("md5").update(m, "utf8").digest("hex");
        if (m == null)
          throw new Error(t);
        return m.constructor === ArrayBuffer && (m = new Uint8Array(m)), _(m) || B(m) || m.constructor === c ? a.createHash("md5").update(i(m)).digest("hex") : s(m);
      };
      return E;
    }, be = function(s) {
      return function(a, c) {
        return new $(a, !0).update(c)[s]();
      };
    }, rt = function() {
      var s = be("hex");
      s.create = function(i) {
        return new $(i);
      }, s.update = function(i, E) {
        return s.create(i).update(E);
      };
      for (var a = 0; a < A.length; ++a) {
        var c = A[a];
        s[c] = be(c);
      }
      return s;
    };
    function F(s) {
      if (s)
        b[0] = b[16] = b[1] = b[2] = b[3] = b[4] = b[5] = b[6] = b[7] = b[8] = b[9] = b[10] = b[11] = b[12] = b[13] = b[14] = b[15] = 0, this.blocks = b, this.buffer8 = R;
      else if (x) {
        var a = new ArrayBuffer(68);
        this.buffer8 = new Uint8Array(a), this.blocks = new Uint32Array(a);
      } else
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
    }
    F.prototype.update = function(s) {
      if (this.finalized)
        throw new Error(r);
      var a = D(s);
      s = a[0];
      for (var c = a[1], i, E = 0, m, p = s.length, O = this.blocks, P = this.buffer8; E < p; ) {
        if (this.hashed && (this.hashed = !1, O[0] = O[16], O[16] = O[1] = O[2] = O[3] = O[4] = O[5] = O[6] = O[7] = O[8] = O[9] = O[10] = O[11] = O[12] = O[13] = O[14] = O[15] = 0), c)
          if (x)
            for (m = this.start; E < p && m < 64; ++E)
              i = s.charCodeAt(E), i < 128 ? P[m++] = i : i < 2048 ? (P[m++] = 192 | i >>> 6, P[m++] = 128 | i & 63) : i < 55296 || i >= 57344 ? (P[m++] = 224 | i >>> 12, P[m++] = 128 | i >>> 6 & 63, P[m++] = 128 | i & 63) : (i = 65536 + ((i & 1023) << 10 | s.charCodeAt(++E) & 1023), P[m++] = 240 | i >>> 18, P[m++] = 128 | i >>> 12 & 63, P[m++] = 128 | i >>> 6 & 63, P[m++] = 128 | i & 63);
          else
            for (m = this.start; E < p && m < 64; ++E)
              i = s.charCodeAt(E), i < 128 ? O[m >>> 2] |= i << h[m++ & 3] : i < 2048 ? (O[m >>> 2] |= (192 | i >>> 6) << h[m++ & 3], O[m >>> 2] |= (128 | i & 63) << h[m++ & 3]) : i < 55296 || i >= 57344 ? (O[m >>> 2] |= (224 | i >>> 12) << h[m++ & 3], O[m >>> 2] |= (128 | i >>> 6 & 63) << h[m++ & 3], O[m >>> 2] |= (128 | i & 63) << h[m++ & 3]) : (i = 65536 + ((i & 1023) << 10 | s.charCodeAt(++E) & 1023), O[m >>> 2] |= (240 | i >>> 18) << h[m++ & 3], O[m >>> 2] |= (128 | i >>> 12 & 63) << h[m++ & 3], O[m >>> 2] |= (128 | i >>> 6 & 63) << h[m++ & 3], O[m >>> 2] |= (128 | i & 63) << h[m++ & 3]);
        else if (x)
          for (m = this.start; E < p && m < 64; ++E)
            P[m++] = s[E];
        else
          for (m = this.start; E < p && m < 64; ++E)
            O[m >>> 2] |= s[E] << h[m++ & 3];
        this.lastByteIndex = m, this.bytes += m - this.start, m >= 64 ? (this.start = m - 64, this.hash(), this.hashed = !0) : this.start = m;
      }
      return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
    }, F.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var s = this.blocks, a = this.lastByteIndex;
        s[a >>> 2] |= w[a & 3], a >= 56 && (this.hashed || this.hash(), s[0] = s[16], s[16] = s[1] = s[2] = s[3] = s[4] = s[5] = s[6] = s[7] = s[8] = s[9] = s[10] = s[11] = s[12] = s[13] = s[14] = s[15] = 0), s[14] = this.bytes << 3, s[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
      }
    }, F.prototype.hash = function() {
      var s, a, c, i, E, m, p = this.blocks;
      this.first ? (s = p[0] - 680876937, s = (s << 7 | s >>> 25) - 271733879 << 0, i = (-1732584194 ^ s & 2004318071) + p[1] - 117830708, i = (i << 12 | i >>> 20) + s << 0, c = (-271733879 ^ i & (s ^ -271733879)) + p[2] - 1126478375, c = (c << 17 | c >>> 15) + i << 0, a = (s ^ c & (i ^ s)) + p[3] - 1316259209, a = (a << 22 | a >>> 10) + c << 0) : (s = this.h0, a = this.h1, c = this.h2, i = this.h3, s += (i ^ a & (c ^ i)) + p[0] - 680876936, s = (s << 7 | s >>> 25) + a << 0, i += (c ^ s & (a ^ c)) + p[1] - 389564586, i = (i << 12 | i >>> 20) + s << 0, c += (a ^ i & (s ^ a)) + p[2] + 606105819, c = (c << 17 | c >>> 15) + i << 0, a += (s ^ c & (i ^ s)) + p[3] - 1044525330, a = (a << 22 | a >>> 10) + c << 0), s += (i ^ a & (c ^ i)) + p[4] - 176418897, s = (s << 7 | s >>> 25) + a << 0, i += (c ^ s & (a ^ c)) + p[5] + 1200080426, i = (i << 12 | i >>> 20) + s << 0, c += (a ^ i & (s ^ a)) + p[6] - 1473231341, c = (c << 17 | c >>> 15) + i << 0, a += (s ^ c & (i ^ s)) + p[7] - 45705983, a = (a << 22 | a >>> 10) + c << 0, s += (i ^ a & (c ^ i)) + p[8] + 1770035416, s = (s << 7 | s >>> 25) + a << 0, i += (c ^ s & (a ^ c)) + p[9] - 1958414417, i = (i << 12 | i >>> 20) + s << 0, c += (a ^ i & (s ^ a)) + p[10] - 42063, c = (c << 17 | c >>> 15) + i << 0, a += (s ^ c & (i ^ s)) + p[11] - 1990404162, a = (a << 22 | a >>> 10) + c << 0, s += (i ^ a & (c ^ i)) + p[12] + 1804603682, s = (s << 7 | s >>> 25) + a << 0, i += (c ^ s & (a ^ c)) + p[13] - 40341101, i = (i << 12 | i >>> 20) + s << 0, c += (a ^ i & (s ^ a)) + p[14] - 1502002290, c = (c << 17 | c >>> 15) + i << 0, a += (s ^ c & (i ^ s)) + p[15] + 1236535329, a = (a << 22 | a >>> 10) + c << 0, s += (c ^ i & (a ^ c)) + p[1] - 165796510, s = (s << 5 | s >>> 27) + a << 0, i += (a ^ c & (s ^ a)) + p[6] - 1069501632, i = (i << 9 | i >>> 23) + s << 0, c += (s ^ a & (i ^ s)) + p[11] + 643717713, c = (c << 14 | c >>> 18) + i << 0, a += (i ^ s & (c ^ i)) + p[0] - 373897302, a = (a << 20 | a >>> 12) + c << 0, s += (c ^ i & (a ^ c)) + p[5] - 701558691, s = (s << 5 | s >>> 27) + a << 0, i += (a ^ c & (s ^ a)) + p[10] + 38016083, i = (i << 9 | i >>> 23) + s << 0, c += (s ^ a & (i ^ s)) + p[15] - 660478335, c = (c << 14 | c >>> 18) + i << 0, a += (i ^ s & (c ^ i)) + p[4] - 405537848, a = (a << 20 | a >>> 12) + c << 0, s += (c ^ i & (a ^ c)) + p[9] + 568446438, s = (s << 5 | s >>> 27) + a << 0, i += (a ^ c & (s ^ a)) + p[14] - 1019803690, i = (i << 9 | i >>> 23) + s << 0, c += (s ^ a & (i ^ s)) + p[3] - 187363961, c = (c << 14 | c >>> 18) + i << 0, a += (i ^ s & (c ^ i)) + p[8] + 1163531501, a = (a << 20 | a >>> 12) + c << 0, s += (c ^ i & (a ^ c)) + p[13] - 1444681467, s = (s << 5 | s >>> 27) + a << 0, i += (a ^ c & (s ^ a)) + p[2] - 51403784, i = (i << 9 | i >>> 23) + s << 0, c += (s ^ a & (i ^ s)) + p[7] + 1735328473, c = (c << 14 | c >>> 18) + i << 0, a += (i ^ s & (c ^ i)) + p[12] - 1926607734, a = (a << 20 | a >>> 12) + c << 0, E = a ^ c, s += (E ^ i) + p[5] - 378558, s = (s << 4 | s >>> 28) + a << 0, i += (E ^ s) + p[8] - 2022574463, i = (i << 11 | i >>> 21) + s << 0, m = i ^ s, c += (m ^ a) + p[11] + 1839030562, c = (c << 16 | c >>> 16) + i << 0, a += (m ^ c) + p[14] - 35309556, a = (a << 23 | a >>> 9) + c << 0, E = a ^ c, s += (E ^ i) + p[1] - 1530992060, s = (s << 4 | s >>> 28) + a << 0, i += (E ^ s) + p[4] + 1272893353, i = (i << 11 | i >>> 21) + s << 0, m = i ^ s, c += (m ^ a) + p[7] - 155497632, c = (c << 16 | c >>> 16) + i << 0, a += (m ^ c) + p[10] - 1094730640, a = (a << 23 | a >>> 9) + c << 0, E = a ^ c, s += (E ^ i) + p[13] + 681279174, s = (s << 4 | s >>> 28) + a << 0, i += (E ^ s) + p[0] - 358537222, i = (i << 11 | i >>> 21) + s << 0, m = i ^ s, c += (m ^ a) + p[3] - 722521979, c = (c << 16 | c >>> 16) + i << 0, a += (m ^ c) + p[6] + 76029189, a = (a << 23 | a >>> 9) + c << 0, E = a ^ c, s += (E ^ i) + p[9] - 640364487, s = (s << 4 | s >>> 28) + a << 0, i += (E ^ s) + p[12] - 421815835, i = (i << 11 | i >>> 21) + s << 0, m = i ^ s, c += (m ^ a) + p[15] + 530742520, c = (c << 16 | c >>> 16) + i << 0, a += (m ^ c) + p[2] - 995338651, a = (a << 23 | a >>> 9) + c << 0, s += (c ^ (a | ~i)) + p[0] - 198630844, s = (s << 6 | s >>> 26) + a << 0, i += (a ^ (s | ~c)) + p[7] + 1126891415, i = (i << 10 | i >>> 22) + s << 0, c += (s ^ (i | ~a)) + p[14] - 1416354905, c = (c << 15 | c >>> 17) + i << 0, a += (i ^ (c | ~s)) + p[5] - 57434055, a = (a << 21 | a >>> 11) + c << 0, s += (c ^ (a | ~i)) + p[12] + 1700485571, s = (s << 6 | s >>> 26) + a << 0, i += (a ^ (s | ~c)) + p[3] - 1894986606, i = (i << 10 | i >>> 22) + s << 0, c += (s ^ (i | ~a)) + p[10] - 1051523, c = (c << 15 | c >>> 17) + i << 0, a += (i ^ (c | ~s)) + p[1] - 2054922799, a = (a << 21 | a >>> 11) + c << 0, s += (c ^ (a | ~i)) + p[8] + 1873313359, s = (s << 6 | s >>> 26) + a << 0, i += (a ^ (s | ~c)) + p[15] - 30611744, i = (i << 10 | i >>> 22) + s << 0, c += (s ^ (i | ~a)) + p[6] - 1560198380, c = (c << 15 | c >>> 17) + i << 0, a += (i ^ (c | ~s)) + p[13] + 1309151649, a = (a << 21 | a >>> 11) + c << 0, s += (c ^ (a | ~i)) + p[4] - 145523070, s = (s << 6 | s >>> 26) + a << 0, i += (a ^ (s | ~c)) + p[11] - 1120210379, i = (i << 10 | i >>> 22) + s << 0, c += (s ^ (i | ~a)) + p[2] + 718787259, c = (c << 15 | c >>> 17) + i << 0, a += (i ^ (c | ~s)) + p[9] - 343485551, a = (a << 21 | a >>> 11) + c << 0, this.first ? (this.h0 = s + 1732584193 << 0, this.h1 = a - 271733879 << 0, this.h2 = c - 1732584194 << 0, this.h3 = i + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + s << 0, this.h1 = this.h1 + a << 0, this.h2 = this.h2 + c << 0, this.h3 = this.h3 + i << 0);
    }, F.prototype.hex = function() {
      this.finalize();
      var s = this.h0, a = this.h1, c = this.h2, i = this.h3;
      return y[s >>> 4 & 15] + y[s & 15] + y[s >>> 12 & 15] + y[s >>> 8 & 15] + y[s >>> 20 & 15] + y[s >>> 16 & 15] + y[s >>> 28 & 15] + y[s >>> 24 & 15] + y[a >>> 4 & 15] + y[a & 15] + y[a >>> 12 & 15] + y[a >>> 8 & 15] + y[a >>> 20 & 15] + y[a >>> 16 & 15] + y[a >>> 28 & 15] + y[a >>> 24 & 15] + y[c >>> 4 & 15] + y[c & 15] + y[c >>> 12 & 15] + y[c >>> 8 & 15] + y[c >>> 20 & 15] + y[c >>> 16 & 15] + y[c >>> 28 & 15] + y[c >>> 24 & 15] + y[i >>> 4 & 15] + y[i & 15] + y[i >>> 12 & 15] + y[i >>> 8 & 15] + y[i >>> 20 & 15] + y[i >>> 16 & 15] + y[i >>> 28 & 15] + y[i >>> 24 & 15];
    }, F.prototype.toString = F.prototype.hex, F.prototype.digest = function() {
      this.finalize();
      var s = this.h0, a = this.h1, c = this.h2, i = this.h3;
      return [
        s & 255,
        s >>> 8 & 255,
        s >>> 16 & 255,
        s >>> 24 & 255,
        a & 255,
        a >>> 8 & 255,
        a >>> 16 & 255,
        a >>> 24 & 255,
        c & 255,
        c >>> 8 & 255,
        c >>> 16 & 255,
        c >>> 24 & 255,
        i & 255,
        i >>> 8 & 255,
        i >>> 16 & 255,
        i >>> 24 & 255
      ];
    }, F.prototype.array = F.prototype.digest, F.prototype.arrayBuffer = function() {
      this.finalize();
      var s = new ArrayBuffer(16), a = new Uint32Array(s);
      return a[0] = this.h0, a[1] = this.h1, a[2] = this.h2, a[3] = this.h3, s;
    }, F.prototype.buffer = F.prototype.arrayBuffer, F.prototype.base64 = function() {
      for (var s, a, c, i = "", E = this.array(), m = 0; m < 15; )
        s = E[m++], a = E[m++], c = E[m++], i += N[s >>> 2] + N[(s << 4 | a >>> 4) & 63] + N[(a << 2 | c >>> 6) & 63] + N[c & 63];
      return s = E[m], i += N[s >>> 2] + N[s << 4 & 63] + "==", i;
    };
    function $(s, a) {
      var c, i = D(s);
      if (s = i[0], i[1]) {
        var E = [], m = s.length, p = 0, O;
        for (c = 0; c < m; ++c)
          O = s.charCodeAt(c), O < 128 ? E[p++] = O : O < 2048 ? (E[p++] = 192 | O >>> 6, E[p++] = 128 | O & 63) : O < 55296 || O >= 57344 ? (E[p++] = 224 | O >>> 12, E[p++] = 128 | O >>> 6 & 63, E[p++] = 128 | O & 63) : (O = 65536 + ((O & 1023) << 10 | s.charCodeAt(++c) & 1023), E[p++] = 240 | O >>> 18, E[p++] = 128 | O >>> 12 & 63, E[p++] = 128 | O >>> 6 & 63, E[p++] = 128 | O & 63);
        s = E;
      }
      s.length > 64 && (s = new F(!0).update(s).array());
      var P = [], xe = [];
      for (c = 0; c < 64; ++c) {
        var we = s[c] || 0;
        P[c] = 92 ^ we, xe[c] = 54 ^ we;
      }
      F.call(this, a), this.update(xe), this.oKeyPad = P, this.inner = !0, this.sharedMemory = a;
    }
    $.prototype = new F(), $.prototype.finalize = function() {
      if (F.prototype.finalize.call(this), this.inner) {
        this.inner = !1;
        var s = this.array();
        F.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(s), F.prototype.finalize.call(this);
      }
    };
    var M = et();
    M.md5 = M, M.md5.hmac = rt(), d ? e.exports = M : o.md5 = M;
  })();
})(Ze);
var Sr = Ze.exports;
const Y = class Y {
  constructor() {
    /**
     * 单例队列
     * keyByUrl {
     *   canceler,
     *   result,
     *   times,
     * }
     * @type {{}}
     */
    re(this, "RequestInsCache", {});
  }
  /**
   * 获取单例
   */
  static getInstance() {
    return this.RequestIns === null && (this.RequestIns = new Y()), this.RequestIns;
  }
  /**
   * 获取当前的请求池数据
   * @return {{cancel: {}, result: {}}}
   */
  getRequestPools() {
    return this.RequestInsCache;
  }
  /**
   * 组装url,生成当次请求的Token
   * @param config
   */
  getKeyByUrl(t) {
    const { method: r, url: n } = t;
    let o;
    if (t != null && t.identity)
      o = t.identity;
    else {
      let u = n;
      r && (t != null && t.params && (u += JSON.stringify(t.params)), t != null && t.data && (u += JSON.stringify(t.data))), o = Sr.md5(u || "");
    }
    return o;
  }
  /**
   * 获取 content-type
   * @param config
   */
  setContentType(t) {
    let r = "";
    if (Object.prototype.hasOwnProperty.call(t, "contentType"))
      r = t.contentType || "";
    else
      switch ((t.method || "").toUpperCase()) {
        case "POST":
          r = "application/x-www-form-urlencoded";
          break;
        case "FILE":
          r = "multipart/form-data";
          break;
        default:
          r = "";
          break;
      }
    return r;
  }
  /**
   * 是否存在已有请求
   * @param keyByUrl
   * @return {boolean}
   */
  isHasCacheRequest(t) {
    return Object.prototype.hasOwnProperty.call(
      this.RequestInsCache,
      t
    );
  }
  /**
   * 删除已有请求
   * @param keyByUrl
   */
  deleteCacheRequest(t) {
    delete this.RequestInsCache[t];
  }
  /**
   * 获取请求实例
   * @param config
   * @return object
   */
  getRequestIns(t) {
    let r = {};
    const n = this.setContentType(t);
    n && (r["content-type"] = n), r = {
      ...r,
      ...t.headers
    };
    const o = C.create({
      baseURL: t.baseUrl || "",
      timeout: t.timeout,
      headers: r
    });
    return o.interceptors.request.use((u) => {
      const l = u, d = new AbortController();
      l.signal = d.signal;
      const x = this.getKeyByUrl(t.identity ? { identity: t.identity } : u);
      return this.RequestInsCache[x].cancel = d, l;
    }, (u) => Promise.reject(u)), o.interceptors.response.use(
      (u) => u,
      (u) => Promise.reject(u)
    ), o;
  }
  /**
   * 关闭请求
   * @param keyByUrl
   */
  cancelRequest(t) {
    if (typeof t == "object") {
      const r = this.getKeyByUrl(t);
      this.isHasCacheRequest(r) && this.RequestInsCache[r].cancel.abort();
    } else {
      const r = t;
      r ? this.isHasCacheRequest(r) && this.RequestInsCache[r].cancel.abort() : Object.keys(this.RequestInsCache).forEach((n) => {
        this.RequestInsCache[n].cancel.abort();
      });
    }
  }
  /**
   * 相同请求次数
   *  @param work add / deduct
   * @param keyByUrl
   */
  addRequestTimes(t, r) {
    let n = this.RequestInsCache[r].times || 0;
    switch (t) {
      case "deduct":
        n -= 1;
        break;
      case "add":
      default:
        n += 1;
        break;
    }
    return this.RequestInsCache[r].times = n, n;
  }
  /**
   * 设置请求值
   */
  setRequestResult(t, r, n) {
    var u, l;
    (((l = (u = this.RequestInsCache) == null ? void 0 : u[t]) == null ? void 0 : l.times) || 0) > 0 ? this.RequestInsCache[t].result = {
      status: r,
      data: n
    } : this.deleteCacheRequest(t);
  }
  /**
   * 请求发送
   * @param axiosIns
   * @param config
   * @return {Promise<unknown>}
   */
  doRequest(t, r) {
    const n = this.getKeyByUrl(r), o = this.isHasCacheRequest(n);
    let u = null;
    return o || (this.RequestInsCache[n] = {}), o ? (this.addRequestTimes("add", n), u = new Promise((l, d) => {
      const x = setInterval(() => {
        var y, w;
        if ((w = (y = this.RequestInsCache[n]) == null ? void 0 : y.result) != null && w.status) {
          clearInterval(x);
          const h = this.addRequestTimes("deduct", n), A = this.RequestInsCache[n].result;
          h <= 0 && this.deleteCacheRequest(n), A.status === "success" ? l(A.data) : d(A.data);
        }
      }, 500);
    })) : u = new Promise((l, d) => {
      t(r).then((x) => {
        this.setRequestResult(n, "success", x), l(x);
      }).catch((x) => {
        this.setRequestResult(n, "error", x), d(x);
      });
    }), u;
  }
};
re(Y, "RequestIns", null);
let he = Y;
const Fr = he.getInstance();
export {
  Fr as default
};
