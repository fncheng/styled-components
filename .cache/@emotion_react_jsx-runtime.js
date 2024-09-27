import {
  require_jsx_runtime
} from "./chunk-57VOABSH.js";
import {
  Emotion$1,
  createEmotionProps,
  hasOwn,
  require_hoist_non_react_statics_cjs
} from "./chunk-GQU44WSH.js";
import "./chunk-PTJMPCFO.js";
import {
  __toESM,
  require_react
} from "./chunk-JTR2U2B6.js";

// node_modules/.pnpm/@emotion+react@11.13.3_@types+react@18.3.7_react@18.3.1/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js
var ReactJSXRuntime = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
var Fragment2 = ReactJSXRuntime.Fragment;
function jsx2(type, props, key) {
  if (!hasOwn.call(props, "css")) {
    return ReactJSXRuntime.jsx(type, props, key);
  }
  return ReactJSXRuntime.jsx(Emotion$1, createEmotionProps(type, props), key);
}
function jsxs2(type, props, key) {
  if (!hasOwn.call(props, "css")) {
    return ReactJSXRuntime.jsxs(type, props, key);
  }
  return ReactJSXRuntime.jsxs(Emotion$1, createEmotionProps(type, props), key);
}
export {
  Fragment2 as Fragment,
  jsx2 as jsx,
  jsxs2 as jsxs
};
//# sourceMappingURL=@emotion_react_jsx-runtime.js.map
