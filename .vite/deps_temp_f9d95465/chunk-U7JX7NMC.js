import {
  useNavItem
} from "./chunk-NAE42GPA.js";
import {
  makeEventKey
} from "./chunk-V726A236.js";
import {
  useButtonProps
} from "./chunk-YGGZSDZV.js";
import {
  useEventCallback
} from "./chunk-G3GSFHMY.js";
import {
  require_classnames,
  require_jsx_runtime,
  useBootstrapPrefix
} from "./chunk-SCFAMNOP.js";
import {
  __toESM,
  require_react
} from "./chunk-UPDK7Z2H.js";

// node_modules/react-bootstrap/esm/NavLink.js
var import_classnames = __toESM(require_classnames());
var React2 = __toESM(require_react());

// node_modules/@restart/ui/esm/Anchor.js
var React = __toESM(require_react());

// node_modules/@restart/hooks/esm/useEventListener.js
var import_react = __toESM(require_react());
function useEventListener(eventTarget, event, listener, capture = false) {
  const handler = useEventCallback(listener);
  (0, import_react.useEffect)(() => {
    const target = typeof eventTarget === "function" ? eventTarget() : eventTarget;
    target.addEventListener(event, handler, capture);
    return () => target.removeEventListener(event, handler, capture);
  }, [eventTarget]);
}

// node_modules/@restart/hooks/esm/useGlobalListener.js
var import_react2 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useInterval.js
var import_react3 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useRafInterval.js
var import_react4 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useMergeState.js
var import_react5 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useImage.js
var import_react6 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useResizeObserver.js
var import_react7 = __toESM(require_react());

// node_modules/@restart/ui/esm/Anchor.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["onKeyDown"];
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function isTrivialHref(href) {
  return !href || href.trim() === "#";
}
var Anchor = React.forwardRef((_ref, ref) => {
  let {
    onKeyDown
  } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded);
  const [buttonProps] = useButtonProps(Object.assign({
    tagName: "a"
  }, props));
  const handleKeyDown = useEventCallback((e) => {
    buttonProps.onKeyDown(e);
    onKeyDown == null ? void 0 : onKeyDown(e);
  });
  if (isTrivialHref(props.href) || props.role === "button") {
    return (0, import_jsx_runtime.jsx)("a", Object.assign({
      ref
    }, props, buttonProps, {
      onKeyDown: handleKeyDown
    }));
  }
  return (0, import_jsx_runtime.jsx)("a", Object.assign({
    ref
  }, props, {
    onKeyDown
  }));
});
Anchor.displayName = "Anchor";
var Anchor_default = Anchor;

// node_modules/react-bootstrap/esm/NavLink.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var NavLink = React2.forwardRef(({
  bsPrefix,
  className,
  as: Component = Anchor_default,
  active,
  eventKey,
  disabled = false,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "nav-link");
  const [navItemProps, meta] = useNavItem({
    key: makeEventKey(eventKey, props.href),
    active,
    disabled,
    ...props
  });
  return (0, import_jsx_runtime2.jsx)(Component, {
    ...props,
    ...navItemProps,
    ref,
    disabled,
    className: (0, import_classnames.default)(className, bsPrefix, disabled && "disabled", meta.isActive && "active")
  });
});
NavLink.displayName = "NavLink";
var NavLink_default = NavLink;

export {
  useEventListener,
  Anchor_default,
  NavLink_default
};
//# sourceMappingURL=chunk-U7JX7NMC.js.map
