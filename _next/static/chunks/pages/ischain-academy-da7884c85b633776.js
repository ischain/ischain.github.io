(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[429],{9106:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ischain-academy",function(){return r(9659)}])},3538:function(e,t,r){"use strict";var n=r(5893),i=r(7294),a=r(1664);function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=o(e);if(t){var i=o(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return l(this,r)}}var p=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(l,e);var t,r,i,o=d(l);function l(){return c(this,l),o.apply(this,arguments)}return t=l,(r=[{key:"render",value:function(){var e=this.props,t=e.pageTitle,r=e.homePageUrl,i=e.homePageText,c=e.activePageText;return(0,n.jsx)("div",{className:"page-title-area item-bg1",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"page-title-content",children:[(0,n.jsx)("h2",{children:t}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(a.default,{href:r,children:(0,n.jsx)("a",{children:i})})}),(0,n.jsx)("li",{children:c})]})]})})})}}])&&s(t.prototype,r),i&&s(t,i),l}(i.Component);t.Z=p},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,a=[],c=!0,s=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);c=!0);}catch(o){s=!0,i=o}finally{try{c||null==r.return||r.return()}finally{if(s)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,c=(a=r(7294))&&a.__esModule?a:{default:a},s=r(6273),o=r(387),l=r(7190);var u={};function f(e,t,r,n){if(e&&s.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var i=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(i?"%"+i:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=o.useRouter(),a=c.default.useMemo((function(){var t=i(s.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?s.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,p=a.as,h=e.children,m=e.replace,x=e.shallow,v=e.scroll,j=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var y=(t=c.default.Children.only(h))&&"object"===typeof t&&t.ref,g=i(l.useIntersection({rootMargin:"200px"}),2),b=g[0],N=g[1],w=c.default.useCallback((function(e){b(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,b]);c.default.useEffect((function(){var e=N&&r&&s.isLocalURL(d),t="undefined"!==typeof j?j:n&&n.locale,i=u[d+"%"+p+(t?"%"+t:"")];e&&!i&&f(n,d,p,{locale:t})}),[p,d,N,j,r,n]);var O={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,i,a,c,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(r))&&(e.preventDefault(),null==c&&n.indexOf("#")>=0&&(c=!1),t[i?"replace":"push"](r,n,{shallow:a,locale:o,scroll:c}))}(e,n,d,p,m,x,v,j)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var _="undefined"!==typeof j?j:n&&n.locale,P=n&&n.isLocaleDomain&&s.getDomainLocale(p,_,n&&n.locales,n&&n.domainLocales);O.href=P||s.addBasePath(s.addLocale(p,_,n&&n.defaultLocale))}return c.default.cloneElement(t,O)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,a=[],c=!0,s=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);c=!0);}catch(o){s=!0,i=o}finally{try{c||null==r.return||r.return()}finally{if(s)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!s,l=a.useRef(),u=i(a.useState(!1),2),f=u[0],d=u[1],p=i(a.useState(t?t.current:null),2),h=p[0],m=p[1],x=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||f||e&&e.tagName&&(l.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=o.get(t);if(r)return r;var n=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return o.set(t,r={id:t,observer:i,elements:n}),r}(r),i=n.id,a=n.observer,c=n.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),o.delete(i))}}(e,(function(e){return e&&d(e)}),{root:h,rootMargin:r}))}),[n,h,r,f]);return a.useEffect((function(){if(!s&&!f){var e=c.requestIdleCallback((function(){return d(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[f]),a.useEffect((function(){t&&m(t.current)}),[t]),[x,f]};var a=r(7294),c=r(9311),s="undefined"!==typeof IntersectionObserver;var o=new Map},9659:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return O}});var n=r(5893),i=r(7294),a=r(3538),c=r(1664);function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return!t||"object"!==d(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=l(e);if(t){var i=l(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return u(this,r)}}var h=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(l,e);var t,r,i,a=p(l);function l(){return s(this,l),a.apply(this,arguments)}return t=l,(r=[{key:"render",value:function(){return(0,n.jsx)("section",{className:"features-area features-area-inner-style ptb-100",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,n.jsxs)("div",{className:"single-features",children:[(0,n.jsx)("i",{className:"flaticon-cloud-computing-1"}),(0,n.jsx)("h3",{children:"Data Science"}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita."}),(0,n.jsx)(c.default,{href:"/service-details",children:(0,n.jsx)("a",{className:"read-more-icon",children:(0,n.jsx)("span",{className:"flaticon-right-arrow"})})})]})}),(0,n.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,n.jsxs)("div",{className:"single-features",children:[(0,n.jsx)("i",{className:"flaticon-engineer"}),(0,n.jsx)("h3",{children:"Data Engineer"}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita."}),(0,n.jsx)(c.default,{href:"/service-details",children:(0,n.jsx)("a",{className:"read-more-icon",children:(0,n.jsx)("span",{className:"flaticon-right-arrow"})})})]})}),(0,n.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,n.jsxs)("div",{className:"single-features",children:[(0,n.jsx)("i",{className:"flaticon-success"}),(0,n.jsx)("h3",{children:"Facing AI Challenges"}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita."}),(0,n.jsx)(c.default,{href:"/service-details",children:(0,n.jsx)("a",{className:"read-more-icon",children:(0,n.jsx)("span",{className:"flaticon-right-arrow"})})})]})}),(0,n.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,n.jsxs)("div",{className:"single-features",children:[(0,n.jsx)("i",{className:"flaticon-technical-support"}),(0,n.jsx)("h3",{children:"Safe Security"}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita."}),(0,n.jsx)(c.default,{href:"/service-details",children:(0,n.jsx)("a",{className:"read-more-icon",children:(0,n.jsx)("span",{className:"flaticon-right-arrow"})})})]})}),(0,n.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,n.jsxs)("div",{className:"single-features",children:[(0,n.jsx)("i",{className:"flaticon-shield"}),(0,n.jsx)("h3",{children:"Technical Support"}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita."}),(0,n.jsx)(c.default,{href:"/service-details",children:(0,n.jsx)("a",{className:"read-more-icon",children:(0,n.jsx)("span",{className:"flaticon-right-arrow"})})})]})}),(0,n.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,n.jsxs)("div",{className:"single-features",children:[(0,n.jsx)("i",{className:"flaticon-success"}),(0,n.jsx)("h3",{children:"Live Support"}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita."}),(0,n.jsx)(c.default,{href:"/service-details",children:(0,n.jsx)("a",{className:"read-more-icon",children:(0,n.jsx)("span",{className:"flaticon-right-arrow"})})})]})}),(0,n.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,n.jsxs)("div",{className:"single-features",children:[(0,n.jsx)("i",{className:"flaticon-machine-learning"}),(0,n.jsx)("h3",{children:"Heavy Industry"}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita."}),(0,n.jsx)(c.default,{href:"/service-details",children:(0,n.jsx)("a",{className:"read-more-icon",children:(0,n.jsx)("span",{className:"flaticon-right-arrow"})})})]})}),(0,n.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,n.jsxs)("div",{className:"single-features",children:[(0,n.jsx)("i",{className:"flaticon-artificial-intelligence"}),(0,n.jsx)("h3",{children:"Transportation"}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita."}),(0,n.jsx)(c.default,{href:"/service-details",children:(0,n.jsx)("a",{className:"read-more-icon",children:(0,n.jsx)("span",{className:"flaticon-right-arrow"})})})]})}),(0,n.jsx)("div",{className:"col-lg-4 col-sm-6 offset-sm-3 offset-lg-0",children:(0,n.jsxs)("div",{className:"single-features",children:[(0,n.jsx)("i",{className:"flaticon-health"}),(0,n.jsx)("h3",{children:"Health Care"}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita."}),(0,n.jsx)(c.default,{href:"/service-details",children:(0,n.jsx)("a",{className:"read-more-icon",children:(0,n.jsx)("span",{className:"flaticon-right-arrow"})})})]})}),(0,n.jsx)("div",{className:"col-lg-12",children:(0,n.jsx)("div",{className:"page-navigation-area",children:(0,n.jsx)("nav",{"aria-label":"Page navigation example text-center",children:(0,n.jsxs)("ul",{className:"pagination",children:[(0,n.jsx)("li",{className:"page-item",children:(0,n.jsx)(c.default,{href:"/services/#",children:(0,n.jsx)("a",{className:"page-link page-links",children:(0,n.jsx)("i",{className:"bx bx-chevrons-left"})})})}),(0,n.jsx)("li",{className:"page-item active",children:(0,n.jsx)(c.default,{href:"/services/#",children:(0,n.jsx)("a",{className:"page-link",children:"1"})})}),(0,n.jsx)("li",{className:"page-item",children:(0,n.jsx)(c.default,{href:"/services/#",children:(0,n.jsx)("a",{className:"page-link",children:"2"})})}),(0,n.jsx)("li",{className:"page-item",children:(0,n.jsx)(c.default,{href:"/services/#",children:(0,n.jsx)("a",{className:"page-link",children:"3"})})}),(0,n.jsx)("li",{className:"page-item",children:(0,n.jsx)(c.default,{href:"/services/#",children:(0,n.jsx)("a",{className:"page-link",children:(0,n.jsx)("i",{className:"bx bx-chevrons-right"})})})})]})})})})]})})})}}])&&o(t.prototype,r),i&&o(t,i),l}(i.Component),m=r(8348),x=r(8614);function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return!t||"object"!==N(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var N=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=y(e);if(t){var i=y(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return g(this,r)}}var O=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(s,e);var t,r,i,c=w(s);function s(){return v(this,s),c.apply(this,arguments)}return t=s,(r=[{key:"render",value:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x.Z,{}),(0,n.jsx)(a.Z,{pageTitle:"Ischain Academy",homePageUrl:"/",homePageText:"Home",activePageText:"Ischain Academy"}),(0,n.jsx)(h,{}),(0,n.jsx)(m.Z,{})]})}}])&&j(t.prototype,r),i&&j(t,i),s}(i.Component)},1664:function(e,t,r){e.exports=r(8418)},1163:function(e,t,r){e.exports=r(387)}},function(e){e.O(0,[760,774,888,179],(function(){return t=9106,e(e.s=t);var t}));var t=e.O();_N_E=t}]);