(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,n,t){"use strict";var r=t(3038);n.default=void 0;var o,c=(o=t(7294))&&o.__esModule?o:{default:o},i=t(1063),a=t(4651),l=t(7426);var u={};function s(e,n,t,r){if(e&&i.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=a.useRouter(),f=c.default.useMemo((function(){var n=i.resolveHref(o,e.href,!0),t=r(n,2),c=t[0],a=t[1];return{href:c,as:e.as?i.resolveHref(o,e.as):a||c}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,_=e.shallow,g=e.scroll,b=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var y=(n=c.default.Children.only(h))&&"object"===typeof n&&n.ref,m=l.useIntersection({rootMargin:"200px"}),x=r(m,2),j=x[0],w=x[1],E=c.default.useCallback((function(e){j(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,j]);c.default.useEffect((function(){var e=w&&t&&i.isLocalURL(d),n="undefined"!==typeof b?b:o&&o.locale,r=u[d+"%"+p+(n?"%"+n:"")];e&&!r&&s(o,d,p,{locale:n})}),[p,d,w,b,t,o]);var R={ref:E,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,a,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),n[o?"replace":"push"](t,r,{shallow:c,locale:l,scroll:a}))}(e,o,d,p,v,_,g,b)},onMouseEnter:function(e){i.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),s(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var L="undefined"!==typeof b?b:o&&o.locale,M=o&&o.isLocaleDomain&&i.getDomainLocale(p,L,o&&o.locales,o&&o.domainLocales);R.href=M||i.addBasePath(i.addLocale(p,L,o&&o.defaultLocale))}return c.default.cloneElement(n,R)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,l=o.useRef(),u=o.useState(!1),s=r(u,2),f=s[0],d=s[1],p=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),t||f||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=a.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return a.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,i=r.elements;return i.set(e,n),c.observe(e),function(){i.delete(e),c.unobserve(e),0===i.size&&(c.disconnect(),a.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return o.useEffect((function(){if(!i&&!f){var e=c.requestIdleCallback((function(){return d(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=t(7294),c=t(3447),i="undefined"!==typeof IntersectionObserver;var a=new Map},6124:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return a},default:function(){return l}});var r=t(1664),o=t(953),c=t.n(o),i=t(5893),a=!0;function l(e){var n=e.title;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:c().Home__title,children:n}),(0,i.jsx)("h2",{children:"Helping developers build great voice-driven web apps"}),(0,i.jsx)(r.default,{href:"/what-is-web-speech-recognition",children:(0,i.jsx)("a",{children:"What is Web Speech Recognition?"})}),(0,i.jsx)(r.default,{href:"/react-speech-recognition",children:(0,i.jsx)("a",{children:"React Speech Recognition"})}),(0,i.jsx)(r.default,{href:"/react-speech-recognition-demo",children:(0,i.jsx)("a",{children:"React Speech Recognition Demo"})}),(0,i.jsx)(r.default,{href:"/react-speech-recognition-api-docs",children:(0,i.jsx)("a",{children:"React Speech Recognition API Docs"})}),(0,i.jsx)(r.default,{href:"/polyfills",children:(0,i.jsx)("a",{children:"Polyfills for the Speech Recognition API"})})]})}},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6124)}])},953:function(e){e.exports={Home__title:"index_Home__title__CVXPa"}},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);