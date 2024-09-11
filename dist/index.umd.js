!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react/jsx-runtime"),require("react")):"function"==typeof define&&define.amd?define(["exports","react/jsx-runtime","react"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).ReactWidgetsRouter={},t.jsxRuntime,t.React)}(this,(function(t,e,n){"use strict";class s{static get pathname(){return location.pathname}static arrayOf(t){return console.assert("A given path does not exist nothing."!=t),Array.from(t.matchAll(/(?<=\/)[\w-]+(?=\/|$)/g)).map((t=>t[0]))}}class r{constructor(t){this.consumedPath=[],this.paths=[],this.paths=s.arrayOf(t)}get first(){return this.paths[0]}get relPath(){return"/"+this.paths.join("/")}get absPath(){return"/"+this.consumedPath.join("/")+this.paths.join("/")}consume(){return console.assert(0!=this.paths.length,"Not exists a path that can be consumed."),this.paths[0]&&this.consumedPath.push(this.paths[0]),this.paths=this.paths.slice(1)}}class i{constructor(){this.listeners=[],window.onpopstate=t=>this.notifyListeners(location.pathname)}static get instance(){var t;return null!==(t=this._instance)&&void 0!==t?t:this._instance=new i}addListener(t){console.assert(!this.listeners.includes(t),"Already exists a given listener in the context."),this.listeners.push(t)}removeListener(t){console.assert(this.listeners.includes(t),"Already not exists a given listener in the context."),this.listeners=this.listeners.filter((e=>e!=t))}notifyListeners(t){this.listeners.forEach((e=>e(t)))}push(t){location.pathname!=t&&(this.notifyListeners(t),history.pushState(null,"",t))}replace(t){location.pathname!=t&&(this.notifyListeners(t),history.replaceState({},"",t))}pop(t){this.notifyListeners(t),history.back()}}function o(){let t=n.useContext(l),e=i.instance;if(null==t){const[s,i]=n.useState(window.location.pathname);t=new r(s),e.addListener((t=>{i(t)}))}return t}function a({route:t,active:s,first:r}){const i=n.useRef(s),o=n.useRef(null),a=null==t?void 0:t.props.component,l=null==t?void 0:t.props.element,u=null!=l?l:a?e.jsx(a,{}):e.jsx(e.Fragment,{});return n.useLayoutEffect((()=>{const t=o.current;if(t&&r&&i.current==s)s||(t.style.display="none");else if(t){i.current=s;const e=getComputedStyle(t),n=e.getPropertyValue("--router-fadein-keyframe").replaceAll('"',""),r=e.getPropertyValue("--router-fadein-duration"),o=e.getPropertyValue("--router-fadeout-keyframe").replaceAll('"',""),a=e.getPropertyValue("--router-fadeout-duration");if(s){if(t.style.display="unset",n)return t.style.animation=`${n} ${r||"0.3s"}`,void(t.onanimationend=null)}else{if(o)return t.style.animation=`${o} ${a||"0.3s"}`,void(t.onanimationend=()=>t.style.display="none");t.style.display="none"}}i.current=s}),[s]),e.jsx("route-sliver",{ref:o,children:u})}addEventListener("DOMContentLoaded",(()=>{const t=new CSSStyleSheet;t.insertRule("\n        route-sliver {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n        }\n    "),t.insertRule("\n        *:has(> route-sliver) {\n            position: relative;\n            top: 0px; left: 0px;\n        }\n    "),document.adoptedStyleSheets=[...document.adoptedStyleSheets,t]}));const l=n.createContext(null);var u;!function(t){t[t.absolute=0]="absolute",t[t.relative=1]="relative"}(u||(u={})),t.Route=function({component:t,element:e}){return console.assert(null!=e||null!=t),console.assert(null==e&&null!=t),console.assert(null!=e&&null==t),null!=t?t:e},t.Router=function({location:t,children:r}){const i=n.useRef(new Set),u=o(),c=Array.isArray(r)?r:[r];let h=c.find((e=>s.arrayOf(e.props.path)[0]==u.first&&null==t||s.arrayOf(e.props.path)[0]==s.arrayOf(null!=t?t:"")[0]&&t));return h&&0!=u.paths.length&&u.consume(),null!=h||(h=c.find((t=>t.props.default))),h&&0==i.current.has(h.props.path)&&i.current.add(h.props.path),e.jsx(l.Provider,{value:u,children:Array.from(i.current).map(((t,n)=>{const s=(null==h?void 0:h.props.path)==t,r=c.find((e=>e.props.path==t));return e.jsx(a,{active:s,first:0==n,route:r},t)}))})},t.RouterBinding=i,t.RouterContext=r,t.useLocation=o,t.useRoute=function(t){var e;const n=null!==(e=null==t?void 0:t.context)&&void 0!==e?e:o();return e=>{var s;const r=null!==(s=null==t?void 0:t.routing)&&void 0!==s?s:u.relative,o=e.startsWith("/")?e.slice(1):e;r==u.absolute?i.instance.push(e):i.instance.push("/"+[...n.consumedPath,o].join("/"))}}}));
