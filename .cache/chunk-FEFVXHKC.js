import {
  Emotion$1,
  ThemeContext,
  createEmotionProps,
  getRegisteredStyles,
  hasOwn,
  insertStyles,
  registerStyles,
  require_hoist_non_react_statics_cjs,
  serializeStyles,
  useInsertionEffectAlwaysWithSyncFallback,
  useInsertionEffectWithLayoutFallback,
  withEmotionCache
} from "./chunk-GQU44WSH.js";
import {
  __toESM,
  require_react
} from "./chunk-JTR2U2B6.js";

// node_modules/.pnpm/@emotion+react@11.13.3_@types+react@18.3.7_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js
var React = __toESM(require_react());
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
var isDevelopment = true;
var pkg = {
  name: "@emotion/react",
  version: "11.13.3",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  exports: {
    ".": {
      types: {
        "import": "./dist/emotion-react.cjs.mjs",
        "default": "./dist/emotion-react.cjs.js"
      },
      development: {
        "edge-light": {
          module: "./dist/emotion-react.development.edge-light.esm.js",
          "import": "./dist/emotion-react.development.edge-light.cjs.mjs",
          "default": "./dist/emotion-react.development.edge-light.cjs.js"
        },
        worker: {
          module: "./dist/emotion-react.development.edge-light.esm.js",
          "import": "./dist/emotion-react.development.edge-light.cjs.mjs",
          "default": "./dist/emotion-react.development.edge-light.cjs.js"
        },
        workerd: {
          module: "./dist/emotion-react.development.edge-light.esm.js",
          "import": "./dist/emotion-react.development.edge-light.cjs.mjs",
          "default": "./dist/emotion-react.development.edge-light.cjs.js"
        },
        browser: {
          module: "./dist/emotion-react.browser.development.esm.js",
          "import": "./dist/emotion-react.browser.development.cjs.mjs",
          "default": "./dist/emotion-react.browser.development.cjs.js"
        },
        module: "./dist/emotion-react.development.esm.js",
        "import": "./dist/emotion-react.development.cjs.mjs",
        "default": "./dist/emotion-react.development.cjs.js"
      },
      "edge-light": {
        module: "./dist/emotion-react.edge-light.esm.js",
        "import": "./dist/emotion-react.edge-light.cjs.mjs",
        "default": "./dist/emotion-react.edge-light.cjs.js"
      },
      worker: {
        module: "./dist/emotion-react.edge-light.esm.js",
        "import": "./dist/emotion-react.edge-light.cjs.mjs",
        "default": "./dist/emotion-react.edge-light.cjs.js"
      },
      workerd: {
        module: "./dist/emotion-react.edge-light.esm.js",
        "import": "./dist/emotion-react.edge-light.cjs.mjs",
        "default": "./dist/emotion-react.edge-light.cjs.js"
      },
      browser: {
        module: "./dist/emotion-react.browser.esm.js",
        "import": "./dist/emotion-react.browser.cjs.mjs",
        "default": "./dist/emotion-react.browser.cjs.js"
      },
      module: "./dist/emotion-react.esm.js",
      "import": "./dist/emotion-react.cjs.mjs",
      "default": "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      types: {
        "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
        "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
      },
      development: {
        "edge-light": {
          module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.esm.js",
          "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.mjs",
          "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.js"
        },
        worker: {
          module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.esm.js",
          "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.mjs",
          "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.js"
        },
        workerd: {
          module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.esm.js",
          "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.mjs",
          "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.js"
        },
        browser: {
          module: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js",
          "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.cjs.mjs",
          "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.cjs.js"
        },
        module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.esm.js",
        "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.cjs.mjs",
        "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.cjs.js"
      },
      "edge-light": {
        module: "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.esm.js",
        "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.mjs",
        "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.js"
      },
      worker: {
        module: "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.esm.js",
        "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.mjs",
        "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.js"
      },
      workerd: {
        module: "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.esm.js",
        "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.mjs",
        "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.js"
      },
      browser: {
        module: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.cjs.mjs",
        "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.cjs.js"
      },
      module: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js",
      "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      types: {
        "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
        "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
      },
      development: {
        "edge-light": {
          module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.esm.js",
          "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.mjs",
          "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.js"
        },
        worker: {
          module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.esm.js",
          "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.mjs",
          "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.js"
        },
        workerd: {
          module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.esm.js",
          "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.mjs",
          "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.js"
        },
        browser: {
          module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.esm.js",
          "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.cjs.mjs",
          "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.cjs.js"
        },
        module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.esm.js",
        "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.cjs.mjs",
        "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.cjs.js"
      },
      "edge-light": {
        module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.esm.js",
        "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.mjs",
        "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.js"
      },
      worker: {
        module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.esm.js",
        "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.mjs",
        "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.js"
      },
      workerd: {
        module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.esm.js",
        "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.mjs",
        "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.js"
      },
      browser: {
        module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.cjs.mjs",
        "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.cjs.js"
      },
      module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js",
      "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      types: {
        "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
        "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
      },
      development: {
        "edge-light": {
          module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.esm.js",
          "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.mjs",
          "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.js"
        },
        worker: {
          module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.esm.js",
          "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.mjs",
          "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.js"
        },
        workerd: {
          module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.esm.js",
          "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.mjs",
          "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.js"
        },
        browser: {
          module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.esm.js",
          "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.cjs.mjs",
          "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.cjs.js"
        },
        module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.esm.js",
        "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.cjs.mjs",
        "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.cjs.js"
      },
      "edge-light": {
        module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.esm.js",
        "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.mjs",
        "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.js"
      },
      worker: {
        module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.esm.js",
        "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.mjs",
        "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.js"
      },
      workerd: {
        module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.esm.js",
        "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.mjs",
        "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.js"
      },
      browser: {
        module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.cjs.mjs",
        "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.cjs.js"
      },
      module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js",
      "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        "import": "./macro.d.mts",
        "default": "./macro.d.ts"
      },
      "default": "./macro.js"
    }
  },
  imports: {
    "#is-development": {
      development: "./src/conditions/true.js",
      "default": "./src/conditions/false.js"
    },
    "#is-browser": {
      "edge-light": "./src/conditions/false.js",
      workerd: "./src/conditions/false.js",
      worker: "./src/conditions/false.js",
      browser: "./src/conditions/true.js",
      "default": "./src/conditions/is-browser.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: false,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.12.0",
    "@emotion/cache": "^11.13.0",
    "@emotion/serialize": "^1.3.1",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.1.0",
    "@emotion/utils": "^1.4.0",
    "@emotion/weak-memoize": "^0.4.0",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: true
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.13.0",
    "@emotion/css-prettifier": "1.1.4",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.13.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^5.4.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            "import": "./macro.d.mts",
            "default": "./macro.d.ts"
          },
          "default": "./macro.js"
        }
      }
    }
  }
};
var jsx = function jsx2(type, props) {
  var args = arguments;
  if (props == null || !hasOwn.call(props, "css")) {
    return React.createElement.apply(void 0, args);
  }
  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion$1;
  createElementArgArray[1] = createEmotionProps(type, props);
  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  }
  return React.createElement.apply(null, createElementArgArray);
};
var warnedAboutCssPropForGlobal = false;
var Global = withEmotionCache(function(props, cache) {
  if (!warnedAboutCssPropForGlobal && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // I don't really want to add it to the type since it shouldn't be used
  (props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }
  var styles = props.styles;
  var serialized = serializeStyles([styles], void 0, React.useContext(ThemeContext));
  var sheetRef = React.useRef();
  useInsertionEffectWithLayoutFallback(function() {
    var key = cache.key + "-global";
    var sheet = new cache.sheet.constructor({
      key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false;
    var node = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }
    if (node !== null) {
      rehydrating = true;
      node.setAttribute("data-emotion", key);
      sheet.hydrate([node]);
    }
    sheetRef.current = [sheet, rehydrating];
    return function() {
      sheet.flush();
    };
  }, [cache]);
  useInsertionEffectWithLayoutFallback(function() {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }
    if (serialized.next !== void 0) {
      insertStyles(cache, serialized.next, true);
    }
    if (sheet.tags.length) {
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }
    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});
{
  Global.displayName = "EmotionGlobal";
}
function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return serializeStyles(args);
}
var keyframes = function keyframes2() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name;
  return {
    name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
var classnames = function classnames2(args) {
  var len = args.length;
  var i = 0;
  var cls = "";
  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;
    switch (typeof arg) {
      case "boolean":
        break;
      case "object": {
        if (Array.isArray(arg)) {
          toAdd = classnames2(arg);
        } else {
          if (arg.styles !== void 0 && arg.name !== void 0) {
            console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.");
          }
          toAdd = "";
          for (var k in arg) {
            if (arg[k] && k) {
              toAdd && (toAdd += " ");
              toAdd += k;
            }
          }
        }
        break;
      }
      default: {
        toAdd = arg;
      }
    }
    if (toAdd) {
      cls && (cls += " ");
      cls += toAdd;
    }
  }
  return cls;
};
function merge(registered, css2, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
  if (registeredStyles.length < 2) {
    return className;
  }
  return rawClassName + css2(registeredStyles);
}
var Insertion = function Insertion2(_ref) {
  var cache = _ref.cache, serializedArr = _ref.serializedArr;
  useInsertionEffectAlwaysWithSyncFallback(function() {
    for (var i = 0; i < serializedArr.length; i++) {
      insertStyles(cache, serializedArr[i], false);
    }
  });
  return null;
};
var ClassNames = withEmotionCache(function(props, cache) {
  var hasRendered = false;
  var serializedArr = [];
  var css2 = function css3() {
    if (hasRendered && isDevelopment) {
      throw new Error("css can only be used during render");
    }
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var serialized = serializeStyles(args, cache.registered);
    serializedArr.push(serialized);
    registerStyles(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };
  var cx = function cx2() {
    if (hasRendered && isDevelopment) {
      throw new Error("cx can only be used during render");
    }
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return merge(cache.registered, css2, classnames(args));
  };
  var content = {
    css: css2,
    cx,
    theme: React.useContext(ThemeContext)
  };
  var ele = props.children(content);
  hasRendered = true;
  return React.createElement(React.Fragment, null, React.createElement(Insertion, {
    cache,
    serializedArr
  }), ele);
});
{
  ClassNames.displayName = "EmotionClassNames";
}
{
  isBrowser = typeof document !== "undefined";
  isTestEnv = typeof jest !== "undefined" || typeof vi !== "undefined";
  if (isBrowser && !isTestEnv) {
    globalContext = // $FlowIgnore
    typeof globalThis !== "undefined" ? globalThis : isBrowser ? window : global;
    globalKey = "__EMOTION_REACT_" + pkg.version.split(".")[0] + "__";
    if (globalContext[globalKey]) {
      console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used.");
    }
    globalContext[globalKey] = true;
  }
}
var isBrowser;
var isTestEnv;
var globalContext;
var globalKey;

export {
  jsx,
  Global,
  css,
  keyframes,
  ClassNames
};
//# sourceMappingURL=chunk-FEFVXHKC.js.map
