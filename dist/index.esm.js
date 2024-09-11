import{jsx as t,Fragment as e}from"react/jsx-runtime";import{useContext as n,useState as s,useRef as r,useLayoutEffect as o,createContext as i}from"react";class a{static get pathname(){return location.pathname}static arrayOf(t){return console.assert("A given path does not exist nothing."!=t),Array.from(t.matchAll(/(?<=\/)[\w-]+(?=\/|$)/g)).map((t=>t[0]))}}class l{constructor(t){this.consumedPath=[],this.paths=[],this.paths=a.arrayOf(t)}get first(){return this.paths[0]}get relPath(){return"/"+this.paths.join("/")}get absPath(){return"/"+this.consumedPath.join("/")+this.paths.join("/")}consume(){return console.assert(0!=this.paths.length,"Not exists a path that can be consumed."),this.paths[0]&&this.consumedPath.push(this.paths[0]),this.paths=this.paths.slice(1)}}class u{constructor(){this.listeners=[],window.onpopstate=t=>this.notifyListeners(location.pathname)}static get instance(){var t;return null!==(t=this._instance)&&void 0!==t?t:this._instance=new u}addListener(t){console.assert(!this.listeners.includes(t),"Already exists a given listener in the context."),this.listeners.push(t)}removeListener(t){console.assert(this.listeners.includes(t),"Already not exists a given listener in the context."),this.listeners=this.listeners.filter((e=>e!=t))}notifyListeners(t){this.listeners.forEach((e=>e(t)))}push(t){location.pathname!=t&&(this.notifyListeners(t),history.pushState(null,"",t))}move(t){location.pathname!=t&&(history.replaceState({},"",t),this.notifyListeners(location.pathname))}forward(){history.forward(),this.notifyListeners(location.pathname)}backward(){history.back(),this.notifyListeners(location.pathname)}}function c(){let t=n(p),e=u.instance;if(null==t){const[n,r]=s(window.location.pathname);t=new l(n),e.addListener((t=>{r(t)}))}return t}function h({route:n,active:s,first:i}){const a=r(s),l=r(null),u=null==n?void 0:n.props.component,c=null==n?void 0:n.props.element,h=null!=c?c:t(u||e,{});return o((()=>{const t=l.current;if(t&&i&&a.current==s)s||(t.style.display="none");else if(t){a.current=s;const e=getComputedStyle(t),n=e.getPropertyValue("--router-fadein-keyframe").replaceAll('"',""),r=e.getPropertyValue("--router-fadein-duration"),o=e.getPropertyValue("--router-fadeout-keyframe").replaceAll('"',""),i=e.getPropertyValue("--router-fadeout-duration");if(s){if(t.style.display="unset",n)return t.style.animation=`${n} ${r||"0.3s"}`,void(t.onanimationend=null)}else{if(o)return t.style.animation=`${o} ${i||"0.3s"}`,void(t.onanimationend=()=>t.style.display="none");t.style.display="none"}}a.current=s}),[s]),t("route-sliver",{ref:l,children:h})}addEventListener("DOMContentLoaded",(()=>{const t=new CSSStyleSheet;t.insertRule("\n        route-sliver {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n        }\n    "),t.insertRule("\n        *:has(> route-sliver) {\n            position: relative;\n            top: 0px;\n            left: 0px;\n        }\n    "),document.adoptedStyleSheets=[...document.adoptedStyleSheets,t]}));const p=i(null);function d({location:e,children:n}){const s=r(new Set),o=c(),i=Array.isArray(n)?n:[n];let l=i.find((t=>a.arrayOf(t.props.path)[0]==o.first&&null==e||a.arrayOf(t.props.path)[0]==a.arrayOf(null!=e?e:"")[0]&&e));return l&&0!=o.paths.length&&o.consume(),null!=l||(l=i.find((t=>t.props.default))),l&&0==s.current.has(l.props.path)&&s.current.add(l.props.path),t(p.Provider,{value:o,children:Array.from(s.current).map(((e,n)=>{const s=(null==l?void 0:l.props.path)==e,r=i.find((t=>t.props.path==e));return t(h,{active:s,first:0==n,route:r},e)}))})}function m(t){var e;return console.assert(null!=t.element||null!=t.component,"Not exists a given component"),console.assert(null==t.element&&null!=t.component,"Cannot define rendering a component."),console.assert(null!=t.element&&null==t.component,"Cannot define rendering a component."),null!==(e=t.component)&&void 0!==e?e:t.element}var f;function y(t){var e;const n=null!==(e=null==t?void 0:t.context)&&void 0!==e?e:c();return e=>{var s;const r=null!==(s=null==t?void 0:t.routing)&&void 0!==s?s:f.relative,o=e.startsWith("/")?e.slice(1):e;r==f.absolute?u.instance.push(e):u.instance.push("/"+[...n.consumedPath,o].join("/"))}}!function(t){t[t.absolute=0]="absolute",t[t.relative=1]="relative"}(f||(f={}));export{m as Route,d as Router,u as RouterBinding,l as RouterContext,c as useLocation,y as useRoute};
