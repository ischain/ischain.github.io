(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[519],{3834:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/service-details",function(){return r(182)}])},3538:function(e,t,r){"use strict";var n=r(5893),o=r(7294),i=r(1664);function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=a(e);if(t){var o=a(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return l(this,r)}}var p=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(l,e);var t,r,o,a=d(l);function l(){return c(this,l),a.apply(this,arguments)}return t=l,(r=[{key:"render",value:function(){var e=this.props,t=e.pageTitle,r=e.homePageUrl,o=e.homePageText,c=e.activePageText;return(0,n.jsx)("div",{className:"page-title-area item-bg1",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"page-title-content",children:[(0,n.jsx)("h2",{children:t}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(i.default,{href:r,children:(0,n.jsx)("a",{children:o})})}),(0,n.jsx)("li",{children:c})]})]})})})}}])&&s(t.prototype,r),o&&s(t,o),l}(o.Component);t.Z=p},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],c=!0,s=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(a){s=!0,o=a}finally{try{c||null==r.return||r.return()}finally{if(s)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var i,c=(i=r(7294))&&i.__esModule?i:{default:i},s=r(6273),a=r(387),l=r(7190);var u={};function f(e,t,r,n){if(e&&s.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=a.useRouter(),i=c.default.useMemo((function(){var t=o(s.resolveHref(n,e.href,!0),2),r=t[0],i=t[1];return{href:r,as:e.as?s.resolveHref(n,e.as):i||r}}),[n,e.href,e.as]),d=i.href,p=i.as,h=e.children,m=e.replace,y=e.shallow,b=e.scroll,v=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var x=(t=c.default.Children.only(h))&&"object"===typeof t&&t.ref,j=o(l.useIntersection({rootMargin:"200px"}),2),g=j[0],w=j[1],N=c.default.useCallback((function(e){g(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,g]);c.default.useEffect((function(){var e=w&&r&&s.isLocalURL(d),t="undefined"!==typeof v?v:n&&n.locale,o=u[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(n,d,p,{locale:t})}),[p,d,w,v,r,n]);var O={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,i,c,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(r))&&(e.preventDefault(),null==c&&n.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](r,n,{shallow:i,locale:a,scroll:c}))}(e,n,d,p,m,y,b,v)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var _="undefined"!==typeof v?v:n&&n.locale,P=n&&n.isLocaleDomain&&s.getDomainLocale(p,_,n&&n.locales,n&&n.domainLocales);O.href=P||s.addBasePath(s.addLocale(p,_,n&&n.defaultLocale))}return c.default.cloneElement(t,O)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],c=!0,s=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(a){s=!0,o=a}finally{try{c||null==r.return||r.return()}finally{if(s)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!s,l=i.useRef(),u=o(i.useState(!1),2),f=u[0],d=u[1],p=o(i.useState(t?t.current:null),2),h=p[0],m=p[1],y=i.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||f||e&&e.tagName&&(l.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=a.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return a.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,i=n.observer,c=n.elements;return c.set(e,t),i.observe(e),function(){c.delete(e),i.unobserve(e),0===c.size&&(i.disconnect(),a.delete(o))}}(e,(function(e){return e&&d(e)}),{root:h,rootMargin:r}))}),[n,h,r,f]);return i.useEffect((function(){if(!s&&!f){var e=c.requestIdleCallback((function(){return d(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[f]),i.useEffect((function(){t&&m(t.current)}),[t]),[y,f]};var i=r(7294),c=r(9311),s="undefined"!==typeof IntersectionObserver;var a=new Map},182:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return q}});var n=r(5893),o=r(7294),i=r(8614),c=r(3538),s=r(1664);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f(this,r)}}var m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(c,e);var t,r,o,i=h(c);function c(){return a(this,c),i.apply(this,arguments)}return t=c,(r=[{key:"render",value:function(){return(0,n.jsxs)("div",{className:"service-sidebar-area",children:[(0,n.jsxs)("div",{className:"service-list",children:[(0,n.jsx)("h3",{className:"service-details-title",children:"Facilities"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(s.default,{href:"/service-details/#",children:(0,n.jsxs)("a",{children:["Technology",(0,n.jsx)("i",{className:"bx bx-check"})]})})}),(0,n.jsx)("li",{children:(0,n.jsx)(s.default,{href:"/service-details/#",children:(0,n.jsxs)("a",{children:["Tips",(0,n.jsx)("i",{className:"bx bx-check"})]})})}),(0,n.jsx)("li",{children:(0,n.jsx)(s.default,{href:"/service-details/#",children:(0,n.jsxs)("a",{children:["AI & IT",(0,n.jsx)("i",{className:"bx bx-check"})]})})}),(0,n.jsx)("li",{children:(0,n.jsx)(s.default,{href:"/service-details/#",children:(0,n.jsxs)("a",{children:["Solution",(0,n.jsx)("i",{className:"bx bx-check"})]})})})]})]}),(0,n.jsxs)("div",{className:"service-list",children:[(0,n.jsx)("h3",{className:"service-details-title",children:"Contact Info"}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["+800 603 6035",(0,n.jsx)("i",{className:"bx bx-phone-call bx-rotate-270"})]}),(0,n.jsxs)("li",{children:["hello@jumpx.com",(0,n.jsx)("i",{className:"bx bx-envelope"})]}),(0,n.jsxs)("li",{children:["123, Western Road, Australia",(0,n.jsx)("i",{className:"bx bx-location-plus"})]}),(0,n.jsxs)("li",{children:["9:00 AM \u2013 8:00 PM",(0,n.jsx)("i",{className:"bx bx-time"})]})]})]}),(0,n.jsxs)("div",{className:"service-list",children:[(0,n.jsx)("h3",{className:"service-details-title",children:"Download Brochures"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(s.default,{href:"/service-details/#",children:(0,n.jsxs)("a",{children:["PDF File (1)",(0,n.jsx)("i",{className:"bx bxs-cloud-download"})]})})}),(0,n.jsx)("li",{children:(0,n.jsx)(s.default,{href:"/service-details/#",children:(0,n.jsxs)("a",{children:["PDF File (2)",(0,n.jsx)("i",{className:"bx bxs-cloud-download"})]})})}),(0,n.jsx)("li",{children:(0,n.jsx)(s.default,{href:"/service-details/#",children:(0,n.jsxs)("a",{children:["PDF File (3)",(0,n.jsx)("i",{className:"bx bxs-cloud-download"})]})})}),(0,n.jsx)("li",{children:(0,n.jsx)(s.default,{href:"/service-details/#",children:(0,n.jsxs)("a",{children:["PDF File (4)",(0,n.jsx)("i",{className:"bx bxs-cloud-download"})]})})})]})]})]})}}])&&l(t.prototype,r),o&&l(t,o),c}(o.Component);function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return!t||"object"!==g(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=v(e);if(t){var o=v(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return x(this,r)}}var N=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(c,e);var t,r,o,i=w(c);function c(){return y(this,c),i.apply(this,arguments)}return t=c,(r=[{key:"render",value:function(){return(0,n.jsxs)("div",{className:"ask-question",children:[(0,n.jsx)("h3",{children:"Ask Questions"}),(0,n.jsx)("form",{id:"contactForm",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-6 col-sm-6",children:(0,n.jsx)("div",{className:"form-group",children:(0,n.jsx)("input",{type:"text",name:"name",id:"name",className:"form-control",required:!0,placeholder:"Your Name"})})}),(0,n.jsx)("div",{className:"col-lg-6 col-sm-6",children:(0,n.jsx)("div",{className:"form-group",children:(0,n.jsx)("input",{type:"email",name:"email",id:"email",className:"form-control",required:!0,placeholder:"Your Email"})})}),(0,n.jsx)("div",{className:"col-lg-6 col-sm-6",children:(0,n.jsx)("div",{className:"form-group",children:(0,n.jsx)("input",{type:"text",name:"phone_number",id:"phone_number",required:!0,className:"form-control",placeholder:"Your Phone"})})}),(0,n.jsx)("div",{className:"col-lg-6 col-sm-6",children:(0,n.jsx)("div",{className:"form-group",children:(0,n.jsx)("input",{type:"text",name:"msg_subject",id:"msg_subject",className:"form-control",required:!0,placeholder:"Your Subject"})})}),(0,n.jsx)("div",{className:"col-lg-12 col-md-12",children:(0,n.jsx)("div",{className:"form-group",children:(0,n.jsx)("textarea",{name:"message",className:"form-control",id:"message",cols:"30",rows:"5",required:!0,placeholder:"Your Message"})})}),(0,n.jsx)("div",{className:"col-lg-12 col-md-12",children:(0,n.jsx)("button",{type:"submit",className:"default-btn btn-two",children:(0,n.jsx)("span",{className:"label",children:"Send Message"})})})]})})]})}}])&&b(t.prototype,r),o&&b(t,o),c}(o.Component);function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return!t||"object"!==E(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=P(e);if(t){var o=P(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return R(this,r)}}var C=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(c,e);var t,r,o,i=S(c);function c(){return O(this,c),i.apply(this,arguments)}return t=c,(r=[{key:"render",value:function(){return(0,n.jsx)("section",{className:"service-details-area ptb-100",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-8",children:(0,n.jsxs)("div",{className:"service-details-wrap",children:[(0,n.jsx)("div",{className:"service-img",children:(0,n.jsx)("img",{src:"/images/services-details/services-details.jpg",alt:"Image"})}),(0,n.jsx)("h3",{children:"Service Of Warehousing"}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veritatis ducimus rerum sunt dignissimos libero et eum modi! Consequuntur rem incidunt et ducimus magnam sunt rerum hic beatae sed obcaecati. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium asperiores eos obcaecati nostrum sed, corporis placeat quasi pariatur id, est iure, minus quibusdam! Facilis."}),(0,n.jsx)("p",{children:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words."}),(0,n.jsx)("p",{children:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem, you to be sure there isn't anything."}),(0,n.jsx)("div",{className:"car-service-list-wrap",children:(0,n.jsxs)("div",{className:"row align-items-center",children:[(0,n.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,n.jsx)("div",{className:"service-list-img",children:(0,n.jsx)("img",{src:"/images/services-details/services-details2.png",alt:"Image"})})}),(0,n.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,n.jsx)("div",{className:"car-service-list",children:(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("i",{className:"bx bx-check"}),"Engine bay cleaned and dressed"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("i",{className:"bx bx-check"}),"Door card panels cleaned"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("i",{className:"bx bx-check"}),"Plastic trim enhanced"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("i",{className:"bx bx-check"}),"Paint surface clay barred"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("i",{className:"bx bx-check"}),"Alloy wheel treatment inside and out"]})]})})})]})}),(0,n.jsx)(N,{})]})}),(0,n.jsx)("div",{className:"col-lg-4",children:(0,n.jsx)(m,{})})]})})})}}])&&_(t.prototype,r),o&&_(t,o),c}(o.Component),T=r(8348);function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return!t||"object"!==F(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var F=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function D(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=M(e);if(t){var o=M(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return A(this,r)}}var q=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(a,e);var t,r,o,s=D(a);function a(){return I(this,a),s.apply(this,arguments)}return t=a,(r=[{key:"render",value:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{}),(0,n.jsx)(c.Z,{pageTitle:"Service Details",homePageUrl:"/",homePageText:"Home",activePageText:"Service Details"}),(0,n.jsx)(C,{}),(0,n.jsx)(T.Z,{})]})}}])&&L(t.prototype,r),o&&L(t,o),a}(o.Component)},1664:function(e,t,r){e.exports=r(8418)},1163:function(e,t,r){e.exports=r(387)}},function(e){e.O(0,[760,774,888,179],(function(){return t=3834,e(e.s=t);var t}));var t=e.O();_N_E=t}]);