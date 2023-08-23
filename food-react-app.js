function a1(I) {
  return I && I.__esModule && Object.prototype.hasOwnProperty.call(I, "default") ? I.default : I;
}
var d0 = { exports: {} }, Wp = {}, p0 = { exports: {} }, bt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kx;
function q_() {
  if (Kx)
    return bt;
  Kx = 1;
  var I = Symbol.for("react.element"), Y = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), Xe = Symbol.for("react.strict_mode"), et = Symbol.for("react.profiler"), ge = Symbol.for("react.provider"), S = Symbol.for("react.context"), ft = Symbol.for("react.forward_ref"), se = Symbol.for("react.suspense"), ce = Symbol.for("react.memo"), We = Symbol.for("react.lazy"), te = Symbol.iterator;
  function ue(T) {
    return T === null || typeof T != "object" ? null : (T = te && T[te] || T["@@iterator"], typeof T == "function" ? T : null);
  }
  var fe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Pe = Object.assign, gt = {};
  function st(T, B, le) {
    this.props = T, this.context = B, this.refs = gt, this.updater = le || fe;
  }
  st.prototype.isReactComponent = {}, st.prototype.setState = function(T, B) {
    if (typeof T != "object" && typeof T != "function" && T != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, T, B, "setState");
  }, st.prototype.forceUpdate = function(T) {
    this.updater.enqueueForceUpdate(this, T, "forceUpdate");
  };
  function an() {
  }
  an.prototype = st.prototype;
  function at(T, B, le) {
    this.props = T, this.context = B, this.refs = gt, this.updater = le || fe;
  }
  var Qe = at.prototype = new an();
  Qe.constructor = at, Pe(Qe, st.prototype), Qe.isPureReactComponent = !0;
  var ct = Array.isArray, De = Object.prototype.hasOwnProperty, it = { current: null }, Ve = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Gt(T, B, le) {
    var Te, Me = {}, Ct = null, lt = null;
    if (B != null)
      for (Te in B.ref !== void 0 && (lt = B.ref), B.key !== void 0 && (Ct = "" + B.key), B)
        De.call(B, Te) && !Ve.hasOwnProperty(Te) && (Me[Te] = B[Te]);
    var ht = arguments.length - 2;
    if (ht === 1)
      Me.children = le;
    else if (1 < ht) {
      for (var ut = Array(ht), Ht = 0; Ht < ht; Ht++)
        ut[Ht] = arguments[Ht + 2];
      Me.children = ut;
    }
    if (T && T.defaultProps)
      for (Te in ht = T.defaultProps, ht)
        Me[Te] === void 0 && (Me[Te] = ht[Te]);
    return { $$typeof: I, type: T, key: Ct, ref: lt, props: Me, _owner: it.current };
  }
  function hn(T, B) {
    return { $$typeof: I, type: T.type, key: B, ref: T.ref, props: T.props, _owner: T._owner };
  }
  function Ut(T) {
    return typeof T == "object" && T !== null && T.$$typeof === I;
  }
  function _t(T) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + T.replace(/[=:]/g, function(le) {
      return B[le];
    });
  }
  var ln = /\/+/g;
  function ze(T, B) {
    return typeof T == "object" && T !== null && T.key != null ? _t("" + T.key) : B.toString(36);
  }
  function Ge(T, B, le, Te, Me) {
    var Ct = typeof T;
    (Ct === "undefined" || Ct === "boolean") && (T = null);
    var lt = !1;
    if (T === null)
      lt = !0;
    else
      switch (Ct) {
        case "string":
        case "number":
          lt = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case I:
            case Y:
              lt = !0;
          }
      }
    if (lt)
      return lt = T, Me = Me(lt), T = Te === "" ? "." + ze(lt, 0) : Te, ct(Me) ? (le = "", T != null && (le = T.replace(ln, "$&/") + "/"), Ge(Me, B, le, "", function(Ht) {
        return Ht;
      })) : Me != null && (Ut(Me) && (Me = hn(Me, le + (!Me.key || lt && lt.key === Me.key ? "" : ("" + Me.key).replace(ln, "$&/") + "/") + T)), B.push(Me)), 1;
    if (lt = 0, Te = Te === "" ? "." : Te + ":", ct(T))
      for (var ht = 0; ht < T.length; ht++) {
        Ct = T[ht];
        var ut = Te + ze(Ct, ht);
        lt += Ge(Ct, B, le, ut, Me);
      }
    else if (ut = ue(T), typeof ut == "function")
      for (T = ut.call(T), ht = 0; !(Ct = T.next()).done; )
        Ct = Ct.value, ut = Te + ze(Ct, ht++), lt += Ge(Ct, B, le, ut, Me);
    else if (Ct === "object")
      throw B = String(T), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.");
    return lt;
  }
  function Mt(T, B, le) {
    if (T == null)
      return T;
    var Te = [], Me = 0;
    return Ge(T, Te, "", "", function(Ct) {
      return B.call(le, Ct, Me++);
    }), Te;
  }
  function St(T) {
    if (T._status === -1) {
      var B = T._result;
      B = B(), B.then(function(le) {
        (T._status === 0 || T._status === -1) && (T._status = 1, T._result = le);
      }, function(le) {
        (T._status === 0 || T._status === -1) && (T._status = 2, T._result = le);
      }), T._status === -1 && (T._status = 0, T._result = B);
    }
    if (T._status === 1)
      return T._result.default;
    throw T._result;
  }
  var Se = { current: null }, Z = { transition: null }, K = { ReactCurrentDispatcher: Se, ReactCurrentBatchConfig: Z, ReactCurrentOwner: it };
  return bt.Children = { map: Mt, forEach: function(T, B, le) {
    Mt(T, function() {
      B.apply(this, arguments);
    }, le);
  }, count: function(T) {
    var B = 0;
    return Mt(T, function() {
      B++;
    }), B;
  }, toArray: function(T) {
    return Mt(T, function(B) {
      return B;
    }) || [];
  }, only: function(T) {
    if (!Ut(T))
      throw Error("React.Children.only expected to receive a single React element child.");
    return T;
  } }, bt.Component = st, bt.Fragment = M, bt.Profiler = et, bt.PureComponent = at, bt.StrictMode = Xe, bt.Suspense = se, bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K, bt.cloneElement = function(T, B, le) {
    if (T == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + T + ".");
    var Te = Pe({}, T.props), Me = T.key, Ct = T.ref, lt = T._owner;
    if (B != null) {
      if (B.ref !== void 0 && (Ct = B.ref, lt = it.current), B.key !== void 0 && (Me = "" + B.key), T.type && T.type.defaultProps)
        var ht = T.type.defaultProps;
      for (ut in B)
        De.call(B, ut) && !Ve.hasOwnProperty(ut) && (Te[ut] = B[ut] === void 0 && ht !== void 0 ? ht[ut] : B[ut]);
    }
    var ut = arguments.length - 2;
    if (ut === 1)
      Te.children = le;
    else if (1 < ut) {
      ht = Array(ut);
      for (var Ht = 0; Ht < ut; Ht++)
        ht[Ht] = arguments[Ht + 2];
      Te.children = ht;
    }
    return { $$typeof: I, type: T.type, key: Me, ref: Ct, props: Te, _owner: lt };
  }, bt.createContext = function(T) {
    return T = { $$typeof: S, _currentValue: T, _currentValue2: T, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, T.Provider = { $$typeof: ge, _context: T }, T.Consumer = T;
  }, bt.createElement = Gt, bt.createFactory = function(T) {
    var B = Gt.bind(null, T);
    return B.type = T, B;
  }, bt.createRef = function() {
    return { current: null };
  }, bt.forwardRef = function(T) {
    return { $$typeof: ft, render: T };
  }, bt.isValidElement = Ut, bt.lazy = function(T) {
    return { $$typeof: We, _payload: { _status: -1, _result: T }, _init: St };
  }, bt.memo = function(T, B) {
    return { $$typeof: ce, type: T, compare: B === void 0 ? null : B };
  }, bt.startTransition = function(T) {
    var B = Z.transition;
    Z.transition = {};
    try {
      T();
    } finally {
      Z.transition = B;
    }
  }, bt.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, bt.useCallback = function(T, B) {
    return Se.current.useCallback(T, B);
  }, bt.useContext = function(T) {
    return Se.current.useContext(T);
  }, bt.useDebugValue = function() {
  }, bt.useDeferredValue = function(T) {
    return Se.current.useDeferredValue(T);
  }, bt.useEffect = function(T, B) {
    return Se.current.useEffect(T, B);
  }, bt.useId = function() {
    return Se.current.useId();
  }, bt.useImperativeHandle = function(T, B, le) {
    return Se.current.useImperativeHandle(T, B, le);
  }, bt.useInsertionEffect = function(T, B) {
    return Se.current.useInsertionEffect(T, B);
  }, bt.useLayoutEffect = function(T, B) {
    return Se.current.useLayoutEffect(T, B);
  }, bt.useMemo = function(T, B) {
    return Se.current.useMemo(T, B);
  }, bt.useReducer = function(T, B, le) {
    return Se.current.useReducer(T, B, le);
  }, bt.useRef = function(T) {
    return Se.current.useRef(T);
  }, bt.useState = function(T) {
    return Se.current.useState(T);
  }, bt.useSyncExternalStore = function(T, B, le) {
    return Se.current.useSyncExternalStore(T, B, le);
  }, bt.useTransition = function() {
    return Se.current.useTransition();
  }, bt.version = "18.2.0", bt;
}
var qp = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
qp.exports;
var qx;
function X_() {
  return qx || (qx = 1, function(I, Y) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var M = "18.2.0", Xe = Symbol.for("react.element"), et = Symbol.for("react.portal"), ge = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), ft = Symbol.for("react.profiler"), se = Symbol.for("react.provider"), ce = Symbol.for("react.context"), We = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), ue = Symbol.for("react.suspense_list"), fe = Symbol.for("react.memo"), Pe = Symbol.for("react.lazy"), gt = Symbol.for("react.offscreen"), st = Symbol.iterator, an = "@@iterator";
      function at(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = st && h[st] || h[an];
        return typeof C == "function" ? C : null;
      }
      var Qe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ct = {
        transition: null
      }, De = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, it = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ve = {}, Gt = null;
      function hn(h) {
        Gt = h;
      }
      Ve.setExtraStackFrame = function(h) {
        Gt = h;
      }, Ve.getCurrentStack = null, Ve.getStackAddendum = function() {
        var h = "";
        Gt && (h += Gt);
        var C = Ve.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Ut = !1, _t = !1, ln = !1, ze = !1, Ge = !1, Mt = {
        ReactCurrentDispatcher: Qe,
        ReactCurrentBatchConfig: ct,
        ReactCurrentOwner: it
      };
      Mt.ReactDebugCurrentFrame = Ve, Mt.ReactCurrentActQueue = De;
      function St(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            z[F - 1] = arguments[F];
          Z("warn", h, z);
        }
      }
      function Se(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            z[F - 1] = arguments[F];
          Z("error", h, z);
        }
      }
      function Z(h, C, z) {
        {
          var F = Mt.ReactDebugCurrentFrame, J = F.getStackAddendum();
          J !== "" && (C += "%s", z = z.concat([J]));
          var Fe = z.map(function(oe) {
            return String(oe);
          });
          Fe.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Fe);
        }
      }
      var K = {};
      function T(h, C) {
        {
          var z = h.constructor, F = z && (z.displayName || z.name) || "ReactClass", J = F + "." + C;
          if (K[J])
            return;
          Se("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, F), K[J] = !0;
        }
      }
      var B = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, z) {
          T(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, z, F) {
          T(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, z, F) {
          T(h, "setState");
        }
      }, le = Object.assign, Te = {};
      Object.freeze(Te);
      function Me(h, C, z) {
        this.props = h, this.context = C, this.refs = Te, this.updater = z || B;
      }
      Me.prototype.isReactComponent = {}, Me.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Me.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var Ct = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, lt = function(h, C) {
          Object.defineProperty(Me.prototype, h, {
            get: function() {
              St("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var ht in Ct)
          Ct.hasOwnProperty(ht) && lt(ht, Ct[ht]);
      }
      function ut() {
      }
      ut.prototype = Me.prototype;
      function Ht(h, C, z) {
        this.props = h, this.context = C, this.refs = Te, this.updater = z || B;
      }
      var Br = Ht.prototype = new ut();
      Br.constructor = Ht, le(Br, Me.prototype), Br.isPureReactComponent = !0;
      function hr() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var $r = Array.isArray;
      function mn(h) {
        return $r(h);
      }
      function Qn(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, z = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return z;
        }
      }
      function Fn(h) {
        try {
          return Hn(h), !1;
        } catch {
          return !0;
        }
      }
      function Hn(h) {
        return "" + h;
      }
      function Dn(h) {
        if (Fn(h))
          return Se("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qn(h)), Hn(h);
      }
      function Ir(h, C, z) {
        var F = h.displayName;
        if (F)
          return F;
        var J = C.displayName || C.name || "";
        return J !== "" ? z + "(" + J + ")" : z;
      }
      function Yr(h) {
        return h.displayName || "Context";
      }
      function Wn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && Se("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case ge:
            return "Fragment";
          case et:
            return "Portal";
          case ft:
            return "Profiler";
          case S:
            return "StrictMode";
          case te:
            return "Suspense";
          case ue:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ce:
              var C = h;
              return Yr(C) + ".Consumer";
            case se:
              var z = h;
              return Yr(z._context) + ".Provider";
            case We:
              return Ir(h, h.render, "ForwardRef");
            case fe:
              var F = h.displayName || null;
              return F !== null ? F : Wn(h.type) || "Memo";
            case Pe: {
              var J = h, Fe = J._payload, oe = J._init;
              try {
                return Wn(oe(Fe));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var mr = Object.prototype.hasOwnProperty, Qr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, yr, fa, nr;
      nr = {};
      function Wr(h) {
        if (mr.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function yn(h) {
        if (mr.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function br(h, C) {
        var z = function() {
          yr || (yr = !0, Se("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: z,
          configurable: !0
        });
      }
      function oi(h, C) {
        var z = function() {
          fa || (fa = !0, Se("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: z,
          configurable: !0
        });
      }
      function da(h) {
        if (typeof h.ref == "string" && it.current && h.__self && it.current.stateNode !== h.__self) {
          var C = Wn(it.current.type);
          nr[C] || (Se('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), nr[C] = !0);
        }
      }
      var ne = function(h, C, z, F, J, Fe, oe) {
        var Ue = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Xe,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: z,
          props: oe,
          // Record the component responsible for creating this element.
          _owner: Fe
        };
        return Ue._store = {}, Object.defineProperty(Ue._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ue, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: F
        }), Object.defineProperty(Ue, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: J
        }), Object.freeze && (Object.freeze(Ue.props), Object.freeze(Ue)), Ue;
      };
      function ke(h, C, z) {
        var F, J = {}, Fe = null, oe = null, Ue = null, pt = null;
        if (C != null) {
          Wr(C) && (oe = C.ref, da(C)), yn(C) && (Dn(C.key), Fe = "" + C.key), Ue = C.__self === void 0 ? null : C.__self, pt = C.__source === void 0 ? null : C.__source;
          for (F in C)
            mr.call(C, F) && !Qr.hasOwnProperty(F) && (J[F] = C[F]);
        }
        var Ot = arguments.length - 2;
        if (Ot === 1)
          J.children = z;
        else if (Ot > 1) {
          for (var Xt = Array(Ot), Wt = 0; Wt < Ot; Wt++)
            Xt[Wt] = arguments[Wt + 2];
          Object.freeze && Object.freeze(Xt), J.children = Xt;
        }
        if (h && h.defaultProps) {
          var Jt = h.defaultProps;
          for (F in Jt)
            J[F] === void 0 && (J[F] = Jt[F]);
        }
        if (Fe || oe) {
          var rn = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Fe && br(J, rn), oe && oi(J, rn);
        }
        return ne(h, Fe, oe, Ue, pt, it.current, J);
      }
      function ot(h, C) {
        var z = ne(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return z;
      }
      function At(h, C, z) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var F, J = le({}, h.props), Fe = h.key, oe = h.ref, Ue = h._self, pt = h._source, Ot = h._owner;
        if (C != null) {
          Wr(C) && (oe = C.ref, Ot = it.current), yn(C) && (Dn(C.key), Fe = "" + C.key);
          var Xt;
          h.type && h.type.defaultProps && (Xt = h.type.defaultProps);
          for (F in C)
            mr.call(C, F) && !Qr.hasOwnProperty(F) && (C[F] === void 0 && Xt !== void 0 ? J[F] = Xt[F] : J[F] = C[F]);
        }
        var Wt = arguments.length - 2;
        if (Wt === 1)
          J.children = z;
        else if (Wt > 1) {
          for (var Jt = Array(Wt), rn = 0; rn < Wt; rn++)
            Jt[rn] = arguments[rn + 2];
          J.children = Jt;
        }
        return ne(h.type, Fe, oe, Ue, pt, Ot, J);
      }
      function Pt(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Xe;
      }
      var kn = ".", gn = ":";
      function gr(h) {
        var C = /[=:]/g, z = {
          "=": "=0",
          ":": "=2"
        }, F = h.replace(C, function(J) {
          return z[J];
        });
        return "$" + F;
      }
      var Qt = !1, _r = /\/+/g;
      function Vt(h) {
        return h.replace(_r, "$&/");
      }
      function Bt(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Dn(h.key), gr("" + h.key)) : C.toString(36);
      }
      function Ka(h, C, z, F, J) {
        var Fe = typeof h;
        (Fe === "undefined" || Fe === "boolean") && (h = null);
        var oe = !1;
        if (h === null)
          oe = !0;
        else
          switch (Fe) {
            case "string":
            case "number":
              oe = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Xe:
                case et:
                  oe = !0;
              }
          }
        if (oe) {
          var Ue = h, pt = J(Ue), Ot = F === "" ? kn + Bt(Ue, 0) : F;
          if (mn(pt)) {
            var Xt = "";
            Ot != null && (Xt = Vt(Ot) + "/"), Ka(pt, C, Xt, "", function(Vf) {
              return Vf;
            });
          } else
            pt != null && (Pt(pt) && (pt.key && (!Ue || Ue.key !== pt.key) && Dn(pt.key), pt = ot(
              pt,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              z + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (pt.key && (!Ue || Ue.key !== pt.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Vt("" + pt.key) + "/"
              ) : "") + Ot
            )), C.push(pt));
          return 1;
        }
        var Wt, Jt, rn = 0, Et = F === "" ? kn : F + gn;
        if (mn(h))
          for (var Li = 0; Li < h.length; Li++)
            Wt = h[Li], Jt = Et + Bt(Wt, Li), rn += Ka(Wt, C, z, Jt, J);
        else {
          var Ju = at(h);
          if (typeof Ju == "function") {
            var Xo = h;
            Ju === Xo.entries && (Qt || St("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Qt = !0);
            for (var Pf = Ju.call(Xo), Za, Jo = 0; !(Za = Pf.next()).done; )
              Wt = Za.value, Jt = Et + Bt(Wt, Jo++), rn += Ka(Wt, C, z, Jt, J);
          } else if (Fe === "object") {
            var Zo = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (Zo === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : Zo) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return rn;
      }
      function _a(h, C, z) {
        if (h == null)
          return h;
        var F = [], J = 0;
        return Ka(h, F, "", "", function(Fe) {
          return C.call(z, Fe, J++);
        }), F;
      }
      function ll(h) {
        var C = 0;
        return _a(h, function() {
          C++;
        }), C;
      }
      function ql(h, C, z) {
        _a(h, function() {
          C.apply(this, arguments);
        }, z);
      }
      function Pu(h) {
        return _a(h, function(C) {
          return C;
        }) || [];
      }
      function Oi(h) {
        if (!Pt(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function ul(h) {
        var C = {
          $$typeof: ce,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: se,
          _context: C
        };
        var z = !1, F = !1, J = !1;
        {
          var Fe = {
            $$typeof: ce,
            _context: C
          };
          Object.defineProperties(Fe, {
            Provider: {
              get: function() {
                return F || (F = !0, Se("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(oe) {
                C.Provider = oe;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(oe) {
                C._currentValue = oe;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(oe) {
                C._currentValue2 = oe;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(oe) {
                C._threadCount = oe;
              }
            },
            Consumer: {
              get: function() {
                return z || (z = !0, Se("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(oe) {
                J || (St("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", oe), J = !0);
              }
            }
          }), C.Consumer = Fe;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var pa = -1, si = 0, va = 1, ci = 2;
      function Dr(h) {
        if (h._status === pa) {
          var C = h._result, z = C();
          if (z.then(function(Fe) {
            if (h._status === si || h._status === pa) {
              var oe = h;
              oe._status = va, oe._result = Fe;
            }
          }, function(Fe) {
            if (h._status === si || h._status === pa) {
              var oe = h;
              oe._status = ci, oe._result = Fe;
            }
          }), h._status === pa) {
            var F = h;
            F._status = si, F._result = z;
          }
        }
        if (h._status === va) {
          var J = h._result;
          return J === void 0 && Se(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, J), "default" in J || Se(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, J), J.default;
        } else
          throw h._result;
      }
      function ha(h) {
        var C = {
          // We use these fields to store the result.
          _status: pa,
          _result: h
        }, z = {
          $$typeof: Pe,
          _payload: C,
          _init: Dr
        };
        {
          var F, J;
          Object.defineProperties(z, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return F;
              },
              set: function(Fe) {
                Se("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), F = Fe, Object.defineProperty(z, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return J;
              },
              set: function(Fe) {
                Se("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), J = Fe, Object.defineProperty(z, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return z;
      }
      function fi(h) {
        h != null && h.$$typeof === fe ? Se("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Se("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Se("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Se("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: We,
          render: h
        };
        {
          var z;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return z;
            },
            set: function(F) {
              z = F, !h.name && !h.displayName && (h.displayName = F);
            }
          });
        }
        return C;
      }
      var x;
      x = Symbol.for("react.module.reference");
      function Q(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === ge || h === ft || Ge || h === S || h === te || h === ue || ze || h === gt || Ut || _t || ln || typeof h == "object" && h !== null && (h.$$typeof === Pe || h.$$typeof === fe || h.$$typeof === se || h.$$typeof === ce || h.$$typeof === We || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === x || h.getModuleId !== void 0));
      }
      function re(h, C) {
        Q(h) || Se("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var z = {
          $$typeof: fe,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var F;
          Object.defineProperty(z, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return F;
            },
            set: function(J) {
              F = J, !h.name && !h.displayName && (h.displayName = J);
            }
          });
        }
        return z;
      }
      function he() {
        var h = Qe.current;
        return h === null && Se(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Ze(h) {
        var C = he();
        if (h._context !== void 0) {
          var z = h._context;
          z.Consumer === h ? Se("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : z.Provider === h && Se("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function xt(h) {
        var C = he();
        return C.useState(h);
      }
      function tt(h, C, z) {
        var F = he();
        return F.useReducer(h, C, z);
      }
      function Le(h) {
        var C = he();
        return C.useRef(h);
      }
      function Ln(h, C) {
        var z = he();
        return z.useEffect(h, C);
      }
      function tn(h, C) {
        var z = he();
        return z.useInsertionEffect(h, C);
      }
      function nn(h, C) {
        var z = he();
        return z.useLayoutEffect(h, C);
      }
      function rr(h, C) {
        var z = he();
        return z.useCallback(h, C);
      }
      function di(h, C) {
        var z = he();
        return z.useMemo(h, C);
      }
      function Vu(h, C, z) {
        var F = he();
        return F.useImperativeHandle(h, C, z);
      }
      function Dt(h, C) {
        {
          var z = he();
          return z.useDebugValue(h, C);
        }
      }
      function Ff() {
        var h = he();
        return h.useTransition();
      }
      function qa(h) {
        var C = he();
        return C.useDeferredValue(h);
      }
      function dt() {
        var h = he();
        return h.useId();
      }
      function pi(h, C, z) {
        var F = he();
        return F.useSyncExternalStore(h, C, z);
      }
      var ol = 0, Bu, sl, Gr, Wo, kr, Go, Ko;
      function Xs() {
      }
      Xs.__reactDisabledLog = !0;
      function $u() {
        {
          if (ol === 0) {
            Bu = console.log, sl = console.info, Gr = console.warn, Wo = console.error, kr = console.group, Go = console.groupCollapsed, Ko = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Xs,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          ol++;
        }
      }
      function cl() {
        {
          if (ol--, ol === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: le({}, h, {
                value: Bu
              }),
              info: le({}, h, {
                value: sl
              }),
              warn: le({}, h, {
                value: Gr
              }),
              error: le({}, h, {
                value: Wo
              }),
              group: le({}, h, {
                value: kr
              }),
              groupCollapsed: le({}, h, {
                value: Go
              }),
              groupEnd: le({}, h, {
                value: Ko
              })
            });
          }
          ol < 0 && Se("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Xa = Mt.ReactCurrentDispatcher, Or;
      function fl(h, C, z) {
        {
          if (Or === void 0)
            try {
              throw Error();
            } catch (J) {
              var F = J.stack.trim().match(/\n( *(at )?)/);
              Or = F && F[1] || "";
            }
          return `
` + Or + h;
        }
      }
      var dl = !1, pl;
      {
        var Iu = typeof WeakMap == "function" ? WeakMap : Map;
        pl = new Iu();
      }
      function Yu(h, C) {
        if (!h || dl)
          return "";
        {
          var z = pl.get(h);
          if (z !== void 0)
            return z;
        }
        var F;
        dl = !0;
        var J = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Fe;
        Fe = Xa.current, Xa.current = null, $u();
        try {
          if (C) {
            var oe = function() {
              throw Error();
            };
            if (Object.defineProperty(oe.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(oe, []);
              } catch (Et) {
                F = Et;
              }
              Reflect.construct(h, [], oe);
            } else {
              try {
                oe.call();
              } catch (Et) {
                F = Et;
              }
              h.call(oe.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Et) {
              F = Et;
            }
            h();
          }
        } catch (Et) {
          if (Et && F && typeof Et.stack == "string") {
            for (var Ue = Et.stack.split(`
`), pt = F.stack.split(`
`), Ot = Ue.length - 1, Xt = pt.length - 1; Ot >= 1 && Xt >= 0 && Ue[Ot] !== pt[Xt]; )
              Xt--;
            for (; Ot >= 1 && Xt >= 0; Ot--, Xt--)
              if (Ue[Ot] !== pt[Xt]) {
                if (Ot !== 1 || Xt !== 1)
                  do
                    if (Ot--, Xt--, Xt < 0 || Ue[Ot] !== pt[Xt]) {
                      var Wt = `
` + Ue[Ot].replace(" at new ", " at ");
                      return h.displayName && Wt.includes("<anonymous>") && (Wt = Wt.replace("<anonymous>", h.displayName)), typeof h == "function" && pl.set(h, Wt), Wt;
                    }
                  while (Ot >= 1 && Xt >= 0);
                break;
              }
          }
        } finally {
          dl = !1, Xa.current = Fe, cl(), Error.prepareStackTrace = J;
        }
        var Jt = h ? h.displayName || h.name : "", rn = Jt ? fl(Jt) : "";
        return typeof h == "function" && pl.set(h, rn), rn;
      }
      function Ni(h, C, z) {
        return Yu(h, !1);
      }
      function Hf(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function vi(h, C, z) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Yu(h, Hf(h));
        if (typeof h == "string")
          return fl(h);
        switch (h) {
          case te:
            return fl("Suspense");
          case ue:
            return fl("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case We:
              return Ni(h.render);
            case fe:
              return vi(h.type, C, z);
            case Pe: {
              var F = h, J = F._payload, Fe = F._init;
              try {
                return vi(Fe(J), C, z);
              } catch {
              }
            }
          }
        return "";
      }
      var Lt = {}, Qu = Mt.ReactDebugCurrentFrame;
      function Xl(h) {
        if (h) {
          var C = h._owner, z = vi(h.type, h._source, C ? C.type : null);
          Qu.setExtraStackFrame(z);
        } else
          Qu.setExtraStackFrame(null);
      }
      function Wu(h, C, z, F, J) {
        {
          var Fe = Function.call.bind(mr);
          for (var oe in h)
            if (Fe(h, oe)) {
              var Ue = void 0;
              try {
                if (typeof h[oe] != "function") {
                  var pt = Error((F || "React class") + ": " + z + " type `" + oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[oe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw pt.name = "Invariant Violation", pt;
                }
                Ue = h[oe](C, oe, F, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ot) {
                Ue = Ot;
              }
              Ue && !(Ue instanceof Error) && (Xl(J), Se("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", z, oe, typeof Ue), Xl(null)), Ue instanceof Error && !(Ue.message in Lt) && (Lt[Ue.message] = !0, Xl(J), Se("Failed %s type: %s", z, Ue.message), Xl(null));
            }
        }
      }
      function kt(h) {
        if (h) {
          var C = h._owner, z = vi(h.type, h._source, C ? C.type : null);
          hn(z);
        } else
          hn(null);
      }
      var Gu;
      Gu = !1;
      function Ku() {
        if (it.current) {
          var h = Wn(it.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Ke(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), z = h.lineNumber;
          return `

Check your code at ` + C + ":" + z + ".";
        }
        return "";
      }
      function Jl(h) {
        return h != null ? Ke(h.__source) : "";
      }
      var Sn = {};
      function Kr(h) {
        var C = Ku();
        if (!C) {
          var z = typeof h == "string" ? h : h.displayName || h.name;
          z && (C = `

Check the top-level render call using <` + z + ">.");
        }
        return C;
      }
      function Nr(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var z = Kr(C);
          if (!Sn[z]) {
            Sn[z] = !0;
            var F = "";
            h && h._owner && h._owner !== it.current && (F = " It was passed a child from " + Wn(h._owner.type) + "."), kt(h), Se('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, F), kt(null);
          }
        }
      }
      function vl(h, C) {
        if (typeof h == "object") {
          if (mn(h))
            for (var z = 0; z < h.length; z++) {
              var F = h[z];
              Pt(F) && Nr(F, C);
            }
          else if (Pt(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var J = at(h);
            if (typeof J == "function" && J !== h.entries)
              for (var Fe = J.call(h), oe; !(oe = Fe.next()).done; )
                Pt(oe.value) && Nr(oe.value, C);
          }
        }
      }
      function Tn(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var z;
          if (typeof C == "function")
            z = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === We || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === fe))
            z = C.propTypes;
          else
            return;
          if (z) {
            var F = Wn(C);
            Wu(z, h.props, "prop", F, h);
          } else if (C.PropTypes !== void 0 && !Gu) {
            Gu = !0;
            var J = Wn(C);
            Se("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", J || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && Se("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function $t(h) {
        {
          for (var C = Object.keys(h.props), z = 0; z < C.length; z++) {
            var F = C[z];
            if (F !== "children" && F !== "key") {
              kt(h), Se("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), kt(null);
              break;
            }
          }
          h.ref !== null && (kt(h), Se("Invalid attribute `ref` supplied to `React.Fragment`."), kt(null));
        }
      }
      function Js(h, C, z) {
        var F = Q(h);
        if (!F) {
          var J = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (J += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Fe = Jl(C);
          Fe ? J += Fe : J += Ku();
          var oe;
          h === null ? oe = "null" : mn(h) ? oe = "array" : h !== void 0 && h.$$typeof === Xe ? (oe = "<" + (Wn(h.type) || "Unknown") + " />", J = " Did you accidentally export a JSX literal instead of a component?") : oe = typeof h, Se("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", oe, J);
        }
        var Ue = ke.apply(this, arguments);
        if (Ue == null)
          return Ue;
        if (F)
          for (var pt = 2; pt < arguments.length; pt++)
            vl(arguments[pt], h);
        return h === ge ? $t(Ue) : Tn(Ue), Ue;
      }
      var qr = !1;
      function Gn(h) {
        var C = Js.bind(null, h);
        return C.type = h, qr || (qr = !0, St("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return St("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function hi(h, C, z) {
        for (var F = At.apply(this, arguments), J = 2; J < arguments.length; J++)
          vl(arguments[J], F.type);
        return Tn(F), F;
      }
      function Zs(h, C) {
        var z = ct.transition;
        ct.transition = {};
        var F = ct.transition;
        ct.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (ct.transition = z, z === null && F._updatedFibers) {
            var J = F._updatedFibers.size;
            J > 10 && St("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), F._updatedFibers.clear();
          }
        }
      }
      var Mi = !1, hl = null;
      function ec(h) {
        if (hl === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), z = I && I[C];
            hl = z.call(I, "timers").setImmediate;
          } catch {
            hl = function(J) {
              Mi === !1 && (Mi = !0, typeof MessageChannel > "u" && Se("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Fe = new MessageChannel();
              Fe.port1.onmessage = J, Fe.port2.postMessage(void 0);
            };
          }
        return hl(h);
      }
      var Da = 0, ml = !1;
      function yl(h) {
        {
          var C = Da;
          Da++, De.current === null && (De.current = []);
          var z = De.isBatchingLegacy, F;
          try {
            if (De.isBatchingLegacy = !0, F = h(), !z && De.didScheduleLegacyUpdate) {
              var J = De.current;
              J !== null && (De.didScheduleLegacyUpdate = !1, Sl(J));
            }
          } catch (Jt) {
            throw ka(C), Jt;
          } finally {
            De.isBatchingLegacy = z;
          }
          if (F !== null && typeof F == "object" && typeof F.then == "function") {
            var Fe = F, oe = !1, Ue = {
              then: function(Jt, rn) {
                oe = !0, Fe.then(function(Et) {
                  ka(C), Da === 0 ? qu(Et, Jt, rn) : Jt(Et);
                }, function(Et) {
                  ka(C), rn(Et);
                });
              }
            };
            return !ml && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              oe || (ml = !0, Se("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ue;
          } else {
            var pt = F;
            if (ka(C), Da === 0) {
              var Ot = De.current;
              Ot !== null && (Sl(Ot), De.current = null);
              var Xt = {
                then: function(Jt, rn) {
                  De.current === null ? (De.current = [], qu(pt, Jt, rn)) : Jt(pt);
                }
              };
              return Xt;
            } else {
              var Wt = {
                then: function(Jt, rn) {
                  Jt(pt);
                }
              };
              return Wt;
            }
          }
        }
      }
      function ka(h) {
        h !== Da - 1 && Se("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Da = h;
      }
      function qu(h, C, z) {
        {
          var F = De.current;
          if (F !== null)
            try {
              Sl(F), ec(function() {
                F.length === 0 ? (De.current = null, C(h)) : qu(h, C, z);
              });
            } catch (J) {
              z(J);
            }
          else
            C(h);
        }
      }
      var gl = !1;
      function Sl(h) {
        if (!gl) {
          gl = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var z = h[C];
              do
                z = z(!0);
              while (z !== null);
            }
            h.length = 0;
          } catch (F) {
            throw h = h.slice(C + 1), F;
          } finally {
            gl = !1;
          }
        }
      }
      var Zl = Js, Xu = hi, qo = Gn, Ja = {
        map: _a,
        forEach: ql,
        count: ll,
        toArray: Pu,
        only: Oi
      };
      Y.Children = Ja, Y.Component = Me, Y.Fragment = ge, Y.Profiler = ft, Y.PureComponent = Ht, Y.StrictMode = S, Y.Suspense = te, Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mt, Y.cloneElement = Xu, Y.createContext = ul, Y.createElement = Zl, Y.createFactory = qo, Y.createRef = hr, Y.forwardRef = fi, Y.isValidElement = Pt, Y.lazy = ha, Y.memo = re, Y.startTransition = Zs, Y.unstable_act = yl, Y.useCallback = rr, Y.useContext = Ze, Y.useDebugValue = Dt, Y.useDeferredValue = qa, Y.useEffect = Ln, Y.useId = dt, Y.useImperativeHandle = Vu, Y.useInsertionEffect = tn, Y.useLayoutEffect = nn, Y.useMemo = di, Y.useReducer = tt, Y.useRef = Le, Y.useState = xt, Y.useSyncExternalStore = pi, Y.useTransition = Ff, Y.version = M, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(qp, qp.exports)), qp.exports;
}
process.env.NODE_ENV === "production" ? p0.exports = q_() : p0.exports = X_();
var vn = p0.exports;
const J_ = /* @__PURE__ */ a1(vn);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xx;
function Z_() {
  if (Xx)
    return Wp;
  Xx = 1;
  var I = vn, Y = Symbol.for("react.element"), M = Symbol.for("react.fragment"), Xe = Object.prototype.hasOwnProperty, et = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ge = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(ft, se, ce) {
    var We, te = {}, ue = null, fe = null;
    ce !== void 0 && (ue = "" + ce), se.key !== void 0 && (ue = "" + se.key), se.ref !== void 0 && (fe = se.ref);
    for (We in se)
      Xe.call(se, We) && !ge.hasOwnProperty(We) && (te[We] = se[We]);
    if (ft && ft.defaultProps)
      for (We in se = ft.defaultProps, se)
        te[We] === void 0 && (te[We] = se[We]);
    return { $$typeof: Y, type: ft, key: ue, ref: fe, props: te, _owner: et.current };
  }
  return Wp.Fragment = M, Wp.jsx = S, Wp.jsxs = S, Wp;
}
var Gp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jx;
function eD() {
  return Jx || (Jx = 1, process.env.NODE_ENV !== "production" && function() {
    var I = vn, Y = Symbol.for("react.element"), M = Symbol.for("react.portal"), Xe = Symbol.for("react.fragment"), et = Symbol.for("react.strict_mode"), ge = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), ft = Symbol.for("react.context"), se = Symbol.for("react.forward_ref"), ce = Symbol.for("react.suspense"), We = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), ue = Symbol.for("react.lazy"), fe = Symbol.for("react.offscreen"), Pe = Symbol.iterator, gt = "@@iterator";
    function st(x) {
      if (x === null || typeof x != "object")
        return null;
      var Q = Pe && x[Pe] || x[gt];
      return typeof Q == "function" ? Q : null;
    }
    var an = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function at(x) {
      {
        for (var Q = arguments.length, re = new Array(Q > 1 ? Q - 1 : 0), he = 1; he < Q; he++)
          re[he - 1] = arguments[he];
        Qe("error", x, re);
      }
    }
    function Qe(x, Q, re) {
      {
        var he = an.ReactDebugCurrentFrame, Ze = he.getStackAddendum();
        Ze !== "" && (Q += "%s", re = re.concat([Ze]));
        var xt = re.map(function(tt) {
          return String(tt);
        });
        xt.unshift("Warning: " + Q), Function.prototype.apply.call(console[x], console, xt);
      }
    }
    var ct = !1, De = !1, it = !1, Ve = !1, Gt = !1, hn;
    hn = Symbol.for("react.module.reference");
    function Ut(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === Xe || x === ge || Gt || x === et || x === ce || x === We || Ve || x === fe || ct || De || it || typeof x == "object" && x !== null && (x.$$typeof === ue || x.$$typeof === te || x.$$typeof === S || x.$$typeof === ft || x.$$typeof === se || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === hn || x.getModuleId !== void 0));
    }
    function _t(x, Q, re) {
      var he = x.displayName;
      if (he)
        return he;
      var Ze = Q.displayName || Q.name || "";
      return Ze !== "" ? re + "(" + Ze + ")" : re;
    }
    function ln(x) {
      return x.displayName || "Context";
    }
    function ze(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && at("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
        case Xe:
          return "Fragment";
        case M:
          return "Portal";
        case ge:
          return "Profiler";
        case et:
          return "StrictMode";
        case ce:
          return "Suspense";
        case We:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case ft:
            var Q = x;
            return ln(Q) + ".Consumer";
          case S:
            var re = x;
            return ln(re._context) + ".Provider";
          case se:
            return _t(x, x.render, "ForwardRef");
          case te:
            var he = x.displayName || null;
            return he !== null ? he : ze(x.type) || "Memo";
          case ue: {
            var Ze = x, xt = Ze._payload, tt = Ze._init;
            try {
              return ze(tt(xt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ge = Object.assign, Mt = 0, St, Se, Z, K, T, B, le;
    function Te() {
    }
    Te.__reactDisabledLog = !0;
    function Me() {
      {
        if (Mt === 0) {
          St = console.log, Se = console.info, Z = console.warn, K = console.error, T = console.group, B = console.groupCollapsed, le = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: Te,
            writable: !0
          };
          Object.defineProperties(console, {
            info: x,
            log: x,
            warn: x,
            error: x,
            group: x,
            groupCollapsed: x,
            groupEnd: x
          });
        }
        Mt++;
      }
    }
    function Ct() {
      {
        if (Mt--, Mt === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ge({}, x, {
              value: St
            }),
            info: Ge({}, x, {
              value: Se
            }),
            warn: Ge({}, x, {
              value: Z
            }),
            error: Ge({}, x, {
              value: K
            }),
            group: Ge({}, x, {
              value: T
            }),
            groupCollapsed: Ge({}, x, {
              value: B
            }),
            groupEnd: Ge({}, x, {
              value: le
            })
          });
        }
        Mt < 0 && at("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var lt = an.ReactCurrentDispatcher, ht;
    function ut(x, Q, re) {
      {
        if (ht === void 0)
          try {
            throw Error();
          } catch (Ze) {
            var he = Ze.stack.trim().match(/\n( *(at )?)/);
            ht = he && he[1] || "";
          }
        return `
` + ht + x;
      }
    }
    var Ht = !1, Br;
    {
      var hr = typeof WeakMap == "function" ? WeakMap : Map;
      Br = new hr();
    }
    function $r(x, Q) {
      if (!x || Ht)
        return "";
      {
        var re = Br.get(x);
        if (re !== void 0)
          return re;
      }
      var he;
      Ht = !0;
      var Ze = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var xt;
      xt = lt.current, lt.current = null, Me();
      try {
        if (Q) {
          var tt = function() {
            throw Error();
          };
          if (Object.defineProperty(tt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(tt, []);
            } catch (Dt) {
              he = Dt;
            }
            Reflect.construct(x, [], tt);
          } else {
            try {
              tt.call();
            } catch (Dt) {
              he = Dt;
            }
            x.call(tt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Dt) {
            he = Dt;
          }
          x();
        }
      } catch (Dt) {
        if (Dt && he && typeof Dt.stack == "string") {
          for (var Le = Dt.stack.split(`
`), Ln = he.stack.split(`
`), tn = Le.length - 1, nn = Ln.length - 1; tn >= 1 && nn >= 0 && Le[tn] !== Ln[nn]; )
            nn--;
          for (; tn >= 1 && nn >= 0; tn--, nn--)
            if (Le[tn] !== Ln[nn]) {
              if (tn !== 1 || nn !== 1)
                do
                  if (tn--, nn--, nn < 0 || Le[tn] !== Ln[nn]) {
                    var rr = `
` + Le[tn].replace(" at new ", " at ");
                    return x.displayName && rr.includes("<anonymous>") && (rr = rr.replace("<anonymous>", x.displayName)), typeof x == "function" && Br.set(x, rr), rr;
                  }
                while (tn >= 1 && nn >= 0);
              break;
            }
        }
      } finally {
        Ht = !1, lt.current = xt, Ct(), Error.prepareStackTrace = Ze;
      }
      var di = x ? x.displayName || x.name : "", Vu = di ? ut(di) : "";
      return typeof x == "function" && Br.set(x, Vu), Vu;
    }
    function mn(x, Q, re) {
      return $r(x, !1);
    }
    function Qn(x) {
      var Q = x.prototype;
      return !!(Q && Q.isReactComponent);
    }
    function Fn(x, Q, re) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return $r(x, Qn(x));
      if (typeof x == "string")
        return ut(x);
      switch (x) {
        case ce:
          return ut("Suspense");
        case We:
          return ut("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case se:
            return mn(x.render);
          case te:
            return Fn(x.type, Q, re);
          case ue: {
            var he = x, Ze = he._payload, xt = he._init;
            try {
              return Fn(xt(Ze), Q, re);
            } catch {
            }
          }
        }
      return "";
    }
    var Hn = Object.prototype.hasOwnProperty, Dn = {}, Ir = an.ReactDebugCurrentFrame;
    function Yr(x) {
      if (x) {
        var Q = x._owner, re = Fn(x.type, x._source, Q ? Q.type : null);
        Ir.setExtraStackFrame(re);
      } else
        Ir.setExtraStackFrame(null);
    }
    function Wn(x, Q, re, he, Ze) {
      {
        var xt = Function.call.bind(Hn);
        for (var tt in x)
          if (xt(x, tt)) {
            var Le = void 0;
            try {
              if (typeof x[tt] != "function") {
                var Ln = Error((he || "React class") + ": " + re + " type `" + tt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[tt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ln.name = "Invariant Violation", Ln;
              }
              Le = x[tt](Q, tt, he, re, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (tn) {
              Le = tn;
            }
            Le && !(Le instanceof Error) && (Yr(Ze), at("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", he || "React class", re, tt, typeof Le), Yr(null)), Le instanceof Error && !(Le.message in Dn) && (Dn[Le.message] = !0, Yr(Ze), at("Failed %s type: %s", re, Le.message), Yr(null));
          }
      }
    }
    var mr = Array.isArray;
    function Qr(x) {
      return mr(x);
    }
    function yr(x) {
      {
        var Q = typeof Symbol == "function" && Symbol.toStringTag, re = Q && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return re;
      }
    }
    function fa(x) {
      try {
        return nr(x), !1;
      } catch {
        return !0;
      }
    }
    function nr(x) {
      return "" + x;
    }
    function Wr(x) {
      if (fa(x))
        return at("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yr(x)), nr(x);
    }
    var yn = an.ReactCurrentOwner, br = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, oi, da, ne;
    ne = {};
    function ke(x) {
      if (Hn.call(x, "ref")) {
        var Q = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function ot(x) {
      if (Hn.call(x, "key")) {
        var Q = Object.getOwnPropertyDescriptor(x, "key").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function At(x, Q) {
      if (typeof x.ref == "string" && yn.current && Q && yn.current.stateNode !== Q) {
        var re = ze(yn.current.type);
        ne[re] || (at('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ze(yn.current.type), x.ref), ne[re] = !0);
      }
    }
    function Pt(x, Q) {
      {
        var re = function() {
          oi || (oi = !0, at("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        re.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: re,
          configurable: !0
        });
      }
    }
    function kn(x, Q) {
      {
        var re = function() {
          da || (da = !0, at("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        re.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: re,
          configurable: !0
        });
      }
    }
    var gn = function(x, Q, re, he, Ze, xt, tt) {
      var Le = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: Y,
        // Built-in properties that belong on the element
        type: x,
        key: Q,
        ref: re,
        props: tt,
        // Record the component responsible for creating this element.
        _owner: xt
      };
      return Le._store = {}, Object.defineProperty(Le._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Le, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: he
      }), Object.defineProperty(Le, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ze
      }), Object.freeze && (Object.freeze(Le.props), Object.freeze(Le)), Le;
    };
    function gr(x, Q, re, he, Ze) {
      {
        var xt, tt = {}, Le = null, Ln = null;
        re !== void 0 && (Wr(re), Le = "" + re), ot(Q) && (Wr(Q.key), Le = "" + Q.key), ke(Q) && (Ln = Q.ref, At(Q, Ze));
        for (xt in Q)
          Hn.call(Q, xt) && !br.hasOwnProperty(xt) && (tt[xt] = Q[xt]);
        if (x && x.defaultProps) {
          var tn = x.defaultProps;
          for (xt in tn)
            tt[xt] === void 0 && (tt[xt] = tn[xt]);
        }
        if (Le || Ln) {
          var nn = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          Le && Pt(tt, nn), Ln && kn(tt, nn);
        }
        return gn(x, Le, Ln, Ze, he, yn.current, tt);
      }
    }
    var Qt = an.ReactCurrentOwner, _r = an.ReactDebugCurrentFrame;
    function Vt(x) {
      if (x) {
        var Q = x._owner, re = Fn(x.type, x._source, Q ? Q.type : null);
        _r.setExtraStackFrame(re);
      } else
        _r.setExtraStackFrame(null);
    }
    var Bt;
    Bt = !1;
    function Ka(x) {
      return typeof x == "object" && x !== null && x.$$typeof === Y;
    }
    function _a() {
      {
        if (Qt.current) {
          var x = ze(Qt.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function ll(x) {
      {
        if (x !== void 0) {
          var Q = x.fileName.replace(/^.*[\\\/]/, ""), re = x.lineNumber;
          return `

Check your code at ` + Q + ":" + re + ".";
        }
        return "";
      }
    }
    var ql = {};
    function Pu(x) {
      {
        var Q = _a();
        if (!Q) {
          var re = typeof x == "string" ? x : x.displayName || x.name;
          re && (Q = `

Check the top-level render call using <` + re + ">.");
        }
        return Q;
      }
    }
    function Oi(x, Q) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var re = Pu(Q);
        if (ql[re])
          return;
        ql[re] = !0;
        var he = "";
        x && x._owner && x._owner !== Qt.current && (he = " It was passed a child from " + ze(x._owner.type) + "."), Vt(x), at('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', re, he), Vt(null);
      }
    }
    function ul(x, Q) {
      {
        if (typeof x != "object")
          return;
        if (Qr(x))
          for (var re = 0; re < x.length; re++) {
            var he = x[re];
            Ka(he) && Oi(he, Q);
          }
        else if (Ka(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var Ze = st(x);
          if (typeof Ze == "function" && Ze !== x.entries)
            for (var xt = Ze.call(x), tt; !(tt = xt.next()).done; )
              Ka(tt.value) && Oi(tt.value, Q);
        }
      }
    }
    function pa(x) {
      {
        var Q = x.type;
        if (Q == null || typeof Q == "string")
          return;
        var re;
        if (typeof Q == "function")
          re = Q.propTypes;
        else if (typeof Q == "object" && (Q.$$typeof === se || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Q.$$typeof === te))
          re = Q.propTypes;
        else
          return;
        if (re) {
          var he = ze(Q);
          Wn(re, x.props, "prop", he, x);
        } else if (Q.PropTypes !== void 0 && !Bt) {
          Bt = !0;
          var Ze = ze(Q);
          at("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ze || "Unknown");
        }
        typeof Q.getDefaultProps == "function" && !Q.getDefaultProps.isReactClassApproved && at("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function si(x) {
      {
        for (var Q = Object.keys(x.props), re = 0; re < Q.length; re++) {
          var he = Q[re];
          if (he !== "children" && he !== "key") {
            Vt(x), at("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", he), Vt(null);
            break;
          }
        }
        x.ref !== null && (Vt(x), at("Invalid attribute `ref` supplied to `React.Fragment`."), Vt(null));
      }
    }
    function va(x, Q, re, he, Ze, xt) {
      {
        var tt = Ut(x);
        if (!tt) {
          var Le = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (Le += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ln = ll(Ze);
          Ln ? Le += Ln : Le += _a();
          var tn;
          x === null ? tn = "null" : Qr(x) ? tn = "array" : x !== void 0 && x.$$typeof === Y ? (tn = "<" + (ze(x.type) || "Unknown") + " />", Le = " Did you accidentally export a JSX literal instead of a component?") : tn = typeof x, at("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", tn, Le);
        }
        var nn = gr(x, Q, re, Ze, xt);
        if (nn == null)
          return nn;
        if (tt) {
          var rr = Q.children;
          if (rr !== void 0)
            if (he)
              if (Qr(rr)) {
                for (var di = 0; di < rr.length; di++)
                  ul(rr[di], x);
                Object.freeze && Object.freeze(rr);
              } else
                at("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ul(rr, x);
        }
        return x === Xe ? si(nn) : pa(nn), nn;
      }
    }
    function ci(x, Q, re) {
      return va(x, Q, re, !0);
    }
    function Dr(x, Q, re) {
      return va(x, Q, re, !1);
    }
    var ha = Dr, fi = ci;
    Gp.Fragment = Xe, Gp.jsx = ha, Gp.jsxs = fi;
  }()), Gp;
}
process.env.NODE_ENV === "production" ? d0.exports = Z_() : d0.exports = eD();
var R = d0.exports, Xp = {}, v0 = { exports: {} }, Wa = {}, Am = { exports: {} }, c0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zx;
function tD() {
  return Zx || (Zx = 1, function(I) {
    function Y(Z, K) {
      var T = Z.length;
      Z.push(K);
      e:
        for (; 0 < T; ) {
          var B = T - 1 >>> 1, le = Z[B];
          if (0 < et(le, K))
            Z[B] = K, Z[T] = le, T = B;
          else
            break e;
        }
    }
    function M(Z) {
      return Z.length === 0 ? null : Z[0];
    }
    function Xe(Z) {
      if (Z.length === 0)
        return null;
      var K = Z[0], T = Z.pop();
      if (T !== K) {
        Z[0] = T;
        e:
          for (var B = 0, le = Z.length, Te = le >>> 1; B < Te; ) {
            var Me = 2 * (B + 1) - 1, Ct = Z[Me], lt = Me + 1, ht = Z[lt];
            if (0 > et(Ct, T))
              lt < le && 0 > et(ht, Ct) ? (Z[B] = ht, Z[lt] = T, B = lt) : (Z[B] = Ct, Z[Me] = T, B = Me);
            else if (lt < le && 0 > et(ht, T))
              Z[B] = ht, Z[lt] = T, B = lt;
            else
              break e;
          }
      }
      return K;
    }
    function et(Z, K) {
      var T = Z.sortIndex - K.sortIndex;
      return T !== 0 ? T : Z.id - K.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var ge = performance;
      I.unstable_now = function() {
        return ge.now();
      };
    } else {
      var S = Date, ft = S.now();
      I.unstable_now = function() {
        return S.now() - ft;
      };
    }
    var se = [], ce = [], We = 1, te = null, ue = 3, fe = !1, Pe = !1, gt = !1, st = typeof setTimeout == "function" ? setTimeout : null, an = typeof clearTimeout == "function" ? clearTimeout : null, at = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Qe(Z) {
      for (var K = M(ce); K !== null; ) {
        if (K.callback === null)
          Xe(ce);
        else if (K.startTime <= Z)
          Xe(ce), K.sortIndex = K.expirationTime, Y(se, K);
        else
          break;
        K = M(ce);
      }
    }
    function ct(Z) {
      if (gt = !1, Qe(Z), !Pe)
        if (M(se) !== null)
          Pe = !0, St(De);
        else {
          var K = M(ce);
          K !== null && Se(ct, K.startTime - Z);
        }
    }
    function De(Z, K) {
      Pe = !1, gt && (gt = !1, an(Gt), Gt = -1), fe = !0;
      var T = ue;
      try {
        for (Qe(K), te = M(se); te !== null && (!(te.expirationTime > K) || Z && !_t()); ) {
          var B = te.callback;
          if (typeof B == "function") {
            te.callback = null, ue = te.priorityLevel;
            var le = B(te.expirationTime <= K);
            K = I.unstable_now(), typeof le == "function" ? te.callback = le : te === M(se) && Xe(se), Qe(K);
          } else
            Xe(se);
          te = M(se);
        }
        if (te !== null)
          var Te = !0;
        else {
          var Me = M(ce);
          Me !== null && Se(ct, Me.startTime - K), Te = !1;
        }
        return Te;
      } finally {
        te = null, ue = T, fe = !1;
      }
    }
    var it = !1, Ve = null, Gt = -1, hn = 5, Ut = -1;
    function _t() {
      return !(I.unstable_now() - Ut < hn);
    }
    function ln() {
      if (Ve !== null) {
        var Z = I.unstable_now();
        Ut = Z;
        var K = !0;
        try {
          K = Ve(!0, Z);
        } finally {
          K ? ze() : (it = !1, Ve = null);
        }
      } else
        it = !1;
    }
    var ze;
    if (typeof at == "function")
      ze = function() {
        at(ln);
      };
    else if (typeof MessageChannel < "u") {
      var Ge = new MessageChannel(), Mt = Ge.port2;
      Ge.port1.onmessage = ln, ze = function() {
        Mt.postMessage(null);
      };
    } else
      ze = function() {
        st(ln, 0);
      };
    function St(Z) {
      Ve = Z, it || (it = !0, ze());
    }
    function Se(Z, K) {
      Gt = st(function() {
        Z(I.unstable_now());
      }, K);
    }
    I.unstable_IdlePriority = 5, I.unstable_ImmediatePriority = 1, I.unstable_LowPriority = 4, I.unstable_NormalPriority = 3, I.unstable_Profiling = null, I.unstable_UserBlockingPriority = 2, I.unstable_cancelCallback = function(Z) {
      Z.callback = null;
    }, I.unstable_continueExecution = function() {
      Pe || fe || (Pe = !0, St(De));
    }, I.unstable_forceFrameRate = function(Z) {
      0 > Z || 125 < Z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : hn = 0 < Z ? Math.floor(1e3 / Z) : 5;
    }, I.unstable_getCurrentPriorityLevel = function() {
      return ue;
    }, I.unstable_getFirstCallbackNode = function() {
      return M(se);
    }, I.unstable_next = function(Z) {
      switch (ue) {
        case 1:
        case 2:
        case 3:
          var K = 3;
          break;
        default:
          K = ue;
      }
      var T = ue;
      ue = K;
      try {
        return Z();
      } finally {
        ue = T;
      }
    }, I.unstable_pauseExecution = function() {
    }, I.unstable_requestPaint = function() {
    }, I.unstable_runWithPriority = function(Z, K) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Z = 3;
      }
      var T = ue;
      ue = Z;
      try {
        return K();
      } finally {
        ue = T;
      }
    }, I.unstable_scheduleCallback = function(Z, K, T) {
      var B = I.unstable_now();
      switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? B + T : B) : T = B, Z) {
        case 1:
          var le = -1;
          break;
        case 2:
          le = 250;
          break;
        case 5:
          le = 1073741823;
          break;
        case 4:
          le = 1e4;
          break;
        default:
          le = 5e3;
      }
      return le = T + le, Z = { id: We++, callback: K, priorityLevel: Z, startTime: T, expirationTime: le, sortIndex: -1 }, T > B ? (Z.sortIndex = T, Y(ce, Z), M(se) === null && Z === M(ce) && (gt ? (an(Gt), Gt = -1) : gt = !0, Se(ct, T - B))) : (Z.sortIndex = le, Y(se, Z), Pe || fe || (Pe = !0, St(De))), Z;
    }, I.unstable_shouldYield = _t, I.unstable_wrapCallback = function(Z) {
      var K = ue;
      return function() {
        var T = ue;
        ue = K;
        try {
          return Z.apply(this, arguments);
        } finally {
          ue = T;
        }
      };
    };
  }(c0)), c0;
}
var f0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e1;
function nD() {
  return e1 || (e1 = 1, function(I) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Y = !1, M = !1, Xe = 5;
      function et(ne, ke) {
        var ot = ne.length;
        ne.push(ke), ft(ne, ke, ot);
      }
      function ge(ne) {
        return ne.length === 0 ? null : ne[0];
      }
      function S(ne) {
        if (ne.length === 0)
          return null;
        var ke = ne[0], ot = ne.pop();
        return ot !== ke && (ne[0] = ot, se(ne, ot, 0)), ke;
      }
      function ft(ne, ke, ot) {
        for (var At = ot; At > 0; ) {
          var Pt = At - 1 >>> 1, kn = ne[Pt];
          if (ce(kn, ke) > 0)
            ne[Pt] = ke, ne[At] = kn, At = Pt;
          else
            return;
        }
      }
      function se(ne, ke, ot) {
        for (var At = ot, Pt = ne.length, kn = Pt >>> 1; At < kn; ) {
          var gn = (At + 1) * 2 - 1, gr = ne[gn], Qt = gn + 1, _r = ne[Qt];
          if (ce(gr, ke) < 0)
            Qt < Pt && ce(_r, gr) < 0 ? (ne[At] = _r, ne[Qt] = ke, At = Qt) : (ne[At] = gr, ne[gn] = ke, At = gn);
          else if (Qt < Pt && ce(_r, ke) < 0)
            ne[At] = _r, ne[Qt] = ke, At = Qt;
          else
            return;
        }
      }
      function ce(ne, ke) {
        var ot = ne.sortIndex - ke.sortIndex;
        return ot !== 0 ? ot : ne.id - ke.id;
      }
      var We = 1, te = 2, ue = 3, fe = 4, Pe = 5;
      function gt(ne, ke) {
      }
      var st = typeof performance == "object" && typeof performance.now == "function";
      if (st) {
        var an = performance;
        I.unstable_now = function() {
          return an.now();
        };
      } else {
        var at = Date, Qe = at.now();
        I.unstable_now = function() {
          return at.now() - Qe;
        };
      }
      var ct = 1073741823, De = -1, it = 250, Ve = 5e3, Gt = 1e4, hn = ct, Ut = [], _t = [], ln = 1, ze = null, Ge = ue, Mt = !1, St = !1, Se = !1, Z = typeof setTimeout == "function" ? setTimeout : null, K = typeof clearTimeout == "function" ? clearTimeout : null, T = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function B(ne) {
        for (var ke = ge(_t); ke !== null; ) {
          if (ke.callback === null)
            S(_t);
          else if (ke.startTime <= ne)
            S(_t), ke.sortIndex = ke.expirationTime, et(Ut, ke);
          else
            return;
          ke = ge(_t);
        }
      }
      function le(ne) {
        if (Se = !1, B(ne), !St)
          if (ge(Ut) !== null)
            St = !0, Wr(Te);
          else {
            var ke = ge(_t);
            ke !== null && yn(le, ke.startTime - ne);
          }
      }
      function Te(ne, ke) {
        St = !1, Se && (Se = !1, br()), Mt = !0;
        var ot = Ge;
        try {
          var At;
          if (!M)
            return Me(ne, ke);
        } finally {
          ze = null, Ge = ot, Mt = !1;
        }
      }
      function Me(ne, ke) {
        var ot = ke;
        for (B(ot), ze = ge(Ut); ze !== null && !Y && !(ze.expirationTime > ot && (!ne || Yr())); ) {
          var At = ze.callback;
          if (typeof At == "function") {
            ze.callback = null, Ge = ze.priorityLevel;
            var Pt = ze.expirationTime <= ot, kn = At(Pt);
            ot = I.unstable_now(), typeof kn == "function" ? ze.callback = kn : ze === ge(Ut) && S(Ut), B(ot);
          } else
            S(Ut);
          ze = ge(Ut);
        }
        if (ze !== null)
          return !0;
        var gn = ge(_t);
        return gn !== null && yn(le, gn.startTime - ot), !1;
      }
      function Ct(ne, ke) {
        switch (ne) {
          case We:
          case te:
          case ue:
          case fe:
          case Pe:
            break;
          default:
            ne = ue;
        }
        var ot = Ge;
        Ge = ne;
        try {
          return ke();
        } finally {
          Ge = ot;
        }
      }
      function lt(ne) {
        var ke;
        switch (Ge) {
          case We:
          case te:
          case ue:
            ke = ue;
            break;
          default:
            ke = Ge;
            break;
        }
        var ot = Ge;
        Ge = ke;
        try {
          return ne();
        } finally {
          Ge = ot;
        }
      }
      function ht(ne) {
        var ke = Ge;
        return function() {
          var ot = Ge;
          Ge = ke;
          try {
            return ne.apply(this, arguments);
          } finally {
            Ge = ot;
          }
        };
      }
      function ut(ne, ke, ot) {
        var At = I.unstable_now(), Pt;
        if (typeof ot == "object" && ot !== null) {
          var kn = ot.delay;
          typeof kn == "number" && kn > 0 ? Pt = At + kn : Pt = At;
        } else
          Pt = At;
        var gn;
        switch (ne) {
          case We:
            gn = De;
            break;
          case te:
            gn = it;
            break;
          case Pe:
            gn = hn;
            break;
          case fe:
            gn = Gt;
            break;
          case ue:
          default:
            gn = Ve;
            break;
        }
        var gr = Pt + gn, Qt = {
          id: ln++,
          callback: ke,
          priorityLevel: ne,
          startTime: Pt,
          expirationTime: gr,
          sortIndex: -1
        };
        return Pt > At ? (Qt.sortIndex = Pt, et(_t, Qt), ge(Ut) === null && Qt === ge(_t) && (Se ? br() : Se = !0, yn(le, Pt - At))) : (Qt.sortIndex = gr, et(Ut, Qt), !St && !Mt && (St = !0, Wr(Te))), Qt;
      }
      function Ht() {
      }
      function Br() {
        !St && !Mt && (St = !0, Wr(Te));
      }
      function hr() {
        return ge(Ut);
      }
      function $r(ne) {
        ne.callback = null;
      }
      function mn() {
        return Ge;
      }
      var Qn = !1, Fn = null, Hn = -1, Dn = Xe, Ir = -1;
      function Yr() {
        var ne = I.unstable_now() - Ir;
        return !(ne < Dn);
      }
      function Wn() {
      }
      function mr(ne) {
        if (ne < 0 || ne > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ne > 0 ? Dn = Math.floor(1e3 / ne) : Dn = Xe;
      }
      var Qr = function() {
        if (Fn !== null) {
          var ne = I.unstable_now();
          Ir = ne;
          var ke = !0, ot = !0;
          try {
            ot = Fn(ke, ne);
          } finally {
            ot ? yr() : (Qn = !1, Fn = null);
          }
        } else
          Qn = !1;
      }, yr;
      if (typeof T == "function")
        yr = function() {
          T(Qr);
        };
      else if (typeof MessageChannel < "u") {
        var fa = new MessageChannel(), nr = fa.port2;
        fa.port1.onmessage = Qr, yr = function() {
          nr.postMessage(null);
        };
      } else
        yr = function() {
          Z(Qr, 0);
        };
      function Wr(ne) {
        Fn = ne, Qn || (Qn = !0, yr());
      }
      function yn(ne, ke) {
        Hn = Z(function() {
          ne(I.unstable_now());
        }, ke);
      }
      function br() {
        K(Hn), Hn = -1;
      }
      var oi = Wn, da = null;
      I.unstable_IdlePriority = Pe, I.unstable_ImmediatePriority = We, I.unstable_LowPriority = fe, I.unstable_NormalPriority = ue, I.unstable_Profiling = da, I.unstable_UserBlockingPriority = te, I.unstable_cancelCallback = $r, I.unstable_continueExecution = Br, I.unstable_forceFrameRate = mr, I.unstable_getCurrentPriorityLevel = mn, I.unstable_getFirstCallbackNode = hr, I.unstable_next = lt, I.unstable_pauseExecution = Ht, I.unstable_requestPaint = oi, I.unstable_runWithPriority = Ct, I.unstable_scheduleCallback = ut, I.unstable_shouldYield = Yr, I.unstable_wrapCallback = ht, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(f0)), f0;
}
var t1;
function i1() {
  return t1 || (t1 = 1, process.env.NODE_ENV === "production" ? Am.exports = tD() : Am.exports = nD()), Am.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var n1;
function rD() {
  if (n1)
    return Wa;
  n1 = 1;
  var I = vn, Y = i1();
  function M(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Xe = /* @__PURE__ */ new Set(), et = {};
  function ge(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (et[n] = r, n = 0; n < r.length; n++)
      Xe.add(r[n]);
  }
  var ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), se = Object.prototype.hasOwnProperty, ce = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, We = {}, te = {};
  function ue(n) {
    return se.call(te, n) ? !0 : se.call(We, n) ? !1 : ce.test(n) ? te[n] = !0 : (We[n] = !0, !1);
  }
  function fe(n, r, l, o) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Pe(n, r, l, o) {
    if (r === null || typeof r > "u" || fe(n, r, l, o))
      return !0;
    if (o)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function gt(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var st = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    st[n] = new gt(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    st[r] = new gt(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    st[n] = new gt(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    st[n] = new gt(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    st[n] = new gt(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    st[n] = new gt(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    st[n] = new gt(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    st[n] = new gt(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    st[n] = new gt(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var an = /[\-:]([a-z])/g;
  function at(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      an,
      at
    );
    st[r] = new gt(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(an, at);
    st[r] = new gt(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(an, at);
    st[r] = new gt(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    st[n] = new gt(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), st.xlinkHref = new gt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    st[n] = new gt(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Qe(n, r, l, o) {
    var c = st.hasOwnProperty(r) ? st[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Pe(r, l, c, o) && (l = null), o || c === null ? ue(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var ct = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, De = Symbol.for("react.element"), it = Symbol.for("react.portal"), Ve = Symbol.for("react.fragment"), Gt = Symbol.for("react.strict_mode"), hn = Symbol.for("react.profiler"), Ut = Symbol.for("react.provider"), _t = Symbol.for("react.context"), ln = Symbol.for("react.forward_ref"), ze = Symbol.for("react.suspense"), Ge = Symbol.for("react.suspense_list"), Mt = Symbol.for("react.memo"), St = Symbol.for("react.lazy"), Se = Symbol.for("react.offscreen"), Z = Symbol.iterator;
  function K(n) {
    return n === null || typeof n != "object" ? null : (n = Z && n[Z] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var T = Object.assign, B;
  function le(n) {
    if (B === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        B = r && r[1] || "";
      }
    return `
` + B + n;
  }
  var Te = !1;
  function Me(n, r) {
    if (!n || Te)
      return "";
    Te = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (A) {
            var o = A;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (A) {
            o = A;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (A) {
          o = A;
        }
        n();
      }
    } catch (A) {
      if (A && o && typeof A.stack == "string") {
        for (var c = A.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; )
          E--;
        for (; 1 <= m && 0 <= E; m--, E--)
          if (c[m] !== d[E]) {
            if (m !== 1 || E !== 1)
              do
                if (m--, E--, 0 > E || c[m] !== d[E]) {
                  var w = `
` + c[m].replace(" at new ", " at ");
                  return n.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", n.displayName)), w;
                }
              while (1 <= m && 0 <= E);
            break;
          }
      }
    } finally {
      Te = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? le(n) : "";
  }
  function Ct(n) {
    switch (n.tag) {
      case 5:
        return le(n.type);
      case 16:
        return le("Lazy");
      case 13:
        return le("Suspense");
      case 19:
        return le("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Me(n.type, !1), n;
      case 11:
        return n = Me(n.type.render, !1), n;
      case 1:
        return n = Me(n.type, !0), n;
      default:
        return "";
    }
  }
  function lt(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case Ve:
        return "Fragment";
      case it:
        return "Portal";
      case hn:
        return "Profiler";
      case Gt:
        return "StrictMode";
      case ze:
        return "Suspense";
      case Ge:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case _t:
          return (n.displayName || "Context") + ".Consumer";
        case Ut:
          return (n._context.displayName || "Context") + ".Provider";
        case ln:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Mt:
          return r = n.displayName || null, r !== null ? r : lt(n.type) || "Memo";
        case St:
          r = n._payload, n = n._init;
          try {
            return lt(n(r));
          } catch {
          }
      }
    return null;
  }
  function ht(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return lt(r);
      case 8:
        return r === Gt ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function ut(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Ht(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Br(n) {
    var r = Ht(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function hr(n) {
    n._valueTracker || (n._valueTracker = Br(n));
  }
  function $r(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = Ht(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function mn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Qn(n, r) {
    var l = r.checked;
    return T({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Fn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = ut(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Hn(n, r) {
    r = r.checked, r != null && Qe(n, "checked", r, !1);
  }
  function Dn(n, r) {
    Hn(n, r);
    var l = ut(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Yr(n, r.type, l) : r.hasOwnProperty("defaultValue") && Yr(n, r.type, ut(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Ir(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Yr(n, r, l) {
    (r !== "number" || mn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Wn = Array.isArray;
  function mr(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + ut(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Qr(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(M(91));
    return T({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function yr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(M(92));
        if (Wn(l)) {
          if (1 < l.length)
            throw Error(M(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: ut(l) };
  }
  function fa(n, r) {
    var l = ut(r.value), o = ut(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function nr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Wr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function yn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Wr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var br, oi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (br = br || document.createElement("div"), br.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = br.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function da(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ne = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, ke = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ne).forEach(function(n) {
    ke.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ne[r] = ne[n];
    });
  });
  function ot(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ne.hasOwnProperty(n) && ne[n] ? ("" + r).trim() : r + "px";
  }
  function At(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = ot(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var Pt = T({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function kn(n, r) {
    if (r) {
      if (Pt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(M(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(M(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(M(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(M(62));
    }
  }
  function gn(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var gr = null;
  function Qt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var _r = null, Vt = null, Bt = null;
  function Ka(n) {
    if (n = cs(n)) {
      if (typeof _r != "function")
        throw Error(M(280));
      var r = n.stateNode;
      r && (r = Ne(r), _r(n.stateNode, n.type, r));
    }
  }
  function _a(n) {
    Vt ? Bt ? Bt.push(n) : Bt = [n] : Vt = n;
  }
  function ll() {
    if (Vt) {
      var n = Vt, r = Bt;
      if (Bt = Vt = null, Ka(n), r)
        for (n = 0; n < r.length; n++)
          Ka(r[n]);
    }
  }
  function ql(n, r) {
    return n(r);
  }
  function Pu() {
  }
  var Oi = !1;
  function ul(n, r, l) {
    if (Oi)
      return n(r, l);
    Oi = !0;
    try {
      return ql(n, r, l);
    } finally {
      Oi = !1, (Vt !== null || Bt !== null) && (Pu(), ll());
    }
  }
  function pa(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = Ne(l);
    if (o === null)
      return null;
    l = o[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(M(231, r, typeof l));
    return l;
  }
  var si = !1;
  if (ft)
    try {
      var va = {};
      Object.defineProperty(va, "passive", { get: function() {
        si = !0;
      } }), window.addEventListener("test", va, va), window.removeEventListener("test", va, va);
    } catch {
      si = !1;
    }
  function ci(n, r, l, o, c, d, m, E, w) {
    var A = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, A);
    } catch (G) {
      this.onError(G);
    }
  }
  var Dr = !1, ha = null, fi = !1, x = null, Q = { onError: function(n) {
    Dr = !0, ha = n;
  } };
  function re(n, r, l, o, c, d, m, E, w) {
    Dr = !1, ha = null, ci.apply(Q, arguments);
  }
  function he(n, r, l, o, c, d, m, E, w) {
    if (re.apply(this, arguments), Dr) {
      if (Dr) {
        var A = ha;
        Dr = !1, ha = null;
      } else
        throw Error(M(198));
      fi || (fi = !0, x = A);
    }
  }
  function Ze(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function xt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function tt(n) {
    if (Ze(n) !== n)
      throw Error(M(188));
  }
  function Le(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ze(n), r === null)
        throw Error(M(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l)
            return tt(c), n;
          if (d === o)
            return tt(c), r;
          d = d.sibling;
        }
        throw Error(M(188));
      }
      if (l.return !== o.return)
        l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m)
            throw Error(M(189));
        }
      }
      if (l.alternate !== o)
        throw Error(M(190));
    }
    if (l.tag !== 3)
      throw Error(M(188));
    return l.stateNode.current === l ? n : r;
  }
  function Ln(n) {
    return n = Le(n), n !== null ? tn(n) : null;
  }
  function tn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = tn(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var nn = Y.unstable_scheduleCallback, rr = Y.unstable_cancelCallback, di = Y.unstable_shouldYield, Vu = Y.unstable_requestPaint, Dt = Y.unstable_now, Ff = Y.unstable_getCurrentPriorityLevel, qa = Y.unstable_ImmediatePriority, dt = Y.unstable_UserBlockingPriority, pi = Y.unstable_NormalPriority, ol = Y.unstable_LowPriority, Bu = Y.unstable_IdlePriority, sl = null, Gr = null;
  function Wo(n) {
    if (Gr && typeof Gr.onCommitFiberRoot == "function")
      try {
        Gr.onCommitFiberRoot(sl, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var kr = Math.clz32 ? Math.clz32 : Xs, Go = Math.log, Ko = Math.LN2;
  function Xs(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Go(n) / Ko | 0) | 0;
  }
  var $u = 64, cl = 4194304;
  function Xa(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Or(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Xa(E) : (d &= m, d !== 0 && (o = Xa(d)));
    } else
      m = l & ~c, m !== 0 ? o = Xa(m) : d !== 0 && (o = Xa(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - kr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function fl(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function dl(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - kr(d), E = 1 << m, w = c[m];
      w === -1 ? (!(E & l) || E & o) && (c[m] = fl(E, r)) : w <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function pl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Iu() {
    var n = $u;
    return $u <<= 1, !($u & 4194240) && ($u = 64), n;
  }
  function Yu(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function Ni(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - kr(r), n[r] = l;
  }
  function Hf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - kr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function vi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - kr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Lt = 0;
  function Qu(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Xl, Wu, kt, Gu, Ku, Ke = !1, Jl = [], Sn = null, Kr = null, Nr = null, vl = /* @__PURE__ */ new Map(), Tn = /* @__PURE__ */ new Map(), $t = [], Js = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function qr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Sn = null;
        break;
      case "dragenter":
      case "dragleave":
        Kr = null;
        break;
      case "mouseover":
      case "mouseout":
        Nr = null;
        break;
      case "pointerover":
      case "pointerout":
        vl.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Tn.delete(r.pointerId);
    }
  }
  function Gn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = cs(r), r !== null && Wu(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function hi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Sn = Gn(Sn, n, r, l, o, c), !0;
      case "dragenter":
        return Kr = Gn(Kr, n, r, l, o, c), !0;
      case "mouseover":
        return Nr = Gn(Nr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return vl.set(d, Gn(vl.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Tn.set(d, Gn(Tn.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Zs(n) {
    var r = Na(n.target);
    if (r !== null) {
      var l = Ze(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = xt(l), r !== null) {
            n.blockedOn = r, Ku(n.priority, function() {
              kt(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Mi(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Xu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        gr = o, l.target.dispatchEvent(o), gr = null;
      } else
        return r = cs(l), r !== null && Wu(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function hl(n, r, l) {
    Mi(n) && l.delete(r);
  }
  function ec() {
    Ke = !1, Sn !== null && Mi(Sn) && (Sn = null), Kr !== null && Mi(Kr) && (Kr = null), Nr !== null && Mi(Nr) && (Nr = null), vl.forEach(hl), Tn.forEach(hl);
  }
  function Da(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Ke || (Ke = !0, Y.unstable_scheduleCallback(Y.unstable_NormalPriority, ec)));
  }
  function ml(n) {
    function r(c) {
      return Da(c, n);
    }
    if (0 < Jl.length) {
      Da(Jl[0], n);
      for (var l = 1; l < Jl.length; l++) {
        var o = Jl[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Sn !== null && Da(Sn, n), Kr !== null && Da(Kr, n), Nr !== null && Da(Nr, n), vl.forEach(r), Tn.forEach(r), l = 0; l < $t.length; l++)
      o = $t[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < $t.length && (l = $t[0], l.blockedOn === null); )
      Zs(l), l.blockedOn === null && $t.shift();
  }
  var yl = ct.ReactCurrentBatchConfig, ka = !0;
  function qu(n, r, l, o) {
    var c = Lt, d = yl.transition;
    yl.transition = null;
    try {
      Lt = 1, Sl(n, r, l, o);
    } finally {
      Lt = c, yl.transition = d;
    }
  }
  function gl(n, r, l, o) {
    var c = Lt, d = yl.transition;
    yl.transition = null;
    try {
      Lt = 4, Sl(n, r, l, o);
    } finally {
      Lt = c, yl.transition = d;
    }
  }
  function Sl(n, r, l, o) {
    if (ka) {
      var c = Xu(n, r, l, o);
      if (c === null)
        sc(n, r, o, Zl, l), qr(n, o);
      else if (hi(c, n, r, l, o))
        o.stopPropagation();
      else if (qr(n, o), r & 4 && -1 < Js.indexOf(n)) {
        for (; c !== null; ) {
          var d = cs(c);
          if (d !== null && Xl(d), d = Xu(n, r, l, o), d === null && sc(n, r, o, Zl, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        sc(n, r, o, null, l);
    }
  }
  var Zl = null;
  function Xu(n, r, l, o) {
    if (Zl = null, n = Qt(o), n = Na(n), n !== null)
      if (r = Ze(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = xt(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Zl = n, null;
  }
  function qo(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Ff()) {
          case qa:
            return 1;
          case dt:
            return 4;
          case pi:
          case ol:
            return 16;
          case Bu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ja = null, h = null, C = null;
  function z() {
    if (C)
      return C;
    var n, r = h, l = r.length, o, c = "value" in Ja ? Ja.value : Ja.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++)
      ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function F(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function J() {
    return !0;
  }
  function Fe() {
    return !1;
  }
  function oe(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n)
        n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? J : Fe, this.isPropagationStopped = Fe, this;
    }
    return T(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = J);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = J);
    }, persist: function() {
    }, isPersistent: J }), r;
  }
  var Ue = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, pt = oe(Ue), Ot = T({}, Ue, { view: 0, detail: 0 }), Xt = oe(Ot), Wt, Jt, rn, Et = T({}, Ot, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: If, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== rn && (rn && n.type === "mousemove" ? (Wt = n.screenX - rn.screenX, Jt = n.screenY - rn.screenY) : Jt = Wt = 0, rn = n), Wt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Jt;
  } }), Li = oe(Et), Ju = T({}, Et, { dataTransfer: 0 }), Xo = oe(Ju), Pf = T({}, Ot, { relatedTarget: 0 }), Za = oe(Pf), Jo = T({}, Ue, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Zo = oe(Jo), Vf = T({}, Ue, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Hm = oe(Vf), Pm = T({}, Ue, { data: 0 }), Bf = oe(Pm), $f = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Jp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Zp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function ev(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Zp[n]) ? !!r[n] : !1;
  }
  function If() {
    return ev;
  }
  var ji = T({}, Ot, { key: function(n) {
    if (n.key) {
      var r = $f[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = F(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Jp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: If, charCode: function(n) {
    return n.type === "keypress" ? F(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? F(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Vm = oe(ji), Yf = T({}, Et, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), tc = oe(Yf), Qf = T({}, Ot, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: If }), Bm = oe(Qf), nc = T({}, Ue, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), tv = oe(nc), Xr = T({}, Et, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), zi = oe(Xr), jn = [9, 13, 27, 32], ei = ft && "CompositionEvent" in window, eu = null;
  ft && "documentMode" in document && (eu = document.documentMode);
  var rc = ft && "TextEvent" in window && !eu, nv = ft && (!ei || eu && 8 < eu && 11 >= eu), Zu = String.fromCharCode(32), rv = !1;
  function av(n, r) {
    switch (n) {
      case "keyup":
        return jn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ac(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var eo = !1;
  function $m(n, r) {
    switch (n) {
      case "compositionend":
        return ac(r);
      case "keypress":
        return r.which !== 32 ? null : (rv = !0, Zu);
      case "textInput":
        return n = r.data, n === Zu && rv ? null : n;
      default:
        return null;
    }
  }
  function Im(n, r) {
    if (eo)
      return n === "compositionend" || !ei && av(n, r) ? (n = z(), C = h = Ja = null, eo = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return nv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var iv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function lv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!iv[n.type] : r === "textarea";
  }
  function uv(n, r, l, o) {
    _a(o), r = us(r, "onChange"), 0 < r.length && (l = new pt("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var es = null, to = null;
  function no(n) {
    oc(n, 0);
  }
  function ro(n) {
    var r = io(n);
    if ($r(r))
      return n;
  }
  function ov(n, r) {
    if (n === "change")
      return r;
  }
  var Wf = !1;
  if (ft) {
    var Gf;
    if (ft) {
      var Kf = "oninput" in document;
      if (!Kf) {
        var sv = document.createElement("div");
        sv.setAttribute("oninput", "return;"), Kf = typeof sv.oninput == "function";
      }
      Gf = Kf;
    } else
      Gf = !1;
    Wf = Gf && (!document.documentMode || 9 < document.documentMode);
  }
  function cv() {
    es && (es.detachEvent("onpropertychange", fv), to = es = null);
  }
  function fv(n) {
    if (n.propertyName === "value" && ro(to)) {
      var r = [];
      uv(r, to, n, Qt(n)), ul(no, r);
    }
  }
  function Ym(n, r, l) {
    n === "focusin" ? (cv(), es = r, to = l, es.attachEvent("onpropertychange", fv)) : n === "focusout" && cv();
  }
  function Qm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return ro(to);
  }
  function Wm(n, r) {
    if (n === "click")
      return ro(r);
  }
  function dv(n, r) {
    if (n === "input" || n === "change")
      return ro(r);
  }
  function Gm(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Oa = typeof Object.is == "function" ? Object.is : Gm;
  function ts(n, r) {
    if (Oa(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!se.call(r, c) || !Oa(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function pv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function vv(n, r) {
    var l = pv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r)
          return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = pv(l);
    }
  }
  function hv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? hv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ic() {
    for (var n = window, r = mn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = mn(n.document);
    }
    return r;
  }
  function Ui(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function lc(n) {
    var r = ic(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && hv(l.ownerDocument.documentElement, l)) {
      if (o !== null && Ui(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = vv(l, d);
          var m = vv(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var mv = ft && "documentMode" in document && 11 >= document.documentMode, ti = null, qf = null, ns = null, Xf = !1;
  function yv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Xf || ti == null || ti !== mn(o) || (o = ti, "selectionStart" in o && Ui(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ns && ts(ns, o) || (ns = o, o = us(qf, "onSelect"), 0 < o.length && (r = new pt("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = ti)));
  }
  function uc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var tu = { animationend: uc("Animation", "AnimationEnd"), animationiteration: uc("Animation", "AnimationIteration"), animationstart: uc("Animation", "AnimationStart"), transitionend: uc("Transition", "TransitionEnd") }, Jf = {}, Zf = {};
  ft && (Zf = document.createElement("div").style, "AnimationEvent" in window || (delete tu.animationend.animation, delete tu.animationiteration.animation, delete tu.animationstart.animation), "TransitionEvent" in window || delete tu.transitionend.transition);
  function Kn(n) {
    if (Jf[n])
      return Jf[n];
    if (!tu[n])
      return n;
    var r = tu[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in Zf)
        return Jf[n] = r[l];
    return n;
  }
  var ed = Kn("animationend"), gv = Kn("animationiteration"), Sv = Kn("animationstart"), Ev = Kn("transitionend"), Cv = /* @__PURE__ */ new Map(), xv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ai(n, r) {
    Cv.set(n, r), ge(r, [n]);
  }
  for (var rs = 0; rs < xv.length; rs++) {
    var nu = xv[rs], Km = nu.toLowerCase(), as = nu[0].toUpperCase() + nu.slice(1);
    Ai(Km, "on" + as);
  }
  Ai(ed, "onAnimationEnd"), Ai(gv, "onAnimationIteration"), Ai(Sv, "onAnimationStart"), Ai("dblclick", "onDoubleClick"), Ai("focusin", "onFocus"), Ai("focusout", "onBlur"), Ai(Ev, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), ge("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ge("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ge("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ge("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ge("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ge("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var is = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), qm = new Set("cancel close invalid load scroll toggle".split(" ").concat(is));
  function Rv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, he(o, r, void 0, n), n.currentTarget = null;
  }
  function oc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var m = o.length - 1; 0 <= m; m--) {
            var E = o[m], w = E.instance, A = E.currentTarget;
            if (E = E.listener, w !== d && c.isPropagationStopped())
              break e;
            Rv(c, E, A), d = w;
          }
        else
          for (m = 0; m < o.length; m++) {
            if (E = o[m], w = E.instance, A = E.currentTarget, E = E.listener, w !== d && c.isPropagationStopped())
              break e;
            Rv(c, E, A), d = w;
          }
      }
    }
    if (fi)
      throw n = x, fi = !1, x = null, n;
  }
  function Zt(n, r) {
    var l = r[ud];
    l === void 0 && (l = r[ud] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Tv(r, n, 2, !1), l.add(o));
  }
  function El(n, r, l) {
    var o = 0;
    r && (o |= 4), Tv(l, n, o, r);
  }
  var Fi = "_reactListening" + Math.random().toString(36).slice(2);
  function ao(n) {
    if (!n[Fi]) {
      n[Fi] = !0, Xe.forEach(function(l) {
        l !== "selectionchange" && (qm.has(l) || El(l, !1, n), El(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Fi] || (r[Fi] = !0, El("selectionchange", !1, r));
    }
  }
  function Tv(n, r, l, o) {
    switch (qo(r)) {
      case 1:
        var c = qu;
        break;
      case 4:
        c = gl;
        break;
      default:
        c = Sl;
    }
    l = c.bind(null, r, l, n), c = void 0, !si || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function sc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var m = o.tag;
          if (m === 3 || m === 4) {
            var E = o.stateNode.containerInfo;
            if (E === c || E.nodeType === 8 && E.parentNode === c)
              break;
            if (m === 4)
              for (m = o.return; m !== null; ) {
                var w = m.tag;
                if ((w === 3 || w === 4) && (w = m.stateNode.containerInfo, w === c || w.nodeType === 8 && w.parentNode === c))
                  return;
                m = m.return;
              }
            for (; E !== null; ) {
              if (m = Na(E), m === null)
                return;
              if (w = m.tag, w === 5 || w === 6) {
                o = d = m;
                continue e;
              }
              E = E.parentNode;
            }
          }
          o = o.return;
        }
    ul(function() {
      var A = d, G = Qt(l), q = [];
      e: {
        var W = Cv.get(n);
        if (W !== void 0) {
          var pe = pt, Ce = n;
          switch (n) {
            case "keypress":
              if (F(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              pe = Vm;
              break;
            case "focusin":
              Ce = "focus", pe = Za;
              break;
            case "focusout":
              Ce = "blur", pe = Za;
              break;
            case "beforeblur":
            case "afterblur":
              pe = Za;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              pe = Li;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              pe = Xo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              pe = Bm;
              break;
            case ed:
            case gv:
            case Sv:
              pe = Zo;
              break;
            case Ev:
              pe = tv;
              break;
            case "scroll":
              pe = Xt;
              break;
            case "wheel":
              pe = zi;
              break;
            case "copy":
            case "cut":
            case "paste":
              pe = Hm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              pe = tc;
          }
          var we = (r & 4) !== 0, Nn = !we && n === "scroll", k = we ? W !== null ? W + "Capture" : null : W;
          we = [];
          for (var _ = A, L; _ !== null; ) {
            L = _;
            var ee = L.stateNode;
            if (L.tag === 5 && ee !== null && (L = ee, k !== null && (ee = pa(_, k), ee != null && we.push(ls(_, ee, L)))), Nn)
              break;
            _ = _.return;
          }
          0 < we.length && (W = new pe(W, Ce, null, l, G), q.push({ event: W, listeners: we }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (W = n === "mouseover" || n === "pointerover", pe = n === "mouseout" || n === "pointerout", W && l !== gr && (Ce = l.relatedTarget || l.fromElement) && (Na(Ce) || Ce[Hi]))
            break e;
          if ((pe || W) && (W = G.window === G ? G : (W = G.ownerDocument) ? W.defaultView || W.parentWindow : window, pe ? (Ce = l.relatedTarget || l.toElement, pe = A, Ce = Ce ? Na(Ce) : null, Ce !== null && (Nn = Ze(Ce), Ce !== Nn || Ce.tag !== 5 && Ce.tag !== 6) && (Ce = null)) : (pe = null, Ce = A), pe !== Ce)) {
            if (we = Li, ee = "onMouseLeave", k = "onMouseEnter", _ = "mouse", (n === "pointerout" || n === "pointerover") && (we = tc, ee = "onPointerLeave", k = "onPointerEnter", _ = "pointer"), Nn = pe == null ? W : io(pe), L = Ce == null ? W : io(Ce), W = new we(ee, _ + "leave", pe, l, G), W.target = Nn, W.relatedTarget = L, ee = null, Na(G) === A && (we = new we(k, _ + "enter", Ce, l, G), we.target = L, we.relatedTarget = Nn, ee = we), Nn = ee, pe && Ce)
              t: {
                for (we = pe, k = Ce, _ = 0, L = we; L; L = ru(L))
                  _++;
                for (L = 0, ee = k; ee; ee = ru(ee))
                  L++;
                for (; 0 < _ - L; )
                  we = ru(we), _--;
                for (; 0 < L - _; )
                  k = ru(k), L--;
                for (; _--; ) {
                  if (we === k || k !== null && we === k.alternate)
                    break t;
                  we = ru(we), k = ru(k);
                }
                we = null;
              }
            else
              we = null;
            pe !== null && td(q, W, pe, we, !1), Ce !== null && Nn !== null && td(q, Nn, Ce, we, !0);
          }
        }
        e: {
          if (W = A ? io(A) : window, pe = W.nodeName && W.nodeName.toLowerCase(), pe === "select" || pe === "input" && W.type === "file")
            var be = ov;
          else if (lv(W))
            if (Wf)
              be = dv;
            else {
              be = Qm;
              var xe = Ym;
            }
          else
            (pe = W.nodeName) && pe.toLowerCase() === "input" && (W.type === "checkbox" || W.type === "radio") && (be = Wm);
          if (be && (be = be(n, A))) {
            uv(q, be, l, G);
            break e;
          }
          xe && xe(n, W, A), n === "focusout" && (xe = W._wrapperState) && xe.controlled && W.type === "number" && Yr(W, "number", W.value);
        }
        switch (xe = A ? io(A) : window, n) {
          case "focusin":
            (lv(xe) || xe.contentEditable === "true") && (ti = xe, qf = A, ns = null);
            break;
          case "focusout":
            ns = qf = ti = null;
            break;
          case "mousedown":
            Xf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Xf = !1, yv(q, l, G);
            break;
          case "selectionchange":
            if (mv)
              break;
          case "keydown":
          case "keyup":
            yv(q, l, G);
        }
        var Oe;
        if (ei)
          e: {
            switch (n) {
              case "compositionstart":
                var Ye = "onCompositionStart";
                break e;
              case "compositionend":
                Ye = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ye = "onCompositionUpdate";
                break e;
            }
            Ye = void 0;
          }
        else
          eo ? av(n, l) && (Ye = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Ye = "onCompositionStart");
        Ye && (nv && l.locale !== "ko" && (eo || Ye !== "onCompositionStart" ? Ye === "onCompositionEnd" && eo && (Oe = z()) : (Ja = G, h = "value" in Ja ? Ja.value : Ja.textContent, eo = !0)), xe = us(A, Ye), 0 < xe.length && (Ye = new Bf(Ye, n, null, l, G), q.push({ event: Ye, listeners: xe }), Oe ? Ye.data = Oe : (Oe = ac(l), Oe !== null && (Ye.data = Oe)))), (Oe = rc ? $m(n, l) : Im(n, l)) && (A = us(A, "onBeforeInput"), 0 < A.length && (G = new Bf("onBeforeInput", "beforeinput", null, l, G), q.push({ event: G, listeners: A }), G.data = Oe));
      }
      oc(q, r);
    });
  }
  function ls(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function us(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = pa(n, l), d != null && o.unshift(ls(n, d, c)), d = pa(n, r), d != null && o.push(ls(n, d, c))), n = n.return;
    }
    return o;
  }
  function ru(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function td(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, w = E.alternate, A = E.stateNode;
      if (w !== null && w === o)
        break;
      E.tag === 5 && A !== null && (E = A, c ? (w = pa(l, d), w != null && m.unshift(ls(l, w, E))) : c || (w = pa(l, d), w != null && m.push(ls(l, w, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var nd = /\r\n?/g, Xm = /\u0000|\uFFFD/g;
  function rd(n) {
    return (typeof n == "string" ? n : "" + n).replace(nd, `
`).replace(Xm, "");
  }
  function cc(n, r, l) {
    if (r = rd(r), rd(n) !== r && l)
      throw Error(M(425));
  }
  function fc() {
  }
  var ad = null, au = null;
  function os(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var iu = typeof setTimeout == "function" ? setTimeout : void 0, wv = typeof clearTimeout == "function" ? clearTimeout : void 0, id = typeof Promise == "function" ? Promise : void 0, ld = typeof queueMicrotask == "function" ? queueMicrotask : typeof id < "u" ? function(n) {
    return id.resolve(null).then(n).catch(Jm);
  } : iu;
  function Jm(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Cl(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (o === 0) {
            n.removeChild(c), ml(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    ml(r);
  }
  function ni(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function ss(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var xl = Math.random().toString(36).slice(2), mi = "__reactFiber$" + xl, lu = "__reactProps$" + xl, Hi = "__reactContainer$" + xl, ud = "__reactEvents$" + xl, Zm = "__reactListeners$" + xl, od = "__reactHandles$" + xl;
  function Na(n) {
    var r = n[mi];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Hi] || l[mi]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = ss(n); n !== null; ) {
            if (l = n[mi])
              return l;
            n = ss(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function cs(n) {
    return n = n[mi] || n[Hi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function io(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(M(33));
  }
  function Ne(n) {
    return n[lu] || null;
  }
  var Rl = [], un = -1;
  function nt(n) {
    return { current: n };
  }
  function Ft(n) {
    0 > un || (n.current = Rl[un], Rl[un] = null, un--);
  }
  function It(n, r) {
    un++, Rl[un] = n.current, n.current = r;
  }
  var yi = {}, Ie = nt(yi), wn = nt(!1), Jr = yi;
  function Ma(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return yi;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function dn(n) {
    return n = n.childContextTypes, n != null;
  }
  function La() {
    Ft(wn), Ft(Ie);
  }
  function Tl(n, r, l) {
    if (Ie.current !== yi)
      throw Error(M(168));
    It(Ie, r), It(wn, l);
  }
  function fs(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(M(108, ht(n) || "Unknown", c));
    return T({}, l, o);
  }
  function dc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || yi, Jr = Ie.current, It(Ie, n), It(wn, wn.current), !0;
  }
  function bv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(M(169));
    l ? (n = fs(n, r, Jr), o.__reactInternalMemoizedMergedChildContext = n, Ft(wn), Ft(Ie), It(Ie, n)) : Ft(wn), It(wn, l);
  }
  var ma = null, qn = !1, ds = !1;
  function sd(n) {
    ma === null ? ma = [n] : ma.push(n);
  }
  function cd(n) {
    qn = !0, sd(n);
  }
  function Zr() {
    if (!ds && ma !== null) {
      ds = !0;
      var n = 0, r = Lt;
      try {
        var l = ma;
        for (Lt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        ma = null, qn = !1;
      } catch (c) {
        throw ma !== null && (ma = ma.slice(n + 1)), nn(qa, Zr), c;
      } finally {
        Lt = r, ds = !1;
      }
    }
    return null;
  }
  var wl = [], ea = 0, uu = null, lo = 0, ta = [], Sr = 0, ja = null, ar = 1, Pi = "";
  function ya(n, r) {
    wl[ea++] = lo, wl[ea++] = uu, uu = n, lo = r;
  }
  function fd(n, r, l) {
    ta[Sr++] = ar, ta[Sr++] = Pi, ta[Sr++] = ja, ja = n;
    var o = ar;
    n = Pi;
    var c = 32 - kr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - kr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, ar = 1 << 32 - kr(r) + c | l << c | o, Pi = d + n;
    } else
      ar = 1 << d | l << c | o, Pi = n;
  }
  function pc(n) {
    n.return !== null && (ya(n, 1), fd(n, 1, 0));
  }
  function dd(n) {
    for (; n === uu; )
      uu = wl[--ea], wl[ea] = null, lo = wl[--ea], wl[ea] = null;
    for (; n === ja; )
      ja = ta[--Sr], ta[Sr] = null, Pi = ta[--Sr], ta[Sr] = null, ar = ta[--Sr], ta[Sr] = null;
  }
  var ga = null, na = null, on = !1, za = null;
  function pd(n, r) {
    var l = Va(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function _v(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ga = n, na = ni(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ga = n, na = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ja !== null ? { id: ar, overflow: Pi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Va(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, ga = n, na = null, !0) : !1;
      default:
        return !1;
    }
  }
  function vc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function hc(n) {
    if (on) {
      var r = na;
      if (r) {
        var l = r;
        if (!_v(n, r)) {
          if (vc(n))
            throw Error(M(418));
          r = ni(l.nextSibling);
          var o = ga;
          r && _v(n, r) ? pd(o, l) : (n.flags = n.flags & -4097 | 2, on = !1, ga = n);
        }
      } else {
        if (vc(n))
          throw Error(M(418));
        n.flags = n.flags & -4097 | 2, on = !1, ga = n;
      }
    }
  }
  function Dv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    ga = n;
  }
  function mc(n) {
    if (n !== ga)
      return !1;
    if (!on)
      return Dv(n), on = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !os(n.type, n.memoizedProps)), r && (r = na)) {
      if (vc(n))
        throw kv(), Error(M(418));
      for (; r; )
        pd(n, r), r = ni(r.nextSibling);
    }
    if (Dv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(M(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                na = ni(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        na = null;
      }
    } else
      na = ga ? ni(n.stateNode.nextSibling) : null;
    return !0;
  }
  function kv() {
    for (var n = na; n; )
      n = ni(n.nextSibling);
  }
  function En() {
    na = ga = null, on = !1;
  }
  function vd(n) {
    za === null ? za = [n] : za.push(n);
  }
  var yc = ct.ReactCurrentBatchConfig;
  function Sa(n, r) {
    if (n && n.defaultProps) {
      r = T({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var gi = nt(null), gc = null, bl = null, hd = null;
  function md() {
    hd = bl = gc = null;
  }
  function _l(n) {
    var r = gi.current;
    Ft(gi), n._currentValue = r;
  }
  function Xn(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function ae(n, r) {
    gc = n, hd = bl = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (zn = !0), n.firstContext = null);
  }
  function On(n) {
    var r = n._currentValue;
    if (hd !== n)
      if (n = { context: n, memoizedValue: r, next: null }, bl === null) {
        if (gc === null)
          throw Error(M(308));
        bl = n, gc.dependencies = { lanes: 0, firstContext: n };
      } else
        bl = bl.next = n;
    return r;
  }
  var ir = null;
  function yd(n) {
    ir === null ? ir = [n] : ir.push(n);
  }
  function Ov(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, yd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Vi(n, o);
  }
  function Vi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Dl = !1;
  function gd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Pn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Bi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function kl(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, mt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Vi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, yd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Vi(n, l);
  }
  function Sc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, vi(n, l);
    }
  }
  function Sd(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Ol(n, r, l, o) {
    var c = n.updateQueue;
    Dl = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var w = E, A = w.next;
      w.next = null, m === null ? d = A : m.next = A, m = w;
      var G = n.alternate;
      G !== null && (G = G.updateQueue, E = G.lastBaseUpdate, E !== m && (E === null ? G.firstBaseUpdate = A : E.next = A, G.lastBaseUpdate = w));
    }
    if (d !== null) {
      var q = c.baseState;
      m = 0, G = A = w = null, E = d;
      do {
        var W = E.lane, pe = E.eventTime;
        if ((o & W) === W) {
          G !== null && (G = G.next = {
            eventTime: pe,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var Ce = n, we = E;
            switch (W = r, pe = l, we.tag) {
              case 1:
                if (Ce = we.payload, typeof Ce == "function") {
                  q = Ce.call(pe, q, W);
                  break e;
                }
                q = Ce;
                break e;
              case 3:
                Ce.flags = Ce.flags & -65537 | 128;
              case 0:
                if (Ce = we.payload, W = typeof Ce == "function" ? Ce.call(pe, q, W) : Ce, W == null)
                  break e;
                q = T({}, q, W);
                break e;
              case 2:
                Dl = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, W = c.effects, W === null ? c.effects = [E] : W.push(E));
        } else
          pe = { eventTime: pe, lane: W, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, G === null ? (A = G = pe, w = q) : G = G.next = pe, m |= W;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null)
            break;
          W = E, E = W.next, W.next = null, c.lastBaseUpdate = W, c.shared.pending = null;
        }
      } while (1);
      if (G === null && (w = q), c.baseState = w, c.firstBaseUpdate = A, c.lastBaseUpdate = G, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      Qi |= m, n.lanes = m, n.memoizedState = q;
    }
  }
  function ou(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(M(191, c));
          c.call(o);
        }
      }
  }
  var Nv = new I.Component().refs;
  function Ed(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : T({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Ec = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ze(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Rr(), c = Un(n), d = Bi(o, c);
    d.payload = r, l != null && (d.callback = l), r = kl(n, d, c), r !== null && (Tr(r, n, c, o), Sc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Rr(), c = Un(n), d = Bi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = kl(n, d, c), r !== null && (Tr(r, n, c, o), Sc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Rr(), o = Un(n), c = Bi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = kl(n, c, o), r !== null && (Tr(r, n, o, l), Sc(r, n, o));
  } };
  function Mv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !ts(l, o) || !ts(c, d) : !0;
  }
  function Lv(n, r, l) {
    var o = !1, c = yi, d = r.contextType;
    return typeof d == "object" && d !== null ? d = On(d) : (c = dn(r) ? Jr : Ie.current, o = r.contextTypes, d = (o = o != null) ? Ma(n, c) : yi), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Ec, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function jv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Ec.enqueueReplaceState(r, r.state, null);
  }
  function Cc(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = Nv, gd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = On(d) : (d = dn(r) ? Jr : Ie.current, c.context = Ma(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Ed(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Ec.enqueueReplaceState(c, c.state, null), Ol(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function uo(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(M(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(M(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          E === Nv && (E = c.refs = {}), m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(M(284));
      if (!l._owner)
        throw Error(M(290, n));
    }
    return n;
  }
  function xc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(M(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function zv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Uv(n) {
    function r(k, _) {
      if (n) {
        var L = k.deletions;
        L === null ? (k.deletions = [_], k.flags |= 16) : L.push(_);
      }
    }
    function l(k, _) {
      if (!n)
        return null;
      for (; _ !== null; )
        r(k, _), _ = _.sibling;
      return null;
    }
    function o(k, _) {
      for (k = /* @__PURE__ */ new Map(); _ !== null; )
        _.key !== null ? k.set(_.key, _) : k.set(_.index, _), _ = _.sibling;
      return k;
    }
    function c(k, _) {
      return k = Fl(k, _), k.index = 0, k.sibling = null, k;
    }
    function d(k, _, L) {
      return k.index = L, n ? (L = k.alternate, L !== null ? (L = L.index, L < _ ? (k.flags |= 2, _) : L) : (k.flags |= 2, _)) : (k.flags |= 1048576, _);
    }
    function m(k) {
      return n && k.alternate === null && (k.flags |= 2), k;
    }
    function E(k, _, L, ee) {
      return _ === null || _.tag !== 6 ? (_ = Ns(L, k.mode, ee), _.return = k, _) : (_ = c(_, L), _.return = k, _);
    }
    function w(k, _, L, ee) {
      var be = L.type;
      return be === Ve ? G(k, _, L.props.children, ee, L.key) : _ !== null && (_.elementType === be || typeof be == "object" && be !== null && be.$$typeof === St && zv(be) === _.type) ? (ee = c(_, L.props), ee.ref = uo(k, _, L), ee.return = k, ee) : (ee = ef(L.type, L.key, L.props, null, k.mode, ee), ee.ref = uo(k, _, L), ee.return = k, ee);
    }
    function A(k, _, L, ee) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== L.containerInfo || _.stateNode.implementation !== L.implementation ? (_ = _u(L, k.mode, ee), _.return = k, _) : (_ = c(_, L.children || []), _.return = k, _);
    }
    function G(k, _, L, ee, be) {
      return _ === null || _.tag !== 7 ? (_ = bu(L, k.mode, ee, be), _.return = k, _) : (_ = c(_, L), _.return = k, _);
    }
    function q(k, _, L) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number")
        return _ = Ns("" + _, k.mode, L), _.return = k, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case De:
            return L = ef(_.type, _.key, _.props, null, k.mode, L), L.ref = uo(k, null, _), L.return = k, L;
          case it:
            return _ = _u(_, k.mode, L), _.return = k, _;
          case St:
            var ee = _._init;
            return q(k, ee(_._payload), L);
        }
        if (Wn(_) || K(_))
          return _ = bu(_, k.mode, L, null), _.return = k, _;
        xc(k, _);
      }
      return null;
    }
    function W(k, _, L, ee) {
      var be = _ !== null ? _.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number")
        return be !== null ? null : E(k, _, "" + L, ee);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case De:
            return L.key === be ? w(k, _, L, ee) : null;
          case it:
            return L.key === be ? A(k, _, L, ee) : null;
          case St:
            return be = L._init, W(
              k,
              _,
              be(L._payload),
              ee
            );
        }
        if (Wn(L) || K(L))
          return be !== null ? null : G(k, _, L, ee, null);
        xc(k, L);
      }
      return null;
    }
    function pe(k, _, L, ee, be) {
      if (typeof ee == "string" && ee !== "" || typeof ee == "number")
        return k = k.get(L) || null, E(_, k, "" + ee, be);
      if (typeof ee == "object" && ee !== null) {
        switch (ee.$$typeof) {
          case De:
            return k = k.get(ee.key === null ? L : ee.key) || null, w(_, k, ee, be);
          case it:
            return k = k.get(ee.key === null ? L : ee.key) || null, A(_, k, ee, be);
          case St:
            var xe = ee._init;
            return pe(k, _, L, xe(ee._payload), be);
        }
        if (Wn(ee) || K(ee))
          return k = k.get(L) || null, G(_, k, ee, be, null);
        xc(_, ee);
      }
      return null;
    }
    function Ce(k, _, L, ee) {
      for (var be = null, xe = null, Oe = _, Ye = _ = 0, er = null; Oe !== null && Ye < L.length; Ye++) {
        Oe.index > Ye ? (er = Oe, Oe = null) : er = Oe.sibling;
        var Nt = W(k, Oe, L[Ye], ee);
        if (Nt === null) {
          Oe === null && (Oe = er);
          break;
        }
        n && Oe && Nt.alternate === null && r(k, Oe), _ = d(Nt, _, Ye), xe === null ? be = Nt : xe.sibling = Nt, xe = Nt, Oe = er;
      }
      if (Ye === L.length)
        return l(k, Oe), on && ya(k, Ye), be;
      if (Oe === null) {
        for (; Ye < L.length; Ye++)
          Oe = q(k, L[Ye], ee), Oe !== null && (_ = d(Oe, _, Ye), xe === null ? be = Oe : xe.sibling = Oe, xe = Oe);
        return on && ya(k, Ye), be;
      }
      for (Oe = o(k, Oe); Ye < L.length; Ye++)
        er = pe(Oe, k, Ye, L[Ye], ee), er !== null && (n && er.alternate !== null && Oe.delete(er.key === null ? Ye : er.key), _ = d(er, _, Ye), xe === null ? be = er : xe.sibling = er, xe = er);
      return n && Oe.forEach(function(Hl) {
        return r(k, Hl);
      }), on && ya(k, Ye), be;
    }
    function we(k, _, L, ee) {
      var be = K(L);
      if (typeof be != "function")
        throw Error(M(150));
      if (L = be.call(L), L == null)
        throw Error(M(151));
      for (var xe = be = null, Oe = _, Ye = _ = 0, er = null, Nt = L.next(); Oe !== null && !Nt.done; Ye++, Nt = L.next()) {
        Oe.index > Ye ? (er = Oe, Oe = null) : er = Oe.sibling;
        var Hl = W(k, Oe, Nt.value, ee);
        if (Hl === null) {
          Oe === null && (Oe = er);
          break;
        }
        n && Oe && Hl.alternate === null && r(k, Oe), _ = d(Hl, _, Ye), xe === null ? be = Hl : xe.sibling = Hl, xe = Hl, Oe = er;
      }
      if (Nt.done)
        return l(
          k,
          Oe
        ), on && ya(k, Ye), be;
      if (Oe === null) {
        for (; !Nt.done; Ye++, Nt = L.next())
          Nt = q(k, Nt.value, ee), Nt !== null && (_ = d(Nt, _, Ye), xe === null ? be = Nt : xe.sibling = Nt, xe = Nt);
        return on && ya(k, Ye), be;
      }
      for (Oe = o(k, Oe); !Nt.done; Ye++, Nt = L.next())
        Nt = pe(Oe, k, Ye, Nt.value, ee), Nt !== null && (n && Nt.alternate !== null && Oe.delete(Nt.key === null ? Ye : Nt.key), _ = d(Nt, _, Ye), xe === null ? be = Nt : xe.sibling = Nt, xe = Nt);
      return n && Oe.forEach(function(Sy) {
        return r(k, Sy);
      }), on && ya(k, Ye), be;
    }
    function Nn(k, _, L, ee) {
      if (typeof L == "object" && L !== null && L.type === Ve && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case De:
            e: {
              for (var be = L.key, xe = _; xe !== null; ) {
                if (xe.key === be) {
                  if (be = L.type, be === Ve) {
                    if (xe.tag === 7) {
                      l(k, xe.sibling), _ = c(xe, L.props.children), _.return = k, k = _;
                      break e;
                    }
                  } else if (xe.elementType === be || typeof be == "object" && be !== null && be.$$typeof === St && zv(be) === xe.type) {
                    l(k, xe.sibling), _ = c(xe, L.props), _.ref = uo(k, xe, L), _.return = k, k = _;
                    break e;
                  }
                  l(k, xe);
                  break;
                } else
                  r(k, xe);
                xe = xe.sibling;
              }
              L.type === Ve ? (_ = bu(L.props.children, k.mode, ee, L.key), _.return = k, k = _) : (ee = ef(L.type, L.key, L.props, null, k.mode, ee), ee.ref = uo(k, _, L), ee.return = k, k = ee);
            }
            return m(k);
          case it:
            e: {
              for (xe = L.key; _ !== null; ) {
                if (_.key === xe)
                  if (_.tag === 4 && _.stateNode.containerInfo === L.containerInfo && _.stateNode.implementation === L.implementation) {
                    l(k, _.sibling), _ = c(_, L.children || []), _.return = k, k = _;
                    break e;
                  } else {
                    l(k, _);
                    break;
                  }
                else
                  r(k, _);
                _ = _.sibling;
              }
              _ = _u(L, k.mode, ee), _.return = k, k = _;
            }
            return m(k);
          case St:
            return xe = L._init, Nn(k, _, xe(L._payload), ee);
        }
        if (Wn(L))
          return Ce(k, _, L, ee);
        if (K(L))
          return we(k, _, L, ee);
        xc(k, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, _ !== null && _.tag === 6 ? (l(k, _.sibling), _ = c(_, L), _.return = k, k = _) : (l(k, _), _ = Ns(L, k.mode, ee), _.return = k, k = _), m(k)) : l(k, _);
    }
    return Nn;
  }
  var oo = Uv(!0), Av = Uv(!1), ps = {}, ri = nt(ps), vs = nt(ps), so = nt(ps);
  function su(n) {
    if (n === ps)
      throw Error(M(174));
    return n;
  }
  function Cd(n, r) {
    switch (It(so, r), It(vs, n), It(ri, ps), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : yn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = yn(r, n);
    }
    Ft(ri), It(ri, r);
  }
  function Nl() {
    Ft(ri), Ft(vs), Ft(so);
  }
  function Ae(n) {
    su(so.current);
    var r = su(ri.current), l = yn(r, n.type);
    r !== l && (It(vs, n), It(ri, l));
  }
  function vt(n) {
    vs.current === n && (Ft(ri), Ft(vs));
  }
  var He = nt(0);
  function Cn(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Ua = [];
  function Rc() {
    for (var n = 0; n < Ua.length; n++)
      Ua[n]._workInProgressVersionPrimary = null;
    Ua.length = 0;
  }
  var Tc = ct.ReactCurrentDispatcher, xd = ct.ReactCurrentBatchConfig, cu = 0, sn = null, V = null, Rt = null, Be = !1, Si = !1, Ea = 0, fu = 0;
  function cn() {
    throw Error(M(321));
  }
  function du(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!Oa(n[l], r[l]))
        return !1;
    return !0;
  }
  function Ml(n, r, l, o, c, d) {
    if (cu = d, sn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Tc.current = n === null || n.memoizedState === null ? ty : ny, n = l(o, c), Si) {
      d = 0;
      do {
        if (Si = !1, Ea = 0, 25 <= d)
          throw Error(M(301));
        d += 1, Rt = V = null, r.updateQueue = null, Tc.current = Td, n = l(o, c);
      } while (Si);
    }
    if (Tc.current = Pc, r = V !== null && V.next !== null, cu = 0, Rt = V = sn = null, Be = !1, r)
      throw Error(M(300));
    return n;
  }
  function pu() {
    var n = Ea !== 0;
    return Ea = 0, n;
  }
  function Aa() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Rt === null ? sn.memoizedState = Rt = n : Rt = Rt.next = n, Rt;
  }
  function ra() {
    if (V === null) {
      var n = sn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = V.next;
    var r = Rt === null ? sn.memoizedState : Rt.next;
    if (r !== null)
      Rt = r, V = n;
    else {
      if (n === null)
        throw Error(M(310));
      V = n, n = { memoizedState: V.memoizedState, baseState: V.baseState, baseQueue: V.baseQueue, queue: V.queue, next: null }, Rt === null ? sn.memoizedState = Rt = n : Rt = Rt.next = n;
    }
    return Rt;
  }
  function vu(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function hs(n) {
    var r = ra(), l = r.queue;
    if (l === null)
      throw Error(M(311));
    l.lastRenderedReducer = n;
    var o = V, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, w = null, A = d;
      do {
        var G = A.lane;
        if ((cu & G) === G)
          w !== null && (w = w.next = { lane: 0, action: A.action, hasEagerState: A.hasEagerState, eagerState: A.eagerState, next: null }), o = A.hasEagerState ? A.eagerState : n(o, A.action);
        else {
          var q = {
            lane: G,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          };
          w === null ? (E = w = q, m = o) : w = w.next = q, sn.lanes |= G, Qi |= G;
        }
        A = A.next;
      } while (A !== null && A !== d);
      w === null ? m = o : w.next = E, Oa(o, r.memoizedState) || (zn = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = w, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, sn.lanes |= d, Qi |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function ms(n) {
    var r = ra(), l = r.queue;
    if (l === null)
      throw Error(M(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      Oa(d, r.memoizedState) || (zn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function wc() {
  }
  function bc(n, r) {
    var l = sn, o = ra(), c = r(), d = !Oa(o.memoizedState, c);
    if (d && (o.memoizedState = c, zn = !0), o = o.queue, ys(kc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Rt !== null && Rt.memoizedState.tag & 1) {
      if (l.flags |= 2048, hu(9, Dc.bind(null, l, o, c, r), void 0, null), xn === null)
        throw Error(M(349));
      cu & 30 || _c(l, r, c);
    }
    return c;
  }
  function _c(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = sn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, sn.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Dc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Oc(r) && Nc(n);
  }
  function kc(n, r, l) {
    return l(function() {
      Oc(r) && Nc(n);
    });
  }
  function Oc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Oa(n, l);
    } catch {
      return !0;
    }
  }
  function Nc(n) {
    var r = Vi(n, 1);
    r !== null && Tr(r, n, 1, -1);
  }
  function Mc(n) {
    var r = Aa();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: vu, lastRenderedState: n }, r.queue = n, n = n.dispatch = Hc.bind(null, sn, n), [r.memoizedState, n];
  }
  function hu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = sn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, sn.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Lc() {
    return ra().memoizedState;
  }
  function mu(n, r, l, o) {
    var c = Aa();
    sn.flags |= n, c.memoizedState = hu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function $i(n, r, l, o) {
    var c = ra();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (V !== null) {
      var m = V.memoizedState;
      if (d = m.destroy, o !== null && du(o, m.deps)) {
        c.memoizedState = hu(r, l, d, o);
        return;
      }
    }
    sn.flags |= n, c.memoizedState = hu(1 | r, l, d, o);
  }
  function jc(n, r) {
    return mu(8390656, 8, n, r);
  }
  function ys(n, r) {
    return $i(2048, 8, n, r);
  }
  function zc(n, r) {
    return $i(4, 2, n, r);
  }
  function Uc(n, r) {
    return $i(4, 4, n, r);
  }
  function Rd(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function co(n, r, l) {
    return l = l != null ? l.concat([n]) : null, $i(4, 4, Rd.bind(null, r, n), l);
  }
  function Ac() {
  }
  function fo(n, r) {
    var l = ra();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && du(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Ll(n, r) {
    var l = ra();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && du(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function aa(n, r, l) {
    return cu & 21 ? (Oa(l, r) || (l = Iu(), sn.lanes |= l, Qi |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, zn = !0), n.memoizedState = l);
  }
  function ey(n, r) {
    var l = Lt;
    Lt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = xd.transition;
    xd.transition = {};
    try {
      n(!1), r();
    } finally {
      Lt = l, xd.transition = o;
    }
  }
  function en() {
    return ra().memoizedState;
  }
  function Fc(n, r, l) {
    var o = Un(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, po(n))
      gs(r, l);
    else if (l = Ov(n, r, l, o), l !== null) {
      var c = Rr();
      Tr(l, n, o, c), Fv(l, r, o);
    }
  }
  function Hc(n, r, l) {
    var o = Un(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (po(n))
      gs(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var m = r.lastRenderedState, E = d(m, l);
          if (c.hasEagerState = !0, c.eagerState = E, Oa(E, m)) {
            var w = r.interleaved;
            w === null ? (c.next = c, yd(r)) : (c.next = w.next, w.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = Ov(n, r, c, o), l !== null && (c = Rr(), Tr(l, n, o, c), Fv(l, r, o));
    }
  }
  function po(n) {
    var r = n.alternate;
    return n === sn || r !== null && r === sn;
  }
  function gs(n, r) {
    Si = Be = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Fv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, vi(n, l);
    }
  }
  var Pc = { readContext: On, useCallback: cn, useContext: cn, useEffect: cn, useImperativeHandle: cn, useInsertionEffect: cn, useLayoutEffect: cn, useMemo: cn, useReducer: cn, useRef: cn, useState: cn, useDebugValue: cn, useDeferredValue: cn, useTransition: cn, useMutableSource: cn, useSyncExternalStore: cn, useId: cn, unstable_isNewReconciler: !1 }, ty = { readContext: On, useCallback: function(n, r) {
    return Aa().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: On, useEffect: jc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, mu(
      4194308,
      4,
      Rd.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return mu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return mu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Aa();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Aa();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Fc.bind(null, sn, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Aa();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Mc, useDebugValue: Ac, useDeferredValue: function(n) {
    return Aa().memoizedState = n;
  }, useTransition: function() {
    var n = Mc(!1), r = n[0];
    return n = ey.bind(null, n[1]), Aa().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = sn, c = Aa();
    if (on) {
      if (l === void 0)
        throw Error(M(407));
      l = l();
    } else {
      if (l = r(), xn === null)
        throw Error(M(349));
      cu & 30 || _c(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, jc(kc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, hu(9, Dc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Aa(), r = xn.identifierPrefix;
    if (on) {
      var l = Pi, o = ar;
      l = (o & ~(1 << 32 - kr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Ea++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = fu++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, ny = {
    readContext: On,
    useCallback: fo,
    useContext: On,
    useEffect: ys,
    useImperativeHandle: co,
    useInsertionEffect: zc,
    useLayoutEffect: Uc,
    useMemo: Ll,
    useReducer: hs,
    useRef: Lc,
    useState: function() {
      return hs(vu);
    },
    useDebugValue: Ac,
    useDeferredValue: function(n) {
      var r = ra();
      return aa(r, V.memoizedState, n);
    },
    useTransition: function() {
      var n = hs(vu)[0], r = ra().memoizedState;
      return [n, r];
    },
    useMutableSource: wc,
    useSyncExternalStore: bc,
    useId: en,
    unstable_isNewReconciler: !1
  }, Td = { readContext: On, useCallback: fo, useContext: On, useEffect: ys, useImperativeHandle: co, useInsertionEffect: zc, useLayoutEffect: Uc, useMemo: Ll, useReducer: ms, useRef: Lc, useState: function() {
    return ms(vu);
  }, useDebugValue: Ac, useDeferredValue: function(n) {
    var r = ra();
    return V === null ? r.memoizedState = n : aa(r, V.memoizedState, n);
  }, useTransition: function() {
    var n = ms(vu)[0], r = ra().memoizedState;
    return [n, r];
  }, useMutableSource: wc, useSyncExternalStore: bc, useId: en, unstable_isNewReconciler: !1 };
  function vo(n, r) {
    try {
      var l = "", o = r;
      do
        l += Ct(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Ss(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Vc(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var ry = typeof WeakMap == "function" ? WeakMap : Map;
  function Hv(n, r, l) {
    l = Bi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Gc || (Gc = !0, Cu = o), Vc(n, r);
    }, l;
  }
  function Es(n, r, l) {
    l = Bi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Vc(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Vc(n, r), typeof o != "function" && (xi === null ? xi = /* @__PURE__ */ new Set([this]) : xi.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Pv(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new ry();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = cy.bind(null, n, r, l), r.then(n, n));
  }
  function wd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function bd(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Bi(-1, 1), r.tag = 2, kl(l, r, 1))), l.lanes |= 1), n);
  }
  var ay = ct.ReactCurrentOwner, zn = !1;
  function Vn(n, r, l, o) {
    r.child = n === null ? Av(r, null, l, o) : oo(r, n.child, l, o);
  }
  function jl(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return ae(r, c), o = Ml(n, r, l, o, d, c), l = pu(), n !== null && !zn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, lr(n, r, c)) : (on && l && pc(r), r.flags |= 1, Vn(n, r, o, c), r.child);
  }
  function Bc(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Yd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, ia(n, r, d, o, c)) : (n = ef(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ts, l(m, o) && n.ref === r.ref)
        return lr(n, r, c);
    }
    return r.flags |= 1, n = Fl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function ia(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (ts(d, o) && n.ref === r.ref)
        if (zn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (zn = !0);
        else
          return r.lanes = n.lanes, lr(n, r, c);
    }
    return ho(n, r, l, o, c);
  }
  function yu(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, It(Co, Ca), Ca |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, It(Co, Ca), Ca |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, It(Co, Ca), Ca |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, It(Co, Ca), Ca |= o;
    return Vn(n, r, c, l), r.child;
  }
  function rt(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function ho(n, r, l, o, c) {
    var d = dn(l) ? Jr : Ie.current;
    return d = Ma(r, d), ae(r, c), l = Ml(n, r, l, o, d, c), o = pu(), n !== null && !zn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, lr(n, r, c)) : (on && o && pc(r), r.flags |= 1, Vn(n, r, l, c), r.child);
  }
  function _d(n, r, l, o, c) {
    if (dn(l)) {
      var d = !0;
      dc(r);
    } else
      d = !1;
    if (ae(r, c), r.stateNode === null)
      Er(n, r), Lv(r, l, o), Cc(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var w = m.context, A = l.contextType;
      typeof A == "object" && A !== null ? A = On(A) : (A = dn(l) ? Jr : Ie.current, A = Ma(r, A));
      var G = l.getDerivedStateFromProps, q = typeof G == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      q || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || w !== A) && jv(r, m, o, A), Dl = !1;
      var W = r.memoizedState;
      m.state = W, Ol(r, o, m, c), w = r.memoizedState, E !== o || W !== w || wn.current || Dl ? (typeof G == "function" && (Ed(r, l, G, o), w = r.memoizedState), (E = Dl || Mv(r, l, E, o, W, w, A)) ? (q || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = w), m.props = o, m.state = w, m.context = A, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Pn(n, r), E = r.memoizedProps, A = r.type === r.elementType ? E : Sa(r.type, E), m.props = A, q = r.pendingProps, W = m.context, w = l.contextType, typeof w == "object" && w !== null ? w = On(w) : (w = dn(l) ? Jr : Ie.current, w = Ma(r, w));
      var pe = l.getDerivedStateFromProps;
      (G = typeof pe == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== q || W !== w) && jv(r, m, o, w), Dl = !1, W = r.memoizedState, m.state = W, Ol(r, o, m, c);
      var Ce = r.memoizedState;
      E !== q || W !== Ce || wn.current || Dl ? (typeof pe == "function" && (Ed(r, l, pe, o), Ce = r.memoizedState), (A = Dl || Mv(r, l, A, o, W, Ce, w) || !1) ? (G || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, Ce, w), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, Ce, w)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Ce), m.props = o, m.state = Ce, m.context = w, o = A) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Vv(n, r, l, o, d, c);
  }
  function Vv(n, r, l, o, c, d) {
    rt(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m)
      return c && bv(r, l, !1), lr(n, r, d);
    o = r.stateNode, ay.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = oo(r, n.child, null, d), r.child = oo(r, null, E, d)) : Vn(n, r, E, d), r.memoizedState = o.state, c && bv(r, l, !0), r.child;
  }
  function Bv(n) {
    var r = n.stateNode;
    r.pendingContext ? Tl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Tl(n, r.context, !1), Cd(n, r.containerInfo);
  }
  function $c(n, r, l, o, c) {
    return En(), vd(c), r.flags |= 256, Vn(n, r, l, o), r.child;
  }
  var gu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Dd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function kd(n, r, l) {
    var o = r.pendingProps, c = He.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), It(He, c & 1), n === null)
      return hc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Os(m, o, 0, null), n = bu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Dd(l), r.memoizedState = gu, n) : Od(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null))
      return iy(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var w = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = w, r.deletions = null) : (o = Fl(c, w), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Fl(E, d) : (d = bu(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Dd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = gu, o;
    }
    return d = n.child, n = d.sibling, o = Fl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Od(n, r) {
    return r = Os({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function mo(n, r, l, o) {
    return o !== null && vd(o), oo(r, n.child, null, l), n = Od(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function iy(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Ss(Error(M(422))), mo(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Os({ mode: "visible", children: o.children }, c, 0, null), d = bu(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && oo(r, n.child, null, m), r.child.memoizedState = Dd(m), r.memoizedState = gu, d);
    if (!(r.mode & 1))
      return mo(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var E = o.dgst;
      return o = E, d = Error(M(419)), o = Ss(d, o, void 0), mo(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, zn || E) {
      if (o = xn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Vi(n, c), Tr(o, n, c, -1));
      }
      return Bd(), o = Ss(Error(M(421))), mo(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = fy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, na = ni(c.nextSibling), ga = r, on = !0, za = null, n !== null && (ta[Sr++] = ar, ta[Sr++] = Pi, ta[Sr++] = ja, ar = n.id, Pi = n.overflow, ja = r), r = Od(r, o.children), r.flags |= 4096, r);
  }
  function Nd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Xn(n.return, r, l);
  }
  function Ic(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Md(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Vn(n, r, o.children, l), o = He.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Nd(n, l, r);
            else if (n.tag === 19)
              Nd(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      o &= 1;
    }
    if (It(He, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && Cn(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Ic(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && Cn(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          Ic(r, !0, l, null, d);
          break;
        case "together":
          Ic(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Er(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function lr(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Qi |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(M(153));
    if (r.child !== null) {
      for (n = r.child, l = Fl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Fl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Ii(n, r, l) {
    switch (r.tag) {
      case 3:
        Bv(r), En();
        break;
      case 5:
        Ae(r);
        break;
      case 1:
        dn(r.type) && dc(r);
        break;
      case 4:
        Cd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        It(gi, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (It(He, He.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? kd(n, r, l) : (It(He, He.current & 1), n = lr(n, r, l), n !== null ? n.sibling : null);
        It(He, He.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return Md(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), It(He, He.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, yu(n, r, l);
    }
    return lr(n, r, l);
  }
  var Cs, Su, Fa, Bn;
  Cs = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, Su = function() {
  }, Fa = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, su(ri.current);
      var d = null;
      switch (l) {
        case "input":
          c = Qn(n, c), o = Qn(n, o), d = [];
          break;
        case "select":
          c = T({}, c, { value: void 0 }), o = T({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Qr(n, c), o = Qr(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = fc);
      }
      kn(l, o);
      var m;
      l = null;
      for (A in c)
        if (!o.hasOwnProperty(A) && c.hasOwnProperty(A) && c[A] != null)
          if (A === "style") {
            var E = c[A];
            for (m in E)
              E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
          } else
            A !== "dangerouslySetInnerHTML" && A !== "children" && A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && A !== "autoFocus" && (et.hasOwnProperty(A) ? d || (d = []) : (d = d || []).push(A, null));
      for (A in o) {
        var w = o[A];
        if (E = c != null ? c[A] : void 0, o.hasOwnProperty(A) && w !== E && (w != null || E != null))
          if (A === "style")
            if (E) {
              for (m in E)
                !E.hasOwnProperty(m) || w && w.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
              for (m in w)
                w.hasOwnProperty(m) && E[m] !== w[m] && (l || (l = {}), l[m] = w[m]);
            } else
              l || (d || (d = []), d.push(
                A,
                l
              )), l = w;
          else
            A === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, E = E ? E.__html : void 0, w != null && E !== w && (d = d || []).push(A, w)) : A === "children" ? typeof w != "string" && typeof w != "number" || (d = d || []).push(A, "" + w) : A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && (et.hasOwnProperty(A) ? (w != null && A === "onScroll" && Zt("scroll", n), d || E === w || (d = [])) : (d = d || []).push(A, w));
      }
      l && (d = d || []).push("style", l);
      var A = d;
      (r.updateQueue = A) && (r.flags |= 4);
    }
  }, Bn = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function xs(n, r) {
    if (!on)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), l = l.sibling;
          o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function Cr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function ly(n, r, l) {
    var o = r.pendingProps;
    switch (dd(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Cr(r), null;
      case 1:
        return dn(r.type) && La(), Cr(r), null;
      case 3:
        return o = r.stateNode, Nl(), Ft(wn), Ft(Ie), Rc(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (mc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, za !== null && (ks(za), za = null))), Su(n, r), Cr(r), null;
      case 5:
        vt(r);
        var c = su(so.current);
        if (l = r.type, n !== null && r.stateNode != null)
          Fa(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(M(166));
            return Cr(r), null;
          }
          if (n = su(ri.current), mc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[mi] = r, o[lu] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Zt("cancel", o), Zt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Zt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < is.length; c++)
                  Zt(is[c], o);
                break;
              case "source":
                Zt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Zt(
                  "error",
                  o
                ), Zt("load", o);
                break;
              case "details":
                Zt("toggle", o);
                break;
              case "input":
                Fn(o, d), Zt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Zt("invalid", o);
                break;
              case "textarea":
                yr(o, d), Zt("invalid", o);
            }
            kn(l, d), c = null;
            for (var m in d)
              if (d.hasOwnProperty(m)) {
                var E = d[m];
                m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && cc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && cc(
                  o.textContent,
                  E,
                  n
                ), c = ["children", "" + E]) : et.hasOwnProperty(m) && E != null && m === "onScroll" && Zt("scroll", o);
              }
            switch (l) {
              case "input":
                hr(o), Ir(o, d, !0);
                break;
              case "textarea":
                hr(o), nr(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = fc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Wr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[mi] = r, n[lu] = o, Cs(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = gn(l, o), l) {
                case "dialog":
                  Zt("cancel", n), Zt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Zt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < is.length; c++)
                    Zt(is[c], n);
                  c = o;
                  break;
                case "source":
                  Zt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Zt(
                    "error",
                    n
                  ), Zt("load", n), c = o;
                  break;
                case "details":
                  Zt("toggle", n), c = o;
                  break;
                case "input":
                  Fn(n, o), c = Qn(n, o), Zt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = T({}, o, { value: void 0 }), Zt("invalid", n);
                  break;
                case "textarea":
                  yr(n, o), c = Qr(n, o), Zt("invalid", n);
                  break;
                default:
                  c = o;
              }
              kn(l, c), E = c;
              for (d in E)
                if (E.hasOwnProperty(d)) {
                  var w = E[d];
                  d === "style" ? At(n, w) : d === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, w != null && oi(n, w)) : d === "children" ? typeof w == "string" ? (l !== "textarea" || w !== "") && da(n, w) : typeof w == "number" && da(n, "" + w) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (et.hasOwnProperty(d) ? w != null && d === "onScroll" && Zt("scroll", n) : w != null && Qe(n, d, w, m));
                }
              switch (l) {
                case "input":
                  hr(n), Ir(n, o, !1);
                  break;
                case "textarea":
                  hr(n), nr(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + ut(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? mr(n, !!o.multiple, d, !1) : o.defaultValue != null && mr(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = fc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Cr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Bn(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(M(166));
          if (l = su(so.current), su(ri.current), mc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[mi] = r, (d = o.nodeValue !== l) && (n = ga, n !== null))
              switch (n.tag) {
                case 3:
                  cc(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && cc(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[mi] = r, r.stateNode = o;
        }
        return Cr(r), null;
      case 13:
        if (Ft(He), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (on && na !== null && r.mode & 1 && !(r.flags & 128))
            kv(), En(), r.flags |= 98560, d = !1;
          else if (d = mc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(M(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(M(317));
              d[mi] = r;
            } else
              En(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Cr(r), d = !1;
          } else
            za !== null && (ks(za), za = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || He.current & 1 ? In === 0 && (In = 3) : Bd())), r.updateQueue !== null && (r.flags |= 4), Cr(r), null);
      case 4:
        return Nl(), Su(n, r), n === null && ao(r.stateNode.containerInfo), Cr(r), null;
      case 10:
        return _l(r.type._context), Cr(r), null;
      case 17:
        return dn(r.type) && La(), Cr(r), null;
      case 19:
        if (Ft(He), d = r.memoizedState, d === null)
          return Cr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null)
          if (o)
            xs(d, !1);
          else {
            if (In !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (m = Cn(n), m !== null) {
                  for (r.flags |= 128, xs(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return It(He, He.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && Dt() > Ro && (r.flags |= 128, o = !0, xs(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = Cn(m), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), xs(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !on)
                return Cr(r), null;
            } else
              2 * Dt() - d.renderingStartTime > Ro && l !== 1073741824 && (r.flags |= 128, o = !0, xs(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Dt(), r.sibling = null, l = He.current, It(He, o ? l & 1 | 2 : l & 1), r) : (Cr(r), null);
      case 22:
      case 23:
        return Vd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Ca & 1073741824 && (Cr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Cr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(M(156, r.tag));
  }
  function Ld(n, r) {
    switch (dd(r), r.tag) {
      case 1:
        return dn(r.type) && La(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Nl(), Ft(wn), Ft(Ie), Rc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return vt(r), null;
      case 13:
        if (Ft(He), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(M(340));
          En();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Ft(He), null;
      case 4:
        return Nl(), null;
      case 10:
        return _l(r.type._context), null;
      case 22:
      case 23:
        return Vd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Rs = !1, $n = !1, $v = typeof WeakSet == "function" ? WeakSet : Set, Ee = null;
  function yo(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          _n(n, r, o);
        }
      else
        l.current = null;
  }
  function Ts(n, r, l) {
    try {
      l();
    } catch (o) {
      _n(n, r, o);
    }
  }
  var Iv = !1;
  function Yv(n, r) {
    if (ad = ka, n = ic(), Ui(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var c = o.anchorOffset, d = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, d.nodeType;
            } catch {
              l = null;
              break e;
            }
            var m = 0, E = -1, w = -1, A = 0, G = 0, q = n, W = null;
            t:
              for (; ; ) {
                for (var pe; q !== l || c !== 0 && q.nodeType !== 3 || (E = m + c), q !== d || o !== 0 && q.nodeType !== 3 || (w = m + o), q.nodeType === 3 && (m += q.nodeValue.length), (pe = q.firstChild) !== null; )
                  W = q, q = pe;
                for (; ; ) {
                  if (q === n)
                    break t;
                  if (W === l && ++A === c && (E = m), W === d && ++G === o && (w = m), (pe = q.nextSibling) !== null)
                    break;
                  q = W, W = q.parentNode;
                }
                q = pe;
              }
            l = E === -1 || w === -1 ? null : { start: E, end: w };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (au = { focusedElem: n, selectionRange: l }, ka = !1, Ee = r; Ee !== null; )
      if (r = Ee, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Ee = n;
      else
        for (; Ee !== null; ) {
          r = Ee;
          try {
            var Ce = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Ce !== null) {
                    var we = Ce.memoizedProps, Nn = Ce.memoizedState, k = r.stateNode, _ = k.getSnapshotBeforeUpdate(r.elementType === r.type ? we : Sa(r.type, we), Nn);
                    k.__reactInternalSnapshotBeforeUpdate = _;
                  }
                  break;
                case 3:
                  var L = r.stateNode.containerInfo;
                  L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(M(163));
              }
          } catch (ee) {
            _n(r, r.return, ee);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Ee = n;
            break;
          }
          Ee = r.return;
        }
    return Ce = Iv, Iv = !1, Ce;
  }
  function ws(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Ts(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function bs(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function jd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function zd(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, zd(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[mi], delete r[lu], delete r[ud], delete r[Zm], delete r[od])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Qv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Yc(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Qv(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function go(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = fc));
    else if (o !== 4 && (n = n.child, n !== null))
      for (go(n, r, l), n = n.sibling; n !== null; )
        go(n, r, l), n = n.sibling;
  }
  function Ei(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (Ei(n, r, l), n = n.sibling; n !== null; )
        Ei(n, r, l), n = n.sibling;
  }
  var pn = null, Jn = !1;
  function Ha(n, r, l) {
    for (l = l.child; l !== null; )
      So(n, r, l), l = l.sibling;
  }
  function So(n, r, l) {
    if (Gr && typeof Gr.onCommitFiberUnmount == "function")
      try {
        Gr.onCommitFiberUnmount(sl, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        $n || yo(l, r);
      case 6:
        var o = pn, c = Jn;
        pn = null, Ha(n, r, l), pn = o, Jn = c, pn !== null && (Jn ? (n = pn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : pn.removeChild(l.stateNode));
        break;
      case 18:
        pn !== null && (Jn ? (n = pn, l = l.stateNode, n.nodeType === 8 ? Cl(n.parentNode, l) : n.nodeType === 1 && Cl(n, l), ml(n)) : Cl(pn, l.stateNode));
        break;
      case 4:
        o = pn, c = Jn, pn = l.stateNode.containerInfo, Jn = !0, Ha(n, r, l), pn = o, Jn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!$n && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Ts(l, r, m), c = c.next;
          } while (c !== o);
        }
        Ha(n, r, l);
        break;
      case 1:
        if (!$n && (yo(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (E) {
            _n(l, r, E);
          }
        Ha(n, r, l);
        break;
      case 21:
        Ha(n, r, l);
        break;
      case 22:
        l.mode & 1 ? ($n = (o = $n) || l.memoizedState !== null, Ha(n, r, l), $n = o) : Ha(n, r, l);
        break;
      default:
        Ha(n, r, l);
    }
  }
  function Yi(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new $v()), r.forEach(function(o) {
        var c = dy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ai(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var c = l[o];
        try {
          var d = n, m = r, E = m;
          e:
            for (; E !== null; ) {
              switch (E.tag) {
                case 5:
                  pn = E.stateNode, Jn = !1;
                  break e;
                case 3:
                  pn = E.stateNode.containerInfo, Jn = !0;
                  break e;
                case 4:
                  pn = E.stateNode.containerInfo, Jn = !0;
                  break e;
              }
              E = E.return;
            }
          if (pn === null)
            throw Error(M(160));
          So(d, m, c), pn = null, Jn = !1;
          var w = c.alternate;
          w !== null && (w.return = null), c.return = null;
        } catch (A) {
          _n(c, r, A);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Wv(r, n), r = r.sibling;
  }
  function Wv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ai(r, n), Ci(n), o & 4) {
          try {
            ws(3, n, n.return), bs(3, n);
          } catch (we) {
            _n(n, n.return, we);
          }
          try {
            ws(5, n, n.return);
          } catch (we) {
            _n(n, n.return, we);
          }
        }
        break;
      case 1:
        ai(r, n), Ci(n), o & 512 && l !== null && yo(l, l.return);
        break;
      case 5:
        if (ai(r, n), Ci(n), o & 512 && l !== null && yo(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            da(c, "");
          } catch (we) {
            _n(n, n.return, we);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, w = n.updateQueue;
          if (n.updateQueue = null, w !== null)
            try {
              E === "input" && d.type === "radio" && d.name != null && Hn(c, d), gn(E, m);
              var A = gn(E, d);
              for (m = 0; m < w.length; m += 2) {
                var G = w[m], q = w[m + 1];
                G === "style" ? At(c, q) : G === "dangerouslySetInnerHTML" ? oi(c, q) : G === "children" ? da(c, q) : Qe(c, G, q, A);
              }
              switch (E) {
                case "input":
                  Dn(c, d);
                  break;
                case "textarea":
                  fa(c, d);
                  break;
                case "select":
                  var W = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var pe = d.value;
                  pe != null ? mr(c, !!d.multiple, pe, !1) : W !== !!d.multiple && (d.defaultValue != null ? mr(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : mr(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[lu] = d;
            } catch (we) {
              _n(n, n.return, we);
            }
        }
        break;
      case 6:
        if (ai(r, n), Ci(n), o & 4) {
          if (n.stateNode === null)
            throw Error(M(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (we) {
            _n(n, n.return, we);
          }
        }
        break;
      case 3:
        if (ai(r, n), Ci(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            ml(r.containerInfo);
          } catch (we) {
            _n(n, n.return, we);
          }
        break;
      case 4:
        ai(r, n), Ci(n);
        break;
      case 13:
        ai(r, n), Ci(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Fd = Dt())), o & 4 && Yi(n);
        break;
      case 22:
        if (G = l !== null && l.memoizedState !== null, n.mode & 1 ? ($n = (A = $n) || G, ai(r, n), $n = A) : ai(r, n), Ci(n), o & 8192) {
          if (A = n.memoizedState !== null, (n.stateNode.isHidden = A) && !G && n.mode & 1)
            for (Ee = n, G = n.child; G !== null; ) {
              for (q = Ee = G; Ee !== null; ) {
                switch (W = Ee, pe = W.child, W.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ws(4, W, W.return);
                    break;
                  case 1:
                    yo(W, W.return);
                    var Ce = W.stateNode;
                    if (typeof Ce.componentWillUnmount == "function") {
                      o = W, l = W.return;
                      try {
                        r = o, Ce.props = r.memoizedProps, Ce.state = r.memoizedState, Ce.componentWillUnmount();
                      } catch (we) {
                        _n(o, l, we);
                      }
                    }
                    break;
                  case 5:
                    yo(W, W.return);
                    break;
                  case 22:
                    if (W.memoizedState !== null) {
                      Ud(q);
                      continue;
                    }
                }
                pe !== null ? (pe.return = W, Ee = pe) : Ud(q);
              }
              G = G.sibling;
            }
          e:
            for (G = null, q = n; ; ) {
              if (q.tag === 5) {
                if (G === null) {
                  G = q;
                  try {
                    c = q.stateNode, A ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = q.stateNode, w = q.memoizedProps.style, m = w != null && w.hasOwnProperty("display") ? w.display : null, E.style.display = ot("display", m));
                  } catch (we) {
                    _n(n, n.return, we);
                  }
                }
              } else if (q.tag === 6) {
                if (G === null)
                  try {
                    q.stateNode.nodeValue = A ? "" : q.memoizedProps;
                  } catch (we) {
                    _n(n, n.return, we);
                  }
              } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === n) && q.child !== null) {
                q.child.return = q, q = q.child;
                continue;
              }
              if (q === n)
                break e;
              for (; q.sibling === null; ) {
                if (q.return === null || q.return === n)
                  break e;
                G === q && (G = null), q = q.return;
              }
              G === q && (G = null), q.sibling.return = q.return, q = q.sibling;
            }
        }
        break;
      case 19:
        ai(r, n), Ci(n), o & 4 && Yi(n);
        break;
      case 21:
        break;
      default:
        ai(
          r,
          n
        ), Ci(n);
    }
  }
  function Ci(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Qv(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(M(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (da(c, ""), o.flags &= -33);
            var d = Yc(n);
            Ei(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Yc(n);
            go(n, E, m);
            break;
          default:
            throw Error(M(161));
        }
      } catch (w) {
        _n(n, n.return, w);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Gv(n, r, l) {
    Ee = n, Eo(n);
  }
  function Eo(n, r, l) {
    for (var o = (n.mode & 1) !== 0; Ee !== null; ) {
      var c = Ee, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Rs;
        if (!m) {
          var E = c.alternate, w = E !== null && E.memoizedState !== null || $n;
          E = Rs;
          var A = $n;
          if (Rs = m, ($n = w) && !A)
            for (Ee = c; Ee !== null; )
              m = Ee, w = m.child, m.tag === 22 && m.memoizedState !== null ? qv(c) : w !== null ? (w.return = m, Ee = w) : qv(c);
          for (; d !== null; )
            Ee = d, Eo(d), d = d.sibling;
          Ee = c, Rs = E, $n = A;
        }
        Kv(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, Ee = d) : Kv(n);
    }
  }
  function Kv(n) {
    for (; Ee !== null; ) {
      var r = Ee;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                $n || bs(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !$n)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : Sa(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && ou(r, d, o);
                break;
              case 3:
                var m = r.updateQueue;
                if (m !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  ou(r, m, l);
                }
                break;
              case 5:
                var E = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = E;
                  var w = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      w.autoFocus && l.focus();
                      break;
                    case "img":
                      w.src && (l.src = w.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var A = r.alternate;
                  if (A !== null) {
                    var G = A.memoizedState;
                    if (G !== null) {
                      var q = G.dehydrated;
                      q !== null && ml(q);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(M(163));
            }
          $n || r.flags & 512 && jd(r);
        } catch (W) {
          _n(r, r.return, W);
        }
      }
      if (r === n) {
        Ee = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Ee = l;
        break;
      }
      Ee = r.return;
    }
  }
  function Ud(n) {
    for (; Ee !== null; ) {
      var r = Ee;
      if (r === n) {
        Ee = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Ee = l;
        break;
      }
      Ee = r.return;
    }
  }
  function qv(n) {
    for (; Ee !== null; ) {
      var r = Ee;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              bs(4, r);
            } catch (w) {
              _n(r, l, w);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (w) {
                _n(r, c, w);
              }
            }
            var d = r.return;
            try {
              jd(r);
            } catch (w) {
              _n(r, d, w);
            }
            break;
          case 5:
            var m = r.return;
            try {
              jd(r);
            } catch (w) {
              _n(r, m, w);
            }
        }
      } catch (w) {
        _n(r, r.return, w);
      }
      if (r === n) {
        Ee = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, Ee = E;
        break;
      }
      Ee = r.return;
    }
  }
  var Qc = Math.ceil, _s = ct.ReactCurrentDispatcher, Ad = ct.ReactCurrentOwner, xr = ct.ReactCurrentBatchConfig, mt = 0, xn = null, bn = null, Zn = 0, Ca = 0, Co = nt(0), In = 0, Ds = null, Qi = 0, Wc = 0, xo = 0, Eu = null, Mr = null, Fd = 0, Ro = 1 / 0, Wi = null, Gc = !1, Cu = null, xi = null, zl = !1, Ul = null, Kc = 0, To = 0, qc = null, xu = -1, Ru = 0;
  function Rr() {
    return mt & 6 ? Dt() : xu !== -1 ? xu : xu = Dt();
  }
  function Un(n) {
    return n.mode & 1 ? mt & 2 && Zn !== 0 ? Zn & -Zn : yc.transition !== null ? (Ru === 0 && (Ru = Iu()), Ru) : (n = Lt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : qo(n.type)), n) : 1;
  }
  function Tr(n, r, l, o) {
    if (50 < To)
      throw To = 0, qc = null, Error(M(185));
    Ni(n, l, o), (!(mt & 2) || n !== xn) && (n === xn && (!(mt & 2) && (Wc |= l), In === 4 && Pa(n, Zn)), wr(n, o), l === 1 && mt === 0 && !(r.mode & 1) && (Ro = Dt() + 500, qn && Zr()));
  }
  function wr(n, r) {
    var l = n.callbackNode;
    dl(n, r);
    var o = Or(n, n === xn ? Zn : 0);
    if (o === 0)
      l !== null && rr(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && rr(l), r === 1)
        n.tag === 0 ? cd(Xv.bind(null, n)) : sd(Xv.bind(null, n)), ld(function() {
          !(mt & 6) && Zr();
        }), l = null;
      else {
        switch (Qu(o)) {
          case 1:
            l = qa;
            break;
          case 4:
            l = dt;
            break;
          case 16:
            l = pi;
            break;
          case 536870912:
            l = Bu;
            break;
          default:
            l = pi;
        }
        l = Id(l, wo.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function wo(n, r) {
    if (xu = -1, Ru = 0, mt & 6)
      throw Error(M(327));
    var l = n.callbackNode;
    if (_o() && n.callbackNode !== l)
      return null;
    var o = Or(n, n === xn ? Zn : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = Jc(n, o);
    else {
      r = o;
      var c = mt;
      mt |= 2;
      var d = Xc();
      (xn !== n || Zn !== r) && (Wi = null, Ro = Dt() + 500, Tu(n, r));
      do
        try {
          oy();
          break;
        } catch (E) {
          Jv(n, E);
        }
      while (1);
      md(), _s.current = d, mt = c, bn !== null ? r = 0 : (xn = null, Zn = 0, r = In);
    }
    if (r !== 0) {
      if (r === 2 && (c = pl(n), c !== 0 && (o = c, r = Hd(n, c))), r === 1)
        throw l = Ds, Tu(n, 0), Pa(n, o), wr(n, Dt()), l;
      if (r === 6)
        Pa(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Pd(c) && (r = Jc(n, o), r === 2 && (d = pl(n), d !== 0 && (o = d, r = Hd(n, d))), r === 1))
          throw l = Ds, Tu(n, 0), Pa(n, o), wr(n, Dt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(M(345));
          case 2:
            wu(n, Mr, Wi);
            break;
          case 3:
            if (Pa(n, o), (o & 130023424) === o && (r = Fd + 500 - Dt(), 10 < r)) {
              if (Or(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Rr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = iu(wu.bind(null, n, Mr, Wi), r);
              break;
            }
            wu(n, Mr, Wi);
            break;
          case 4:
            if (Pa(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - kr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Dt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Qc(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = iu(wu.bind(null, n, Mr, Wi), o);
              break;
            }
            wu(n, Mr, Wi);
            break;
          case 5:
            wu(n, Mr, Wi);
            break;
          default:
            throw Error(M(329));
        }
      }
    }
    return wr(n, Dt()), n.callbackNode === l ? wo.bind(null, n) : null;
  }
  function Hd(n, r) {
    var l = Eu;
    return n.current.memoizedState.isDehydrated && (Tu(n, r).flags |= 256), n = Jc(n, r), n !== 2 && (r = Mr, Mr = l, r !== null && ks(r)), n;
  }
  function ks(n) {
    Mr === null ? Mr = n : Mr.push.apply(Mr, n);
  }
  function Pd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!Oa(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Pa(n, r) {
    for (r &= ~xo, r &= ~Wc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - kr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Xv(n) {
    if (mt & 6)
      throw Error(M(327));
    _o();
    var r = Or(n, 0);
    if (!(r & 1))
      return wr(n, Dt()), null;
    var l = Jc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = pl(n);
      o !== 0 && (r = o, l = Hd(n, o));
    }
    if (l === 1)
      throw l = Ds, Tu(n, 0), Pa(n, r), wr(n, Dt()), l;
    if (l === 6)
      throw Error(M(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, wu(n, Mr, Wi), wr(n, Dt()), null;
  }
  function bo(n, r) {
    var l = mt;
    mt |= 1;
    try {
      return n(r);
    } finally {
      mt = l, mt === 0 && (Ro = Dt() + 500, qn && Zr());
    }
  }
  function Al(n) {
    Ul !== null && Ul.tag === 0 && !(mt & 6) && _o();
    var r = mt;
    mt |= 1;
    var l = xr.transition, o = Lt;
    try {
      if (xr.transition = null, Lt = 1, n)
        return n();
    } finally {
      Lt = o, xr.transition = l, mt = r, !(mt & 6) && Zr();
    }
  }
  function Vd() {
    Ca = Co.current, Ft(Co);
  }
  function Tu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, wv(l)), bn !== null)
      for (l = bn.return; l !== null; ) {
        var o = l;
        switch (dd(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && La();
            break;
          case 3:
            Nl(), Ft(wn), Ft(Ie), Rc();
            break;
          case 5:
            vt(o);
            break;
          case 4:
            Nl();
            break;
          case 13:
            Ft(He);
            break;
          case 19:
            Ft(He);
            break;
          case 10:
            _l(o.type._context);
            break;
          case 22:
          case 23:
            Vd();
        }
        l = l.return;
      }
    if (xn = n, bn = n = Fl(n.current, null), Zn = Ca = r, In = 0, Ds = null, xo = Wc = Qi = 0, Mr = Eu = null, ir !== null) {
      for (r = 0; r < ir.length; r++)
        if (l = ir[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var m = d.next;
            d.next = c, o.next = m;
          }
          l.pending = o;
        }
      ir = null;
    }
    return n;
  }
  function Jv(n, r) {
    do {
      var l = bn;
      try {
        if (md(), Tc.current = Pc, Be) {
          for (var o = sn.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Be = !1;
        }
        if (cu = 0, Rt = V = sn = null, Si = !1, Ea = 0, Ad.current = null, l === null || l.return === null) {
          In = 1, Ds = r, bn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, w = r;
          if (r = Zn, E.flags |= 32768, w !== null && typeof w == "object" && typeof w.then == "function") {
            var A = w, G = E, q = G.tag;
            if (!(G.mode & 1) && (q === 0 || q === 11 || q === 15)) {
              var W = G.alternate;
              W ? (G.updateQueue = W.updateQueue, G.memoizedState = W.memoizedState, G.lanes = W.lanes) : (G.updateQueue = null, G.memoizedState = null);
            }
            var pe = wd(m);
            if (pe !== null) {
              pe.flags &= -257, bd(pe, m, E, d, r), pe.mode & 1 && Pv(d, A, r), r = pe, w = A;
              var Ce = r.updateQueue;
              if (Ce === null) {
                var we = /* @__PURE__ */ new Set();
                we.add(w), r.updateQueue = we;
              } else
                Ce.add(w);
              break e;
            } else {
              if (!(r & 1)) {
                Pv(d, A, r), Bd();
                break e;
              }
              w = Error(M(426));
            }
          } else if (on && E.mode & 1) {
            var Nn = wd(m);
            if (Nn !== null) {
              !(Nn.flags & 65536) && (Nn.flags |= 256), bd(Nn, m, E, d, r), vd(vo(w, E));
              break e;
            }
          }
          d = w = vo(w, E), In !== 4 && (In = 2), Eu === null ? Eu = [d] : Eu.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var k = Hv(d, w, r);
                Sd(d, k);
                break e;
              case 1:
                E = w;
                var _ = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof _.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (xi === null || !xi.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var ee = Es(d, E, r);
                  Sd(d, ee);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        $d(l);
      } catch (be) {
        r = be, bn === l && l !== null && (bn = l = l.return);
        continue;
      }
      break;
    } while (1);
  }
  function Xc() {
    var n = _s.current;
    return _s.current = Pc, n === null ? Pc : n;
  }
  function Bd() {
    (In === 0 || In === 3 || In === 2) && (In = 4), xn === null || !(Qi & 268435455) && !(Wc & 268435455) || Pa(xn, Zn);
  }
  function Jc(n, r) {
    var l = mt;
    mt |= 2;
    var o = Xc();
    (xn !== n || Zn !== r) && (Wi = null, Tu(n, r));
    do
      try {
        uy();
        break;
      } catch (c) {
        Jv(n, c);
      }
    while (1);
    if (md(), mt = l, _s.current = o, bn !== null)
      throw Error(M(261));
    return xn = null, Zn = 0, In;
  }
  function uy() {
    for (; bn !== null; )
      Zv(bn);
  }
  function oy() {
    for (; bn !== null && !di(); )
      Zv(bn);
  }
  function Zv(n) {
    var r = th(n.alternate, n, Ca);
    n.memoizedProps = n.pendingProps, r === null ? $d(n) : bn = r, Ad.current = null;
  }
  function $d(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Ld(l, r), l !== null) {
          l.flags &= 32767, bn = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          In = 6, bn = null;
          return;
        }
      } else if (l = ly(l, r, Ca), l !== null) {
        bn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        bn = r;
        return;
      }
      bn = r = n;
    } while (r !== null);
    In === 0 && (In = 5);
  }
  function wu(n, r, l) {
    var o = Lt, c = xr.transition;
    try {
      xr.transition = null, Lt = 1, sy(n, r, l, o);
    } finally {
      xr.transition = c, Lt = o;
    }
    return null;
  }
  function sy(n, r, l, o) {
    do
      _o();
    while (Ul !== null);
    if (mt & 6)
      throw Error(M(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(M(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Hf(n, d), n === xn && (bn = xn = null, Zn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || zl || (zl = !0, Id(pi, function() {
      return _o(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = xr.transition, xr.transition = null;
      var m = Lt;
      Lt = 1;
      var E = mt;
      mt |= 4, Ad.current = null, Yv(n, l), Wv(l, n), lc(au), ka = !!ad, au = ad = null, n.current = l, Gv(l), Vu(), mt = E, Lt = m, xr.transition = d;
    } else
      n.current = l;
    if (zl && (zl = !1, Ul = n, Kc = c), d = n.pendingLanes, d === 0 && (xi = null), Wo(l.stateNode), wr(n, Dt()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Gc)
      throw Gc = !1, n = Cu, Cu = null, n;
    return Kc & 1 && n.tag !== 0 && _o(), d = n.pendingLanes, d & 1 ? n === qc ? To++ : (To = 0, qc = n) : To = 0, Zr(), null;
  }
  function _o() {
    if (Ul !== null) {
      var n = Qu(Kc), r = xr.transition, l = Lt;
      try {
        if (xr.transition = null, Lt = 16 > n ? 16 : n, Ul === null)
          var o = !1;
        else {
          if (n = Ul, Ul = null, Kc = 0, mt & 6)
            throw Error(M(331));
          var c = mt;
          for (mt |= 4, Ee = n.current; Ee !== null; ) {
            var d = Ee, m = d.child;
            if (Ee.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var w = 0; w < E.length; w++) {
                  var A = E[w];
                  for (Ee = A; Ee !== null; ) {
                    var G = Ee;
                    switch (G.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ws(8, G, d);
                    }
                    var q = G.child;
                    if (q !== null)
                      q.return = G, Ee = q;
                    else
                      for (; Ee !== null; ) {
                        G = Ee;
                        var W = G.sibling, pe = G.return;
                        if (zd(G), G === A) {
                          Ee = null;
                          break;
                        }
                        if (W !== null) {
                          W.return = pe, Ee = W;
                          break;
                        }
                        Ee = pe;
                      }
                  }
                }
                var Ce = d.alternate;
                if (Ce !== null) {
                  var we = Ce.child;
                  if (we !== null) {
                    Ce.child = null;
                    do {
                      var Nn = we.sibling;
                      we.sibling = null, we = Nn;
                    } while (we !== null);
                  }
                }
                Ee = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null)
              m.return = d, Ee = m;
            else
              e:
                for (; Ee !== null; ) {
                  if (d = Ee, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ws(9, d, d.return);
                    }
                  var k = d.sibling;
                  if (k !== null) {
                    k.return = d.return, Ee = k;
                    break e;
                  }
                  Ee = d.return;
                }
          }
          var _ = n.current;
          for (Ee = _; Ee !== null; ) {
            m = Ee;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null)
              L.return = m, Ee = L;
            else
              e:
                for (m = _; Ee !== null; ) {
                  if (E = Ee, E.flags & 2048)
                    try {
                      switch (E.tag) {
                        case 0:
                        case 11:
                        case 15:
                          bs(9, E);
                      }
                    } catch (be) {
                      _n(E, E.return, be);
                    }
                  if (E === m) {
                    Ee = null;
                    break e;
                  }
                  var ee = E.sibling;
                  if (ee !== null) {
                    ee.return = E.return, Ee = ee;
                    break e;
                  }
                  Ee = E.return;
                }
          }
          if (mt = c, Zr(), Gr && typeof Gr.onPostCommitFiberRoot == "function")
            try {
              Gr.onPostCommitFiberRoot(sl, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        Lt = l, xr.transition = r;
      }
    }
    return !1;
  }
  function eh(n, r, l) {
    r = vo(l, r), r = Hv(n, r, 1), n = kl(n, r, 1), r = Rr(), n !== null && (Ni(n, 1, r), wr(n, r));
  }
  function _n(n, r, l) {
    if (n.tag === 3)
      eh(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          eh(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (xi === null || !xi.has(o))) {
            n = vo(l, n), n = Es(r, n, 1), r = kl(r, n, 1), n = Rr(), r !== null && (Ni(r, 1, n), wr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function cy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Rr(), n.pingedLanes |= n.suspendedLanes & l, xn === n && (Zn & l) === l && (In === 4 || In === 3 && (Zn & 130023424) === Zn && 500 > Dt() - Fd ? Tu(n, 0) : xo |= l), wr(n, r);
  }
  function Zc(n, r) {
    r === 0 && (n.mode & 1 ? (r = cl, cl <<= 1, !(cl & 130023424) && (cl = 4194304)) : r = 1);
    var l = Rr();
    n = Vi(n, r), n !== null && (Ni(n, r, l), wr(n, l));
  }
  function fy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Zc(n, l);
  }
  function dy(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(M(314));
    }
    o !== null && o.delete(r), Zc(n, l);
  }
  var th;
  th = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || wn.current)
        zn = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return zn = !1, Ii(n, r, l);
        zn = !!(n.flags & 131072);
      }
    else
      zn = !1, on && r.flags & 1048576 && fd(r, lo, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Er(n, r), n = r.pendingProps;
        var c = Ma(r, Ie.current);
        ae(r, l), c = Ml(null, r, o, n, c, l);
        var d = pu();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, dn(o) ? (d = !0, dc(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, gd(r), c.updater = Ec, r.stateNode = c, c._reactInternals = r, Cc(r, o, n, l), r = Vv(null, r, o, !0, d, l)) : (r.tag = 0, on && d && pc(r), Vn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Er(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = vy(o), n = Sa(o, n), c) {
            case 0:
              r = ho(null, r, o, n, l);
              break e;
            case 1:
              r = _d(null, r, o, n, l);
              break e;
            case 11:
              r = jl(null, r, o, n, l);
              break e;
            case 14:
              r = Bc(null, r, o, Sa(o.type, n), l);
              break e;
          }
          throw Error(M(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Sa(o, c), ho(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Sa(o, c), _d(n, r, o, c, l);
      case 3:
        e: {
          if (Bv(r), n === null)
            throw Error(M(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Pn(n, r), Ol(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = vo(Error(M(423)), r), r = $c(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = vo(Error(M(424)), r), r = $c(n, r, o, l, c);
              break e;
            } else
              for (na = ni(r.stateNode.containerInfo.firstChild), ga = r, on = !0, za = null, l = Av(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (En(), o === c) {
              r = lr(n, r, l);
              break e;
            }
            Vn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Ae(r), n === null && hc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, os(o, c) ? m = null : d !== null && os(o, d) && (r.flags |= 32), rt(n, r), Vn(n, r, m, l), r.child;
      case 6:
        return n === null && hc(r), null;
      case 13:
        return kd(n, r, l);
      case 4:
        return Cd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = oo(r, null, o, l) : Vn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Sa(o, c), jl(n, r, o, c, l);
      case 7:
        return Vn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Vn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Vn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, It(gi, o._currentValue), o._currentValue = m, d !== null)
            if (Oa(d.value, m)) {
              if (d.children === c.children && !wn.current) {
                r = lr(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var E = d.dependencies;
                if (E !== null) {
                  m = d.child;
                  for (var w = E.firstContext; w !== null; ) {
                    if (w.context === o) {
                      if (d.tag === 1) {
                        w = Bi(-1, l & -l), w.tag = 2;
                        var A = d.updateQueue;
                        if (A !== null) {
                          A = A.shared;
                          var G = A.pending;
                          G === null ? w.next = w : (w.next = G.next, G.next = w), A.pending = w;
                        }
                      }
                      d.lanes |= l, w = d.alternate, w !== null && (w.lanes |= l), Xn(
                        d.return,
                        l,
                        r
                      ), E.lanes |= l;
                      break;
                    }
                    w = w.next;
                  }
                } else if (d.tag === 10)
                  m = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (m = d.return, m === null)
                    throw Error(M(341));
                  m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), Xn(m, l, r), m = d.sibling;
                } else
                  m = d.child;
                if (m !== null)
                  m.return = d;
                else
                  for (m = d; m !== null; ) {
                    if (m === r) {
                      m = null;
                      break;
                    }
                    if (d = m.sibling, d !== null) {
                      d.return = m.return, m = d;
                      break;
                    }
                    m = m.return;
                  }
                d = m;
              }
          Vn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, ae(r, l), c = On(c), o = o(c), r.flags |= 1, Vn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = Sa(o, r.pendingProps), c = Sa(o.type, c), Bc(n, r, o, c, l);
      case 15:
        return ia(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Sa(o, c), Er(n, r), r.tag = 1, dn(o) ? (n = !0, dc(r)) : n = !1, ae(r, l), Lv(r, o, c), Cc(r, o, c, l), Vv(null, r, o, !0, n, l);
      case 19:
        return Md(n, r, l);
      case 22:
        return yu(n, r, l);
    }
    throw Error(M(156, r.tag));
  };
  function Id(n, r) {
    return nn(n, r);
  }
  function py(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Va(n, r, l, o) {
    return new py(n, r, l, o);
  }
  function Yd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function vy(n) {
    if (typeof n == "function")
      return Yd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === ln)
        return 11;
      if (n === Mt)
        return 14;
    }
    return 2;
  }
  function Fl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Va(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function ef(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function")
      Yd(n) && (m = 1);
    else if (typeof n == "string")
      m = 5;
    else
      e:
        switch (n) {
          case Ve:
            return bu(l.children, c, d, r);
          case Gt:
            m = 8, c |= 8;
            break;
          case hn:
            return n = Va(12, l, r, c | 2), n.elementType = hn, n.lanes = d, n;
          case ze:
            return n = Va(13, l, r, c), n.elementType = ze, n.lanes = d, n;
          case Ge:
            return n = Va(19, l, r, c), n.elementType = Ge, n.lanes = d, n;
          case Se:
            return Os(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Ut:
                  m = 10;
                  break e;
                case _t:
                  m = 9;
                  break e;
                case ln:
                  m = 11;
                  break e;
                case Mt:
                  m = 14;
                  break e;
                case St:
                  m = 16, o = null;
                  break e;
              }
            throw Error(M(130, n == null ? n : typeof n, ""));
        }
    return r = Va(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function bu(n, r, l, o) {
    return n = Va(7, n, o, r), n.lanes = l, n;
  }
  function Os(n, r, l, o) {
    return n = Va(22, n, o, r), n.elementType = Se, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Ns(n, r, l) {
    return n = Va(6, n, null, r), n.lanes = l, n;
  }
  function _u(n, r, l) {
    return r = Va(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function hy(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Yu(0), this.expirationTimes = Yu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function tf(n, r, l, o, c, d, m, E, w) {
    return n = new hy(n, r, l, E, w), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Va(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, gd(d), n;
  }
  function nh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: it, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Qd(n) {
    if (!n)
      return yi;
    n = n._reactInternals;
    e: {
      if (Ze(n) !== n || n.tag !== 1)
        throw Error(M(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (dn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(M(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (dn(l))
        return fs(n, l, r);
    }
    return r;
  }
  function rh(n, r, l, o, c, d, m, E, w) {
    return n = tf(l, o, !0, n, c, d, m, E, w), n.context = Qd(null), l = n.current, o = Rr(), c = Un(l), d = Bi(o, c), d.callback = r ?? null, kl(l, d, c), n.current.lanes = c, Ni(n, c, o), wr(n, o), n;
  }
  function Ms(n, r, l, o) {
    var c = r.current, d = Rr(), m = Un(c);
    return l = Qd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Bi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = kl(c, r, m), n !== null && (Tr(n, c, m, d), Sc(n, c, m)), m;
  }
  function nf(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function ah(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Wd(n, r) {
    ah(n, r), (n = n.alternate) && ah(n, r);
  }
  function ih() {
    return null;
  }
  var Gd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function rf(n) {
    this._internalRoot = n;
  }
  Gi.prototype.render = rf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(M(409));
    Ms(n, r, null, null);
  }, Gi.prototype.unmount = rf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Al(function() {
        Ms(null, n, null, null);
      }), r[Hi] = null;
    }
  };
  function Gi(n) {
    this._internalRoot = n;
  }
  Gi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Gu();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < $t.length && r !== 0 && r < $t[l].priority; l++)
        ;
      $t.splice(l, 0, n), l === 0 && Zs(n);
    }
  };
  function Kd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function af(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function lh() {
  }
  function my(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var A = nf(m);
          d.call(A);
        };
      }
      var m = rh(r, o, n, 0, null, !1, !1, "", lh);
      return n._reactRootContainer = m, n[Hi] = m.current, ao(n.nodeType === 8 ? n.parentNode : n), Al(), m;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var A = nf(w);
        E.call(A);
      };
    }
    var w = tf(n, 0, !1, null, null, !1, !1, "", lh);
    return n._reactRootContainer = w, n[Hi] = w.current, ao(n.nodeType === 8 ? n.parentNode : n), Al(function() {
      Ms(r, w, l, o);
    }), w;
  }
  function lf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var w = nf(m);
          E.call(w);
        };
      }
      Ms(r, m, n, c);
    } else
      m = my(l, r, n, c, o);
    return nf(m);
  }
  Xl = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Xa(r.pendingLanes);
          l !== 0 && (vi(r, l | 1), wr(r, Dt()), !(mt & 6) && (Ro = Dt() + 500, Zr()));
        }
        break;
      case 13:
        Al(function() {
          var o = Vi(n, 1);
          if (o !== null) {
            var c = Rr();
            Tr(o, n, 1, c);
          }
        }), Wd(n, 1);
    }
  }, Wu = function(n) {
    if (n.tag === 13) {
      var r = Vi(n, 134217728);
      if (r !== null) {
        var l = Rr();
        Tr(r, n, 134217728, l);
      }
      Wd(n, 134217728);
    }
  }, kt = function(n) {
    if (n.tag === 13) {
      var r = Un(n), l = Vi(n, r);
      if (l !== null) {
        var o = Rr();
        Tr(l, n, r, o);
      }
      Wd(n, r);
    }
  }, Gu = function() {
    return Lt;
  }, Ku = function(n, r) {
    var l = Lt;
    try {
      return Lt = n, r();
    } finally {
      Lt = l;
    }
  }, _r = function(n, r, l) {
    switch (r) {
      case "input":
        if (Dn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Ne(o);
              if (!c)
                throw Error(M(90));
              $r(o), Dn(o, c);
            }
          }
        }
        break;
      case "textarea":
        fa(n, l);
        break;
      case "select":
        r = l.value, r != null && mr(n, !!l.multiple, r, !1);
    }
  }, ql = bo, Pu = Al;
  var yy = { usingClientEntryPoint: !1, Events: [cs, io, Ne, _a, ll, bo] }, Do = { findFiberByHostInstance: Na, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, gy = { bundleType: Do.bundleType, version: Do.version, rendererPackageName: Do.rendererPackageName, rendererConfig: Do.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ct.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Ln(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Do.findFiberByHostInstance || ih, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var uf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!uf.isDisabled && uf.supportsFiber)
      try {
        sl = uf.inject(gy), Gr = uf;
      } catch {
      }
  }
  return Wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yy, Wa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Kd(r))
      throw Error(M(200));
    return nh(n, r, null, l);
  }, Wa.createRoot = function(n, r) {
    if (!Kd(n))
      throw Error(M(299));
    var l = !1, o = "", c = Gd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = tf(n, 1, !1, null, null, l, !1, o, c), n[Hi] = r.current, ao(n.nodeType === 8 ? n.parentNode : n), new rf(r);
  }, Wa.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(M(188)) : (n = Object.keys(n).join(","), Error(M(268, n)));
    return n = Ln(r), n = n === null ? null : n.stateNode, n;
  }, Wa.flushSync = function(n) {
    return Al(n);
  }, Wa.hydrate = function(n, r, l) {
    if (!af(r))
      throw Error(M(200));
    return lf(null, n, r, !0, l);
  }, Wa.hydrateRoot = function(n, r, l) {
    if (!Kd(n))
      throw Error(M(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Gd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = rh(r, null, n, 1, l ?? null, c, !1, d, m), n[Hi] = r.current, ao(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Gi(r);
  }, Wa.render = function(n, r, l) {
    if (!af(r))
      throw Error(M(200));
    return lf(null, n, r, !1, l);
  }, Wa.unmountComponentAtNode = function(n) {
    if (!af(n))
      throw Error(M(40));
    return n._reactRootContainer ? (Al(function() {
      lf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Hi] = null;
      });
    }), !0) : !1;
  }, Wa.unstable_batchedUpdates = bo, Wa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!af(l))
      throw Error(M(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(M(38));
    return lf(n, r, l, !1, o);
  }, Wa.version = "18.2.0-next-9e3b772b8-20220608", Wa;
}
var Ga = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r1;
function aD() {
  return r1 || (r1 = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var I = vn, Y = i1(), M = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Xe = !1;
    function et(e) {
      Xe = e;
    }
    function ge(e) {
      if (!Xe) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ft("warn", e, a);
      }
    }
    function S(e) {
      if (!Xe) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ft("error", e, a);
      }
    }
    function ft(e, t, a) {
      {
        var i = M.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var se = 0, ce = 1, We = 2, te = 3, ue = 4, fe = 5, Pe = 6, gt = 7, st = 8, an = 9, at = 10, Qe = 11, ct = 12, De = 13, it = 14, Ve = 15, Gt = 16, hn = 17, Ut = 18, _t = 19, ln = 21, ze = 22, Ge = 23, Mt = 24, St = 25, Se = !0, Z = !1, K = !1, T = !1, B = !1, le = !0, Te = !1, Me = !1, Ct = !0, lt = !0, ht = !0, ut = /* @__PURE__ */ new Set(), Ht = {}, Br = {};
    function hr(e, t) {
      $r(e, t), $r(e + "Capture", t);
    }
    function $r(e, t) {
      Ht[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ht[e] = t;
      {
        var a = e.toLowerCase();
        Br[a] = e, e === "onDoubleClick" && (Br.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        ut.add(t[i]);
    }
    var mn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Qn = Object.prototype.hasOwnProperty;
    function Fn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Hn(e) {
      try {
        return Dn(e), !1;
      } catch {
        return !0;
      }
    }
    function Dn(e) {
      return "" + e;
    }
    function Ir(e, t) {
      if (Hn(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Fn(e)), Dn(e);
    }
    function Yr(e) {
      if (Hn(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Fn(e)), Dn(e);
    }
    function Wn(e, t) {
      if (Hn(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Fn(e)), Dn(e);
    }
    function mr(e, t) {
      if (Hn(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Fn(e)), Dn(e);
    }
    function Qr(e) {
      if (Hn(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Fn(e)), Dn(e);
    }
    function yr(e) {
      if (Hn(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Fn(e)), Dn(e);
    }
    var fa = 0, nr = 1, Wr = 2, yn = 3, br = 4, oi = 5, da = 6, ne = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ke = ne + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ot = new RegExp("^[" + ne + "][" + ke + "]*$"), At = {}, Pt = {};
    function kn(e) {
      return Qn.call(Pt, e) ? !0 : Qn.call(At, e) ? !1 : ot.test(e) ? (Pt[e] = !0, !0) : (At[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function gn(e, t, a) {
      return t !== null ? t.type === fa : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function gr(e, t, a, i) {
      if (a !== null && a.type === fa)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Qt(e, t, a, i) {
      if (t === null || typeof t > "u" || gr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case yn:
            return !t;
          case br:
            return t === !1;
          case oi:
            return isNaN(t);
          case da:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function _r(e) {
      return Bt.hasOwnProperty(e) ? Bt[e] : null;
    }
    function Vt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Wr || t === yn || t === br, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Bt = {}, Ka = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Ka.forEach(function(e) {
      Bt[e] = new Vt(
        e,
        fa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Bt[t] = new Vt(
        t,
        nr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Bt[e] = new Vt(
        e,
        Wr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Bt[e] = new Vt(
        e,
        Wr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Bt[e] = new Vt(
        e,
        yn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Bt[e] = new Vt(
        e,
        yn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Bt[e] = new Vt(
        e,
        br,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Bt[e] = new Vt(
        e,
        da,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Bt[e] = new Vt(
        e,
        oi,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var _a = /[\-\:]([a-z])/g, ll = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(_a, ll);
      Bt[t] = new Vt(
        t,
        nr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(_a, ll);
      Bt[t] = new Vt(
        t,
        nr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(_a, ll);
      Bt[t] = new Vt(
        t,
        nr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Bt[e] = new Vt(
        e,
        nr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ql = "xlinkHref";
    Bt[ql] = new Vt(
      "xlinkHref",
      nr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Bt[e] = new Vt(
        e,
        nr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Pu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Oi = !1;
    function ul(e) {
      !Oi && Pu.test(e) && (Oi = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function pa(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Ir(a, t), i.sanitizeURL && ul("" + a);
        var s = i.attributeName, f = null;
        if (i.type === br) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Qt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Qt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === yn)
            return a;
          f = e.getAttribute(s);
        }
        return Qt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function si(e, t, a, i) {
      {
        if (!kn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Ir(a, t), u === "" + a ? a : u;
      }
    }
    function va(e, t, a, i) {
      var u = _r(t);
      if (!gn(t, u, i)) {
        if (Qt(t, a, u, i) && (a = null), i || u === null) {
          if (kn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Ir(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === yn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var D = u.type, b;
          D === yn || D === br && a === !0 ? b = "" : (Ir(a, y), b = "" + a, u.sanitizeURL && ul(b.toString())), g ? e.setAttributeNS(g, y, b) : e.setAttribute(y, b);
        }
      }
    }
    var ci = Symbol.for("react.element"), Dr = Symbol.for("react.portal"), ha = Symbol.for("react.fragment"), fi = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), Q = Symbol.for("react.provider"), re = Symbol.for("react.context"), he = Symbol.for("react.forward_ref"), Ze = Symbol.for("react.suspense"), xt = Symbol.for("react.suspense_list"), tt = Symbol.for("react.memo"), Le = Symbol.for("react.lazy"), Ln = Symbol.for("react.scope"), tn = Symbol.for("react.debug_trace_mode"), nn = Symbol.for("react.offscreen"), rr = Symbol.for("react.legacy_hidden"), di = Symbol.for("react.cache"), Vu = Symbol.for("react.tracing_marker"), Dt = Symbol.iterator, Ff = "@@iterator";
    function qa(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Dt && e[Dt] || e[Ff];
      return typeof t == "function" ? t : null;
    }
    var dt = Object.assign, pi = 0, ol, Bu, sl, Gr, Wo, kr, Go;
    function Ko() {
    }
    Ko.__reactDisabledLog = !0;
    function Xs() {
      {
        if (pi === 0) {
          ol = console.log, Bu = console.info, sl = console.warn, Gr = console.error, Wo = console.group, kr = console.groupCollapsed, Go = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ko,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        pi++;
      }
    }
    function $u() {
      {
        if (pi--, pi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: dt({}, e, {
              value: ol
            }),
            info: dt({}, e, {
              value: Bu
            }),
            warn: dt({}, e, {
              value: sl
            }),
            error: dt({}, e, {
              value: Gr
            }),
            group: dt({}, e, {
              value: Wo
            }),
            groupCollapsed: dt({}, e, {
              value: kr
            }),
            groupEnd: dt({}, e, {
              value: Go
            })
          });
        }
        pi < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var cl = M.ReactCurrentDispatcher, Xa;
    function Or(e, t, a) {
      {
        if (Xa === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            Xa = i && i[1] || "";
          }
        return `
` + Xa + e;
      }
    }
    var fl = !1, dl;
    {
      var pl = typeof WeakMap == "function" ? WeakMap : Map;
      dl = new pl();
    }
    function Iu(e, t) {
      if (!e || fl)
        return "";
      {
        var a = dl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      fl = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = cl.current, cl.current = null, Xs();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (U) {
              i = U;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (U) {
              i = U;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (U) {
            i = U;
          }
          e();
        }
      } catch (U) {
        if (U && i && typeof U.stack == "string") {
          for (var p = U.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var D = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && dl.set(e, D), D;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        fl = !1, cl.current = s, $u(), Error.prepareStackTrace = u;
      }
      var b = e ? e.displayName || e.name : "", j = b ? Or(b) : "";
      return typeof e == "function" && dl.set(e, j), j;
    }
    function Yu(e, t, a) {
      return Iu(e, !0);
    }
    function Ni(e, t, a) {
      return Iu(e, !1);
    }
    function Hf(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function vi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Iu(e, Hf(e));
      if (typeof e == "string")
        return Or(e);
      switch (e) {
        case Ze:
          return Or("Suspense");
        case xt:
          return Or("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case he:
            return Ni(e.render);
          case tt:
            return vi(e.type, t, a);
          case Le: {
            var i = e, u = i._payload, s = i._init;
            try {
              return vi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Lt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case fe:
          return Or(e.type);
        case Gt:
          return Or("Lazy");
        case De:
          return Or("Suspense");
        case _t:
          return Or("SuspenseList");
        case se:
        case We:
        case Ve:
          return Ni(e.type);
        case Qe:
          return Ni(e.type.render);
        case ce:
          return Yu(e.type);
        default:
          return "";
      }
    }
    function Qu(e) {
      try {
        var t = "", a = e;
        do
          t += Lt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Xl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Wu(e) {
      return e.displayName || "Context";
    }
    function kt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ha:
          return "Fragment";
        case Dr:
          return "Portal";
        case x:
          return "Profiler";
        case fi:
          return "StrictMode";
        case Ze:
          return "Suspense";
        case xt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case re:
            var t = e;
            return Wu(t) + ".Consumer";
          case Q:
            var a = e;
            return Wu(a._context) + ".Provider";
          case he:
            return Xl(e, e.render, "ForwardRef");
          case tt:
            var i = e.displayName || null;
            return i !== null ? i : kt(e.type) || "Memo";
          case Le: {
            var u = e, s = u._payload, f = u._init;
            try {
              return kt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Gu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Ku(e) {
      return e.displayName || "Context";
    }
    function Ke(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Mt:
          return "Cache";
        case an:
          var i = a;
          return Ku(i) + ".Consumer";
        case at:
          var u = a;
          return Ku(u._context) + ".Provider";
        case Ut:
          return "DehydratedFragment";
        case Qe:
          return Gu(a, a.render, "ForwardRef");
        case gt:
          return "Fragment";
        case fe:
          return a;
        case ue:
          return "Portal";
        case te:
          return "Root";
        case Pe:
          return "Text";
        case Gt:
          return kt(a);
        case st:
          return a === fi ? "StrictMode" : "Mode";
        case ze:
          return "Offscreen";
        case ct:
          return "Profiler";
        case ln:
          return "Scope";
        case De:
          return "Suspense";
        case _t:
          return "SuspenseList";
        case St:
          return "TracingMarker";
        case ce:
        case se:
        case hn:
        case We:
        case it:
        case Ve:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Jl = M.ReactDebugCurrentFrame, Sn = null, Kr = !1;
    function Nr() {
      {
        if (Sn === null)
          return null;
        var e = Sn._debugOwner;
        if (e !== null && typeof e < "u")
          return Ke(e);
      }
      return null;
    }
    function vl() {
      return Sn === null ? "" : Qu(Sn);
    }
    function Tn() {
      Jl.getCurrentStack = null, Sn = null, Kr = !1;
    }
    function $t(e) {
      Jl.getCurrentStack = e === null ? null : vl, Sn = e, Kr = !1;
    }
    function Js() {
      return Sn;
    }
    function qr(e) {
      Kr = e;
    }
    function Gn(e) {
      return "" + e;
    }
    function hi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return yr(e), e;
        default:
          return "";
      }
    }
    var Zs = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Mi(e, t) {
      Zs[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function hl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function ec(e) {
      return e._valueTracker;
    }
    function Da(e) {
      e._valueTracker = null;
    }
    function ml(e) {
      var t = "";
      return e && (hl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function yl(e) {
      var t = hl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      yr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            yr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            yr(p), i = "" + p;
          },
          stopTracking: function() {
            Da(e), delete e[t];
          }
        };
        return f;
      }
    }
    function ka(e) {
      ec(e) || (e._valueTracker = yl(e));
    }
    function qu(e) {
      if (!e)
        return !1;
      var t = ec(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = ml(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function gl(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Sl = !1, Zl = !1, Xu = !1, qo = !1;
    function Ja(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = dt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function C(e, t) {
      Mi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Zl && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Nr() || "A component", t.type), Zl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Sl && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Nr() || "A component", t.type), Sl = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: hi(t.value != null ? t.value : i),
        controlled: Ja(t)
      };
    }
    function z(e, t) {
      var a = e, i = t.checked;
      i != null && va(a, "checked", i, !1);
    }
    function F(e, t) {
      var a = e;
      {
        var i = Ja(t);
        !a._wrapperState.controlled && i && !qo && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), qo = !0), a._wrapperState.controlled && !i && !Xu && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Xu = !0);
      }
      z(e, t);
      var u = hi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Gn(u)) : a.value !== Gn(u) && (a.value = Gn(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ue(a, t.type, u) : t.hasOwnProperty("defaultValue") && Ue(a, t.type, hi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function J(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Gn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Fe(e, t) {
      var a = e;
      F(a, t), oe(a, t);
    }
    function oe(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Ir(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Rh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            qu(f), F(f, p);
          }
        }
      }
    }
    function Ue(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || gl(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Gn(e._wrapperState.initialValue) : e.defaultValue !== Gn(a) && (e.defaultValue = Gn(a)));
    }
    var pt = !1, Ot = !1, Xt = !1;
    function Wt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? I.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ot || (Ot = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Xt || (Xt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !pt && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), pt = !0);
    }
    function Jt(e, t) {
      t.value != null && e.setAttribute("value", Gn(hi(t.value)));
    }
    var rn = Array.isArray;
    function Et(e) {
      return rn(e);
    }
    var Li;
    Li = !1;
    function Ju() {
      var e = Nr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Xo = ["value", "defaultValue"];
    function Pf(e) {
      {
        Mi("select", e);
        for (var t = 0; t < Xo.length; t++) {
          var a = Xo[t];
          if (e[a] != null) {
            var i = Et(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Ju()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Ju());
          }
        }
      }
    }
    function Za(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Gn(hi(a)), D = null, b = 0; b < u.length; b++) {
          if (u[b].value === g) {
            u[b].selected = !0, i && (u[b].defaultSelected = !0);
            return;
          }
          D === null && !u[b].disabled && (D = u[b]);
        }
        D !== null && (D.selected = !0);
      }
    }
    function Jo(e, t) {
      return dt({}, t, {
        value: void 0
      });
    }
    function Zo(e, t) {
      var a = e;
      Pf(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Li && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Li = !0);
    }
    function Vf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Za(a, !!t.multiple, i, !1) : t.defaultValue != null && Za(a, !!t.multiple, t.defaultValue, !0);
    }
    function Hm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Za(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Za(a, !!t.multiple, t.defaultValue, !0) : Za(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Pm(e, t) {
      var a = e, i = t.value;
      i != null && Za(a, !!t.multiple, i, !1);
    }
    var Bf = !1;
    function $f(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = dt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Gn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Jp(e, t) {
      var a = e;
      Mi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Bf && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Nr() || "A component"), Bf = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Et(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: hi(i)
      };
    }
    function Zp(e, t) {
      var a = e, i = hi(t.value), u = hi(t.defaultValue);
      if (i != null) {
        var s = Gn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Gn(u));
    }
    function ev(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function If(e, t) {
      Zp(e, t);
    }
    var ji = "http://www.w3.org/1999/xhtml", Vm = "http://www.w3.org/1998/Math/MathML", Yf = "http://www.w3.org/2000/svg";
    function tc(e) {
      switch (e) {
        case "svg":
          return Yf;
        case "math":
          return Vm;
        default:
          return ji;
      }
    }
    function Qf(e, t) {
      return e == null || e === ji ? tc(t) : e === Yf && t === "foreignObject" ? ji : e;
    }
    var Bm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, nc, tv = Bm(function(e, t) {
      if (e.namespaceURI === Yf && !("innerHTML" in e)) {
        nc = nc || document.createElement("div"), nc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = nc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Xr = 1, zi = 3, jn = 8, ei = 9, eu = 11, rc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === zi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, nv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Zu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function rv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var av = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Zu).forEach(function(e) {
      av.forEach(function(t) {
        Zu[rv(t, e)] = Zu[e];
      });
    });
    function ac(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Zu.hasOwnProperty(e) && Zu[e]) ? t + "px" : (mr(t, e), ("" + t).trim());
    }
    var eo = /([A-Z])/g, $m = /^ms-/;
    function Im(e) {
      return e.replace(eo, "-$1").toLowerCase().replace($m, "-ms-");
    }
    var iv = function() {
    };
    {
      var lv = /^(?:webkit|moz|o)[A-Z]/, uv = /^-ms-/, es = /-(.)/g, to = /;\s*$/, no = {}, ro = {}, ov = !1, Wf = !1, Gf = function(e) {
        return e.replace(es, function(t, a) {
          return a.toUpperCase();
        });
      }, Kf = function(e) {
        no.hasOwnProperty(e) && no[e] || (no[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Gf(e.replace(uv, "ms-"))
        ));
      }, sv = function(e) {
        no.hasOwnProperty(e) && no[e] || (no[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, cv = function(e, t) {
        ro.hasOwnProperty(t) && ro[t] || (ro[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(to, "")));
      }, fv = function(e, t) {
        ov || (ov = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Ym = function(e, t) {
        Wf || (Wf = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      iv = function(e, t) {
        e.indexOf("-") > -1 ? Kf(e) : lv.test(e) ? sv(e) : to.test(t) && cv(e, t), typeof t == "number" && (isNaN(t) ? fv(e, t) : isFinite(t) || Ym(e, t));
      };
    }
    var Qm = iv;
    function Wm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Im(i)) + ":", t += ac(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function dv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Qm(i, t[i]);
          var s = ac(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Gm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Oa(e) {
      var t = {};
      for (var a in e)
        for (var i = nv[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ts(e, t) {
      {
        if (!t)
          return;
        var a = Oa(e), i = Oa(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Gm(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var pv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, vv = dt({
      menuitem: !0
    }, pv), hv = "__html";
    function ic(e, t) {
      if (t) {
        if (vv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(hv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Ui(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var lc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, mv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, ti = {}, qf = new RegExp("^(aria)-[" + ke + "]*$"), ns = new RegExp("^(aria)[A-Z][" + ke + "]*$");
    function Xf(e, t) {
      {
        if (Qn.call(ti, t) && ti[t])
          return !0;
        if (ns.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = mv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ti[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), ti[t] = !0, !0;
        }
        if (qf.test(t)) {
          var u = t.toLowerCase(), s = mv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return ti[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), ti[t] = !0, !0;
        }
      }
      return !0;
    }
    function yv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Xf(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function uc(e, t) {
      Ui(e, t) || yv(e, t);
    }
    var tu = !1;
    function Jf(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !tu && (tu = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Zf = function() {
    };
    {
      var Kn = {}, ed = /^on./, gv = /^on[^A-Z]/, Sv = new RegExp("^(aria)-[" + ke + "]*$"), Ev = new RegExp("^(aria)[A-Z][" + ke + "]*$");
      Zf = function(e, t, a, i) {
        if (Qn.call(Kn, t) && Kn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Kn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Kn[t] = !0, !0;
          if (ed.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Kn[t] = !0, !0;
        } else if (ed.test(t))
          return gv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Kn[t] = !0, !0;
        if (Sv.test(t) || Ev.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Kn[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Kn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Kn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Kn[t] = !0, !0;
        var v = _r(t), y = v !== null && v.type === fa;
        if (lc.hasOwnProperty(u)) {
          var g = lc[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), Kn[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Kn[t] = !0, !0;
        return typeof a == "boolean" && gr(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Kn[t] = !0, !0) : y ? !0 : gr(t, a, v, !1) ? (Kn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === yn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Kn[t] = !0), !0);
      };
    }
    var Cv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = Zf(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function xv(e, t, a) {
      Ui(e, t) || Cv(e, t, a);
    }
    var Ai = 1, rs = 2, nu = 4, Km = Ai | rs | nu, as = null;
    function is(e) {
      as !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), as = e;
    }
    function qm() {
      as === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), as = null;
    }
    function Rv(e) {
      return e === as;
    }
    function oc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === zi ? t.parentNode : t;
    }
    var Zt = null, El = null, Fi = null;
    function ao(e) {
      var t = No(e);
      if (t) {
        if (typeof Zt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Rh(a);
          Zt(t.stateNode, t.type, i);
        }
      }
    }
    function Tv(e) {
      Zt = e;
    }
    function sc(e) {
      El ? Fi ? Fi.push(e) : Fi = [e] : El = e;
    }
    function ls() {
      return El !== null || Fi !== null;
    }
    function us() {
      if (El) {
        var e = El, t = Fi;
        if (El = null, Fi = null, ao(e), t)
          for (var a = 0; a < t.length; a++)
            ao(t[a]);
      }
    }
    var ru = function(e, t) {
      return e(t);
    }, td = function() {
    }, nd = !1;
    function Xm() {
      var e = ls();
      e && (td(), us());
    }
    function rd(e, t, a) {
      if (nd)
        return e(t, a);
      nd = !0;
      try {
        return ru(e, t, a);
      } finally {
        nd = !1, Xm();
      }
    }
    function cc(e, t, a) {
      ru = e, td = a;
    }
    function fc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function ad(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && fc(t));
        default:
          return !1;
      }
    }
    function au(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Rh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (ad(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var os = !1;
    if (mn)
      try {
        var iu = {};
        Object.defineProperty(iu, "passive", {
          get: function() {
            os = !0;
          }
        }), window.addEventListener("test", iu, iu), window.removeEventListener("test", iu, iu);
      } catch {
        os = !1;
      }
    function wv(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var id = wv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var ld = document.createElement("react");
      id = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), D = !1, b = !0, j = window.event, U = Object.getOwnPropertyDescriptor(window, "event");
        function H() {
          ld.removeEventListener(P, je, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = j);
        }
        var me = Array.prototype.slice.call(arguments, 3);
        function je() {
          D = !0, H(), a.apply(i, me), b = !1;
        }
        var _e, wt = !1, yt = !1;
        function O(N) {
          if (_e = N.error, wt = !0, _e === null && N.colno === 0 && N.lineno === 0 && (yt = !0), N.defaultPrevented && _e != null && typeof _e == "object")
            try {
              _e._suppressLogging = !0;
            } catch {
            }
        }
        var P = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", O), ld.addEventListener(P, je, !1), g.initEvent(P, !1, !1), ld.dispatchEvent(g), U && Object.defineProperty(window, "event", U), D && b && (wt ? yt && (_e = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : _e = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(_e)), window.removeEventListener("error", O), !D)
          return H(), wv.apply(this, arguments);
      };
    }
    var Jm = id, Cl = !1, ni = null, ss = !1, xl = null, mi = {
      onError: function(e) {
        Cl = !0, ni = e;
      }
    };
    function lu(e, t, a, i, u, s, f, p, v) {
      Cl = !1, ni = null, Jm.apply(mi, arguments);
    }
    function Hi(e, t, a, i, u, s, f, p, v) {
      if (lu.apply(this, arguments), Cl) {
        var y = od();
        ss || (ss = !0, xl = y);
      }
    }
    function ud() {
      if (ss) {
        var e = xl;
        throw ss = !1, xl = null, e;
      }
    }
    function Zm() {
      return Cl;
    }
    function od() {
      if (Cl) {
        var e = ni;
        return Cl = !1, ni = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Na(e) {
      return e._reactInternals;
    }
    function cs(e) {
      return e._reactInternals !== void 0;
    }
    function io(e, t) {
      e._reactInternals = t;
    }
    var Ne = (
      /*                      */
      0
    ), Rl = (
      /*                */
      1
    ), un = (
      /*                    */
      2
    ), nt = (
      /*                       */
      4
    ), Ft = (
      /*                */
      16
    ), It = (
      /*                 */
      32
    ), yi = (
      /*                     */
      64
    ), Ie = (
      /*                   */
      128
    ), wn = (
      /*            */
      256
    ), Jr = (
      /*                          */
      512
    ), Ma = (
      /*                     */
      1024
    ), dn = (
      /*                      */
      2048
    ), La = (
      /*                    */
      4096
    ), Tl = (
      /*                   */
      8192
    ), fs = (
      /*             */
      16384
    ), dc = dn | nt | yi | Jr | Ma | fs, bv = (
      /*               */
      32767
    ), ma = (
      /*                   */
      32768
    ), qn = (
      /*                */
      65536
    ), ds = (
      /* */
      131072
    ), sd = (
      /*                       */
      1048576
    ), cd = (
      /*                    */
      2097152
    ), Zr = (
      /*                 */
      4194304
    ), wl = (
      /*                */
      8388608
    ), ea = (
      /*               */
      16777216
    ), uu = (
      /*              */
      33554432
    ), lo = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      nt | Ma | 0
    ), ta = un | nt | Ft | It | Jr | La | Tl, Sr = nt | yi | Jr | Tl, ja = dn | Ft, ar = Zr | wl | cd, Pi = M.ReactCurrentOwner;
    function ya(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (un | La)) !== Ne && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === te ? a : null;
    }
    function fd(e) {
      if (e.tag === De) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function pc(e) {
      return e.tag === te ? e.stateNode.containerInfo : null;
    }
    function dd(e) {
      return ya(e) === e;
    }
    function ga(e) {
      {
        var t = Pi.current;
        if (t !== null && t.tag === ce) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ke(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Na(e);
      return u ? ya(u) === u : !1;
    }
    function na(e) {
      if (ya(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function on(e) {
      var t = e.alternate;
      if (!t) {
        var a = ya(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return na(s), e;
            if (v === u)
              return na(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== te)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function za(e) {
      var t = on(e);
      return t !== null ? pd(t) : null;
    }
    function pd(e) {
      if (e.tag === fe || e.tag === Pe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = pd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function _v(e) {
      var t = on(e);
      return t !== null ? vc(t) : null;
    }
    function vc(e) {
      if (e.tag === fe || e.tag === Pe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== ue) {
          var a = vc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var hc = Y.unstable_scheduleCallback, Dv = Y.unstable_cancelCallback, mc = Y.unstable_shouldYield, kv = Y.unstable_requestPaint, En = Y.unstable_now, vd = Y.unstable_getCurrentPriorityLevel, yc = Y.unstable_ImmediatePriority, Sa = Y.unstable_UserBlockingPriority, gi = Y.unstable_NormalPriority, gc = Y.unstable_LowPriority, bl = Y.unstable_IdlePriority, hd = Y.unstable_yieldValue, md = Y.unstable_setDisableYieldValue, _l = null, Xn = null, ae = null, On = !1, ir = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function yd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ct && (e = dt({}, e, {
          getLaneLabelMap: kl,
          injectProfilingHooks: Bi
        })), _l = t.inject(e), Xn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Ov(e, t) {
      if (Xn && typeof Xn.onScheduleFiberRoot == "function")
        try {
          Xn.onScheduleFiberRoot(_l, e, t);
        } catch (a) {
          On || (On = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Vi(e, t) {
      if (Xn && typeof Xn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ie) === Ie;
          if (lt) {
            var i;
            switch (t) {
              case Er:
                i = yc;
                break;
              case lr:
                i = Sa;
                break;
              case Ii:
                i = gi;
                break;
              case Cs:
                i = bl;
                break;
              default:
                i = gi;
                break;
            }
            Xn.onCommitFiberRoot(_l, e, i, a);
          }
        } catch (u) {
          On || (On = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Dl(e) {
      if (Xn && typeof Xn.onPostCommitFiberRoot == "function")
        try {
          Xn.onPostCommitFiberRoot(_l, e);
        } catch (t) {
          On || (On = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function gd(e) {
      if (Xn && typeof Xn.onCommitFiberUnmount == "function")
        try {
          Xn.onCommitFiberUnmount(_l, e);
        } catch (t) {
          On || (On = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Pn(e) {
      if (typeof hd == "function" && (md(e), et(e)), Xn && typeof Xn.setStrictMode == "function")
        try {
          Xn.setStrictMode(_l, e);
        } catch (t) {
          On || (On = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Bi(e) {
      ae = e;
    }
    function kl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < sn; a++) {
          var i = ey(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Sc(e) {
      ae !== null && typeof ae.markCommitStarted == "function" && ae.markCommitStarted(e);
    }
    function Sd() {
      ae !== null && typeof ae.markCommitStopped == "function" && ae.markCommitStopped();
    }
    function Ol(e) {
      ae !== null && typeof ae.markComponentRenderStarted == "function" && ae.markComponentRenderStarted(e);
    }
    function ou() {
      ae !== null && typeof ae.markComponentRenderStopped == "function" && ae.markComponentRenderStopped();
    }
    function Nv(e) {
      ae !== null && typeof ae.markComponentPassiveEffectMountStarted == "function" && ae.markComponentPassiveEffectMountStarted(e);
    }
    function Ed() {
      ae !== null && typeof ae.markComponentPassiveEffectMountStopped == "function" && ae.markComponentPassiveEffectMountStopped();
    }
    function Ec(e) {
      ae !== null && typeof ae.markComponentPassiveEffectUnmountStarted == "function" && ae.markComponentPassiveEffectUnmountStarted(e);
    }
    function Mv() {
      ae !== null && typeof ae.markComponentPassiveEffectUnmountStopped == "function" && ae.markComponentPassiveEffectUnmountStopped();
    }
    function Lv(e) {
      ae !== null && typeof ae.markComponentLayoutEffectMountStarted == "function" && ae.markComponentLayoutEffectMountStarted(e);
    }
    function jv() {
      ae !== null && typeof ae.markComponentLayoutEffectMountStopped == "function" && ae.markComponentLayoutEffectMountStopped();
    }
    function Cc(e) {
      ae !== null && typeof ae.markComponentLayoutEffectUnmountStarted == "function" && ae.markComponentLayoutEffectUnmountStarted(e);
    }
    function uo() {
      ae !== null && typeof ae.markComponentLayoutEffectUnmountStopped == "function" && ae.markComponentLayoutEffectUnmountStopped();
    }
    function xc(e, t, a) {
      ae !== null && typeof ae.markComponentErrored == "function" && ae.markComponentErrored(e, t, a);
    }
    function zv(e, t, a) {
      ae !== null && typeof ae.markComponentSuspended == "function" && ae.markComponentSuspended(e, t, a);
    }
    function Uv(e) {
      ae !== null && typeof ae.markLayoutEffectsStarted == "function" && ae.markLayoutEffectsStarted(e);
    }
    function oo() {
      ae !== null && typeof ae.markLayoutEffectsStopped == "function" && ae.markLayoutEffectsStopped();
    }
    function Av(e) {
      ae !== null && typeof ae.markPassiveEffectsStarted == "function" && ae.markPassiveEffectsStarted(e);
    }
    function ps() {
      ae !== null && typeof ae.markPassiveEffectsStopped == "function" && ae.markPassiveEffectsStopped();
    }
    function ri(e) {
      ae !== null && typeof ae.markRenderStarted == "function" && ae.markRenderStarted(e);
    }
    function vs() {
      ae !== null && typeof ae.markRenderYielded == "function" && ae.markRenderYielded();
    }
    function so() {
      ae !== null && typeof ae.markRenderStopped == "function" && ae.markRenderStopped();
    }
    function su(e) {
      ae !== null && typeof ae.markRenderScheduled == "function" && ae.markRenderScheduled(e);
    }
    function Cd(e, t) {
      ae !== null && typeof ae.markForceUpdateScheduled == "function" && ae.markForceUpdateScheduled(e, t);
    }
    function Nl(e, t) {
      ae !== null && typeof ae.markStateUpdateScheduled == "function" && ae.markStateUpdateScheduled(e, t);
    }
    var Ae = (
      /*                         */
      0
    ), vt = (
      /*                 */
      1
    ), He = (
      /*                    */
      2
    ), Cn = (
      /*               */
      8
    ), Ua = (
      /*              */
      16
    ), Rc = Math.clz32 ? Math.clz32 : cu, Tc = Math.log, xd = Math.LN2;
    function cu(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Tc(t) / xd | 0) | 0;
    }
    var sn = 31, V = (
      /*                        */
      0
    ), Rt = (
      /*                          */
      0
    ), Be = (
      /*                        */
      1
    ), Si = (
      /*    */
      2
    ), Ea = (
      /*             */
      4
    ), fu = (
      /*            */
      8
    ), cn = (
      /*                     */
      16
    ), du = (
      /*                */
      32
    ), Ml = (
      /*                       */
      4194240
    ), pu = (
      /*                        */
      64
    ), Aa = (
      /*                        */
      128
    ), ra = (
      /*                        */
      256
    ), vu = (
      /*                        */
      512
    ), hs = (
      /*                        */
      1024
    ), ms = (
      /*                        */
      2048
    ), wc = (
      /*                        */
      4096
    ), bc = (
      /*                        */
      8192
    ), _c = (
      /*                        */
      16384
    ), Dc = (
      /*                       */
      32768
    ), kc = (
      /*                       */
      65536
    ), Oc = (
      /*                       */
      131072
    ), Nc = (
      /*                       */
      262144
    ), Mc = (
      /*                       */
      524288
    ), hu = (
      /*                       */
      1048576
    ), Lc = (
      /*                       */
      2097152
    ), mu = (
      /*                            */
      130023424
    ), $i = (
      /*                             */
      4194304
    ), jc = (
      /*                             */
      8388608
    ), ys = (
      /*                             */
      16777216
    ), zc = (
      /*                             */
      33554432
    ), Uc = (
      /*                             */
      67108864
    ), Rd = $i, co = (
      /*          */
      134217728
    ), Ac = (
      /*                          */
      268435455
    ), fo = (
      /*               */
      268435456
    ), Ll = (
      /*                        */
      536870912
    ), aa = (
      /*                   */
      1073741824
    );
    function ey(e) {
      {
        if (e & Be)
          return "Sync";
        if (e & Si)
          return "InputContinuousHydration";
        if (e & Ea)
          return "InputContinuous";
        if (e & fu)
          return "DefaultHydration";
        if (e & cn)
          return "Default";
        if (e & du)
          return "TransitionHydration";
        if (e & Ml)
          return "Transition";
        if (e & mu)
          return "Retry";
        if (e & co)
          return "SelectiveHydration";
        if (e & fo)
          return "IdleHydration";
        if (e & Ll)
          return "Idle";
        if (e & aa)
          return "Offscreen";
      }
    }
    var en = -1, Fc = pu, Hc = $i;
    function po(e) {
      switch (zn(e)) {
        case Be:
          return Be;
        case Si:
          return Si;
        case Ea:
          return Ea;
        case fu:
          return fu;
        case cn:
          return cn;
        case du:
          return du;
        case pu:
        case Aa:
        case ra:
        case vu:
        case hs:
        case ms:
        case wc:
        case bc:
        case _c:
        case Dc:
        case kc:
        case Oc:
        case Nc:
        case Mc:
        case hu:
        case Lc:
          return e & Ml;
        case $i:
        case jc:
        case ys:
        case zc:
        case Uc:
          return e & mu;
        case co:
          return co;
        case fo:
          return fo;
        case Ll:
          return Ll;
        case aa:
          return aa;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function gs(e, t) {
      var a = e.pendingLanes;
      if (a === V)
        return V;
      var i = V, u = e.suspendedLanes, s = e.pingedLanes, f = a & Ac;
      if (f !== V) {
        var p = f & ~u;
        if (p !== V)
          i = po(p);
        else {
          var v = f & s;
          v !== V && (i = po(v));
        }
      } else {
        var y = a & ~u;
        y !== V ? i = po(y) : s !== V && (i = po(s));
      }
      if (i === V)
        return V;
      if (t !== V && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === V) {
        var g = zn(i), D = zn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= D || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === cn && (D & Ml) !== V
        )
          return t;
      }
      (i & Ea) !== V && (i |= a & cn);
      var b = e.entangledLanes;
      if (b !== V)
        for (var j = e.entanglements, U = i & b; U > 0; ) {
          var H = jl(U), me = 1 << H;
          i |= j[H], U &= ~me;
        }
      return i;
    }
    function Fv(e, t) {
      for (var a = e.eventTimes, i = en; t > 0; ) {
        var u = jl(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Pc(e, t) {
      switch (e) {
        case Be:
        case Si:
        case Ea:
          return t + 250;
        case fu:
        case cn:
        case du:
        case pu:
        case Aa:
        case ra:
        case vu:
        case hs:
        case ms:
        case wc:
        case bc:
        case _c:
        case Dc:
        case kc:
        case Oc:
        case Nc:
        case Mc:
        case hu:
        case Lc:
          return t + 5e3;
        case $i:
        case jc:
        case ys:
        case zc:
        case Uc:
          return en;
        case co:
        case fo:
        case Ll:
        case aa:
          return en;
        default:
          return S("Should have found matching lanes. This is a bug in React."), en;
      }
    }
    function ty(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = jl(f), v = 1 << p, y = s[p];
        y === en ? ((v & i) === V || (v & u) !== V) && (s[p] = Pc(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function ny(e) {
      return po(e.pendingLanes);
    }
    function Td(e) {
      var t = e.pendingLanes & ~aa;
      return t !== V ? t : t & aa ? aa : V;
    }
    function vo(e) {
      return (e & Be) !== V;
    }
    function Ss(e) {
      return (e & Ac) !== V;
    }
    function Vc(e) {
      return (e & mu) === e;
    }
    function ry(e) {
      var t = Be | Ea | cn;
      return (e & t) === V;
    }
    function Hv(e) {
      return (e & Ml) === e;
    }
    function Es(e, t) {
      var a = Si | Ea | fu | cn;
      return (t & a) !== V;
    }
    function Pv(e, t) {
      return (t & e.expiredLanes) !== V;
    }
    function wd(e) {
      return (e & Ml) !== V;
    }
    function bd() {
      var e = Fc;
      return Fc <<= 1, (Fc & Ml) === V && (Fc = pu), e;
    }
    function ay() {
      var e = Hc;
      return Hc <<= 1, (Hc & mu) === V && (Hc = $i), e;
    }
    function zn(e) {
      return e & -e;
    }
    function Vn(e) {
      return zn(e);
    }
    function jl(e) {
      return 31 - Rc(e);
    }
    function Bc(e) {
      return jl(e);
    }
    function ia(e, t) {
      return (e & t) !== V;
    }
    function yu(e, t) {
      return (e & t) === t;
    }
    function rt(e, t) {
      return e | t;
    }
    function ho(e, t) {
      return e & ~t;
    }
    function _d(e, t) {
      return e & t;
    }
    function Vv(e) {
      return e;
    }
    function Bv(e, t) {
      return e !== Rt && e < t ? e : t;
    }
    function $c(e) {
      for (var t = [], a = 0; a < sn; a++)
        t.push(e);
      return t;
    }
    function gu(e, t, a) {
      e.pendingLanes |= t, t !== Ll && (e.suspendedLanes = V, e.pingedLanes = V);
      var i = e.eventTimes, u = Bc(t);
      i[u] = a;
    }
    function Dd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = jl(i), s = 1 << u;
        a[u] = en, i &= ~s;
      }
    }
    function kd(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Od(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = V, e.pingedLanes = V, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = jl(f), v = 1 << p;
        i[p] = V, u[p] = en, s[p] = en, f &= ~v;
      }
    }
    function mo(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = jl(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function iy(e, t) {
      var a = zn(t), i;
      switch (a) {
        case Ea:
          i = Si;
          break;
        case cn:
          i = fu;
          break;
        case pu:
        case Aa:
        case ra:
        case vu:
        case hs:
        case ms:
        case wc:
        case bc:
        case _c:
        case Dc:
        case kc:
        case Oc:
        case Nc:
        case Mc:
        case hu:
        case Lc:
        case $i:
        case jc:
        case ys:
        case zc:
        case Uc:
          i = du;
          break;
        case Ll:
          i = fo;
          break;
        default:
          i = Rt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Rt ? Rt : i;
    }
    function Nd(e, t, a) {
      if (ir)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Bc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Ic(e, t) {
      if (ir)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Bc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Md(e, t) {
      return null;
    }
    var Er = Be, lr = Ea, Ii = cn, Cs = Ll, Su = Rt;
    function Fa() {
      return Su;
    }
    function Bn(e) {
      Su = e;
    }
    function xs(e, t) {
      var a = Su;
      try {
        return Su = e, t();
      } finally {
        Su = a;
      }
    }
    function Cr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ly(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function Ld(e, t) {
      return e !== 0 && e < t;
    }
    function Rs(e) {
      var t = zn(e);
      return Ld(Er, t) ? Ld(lr, t) ? Ss(t) ? Ii : Cs : lr : Er;
    }
    function $n(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var $v;
    function Ee(e) {
      $v = e;
    }
    function yo(e) {
      $v(e);
    }
    var Ts;
    function Iv(e) {
      Ts = e;
    }
    var Yv;
    function ws(e) {
      Yv = e;
    }
    var bs;
    function jd(e) {
      bs = e;
    }
    var zd;
    function Qv(e) {
      zd = e;
    }
    var Yc = !1, go = [], Ei = null, pn = null, Jn = null, Ha = /* @__PURE__ */ new Map(), So = /* @__PURE__ */ new Map(), Yi = [], ai = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Wv(e) {
      return ai.indexOf(e) > -1;
    }
    function Ci(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Gv(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ei = null;
          break;
        case "dragenter":
        case "dragleave":
          pn = null;
          break;
        case "mouseover":
        case "mouseout":
          Jn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Ha.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          So.delete(i);
          break;
        }
      }
    }
    function Eo(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Ci(t, a, i, u, s);
        if (t !== null) {
          var p = No(t);
          p !== null && Ts(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Kv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ei = Eo(Ei, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return pn = Eo(pn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Jn = Eo(Jn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return Ha.set(y, Eo(Ha.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, D = g.pointerId;
          return So.set(D, Eo(So.get(D) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Ud(e) {
      var t = zs(e.target);
      if (t !== null) {
        var a = ya(t);
        if (a !== null) {
          var i = a.tag;
          if (i === De) {
            var u = fd(a);
            if (u !== null) {
              e.blockedOn = u, zd(e.priority, function() {
                Yv(a);
              });
              return;
            }
          } else if (i === te) {
            var s = a.stateNode;
            if ($n(s)) {
              e.blockedOn = pc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function qv(e) {
      for (var t = bs(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Yi.length && Ld(t, Yi[i].priority); i++)
        ;
      Yi.splice(i, 0, a), i === 0 && Ud(a);
    }
    function Qc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Eu(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          is(s), u.target.dispatchEvent(s), qm();
        } else {
          var f = No(i);
          return f !== null && Ts(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function _s(e, t, a) {
      Qc(e) && a.delete(t);
    }
    function Ad() {
      Yc = !1, Ei !== null && Qc(Ei) && (Ei = null), pn !== null && Qc(pn) && (pn = null), Jn !== null && Qc(Jn) && (Jn = null), Ha.forEach(_s), So.forEach(_s);
    }
    function xr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Yc || (Yc = !0, Y.unstable_scheduleCallback(Y.unstable_NormalPriority, Ad)));
    }
    function mt(e) {
      if (go.length > 0) {
        xr(go[0], e);
        for (var t = 1; t < go.length; t++) {
          var a = go[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ei !== null && xr(Ei, e), pn !== null && xr(pn, e), Jn !== null && xr(Jn, e);
      var i = function(p) {
        return xr(p, e);
      };
      Ha.forEach(i), So.forEach(i);
      for (var u = 0; u < Yi.length; u++) {
        var s = Yi[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Yi.length > 0; ) {
        var f = Yi[0];
        if (f.blockedOn !== null)
          break;
        Ud(f), f.blockedOn === null && Yi.shift();
      }
    }
    var xn = M.ReactCurrentBatchConfig, bn = !0;
    function Zn(e) {
      bn = !!e;
    }
    function Ca() {
      return bn;
    }
    function Co(e, t, a) {
      var i = Mr(t), u;
      switch (i) {
        case Er:
          u = In;
          break;
        case lr:
          u = Ds;
          break;
        case Ii:
        default:
          u = Qi;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function In(e, t, a, i) {
      var u = Fa(), s = xn.transition;
      xn.transition = null;
      try {
        Bn(Er), Qi(e, t, a, i);
      } finally {
        Bn(u), xn.transition = s;
      }
    }
    function Ds(e, t, a, i) {
      var u = Fa(), s = xn.transition;
      xn.transition = null;
      try {
        Bn(lr), Qi(e, t, a, i);
      } finally {
        Bn(u), xn.transition = s;
      }
    }
    function Qi(e, t, a, i) {
      bn && Wc(e, t, a, i);
    }
    function Wc(e, t, a, i) {
      var u = Eu(e, t, a, i);
      if (u === null) {
        by(e, t, i, xo, a), Gv(e, i);
        return;
      }
      if (Kv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Gv(e, i), t & nu && Wv(e)) {
        for (; u !== null; ) {
          var s = No(u);
          s !== null && yo(s);
          var f = Eu(e, t, a, i);
          if (f === null && by(e, t, i, xo, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      by(e, t, i, null, a);
    }
    var xo = null;
    function Eu(e, t, a, i) {
      xo = null;
      var u = oc(i), s = zs(u);
      if (s !== null) {
        var f = ya(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === De) {
            var v = fd(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === te) {
            var y = f.stateNode;
            if ($n(y))
              return pc(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return xo = s, null;
    }
    function Mr(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Er;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return lr;
        case "message": {
          var t = vd();
          switch (t) {
            case yc:
              return Er;
            case Sa:
              return lr;
            case gi:
            case gc:
              return Ii;
            case bl:
              return Cs;
            default:
              return Ii;
          }
        }
        default:
          return Ii;
      }
    }
    function Fd(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Ro(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Wi(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Gc(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Cu = null, xi = null, zl = null;
    function Ul(e) {
      return Cu = e, xi = qc(), !0;
    }
    function Kc() {
      Cu = null, xi = null, zl = null;
    }
    function To() {
      if (zl)
        return zl;
      var e, t = xi, a = t.length, i, u = qc(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return zl = u.slice(e, p), zl;
    }
    function qc() {
      return "value" in Cu ? Cu.value : Cu.textContent;
    }
    function xu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Ru() {
      return !0;
    }
    function Rr() {
      return !1;
    }
    function Un(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = Ru : this.isDefaultPrevented = Rr, this.isPropagationStopped = Rr, this;
      }
      return dt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Ru);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Ru);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Ru
      }), t;
    }
    var Tr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, wr = Un(Tr), wo = dt({}, Tr, {
      view: 0,
      detail: 0
    }), Hd = Un(wo), ks, Pd, Pa;
    function Xv(e) {
      e !== Pa && (Pa && e.type === "mousemove" ? (ks = e.screenX - Pa.screenX, Pd = e.screenY - Pa.screenY) : (ks = 0, Pd = 0), Pa = e);
    }
    var bo = dt({}, wo, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Zc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Xv(e), ks);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Pd;
      }
    }), Al = Un(bo), Vd = dt({}, bo, {
      dataTransfer: 0
    }), Tu = Un(Vd), Jv = dt({}, wo, {
      relatedTarget: 0
    }), Xc = Un(Jv), Bd = dt({}, Tr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Jc = Un(Bd), uy = dt({}, Tr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), oy = Un(uy), Zv = dt({}, Tr, {
      data: 0
    }), $d = Un(Zv), wu = $d, sy = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, _o = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function eh(e) {
      if (e.key) {
        var t = sy[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = xu(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? _o[e.keyCode] || "Unidentified" : "";
    }
    var _n = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function cy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = _n[e];
      return i ? !!a[i] : !1;
    }
    function Zc(e) {
      return cy;
    }
    var fy = dt({}, wo, {
      key: eh,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Zc,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? xu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? xu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), dy = Un(fy), th = dt({}, bo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Id = Un(th), py = dt({}, wo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Zc
    }), Va = Un(py), Yd = dt({}, Tr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), vy = Un(Yd), Fl = dt({}, bo, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), ef = Un(Fl), bu = [9, 13, 27, 32], Os = 229, Ns = mn && "CompositionEvent" in window, _u = null;
    mn && "documentMode" in document && (_u = document.documentMode);
    var hy = mn && "TextEvent" in window && !_u, tf = mn && (!Ns || _u && _u > 8 && _u <= 11), nh = 32, Qd = String.fromCharCode(nh);
    function rh() {
      hr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), hr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), hr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), hr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ms = !1;
    function nf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function ah(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Wd(e, t) {
      return e === "keydown" && t.keyCode === Os;
    }
    function ih(e, t) {
      switch (e) {
        case "keyup":
          return bu.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Os;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Gd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function rf(e) {
      return e.locale === "ko";
    }
    var Gi = !1;
    function Kd(e, t, a, i, u) {
      var s, f;
      if (Ns ? s = ah(t) : Gi ? ih(t, i) && (s = "onCompositionEnd") : Wd(t, i) && (s = "onCompositionStart"), !s)
        return null;
      tf && !rf(i) && (!Gi && s === "onCompositionStart" ? Gi = Ul(u) : s === "onCompositionEnd" && Gi && (f = To()));
      var p = ch(a, s);
      if (p.length > 0) {
        var v = new $d(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = Gd(i);
          y !== null && (v.data = y);
        }
      }
    }
    function af(e, t) {
      switch (e) {
        case "compositionend":
          return Gd(t);
        case "keypress":
          var a = t.which;
          return a !== nh ? null : (Ms = !0, Qd);
        case "textInput":
          var i = t.data;
          return i === Qd && Ms ? null : i;
        default:
          return null;
      }
    }
    function lh(e, t) {
      if (Gi) {
        if (e === "compositionend" || !Ns && ih(e, t)) {
          var a = To();
          return Kc(), Gi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!nf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return tf && !rf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function my(e, t, a, i, u) {
      var s;
      if (hy ? s = af(t, i) : s = lh(t, i), !s)
        return null;
      var f = ch(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new wu("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function lf(e, t, a, i, u, s, f) {
      Kd(e, t, a, i, u), my(e, t, a, i, u);
    }
    var yy = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Do(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!yy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function gy(e) {
      if (!mn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function uf() {
      hr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      sc(i);
      var u = ch(t, "onChange");
      if (u.length > 0) {
        var s = new wr("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var r = null, l = null;
    function o(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function c(e) {
      var t = [];
      n(t, l, e, oc(e)), rd(d, t);
    }
    function d(e) {
      _0(e, 0);
    }
    function m(e) {
      var t = pf(e);
      if (qu(t))
        return e;
    }
    function E(e, t) {
      if (e === "change")
        return t;
    }
    var w = !1;
    mn && (w = gy("input") && (!document.documentMode || document.documentMode > 9));
    function A(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", q);
    }
    function G() {
      r && (r.detachEvent("onpropertychange", q), r = null, l = null);
    }
    function q(e) {
      e.propertyName === "value" && m(l) && c(e);
    }
    function W(e, t, a) {
      e === "focusin" ? (G(), A(t, a)) : e === "focusout" && G();
    }
    function pe(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return m(l);
    }
    function Ce(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function we(e, t) {
      if (e === "click")
        return m(t);
    }
    function Nn(e, t) {
      if (e === "input" || e === "change")
        return m(t);
    }
    function k(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ue(e, "number", e.value);
    }
    function _(e, t, a, i, u, s, f) {
      var p = a ? pf(a) : window, v, y;
      if (o(p) ? v = E : Do(p) ? w ? v = Nn : (v = pe, y = W) : Ce(p) && (v = we), v) {
        var g = v(t, a);
        if (g) {
          n(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && k(p);
    }
    function L() {
      $r("onMouseEnter", ["mouseout", "mouseover"]), $r("onMouseLeave", ["mouseout", "mouseover"]), $r("onPointerEnter", ["pointerout", "pointerover"]), $r("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function ee(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !Rv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (zs(y) || sp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var D = u.ownerDocument;
          D ? g = D.defaultView || D.parentWindow : g = window;
        }
        var b, j;
        if (v) {
          var U = i.relatedTarget || i.toElement;
          if (b = a, j = U ? zs(U) : null, j !== null) {
            var H = ya(j);
            (j !== H || j.tag !== fe && j.tag !== Pe) && (j = null);
          }
        } else
          b = null, j = a;
        if (b !== j) {
          var me = Al, je = "onMouseLeave", _e = "onMouseEnter", wt = "mouse";
          (t === "pointerout" || t === "pointerover") && (me = Id, je = "onPointerLeave", _e = "onPointerEnter", wt = "pointer");
          var yt = b == null ? g : pf(b), O = j == null ? g : pf(j), P = new me(je, wt + "leave", b, i, u);
          P.target = yt, P.relatedTarget = O;
          var N = null, X = zs(u);
          if (X === a) {
            var ye = new me(_e, wt + "enter", j, i, u);
            ye.target = O, ye.relatedTarget = yt, N = ye;
          }
          k1(e, P, N, b, j);
        }
      }
    }
    function be(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var xe = typeof Object.is == "function" ? Object.is : be;
    function Oe(e, t) {
      if (xe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Qn.call(t, s) || !xe(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Ye(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function er(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Nt(e, t) {
      for (var a = Ye(e), i = 0, u = 0; a; ) {
        if (a.nodeType === zi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Ye(er(a));
      }
    }
    function Hl(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Sy(e, u, s, f, p);
    }
    function Sy(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, D = null;
      e:
        for (; ; ) {
          for (var b = null; g === t && (a === 0 || g.nodeType === zi) && (f = s + a), g === i && (u === 0 || g.nodeType === zi) && (p = s + u), g.nodeType === zi && (s += g.nodeValue.length), (b = g.firstChild) !== null; )
            D = g, g = b;
          for (; ; ) {
            if (g === e)
              break e;
            if (D === t && ++v === a && (f = s), D === i && ++y === u && (p = s), (b = g.nextSibling) !== null)
              break;
            g = D, D = g.parentNode;
          }
          g = b;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function c1(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Nt(e, f), g = Nt(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var D = a.createRange();
          D.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(D), u.extend(g.node, g.offset)) : (D.setEnd(g.node, g.offset), u.addRange(D));
        }
      }
    }
    function h0(e) {
      return e && e.nodeType === zi;
    }
    function m0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : h0(e) ? !1 : h0(t) ? m0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function f1(e) {
      return e && e.ownerDocument && m0(e.ownerDocument.documentElement, e);
    }
    function d1(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function y0() {
      for (var e = window, t = gl(); t instanceof e.HTMLIFrameElement; ) {
        if (d1(t))
          e = t.contentWindow;
        else
          return t;
        t = gl(e.document);
      }
      return t;
    }
    function Ey(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function p1() {
      var e = y0();
      return {
        focusedElem: e,
        selectionRange: Ey(e) ? h1(e) : null
      };
    }
    function v1(e) {
      var t = y0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && f1(a)) {
        i !== null && Ey(a) && m1(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Xr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function h1(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Hl(e), t || {
        start: 0,
        end: 0
      };
    }
    function m1(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : c1(e, t);
    }
    var y1 = mn && "documentMode" in document && document.documentMode <= 11;
    function g1() {
      hr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var of = null, Cy = null, qd = null, xy = !1;
    function S1(e) {
      if ("selectionStart" in e && Ey(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function E1(e) {
      return e.window === e ? e.document : e.nodeType === ei ? e : e.ownerDocument;
    }
    function g0(e, t, a) {
      var i = E1(a);
      if (!(xy || of == null || of !== gl(i))) {
        var u = S1(of);
        if (!qd || !Oe(qd, u)) {
          qd = u;
          var s = ch(Cy, "onSelect");
          if (s.length > 0) {
            var f = new wr("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = of;
          }
        }
      }
    }
    function C1(e, t, a, i, u, s, f) {
      var p = a ? pf(a) : window;
      switch (t) {
        case "focusin":
          (Do(p) || p.contentEditable === "true") && (of = p, Cy = a, qd = null);
          break;
        case "focusout":
          of = null, Cy = null, qd = null;
          break;
        case "mousedown":
          xy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          xy = !1, g0(e, i, u);
          break;
        case "selectionchange":
          if (y1)
            break;
        case "keydown":
        case "keyup":
          g0(e, i, u);
      }
    }
    function uh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var sf = {
      animationend: uh("Animation", "AnimationEnd"),
      animationiteration: uh("Animation", "AnimationIteration"),
      animationstart: uh("Animation", "AnimationStart"),
      transitionend: uh("Transition", "TransitionEnd")
    }, Ry = {}, S0 = {};
    mn && (S0 = document.createElement("div").style, "AnimationEvent" in window || (delete sf.animationend.animation, delete sf.animationiteration.animation, delete sf.animationstart.animation), "TransitionEvent" in window || delete sf.transitionend.transition);
    function oh(e) {
      if (Ry[e])
        return Ry[e];
      if (!sf[e])
        return e;
      var t = sf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in S0)
          return Ry[e] = t[a];
      return e;
    }
    var E0 = oh("animationend"), C0 = oh("animationiteration"), x0 = oh("animationstart"), R0 = oh("transitionend"), T0 = /* @__PURE__ */ new Map(), w0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function ko(e, t) {
      T0.set(e, t), hr(t, [e]);
    }
    function x1() {
      for (var e = 0; e < w0.length; e++) {
        var t = w0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        ko(a, "on" + i);
      }
      ko(E0, "onAnimationEnd"), ko(C0, "onAnimationIteration"), ko(x0, "onAnimationStart"), ko("dblclick", "onDoubleClick"), ko("focusin", "onFocus"), ko("focusout", "onBlur"), ko(R0, "onTransitionEnd");
    }
    function R1(e, t, a, i, u, s, f) {
      var p = T0.get(t);
      if (p !== void 0) {
        var v = wr, y = t;
        switch (t) {
          case "keypress":
            if (xu(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = dy;
            break;
          case "focusin":
            y = "focus", v = Xc;
            break;
          case "focusout":
            y = "blur", v = Xc;
            break;
          case "beforeblur":
          case "afterblur":
            v = Xc;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Al;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Tu;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Va;
            break;
          case E0:
          case C0:
          case x0:
            v = Jc;
            break;
          case R0:
            v = vy;
            break;
          case "scroll":
            v = Hd;
            break;
          case "wheel":
            v = ef;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = oy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Id;
            break;
        }
        var g = (s & nu) !== 0;
        {
          var D = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", b = _1(a, p, i.type, g, D);
          if (b.length > 0) {
            var j = new v(p, y, null, i, u);
            e.push({
              event: j,
              listeners: b
            });
          }
        }
      }
    }
    x1(), L(), uf(), g1(), rh();
    function T1(e, t, a, i, u, s, f) {
      R1(e, t, a, i, u, s);
      var p = (s & Km) === 0;
      p && (ee(e, t, a, i, u), _(e, t, a, i, u), C1(e, t, a, i, u), lf(e, t, a, i, u));
    }
    var Xd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Ty = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Xd));
    function b0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Hi(i, t, void 0, e), e.currentTarget = null;
    }
    function w1(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          b0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], D = g.instance, b = g.currentTarget, j = g.listener;
          if (D !== i && e.isPropagationStopped())
            return;
          b0(e, j, b), i = D;
        }
    }
    function _0(e, t) {
      for (var a = (t & nu) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        w1(s, f, a);
      }
      ud();
    }
    function b1(e, t, a, i, u) {
      var s = oc(a), f = [];
      T1(f, e, i, a, s, t), _0(f, t);
    }
    function Rn(e, t) {
      Ty.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = nT(t), u = O1(e, a);
      i.has(u) || (D0(t, e, rs, a), i.add(u));
    }
    function wy(e, t, a) {
      Ty.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= nu), D0(a, e, i, t);
    }
    var sh = "_reactListening" + Math.random().toString(36).slice(2);
    function Jd(e) {
      if (!e[sh]) {
        e[sh] = !0, ut.forEach(function(a) {
          a !== "selectionchange" && (Ty.has(a) || wy(a, !1, e), wy(a, !0, e));
        });
        var t = e.nodeType === ei ? e : e.ownerDocument;
        t !== null && (t[sh] || (t[sh] = !0, wy("selectionchange", !1, t)));
      }
    }
    function D0(e, t, a, i, u) {
      var s = Co(e, t, a), f = void 0;
      os && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Wi(e, t, s, f) : Ro(e, t, s) : f !== void 0 ? Gc(e, t, s, f) : Fd(e, t, s);
    }
    function k0(e, t) {
      return e === t || e.nodeType === jn && e.parentNode === t;
    }
    function by(e, t, a, i, u) {
      var s = i;
      if (!(t & Ai) && !(t & rs)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === te || v === ue) {
                var y = p.stateNode.containerInfo;
                if (k0(y, f))
                  break;
                if (v === ue)
                  for (var g = p.return; g !== null; ) {
                    var D = g.tag;
                    if (D === te || D === ue) {
                      var b = g.stateNode.containerInfo;
                      if (k0(b, f))
                        return;
                    }
                    g = g.return;
                  }
                for (; y !== null; ) {
                  var j = zs(y);
                  if (j === null)
                    return;
                  var U = j.tag;
                  if (U === fe || U === Pe) {
                    p = s = j;
                    continue e;
                  }
                  y = y.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      rd(function() {
        return b1(e, t, a, s);
      });
    }
    function Zd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function _1(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var D = y, b = D.stateNode, j = D.tag;
        if (j === fe && b !== null && (g = b, p !== null)) {
          var U = au(y, p);
          U != null && v.push(Zd(y, U, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function ch(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === fe && f !== null) {
          var v = f, y = au(u, a);
          y != null && i.unshift(Zd(u, y, v));
          var g = au(u, t);
          g != null && i.push(Zd(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function cf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== fe);
      return e || null;
    }
    function D1(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = cf(s))
        u++;
      for (var f = 0, p = i; p; p = cf(p))
        f++;
      for (; u - f > 0; )
        a = cf(a), u--;
      for (; f - u > 0; )
        i = cf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = cf(a), i = cf(i);
      }
      return null;
    }
    function O0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, D = v.tag;
        if (y !== null && y === i)
          break;
        if (D === fe && g !== null) {
          var b = g;
          if (u) {
            var j = au(p, s);
            j != null && f.unshift(Zd(p, j, b));
          } else if (!u) {
            var U = au(p, s);
            U != null && f.push(Zd(p, U, b));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function k1(e, t, a, i, u) {
      var s = i && u ? D1(i, u) : null;
      i !== null && O0(e, t, i, s, !1), u !== null && a !== null && O0(e, a, u, s, !0);
    }
    function O1(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Ba = !1, ep = "dangerouslySetInnerHTML", fh = "suppressContentEditableWarning", Oo = "suppressHydrationWarning", N0 = "autoFocus", Ls = "children", js = "style", dh = "__html", _y, ph, tp, M0, vh, L0, j0;
    _y = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, ph = function(e, t) {
      uc(e, t), Jf(e, t), xv(e, t, {
        registrationNameDependencies: Ht,
        possibleRegistrationNames: Br
      });
    }, L0 = mn && !document.documentMode, tp = function(e, t, a) {
      if (!Ba) {
        var i = hh(a), u = hh(t);
        u !== i && (Ba = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, M0 = function(e) {
      if (!Ba) {
        Ba = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, vh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, j0 = function(e, t) {
      var a = e.namespaceURI === ji ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var N1 = /\r\n?/g, M1 = /\u0000|\uFFFD/g;
    function hh(e) {
      Qr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(N1, `
`).replace(M1, "");
    }
    function mh(e, t, a, i) {
      var u = hh(t), s = hh(e);
      if (s !== u && (i && (Ba || (Ba = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Se))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function z0(e) {
      return e.nodeType === ei ? e : e.ownerDocument;
    }
    function L1() {
    }
    function yh(e) {
      e.onclick = L1;
    }
    function j1(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === js)
            f && Object.freeze(f), dv(t, f);
          else if (s === ep) {
            var p = f ? f[dh] : void 0;
            p != null && tv(t, p);
          } else if (s === Ls)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && rc(t, f);
            } else
              typeof f == "number" && rc(t, "" + f);
          else
            s === fh || s === Oo || s === N0 || (Ht.hasOwnProperty(s) ? f != null && (typeof f != "function" && vh(s, f), s === "onScroll" && Rn("scroll", t)) : f != null && va(t, s, f, u));
        }
    }
    function z1(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === js ? dv(e, f) : s === ep ? tv(e, f) : s === Ls ? rc(e, f) : va(e, s, f, i);
      }
    }
    function U1(e, t, a, i) {
      var u, s = z0(a), f, p = i;
      if (p === ji && (p = tc(e)), p === ji) {
        if (u = Ui(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === ji && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Qn.call(_y, e) && (_y[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function A1(e, t) {
      return z0(t).createTextNode(e);
    }
    function F1(e, t, a, i) {
      var u = Ui(t, a);
      ph(t, a);
      var s;
      switch (t) {
        case "dialog":
          Rn("cancel", e), Rn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Rn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Xd.length; f++)
            Rn(Xd[f], e);
          s = a;
          break;
        case "source":
          Rn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Rn("error", e), Rn("load", e), s = a;
          break;
        case "details":
          Rn("toggle", e), s = a;
          break;
        case "input":
          C(e, a), s = h(e, a), Rn("invalid", e);
          break;
        case "option":
          Wt(e, a), s = a;
          break;
        case "select":
          Zo(e, a), s = Jo(e, a), Rn("invalid", e);
          break;
        case "textarea":
          Jp(e, a), s = $f(e, a), Rn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (ic(t, s), j1(t, e, i, s, u), t) {
        case "input":
          ka(e), J(e, a, !1);
          break;
        case "textarea":
          ka(e), ev(e);
          break;
        case "option":
          Jt(e, a);
          break;
        case "select":
          Vf(e, a);
          break;
        default:
          typeof s.onClick == "function" && yh(e);
          break;
      }
    }
    function H1(e, t, a, i, u) {
      ph(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = Jo(e, a), p = Jo(e, i), s = [];
          break;
        case "textarea":
          f = $f(e, a), p = $f(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && yh(e);
          break;
      }
      ic(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === js) {
            var D = f[v];
            for (y in D)
              D.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else
            v === ep || v === Ls || v === fh || v === Oo || v === N0 || (Ht.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var b = p[v], j = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || b === j || b == null && j == null))
          if (v === js)
            if (b && Object.freeze(b), j) {
              for (y in j)
                j.hasOwnProperty(y) && (!b || !b.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in b)
                b.hasOwnProperty(y) && j[y] !== b[y] && (g || (g = {}), g[y] = b[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = b;
          else if (v === ep) {
            var U = b ? b[dh] : void 0, H = j ? j[dh] : void 0;
            U != null && H !== U && (s = s || []).push(v, U);
          } else
            v === Ls ? (typeof b == "string" || typeof b == "number") && (s = s || []).push(v, "" + b) : v === fh || v === Oo || (Ht.hasOwnProperty(v) ? (b != null && (typeof b != "function" && vh(v, b), v === "onScroll" && Rn("scroll", e)), !s && j !== b && (s = [])) : (s = s || []).push(v, b));
      }
      return g && (ts(g, p[js]), (s = s || []).push(js, g)), s;
    }
    function P1(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && z(e, u);
      var s = Ui(a, i), f = Ui(a, u);
      switch (z1(e, t, s, f), a) {
        case "input":
          F(e, u);
          break;
        case "textarea":
          Zp(e, u);
          break;
        case "select":
          Hm(e, u);
          break;
      }
    }
    function V1(e) {
      {
        var t = e.toLowerCase();
        return lc.hasOwnProperty(t) && lc[t] || null;
      }
    }
    function B1(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Ui(t, a), ph(t, a), t) {
        case "dialog":
          Rn("cancel", e), Rn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Rn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Xd.length; y++)
            Rn(Xd[y], e);
          break;
        case "source":
          Rn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Rn("error", e), Rn("load", e);
          break;
        case "details":
          Rn("toggle", e);
          break;
        case "input":
          C(e, a), Rn("invalid", e);
          break;
        case "option":
          Wt(e, a);
          break;
        case "select":
          Zo(e, a), Rn("invalid", e);
          break;
        case "textarea":
          Jp(e, a), Rn("invalid", e);
          break;
      }
      ic(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, D = 0; D < g.length; D++) {
          var b = g[D].name.toLowerCase();
          switch (b) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[D].name);
          }
        }
      }
      var j = null;
      for (var U in a)
        if (a.hasOwnProperty(U)) {
          var H = a[U];
          if (U === Ls)
            typeof H == "string" ? e.textContent !== H && (a[Oo] !== !0 && mh(e.textContent, H, s, f), j = [Ls, H]) : typeof H == "number" && e.textContent !== "" + H && (a[Oo] !== !0 && mh(e.textContent, H, s, f), j = [Ls, "" + H]);
          else if (Ht.hasOwnProperty(U))
            H != null && (typeof H != "function" && vh(U, H), U === "onScroll" && Rn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var me = void 0, je = p && Te ? null : _r(U);
            if (a[Oo] !== !0) {
              if (!(U === fh || U === Oo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              U === "value" || U === "checked" || U === "selected")) {
                if (U === ep) {
                  var _e = e.innerHTML, wt = H ? H[dh] : void 0;
                  if (wt != null) {
                    var yt = j0(e, wt);
                    yt !== _e && tp(U, _e, yt);
                  }
                } else if (U === js) {
                  if (v.delete(U), L0) {
                    var O = Wm(H);
                    me = e.getAttribute("style"), O !== me && tp(U, me, O);
                  }
                } else if (p && !Te)
                  v.delete(U.toLowerCase()), me = si(e, U, H), H !== me && tp(U, me, H);
                else if (!gn(U, je, p) && !Qt(U, H, je, p)) {
                  var P = !1;
                  if (je !== null)
                    v.delete(je.attributeName), me = pa(e, U, H, je);
                  else {
                    var N = i;
                    if (N === ji && (N = tc(t)), N === ji)
                      v.delete(U.toLowerCase());
                    else {
                      var X = V1(U);
                      X !== null && X !== U && (P = !0, v.delete(X)), v.delete(U);
                    }
                    me = si(e, U, H);
                  }
                  var ye = Te;
                  !ye && H !== me && !P && tp(U, me, H);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Oo] !== !0 && M0(v), t) {
        case "input":
          ka(e), J(e, a, !0);
          break;
        case "textarea":
          ka(e), ev(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && yh(e);
          break;
      }
      return j;
    }
    function $1(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Dy(e, t) {
      {
        if (Ba)
          return;
        Ba = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function ky(e, t) {
      {
        if (Ba)
          return;
        Ba = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t, a) {
      {
        if (Ba)
          return;
        Ba = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ny(e, t) {
      {
        if (t === "" || Ba)
          return;
        Ba = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function I1(e, t, a) {
      switch (t) {
        case "input":
          Fe(e, a);
          return;
        case "textarea":
          If(e, a);
          return;
        case "select":
          Pm(e, a);
          return;
      }
    }
    var np = function() {
    }, rp = function() {
    };
    {
      var Y1 = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], U0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], Q1 = U0.concat(["button"]), W1 = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], A0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      rp = function(e, t) {
        var a = dt({}, e || A0), i = {
          tag: t
        };
        return U0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Q1.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Y1.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var G1 = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return W1.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, K1 = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, F0 = {};
      np = function(e, t, a) {
        a = a || A0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = G1(e, u) ? null : i, f = s ? null : K1(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!F0[y]) {
            F0[y] = !0;
            var g = e, D = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", D = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var b = "";
              v === "table" && e === "tr" && (b += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, D, b);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var gh = "suppressHydrationWarning", Sh = "$", Eh = "/$", ap = "$?", ip = "$!", q1 = "style", My = null, Ly = null;
    function X1(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ei:
        case eu: {
          t = i === ei ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Qf(null, "");
          break;
        }
        default: {
          var s = i === jn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Qf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = rp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function J1(e, t, a) {
      {
        var i = e, u = Qf(i.namespace, t), s = rp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function gD(e) {
      return e;
    }
    function Z1(e) {
      My = Ca(), Ly = p1();
      var t = null;
      return Zn(!1), t;
    }
    function eR(e) {
      v1(Ly), Zn(My), My = null, Ly = null;
    }
    function tR(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (np(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = rp(f.ancestorInfo, e);
          np(null, p, v);
        }
        s = f.namespace;
      }
      var y = U1(e, t, a, s);
      return op(u, y), Vy(y, t), y;
    }
    function nR(e, t) {
      e.appendChild(t);
    }
    function rR(e, t, a, i, u) {
      switch (F1(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function aR(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = rp(f.ancestorInfo, t);
          np(null, p, v);
        }
      }
      return H1(e, t, a, i);
    }
    function jy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function iR(e, t, a, i) {
      {
        var u = a;
        np(null, e, u.ancestorInfo);
      }
      var s = A1(e, t);
      return op(i, s), s;
    }
    function lR() {
      var e = window.event;
      return e === void 0 ? Ii : Mr(e.type);
    }
    var zy = typeof setTimeout == "function" ? setTimeout : void 0, uR = typeof clearTimeout == "function" ? clearTimeout : void 0, Uy = -1, H0 = typeof Promise == "function" ? Promise : void 0, oR = typeof queueMicrotask == "function" ? queueMicrotask : typeof H0 < "u" ? function(e) {
      return H0.resolve(null).then(e).catch(sR);
    } : zy;
    function sR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function cR(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function fR(e, t, a, i, u, s) {
      P1(e, t, a, i, u), Vy(e, u);
    }
    function P0(e) {
      rc(e, "");
    }
    function dR(e, t, a) {
      e.nodeValue = a;
    }
    function pR(e, t) {
      e.appendChild(t);
    }
    function vR(e, t) {
      var a;
      e.nodeType === jn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && yh(a);
    }
    function hR(e, t, a) {
      e.insertBefore(t, a);
    }
    function mR(e, t, a) {
      e.nodeType === jn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function yR(e, t) {
      e.removeChild(t);
    }
    function gR(e, t) {
      e.nodeType === jn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Ay(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === jn) {
          var s = u.data;
          if (s === Eh)
            if (i === 0) {
              e.removeChild(u), mt(t);
              return;
            } else
              i--;
          else
            (s === Sh || s === ap || s === ip) && i++;
        }
        a = u;
      } while (a);
      mt(t);
    }
    function SR(e, t) {
      e.nodeType === jn ? Ay(e.parentNode, t) : e.nodeType === Xr && Ay(e, t), mt(e);
    }
    function ER(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function CR(e) {
      e.nodeValue = "";
    }
    function xR(e, t) {
      e = e;
      var a = t[q1], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = ac("display", i);
    }
    function RR(e, t) {
      e.nodeValue = t;
    }
    function TR(e) {
      e.nodeType === Xr ? e.textContent = "" : e.nodeType === ei && e.documentElement && e.removeChild(e.documentElement);
    }
    function wR(e, t, a) {
      return e.nodeType !== Xr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function bR(e, t) {
      return t === "" || e.nodeType !== zi ? null : e;
    }
    function _R(e) {
      return e.nodeType !== jn ? null : e;
    }
    function V0(e) {
      return e.data === ap;
    }
    function Fy(e) {
      return e.data === ip;
    }
    function DR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function kR(e, t) {
      e._reactRetry = t;
    }
    function Ch(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Xr || t === zi)
          break;
        if (t === jn) {
          var a = e.data;
          if (a === Sh || a === ip || a === ap)
            break;
          if (a === Eh)
            return null;
        }
      }
      return e;
    }
    function lp(e) {
      return Ch(e.nextSibling);
    }
    function OR(e) {
      return Ch(e.firstChild);
    }
    function NR(e) {
      return Ch(e.firstChild);
    }
    function MR(e) {
      return Ch(e.nextSibling);
    }
    function LR(e, t, a, i, u, s, f) {
      op(s, e), Vy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & vt) !== Ae;
      return B1(e, t, a, p, i, y, f);
    }
    function jR(e, t, a, i) {
      return op(a, e), a.mode & vt, $1(e, t);
    }
    function zR(e, t) {
      op(t, e);
    }
    function UR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === jn) {
          var i = t.data;
          if (i === Eh) {
            if (a === 0)
              return lp(t);
            a--;
          } else
            (i === Sh || i === ip || i === ap) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function B0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === jn) {
          var i = t.data;
          if (i === Sh || i === ip || i === ap) {
            if (a === 0)
              return t;
            a--;
          } else
            i === Eh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function AR(e) {
      mt(e);
    }
    function FR(e) {
      mt(e);
    }
    function HR(e) {
      return e !== "head" && e !== "body";
    }
    function PR(e, t, a, i) {
      var u = !0;
      mh(t.nodeValue, a, i, u);
    }
    function VR(e, t, a, i, u, s) {
      if (t[gh] !== !0) {
        var f = !0;
        mh(i.nodeValue, u, s, f);
      }
    }
    function BR(e, t) {
      t.nodeType === Xr ? Dy(e, t) : t.nodeType === jn || ky(e, t);
    }
    function $R(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Xr ? Dy(a, t) : t.nodeType === jn || ky(a, t));
      }
    }
    function IR(e, t, a, i, u) {
      (u || t[gh] !== !0) && (i.nodeType === Xr ? Dy(a, i) : i.nodeType === jn || ky(a, i));
    }
    function YR(e, t, a) {
      Oy(e, t);
    }
    function QR(e, t) {
      Ny(e, t);
    }
    function WR(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Oy(i, t);
      }
    }
    function GR(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ny(a, t);
      }
    }
    function KR(e, t, a, i, u, s) {
      (s || t[gh] !== !0) && Oy(a, i);
    }
    function qR(e, t, a, i, u) {
      (u || t[gh] !== !0) && Ny(a, i);
    }
    function XR(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function JR(e) {
      Jd(e);
    }
    var ff = Math.random().toString(36).slice(2), df = "__reactFiber$" + ff, Hy = "__reactProps$" + ff, up = "__reactContainer$" + ff, Py = "__reactEvents$" + ff, ZR = "__reactListeners$" + ff, eT = "__reactHandles$" + ff;
    function tT(e) {
      delete e[df], delete e[Hy], delete e[Py], delete e[ZR], delete e[eT];
    }
    function op(e, t) {
      t[df] = e;
    }
    function xh(e, t) {
      t[up] = e;
    }
    function $0(e) {
      e[up] = null;
    }
    function sp(e) {
      return !!e[up];
    }
    function zs(e) {
      var t = e[df];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[up] || a[df], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = B0(e); u !== null; ) {
              var s = u[df];
              if (s)
                return s;
              u = B0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function No(e) {
      var t = e[df] || e[up];
      return t && (t.tag === fe || t.tag === Pe || t.tag === De || t.tag === te) ? t : null;
    }
    function pf(e) {
      if (e.tag === fe || e.tag === Pe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Rh(e) {
      return e[Hy] || null;
    }
    function Vy(e, t) {
      e[Hy] = t;
    }
    function nT(e) {
      var t = e[Py];
      return t === void 0 && (t = e[Py] = /* @__PURE__ */ new Set()), t;
    }
    var I0 = {}, Y0 = M.ReactDebugCurrentFrame;
    function Th(e) {
      if (e) {
        var t = e._owner, a = vi(e.type, e._source, t ? t.type : null);
        Y0.setExtraStackFrame(a);
      } else
        Y0.setExtraStackFrame(null);
    }
    function Ki(e, t, a, i, u) {
      {
        var s = Function.call.bind(Qn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Th(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Th(null)), p instanceof Error && !(p.message in I0) && (I0[p.message] = !0, Th(u), S("Failed %s type: %s", a, p.message), Th(null));
          }
      }
    }
    var By = [], wh;
    wh = [];
    var Du = -1;
    function Mo(e) {
      return {
        current: e
      };
    }
    function la(e, t) {
      if (Du < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== wh[Du] && S("Unexpected Fiber popped."), e.current = By[Du], By[Du] = null, wh[Du] = null, Du--;
    }
    function ua(e, t, a) {
      Du++, By[Du] = e.current, wh[Du] = a, e.current = t;
    }
    var $y;
    $y = {};
    var ii = {};
    Object.freeze(ii);
    var ku = Mo(ii), Pl = Mo(!1), Iy = ii;
    function vf(e, t, a) {
      return a && Vl(t) ? Iy : ku.current;
    }
    function Q0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function hf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ii;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ke(e) || "Unknown";
          Ki(i, s, "context", p);
        }
        return u && Q0(e, t, s), s;
      }
    }
    function bh() {
      return Pl.current;
    }
    function Vl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function _h(e) {
      la(Pl, e), la(ku, e);
    }
    function Yy(e) {
      la(Pl, e), la(ku, e);
    }
    function W0(e, t, a) {
      {
        if (ku.current !== ii)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ua(ku, t, e), ua(Pl, a, e);
      }
    }
    function G0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ke(e) || "Unknown";
            $y[s] || ($y[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ke(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ke(e) || "Unknown";
          Ki(u, f, "child context", v);
        }
        return dt({}, a, f);
      }
    }
    function Dh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ii;
        return Iy = ku.current, ua(ku, a, e), ua(Pl, Pl.current, e), !0;
      }
    }
    function K0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = G0(e, t, Iy);
          i.__reactInternalMemoizedMergedChildContext = u, la(Pl, e), la(ku, e), ua(ku, u, e), ua(Pl, a, e);
        } else
          la(Pl, e), ua(Pl, a, e);
      }
    }
    function rT(e) {
      {
        if (!dd(e) || e.tag !== ce)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case te:
              return t.stateNode.context;
            case ce: {
              var a = t.type;
              if (Vl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Lo = 0, kh = 1, Ou = null, Qy = !1, Wy = !1;
    function q0(e) {
      Ou === null ? Ou = [e] : Ou.push(e);
    }
    function aT(e) {
      Qy = !0, q0(e);
    }
    function X0() {
      Qy && jo();
    }
    function jo() {
      if (!Wy && Ou !== null) {
        Wy = !0;
        var e = 0, t = Fa();
        try {
          var a = !0, i = Ou;
          for (Bn(Er); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Ou = null, Qy = !1;
        } catch (s) {
          throw Ou !== null && (Ou = Ou.slice(e + 1)), hc(yc, jo), s;
        } finally {
          Bn(t), Wy = !1;
        }
      }
      return null;
    }
    var mf = [], yf = 0, Oh = null, Nh = 0, Ri = [], Ti = 0, Us = null, Nu = 1, Mu = "";
    function iT(e) {
      return Fs(), (e.flags & sd) !== Ne;
    }
    function lT(e) {
      return Fs(), Nh;
    }
    function uT() {
      var e = Mu, t = Nu, a = t & ~oT(t);
      return a.toString(32) + e;
    }
    function As(e, t) {
      Fs(), mf[yf++] = Nh, mf[yf++] = Oh, Oh = e, Nh = t;
    }
    function J0(e, t, a) {
      Fs(), Ri[Ti++] = Nu, Ri[Ti++] = Mu, Ri[Ti++] = Us, Us = e;
      var i = Nu, u = Mu, s = Mh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Mh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, D = (f & g).toString(32), b = f >> y, j = s - y, U = Mh(t) + j, H = p << j, me = H | b, je = D + u;
        Nu = 1 << U | me, Mu = je;
      } else {
        var _e = p << s, wt = _e | f, yt = u;
        Nu = 1 << v | wt, Mu = yt;
      }
    }
    function Gy(e) {
      Fs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        As(e, a), J0(e, a, i);
      }
    }
    function Mh(e) {
      return 32 - Rc(e);
    }
    function oT(e) {
      return 1 << Mh(e) - 1;
    }
    function Ky(e) {
      for (; e === Oh; )
        Oh = mf[--yf], mf[yf] = null, Nh = mf[--yf], mf[yf] = null;
      for (; e === Us; )
        Us = Ri[--Ti], Ri[Ti] = null, Mu = Ri[--Ti], Ri[Ti] = null, Nu = Ri[--Ti], Ri[Ti] = null;
    }
    function sT() {
      return Fs(), Us !== null ? {
        id: Nu,
        overflow: Mu
      } : null;
    }
    function cT(e, t) {
      Fs(), Ri[Ti++] = Nu, Ri[Ti++] = Mu, Ri[Ti++] = Us, Nu = t.id, Mu = t.overflow, Us = e;
    }
    function Fs() {
      jr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Lr = null, wi = null, qi = !1, Hs = !1, zo = null;
    function fT() {
      qi && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function Z0() {
      Hs = !0;
    }
    function dT() {
      return Hs;
    }
    function pT(e) {
      var t = e.stateNode.containerInfo;
      return wi = NR(t), Lr = e, qi = !0, zo = null, Hs = !1, !0;
    }
    function vT(e, t, a) {
      return wi = MR(t), Lr = e, qi = !0, zo = null, Hs = !1, a !== null && cT(e, a), !0;
    }
    function eE(e, t) {
      switch (e.tag) {
        case te: {
          BR(e.stateNode.containerInfo, t);
          break;
        }
        case fe: {
          var a = (e.mode & vt) !== Ae;
          IR(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case De: {
          var i = e.memoizedState;
          i.dehydrated !== null && $R(i.dehydrated, t);
          break;
        }
      }
    }
    function tE(e, t) {
      eE(e, t);
      var a = y_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ft) : i.push(a);
    }
    function qy(e, t) {
      {
        if (Hs)
          return;
        switch (e.tag) {
          case te: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case fe:
                var i = t.type;
                t.pendingProps, YR(a, i);
                break;
              case Pe:
                var u = t.pendingProps;
                QR(a, u);
                break;
            }
            break;
          }
          case fe: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case fe: {
                var v = t.type, y = t.pendingProps, g = (e.mode & vt) !== Ae;
                KR(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case Pe: {
                var D = t.pendingProps, b = (e.mode & vt) !== Ae;
                qR(
                  s,
                  f,
                  p,
                  D,
                  // TODO: Delete this argument when we remove the legacy root API.
                  b
                );
                break;
              }
            }
            break;
          }
          case De: {
            var j = e.memoizedState, U = j.dehydrated;
            if (U !== null)
              switch (t.tag) {
                case fe:
                  var H = t.type;
                  t.pendingProps, WR(U, H);
                  break;
                case Pe:
                  var me = t.pendingProps;
                  GR(U, me);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function nE(e, t) {
      t.flags = t.flags & ~La | un, qy(e, t);
    }
    function rE(e, t) {
      switch (e.tag) {
        case fe: {
          var a = e.type;
          e.pendingProps;
          var i = wR(t, a);
          return i !== null ? (e.stateNode = i, Lr = e, wi = OR(i), !0) : !1;
        }
        case Pe: {
          var u = e.pendingProps, s = bR(t, u);
          return s !== null ? (e.stateNode = s, Lr = e, wi = null, !0) : !1;
        }
        case De: {
          var f = _R(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: sT(),
              retryLane: aa
            };
            e.memoizedState = p;
            var v = g_(f);
            return v.return = e, e.child = v, Lr = e, wi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Xy(e) {
      return (e.mode & vt) !== Ae && (e.flags & Ie) === Ne;
    }
    function Jy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Zy(e) {
      if (qi) {
        var t = wi;
        if (!t) {
          Xy(e) && (qy(Lr, e), Jy()), nE(Lr, e), qi = !1, Lr = e;
          return;
        }
        var a = t;
        if (!rE(e, t)) {
          Xy(e) && (qy(Lr, e), Jy()), t = lp(a);
          var i = Lr;
          if (!t || !rE(e, t)) {
            nE(Lr, e), qi = !1, Lr = e;
            return;
          }
          tE(i, a);
        }
      }
    }
    function hT(e, t, a) {
      var i = e.stateNode, u = !Hs, s = LR(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function mT(e) {
      var t = e.stateNode, a = e.memoizedProps, i = jR(t, a, e);
      if (i) {
        var u = Lr;
        if (u !== null)
          switch (u.tag) {
            case te: {
              var s = u.stateNode.containerInfo, f = (u.mode & vt) !== Ae;
              PR(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case fe: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & vt) !== Ae;
              VR(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function yT(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      zR(a, e);
    }
    function gT(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return UR(a);
    }
    function aE(e) {
      for (var t = e.return; t !== null && t.tag !== fe && t.tag !== te && t.tag !== De; )
        t = t.return;
      Lr = t;
    }
    function Lh(e) {
      if (e !== Lr)
        return !1;
      if (!qi)
        return aE(e), qi = !0, !1;
      if (e.tag !== te && (e.tag !== fe || HR(e.type) && !jy(e.type, e.memoizedProps))) {
        var t = wi;
        if (t)
          if (Xy(e))
            iE(e), Jy();
          else
            for (; t; )
              tE(e, t), t = lp(t);
      }
      return aE(e), e.tag === De ? wi = gT(e) : wi = Lr ? lp(e.stateNode) : null, !0;
    }
    function ST() {
      return qi && wi !== null;
    }
    function iE(e) {
      for (var t = wi; t; )
        eE(e, t), t = lp(t);
    }
    function gf() {
      Lr = null, wi = null, qi = !1, Hs = !1;
    }
    function lE() {
      zo !== null && (ex(zo), zo = null);
    }
    function jr() {
      return qi;
    }
    function eg(e) {
      zo === null ? zo = [e] : zo.push(e);
    }
    var ET = M.ReactCurrentBatchConfig, CT = null;
    function xT() {
      return ET.transition;
    }
    var Xi = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var RT = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Cn && (t = a), a = a.return;
        return t;
      }, Ps = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, cp = [], fp = [], dp = [], pp = [], vp = [], hp = [], Vs = /* @__PURE__ */ new Set();
      Xi.recordUnsafeLifecycleWarnings = function(e, t) {
        Vs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && cp.push(e), e.mode & Cn && typeof t.UNSAFE_componentWillMount == "function" && fp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & Cn && typeof t.UNSAFE_componentWillReceiveProps == "function" && pp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & Cn && typeof t.UNSAFE_componentWillUpdate == "function" && hp.push(e));
      }, Xi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        cp.length > 0 && (cp.forEach(function(b) {
          e.add(Ke(b) || "Component"), Vs.add(b.type);
        }), cp = []);
        var t = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(b) {
          t.add(Ke(b) || "Component"), Vs.add(b.type);
        }), fp = []);
        var a = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(b) {
          a.add(Ke(b) || "Component"), Vs.add(b.type);
        }), dp = []);
        var i = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(b) {
          i.add(Ke(b) || "Component"), Vs.add(b.type);
        }), pp = []);
        var u = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(b) {
          u.add(Ke(b) || "Component"), Vs.add(b.type);
        }), vp = []);
        var s = /* @__PURE__ */ new Set();
        if (hp.length > 0 && (hp.forEach(function(b) {
          s.add(Ke(b) || "Component"), Vs.add(b.type);
        }), hp = []), t.size > 0) {
          var f = Ps(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Ps(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Ps(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Ps(e);
          ge(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Ps(a);
          ge(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var D = Ps(u);
          ge(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, D);
        }
      };
      var jh = /* @__PURE__ */ new Map(), uE = /* @__PURE__ */ new Set();
      Xi.recordLegacyContextWarning = function(e, t) {
        var a = RT(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!uE.has(e.type)) {
          var i = jh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], jh.set(a, i)), i.push(e));
        }
      }, Xi.flushLegacyContextWarning = function() {
        jh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ke(s) || "Component"), uE.add(s.type);
            });
            var u = Ps(i);
            try {
              $t(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Tn();
            }
          }
        });
      }, Xi.discardPendingWarnings = function() {
        cp = [], fp = [], dp = [], pp = [], vp = [], hp = [], jh = /* @__PURE__ */ new Map();
      };
    }
    function Ji(e, t) {
      if (e && e.defaultProps) {
        var a = dt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var tg = Mo(null), ng;
    ng = {};
    var zh = null, Sf = null, rg = null, Uh = !1;
    function Ah() {
      zh = null, Sf = null, rg = null, Uh = !1;
    }
    function oE() {
      Uh = !0;
    }
    function sE() {
      Uh = !1;
    }
    function cE(e, t, a) {
      ua(tg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== ng && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = ng;
    }
    function ag(e, t) {
      var a = tg.current;
      la(tg, t), e._currentValue = a;
    }
    function ig(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (yu(i.childLanes, t) ? u !== null && !yu(u.childLanes, t) && (u.childLanes = rt(u.childLanes, t)) : (i.childLanes = rt(i.childLanes, t), u !== null && (u.childLanes = rt(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function TT(e, t, a) {
      wT(e, t, a);
    }
    function wT(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ce) {
                var p = Vn(a), v = Lu(en, p);
                v.tag = Hh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, D = g.pending;
                  D === null ? v.next = v : (v.next = D.next, D.next = v), g.pending = v;
                }
              }
              i.lanes = rt(i.lanes, a);
              var b = i.alternate;
              b !== null && (b.lanes = rt(b.lanes, a)), ig(i.return, a, e), s.lanes = rt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === at)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Ut) {
          var j = i.return;
          if (j === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          j.lanes = rt(j.lanes, a);
          var U = j.alternate;
          U !== null && (U.lanes = rt(U.lanes, a)), ig(j, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var H = u.sibling;
            if (H !== null) {
              H.return = u.return, u = H;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Ef(e, t) {
      zh = e, Sf = null, rg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ia(a.lanes, t) && kp(), a.firstContext = null);
      }
    }
    function tr(e) {
      Uh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (rg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Sf === null) {
          if (zh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Sf = a, zh.dependencies = {
            lanes: V,
            firstContext: a
          };
        } else
          Sf = Sf.next = a;
      }
      return t;
    }
    var Bs = null;
    function lg(e) {
      Bs === null ? Bs = [e] : Bs.push(e);
    }
    function bT() {
      if (Bs !== null) {
        for (var e = 0; e < Bs.length; e++) {
          var t = Bs[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Bs = null;
      }
    }
    function fE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, lg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Fh(e, i);
    }
    function _T(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, lg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function DT(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, lg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Fh(e, i);
    }
    function $a(e, t) {
      return Fh(e, t);
    }
    var kT = Fh;
    function Fh(e, t) {
      e.lanes = rt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = rt(a.lanes, t)), a === null && (e.flags & (un | La)) !== Ne && dx(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = rt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = rt(a.childLanes, t) : (u.flags & (un | La)) !== Ne && dx(e), i = u, u = u.return;
      if (i.tag === te) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var dE = 0, pE = 1, Hh = 2, ug = 3, Ph = !1, og, Vh;
    og = !1, Vh = null;
    function sg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: V
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function vE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Lu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: dE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Uo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Vh === u && !og && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), og = !0), kb()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, kT(e, a);
      } else
        return DT(e, u, t, a);
    }
    function Bh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (wd(a)) {
          var s = u.lanes;
          s = _d(s, e.pendingLanes);
          var f = rt(s, a);
          u.lanes = f, mo(e, f);
        }
      }
    }
    function cg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function OT(e, t, a, i, u, s) {
      switch (a.tag) {
        case pE: {
          var f = a.payload;
          if (typeof f == "function") {
            oE();
            var p = f.call(s, i, u);
            {
              if (e.mode & Cn) {
                Pn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Pn(!1);
                }
              }
              sE();
            }
            return p;
          }
          return f;
        }
        case ug:
          e.flags = e.flags & ~qn | Ie;
        case dE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            oE(), y = v.call(s, i, u);
            {
              if (e.mode & Cn) {
                Pn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Pn(!1);
                }
              }
              sE();
            }
          } else
            y = v;
          return y == null ? i : dt({}, i, y);
        }
        case Hh:
          return Ph = !0, i;
      }
      return i;
    }
    function $h(e, t, a, i) {
      var u = e.updateQueue;
      Ph = !1, Vh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var D = g.updateQueue, b = D.lastBaseUpdate;
          b !== f && (b === null ? D.firstBaseUpdate = y : b.next = y, D.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var j = u.baseState, U = V, H = null, me = null, je = null, _e = s;
        do {
          var wt = _e.lane, yt = _e.eventTime;
          if (yu(i, wt)) {
            if (je !== null) {
              var P = {
                eventTime: yt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Rt,
                tag: _e.tag,
                payload: _e.payload,
                callback: _e.callback,
                next: null
              };
              je = je.next = P;
            }
            j = OT(e, u, _e, j, t, a);
            var N = _e.callback;
            if (N !== null && // If the update was already committed, we should not queue its
            // callback again.
            _e.lane !== Rt) {
              e.flags |= yi;
              var X = u.effects;
              X === null ? u.effects = [_e] : X.push(_e);
            }
          } else {
            var O = {
              eventTime: yt,
              lane: wt,
              tag: _e.tag,
              payload: _e.payload,
              callback: _e.callback,
              next: null
            };
            je === null ? (me = je = O, H = j) : je = je.next = O, U = rt(U, wt);
          }
          if (_e = _e.next, _e === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ye = p, de = ye.next;
            ye.next = null, _e = de, u.lastBaseUpdate = ye, u.shared.pending = null;
          }
        } while (!0);
        je === null && (H = j), u.baseState = H, u.firstBaseUpdate = me, u.lastBaseUpdate = je;
        var $e = u.shared.interleaved;
        if ($e !== null) {
          var Je = $e;
          do
            U = rt(U, Je.lane), Je = Je.next;
          while (Je !== $e);
        } else
          s === null && (u.shared.lanes = V);
        Vp(U), e.lanes = U, e.memoizedState = j;
      }
      Vh = null;
    }
    function NT(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function hE() {
      Ph = !1;
    }
    function Ih() {
      return Ph;
    }
    function mE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, NT(f, a));
        }
    }
    var fg = {}, yE = new I.Component().refs, dg, pg, vg, hg, mg, gE, Yh, yg, gg, Sg;
    {
      dg = /* @__PURE__ */ new Set(), pg = /* @__PURE__ */ new Set(), vg = /* @__PURE__ */ new Set(), hg = /* @__PURE__ */ new Set(), yg = /* @__PURE__ */ new Set(), mg = /* @__PURE__ */ new Set(), gg = /* @__PURE__ */ new Set(), Sg = /* @__PURE__ */ new Set();
      var SE = /* @__PURE__ */ new Set();
      Yh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          SE.has(a) || (SE.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, gE = function(e, t) {
        if (t === void 0) {
          var a = kt(e) || "Component";
          mg.has(a) || (mg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(fg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(fg);
    }
    function Eg(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Cn) {
          Pn(!0);
          try {
            s = a(i, u);
          } finally {
            Pn(!1);
          }
        }
        gE(t, s);
      }
      var f = s == null ? u : dt({}, u, s);
      if (e.memoizedState = f, e.lanes === V) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var Cg = {
      isMounted: ga,
      enqueueSetState: function(e, t, a) {
        var i = Na(e), u = Ta(), s = Io(i), f = Lu(u, s);
        f.payload = t, a != null && (Yh(a, "setState"), f.callback = a);
        var p = Uo(i, f, s);
        p !== null && (vr(p, i, s, u), Bh(p, i, s)), Nl(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Na(e), u = Ta(), s = Io(i), f = Lu(u, s);
        f.tag = pE, f.payload = t, a != null && (Yh(a, "replaceState"), f.callback = a);
        var p = Uo(i, f, s);
        p !== null && (vr(p, i, s, u), Bh(p, i, s)), Nl(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Na(e), i = Ta(), u = Io(a), s = Lu(i, u);
        s.tag = Hh, t != null && (Yh(t, "forceUpdate"), s.callback = t);
        var f = Uo(a, s, u);
        f !== null && (vr(f, a, u, i), Bh(f, a, u)), Cd(a, u);
      }
    };
    function EE(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Cn) {
            Pn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Pn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", kt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Oe(a, i) || !Oe(u, s) : !0;
    }
    function MT(e, t, a) {
      var i = e.stateNode;
      {
        var u = kt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !gg.has(t) && (gg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", kt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !vg.has(t) && (vg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", kt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || Et(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function CE(e, t) {
      t.updater = Cg, e.stateNode = t, io(t, e), t._reactInternalInstance = fg;
    }
    function xE(e, t, a) {
      var i = !1, u = ii, s = ii, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === re && f._context === void 0
        );
        if (!p && !Sg.has(t)) {
          Sg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Q ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", kt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = tr(f);
      else {
        u = vf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? hf(e, u) : ii;
      }
      var g = new t(a, s);
      if (e.mode & Cn) {
        Pn(!0);
        try {
          g = new t(a, s);
        } finally {
          Pn(!1);
        }
      }
      var D = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      CE(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && D === null) {
          var b = kt(t) || "Component";
          pg.has(b) || (pg.add(b), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", b, g.state === null ? "null" : "undefined", b));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var j = null, U = null, H = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? j = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (j = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? U = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (U = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? H = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (H = "UNSAFE_componentWillUpdate"), j !== null || U !== null || H !== null) {
            var me = kt(t) || "Component", je = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            hg.has(me) || (hg.add(me), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, me, je, j !== null ? `
  ` + j : "", U !== null ? `
  ` + U : "", H !== null ? `
  ` + H : ""));
          }
        }
      }
      return i && Q0(e, u, s), g;
    }
    function LT(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ke(e) || "Component"), Cg.enqueueReplaceState(t, t.state, null));
    }
    function RE(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ke(e) || "Component";
          dg.has(s) || (dg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Cg.enqueueReplaceState(t, t.state, null);
      }
    }
    function xg(e, t, a, i) {
      MT(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = yE, sg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = tr(s);
      else {
        var f = vf(e, t, !0);
        u.context = hf(e, f);
      }
      {
        if (u.state === a) {
          var p = kt(t) || "Component";
          yg.has(p) || (yg.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Cn && Xi.recordLegacyContextWarning(e, u), Xi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (Eg(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (LT(e, u), $h(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = nt;
        y |= Zr, (e.mode & Ua) !== Ae && (y |= ea), e.flags |= y;
      }
    }
    function jT(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ii;
      if (typeof p == "object" && p !== null)
        v = tr(p);
      else {
        var y = vf(e, t, !0);
        v = hf(e, y);
      }
      var g = t.getDerivedStateFromProps, D = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !D && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && RE(e, u, a, v), hE();
      var b = e.memoizedState, j = u.state = b;
      if ($h(e, a, u, i), j = e.memoizedState, s === a && b === j && !bh() && !Ih()) {
        if (typeof u.componentDidMount == "function") {
          var U = nt;
          U |= Zr, (e.mode & Ua) !== Ae && (U |= ea), e.flags |= U;
        }
        return !1;
      }
      typeof g == "function" && (Eg(e, t, g, a), j = e.memoizedState);
      var H = Ih() || EE(e, t, s, a, b, j, v);
      if (H) {
        if (!D && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var me = nt;
          me |= Zr, (e.mode & Ua) !== Ae && (me |= ea), e.flags |= me;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var je = nt;
          je |= Zr, (e.mode & Ua) !== Ae && (je |= ea), e.flags |= je;
        }
        e.memoizedProps = a, e.memoizedState = j;
      }
      return u.props = a, u.state = j, u.context = v, H;
    }
    function zT(e, t, a, i, u) {
      var s = t.stateNode;
      vE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : Ji(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, D = ii;
      if (typeof g == "object" && g !== null)
        D = tr(g);
      else {
        var b = vf(t, a, !0);
        D = hf(t, b);
      }
      var j = a.getDerivedStateFromProps, U = typeof j == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !U && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== D) && RE(t, s, i, D), hE();
      var H = t.memoizedState, me = s.state = H;
      if ($h(t, i, s, u), me = t.memoizedState, f === v && H === me && !bh() && !Ih() && !K)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= nt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Ma), !1;
      typeof j == "function" && (Eg(t, a, j, i), me = t.memoizedState);
      var je = Ih() || EE(t, a, p, i, H, me, D) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      K;
      return je ? (!U && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, me, D), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, me, D)), typeof s.componentDidUpdate == "function" && (t.flags |= nt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Ma)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= nt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Ma), t.memoizedProps = i, t.memoizedState = me), s.props = i, s.state = me, s.context = D, je;
    }
    var Rg, Tg, wg, bg, _g, TE = function(e, t) {
    };
    Rg = !1, Tg = !1, wg = {}, bg = {}, _g = {}, TE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ke(t) || "Component";
        bg[a] || (bg[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function mp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Cn || Me) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = Ke(e) || "Component";
          wg[u] || (S('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), wg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== ce)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Wn(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(D) {
            var b = v.refs;
            b === yE && (b = v.refs = {}), D === null ? delete b[y] : b[y] = D;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Qh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Wh(e) {
      {
        var t = Ke(e) || "Component";
        if (_g[t])
          return;
        _g[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function wE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function bE(e) {
      function t(O, P) {
        if (e) {
          var N = O.deletions;
          N === null ? (O.deletions = [P], O.flags |= Ft) : N.push(P);
        }
      }
      function a(O, P) {
        if (!e)
          return null;
        for (var N = P; N !== null; )
          t(O, N), N = N.sibling;
        return null;
      }
      function i(O, P) {
        for (var N = /* @__PURE__ */ new Map(), X = P; X !== null; )
          X.key !== null ? N.set(X.key, X) : N.set(X.index, X), X = X.sibling;
        return N;
      }
      function u(O, P) {
        var N = qs(O, P);
        return N.index = 0, N.sibling = null, N;
      }
      function s(O, P, N) {
        if (O.index = N, !e)
          return O.flags |= sd, P;
        var X = O.alternate;
        if (X !== null) {
          var ye = X.index;
          return ye < P ? (O.flags |= un, P) : ye;
        } else
          return O.flags |= un, P;
      }
      function f(O) {
        return e && O.alternate === null && (O.flags |= un), O;
      }
      function p(O, P, N, X) {
        if (P === null || P.tag !== Pe) {
          var ye = e0(N, O.mode, X);
          return ye.return = O, ye;
        } else {
          var de = u(P, N);
          return de.return = O, de;
        }
      }
      function v(O, P, N, X) {
        var ye = N.type;
        if (ye === ha)
          return g(O, P, N.props.children, X, N.key);
        if (P !== null && (P.elementType === ye || // Keep this check inline so it only runs on the false path:
        mx(P, N) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ye == "object" && ye !== null && ye.$$typeof === Le && wE(ye) === P.type)) {
          var de = u(P, N.props);
          return de.ref = mp(O, P, N), de.return = O, de._debugSource = N._source, de._debugOwner = N._owner, de;
        }
        var $e = ZS(N, O.mode, X);
        return $e.ref = mp(O, P, N), $e.return = O, $e;
      }
      function y(O, P, N, X) {
        if (P === null || P.tag !== ue || P.stateNode.containerInfo !== N.containerInfo || P.stateNode.implementation !== N.implementation) {
          var ye = t0(N, O.mode, X);
          return ye.return = O, ye;
        } else {
          var de = u(P, N.children || []);
          return de.return = O, de;
        }
      }
      function g(O, P, N, X, ye) {
        if (P === null || P.tag !== gt) {
          var de = Qo(N, O.mode, X, ye);
          return de.return = O, de;
        } else {
          var $e = u(P, N);
          return $e.return = O, $e;
        }
      }
      function D(O, P, N) {
        if (typeof P == "string" && P !== "" || typeof P == "number") {
          var X = e0("" + P, O.mode, N);
          return X.return = O, X;
        }
        if (typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case ci: {
              var ye = ZS(P, O.mode, N);
              return ye.ref = mp(O, null, P), ye.return = O, ye;
            }
            case Dr: {
              var de = t0(P, O.mode, N);
              return de.return = O, de;
            }
            case Le: {
              var $e = P._payload, Je = P._init;
              return D(O, Je($e), N);
            }
          }
          if (Et(P) || qa(P)) {
            var qt = Qo(P, O.mode, N, null);
            return qt.return = O, qt;
          }
          Qh(O, P);
        }
        return typeof P == "function" && Wh(O), null;
      }
      function b(O, P, N, X) {
        var ye = P !== null ? P.key : null;
        if (typeof N == "string" && N !== "" || typeof N == "number")
          return ye !== null ? null : p(O, P, "" + N, X);
        if (typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case ci:
              return N.key === ye ? v(O, P, N, X) : null;
            case Dr:
              return N.key === ye ? y(O, P, N, X) : null;
            case Le: {
              var de = N._payload, $e = N._init;
              return b(O, P, $e(de), X);
            }
          }
          if (Et(N) || qa(N))
            return ye !== null ? null : g(O, P, N, X, null);
          Qh(O, N);
        }
        return typeof N == "function" && Wh(O), null;
      }
      function j(O, P, N, X, ye) {
        if (typeof X == "string" && X !== "" || typeof X == "number") {
          var de = O.get(N) || null;
          return p(P, de, "" + X, ye);
        }
        if (typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case ci: {
              var $e = O.get(X.key === null ? N : X.key) || null;
              return v(P, $e, X, ye);
            }
            case Dr: {
              var Je = O.get(X.key === null ? N : X.key) || null;
              return y(P, Je, X, ye);
            }
            case Le:
              var qt = X._payload, jt = X._init;
              return j(O, P, N, jt(qt), ye);
          }
          if (Et(X) || qa(X)) {
            var Yn = O.get(N) || null;
            return g(P, Yn, X, ye, null);
          }
          Qh(P, X);
        }
        return typeof X == "function" && Wh(P), null;
      }
      function U(O, P, N) {
        {
          if (typeof O != "object" || O === null)
            return P;
          switch (O.$$typeof) {
            case ci:
            case Dr:
              TE(O, N);
              var X = O.key;
              if (typeof X != "string")
                break;
              if (P === null) {
                P = /* @__PURE__ */ new Set(), P.add(X);
                break;
              }
              if (!P.has(X)) {
                P.add(X);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", X);
              break;
            case Le:
              var ye = O._payload, de = O._init;
              U(de(ye), P, N);
              break;
          }
        }
        return P;
      }
      function H(O, P, N, X) {
        for (var ye = null, de = 0; de < N.length; de++) {
          var $e = N[de];
          ye = U($e, ye, O);
        }
        for (var Je = null, qt = null, jt = P, Yn = 0, zt = 0, An = null; jt !== null && zt < N.length; zt++) {
          jt.index > zt ? (An = jt, jt = null) : An = jt.sibling;
          var sa = b(O, jt, N[zt], X);
          if (sa === null) {
            jt === null && (jt = An);
            break;
          }
          e && jt && sa.alternate === null && t(O, jt), Yn = s(sa, Yn, zt), qt === null ? Je = sa : qt.sibling = sa, qt = sa, jt = An;
        }
        if (zt === N.length) {
          if (a(O, jt), jr()) {
            var Vr = zt;
            As(O, Vr);
          }
          return Je;
        }
        if (jt === null) {
          for (; zt < N.length; zt++) {
            var ui = D(O, N[zt], X);
            ui !== null && (Yn = s(ui, Yn, zt), qt === null ? Je = ui : qt.sibling = ui, qt = ui);
          }
          if (jr()) {
            var wa = zt;
            As(O, wa);
          }
          return Je;
        }
        for (var ba = i(O, jt); zt < N.length; zt++) {
          var ca = j(ba, O, zt, N[zt], X);
          ca !== null && (e && ca.alternate !== null && ba.delete(ca.key === null ? zt : ca.key), Yn = s(ca, Yn, zt), qt === null ? Je = ca : qt.sibling = ca, qt = ca);
        }
        if (e && ba.forEach(function(Af) {
          return t(O, Af);
        }), jr()) {
          var Hu = zt;
          As(O, Hu);
        }
        return Je;
      }
      function me(O, P, N, X) {
        var ye = qa(N);
        if (typeof ye != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          N[Symbol.toStringTag] === "Generator" && (Tg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Tg = !0), N.entries === ye && (Rg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Rg = !0);
          var de = ye.call(N);
          if (de)
            for (var $e = null, Je = de.next(); !Je.done; Je = de.next()) {
              var qt = Je.value;
              $e = U(qt, $e, O);
            }
        }
        var jt = ye.call(N);
        if (jt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Yn = null, zt = null, An = P, sa = 0, Vr = 0, ui = null, wa = jt.next(); An !== null && !wa.done; Vr++, wa = jt.next()) {
          An.index > Vr ? (ui = An, An = null) : ui = An.sibling;
          var ba = b(O, An, wa.value, X);
          if (ba === null) {
            An === null && (An = ui);
            break;
          }
          e && An && ba.alternate === null && t(O, An), sa = s(ba, sa, Vr), zt === null ? Yn = ba : zt.sibling = ba, zt = ba, An = ui;
        }
        if (wa.done) {
          if (a(O, An), jr()) {
            var ca = Vr;
            As(O, ca);
          }
          return Yn;
        }
        if (An === null) {
          for (; !wa.done; Vr++, wa = jt.next()) {
            var Hu = D(O, wa.value, X);
            Hu !== null && (sa = s(Hu, sa, Vr), zt === null ? Yn = Hu : zt.sibling = Hu, zt = Hu);
          }
          if (jr()) {
            var Af = Vr;
            As(O, Af);
          }
          return Yn;
        }
        for (var Qp = i(O, An); !wa.done; Vr++, wa = jt.next()) {
          var Kl = j(Qp, O, Vr, wa.value, X);
          Kl !== null && (e && Kl.alternate !== null && Qp.delete(Kl.key === null ? Vr : Kl.key), sa = s(Kl, sa, Vr), zt === null ? Yn = Kl : zt.sibling = Kl, zt = Kl);
        }
        if (e && Qp.forEach(function(K_) {
          return t(O, K_);
        }), jr()) {
          var G_ = Vr;
          As(O, G_);
        }
        return Yn;
      }
      function je(O, P, N, X) {
        if (P !== null && P.tag === Pe) {
          a(O, P.sibling);
          var ye = u(P, N);
          return ye.return = O, ye;
        }
        a(O, P);
        var de = e0(N, O.mode, X);
        return de.return = O, de;
      }
      function _e(O, P, N, X) {
        for (var ye = N.key, de = P; de !== null; ) {
          if (de.key === ye) {
            var $e = N.type;
            if ($e === ha) {
              if (de.tag === gt) {
                a(O, de.sibling);
                var Je = u(de, N.props.children);
                return Je.return = O, Je._debugSource = N._source, Je._debugOwner = N._owner, Je;
              }
            } else if (de.elementType === $e || // Keep this check inline so it only runs on the false path:
            mx(de, N) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof $e == "object" && $e !== null && $e.$$typeof === Le && wE($e) === de.type) {
              a(O, de.sibling);
              var qt = u(de, N.props);
              return qt.ref = mp(O, de, N), qt.return = O, qt._debugSource = N._source, qt._debugOwner = N._owner, qt;
            }
            a(O, de);
            break;
          } else
            t(O, de);
          de = de.sibling;
        }
        if (N.type === ha) {
          var jt = Qo(N.props.children, O.mode, X, N.key);
          return jt.return = O, jt;
        } else {
          var Yn = ZS(N, O.mode, X);
          return Yn.ref = mp(O, P, N), Yn.return = O, Yn;
        }
      }
      function wt(O, P, N, X) {
        for (var ye = N.key, de = P; de !== null; ) {
          if (de.key === ye)
            if (de.tag === ue && de.stateNode.containerInfo === N.containerInfo && de.stateNode.implementation === N.implementation) {
              a(O, de.sibling);
              var $e = u(de, N.children || []);
              return $e.return = O, $e;
            } else {
              a(O, de);
              break;
            }
          else
            t(O, de);
          de = de.sibling;
        }
        var Je = t0(N, O.mode, X);
        return Je.return = O, Je;
      }
      function yt(O, P, N, X) {
        var ye = typeof N == "object" && N !== null && N.type === ha && N.key === null;
        if (ye && (N = N.props.children), typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case ci:
              return f(_e(O, P, N, X));
            case Dr:
              return f(wt(O, P, N, X));
            case Le:
              var de = N._payload, $e = N._init;
              return yt(O, P, $e(de), X);
          }
          if (Et(N))
            return H(O, P, N, X);
          if (qa(N))
            return me(O, P, N, X);
          Qh(O, N);
        }
        return typeof N == "string" && N !== "" || typeof N == "number" ? f(je(O, P, "" + N, X)) : (typeof N == "function" && Wh(O), a(O, P));
      }
      return yt;
    }
    var Cf = bE(!0), _E = bE(!1);
    function UT(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = qs(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = qs(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function AT(e, t) {
      for (var a = e.child; a !== null; )
        d_(a, t), a = a.sibling;
    }
    var yp = {}, Ao = Mo(yp), gp = Mo(yp), Gh = Mo(yp);
    function Kh(e) {
      if (e === yp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function DE() {
      var e = Kh(Gh.current);
      return e;
    }
    function Dg(e, t) {
      ua(Gh, t, e), ua(gp, e, e), ua(Ao, yp, e);
      var a = X1(t);
      la(Ao, e), ua(Ao, a, e);
    }
    function xf(e) {
      la(Ao, e), la(gp, e), la(Gh, e);
    }
    function kg() {
      var e = Kh(Ao.current);
      return e;
    }
    function kE(e) {
      Kh(Gh.current);
      var t = Kh(Ao.current), a = J1(t, e.type);
      t !== a && (ua(gp, e, e), ua(Ao, a, e));
    }
    function Og(e) {
      gp.current === e && (la(Ao, e), la(gp, e));
    }
    var FT = 0, OE = 1, NE = 1, Sp = 2, Zi = Mo(FT);
    function Ng(e, t) {
      return (e & t) !== 0;
    }
    function Rf(e) {
      return e & OE;
    }
    function Mg(e, t) {
      return e & OE | t;
    }
    function HT(e, t) {
      return e | t;
    }
    function Fo(e, t) {
      ua(Zi, t, e);
    }
    function Tf(e) {
      la(Zi, e);
    }
    function PT(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function qh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === De) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || V0(i) || Fy(i))
              return t;
          }
        } else if (t.tag === _t && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Ie) !== Ne;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ia = (
      /*   */
      0
    ), ur = (
      /* */
      1
    ), Bl = (
      /*  */
      2
    ), or = (
      /*    */
      4
    ), zr = (
      /*   */
      8
    ), Lg = [];
    function jg() {
      for (var e = 0; e < Lg.length; e++) {
        var t = Lg[e];
        t._workInProgressVersionPrimary = null;
      }
      Lg.length = 0;
    }
    function VT(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ve = M.ReactCurrentDispatcher, Ep = M.ReactCurrentBatchConfig, zg, wf;
    zg = /* @__PURE__ */ new Set();
    var $s = V, Kt = null, sr = null, cr = null, Xh = !1, Cp = !1, xp = 0, BT = 0, $T = 25, $ = null, bi = null, Ho = -1, Ug = !1;
    function Yt() {
      {
        var e = $;
        bi === null ? bi = [e] : bi.push(e);
      }
    }
    function ie() {
      {
        var e = $;
        bi !== null && (Ho++, bi[Ho] !== e && IT(e));
      }
    }
    function bf(e) {
      e != null && !Et(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", $, typeof e);
    }
    function IT(e) {
      {
        var t = Ke(Kt);
        if (!zg.has(t) && (zg.add(t), bi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Ho; u++) {
            for (var s = bi[u], f = u === Ho ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function oa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Ag(e, t) {
      if (Ug)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", $), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, $, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!xe(e[a], t[a]))
          return !1;
      return !0;
    }
    function _f(e, t, a, i, u, s) {
      $s = s, Kt = t, bi = e !== null ? e._debugHookTypes : null, Ho = -1, Ug = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = V, e !== null && e.memoizedState !== null ? ve.current = ZE : bi !== null ? ve.current = JE : ve.current = XE;
      var f = a(i, u);
      if (Cp) {
        var p = 0;
        do {
          if (Cp = !1, xp = 0, p >= $T)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Ug = !1, sr = null, cr = null, t.updateQueue = null, Ho = -1, ve.current = eC, f = a(i, u);
        } while (Cp);
      }
      ve.current = cm, t._debugHookTypes = bi;
      var v = sr !== null && sr.next !== null;
      if ($s = V, Kt = null, sr = null, cr = null, $ = null, bi = null, Ho = -1, e !== null && (e.flags & ar) !== (t.flags & ar) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & vt) !== Ae && S("Internal React error: Expected static flag was missing. Please notify the React team."), Xh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Df() {
      var e = xp !== 0;
      return xp = 0, e;
    }
    function ME(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ua) !== Ae ? t.flags &= ~(uu | ea | dn | nt) : t.flags &= ~(dn | nt), e.lanes = ho(e.lanes, a);
    }
    function LE() {
      if (ve.current = cm, Xh) {
        for (var e = Kt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Xh = !1;
      }
      $s = V, Kt = null, sr = null, cr = null, bi = null, Ho = -1, $ = null, QE = !1, Cp = !1, xp = 0;
    }
    function $l() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return cr === null ? Kt.memoizedState = cr = e : cr = cr.next = e, cr;
    }
    function _i() {
      var e;
      if (sr === null) {
        var t = Kt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = sr.next;
      var a;
      if (cr === null ? a = Kt.memoizedState : a = cr.next, a !== null)
        cr = a, a = cr.next, sr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        sr = e;
        var i = {
          memoizedState: sr.memoizedState,
          baseState: sr.baseState,
          baseQueue: sr.baseQueue,
          queue: sr.queue,
          next: null
        };
        cr === null ? Kt.memoizedState = cr = i : cr = cr.next = i;
      }
      return cr;
    }
    function jE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Fg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Hg(e, t, a) {
      var i = $l(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: V,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = GT.bind(null, Kt, s);
      return [i.memoizedState, f];
    }
    function Pg(e, t, a) {
      var i = _i(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = sr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, D = s.baseState, b = null, j = null, U = null, H = g;
        do {
          var me = H.lane;
          if (yu($s, me)) {
            if (U !== null) {
              var _e = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Rt,
                action: H.action,
                hasEagerState: H.hasEagerState,
                eagerState: H.eagerState,
                next: null
              };
              U = U.next = _e;
            }
            if (H.hasEagerState)
              D = H.eagerState;
            else {
              var wt = H.action;
              D = e(D, wt);
            }
          } else {
            var je = {
              lane: me,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            };
            U === null ? (j = U = je, b = D) : U = U.next = je, Kt.lanes = rt(Kt.lanes, me), Vp(me);
          }
          H = H.next;
        } while (H !== null && H !== g);
        U === null ? b = D : U.next = j, xe(D, i.memoizedState) || kp(), i.memoizedState = D, i.baseState = b, i.baseQueue = U, u.lastRenderedState = D;
      }
      var yt = u.interleaved;
      if (yt !== null) {
        var O = yt;
        do {
          var P = O.lane;
          Kt.lanes = rt(Kt.lanes, P), Vp(P), O = O.next;
        } while (O !== yt);
      } else
        f === null && (u.lanes = V);
      var N = u.dispatch;
      return [i.memoizedState, N];
    }
    function Vg(e, t, a) {
      var i = _i(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        xe(p, i.memoizedState) || kp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function SD(e, t, a) {
    }
    function ED(e, t, a) {
    }
    function Bg(e, t, a) {
      var i = Kt, u = $l(), s, f = jr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), wf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), wf = !0);
      } else {
        if (s = t(), !wf) {
          var p = t();
          xe(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), wf = !0);
        }
        var v = Dm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Es(v, $s) || zE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, nm(AE.bind(null, i, y, e), [e]), i.flags |= dn, Rp(ur | zr, UE.bind(null, i, y, s, t), void 0, null), s;
    }
    function Jh(e, t, a) {
      var i = Kt, u = _i(), s = t();
      if (!wf) {
        var f = t();
        xe(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), wf = !0);
      }
      var p = u.memoizedState, v = !xe(p, s);
      v && (u.memoizedState = s, kp());
      var y = u.queue;
      if (wp(AE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      cr !== null && cr.memoizedState.tag & ur) {
        i.flags |= dn, Rp(ur | zr, UE.bind(null, i, y, s, t), void 0, null);
        var g = Dm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Es(g, $s) || zE(i, t, s);
      }
      return s;
    }
    function zE(e, t, a) {
      e.flags |= fs;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Kt.updateQueue;
      if (u === null)
        u = jE(), Kt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function UE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, FE(t) && HE(e);
    }
    function AE(e, t, a) {
      var i = function() {
        FE(t) && HE(e);
      };
      return a(i);
    }
    function FE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !xe(a, i);
      } catch {
        return !0;
      }
    }
    function HE(e) {
      var t = $a(e, Be);
      t !== null && vr(t, e, Be, en);
    }
    function Zh(e) {
      var t = $l();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: V,
        dispatch: null,
        lastRenderedReducer: Fg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = KT.bind(null, Kt, a);
      return [t.memoizedState, i];
    }
    function $g(e) {
      return Pg(Fg);
    }
    function Ig(e) {
      return Vg(Fg);
    }
    function Rp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Kt.updateQueue;
      if (s === null)
        s = jE(), Kt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Yg(e) {
      var t = $l();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function em(e) {
      var t = _i();
      return t.memoizedState;
    }
    function Tp(e, t, a, i) {
      var u = $l(), s = i === void 0 ? null : i;
      Kt.flags |= e, u.memoizedState = Rp(ur | t, a, void 0, s);
    }
    function tm(e, t, a, i) {
      var u = _i(), s = i === void 0 ? null : i, f = void 0;
      if (sr !== null) {
        var p = sr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Ag(s, v)) {
            u.memoizedState = Rp(t, a, f, s);
            return;
          }
        }
      }
      Kt.flags |= e, u.memoizedState = Rp(ur | t, a, f, s);
    }
    function nm(e, t) {
      return (Kt.mode & Ua) !== Ae ? Tp(uu | dn | wl, zr, e, t) : Tp(dn | wl, zr, e, t);
    }
    function wp(e, t) {
      return tm(dn, zr, e, t);
    }
    function Qg(e, t) {
      return Tp(nt, Bl, e, t);
    }
    function rm(e, t) {
      return tm(nt, Bl, e, t);
    }
    function Wg(e, t) {
      var a = nt;
      return a |= Zr, (Kt.mode & Ua) !== Ae && (a |= ea), Tp(a, or, e, t);
    }
    function am(e, t) {
      return tm(nt, or, e, t);
    }
    function PE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Gg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = nt;
      return u |= Zr, (Kt.mode & Ua) !== Ae && (u |= ea), Tp(u, or, PE.bind(null, t, e), i);
    }
    function im(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return tm(nt, or, PE.bind(null, t, e), i);
    }
    function YT(e, t) {
    }
    var lm = YT;
    function Kg(e, t) {
      var a = $l(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function um(e, t) {
      var a = _i(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Ag(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function qg(e, t) {
      var a = $l(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function om(e, t) {
      var a = _i(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Ag(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Xg(e) {
      var t = $l();
      return t.memoizedState = e, e;
    }
    function VE(e) {
      var t = _i(), a = sr, i = a.memoizedState;
      return $E(t, i, e);
    }
    function BE(e) {
      var t = _i();
      if (sr === null)
        return t.memoizedState = e, e;
      var a = sr.memoizedState;
      return $E(t, a, e);
    }
    function $E(e, t, a) {
      var i = !ry($s);
      if (i) {
        if (!xe(a, t)) {
          var u = bd();
          Kt.lanes = rt(Kt.lanes, u), Vp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, kp()), e.memoizedState = a, a;
    }
    function QT(e, t, a) {
      var i = Fa();
      Bn(Cr(i, lr)), e(!0);
      var u = Ep.transition;
      Ep.transition = {};
      var s = Ep.transition;
      Ep.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Bn(i), Ep.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && ge("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Jg() {
      var e = Zh(!1), t = e[0], a = e[1], i = QT.bind(null, a), u = $l();
      return u.memoizedState = i, [t, i];
    }
    function IE() {
      var e = $g(), t = e[0], a = _i(), i = a.memoizedState;
      return [t, i];
    }
    function YE() {
      var e = Ig(), t = e[0], a = _i(), i = a.memoizedState;
      return [t, i];
    }
    var QE = !1;
    function WT() {
      return QE;
    }
    function Zg() {
      var e = $l(), t = Dm(), a = t.identifierPrefix, i;
      if (jr()) {
        var u = uT();
        i = ":" + a + "R" + u;
        var s = xp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = BT++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function sm() {
      var e = _i(), t = e.memoizedState;
      return t;
    }
    function GT(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Io(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (WE(e))
        GE(t, u);
      else {
        var s = fE(e, t, u, i);
        if (s !== null) {
          var f = Ta();
          vr(s, e, i, f), KE(s, t, i);
        }
      }
      qE(e, i);
    }
    function KT(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Io(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (WE(e))
        GE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === V && (s === null || s.lanes === V)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ve.current, ve.current = el;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, xe(y, v)) {
                _T(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ve.current = p;
            }
          }
        }
        var g = fE(e, t, u, i);
        if (g !== null) {
          var D = Ta();
          vr(g, e, i, D), KE(g, t, i);
        }
      }
      qE(e, i);
    }
    function WE(e) {
      var t = e.alternate;
      return e === Kt || t !== null && t === Kt;
    }
    function GE(e, t) {
      Cp = Xh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function KE(e, t, a) {
      if (wd(a)) {
        var i = t.lanes;
        i = _d(i, e.pendingLanes);
        var u = rt(i, a);
        t.lanes = u, mo(e, u);
      }
    }
    function qE(e, t, a) {
      Nl(e, t);
    }
    var cm = {
      readContext: tr,
      useCallback: oa,
      useContext: oa,
      useEffect: oa,
      useImperativeHandle: oa,
      useInsertionEffect: oa,
      useLayoutEffect: oa,
      useMemo: oa,
      useReducer: oa,
      useRef: oa,
      useState: oa,
      useDebugValue: oa,
      useDeferredValue: oa,
      useTransition: oa,
      useMutableSource: oa,
      useSyncExternalStore: oa,
      useId: oa,
      unstable_isNewReconciler: Z
    }, XE = null, JE = null, ZE = null, eC = null, Il = null, el = null, fm = null;
    {
      var eS = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, qe = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      XE = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", Yt(), bf(t), Kg(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", Yt(), tr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", Yt(), bf(t), nm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", Yt(), bf(a), Gg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", Yt(), bf(t), Qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", Yt(), bf(t), Wg(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", Yt(), bf(t);
          var a = ve.current;
          ve.current = Il;
          try {
            return qg(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", Yt();
          var i = ve.current;
          ve.current = Il;
          try {
            return Hg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", Yt(), Yg(e);
        },
        useState: function(e) {
          $ = "useState", Yt();
          var t = ve.current;
          ve.current = Il;
          try {
            return Zh(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", Yt(), void 0;
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", Yt(), Xg(e);
        },
        useTransition: function() {
          return $ = "useTransition", Yt(), Jg();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", Yt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", Yt(), Bg(e, t, a);
        },
        useId: function() {
          return $ = "useId", Yt(), Zg();
        },
        unstable_isNewReconciler: Z
      }, JE = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", ie(), Kg(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", ie(), tr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", ie(), nm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", ie(), Gg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", ie(), Qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", ie(), Wg(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", ie();
          var a = ve.current;
          ve.current = Il;
          try {
            return qg(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", ie();
          var i = ve.current;
          ve.current = Il;
          try {
            return Hg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", ie(), Yg(e);
        },
        useState: function(e) {
          $ = "useState", ie();
          var t = ve.current;
          ve.current = Il;
          try {
            return Zh(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", ie(), void 0;
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", ie(), Xg(e);
        },
        useTransition: function() {
          return $ = "useTransition", ie(), Jg();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", ie(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", ie(), Bg(e, t, a);
        },
        useId: function() {
          return $ = "useId", ie(), Zg();
        },
        unstable_isNewReconciler: Z
      }, ZE = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", ie(), um(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", ie(), tr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", ie(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", ie(), im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", ie(), rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", ie(), am(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", ie();
          var a = ve.current;
          ve.current = el;
          try {
            return om(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", ie();
          var i = ve.current;
          ve.current = el;
          try {
            return Pg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", ie(), em();
        },
        useState: function(e) {
          $ = "useState", ie();
          var t = ve.current;
          ve.current = el;
          try {
            return $g(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", ie(), lm();
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", ie(), VE(e);
        },
        useTransition: function() {
          return $ = "useTransition", ie(), IE();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", ie(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", ie(), Jh(e, t);
        },
        useId: function() {
          return $ = "useId", ie(), sm();
        },
        unstable_isNewReconciler: Z
      }, eC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", ie(), um(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", ie(), tr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", ie(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", ie(), im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", ie(), rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", ie(), am(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", ie();
          var a = ve.current;
          ve.current = fm;
          try {
            return om(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", ie();
          var i = ve.current;
          ve.current = fm;
          try {
            return Vg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", ie(), em();
        },
        useState: function(e) {
          $ = "useState", ie();
          var t = ve.current;
          ve.current = fm;
          try {
            return Ig(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", ie(), lm();
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", ie(), BE(e);
        },
        useTransition: function() {
          return $ = "useTransition", ie(), YE();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", ie(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", ie(), Jh(e, t);
        },
        useId: function() {
          return $ = "useId", ie(), sm();
        },
        unstable_isNewReconciler: Z
      }, Il = {
        readContext: function(e) {
          return eS(), tr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", qe(), Yt(), Kg(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", qe(), Yt(), tr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", qe(), Yt(), nm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", qe(), Yt(), Gg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", qe(), Yt(), Qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", qe(), Yt(), Wg(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", qe(), Yt();
          var a = ve.current;
          ve.current = Il;
          try {
            return qg(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", qe(), Yt();
          var i = ve.current;
          ve.current = Il;
          try {
            return Hg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", qe(), Yt(), Yg(e);
        },
        useState: function(e) {
          $ = "useState", qe(), Yt();
          var t = ve.current;
          ve.current = Il;
          try {
            return Zh(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", qe(), Yt(), void 0;
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", qe(), Yt(), Xg(e);
        },
        useTransition: function() {
          return $ = "useTransition", qe(), Yt(), Jg();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", qe(), Yt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", qe(), Yt(), Bg(e, t, a);
        },
        useId: function() {
          return $ = "useId", qe(), Yt(), Zg();
        },
        unstable_isNewReconciler: Z
      }, el = {
        readContext: function(e) {
          return eS(), tr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", qe(), ie(), um(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", qe(), ie(), tr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", qe(), ie(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", qe(), ie(), im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", qe(), ie(), rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", qe(), ie(), am(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", qe(), ie();
          var a = ve.current;
          ve.current = el;
          try {
            return om(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", qe(), ie();
          var i = ve.current;
          ve.current = el;
          try {
            return Pg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", qe(), ie(), em();
        },
        useState: function(e) {
          $ = "useState", qe(), ie();
          var t = ve.current;
          ve.current = el;
          try {
            return $g(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", qe(), ie(), lm();
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", qe(), ie(), VE(e);
        },
        useTransition: function() {
          return $ = "useTransition", qe(), ie(), IE();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", qe(), ie(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", qe(), ie(), Jh(e, t);
        },
        useId: function() {
          return $ = "useId", qe(), ie(), sm();
        },
        unstable_isNewReconciler: Z
      }, fm = {
        readContext: function(e) {
          return eS(), tr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", qe(), ie(), um(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", qe(), ie(), tr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", qe(), ie(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", qe(), ie(), im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", qe(), ie(), rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", qe(), ie(), am(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", qe(), ie();
          var a = ve.current;
          ve.current = el;
          try {
            return om(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", qe(), ie();
          var i = ve.current;
          ve.current = el;
          try {
            return Vg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", qe(), ie(), em();
        },
        useState: function(e) {
          $ = "useState", qe(), ie();
          var t = ve.current;
          ve.current = el;
          try {
            return Ig(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", qe(), ie(), lm();
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", qe(), ie(), BE(e);
        },
        useTransition: function() {
          return $ = "useTransition", qe(), ie(), YE();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", qe(), ie(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", qe(), ie(), Jh(e, t);
        },
        useId: function() {
          return $ = "useId", qe(), ie(), sm();
        },
        unstable_isNewReconciler: Z
      };
    }
    var Po = Y.unstable_now, tC = 0, dm = -1, bp = -1, pm = -1, tS = !1, vm = !1;
    function nC() {
      return tS;
    }
    function qT() {
      vm = !0;
    }
    function XT() {
      tS = !1, vm = !1;
    }
    function JT() {
      tS = vm, vm = !1;
    }
    function rC() {
      return tC;
    }
    function aC() {
      tC = Po();
    }
    function nS(e) {
      bp = Po(), e.actualStartTime < 0 && (e.actualStartTime = Po());
    }
    function iC(e) {
      bp = -1;
    }
    function hm(e, t) {
      if (bp >= 0) {
        var a = Po() - bp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), bp = -1;
      }
    }
    function Yl(e) {
      if (dm >= 0) {
        var t = Po() - dm;
        dm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ct:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function rS(e) {
      if (pm >= 0) {
        var t = Po() - pm;
        pm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ct:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Ql() {
      dm = Po();
    }
    function aS() {
      pm = Po();
    }
    function iS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Is(e, t) {
      return {
        value: e,
        source: t,
        stack: Qu(t),
        digest: null
      };
    }
    function lS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function ZT(e, t) {
      return !0;
    }
    function uS(e, t) {
      try {
        var a = ZT(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ce)
            return;
          console.error(i);
        }
        var p = u ? Ke(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === te)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ke(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var D = v + `
` + f + `

` + ("" + y);
        console.error(D);
      } catch (b) {
        setTimeout(function() {
          throw b;
        });
      }
    }
    var ew = typeof WeakMap == "function" ? WeakMap : Map;
    function lC(e, t, a) {
      var i = Lu(en, a);
      i.tag = ug, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Qb(u), uS(e, t);
      }, i;
    }
    function oS(e, t, a) {
      var i = Lu(en, a);
      i.tag = ug;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          yx(e), uS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        yx(e), uS(e, t), typeof u != "function" && Ib(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (ia(e.lanes, Be) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ke(e) || "Unknown"));
      }), i;
    }
    function uC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new ew(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Wb.bind(null, e, t, a);
        ir && Bp(e, a), t.then(s, s);
      }
    }
    function tw(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function nw(e, t) {
      var a = e.tag;
      if ((e.mode & vt) === Ae && (a === se || a === Qe || a === Ve)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function oC(e) {
      var t = e;
      do {
        if (t.tag === De && PT(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function sC(e, t, a, i, u) {
      if ((e.mode & vt) === Ae) {
        if (e === t)
          e.flags |= qn;
        else {
          if (e.flags |= Ie, a.flags |= ds, a.flags &= ~(dc | ma), a.tag === ce) {
            var s = a.alternate;
            if (s === null)
              a.tag = hn;
            else {
              var f = Lu(en, Be);
              f.tag = Hh, Uo(a, f, Be);
            }
          }
          a.lanes = rt(a.lanes, Be);
        }
        return e;
      }
      return e.flags |= qn, e.lanes = u, e;
    }
    function rw(e, t, a, i, u) {
      if (a.flags |= ma, ir && Bp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        nw(a), jr() && a.mode & vt && Z0();
        var f = oC(t);
        if (f !== null) {
          f.flags &= ~wn, sC(f, t, a, e, u), f.mode & vt && uC(e, s, u), tw(f, e, s);
          return;
        } else {
          if (!vo(u)) {
            uC(e, s, u), VS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (jr() && a.mode & vt) {
        Z0();
        var v = oC(t);
        if (v !== null) {
          (v.flags & qn) === Ne && (v.flags |= wn), sC(v, t, a, e, u), eg(Is(i, a));
          return;
        }
      }
      i = Is(i, a), Ub(i);
      var y = t;
      do {
        switch (y.tag) {
          case te: {
            var g = i;
            y.flags |= qn;
            var D = Vn(u);
            y.lanes = rt(y.lanes, D);
            var b = lC(y, g, D);
            cg(y, b);
            return;
          }
          case ce:
            var j = i, U = y.type, H = y.stateNode;
            if ((y.flags & Ie) === Ne && (typeof U.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && !ox(H))) {
              y.flags |= qn;
              var me = Vn(u);
              y.lanes = rt(y.lanes, me);
              var je = oS(y, j, me);
              cg(y, je);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function aw() {
      return null;
    }
    var _p = M.ReactCurrentOwner, tl = !1, sS, Dp, cS, fS, dS, Ys, pS, mm;
    sS = {}, Dp = {}, cS = {}, fS = {}, dS = {}, Ys = !1, pS = {}, mm = {};
    function xa(e, t, a, i) {
      e === null ? t.child = _E(t, null, a, i) : t.child = Cf(t, e.child, a, i);
    }
    function iw(e, t, a, i) {
      t.child = Cf(t, e.child, null, i), t.child = Cf(t, null, a, i);
    }
    function cC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ki(
          s,
          i,
          // Resolved props
          "prop",
          kt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Ef(t, u), Ol(t);
      {
        if (_p.current = t, qr(!0), v = _f(e, t, f, i, p, u), y = Df(), t.mode & Cn) {
          Pn(!0);
          try {
            v = _f(e, t, f, i, p, u), y = Df();
          } finally {
            Pn(!1);
          }
        }
        qr(!1);
      }
      return ou(), e !== null && !tl ? (ME(e, t, u), ju(e, t, u)) : (jr() && y && Gy(t), t.flags |= Rl, xa(e, t, v, u), t.child);
    }
    function fC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (c_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Uf(s), t.tag = Ve, t.type = f, mS(t, s), dC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          p && Ki(
            p,
            i,
            // Resolved props
            "prop",
            kt(s)
          );
        }
        var v = JS(a.type, null, i, t, t.mode, u);
        return v.ref = t.ref, v.return = t, t.child = v, v;
      }
      {
        var y = a.type, g = y.propTypes;
        g && Ki(
          g,
          i,
          // Resolved props
          "prop",
          kt(y)
        );
      }
      var D = e.child, b = xS(e, u);
      if (!b) {
        var j = D.memoizedProps, U = a.compare;
        if (U = U !== null ? U : Oe, U(j, i) && e.ref === t.ref)
          return ju(e, t, u);
      }
      t.flags |= Rl;
      var H = qs(D, i);
      return H.ref = t.ref, H.return = t, t.child = H, H;
    }
    function dC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Le) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Ki(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            kt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (Oe(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (tl = !1, t.pendingProps = i = g, xS(e, u))
            (e.flags & ds) !== Ne && (tl = !0);
          else
            return t.lanes = e.lanes, ju(e, t, u);
      }
      return vS(e, t, a, i, u);
    }
    function pC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || T)
        if ((t.mode & vt) === Ae) {
          var f = {
            baseLanes: V,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, km(t, a);
        } else if (ia(a, aa)) {
          var D = {
            baseLanes: V,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = D;
          var b = s !== null ? s.baseLanes : a;
          km(t, b);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = rt(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = aa;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, km(t, v), null;
        }
      else {
        var j;
        s !== null ? (j = rt(s.baseLanes, a), t.memoizedState = null) : j = a, km(t, j);
      }
      return xa(e, t, u, a), t.child;
    }
    function lw(e, t, a) {
      var i = t.pendingProps;
      return xa(e, t, i, a), t.child;
    }
    function uw(e, t, a) {
      var i = t.pendingProps.children;
      return xa(e, t, i, a), t.child;
    }
    function ow(e, t, a) {
      {
        t.flags |= nt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return xa(e, t, s, a), t.child;
    }
    function vC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Jr, t.flags |= cd);
    }
    function vS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ki(
          s,
          i,
          // Resolved props
          "prop",
          kt(a)
        );
      }
      var f;
      {
        var p = vf(t, a, !0);
        f = hf(t, p);
      }
      var v, y;
      Ef(t, u), Ol(t);
      {
        if (_p.current = t, qr(!0), v = _f(e, t, a, i, f, u), y = Df(), t.mode & Cn) {
          Pn(!0);
          try {
            v = _f(e, t, a, i, f, u), y = Df();
          } finally {
            Pn(!1);
          }
        }
        qr(!1);
      }
      return ou(), e !== null && !tl ? (ME(e, t, u), ju(e, t, u)) : (jr() && y && Gy(t), t.flags |= Rl, xa(e, t, v, u), t.child);
    }
    function hC(e, t, a, i, u) {
      {
        switch (w_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Ie, t.flags |= qn;
            var y = new Error("Simulated error coming from DevTools"), g = Vn(u);
            t.lanes = rt(t.lanes, g);
            var D = oS(t, Is(y, t), g);
            cg(t, D);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var b = a.propTypes;
          b && Ki(
            b,
            i,
            // Resolved props
            "prop",
            kt(a)
          );
        }
      }
      var j;
      Vl(a) ? (j = !0, Dh(t)) : j = !1, Ef(t, u);
      var U = t.stateNode, H;
      U === null ? (gm(e, t), xE(t, a, i), xg(t, a, i, u), H = !0) : e === null ? H = jT(t, a, i, u) : H = zT(e, t, a, i, u);
      var me = hS(e, t, a, H, j, u);
      {
        var je = t.stateNode;
        H && je.props !== i && (Ys || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ke(t) || "a component"), Ys = !0);
      }
      return me;
    }
    function hS(e, t, a, i, u, s) {
      vC(e, t);
      var f = (t.flags & Ie) !== Ne;
      if (!i && !f)
        return u && K0(t, a, !1), ju(e, t, s);
      var p = t.stateNode;
      _p.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, iC();
      else {
        Ol(t);
        {
          if (qr(!0), v = p.render(), t.mode & Cn) {
            Pn(!0);
            try {
              p.render();
            } finally {
              Pn(!1);
            }
          }
          qr(!1);
        }
        ou();
      }
      return t.flags |= Rl, e !== null && f ? iw(e, t, v, s) : xa(e, t, v, s), t.memoizedState = p.state, u && K0(t, a, !0), t.child;
    }
    function mC(e) {
      var t = e.stateNode;
      t.pendingContext ? W0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && W0(e, t.context, !1), Dg(e, t.containerInfo);
    }
    function sw(e, t, a) {
      if (mC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      vE(e, t), $h(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & wn) {
          var g = Is(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return yC(e, t, p, a, g);
        } else if (p !== s) {
          var D = Is(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return yC(e, t, p, a, D);
        } else {
          pT(t);
          var b = _E(t, null, p, a);
          t.child = b;
          for (var j = b; j; )
            j.flags = j.flags & ~un | La, j = j.sibling;
        }
      } else {
        if (gf(), p === s)
          return ju(e, t, a);
        xa(e, t, p, a);
      }
      return t.child;
    }
    function yC(e, t, a, i, u) {
      return gf(), eg(u), t.flags |= wn, xa(e, t, a, i), t.child;
    }
    function cw(e, t, a) {
      kE(t), e === null && Zy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = jy(i, u);
      return p ? f = null : s !== null && jy(i, s) && (t.flags |= It), vC(e, t), xa(e, t, f, a), t.child;
    }
    function fw(e, t) {
      return e === null && Zy(t), null;
    }
    function dw(e, t, a, i) {
      gm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = f_(v), g = Ji(v, u), D;
      switch (y) {
        case se:
          return mS(t, v), t.type = v = Uf(v), D = vS(null, t, v, g, i), D;
        case ce:
          return t.type = v = QS(v), D = hC(null, t, v, g, i), D;
        case Qe:
          return t.type = v = WS(v), D = cC(null, t, v, g, i), D;
        case it: {
          if (t.type !== t.elementType) {
            var b = v.propTypes;
            b && Ki(
              b,
              g,
              // Resolved for outer only
              "prop",
              kt(v)
            );
          }
          return D = fC(
            null,
            t,
            v,
            Ji(v.type, g),
            // The inner type can have defaults too
            i
          ), D;
        }
      }
      var j = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Le && (j = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + j));
    }
    function pw(e, t, a, i, u) {
      gm(e, t), t.tag = ce;
      var s;
      return Vl(a) ? (s = !0, Dh(t)) : s = !1, Ef(t, u), xE(t, a, i), xg(t, a, i, u), hS(null, t, a, !0, s, u);
    }
    function vw(e, t, a, i) {
      gm(e, t);
      var u = t.pendingProps, s;
      {
        var f = vf(t, a, !1);
        s = hf(t, f);
      }
      Ef(t, i);
      var p, v;
      Ol(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = kt(a) || "Unknown";
          sS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), sS[y] = !0);
        }
        t.mode & Cn && Xi.recordLegacyContextWarning(t, null), qr(!0), _p.current = t, p = _f(null, t, a, u, s, i), v = Df(), qr(!1);
      }
      if (ou(), t.flags |= Rl, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = kt(a) || "Unknown";
        Dp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Dp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var D = kt(a) || "Unknown";
          Dp[D] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", D, D, D), Dp[D] = !0);
        }
        t.tag = ce, t.memoizedState = null, t.updateQueue = null;
        var b = !1;
        return Vl(a) ? (b = !0, Dh(t)) : b = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, sg(t), CE(t, p), xg(t, a, u, i), hS(null, t, a, !0, b, i);
      } else {
        if (t.tag = se, t.mode & Cn) {
          Pn(!0);
          try {
            p = _f(null, t, a, u, s, i), v = Df();
          } finally {
            Pn(!1);
          }
        }
        return jr() && v && Gy(t), xa(null, t, p, i), mS(t, a), t.child;
      }
    }
    function mS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Nr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), dS[u] || (dS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = kt(t) || "Unknown";
          fS[f] || (S("%s: Function components do not support getDerivedStateFromProps.", f), fS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = kt(t) || "Unknown";
          cS[p] || (S("%s: Function components do not support contextType.", p), cS[p] = !0);
        }
      }
    }
    var yS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Rt
    };
    function gS(e) {
      return {
        baseLanes: e,
        cachePool: aw(),
        transitions: null
      };
    }
    function hw(e, t) {
      var a = null;
      return {
        baseLanes: rt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function mw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Ng(e, Sp);
    }
    function yw(e, t) {
      return ho(e.childLanes, t);
    }
    function gC(e, t, a) {
      var i = t.pendingProps;
      b_(t) && (t.flags |= Ie);
      var u = Zi.current, s = !1, f = (t.flags & Ie) !== Ne;
      if (f || mw(u, e) ? (s = !0, t.flags &= ~Ie) : (e === null || e.memoizedState !== null) && (u = HT(u, NE)), u = Rf(u), Fo(t, u), e === null) {
        Zy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return xw(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var D = gw(t, y, g, a), b = t.child;
          return b.memoizedState = gS(a), t.memoizedState = yS, D;
        } else
          return SS(t, y);
      } else {
        var j = e.memoizedState;
        if (j !== null) {
          var U = j.dehydrated;
          if (U !== null)
            return Rw(e, t, f, i, U, j, a);
        }
        if (s) {
          var H = i.fallback, me = i.children, je = Ew(e, t, me, H, a), _e = t.child, wt = e.child.memoizedState;
          return _e.memoizedState = wt === null ? gS(a) : hw(wt, a), _e.childLanes = yw(e, a), t.memoizedState = yS, je;
        } else {
          var yt = i.children, O = Sw(e, t, yt, a);
          return t.memoizedState = null, O;
        }
      }
    }
    function SS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = ES(u, i);
      return s.return = e, e.child = s, s;
    }
    function gw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & vt) === Ae && s !== null ? (p = s, p.childLanes = V, p.pendingProps = f, e.mode & He && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Qo(a, u, i, null)) : (p = ES(f, u), v = Qo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function ES(e, t, a) {
      return Sx(e, t, V, null);
    }
    function SC(e, t) {
      return qs(e, t);
    }
    function Sw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = SC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & vt) === Ae && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Ft) : p.push(s);
      }
      return t.child = f, f;
    }
    function Ew(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & vt) === Ae && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = V, y.pendingProps = v, t.mode & He && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = SC(f, v), y.subtreeFlags = f.subtreeFlags & ar;
      var D;
      return p !== null ? D = qs(p, i) : (D = Qo(i, s, u, null), D.flags |= un), D.return = t, y.return = t, y.sibling = D, t.child = y, D;
    }
    function ym(e, t, a, i) {
      i !== null && eg(i), Cf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = SS(t, s);
      return f.flags |= un, t.memoizedState = null, f;
    }
    function Cw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = ES(f, s), v = Qo(i, s, u, null);
      return v.flags |= un, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & vt) !== Ae && Cf(t, e.child, null, u), v;
    }
    function xw(e, t, a) {
      return (e.mode & vt) === Ae ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Be) : Fy(t) ? e.lanes = fu : e.lanes = aa, null;
    }
    function Rw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & wn) {
          t.flags &= ~wn;
          var O = lS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return ym(e, t, f, O);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ie, null;
          var P = i.children, N = i.fallback, X = Cw(e, t, P, N, f), ye = t.child;
          return ye.memoizedState = gS(f), t.memoizedState = yS, X;
        }
      else {
        if (fT(), (t.mode & vt) === Ae)
          return ym(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Fy(u)) {
          var p, v, y;
          {
            var g = DR(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var D;
          v ? D = new Error(v) : D = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var b = lS(D, p, y);
          return ym(e, t, f, b);
        }
        var j = ia(f, e.childLanes);
        if (tl || j) {
          var U = Dm();
          if (U !== null) {
            var H = iy(U, f);
            if (H !== Rt && H !== s.retryLane) {
              s.retryLane = H;
              var me = en;
              $a(e, H), vr(U, e, H, me);
            }
          }
          VS();
          var je = lS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return ym(e, t, f, je);
        } else if (V0(u)) {
          t.flags |= Ie, t.child = e.child;
          var _e = Gb.bind(null, e);
          return kR(u, _e), null;
        } else {
          vT(t, u, s.treeContext);
          var wt = i.children, yt = SS(t, wt);
          return yt.flags |= La, yt;
        }
      }
    }
    function EC(e, t, a) {
      e.lanes = rt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = rt(i.lanes, t)), ig(e.return, t, a);
    }
    function Tw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === De) {
          var u = i.memoizedState;
          u !== null && EC(i, a, e);
        } else if (i.tag === _t)
          EC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function ww(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && qh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function bw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !pS[e])
        if (pS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function _w(e, t) {
      e !== void 0 && !mm[e] && (e !== "collapsed" && e !== "hidden" ? (mm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (mm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function CC(e, t) {
      {
        var a = Et(e), i = !a && typeof qa(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Dw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Et(e)) {
          for (var a = 0; a < e.length; a++)
            if (!CC(e[a], a))
              return;
        } else {
          var i = qa(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!CC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function CS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function xC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      bw(u), _w(s, u), Dw(f, u), xa(e, t, f, a);
      var p = Zi.current, v = Ng(p, Sp);
      if (v)
        p = Mg(p, Sp), t.flags |= Ie;
      else {
        var y = e !== null && (e.flags & Ie) !== Ne;
        y && Tw(t, t.child, a), p = Rf(p);
      }
      if (Fo(t, p), (t.mode & vt) === Ae)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = ww(t.child), D;
            g === null ? (D = t.child, t.child = null) : (D = g.sibling, g.sibling = null), CS(
              t,
              !1,
              // isBackwards
              D,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var b = null, j = t.child;
            for (t.child = null; j !== null; ) {
              var U = j.alternate;
              if (U !== null && qh(U) === null) {
                t.child = j;
                break;
              }
              var H = j.sibling;
              j.sibling = b, b = j, j = H;
            }
            CS(
              t,
              !0,
              // isBackwards
              b,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            CS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function kw(e, t, a) {
      Dg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Cf(t, null, i, a) : xa(e, t, i, a), t.child;
    }
    var RC = !1;
    function Ow(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || RC || (RC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Ki(v, s, "prop", "Context.Provider");
      }
      if (cE(t, u, p), f !== null) {
        var y = f.value;
        if (xe(y, p)) {
          if (f.children === s.children && !bh())
            return ju(e, t, a);
        } else
          TT(t, u, a);
      }
      var g = s.children;
      return xa(e, t, g, a), t.child;
    }
    var TC = !1;
    function Nw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (TC || (TC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Ef(t, a);
      var f = tr(i);
      Ol(t);
      var p;
      return _p.current = t, qr(!0), p = s(f), qr(!1), ou(), t.flags |= Rl, xa(e, t, p, a), t.child;
    }
    function kp() {
      tl = !0;
    }
    function gm(e, t) {
      (t.mode & vt) === Ae && e !== null && (e.alternate = null, t.alternate = null, t.flags |= un);
    }
    function ju(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), iC(), Vp(t.lanes), ia(a, t.childLanes) ? (UT(e, t), t.child) : null;
    }
    function Mw(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Ft) : s.push(e), a.flags |= un, a;
      }
    }
    function xS(e, t) {
      var a = e.lanes;
      return !!ia(a, t);
    }
    function Lw(e, t, a) {
      switch (t.tag) {
        case te:
          mC(t), t.stateNode, gf();
          break;
        case fe:
          kE(t);
          break;
        case ce: {
          var i = t.type;
          Vl(i) && Dh(t);
          break;
        }
        case ue:
          Dg(t, t.stateNode.containerInfo);
          break;
        case at: {
          var u = t.memoizedProps.value, s = t.type._context;
          cE(t, s, u);
          break;
        }
        case ct:
          {
            var f = ia(a, t.childLanes);
            f && (t.flags |= nt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case De: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Fo(t, Rf(Zi.current)), t.flags |= Ie, null;
            var y = t.child, g = y.childLanes;
            if (ia(a, g))
              return gC(e, t, a);
            Fo(t, Rf(Zi.current));
            var D = ju(e, t, a);
            return D !== null ? D.sibling : null;
          } else
            Fo(t, Rf(Zi.current));
          break;
        }
        case _t: {
          var b = (e.flags & Ie) !== Ne, j = ia(a, t.childLanes);
          if (b) {
            if (j)
              return xC(e, t, a);
            t.flags |= Ie;
          }
          var U = t.memoizedState;
          if (U !== null && (U.rendering = null, U.tail = null, U.lastEffect = null), Fo(t, Zi.current), j)
            break;
          return null;
        }
        case ze:
        case Ge:
          return t.lanes = V, pC(e, t, a);
      }
      return ju(e, t, a);
    }
    function wC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Mw(e, t, JS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || bh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          tl = !0;
        else {
          var s = xS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ie) === Ne)
            return tl = !1, Lw(e, t, a);
          (e.flags & ds) !== Ne ? tl = !0 : tl = !1;
        }
      } else if (tl = !1, jr() && iT(t)) {
        var f = t.index, p = lT();
        J0(t, p, f);
      }
      switch (t.lanes = V, t.tag) {
        case We:
          return vw(e, t, t.type, a);
        case Gt: {
          var v = t.elementType;
          return dw(e, t, v, a);
        }
        case se: {
          var y = t.type, g = t.pendingProps, D = t.elementType === y ? g : Ji(y, g);
          return vS(e, t, y, D, a);
        }
        case ce: {
          var b = t.type, j = t.pendingProps, U = t.elementType === b ? j : Ji(b, j);
          return hC(e, t, b, U, a);
        }
        case te:
          return sw(e, t, a);
        case fe:
          return cw(e, t, a);
        case Pe:
          return fw(e, t);
        case De:
          return gC(e, t, a);
        case ue:
          return kw(e, t, a);
        case Qe: {
          var H = t.type, me = t.pendingProps, je = t.elementType === H ? me : Ji(H, me);
          return cC(e, t, H, je, a);
        }
        case gt:
          return lw(e, t, a);
        case st:
          return uw(e, t, a);
        case ct:
          return ow(e, t, a);
        case at:
          return Ow(e, t, a);
        case an:
          return Nw(e, t, a);
        case it: {
          var _e = t.type, wt = t.pendingProps, yt = Ji(_e, wt);
          if (t.type !== t.elementType) {
            var O = _e.propTypes;
            O && Ki(
              O,
              yt,
              // Resolved for outer only
              "prop",
              kt(_e)
            );
          }
          return yt = Ji(_e.type, yt), fC(e, t, _e, yt, a);
        }
        case Ve:
          return dC(e, t, t.type, t.pendingProps, a);
        case hn: {
          var P = t.type, N = t.pendingProps, X = t.elementType === P ? N : Ji(P, N);
          return pw(e, t, P, X, a);
        }
        case _t:
          return xC(e, t, a);
        case ln:
          break;
        case ze:
          return pC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function kf(e) {
      e.flags |= nt;
    }
    function bC(e) {
      e.flags |= Jr, e.flags |= cd;
    }
    var _C, RS, DC, kC;
    _C = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === fe || u.tag === Pe)
          nR(e, u.stateNode);
        else if (u.tag !== ue) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, RS = function(e, t) {
    }, DC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = kg(), v = aR(f, a, s, i, u, p);
        t.updateQueue = v, v && kf(t);
      }
    }, kC = function(e, t, a, i) {
      a !== i && kf(t);
    };
    function Op(e, t) {
      if (!jr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Ur(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = V, i = Ne;
      if (t) {
        if ((e.mode & He) !== Ae) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = rt(a, rt(y.lanes, y.childLanes)), i |= y.subtreeFlags & ar, i |= y.flags & ar, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = rt(a, rt(g.lanes, g.childLanes)), i |= g.subtreeFlags & ar, i |= g.flags & ar, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & He) !== Ae) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = rt(a, rt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = rt(a, rt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function jw(e, t, a) {
      if (ST() && (t.mode & vt) !== Ae && (t.flags & Ie) === Ne)
        return iE(t), gf(), t.flags |= wn | ma | qn, !1;
      var i = Lh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (yT(t), Ur(t), (t.mode & He) !== Ae) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (gf(), (t.flags & Ie) === Ne && (t.memoizedState = null), t.flags |= nt, Ur(t), (t.mode & He) !== Ae) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return lE(), !0;
    }
    function OC(e, t, a) {
      var i = t.pendingProps;
      switch (Ky(t), t.tag) {
        case We:
        case Gt:
        case Ve:
        case se:
        case Qe:
        case gt:
        case st:
        case ct:
        case an:
        case it:
          return Ur(t), null;
        case ce: {
          var u = t.type;
          return Vl(u) && _h(t), Ur(t), null;
        }
        case te: {
          var s = t.stateNode;
          if (xf(t), Yy(t), jg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Lh(t);
            if (f)
              kf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & wn) !== Ne) && (t.flags |= Ma, lE());
            }
          }
          return RS(e, t), Ur(t), null;
        }
        case fe: {
          Og(t);
          var v = DE(), y = t.type;
          if (e !== null && t.stateNode != null)
            DC(e, t, y, i, v), e.ref !== t.ref && bC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Ur(t), null;
            }
            var g = kg(), D = Lh(t);
            if (D)
              hT(t, v, g) && kf(t);
            else {
              var b = tR(y, i, v, g, t);
              _C(b, t, !1, !1), t.stateNode = b, rR(b, y, i, v) && kf(t);
            }
            t.ref !== null && bC(t);
          }
          return Ur(t), null;
        }
        case Pe: {
          var j = i;
          if (e && t.stateNode != null) {
            var U = e.memoizedProps;
            kC(e, t, U, j);
          } else {
            if (typeof j != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var H = DE(), me = kg(), je = Lh(t);
            je ? mT(t) && kf(t) : t.stateNode = iR(j, H, me, t);
          }
          return Ur(t), null;
        }
        case De: {
          Tf(t);
          var _e = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var wt = jw(e, t, _e);
            if (!wt)
              return t.flags & qn ? t : null;
          }
          if ((t.flags & Ie) !== Ne)
            return t.lanes = a, (t.mode & He) !== Ae && iS(t), t;
          var yt = _e !== null, O = e !== null && e.memoizedState !== null;
          if (yt !== O && yt) {
            var P = t.child;
            if (P.flags |= Tl, (t.mode & vt) !== Ae) {
              var N = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !B);
              N || Ng(Zi.current, NE) ? zb() : VS();
            }
          }
          var X = t.updateQueue;
          if (X !== null && (t.flags |= nt), Ur(t), (t.mode & He) !== Ae && yt) {
            var ye = t.child;
            ye !== null && (t.treeBaseDuration -= ye.treeBaseDuration);
          }
          return null;
        }
        case ue:
          return xf(t), RS(e, t), e === null && JR(t.stateNode.containerInfo), Ur(t), null;
        case at:
          var de = t.type._context;
          return ag(de, t), Ur(t), null;
        case hn: {
          var $e = t.type;
          return Vl($e) && _h(t), Ur(t), null;
        }
        case _t: {
          Tf(t);
          var Je = t.memoizedState;
          if (Je === null)
            return Ur(t), null;
          var qt = (t.flags & Ie) !== Ne, jt = Je.rendering;
          if (jt === null)
            if (qt)
              Op(Je, !1);
            else {
              var Yn = Ab() && (e === null || (e.flags & Ie) === Ne);
              if (!Yn)
                for (var zt = t.child; zt !== null; ) {
                  var An = qh(zt);
                  if (An !== null) {
                    qt = !0, t.flags |= Ie, Op(Je, !1);
                    var sa = An.updateQueue;
                    return sa !== null && (t.updateQueue = sa, t.flags |= nt), t.subtreeFlags = Ne, AT(t, a), Fo(t, Mg(Zi.current, Sp)), t.child;
                  }
                  zt = zt.sibling;
                }
              Je.tail !== null && En() > XC() && (t.flags |= Ie, qt = !0, Op(Je, !1), t.lanes = Rd);
            }
          else {
            if (!qt) {
              var Vr = qh(jt);
              if (Vr !== null) {
                t.flags |= Ie, qt = !0;
                var ui = Vr.updateQueue;
                if (ui !== null && (t.updateQueue = ui, t.flags |= nt), Op(Je, !0), Je.tail === null && Je.tailMode === "hidden" && !jt.alternate && !jr())
                  return Ur(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                En() * 2 - Je.renderingStartTime > XC() && a !== aa && (t.flags |= Ie, qt = !0, Op(Je, !1), t.lanes = Rd);
            }
            if (Je.isBackwards)
              jt.sibling = t.child, t.child = jt;
            else {
              var wa = Je.last;
              wa !== null ? wa.sibling = jt : t.child = jt, Je.last = jt;
            }
          }
          if (Je.tail !== null) {
            var ba = Je.tail;
            Je.rendering = ba, Je.tail = ba.sibling, Je.renderingStartTime = En(), ba.sibling = null;
            var ca = Zi.current;
            return qt ? ca = Mg(ca, Sp) : ca = Rf(ca), Fo(t, ca), ba;
          }
          return Ur(t), null;
        }
        case ln:
          break;
        case ze:
        case Ge: {
          PS(t);
          var Hu = t.memoizedState, Af = Hu !== null;
          if (e !== null) {
            var Qp = e.memoizedState, Kl = Qp !== null;
            Kl !== Af && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !T && (t.flags |= Tl);
          }
          return !Af || (t.mode & vt) === Ae ? Ur(t) : ia(Gl, aa) && (Ur(t), t.subtreeFlags & (un | nt) && (t.flags |= Tl)), null;
        }
        case Mt:
          return null;
        case St:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function zw(e, t, a) {
      switch (Ky(t), t.tag) {
        case ce: {
          var i = t.type;
          Vl(i) && _h(t);
          var u = t.flags;
          return u & qn ? (t.flags = u & ~qn | Ie, (t.mode & He) !== Ae && iS(t), t) : null;
        }
        case te: {
          t.stateNode, xf(t), Yy(t), jg();
          var s = t.flags;
          return (s & qn) !== Ne && (s & Ie) === Ne ? (t.flags = s & ~qn | Ie, t) : null;
        }
        case fe:
          return Og(t), null;
        case De: {
          Tf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            gf();
          }
          var p = t.flags;
          return p & qn ? (t.flags = p & ~qn | Ie, (t.mode & He) !== Ae && iS(t), t) : null;
        }
        case _t:
          return Tf(t), null;
        case ue:
          return xf(t), null;
        case at:
          var v = t.type._context;
          return ag(v, t), null;
        case ze:
        case Ge:
          return PS(t), null;
        case Mt:
          return null;
        default:
          return null;
      }
    }
    function NC(e, t, a) {
      switch (Ky(t), t.tag) {
        case ce: {
          var i = t.type.childContextTypes;
          i != null && _h(t);
          break;
        }
        case te: {
          t.stateNode, xf(t), Yy(t), jg();
          break;
        }
        case fe: {
          Og(t);
          break;
        }
        case ue:
          xf(t);
          break;
        case De:
          Tf(t);
          break;
        case _t:
          Tf(t);
          break;
        case at:
          var u = t.type._context;
          ag(u, t);
          break;
        case ze:
        case Ge:
          PS(t);
          break;
      }
    }
    var MC = null;
    MC = /* @__PURE__ */ new Set();
    var Sm = !1, Ar = !1, Uw = typeof WeakSet == "function" ? WeakSet : Set, Re = null, Of = null, Nf = null;
    function Aw(e) {
      lu(null, function() {
        throw e;
      }), od();
    }
    var Fw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & He)
        try {
          Ql(), t.componentWillUnmount();
        } finally {
          Yl(e);
        }
      else
        t.componentWillUnmount();
    };
    function LC(e, t) {
      try {
        Vo(or, e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function TS(e, t, a) {
      try {
        Fw(e, a);
      } catch (i) {
        fn(e, t, i);
      }
    }
    function Hw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        fn(e, t, i);
      }
    }
    function jC(e, t) {
      try {
        UC(e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function Mf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (lt && ht && e.mode & He)
              try {
                Ql(), i = a(null);
              } finally {
                Yl(e);
              }
            else
              i = a(null);
          } catch (u) {
            fn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ke(e));
        } else
          a.current = null;
    }
    function Em(e, t, a) {
      try {
        a();
      } catch (i) {
        fn(e, t, i);
      }
    }
    var zC = !1;
    function Pw(e, t) {
      Z1(e.containerInfo), Re = t, Vw();
      var a = zC;
      return zC = !1, a;
    }
    function Vw() {
      for (; Re !== null; ) {
        var e = Re, t = e.child;
        (e.subtreeFlags & lo) !== Ne && t !== null ? (t.return = e, Re = t) : Bw();
      }
    }
    function Bw() {
      for (; Re !== null; ) {
        var e = Re;
        $t(e);
        try {
          $w(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        Tn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Re = t;
          return;
        }
        Re = e.return;
      }
    }
    function $w(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Ma) !== Ne) {
        switch ($t(e), e.tag) {
          case se:
          case Qe:
          case Ve:
            break;
          case ce: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Ys && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Ji(e.type, i), u);
              {
                var p = MC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ke(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case te: {
            {
              var v = e.stateNode;
              TR(v.containerInfo);
            }
            break;
          }
          case fe:
          case Pe:
          case ue:
          case hn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Tn();
      }
    }
    function nl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & zr) !== Ia ? Ec(t) : (e & or) !== Ia && Cc(t), (e & Bl) !== Ia && $p(!0), Em(t, a, p), (e & Bl) !== Ia && $p(!1), (e & zr) !== Ia ? Mv() : (e & or) !== Ia && uo());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Vo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & zr) !== Ia ? Nv(t) : (e & or) !== Ia && Lv(t);
            var f = s.create;
            (e & Bl) !== Ia && $p(!0), s.destroy = f(), (e & Bl) !== Ia && $p(!1), (e & zr) !== Ia ? Ed() : (e & or) !== Ia && jv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & or) !== Ne ? v = "useLayoutEffect" : (s.tag & Bl) !== Ne ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Iw(e, t) {
      if ((t.flags & nt) !== Ne)
        switch (t.tag) {
          case ct: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = rC(), p = t.alternate === null ? "mount" : "update";
            nC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case te:
                    var y = v.stateNode;
                    y.passiveEffectDuration += a;
                    break e;
                  case ct:
                    var g = v.stateNode;
                    g.passiveEffectDuration += a;
                    break e;
                }
                v = v.return;
              }
            break;
          }
        }
    }
    function Yw(e, t, a, i) {
      if ((a.flags & Sr) !== Ne)
        switch (a.tag) {
          case se:
          case Qe:
          case Ve: {
            if (!Ar)
              if (a.mode & He)
                try {
                  Ql(), Vo(or | ur, a);
                } finally {
                  Yl(a);
                }
              else
                Vo(or | ur, a);
            break;
          }
          case ce: {
            var u = a.stateNode;
            if (a.flags & nt && !Ar)
              if (t === null)
                if (a.type === a.elementType && !Ys && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), a.mode & He)
                  try {
                    Ql(), u.componentDidMount();
                  } finally {
                    Yl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Ji(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Ys && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), a.mode & He)
                  try {
                    Ql(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Yl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Ys && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), mE(a, p, u));
            break;
          }
          case te: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case fe:
                    y = a.child.stateNode;
                    break;
                  case ce:
                    y = a.child.stateNode;
                    break;
                }
              mE(a, v, y);
            }
            break;
          }
          case fe: {
            var g = a.stateNode;
            if (t === null && a.flags & nt) {
              var D = a.type, b = a.memoizedProps;
              cR(g, D, b);
            }
            break;
          }
          case Pe:
            break;
          case ue:
            break;
          case ct: {
            {
              var j = a.memoizedProps, U = j.onCommit, H = j.onRender, me = a.stateNode.effectDuration, je = rC(), _e = t === null ? "mount" : "update";
              nC() && (_e = "nested-update"), typeof H == "function" && H(a.memoizedProps.id, _e, a.actualDuration, a.treeBaseDuration, a.actualStartTime, je);
              {
                typeof U == "function" && U(a.memoizedProps.id, _e, me, je), Bb(a);
                var wt = a.return;
                e:
                  for (; wt !== null; ) {
                    switch (wt.tag) {
                      case te:
                        var yt = wt.stateNode;
                        yt.effectDuration += me;
                        break e;
                      case ct:
                        var O = wt.stateNode;
                        O.effectDuration += me;
                        break e;
                    }
                    wt = wt.return;
                  }
              }
            }
            break;
          }
          case De: {
            Zw(e, a);
            break;
          }
          case _t:
          case hn:
          case ln:
          case ze:
          case Ge:
          case St:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Ar || a.flags & Jr && UC(a);
    }
    function Qw(e) {
      switch (e.tag) {
        case se:
        case Qe:
        case Ve: {
          if (e.mode & He)
            try {
              Ql(), LC(e, e.return);
            } finally {
              Yl(e);
            }
          else
            LC(e, e.return);
          break;
        }
        case ce: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Hw(e, e.return, t), jC(e, e.return);
          break;
        }
        case fe: {
          jC(e, e.return);
          break;
        }
      }
    }
    function Ww(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === fe) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? ER(u) : xR(i.stateNode, i.memoizedProps);
            } catch (f) {
              fn(e, e.return, f);
            }
          }
        } else if (i.tag === Pe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? CR(s) : RR(s, i.memoizedProps);
            } catch (f) {
              fn(e, e.return, f);
            }
        } else if (!((i.tag === ze || i.tag === Ge) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function UC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case fe:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & He)
            try {
              Ql(), u = t(i);
            } finally {
              Yl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ke(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ke(e)), t.current = i;
      }
    }
    function Gw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function AC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, AC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === fe) {
          var a = e.stateNode;
          a !== null && tT(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Kw(e) {
      for (var t = e.return; t !== null; ) {
        if (FC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function FC(e) {
      return e.tag === fe || e.tag === te || e.tag === ue;
    }
    function HC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || FC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== fe && t.tag !== Pe && t.tag !== Ut; ) {
            if (t.flags & un || t.child === null || t.tag === ue)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & un))
            return t.stateNode;
        }
    }
    function qw(e) {
      var t = Kw(e);
      switch (t.tag) {
        case fe: {
          var a = t.stateNode;
          t.flags & It && (P0(a), t.flags &= ~It);
          var i = HC(e);
          bS(e, i, a);
          break;
        }
        case te:
        case ue: {
          var u = t.stateNode.containerInfo, s = HC(e);
          wS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function wS(e, t, a) {
      var i = e.tag, u = i === fe || i === Pe;
      if (u) {
        var s = e.stateNode;
        t ? mR(a, s, t) : vR(a, s);
      } else if (i !== ue) {
        var f = e.child;
        if (f !== null) {
          wS(f, t, a);
          for (var p = f.sibling; p !== null; )
            wS(p, t, a), p = p.sibling;
        }
      }
    }
    function bS(e, t, a) {
      var i = e.tag, u = i === fe || i === Pe;
      if (u) {
        var s = e.stateNode;
        t ? hR(a, s, t) : pR(a, s);
      } else if (i !== ue) {
        var f = e.child;
        if (f !== null) {
          bS(f, t, a);
          for (var p = f.sibling; p !== null; )
            bS(p, t, a), p = p.sibling;
        }
      }
    }
    var Fr = null, rl = !1;
    function Xw(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case fe: {
                Fr = i.stateNode, rl = !1;
                break e;
              }
              case te: {
                Fr = i.stateNode.containerInfo, rl = !0;
                break e;
              }
              case ue: {
                Fr = i.stateNode.containerInfo, rl = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Fr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        PC(e, t, a), Fr = null, rl = !1;
      }
      Gw(a);
    }
    function Bo(e, t, a) {
      for (var i = a.child; i !== null; )
        PC(e, t, i), i = i.sibling;
    }
    function PC(e, t, a) {
      switch (gd(a), a.tag) {
        case fe:
          Ar || Mf(a, t);
        case Pe: {
          {
            var i = Fr, u = rl;
            Fr = null, Bo(e, t, a), Fr = i, rl = u, Fr !== null && (rl ? gR(Fr, a.stateNode) : yR(Fr, a.stateNode));
          }
          return;
        }
        case Ut: {
          Fr !== null && (rl ? SR(Fr, a.stateNode) : Ay(Fr, a.stateNode));
          return;
        }
        case ue: {
          {
            var s = Fr, f = rl;
            Fr = a.stateNode.containerInfo, rl = !0, Bo(e, t, a), Fr = s, rl = f;
          }
          return;
        }
        case se:
        case Qe:
        case it:
        case Ve: {
          if (!Ar) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var D = g, b = D.destroy, j = D.tag;
                  b !== void 0 && ((j & Bl) !== Ia ? Em(a, t, b) : (j & or) !== Ia && (Cc(a), a.mode & He ? (Ql(), Em(a, t, b), Yl(a)) : Em(a, t, b), uo())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Bo(e, t, a);
          return;
        }
        case ce: {
          if (!Ar) {
            Mf(a, t);
            var U = a.stateNode;
            typeof U.componentWillUnmount == "function" && TS(a, t, U);
          }
          Bo(e, t, a);
          return;
        }
        case ln: {
          Bo(e, t, a);
          return;
        }
        case ze: {
          if (
            // TODO: Remove this dead flag
            a.mode & vt
          ) {
            var H = Ar;
            Ar = H || a.memoizedState !== null, Bo(e, t, a), Ar = H;
          } else
            Bo(e, t, a);
          break;
        }
        default: {
          Bo(e, t, a);
          return;
        }
      }
    }
    function Jw(e) {
      e.memoizedState;
    }
    function Zw(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && FR(s);
          }
        }
      }
    }
    function VC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Uw()), t.forEach(function(i) {
          var u = Kb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), ir)
              if (Of !== null && Nf !== null)
                Bp(Nf, Of);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function eb(e, t, a) {
      Of = a, Nf = e, $t(t), BC(t, e), $t(t), Of = null, Nf = null;
    }
    function al(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Xw(e, t, s);
          } catch (v) {
            fn(s, t, v);
          }
        }
      var f = Js();
      if (t.subtreeFlags & ta)
        for (var p = t.child; p !== null; )
          $t(p), BC(p, e), p = p.sibling;
      $t(f);
    }
    function BC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case se:
        case Qe:
        case it:
        case Ve: {
          if (al(t, e), Wl(e), u & nt) {
            try {
              nl(Bl | ur, e, e.return), Vo(Bl | ur, e);
            } catch ($e) {
              fn(e, e.return, $e);
            }
            if (e.mode & He) {
              try {
                Ql(), nl(or | ur, e, e.return);
              } catch ($e) {
                fn(e, e.return, $e);
              }
              Yl(e);
            } else
              try {
                nl(or | ur, e, e.return);
              } catch ($e) {
                fn(e, e.return, $e);
              }
          }
          return;
        }
        case ce: {
          al(t, e), Wl(e), u & Jr && i !== null && Mf(i, i.return);
          return;
        }
        case fe: {
          al(t, e), Wl(e), u & Jr && i !== null && Mf(i, i.return);
          {
            if (e.flags & It) {
              var s = e.stateNode;
              try {
                P0(s);
              } catch ($e) {
                fn(e, e.return, $e);
              }
            }
            if (u & nt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    fR(f, g, y, v, p, e);
                  } catch ($e) {
                    fn(e, e.return, $e);
                  }
              }
            }
          }
          return;
        }
        case Pe: {
          if (al(t, e), Wl(e), u & nt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var D = e.stateNode, b = e.memoizedProps, j = i !== null ? i.memoizedProps : b;
            try {
              dR(D, j, b);
            } catch ($e) {
              fn(e, e.return, $e);
            }
          }
          return;
        }
        case te: {
          if (al(t, e), Wl(e), u & nt && i !== null) {
            var U = i.memoizedState;
            if (U.isDehydrated)
              try {
                AR(t.containerInfo);
              } catch ($e) {
                fn(e, e.return, $e);
              }
          }
          return;
        }
        case ue: {
          al(t, e), Wl(e);
          return;
        }
        case De: {
          al(t, e), Wl(e);
          var H = e.child;
          if (H.flags & Tl) {
            var me = H.stateNode, je = H.memoizedState, _e = je !== null;
            if (me.isHidden = _e, _e) {
              var wt = H.alternate !== null && H.alternate.memoizedState !== null;
              wt || jb();
            }
          }
          if (u & nt) {
            try {
              Jw(e);
            } catch ($e) {
              fn(e, e.return, $e);
            }
            VC(e);
          }
          return;
        }
        case ze: {
          var yt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & vt
          ) {
            var O = Ar;
            Ar = O || yt, al(t, e), Ar = O;
          } else
            al(t, e);
          if (Wl(e), u & Tl) {
            var P = e.stateNode, N = e.memoizedState, X = N !== null, ye = e;
            if (P.isHidden = X, X && !yt && (ye.mode & vt) !== Ae) {
              Re = ye;
              for (var de = ye.child; de !== null; )
                Re = de, nb(de), de = de.sibling;
            }
            Ww(ye, X);
          }
          return;
        }
        case _t: {
          al(t, e), Wl(e), u & nt && VC(e);
          return;
        }
        case ln:
          return;
        default: {
          al(t, e), Wl(e);
          return;
        }
      }
    }
    function Wl(e) {
      var t = e.flags;
      if (t & un) {
        try {
          qw(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        e.flags &= ~un;
      }
      t & La && (e.flags &= ~La);
    }
    function tb(e, t, a) {
      Of = a, Nf = t, Re = e, $C(e, t, a), Of = null, Nf = null;
    }
    function $C(e, t, a) {
      for (var i = (e.mode & vt) !== Ae; Re !== null; ) {
        var u = Re, s = u.child;
        if (u.tag === ze && i) {
          var f = u.memoizedState !== null, p = f || Sm;
          if (p) {
            _S(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Ar, D = Sm, b = Ar;
            Sm = p, Ar = g, Ar && !b && (Re = u, rb(u));
            for (var j = s; j !== null; )
              Re = j, $C(
                j,
                // New root; bubble back up to here and stop.
                t,
                a
              ), j = j.sibling;
            Re = u, Sm = D, Ar = b, _S(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Sr) !== Ne && s !== null ? (s.return = u, Re = s) : _S(e, t, a);
      }
    }
    function _S(e, t, a) {
      for (; Re !== null; ) {
        var i = Re;
        if ((i.flags & Sr) !== Ne) {
          var u = i.alternate;
          $t(i);
          try {
            Yw(t, u, i, a);
          } catch (f) {
            fn(i, i.return, f);
          }
          Tn();
        }
        if (i === e) {
          Re = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Re = s;
          return;
        }
        Re = i.return;
      }
    }
    function nb(e) {
      for (; Re !== null; ) {
        var t = Re, a = t.child;
        switch (t.tag) {
          case se:
          case Qe:
          case it:
          case Ve: {
            if (t.mode & He)
              try {
                Ql(), nl(or, t, t.return);
              } finally {
                Yl(t);
              }
            else
              nl(or, t, t.return);
            break;
          }
          case ce: {
            Mf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && TS(t, t.return, i);
            break;
          }
          case fe: {
            Mf(t, t.return);
            break;
          }
          case ze: {
            var u = t.memoizedState !== null;
            if (u) {
              IC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Re = a) : IC(e);
      }
    }
    function IC(e) {
      for (; Re !== null; ) {
        var t = Re;
        if (t === e) {
          Re = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Re = a;
          return;
        }
        Re = t.return;
      }
    }
    function rb(e) {
      for (; Re !== null; ) {
        var t = Re, a = t.child;
        if (t.tag === ze) {
          var i = t.memoizedState !== null;
          if (i) {
            YC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Re = a) : YC(e);
      }
    }
    function YC(e) {
      for (; Re !== null; ) {
        var t = Re;
        $t(t);
        try {
          Qw(t);
        } catch (i) {
          fn(t, t.return, i);
        }
        if (Tn(), t === e) {
          Re = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Re = a;
          return;
        }
        Re = t.return;
      }
    }
    function ab(e, t, a, i) {
      Re = t, ib(t, e, a, i);
    }
    function ib(e, t, a, i) {
      for (; Re !== null; ) {
        var u = Re, s = u.child;
        (u.subtreeFlags & ja) !== Ne && s !== null ? (s.return = u, Re = s) : lb(e, t, a, i);
      }
    }
    function lb(e, t, a, i) {
      for (; Re !== null; ) {
        var u = Re;
        if ((u.flags & dn) !== Ne) {
          $t(u);
          try {
            ub(t, u, a, i);
          } catch (f) {
            fn(u, u.return, f);
          }
          Tn();
        }
        if (u === e) {
          Re = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Re = s;
          return;
        }
        Re = u.return;
      }
    }
    function ub(e, t, a, i) {
      switch (t.tag) {
        case se:
        case Qe:
        case Ve: {
          if (t.mode & He) {
            aS();
            try {
              Vo(zr | ur, t);
            } finally {
              rS(t);
            }
          } else
            Vo(zr | ur, t);
          break;
        }
      }
    }
    function ob(e) {
      Re = e, sb();
    }
    function sb() {
      for (; Re !== null; ) {
        var e = Re, t = e.child;
        if ((Re.flags & Ft) !== Ne) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Re = u, db(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Re = e;
          }
        }
        (e.subtreeFlags & ja) !== Ne && t !== null ? (t.return = e, Re = t) : cb();
      }
    }
    function cb() {
      for (; Re !== null; ) {
        var e = Re;
        (e.flags & dn) !== Ne && ($t(e), fb(e), Tn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Re = t;
          return;
        }
        Re = e.return;
      }
    }
    function fb(e) {
      switch (e.tag) {
        case se:
        case Qe:
        case Ve: {
          e.mode & He ? (aS(), nl(zr | ur, e, e.return), rS(e)) : nl(zr | ur, e, e.return);
          break;
        }
      }
    }
    function db(e, t) {
      for (; Re !== null; ) {
        var a = Re;
        $t(a), vb(a, t), Tn();
        var i = a.child;
        i !== null ? (i.return = a, Re = i) : pb(e);
      }
    }
    function pb(e) {
      for (; Re !== null; ) {
        var t = Re, a = t.sibling, i = t.return;
        if (AC(t), t === e) {
          Re = null;
          return;
        }
        if (a !== null) {
          a.return = i, Re = a;
          return;
        }
        Re = i;
      }
    }
    function vb(e, t) {
      switch (e.tag) {
        case se:
        case Qe:
        case Ve: {
          e.mode & He ? (aS(), nl(zr, e, t), rS(e)) : nl(zr, e, t);
          break;
        }
      }
    }
    function hb(e) {
      switch (e.tag) {
        case se:
        case Qe:
        case Ve: {
          try {
            Vo(or | ur, e);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case ce: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
      }
    }
    function mb(e) {
      switch (e.tag) {
        case se:
        case Qe:
        case Ve: {
          try {
            Vo(zr | ur, e);
          } catch (t) {
            fn(e, e.return, t);
          }
          break;
        }
      }
    }
    function yb(e) {
      switch (e.tag) {
        case se:
        case Qe:
        case Ve: {
          try {
            nl(or | ur, e, e.return);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case ce: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && TS(e, e.return, t);
          break;
        }
      }
    }
    function gb(e) {
      switch (e.tag) {
        case se:
        case Qe:
        case Ve:
          try {
            nl(zr | ur, e, e.return);
          } catch (t) {
            fn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Np = Symbol.for;
      Np("selector.component"), Np("selector.has_pseudo_class"), Np("selector.role"), Np("selector.test_id"), Np("selector.text");
    }
    var Sb = [];
    function Eb() {
      Sb.forEach(function(e) {
        return e();
      });
    }
    var Cb = M.ReactCurrentActQueue;
    function xb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function QC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Cb.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Rb = Math.ceil, DS = M.ReactCurrentDispatcher, kS = M.ReactCurrentOwner, Hr = M.ReactCurrentBatchConfig, il = M.ReactCurrentActQueue, fr = (
      /*             */
      0
    ), WC = (
      /*               */
      1
    ), Pr = (
      /*                */
      2
    ), Di = (
      /*                */
      4
    ), zu = 0, Mp = 1, Qs = 2, Cm = 3, Lp = 4, GC = 5, OS = 6, Tt = fr, Ra = null, Mn = null, dr = V, Gl = V, NS = Mo(V), pr = zu, jp = null, xm = V, zp = V, Rm = V, Up = null, Ya = null, MS = 0, KC = 500, qC = 1 / 0, Tb = 500, Uu = null;
    function Ap() {
      qC = En() + Tb;
    }
    function XC() {
      return qC;
    }
    var Tm = !1, LS = null, Lf = null, Ws = !1, $o = null, Fp = V, jS = [], zS = null, wb = 50, Hp = 0, US = null, AS = !1, wm = !1, bb = 50, jf = 0, bm = null, Pp = en, _m = V, JC = !1;
    function Dm() {
      return Ra;
    }
    function Ta() {
      return (Tt & (Pr | Di)) !== fr ? En() : (Pp !== en || (Pp = En()), Pp);
    }
    function Io(e) {
      var t = e.mode;
      if ((t & vt) === Ae)
        return Be;
      if ((Tt & Pr) !== fr && dr !== V)
        return Vn(dr);
      var a = xT() !== CT;
      if (a) {
        if (Hr.transition !== null) {
          var i = Hr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return _m === Rt && (_m = bd()), _m;
      }
      var u = Fa();
      if (u !== Rt)
        return u;
      var s = lR();
      return s;
    }
    function _b(e) {
      var t = e.mode;
      return (t & vt) === Ae ? Be : ay();
    }
    function vr(e, t, a, i) {
      Xb(), JC && S("useInsertionEffect must not schedule updates."), AS && (wm = !0), gu(e, a, i), (Tt & Pr) !== V && e === Ra ? e_(t) : (ir && Nd(e, t, a), t_(t), e === Ra && ((Tt & Pr) === fr && (zp = rt(zp, a)), pr === Lp && Yo(e, dr)), Qa(e, i), a === Be && Tt === fr && (t.mode & vt) === Ae && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !il.isBatchingLegacy && (Ap(), X0()));
    }
    function Db(e, t, a) {
      var i = e.current;
      i.lanes = t, gu(e, t, a), Qa(e, a);
    }
    function kb(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Tt & Pr) !== fr
      );
    }
    function Qa(e, t) {
      var a = e.callbackNode;
      ty(e, t);
      var i = gs(e, e === Ra ? dr : V);
      if (i === V) {
        a !== null && vx(a), e.callbackNode = null, e.callbackPriority = Rt;
        return;
      }
      var u = zn(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(il.current !== null && a !== IS)) {
        a == null && s !== Be && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && vx(a);
      var f;
      if (u === Be)
        e.tag === Lo ? (il.isBatchingLegacy !== null && (il.didScheduleLegacyUpdate = !0), aT(tx.bind(null, e))) : q0(tx.bind(null, e)), il.current !== null ? il.current.push(jo) : oR(function() {
          (Tt & (Pr | Di)) === fr && jo();
        }), f = null;
      else {
        var p;
        switch (Rs(i)) {
          case Er:
            p = yc;
            break;
          case lr:
            p = Sa;
            break;
          case Ii:
            p = gi;
            break;
          case Cs:
            p = bl;
            break;
          default:
            p = gi;
            break;
        }
        f = YS(p, ZC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function ZC(e, t) {
      if (XT(), Pp = en, _m = V, (Tt & (Pr | Di)) !== fr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Fu();
      if (i && e.callbackNode !== a)
        return null;
      var u = gs(e, e === Ra ? dr : V);
      if (u === V)
        return null;
      var s = !Es(e, u) && !Pv(e, u) && !t, f = s ? Hb(e, u) : Om(e, u);
      if (f !== zu) {
        if (f === Qs) {
          var p = Td(e);
          p !== V && (u = p, f = FS(e, p));
        }
        if (f === Mp) {
          var v = jp;
          throw Gs(e, V), Yo(e, u), Qa(e, En()), v;
        }
        if (f === OS)
          Yo(e, u);
        else {
          var y = !Es(e, u), g = e.current.alternate;
          if (y && !Nb(g)) {
            if (f = Om(e, u), f === Qs) {
              var D = Td(e);
              D !== V && (u = D, f = FS(e, D));
            }
            if (f === Mp) {
              var b = jp;
              throw Gs(e, V), Yo(e, u), Qa(e, En()), b;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Ob(e, f, u);
        }
      }
      return Qa(e, En()), e.callbackNode === a ? ZC.bind(null, e) : null;
    }
    function FS(e, t) {
      var a = Up;
      if ($n(e)) {
        var i = Gs(e, t);
        i.flags |= wn, XR(e.containerInfo);
      }
      var u = Om(e, t);
      if (u !== Qs) {
        var s = Ya;
        Ya = a, s !== null && ex(s);
      }
      return u;
    }
    function ex(e) {
      Ya === null ? Ya = e : Ya.push.apply(Ya, e);
    }
    function Ob(e, t, a) {
      switch (t) {
        case zu:
        case Mp:
          throw new Error("Root did not complete. This is a bug in React.");
        case Qs: {
          Ks(e, Ya, Uu);
          break;
        }
        case Cm: {
          if (Yo(e, a), Vc(a) && // do not delay if we're inside an act() scope
          !hx()) {
            var i = MS + KC - En();
            if (i > 10) {
              var u = gs(e, V);
              if (u !== V)
                break;
              var s = e.suspendedLanes;
              if (!yu(s, a)) {
                Ta(), kd(e, s);
                break;
              }
              e.timeoutHandle = zy(Ks.bind(null, e, Ya, Uu), i);
              break;
            }
          }
          Ks(e, Ya, Uu);
          break;
        }
        case Lp: {
          if (Yo(e, a), Hv(a))
            break;
          if (!hx()) {
            var f = Fv(e, a), p = f, v = En() - p, y = qb(v) - v;
            if (y > 10) {
              e.timeoutHandle = zy(Ks.bind(null, e, Ya, Uu), y);
              break;
            }
          }
          Ks(e, Ya, Uu);
          break;
        }
        case GC: {
          Ks(e, Ya, Uu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Nb(e) {
      for (var t = e; ; ) {
        if (t.flags & fs) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!xe(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & fs && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Yo(e, t) {
      t = ho(t, Rm), t = ho(t, zp), Dd(e, t);
    }
    function tx(e) {
      if (JT(), (Tt & (Pr | Di)) !== fr)
        throw new Error("Should not already be working.");
      Fu();
      var t = gs(e, V);
      if (!ia(t, Be))
        return Qa(e, En()), null;
      var a = Om(e, t);
      if (e.tag !== Lo && a === Qs) {
        var i = Td(e);
        i !== V && (t = i, a = FS(e, i));
      }
      if (a === Mp) {
        var u = jp;
        throw Gs(e, V), Yo(e, t), Qa(e, En()), u;
      }
      if (a === OS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Ks(e, Ya, Uu), Qa(e, En()), null;
    }
    function Mb(e, t) {
      t !== V && (mo(e, rt(t, Be)), Qa(e, En()), (Tt & (Pr | Di)) === fr && (Ap(), jo()));
    }
    function HS(e, t) {
      var a = Tt;
      Tt |= WC;
      try {
        return e(t);
      } finally {
        Tt = a, Tt === fr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !il.isBatchingLegacy && (Ap(), X0());
      }
    }
    function Lb(e, t, a, i, u) {
      var s = Fa(), f = Hr.transition;
      try {
        return Hr.transition = null, Bn(Er), e(t, a, i, u);
      } finally {
        Bn(s), Hr.transition = f, Tt === fr && Ap();
      }
    }
    function Au(e) {
      $o !== null && $o.tag === Lo && (Tt & (Pr | Di)) === fr && Fu();
      var t = Tt;
      Tt |= WC;
      var a = Hr.transition, i = Fa();
      try {
        return Hr.transition = null, Bn(Er), e ? e() : void 0;
      } finally {
        Bn(i), Hr.transition = a, Tt = t, (Tt & (Pr | Di)) === fr && jo();
      }
    }
    function nx() {
      return (Tt & (Pr | Di)) !== fr;
    }
    function km(e, t) {
      ua(NS, Gl, e), Gl = rt(Gl, t);
    }
    function PS(e) {
      Gl = NS.current, la(NS, e);
    }
    function Gs(e, t) {
      e.finishedWork = null, e.finishedLanes = V;
      var a = e.timeoutHandle;
      if (a !== Uy && (e.timeoutHandle = Uy, uR(a)), Mn !== null)
        for (var i = Mn.return; i !== null; ) {
          var u = i.alternate;
          NC(u, i), i = i.return;
        }
      Ra = e;
      var s = qs(e.current, null);
      return Mn = s, dr = Gl = t, pr = zu, jp = null, xm = V, zp = V, Rm = V, Up = null, Ya = null, bT(), Xi.discardPendingWarnings(), s;
    }
    function rx(e, t) {
      do {
        var a = Mn;
        try {
          if (Ah(), LE(), Tn(), kS.current = null, a === null || a.return === null) {
            pr = Mp, jp = t, Mn = null;
            return;
          }
          if (lt && a.mode & He && hm(a, !0), Ct)
            if (ou(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              zv(a, i, dr);
            } else
              xc(a, t, dr);
          rw(e, a.return, a, t, dr), ux(a);
        } catch (u) {
          t = u, Mn === a && a !== null ? (a = a.return, Mn = a) : a = Mn;
          continue;
        }
        return;
      } while (!0);
    }
    function ax() {
      var e = DS.current;
      return DS.current = cm, e === null ? cm : e;
    }
    function ix(e) {
      DS.current = e;
    }
    function jb() {
      MS = En();
    }
    function Vp(e) {
      xm = rt(e, xm);
    }
    function zb() {
      pr === zu && (pr = Cm);
    }
    function VS() {
      (pr === zu || pr === Cm || pr === Qs) && (pr = Lp), Ra !== null && (Ss(xm) || Ss(zp)) && Yo(Ra, dr);
    }
    function Ub(e) {
      pr !== Lp && (pr = Qs), Up === null ? Up = [e] : Up.push(e);
    }
    function Ab() {
      return pr === zu;
    }
    function Om(e, t) {
      var a = Tt;
      Tt |= Pr;
      var i = ax();
      if (Ra !== e || dr !== t) {
        if (ir) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Bp(e, dr), u.clear()), Ic(e, t);
        }
        Uu = Md(), Gs(e, t);
      }
      ri(t);
      do
        try {
          Fb();
          break;
        } catch (s) {
          rx(e, s);
        }
      while (!0);
      if (Ah(), Tt = a, ix(i), Mn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return so(), Ra = null, dr = V, pr;
    }
    function Fb() {
      for (; Mn !== null; )
        lx(Mn);
    }
    function Hb(e, t) {
      var a = Tt;
      Tt |= Pr;
      var i = ax();
      if (Ra !== e || dr !== t) {
        if (ir) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Bp(e, dr), u.clear()), Ic(e, t);
        }
        Uu = Md(), Ap(), Gs(e, t);
      }
      ri(t);
      do
        try {
          Pb();
          break;
        } catch (s) {
          rx(e, s);
        }
      while (!0);
      return Ah(), ix(i), Tt = a, Mn !== null ? (vs(), zu) : (so(), Ra = null, dr = V, pr);
    }
    function Pb() {
      for (; Mn !== null && !mc(); )
        lx(Mn);
    }
    function lx(e) {
      var t = e.alternate;
      $t(e);
      var a;
      (e.mode & He) !== Ae ? (nS(e), a = BS(t, e, Gl), hm(e, !0)) : a = BS(t, e, Gl), Tn(), e.memoizedProps = e.pendingProps, a === null ? ux(e) : Mn = a, kS.current = null;
    }
    function ux(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ma) === Ne) {
          $t(t);
          var u = void 0;
          if ((t.mode & He) === Ae ? u = OC(a, t, Gl) : (nS(t), u = OC(a, t, Gl), hm(t, !1)), Tn(), u !== null) {
            Mn = u;
            return;
          }
        } else {
          var s = zw(a, t);
          if (s !== null) {
            s.flags &= bv, Mn = s;
            return;
          }
          if ((t.mode & He) !== Ae) {
            hm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= ma, i.subtreeFlags = Ne, i.deletions = null;
          else {
            pr = OS, Mn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Mn = v;
          return;
        }
        t = i, Mn = t;
      } while (t !== null);
      pr === zu && (pr = GC);
    }
    function Ks(e, t, a) {
      var i = Fa(), u = Hr.transition;
      try {
        Hr.transition = null, Bn(Er), Vb(e, t, a, i);
      } finally {
        Hr.transition = u, Bn(i);
      }
      return null;
    }
    function Vb(e, t, a, i) {
      do
        Fu();
      while ($o !== null);
      if (Jb(), (Tt & (Pr | Di)) !== fr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Sc(s), u === null)
        return Sd(), null;
      if (s === V && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = V, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Rt;
      var f = rt(u.lanes, u.childLanes);
      Od(e, f), e === Ra && (Ra = null, Mn = null, dr = V), ((u.subtreeFlags & ja) !== Ne || (u.flags & ja) !== Ne) && (Ws || (Ws = !0, zS = a, YS(gi, function() {
        return Fu(), null;
      })));
      var p = (u.subtreeFlags & (lo | ta | Sr | ja)) !== Ne, v = (u.flags & (lo | ta | Sr | ja)) !== Ne;
      if (p || v) {
        var y = Hr.transition;
        Hr.transition = null;
        var g = Fa();
        Bn(Er);
        var D = Tt;
        Tt |= Di, kS.current = null, Pw(e, u), aC(), eb(e, u, s), eR(e.containerInfo), e.current = u, Uv(s), tb(u, e, s), oo(), kv(), Tt = D, Bn(g), Hr.transition = y;
      } else
        e.current = u, aC();
      var b = Ws;
      if (Ws ? (Ws = !1, $o = e, Fp = s) : (jf = 0, bm = null), f = e.pendingLanes, f === V && (Lf = null), b || fx(e.current, !1), Vi(u.stateNode, i), ir && e.memoizedUpdaters.clear(), Eb(), Qa(e, En()), t !== null)
        for (var j = e.onRecoverableError, U = 0; U < t.length; U++) {
          var H = t[U], me = H.stack, je = H.digest;
          j(H.value, {
            componentStack: me,
            digest: je
          });
        }
      if (Tm) {
        Tm = !1;
        var _e = LS;
        throw LS = null, _e;
      }
      return ia(Fp, Be) && e.tag !== Lo && Fu(), f = e.pendingLanes, ia(f, Be) ? (qT(), e === US ? Hp++ : (Hp = 0, US = e)) : Hp = 0, jo(), Sd(), null;
    }
    function Fu() {
      if ($o !== null) {
        var e = Rs(Fp), t = ly(Ii, e), a = Hr.transition, i = Fa();
        try {
          return Hr.transition = null, Bn(t), $b();
        } finally {
          Bn(i), Hr.transition = a;
        }
      }
      return !1;
    }
    function Bb(e) {
      jS.push(e), Ws || (Ws = !0, YS(gi, function() {
        return Fu(), null;
      }));
    }
    function $b() {
      if ($o === null)
        return !1;
      var e = zS;
      zS = null;
      var t = $o, a = Fp;
      if ($o = null, Fp = V, (Tt & (Pr | Di)) !== fr)
        throw new Error("Cannot flush passive effects while already rendering.");
      AS = !0, wm = !1, Av(a);
      var i = Tt;
      Tt |= Di, ob(t.current), ab(t, t.current, a, e);
      {
        var u = jS;
        jS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Iw(t, f);
        }
      }
      ps(), fx(t.current, !0), Tt = i, jo(), wm ? t === bm ? jf++ : (jf = 0, bm = t) : jf = 0, AS = !1, wm = !1, Dl(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function ox(e) {
      return Lf !== null && Lf.has(e);
    }
    function Ib(e) {
      Lf === null ? Lf = /* @__PURE__ */ new Set([e]) : Lf.add(e);
    }
    function Yb(e) {
      Tm || (Tm = !0, LS = e);
    }
    var Qb = Yb;
    function sx(e, t, a) {
      var i = Is(a, t), u = lC(e, i, Be), s = Uo(e, u, Be), f = Ta();
      s !== null && (gu(s, Be, f), Qa(s, f));
    }
    function fn(e, t, a) {
      if (Aw(a), $p(!1), e.tag === te) {
        sx(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === te) {
          sx(i, e, a);
          return;
        } else if (i.tag === ce) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !ox(s)) {
            var f = Is(a, e), p = oS(i, f, Be), v = Uo(i, p, Be), y = Ta();
            v !== null && (gu(v, Be, y), Qa(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Wb(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ta();
      kd(e, a), n_(e), Ra === e && yu(dr, a) && (pr === Lp || pr === Cm && Vc(dr) && En() - MS < KC ? Gs(e, V) : Rm = rt(Rm, a)), Qa(e, u);
    }
    function cx(e, t) {
      t === Rt && (t = _b(e));
      var a = Ta(), i = $a(e, t);
      i !== null && (gu(i, t, a), Qa(i, a));
    }
    function Gb(e) {
      var t = e.memoizedState, a = Rt;
      t !== null && (a = t.retryLane), cx(e, a);
    }
    function Kb(e, t) {
      var a = Rt, i;
      switch (e.tag) {
        case De:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case _t:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), cx(e, a);
    }
    function qb(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Rb(e / 1960) * 1960;
    }
    function Xb() {
      if (Hp > wb)
        throw Hp = 0, US = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      jf > bb && (jf = 0, bm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Jb() {
      Xi.flushLegacyContextWarning(), Xi.flushPendingUnsafeLifecycleWarnings();
    }
    function fx(e, t) {
      $t(e), Nm(e, ea, yb), t && Nm(e, uu, gb), Nm(e, ea, hb), t && Nm(e, uu, mb), Tn();
    }
    function Nm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Ne ? i = i.child : ((i.flags & t) !== Ne && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Mm = null;
    function dx(e) {
      {
        if ((Tt & Pr) !== fr || !(e.mode & vt))
          return;
        var t = e.tag;
        if (t !== We && t !== te && t !== ce && t !== se && t !== Qe && t !== it && t !== Ve)
          return;
        var a = Ke(e) || "ReactComponent";
        if (Mm !== null) {
          if (Mm.has(a))
            return;
          Mm.add(a);
        } else
          Mm = /* @__PURE__ */ new Set([a]);
        var i = Sn;
        try {
          $t(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? $t(e) : Tn();
        }
      }
    }
    var BS;
    {
      var Zb = null;
      BS = function(e, t, a) {
        var i = Ex(Zb, t);
        try {
          return wC(e, t, a);
        } catch (s) {
          if (dT() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Ah(), LE(), NC(e, t), Ex(t, i), t.mode & He && nS(t), lu(null, wC, null, e, t, a), Zm()) {
            var u = od();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var px = !1, $S;
    $S = /* @__PURE__ */ new Set();
    function e_(e) {
      if (Kr && !WT())
        switch (e.tag) {
          case se:
          case Qe:
          case Ve: {
            var t = Mn && Ke(Mn) || "Unknown", a = t;
            if (!$S.has(a)) {
              $S.add(a);
              var i = Ke(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ce: {
            px || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), px = !0);
            break;
          }
        }
    }
    function Bp(e, t) {
      if (ir) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Nd(e, i, t);
        });
      }
    }
    var IS = {};
    function YS(e, t) {
      {
        var a = il.current;
        return a !== null ? (a.push(t), IS) : hc(e, t);
      }
    }
    function vx(e) {
      if (e !== IS)
        return Dv(e);
    }
    function hx() {
      return il.current !== null;
    }
    function t_(e) {
      {
        if (e.mode & vt) {
          if (!QC())
            return;
        } else if (!xb() || Tt !== fr || e.tag !== se && e.tag !== Qe && e.tag !== Ve)
          return;
        if (il.current === null) {
          var t = Sn;
          try {
            $t(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ke(e));
          } finally {
            t ? $t(e) : Tn();
          }
        }
      }
    }
    function n_(e) {
      e.tag !== Lo && QC() && il.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function $p(e) {
      JC = e;
    }
    var ki = null, zf = null, r_ = function(e) {
      ki = e;
    };
    function Uf(e) {
      {
        if (ki === null)
          return e;
        var t = ki(e);
        return t === void 0 ? e : t.current;
      }
    }
    function QS(e) {
      return Uf(e);
    }
    function WS(e) {
      {
        if (ki === null)
          return e;
        var t = ki(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Uf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: he,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function mx(e, t) {
      {
        if (ki === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ce: {
            typeof i == "function" && (u = !0);
            break;
          }
          case se: {
            (typeof i == "function" || s === Le) && (u = !0);
            break;
          }
          case Qe: {
            (s === he || s === Le) && (u = !0);
            break;
          }
          case it:
          case Ve: {
            (s === tt || s === Le) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = ki(a);
          if (f !== void 0 && f === ki(i))
            return !0;
        }
        return !1;
      }
    }
    function yx(e) {
      {
        if (ki === null || typeof WeakSet != "function")
          return;
        zf === null && (zf = /* @__PURE__ */ new WeakSet()), zf.add(e);
      }
    }
    var a_ = function(e, t) {
      {
        if (ki === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Fu(), Au(function() {
          GS(e.current, i, a);
        });
      }
    }, i_ = function(e, t) {
      {
        if (e.context !== ii)
          return;
        Fu(), Au(function() {
          Ip(t, e, null, null);
        });
      }
    };
    function GS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case se:
          case Ve:
          case ce:
            v = p;
            break;
          case Qe:
            v = p.render;
            break;
        }
        if (ki === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var D = ki(v);
          D !== void 0 && (a.has(D) ? g = !0 : t.has(D) && (f === ce ? g = !0 : y = !0));
        }
        if (zf !== null && (zf.has(e) || i !== null && zf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var b = $a(e, Be);
          b !== null && vr(b, e, Be, en);
        }
        u !== null && !g && GS(u, t, a), s !== null && GS(s, t, a);
      }
    }
    var l_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return KS(e.current, i, a), a;
      }
    };
    function KS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case se:
          case Ve:
          case ce:
            p = f;
            break;
          case Qe:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? u_(e, a) : i !== null && KS(i, t, a), u !== null && KS(u, t, a);
      }
    }
    function u_(e, t) {
      {
        var a = o_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case fe:
              t.add(i.stateNode);
              return;
            case ue:
              t.add(i.stateNode.containerInfo);
              return;
            case te:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function o_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === fe)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var qS;
    {
      qS = !1;
      try {
        var gx = Object.preventExtensions({});
      } catch {
        qS = !0;
      }
    }
    function s_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ne, this.subtreeFlags = Ne, this.deletions = null, this.lanes = V, this.childLanes = V, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !qS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var li = function(e, t, a, i) {
      return new s_(e, t, a, i);
    };
    function XS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function c_(e) {
      return typeof e == "function" && !XS(e) && e.defaultProps === void 0;
    }
    function f_(e) {
      if (typeof e == "function")
        return XS(e) ? ce : se;
      if (e != null) {
        var t = e.$$typeof;
        if (t === he)
          return Qe;
        if (t === tt)
          return it;
      }
      return We;
    }
    function qs(e, t) {
      var a = e.alternate;
      a === null ? (a = li(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ne, a.subtreeFlags = Ne, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & ar, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case We:
        case se:
        case Ve:
          a.type = Uf(e.type);
          break;
        case ce:
          a.type = QS(e.type);
          break;
        case Qe:
          a.type = WS(e.type);
          break;
      }
      return a;
    }
    function d_(e, t) {
      e.flags &= ar | un;
      var a = e.alternate;
      if (a === null)
        e.childLanes = V, e.lanes = t, e.child = null, e.subtreeFlags = Ne, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ne, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function p_(e, t, a) {
      var i;
      return e === kh ? (i = vt, t === !0 && (i |= Cn, i |= Ua)) : i = Ae, ir && (i |= He), li(te, null, null, i);
    }
    function JS(e, t, a, i, u, s) {
      var f = We, p = e;
      if (typeof e == "function")
        XS(e) ? (f = ce, p = QS(p)) : p = Uf(p);
      else if (typeof e == "string")
        f = fe;
      else
        e:
          switch (e) {
            case ha:
              return Qo(a.children, u, s, t);
            case fi:
              f = st, u |= Cn, (u & vt) !== Ae && (u |= Ua);
              break;
            case x:
              return v_(a, u, s, t);
            case Ze:
              return h_(a, u, s, t);
            case xt:
              return m_(a, u, s, t);
            case nn:
              return Sx(a, u, s, t);
            case rr:
            case Ln:
            case di:
            case Vu:
            case tn:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case Q:
                    f = at;
                    break e;
                  case re:
                    f = an;
                    break e;
                  case he:
                    f = Qe, p = WS(p);
                    break e;
                  case tt:
                    f = it;
                    break e;
                  case Le:
                    f = Gt, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var y = i ? Ke(i) : null;
                y && (v += `

Check the render method of \`` + y + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      var g = li(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function ZS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = JS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Qo(e, t, a, i) {
      var u = li(gt, e, i, t);
      return u.lanes = a, u;
    }
    function v_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = li(ct, e, i, t | He);
      return u.elementType = x, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function h_(e, t, a, i) {
      var u = li(De, e, i, t);
      return u.elementType = Ze, u.lanes = a, u;
    }
    function m_(e, t, a, i) {
      var u = li(_t, e, i, t);
      return u.elementType = xt, u.lanes = a, u;
    }
    function Sx(e, t, a, i) {
      var u = li(ze, e, i, t);
      u.elementType = nn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function e0(e, t, a) {
      var i = li(Pe, e, null, t);
      return i.lanes = a, i;
    }
    function y_() {
      var e = li(fe, null, null, Ae);
      return e.elementType = "DELETED", e;
    }
    function g_(e) {
      var t = li(Ut, null, null, Ae);
      return t.stateNode = e, t;
    }
    function t0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = li(ue, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function Ex(e, t) {
      return e === null && (e = li(We, null, null, Ae)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function S_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Uy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Rt, this.eventTimes = $c(V), this.expirationTimes = $c(en), this.pendingLanes = V, this.suspendedLanes = V, this.pingedLanes = V, this.expiredLanes = V, this.mutableReadLanes = V, this.finishedLanes = V, this.entangledLanes = V, this.entanglements = $c(V), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < sn; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case kh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Lo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function Cx(e, t, a, i, u, s, f, p, v, y) {
      var g = new S_(e, t, a, p, v), D = p_(t, s);
      g.current = D, D.stateNode = g;
      {
        var b = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        D.memoizedState = b;
      }
      return sg(D), g;
    }
    var n0 = "18.2.0";
    function E_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Yr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Dr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var r0, a0;
    r0 = !1, a0 = {};
    function xx(e) {
      if (!e)
        return ii;
      var t = Na(e), a = rT(t);
      if (t.tag === ce) {
        var i = t.type;
        if (Vl(i))
          return G0(t, i, a);
      }
      return a;
    }
    function C_(e, t) {
      {
        var a = Na(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = za(a);
        if (u === null)
          return null;
        if (u.mode & Cn) {
          var s = Ke(a) || "Component";
          if (!a0[s]) {
            a0[s] = !0;
            var f = Sn;
            try {
              $t(u), a.mode & Cn ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? $t(f) : Tn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function Rx(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return Cx(e, t, v, y, a, i, u, s, f);
    }
    function Tx(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, D = Cx(a, i, g, e, u, s, f, p, v);
      D.context = xx(null);
      var b = D.current, j = Ta(), U = Io(b), H = Lu(j, U);
      return H.callback = t ?? null, Uo(b, H, U), Db(D, U, j), D;
    }
    function Ip(e, t, a, i) {
      Ov(t, e);
      var u = t.current, s = Ta(), f = Io(u);
      su(f);
      var p = xx(a);
      t.context === null ? t.context = p : t.pendingContext = p, Kr && Sn !== null && !r0 && (r0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ke(Sn) || "Unknown"));
      var v = Lu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Uo(u, v, f);
      return y !== null && (vr(y, u, f, s), Bh(y, u, f)), f;
    }
    function Lm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case fe:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function x_(e) {
      switch (e.tag) {
        case te: {
          var t = e.stateNode;
          if ($n(t)) {
            var a = ny(t);
            Mb(t, a);
          }
          break;
        }
        case De: {
          Au(function() {
            var u = $a(e, Be);
            if (u !== null) {
              var s = Ta();
              vr(u, e, Be, s);
            }
          });
          var i = Be;
          i0(e, i);
          break;
        }
      }
    }
    function wx(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Bv(a.retryLane, t));
    }
    function i0(e, t) {
      wx(e, t);
      var a = e.alternate;
      a && wx(a, t);
    }
    function R_(e) {
      if (e.tag === De) {
        var t = co, a = $a(e, t);
        if (a !== null) {
          var i = Ta();
          vr(a, e, t, i);
        }
        i0(e, t);
      }
    }
    function T_(e) {
      if (e.tag === De) {
        var t = Io(e), a = $a(e, t);
        if (a !== null) {
          var i = Ta();
          vr(a, e, t, i);
        }
        i0(e, t);
      }
    }
    function bx(e) {
      var t = _v(e);
      return t === null ? null : t.stateNode;
    }
    var _x = function(e) {
      return null;
    };
    function w_(e) {
      return _x(e);
    }
    var Dx = function(e) {
      return !1;
    };
    function b_(e) {
      return Dx(e);
    }
    var kx = null, Ox = null, Nx = null, Mx = null, Lx = null, jx = null, zx = null, Ux = null, Ax = null;
    {
      var Fx = function(e, t, a) {
        var i = t[a], u = Et(e) ? e.slice() : dt({}, e);
        return a + 1 === t.length ? (Et(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = Fx(e[i], t, a + 1), u);
      }, Hx = function(e, t) {
        return Fx(e, t, 0);
      }, Px = function(e, t, a, i) {
        var u = t[i], s = Et(e) ? e.slice() : dt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Et(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = Px(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, Vx = function(e, t, a) {
        if (t.length !== a.length) {
          ge("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              ge("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return Px(e, t, a, 0);
      }, Bx = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Et(e) ? e.slice() : dt({}, e);
        return s[u] = Bx(e[u], t, a + 1, i), s;
      }, $x = function(e, t, a) {
        return Bx(e, t, 0, a);
      }, l0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      kx = function(e, t, a, i) {
        var u = l0(e, t);
        if (u !== null) {
          var s = $x(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = dt({}, e.memoizedProps);
          var f = $a(e, Be);
          f !== null && vr(f, e, Be, en);
        }
      }, Ox = function(e, t, a) {
        var i = l0(e, t);
        if (i !== null) {
          var u = Hx(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = dt({}, e.memoizedProps);
          var s = $a(e, Be);
          s !== null && vr(s, e, Be, en);
        }
      }, Nx = function(e, t, a, i) {
        var u = l0(e, t);
        if (u !== null) {
          var s = Vx(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = dt({}, e.memoizedProps);
          var f = $a(e, Be);
          f !== null && vr(f, e, Be, en);
        }
      }, Mx = function(e, t, a) {
        e.pendingProps = $x(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = $a(e, Be);
        i !== null && vr(i, e, Be, en);
      }, Lx = function(e, t) {
        e.pendingProps = Hx(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = $a(e, Be);
        a !== null && vr(a, e, Be, en);
      }, jx = function(e, t, a) {
        e.pendingProps = Vx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = $a(e, Be);
        i !== null && vr(i, e, Be, en);
      }, zx = function(e) {
        var t = $a(e, Be);
        t !== null && vr(t, e, Be, en);
      }, Ux = function(e) {
        _x = e;
      }, Ax = function(e) {
        Dx = e;
      };
    }
    function __(e) {
      var t = za(e);
      return t === null ? null : t.stateNode;
    }
    function D_(e) {
      return null;
    }
    function k_() {
      return Sn;
    }
    function O_(e) {
      var t = e.findFiberByHostInstance, a = M.ReactCurrentDispatcher;
      return yd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: kx,
        overrideHookStateDeletePath: Ox,
        overrideHookStateRenamePath: Nx,
        overrideProps: Mx,
        overridePropsDeletePath: Lx,
        overridePropsRenamePath: jx,
        setErrorHandler: Ux,
        setSuspenseHandler: Ax,
        scheduleUpdate: zx,
        currentDispatcherRef: a,
        findHostInstanceByFiber: __,
        findFiberByHostInstance: t || D_,
        // React Refresh
        findHostInstancesForRefresh: l_,
        scheduleRefresh: a_,
        scheduleRoot: i_,
        setRefreshHandler: r_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: k_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: n0
      });
    }
    var Ix = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function u0(e) {
      this._internalRoot = e;
    }
    jm.prototype.render = u0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : zm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== jn) {
          var i = bx(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Ip(e, t, null, null);
    }, jm.prototype.unmount = u0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        nx() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Au(function() {
          Ip(null, e, null, null);
        }), $0(t);
      }
    };
    function N_(e, t) {
      if (!zm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      Yx(e);
      var a = !1, i = !1, u = "", s = Ix;
      t != null && (t.hydrate ? ge("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ci && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = Rx(e, kh, null, a, i, u, s);
      xh(f.current, e);
      var p = e.nodeType === jn ? e.parentNode : e;
      return Jd(p), new u0(f);
    }
    function jm(e) {
      this._internalRoot = e;
    }
    function M_(e) {
      e && qv(e);
    }
    jm.prototype.unstable_scheduleHydration = M_;
    function L_(e, t, a) {
      if (!zm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      Yx(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = Ix;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = Tx(t, null, e, kh, i, s, f, p, v);
      if (xh(y.current, e), Jd(e), u)
        for (var g = 0; g < u.length; g++) {
          var D = u[g];
          VT(y, D);
        }
      return new jm(y);
    }
    function zm(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === ei || e.nodeType === eu || !le));
    }
    function Yp(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === ei || e.nodeType === eu || e.nodeType === jn && e.nodeValue === " react-mount-point-unstable "));
    }
    function Yx(e) {
      e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), sp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var j_ = M.ReactCurrentOwner, Qx;
    Qx = function(e) {
      if (e._reactRootContainer && e.nodeType !== jn) {
        var t = bx(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = o0(e), u = !!(i && No(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function o0(e) {
      return e ? e.nodeType === ei ? e.documentElement : e.firstChild : null;
    }
    function Wx() {
    }
    function z_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var b = Lm(f);
            s.call(b);
          };
        }
        var f = Tx(
          t,
          i,
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Wx
        );
        e._reactRootContainer = f, xh(f.current, e);
        var p = e.nodeType === jn ? e.parentNode : e;
        return Jd(p), Au(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var b = Lm(g);
            y.call(b);
          };
        }
        var g = Rx(
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Wx
        );
        e._reactRootContainer = g, xh(g.current, e);
        var D = e.nodeType === jn ? e.parentNode : e;
        return Jd(D), Au(function() {
          Ip(t, g, a, i);
        }), g;
      }
    }
    function U_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Um(e, t, a, i, u) {
      Qx(a), U_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = z_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Lm(f);
            p.call(v);
          };
        }
        Ip(t, f, e, u);
      }
      return Lm(f);
    }
    function A_(e) {
      {
        var t = j_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", kt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Xr ? e : C_(e, "findDOMNode");
    }
    function F_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Yp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = sp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Um(null, e, t, !0, a);
    }
    function H_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Yp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = sp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Um(null, e, t, !1, a);
    }
    function P_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Yp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !cs(e))
        throw new Error("parentComponent must be a valid React Component");
      return Um(e, t, a, !1, i);
    }
    function V_(e) {
      if (!Yp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = sp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = o0(e), i = a && !No(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Au(function() {
          Um(null, null, e, !1, function() {
            e._reactRootContainer = null, $0(e);
          });
        }), !0;
      } else {
        {
          var u = o0(e), s = !!(u && No(u)), f = e.nodeType === Xr && Yp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Ee(x_), Iv(R_), ws(T_), jd(Fa), Qv(xs), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Tv(I1), cc(HS, Lb, Au);
    function B_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!zm(t))
        throw new Error("Target container is not a DOM element.");
      return E_(e, t, null, a);
    }
    function $_(e, t, a, i) {
      return P_(e, t, a, i);
    }
    var s0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [No, pf, Rh, sc, us, HS]
    };
    function I_(e, t) {
      return s0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), N_(e, t);
    }
    function Y_(e, t, a) {
      return s0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), L_(e, t, a);
    }
    function Q_(e) {
      return nx() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Au(e);
    }
    var W_ = O_({
      findFiberByHostInstance: zs,
      bundleType: 1,
      version: n0,
      rendererPackageName: "react-dom"
    });
    if (!W_ && mn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var Gx = window.location.protocol;
      /^(https?|file):$/.test(Gx) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (Gx === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ga.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = s0, Ga.createPortal = B_, Ga.createRoot = I_, Ga.findDOMNode = A_, Ga.flushSync = Q_, Ga.hydrate = F_, Ga.hydrateRoot = Y_, Ga.render = H_, Ga.unmountComponentAtNode = V_, Ga.unstable_batchedUpdates = HS, Ga.unstable_renderSubtreeIntoContainer = $_, Ga.version = n0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ga;
}
function l1() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l1);
    } catch (I) {
      console.error(I);
    }
  }
}
process.env.NODE_ENV === "production" ? (l1(), v0.exports = rD()) : v0.exports = aD();
var iD = v0.exports, Kp = iD;
if (process.env.NODE_ENV === "production")
  Xp.createRoot = Kp.createRoot, Xp.hydrateRoot = Kp.hydrateRoot;
else {
  var Fm = Kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Xp.createRoot = function(I, Y) {
    Fm.usingClientEntryPoint = !0;
    try {
      return Kp.createRoot(I, Y);
    } finally {
      Fm.usingClientEntryPoint = !1;
    }
  }, Xp.hydrateRoot = function(I, Y, M) {
    Fm.usingClientEntryPoint = !0;
    try {
      return Kp.hydrateRoot(I, Y, M);
    } finally {
      Fm.usingClientEntryPoint = !1;
    }
  };
}
var u1 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(I) {
  (function() {
    var Y = {}.hasOwnProperty;
    function M() {
      for (var Xe = [], et = 0; et < arguments.length; et++) {
        var ge = arguments[et];
        if (ge) {
          var S = typeof ge;
          if (S === "string" || S === "number")
            Xe.push(ge);
          else if (Array.isArray(ge)) {
            if (ge.length) {
              var ft = M.apply(null, ge);
              ft && Xe.push(ft);
            }
          } else if (S === "object") {
            if (ge.toString !== Object.prototype.toString && !ge.toString.toString().includes("[native code]")) {
              Xe.push(ge.toString());
              continue;
            }
            for (var se in ge)
              Y.call(ge, se) && ge[se] && Xe.push(se);
          }
        }
      }
      return Xe.join(" ");
    }
    I.exports ? (M.default = M, I.exports = M) : window.classNames = M;
  })();
})(u1);
var lD = u1.exports;
const uD = /* @__PURE__ */ a1(lD), oD = ["xxl", "xl", "lg", "md", "sm", "xs"], sD = "xs", cD = /* @__PURE__ */ vn.createContext({
  prefixes: {},
  breakpoints: oD,
  minBreakpoint: sD
});
function fD(I, Y) {
  const {
    prefixes: M
  } = vn.useContext(cD);
  return I || M[Y] || Y;
}
const dD = ["as", "disabled"];
function pD(I, Y) {
  if (I == null)
    return {};
  var M = {}, Xe = Object.keys(I), et, ge;
  for (ge = 0; ge < Xe.length; ge++)
    et = Xe[ge], !(Y.indexOf(et) >= 0) && (M[et] = I[et]);
  return M;
}
function vD(I) {
  return !I || I.trim() === "#";
}
function o1({
  tagName: I,
  disabled: Y,
  href: M,
  target: Xe,
  rel: et,
  role: ge,
  onClick: S,
  tabIndex: ft = 0,
  type: se
}) {
  I || (M != null || Xe != null || et != null ? I = "a" : I = "button");
  const ce = {
    tagName: I
  };
  if (I === "button")
    return [{
      type: se || "button",
      disabled: Y
    }, ce];
  const We = (ue) => {
    if ((Y || I === "a" && vD(M)) && ue.preventDefault(), Y) {
      ue.stopPropagation();
      return;
    }
    S == null || S(ue);
  }, te = (ue) => {
    ue.key === " " && (ue.preventDefault(), We(ue));
  };
  return I === "a" && (M || (M = "#"), Y && (M = void 0)), [{
    role: ge ?? "button",
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: void 0,
    tabIndex: Y ? void 0 : ft,
    href: M,
    target: I === "a" ? Xe : void 0,
    "aria-disabled": Y || void 0,
    rel: I === "a" ? et : void 0,
    onClick: We,
    onKeyDown: te
  }, ce];
}
const hD = /* @__PURE__ */ vn.forwardRef((I, Y) => {
  let {
    as: M,
    disabled: Xe
  } = I, et = pD(I, dD);
  const [ge, {
    tagName: S
  }] = o1(Object.assign({
    tagName: M,
    disabled: Xe
  }, et));
  return /* @__PURE__ */ R.jsx(S, Object.assign({}, et, ge, {
    ref: Y
  }));
});
hD.displayName = "Button";
const s1 = /* @__PURE__ */ vn.forwardRef(({
  as: I,
  bsPrefix: Y,
  variant: M = "primary",
  size: Xe,
  active: et = !1,
  disabled: ge = !1,
  className: S,
  ...ft
}, se) => {
  const ce = fD(Y, "btn"), [We, {
    tagName: te
  }] = o1({
    tagName: I,
    disabled: ge,
    ...ft
  }), ue = te;
  return /* @__PURE__ */ R.jsx(ue, {
    ...We,
    ...ft,
    ref: se,
    disabled: ge,
    className: uD(S, ce, et && "active", M && `${ce}-${M}`, Xe && `${ce}-${Xe}`, ft.href && ge && "disabled")
  });
});
s1.displayName = "Button";
const mD = s1, yD = () => {
  const [I, Y] = vn.useState(""), [M, Xe] = vn.useState(""), [et, ge] = vn.useState(""), [S, ft] = vn.useState(""), [se, ce] = vn.useState(""), [We, te] = vn.useState(""), [ue, fe] = vn.useState(""), [Pe, gt] = vn.useState(""), [st, an] = vn.useState(""), [at, Qe] = vn.useState(""), [ct, De] = vn.useState(""), [it, Ve] = vn.useState(""), [Gt, hn] = vn.useState(""), [Ut, _t] = vn.useState(""), [ln, ze] = vn.useState(""), [Ge, Mt] = vn.useState(!1), [St, Se] = vn.useState([]), Z = async (K) => {
    K.preventDefault();
    const T = {
      query: I,
      cuisine: M,
      excludeCuisine: et,
      diet: S,
      intolerances: se,
      type: We,
      sort: ue,
      minCarbs: Pe,
      maxCarbs: st,
      minProtein: at,
      maxProtein: ct,
      minCalories: it,
      maxCalories: Gt,
      minFat: Ut,
      maxFat: ln,
      fillIngredients: Ge,
      apiKey: "43cce9df2ced467e8d49f23b16f0adfe"
    }, B = new URLSearchParams(T);
    var le = [""];
    B.forEach((Te, Me) => {
      Te == "" && le.push(Me);
    }), le.forEach((Te) => {
      B.delete(Te);
    });
    try {
      const Te = await fetch(
        "https://api.spoonacular.com/recipes/complexSearch?" + B.toString(),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      if (Te.ok) {
        const Me = await Te.json();
        Se(Me.results);
      } else
        console.log("Failed to send data");
    } catch (Te) {
      console.log("Error: " + Te.message);
    }
  };
  return /* @__PURE__ */ R.jsxs("div", { children: [
    /* @__PURE__ */ R.jsx("header", { children: /* @__PURE__ */ R.jsx(
      "img",
      {
        src: `${window.location.href}
utrition_header.png`,
        className: "img-fluid"
      }
    ) }),
    /* @__PURE__ */ R.jsxs("form", { onSubmit: Z, children: [
      /* @__PURE__ */ R.jsxs("div", { className: "input-group", children: [
        /* @__PURE__ */ R.jsx("span", { className: "input-group-text", children: "Query: " }),
        /* @__PURE__ */ R.jsx(
          "input",
          {
            type: "text",
            className: "form-control",
            value: I,
            onChange: (K) => Y(K.target.value),
            placeholder: "Query"
          }
        )
      ] }),
      /* @__PURE__ */ R.jsxs("div", { className: "input-group", children: [
        /* @__PURE__ */ R.jsx("span", { className: "input-group-text", children: "Cuisine: " }),
        /* @__PURE__ */ R.jsxs(
          "select",
          {
            className: "form-control",
            name: "cuisine",
            id: "cuisine",
            onChange: (K) => Xe(K.target.value),
            children: [
              /* @__PURE__ */ R.jsx("option", { value: "", children: "Select Cuisine" }),
              /* @__PURE__ */ R.jsx("option", { value: "African", children: "African" }),
              /* @__PURE__ */ R.jsx("option", { value: "Asian", children: "Asian" }),
              /* @__PURE__ */ R.jsx("option", { value: "American", children: "American" }),
              /* @__PURE__ */ R.jsx("option", { value: "British", children: "British" }),
              /* @__PURE__ */ R.jsx("option", { value: "Cajun", children: "Cajun" }),
              /* @__PURE__ */ R.jsx("option", { value: "Caribbean", children: "Caribbean" }),
              /* @__PURE__ */ R.jsx("option", { value: "Chinese", children: "Chinese" }),
              /* @__PURE__ */ R.jsx("option", { value: "Eastern European", children: "Eastern European" }),
              /* @__PURE__ */ R.jsx("option", { value: "European", children: "European" }),
              /* @__PURE__ */ R.jsx("option", { value: "French", children: "French" }),
              /* @__PURE__ */ R.jsx("option", { value: "German", children: "German" }),
              /* @__PURE__ */ R.jsx("option", { value: "Greek", children: "Greek" }),
              /* @__PURE__ */ R.jsx("option", { value: "Indian", children: "Indian" }),
              /* @__PURE__ */ R.jsx("option", { value: "Irish", children: "Irish" }),
              /* @__PURE__ */ R.jsx("option", { value: "Italian", children: "Italian" }),
              /* @__PURE__ */ R.jsx("option", { value: "Japanese", children: "Japanese" }),
              /* @__PURE__ */ R.jsx("option", { value: "Jewish", children: "Jewish" }),
              /* @__PURE__ */ R.jsx("option", { value: "Korean", children: "Korean" }),
              /* @__PURE__ */ R.jsx("option", { value: "Latin American", children: "Latin American" }),
              /* @__PURE__ */ R.jsx("option", { value: "Mediterranean", children: "Mediterranean" }),
              /* @__PURE__ */ R.jsx("option", { value: "Mexican", children: "Mexican" }),
              /* @__PURE__ */ R.jsx("option", { value: "Middle Eastern", children: "Middle Eastern" }),
              /* @__PURE__ */ R.jsx("option", { value: "Nordic", children: "Nordic" }),
              /* @__PURE__ */ R.jsx("option", { value: "Southern", children: "Southern" }),
              /* @__PURE__ */ R.jsx("option", { value: "Spanish", children: "Spanish" }),
              /* @__PURE__ */ R.jsx("option", { value: "Thai", children: "Thai" }),
              /* @__PURE__ */ R.jsx("option", { value: "Vietnamese", children: "Vietnamese" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ R.jsxs("div", { className: "input-group", children: [
        /* @__PURE__ */ R.jsx("span", { className: "input-group-text", children: "excludeCuisine: " }),
        /* @__PURE__ */ R.jsxs(
          "select",
          {
            className: "form-control",
            name: "excludeCuisine",
            id: "excludeCuisine",
            onChange: (K) => ge(K.target.value),
            children: [
              /* @__PURE__ */ R.jsx("option", { value: "", children: "Exclude Cuisine" }),
              /* @__PURE__ */ R.jsx("option", { value: "African", children: "African" }),
              /* @__PURE__ */ R.jsx("option", { value: "Asian", children: "Asian" }),
              /* @__PURE__ */ R.jsx("option", { value: "American", children: "American" }),
              /* @__PURE__ */ R.jsx("option", { value: "British", children: "British" }),
              /* @__PURE__ */ R.jsx("option", { value: "Cajun", children: "Cajun" }),
              /* @__PURE__ */ R.jsx("option", { value: "Caribbean", children: "Caribbean" }),
              /* @__PURE__ */ R.jsx("option", { value: "Chinese", children: "Chinese" }),
              /* @__PURE__ */ R.jsx("option", { value: "Eastern European", children: "Eastern European" }),
              /* @__PURE__ */ R.jsx("option", { value: "European", children: "European" }),
              /* @__PURE__ */ R.jsx("option", { value: "French", children: "French" }),
              /* @__PURE__ */ R.jsx("option", { value: "German", children: "German" }),
              /* @__PURE__ */ R.jsx("option", { value: "Greek", children: "Greek" }),
              /* @__PURE__ */ R.jsx("option", { value: "Indian", children: "Indian" }),
              /* @__PURE__ */ R.jsx("option", { value: "Irish", children: "Irish" }),
              /* @__PURE__ */ R.jsx("option", { value: "Italian", children: "Italian" }),
              /* @__PURE__ */ R.jsx("option", { value: "Japanese", children: "Japanese" }),
              /* @__PURE__ */ R.jsx("option", { value: "Jewish", children: "Jewish" }),
              /* @__PURE__ */ R.jsx("option", { value: "Korean", children: "Korean" }),
              /* @__PURE__ */ R.jsx("option", { value: "Latin American", children: "Latin American" }),
              /* @__PURE__ */ R.jsx("option", { value: "Mediterranean", children: "Mediterranean" }),
              /* @__PURE__ */ R.jsx("option", { value: "Mexican", children: "Mexican" }),
              /* @__PURE__ */ R.jsx("option", { value: "Middle Eastern", children: "Middle Eastern" }),
              /* @__PURE__ */ R.jsx("option", { value: "Nordic", children: "Nordic" }),
              /* @__PURE__ */ R.jsx("option", { value: "Southern", children: "Southern" }),
              /* @__PURE__ */ R.jsx("option", { value: "Spanish", children: "Spanish" }),
              /* @__PURE__ */ R.jsx("option", { value: "Thai", children: "Thai" }),
              /* @__PURE__ */ R.jsx("option", { value: "Vietnamese", children: "Vietnamese" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ R.jsxs("div", { className: "input-group", children: [
        /* @__PURE__ */ R.jsx("span", { className: "input-group-text", children: "Diet: " }),
        /* @__PURE__ */ R.jsxs(
          "select",
          {
            className: "form-control",
            name: "diet",
            id: "diet",
            onChange: (K) => ft(K.target.value),
            children: [
              /* @__PURE__ */ R.jsx("option", { value: "", children: "Select Diet" }),
              /* @__PURE__ */ R.jsx("option", { value: "Gluten Free", children: "Gluten Free" }),
              /* @__PURE__ */ R.jsx("option", { value: "Ketogenic", children: "Ketogenic" }),
              /* @__PURE__ */ R.jsx("option", { value: "Vegetarian", children: "Vegetarian" }),
              /* @__PURE__ */ R.jsx("option", { value: "Lacto-Vegetarian", children: "Lacto-Vegetarian" }),
              /* @__PURE__ */ R.jsx("option", { value: "Ovo-Vegetarian", children: "Ovo-Vegetarian" }),
              /* @__PURE__ */ R.jsx("option", { value: "Vegan", children: "Vegan" }),
              /* @__PURE__ */ R.jsx("option", { value: "Pescetarian", children: "Pescetarian" }),
              /* @__PURE__ */ R.jsx("option", { value: "Paleo", children: "Paleo" }),
              /* @__PURE__ */ R.jsx("option", { value: "Primal", children: "Primal" }),
              /* @__PURE__ */ R.jsx("option", { value: "Low FODMAP", children: "Low FODMAP" }),
              /* @__PURE__ */ R.jsx("option", { value: "Whole30", children: "Whole30" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ R.jsxs("div", { className: "input-group", children: [
        /* @__PURE__ */ R.jsx("span", { className: "input-group-text", children: "Intolerances: " }),
        /* @__PURE__ */ R.jsxs(
          "select",
          {
            className: "form-control",
            name: "intolerances",
            id: "intolerances",
            onChange: (K) => ce(K.target.value),
            children: [
              /* @__PURE__ */ R.jsx("option", { value: "", children: "Select Intolerance" }),
              /* @__PURE__ */ R.jsx("option", { value: "Dairy", children: "Dairy" }),
              /* @__PURE__ */ R.jsx("option", { value: "Egg", children: "Egg" }),
              /* @__PURE__ */ R.jsx("option", { value: "Gluten", children: "Gluten" }),
              /* @__PURE__ */ R.jsx("option", { value: "Grain", children: "Grain" }),
              /* @__PURE__ */ R.jsx("option", { value: "Peanut", children: "Peanut" }),
              /* @__PURE__ */ R.jsx("option", { value: "Seafood", children: "Seafood" }),
              /* @__PURE__ */ R.jsx("option", { value: "Sesame", children: "Sesame" }),
              /* @__PURE__ */ R.jsx("option", { value: "Shellfish", children: "Shellfish" }),
              /* @__PURE__ */ R.jsx("option", { value: "Soy", children: "Soy" }),
              /* @__PURE__ */ R.jsx("option", { value: "Tree Nut", children: "Tree Nut" }),
              /* @__PURE__ */ R.jsx("option", { value: "Wheat", children: "Wheat" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ R.jsxs("div", { className: "input-group", children: [
        /* @__PURE__ */ R.jsx("span", { className: "input-group-text", children: "type: " }),
        /* @__PURE__ */ R.jsxs(
          "select",
          {
            className: "form-control",
            name: "type",
            id: "type",
            onChange: (K) => te(K.target.value),
            children: [
              /* @__PURE__ */ R.jsx("option", { value: "", children: "Select Type" }),
              /* @__PURE__ */ R.jsx("option", { value: "main course", children: "main course" }),
              /* @__PURE__ */ R.jsx("option", { value: "side dish", children: "side dish" }),
              /* @__PURE__ */ R.jsx("option", { value: "dessert", children: "dessert" }),
              /* @__PURE__ */ R.jsx("option", { value: "appetizer", children: "appetizer" }),
              /* @__PURE__ */ R.jsx("option", { value: "salad", children: "salad" }),
              /* @__PURE__ */ R.jsx("option", { value: "bread", children: "bread" }),
              /* @__PURE__ */ R.jsx("option", { value: "breakfast", children: "breakfast" }),
              /* @__PURE__ */ R.jsx("option", { value: "soup", children: "soup" }),
              /* @__PURE__ */ R.jsx("option", { value: "beverage", children: "beverage" }),
              /* @__PURE__ */ R.jsx("option", { value: "sauce", children: "sauce" }),
              /* @__PURE__ */ R.jsx("option", { value: "marinade", children: "marinade" }),
              /* @__PURE__ */ R.jsx("option", { value: "fingerfood", children: "fingerfood" }),
              /* @__PURE__ */ R.jsx("option", { value: "snack", children: "snack" }),
              /* @__PURE__ */ R.jsx("option", { value: "drink", children: "drink" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ R.jsxs("div", { className: "input-group", children: [
        /* @__PURE__ */ R.jsx("span", { className: "input-group-text", children: "Sort: " }),
        /* @__PURE__ */ R.jsxs(
          "select",
          {
            className: "form-control",
            name: "sort",
            id: "tysortpe",
            onChange: (K) => fe(K.target.value),
            children: [
              /* @__PURE__ */ R.jsx("option", { value: "", children: "Select Type" }),
              /* @__PURE__ */ R.jsx("option", { value: "meta-score", children: "meta-score" }),
              /* @__PURE__ */ R.jsx("option", { value: "popularity", children: "popularity" }),
              /* @__PURE__ */ R.jsx("option", { value: "healthiness", children: "healthiness" }),
              /* @__PURE__ */ R.jsx("option", { value: "price", children: "price" }),
              /* @__PURE__ */ R.jsx("option", { value: "time", children: "time" }),
              /* @__PURE__ */ R.jsx("option", { value: "random", children: "random" }),
              /* @__PURE__ */ R.jsx("option", { value: "max-used-ingredients", children: "max-used-ingredients" }),
              /* @__PURE__ */ R.jsx("option", { value: "min-missing-ingredients", children: "min-missing-ingredients" }),
              /* @__PURE__ */ R.jsx("option", { value: "alcohol", children: "alcohol" }),
              /* @__PURE__ */ R.jsx("option", { value: "caffeine", children: "caffeine" }),
              /* @__PURE__ */ R.jsx("option", { value: "copper", children: "copper" }),
              /* @__PURE__ */ R.jsx("option", { value: "energy", children: "energy" }),
              /* @__PURE__ */ R.jsx("option", { value: "calories", children: "calories" }),
              /* @__PURE__ */ R.jsx("option", { value: "calcium", children: "calcium" }),
              /* @__PURE__ */ R.jsx("option", { value: "carbohydrates", children: "carbohydrates" }),
              /* @__PURE__ */ R.jsx("option", { value: "carbs", children: "carbs" }),
              /* @__PURE__ */ R.jsx("option", { value: "choline", children: "choline" }),
              /* @__PURE__ */ R.jsx("option", { value: "cholesterol", children: "cholesterol" }),
              /* @__PURE__ */ R.jsx("option", { value: "total-fat", children: "total-fat" }),
              /* @__PURE__ */ R.jsx("option", { value: "fluoride", children: "fluoride" }),
              /* @__PURE__ */ R.jsx("option", { value: "trans-fat", children: "trans-fat" }),
              /* @__PURE__ */ R.jsx("option", { value: "saturated-fat", children: "saturated-fat" }),
              /* @__PURE__ */ R.jsx("option", { value: "mono-unsaturated-fat", children: "mono-unsaturated-fat" }),
              /* @__PURE__ */ R.jsx("option", { value: "poly-unsaturated-fat", children: "poly-unsaturated-fat" }),
              /* @__PURE__ */ R.jsx("option", { value: "fiber", children: "fiber" }),
              /* @__PURE__ */ R.jsx("option", { value: "folate", children: "folate" }),
              /* @__PURE__ */ R.jsx("option", { value: "folic-acid", children: "folic-acid" }),
              /* @__PURE__ */ R.jsx("option", { value: "iodine", children: "iodine" }),
              /* @__PURE__ */ R.jsx("option", { value: "iron", children: "iron" }),
              /* @__PURE__ */ R.jsx("option", { value: "magnesium", children: "magnesium" }),
              /* @__PURE__ */ R.jsx("option", { value: "manganese", children: "manganese" }),
              /* @__PURE__ */ R.jsx("option", { value: "vitamin-b3", children: "vitamin-b3" }),
              /* @__PURE__ */ R.jsx("option", { value: "niacin", children: "niacin" }),
              /* @__PURE__ */ R.jsx("option", { value: "vitamin-b5", children: "vitamin-b5" }),
              /* @__PURE__ */ R.jsx("option", { value: "pantothenic-acid", children: "pantothenic-acid" }),
              /* @__PURE__ */ R.jsx("option", { value: "phosphorus", children: "phosphorus" }),
              /* @__PURE__ */ R.jsx("option", { value: "potassium", children: "potassium" }),
              /* @__PURE__ */ R.jsx("option", { value: "protein", children: "protein" }),
              /* @__PURE__ */ R.jsx("option", { value: "vitamin-b2", children: "vitamin-b2" }),
              /* @__PURE__ */ R.jsx("option", { value: "riboflavin", children: "riboflavin" }),
              /* @__PURE__ */ R.jsx("option", { value: "selenium", children: "selenium" }),
              /* @__PURE__ */ R.jsx("option", { value: "sodium", children: "sodium" }),
              /* @__PURE__ */ R.jsx("option", { value: "vitamin-b1", children: "vitamin-b1" }),
              /* @__PURE__ */ R.jsx("option", { value: "thiamin", children: "thiamin" }),
              /* @__PURE__ */ R.jsx("option", { value: "vitamin-a", children: "vitamin-a" }),
              /* @__PURE__ */ R.jsx("option", { value: "vitamin-b6", children: "vitamin-b6" }),
              /* @__PURE__ */ R.jsx("option", { value: "vitamin-b12", children: "vitamin-b12" }),
              /* @__PURE__ */ R.jsx("option", { value: "vitamin-c", children: "vitamin-c" }),
              /* @__PURE__ */ R.jsx("option", { value: "vitamin-d", children: "vitamin-d" }),
              /* @__PURE__ */ R.jsx("option", { value: "vitamin-e", children: "vitamin-e" }),
              /* @__PURE__ */ R.jsx("option", { value: "vitamin-k", children: "vitamin-k" }),
              /* @__PURE__ */ R.jsx("option", { value: "sugar", children: "sugar" }),
              /* @__PURE__ */ R.jsx("option", { value: "zinc", children: "zinc" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ R.jsxs("div", { className: "input-group", children: [
        /* @__PURE__ */ R.jsx("span", { className: "input-group-text", children: "Min Carbs: " }),
        /* @__PURE__ */ R.jsx(
          "input",
          {
            className: "form-control",
            type: "text",
            value: Pe,
            onChange: (K) => gt(K.target.value),
            placeholder: "Min Carbs"
          }
        )
      ] }),
      /* @__PURE__ */ R.jsxs("div", { className: "input-group", children: [
        /* @__PURE__ */ R.jsx("span", { className: "input-group-text", children: "Max Carbs: " }),
        /* @__PURE__ */ R.jsx(
          "input",
          {
            className: "form-control",
            type: "text",
            value: st,
            onChange: (K) => an(K.target.value),
            placeholder: "Max Carbs"
          }
        )
      ] }),
      /* @__PURE__ */ R.jsxs("div", { className: "input-group", children: [
        /* @__PURE__ */ R.jsx("span", { className: "input-group-text", children: "Min Protein: " }),
        /* @__PURE__ */ R.jsx(
          "input",
          {
            className: "form-control",
            type: "text",
            value: at,
            onChange: (K) => Qe(K.target.value),
            placeholder: "Min Protein"
          }
        )
      ] }),
      /* @__PURE__ */ R.jsxs("div", { className: "input-group", children: [
        /* @__PURE__ */ R.jsx("span", { className: "input-group-text", children: "Max Protein: " }),
        /* @__PURE__ */ R.jsx(
          "input",
          {
            className: "form-control",
            type: "text",
            value: ct,
            onChange: (K) => De(K.target.value),
            placeholder: "Max Protein"
          }
        )
      ] }),
      /* @__PURE__ */ R.jsxs("div", { className: "input-group", children: [
        /* @__PURE__ */ R.jsx("span", { className: "input-group-text", children: "Min Calories: " }),
        /* @__PURE__ */ R.jsx(
          "input",
          {
            className: "form-control",
            type: "text",
            value: it,
            onChange: (K) => Ve(K.target.value),
            placeholder: "Min Calories"
          }
        )
      ] }),
      /* @__PURE__ */ R.jsxs("div", { className: "input-group", children: [
        /* @__PURE__ */ R.jsx("span", { className: "input-group-text", children: "Max Calories: " }),
        /* @__PURE__ */ R.jsx(
          "input",
          {
            className: "form-control",
            type: "text",
            value: Gt,
            onChange: (K) => hn(K.target.value),
            placeholder: "Max Calories"
          }
        )
      ] }),
      /* @__PURE__ */ R.jsxs("div", { className: "input-group", children: [
        /* @__PURE__ */ R.jsx("span", { className: "input-group-text", children: "Min Fat: " }),
        /* @__PURE__ */ R.jsx(
          "input",
          {
            className: "form-control",
            type: "text",
            value: Ut,
            onChange: (K) => _t(K.target.value),
            placeholder: "Min Fat"
          }
        )
      ] }),
      /* @__PURE__ */ R.jsxs("div", { className: "input-group", children: [
        /* @__PURE__ */ R.jsx("span", { className: "input-group-text", children: "Max Fat: " }),
        /* @__PURE__ */ R.jsx(
          "input",
          {
            className: "form-control",
            type: "text",
            value: ln,
            onChange: (K) => ze(K.target.value),
            placeholder: "Max Fat"
          }
        )
      ] }),
      /* @__PURE__ */ R.jsx("div", { className: "input-group", children: /* @__PURE__ */ R.jsxs("div", { className: "form-check", children: [
        /* @__PURE__ */ R.jsx(
          "input",
          {
            className: "form-check-input",
            type: "checkbox",
            checked: Ge,
            onChange: (K) => Mt(K.target.checked)
          }
        ),
        /* @__PURE__ */ R.jsx("label", { className: "form-check-label", children: "Fill Ingredients:" })
      ] }) }),
      /* @__PURE__ */ R.jsx("br", {}),
      /* @__PURE__ */ R.jsx(mD, { type: "submit", className: "btn btn-primary", children: "Submit" })
    ] }),
    /* @__PURE__ */ R.jsx("hr", {}),
    /* @__PURE__ */ R.jsx("br", {}),
    /* @__PURE__ */ R.jsx("section", { className: "bg-light", children: St.map((K, T) => {
      const B = K.nutrition != null, le = K.missedIngredientCount > 0;
      return /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
        /* @__PURE__ */ R.jsxs("div", { className: "p-2 bg-dark border", children: [
          /* @__PURE__ */ R.jsx("p", { className: "h4 text-white", children: K.title }, `${K.id}`),
          /* @__PURE__ */ R.jsx("img", { src: K.image }),
          B && K.nutrition.nutrients.map((Te) => /* @__PURE__ */ R.jsx(R.Fragment, { children: /* @__PURE__ */ R.jsxs("p", { className: "text-white", children: [
            Te.name,
            ": ",
            Te.amount,
            " ",
            Te.unit
          ] }) })),
          /* @__PURE__ */ R.jsx("ul", { className: "list-group", children: le && K.missedIngredients.map((Te) => /* @__PURE__ */ R.jsxs("li", { className: "list-group-item", children: [
            /* @__PURE__ */ R.jsx("span", { children: Te.original }),
            /* @__PURE__ */ R.jsx("span", { className: ".p-3", children: /* @__PURE__ */ R.jsx("img", { src: Te.image }) })
          ] })) })
        ] }),
        /* @__PURE__ */ R.jsx("br", {})
      ] });
    }) })
  ] });
};
Xp.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ R.jsx(J_.StrictMode, { children: /* @__PURE__ */ R.jsx(yD, {}) })
);
