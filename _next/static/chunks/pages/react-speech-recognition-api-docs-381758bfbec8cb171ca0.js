(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[944],{2167:function(e,t,n){"use strict";var r=n(3038);t.default=void 0;var o,c=(o=n(7294))&&o.__esModule?o:{default:o},a=n(1063),i=n(4651),u=n(7426);var l={};function f(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var s=function(e){var t,n=!1!==e.prefetch,o=i.useRouter(),s=c.default.useMemo((function(){var t=a.resolveHref(o,e.href,!0),n=r(t,2),c=n[0],i=n[1];return{href:c,as:e.as?a.resolveHref(o,e.as):i||c}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,_=e.shallow,m=e.scroll,y=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var g=(t=c.default.Children.only(v))&&"object"===typeof t&&t.ref,b=u.useIntersection({rootMargin:"200px"}),E=r(b,2),k=E[0],L=E[1],M=c.default.useCallback((function(e){k(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,k]);c.default.useEffect((function(){var e=L&&n&&a.isLocalURL(d),t="undefined"!==typeof y?y:o&&o.locale,r=l[d+"%"+p+(t?"%"+t:"")];e&&!r&&f(o,d,p,{locale:t})}),[p,d,L,y,n,o]);var w={ref:M,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,i,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](n,r,{shallow:c,locale:u,scroll:i}))}(e,o,d,p,h,_,m,y)},onMouseEnter:function(e){a.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),f(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var x="undefined"!==typeof y?y:o&&o.locale,j=o&&o.isLocaleDomain&&a.getDomainLocale(p,x,o&&o.locales,o&&o.domainLocales);w.href=j||a.addBasePath(a.addLocale(p,x,o&&o.defaultLocale))}return c.default.cloneElement(t,w)};t.default=s},7426:function(e,t,n){"use strict";var r=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,u=o.useRef(),l=o.useState(!1),f=r(l,2),s=f[0],d=f[1],p=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||s||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,c=r.observer,a=r.elements;return a.set(e,t),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,s]);return o.useEffect((function(){if(!a&&!s){var e=c.requestIdleCallback((function(){return d(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[s]),[p,s]};var o=n(7294),c=n(3447),a="undefined"!==typeof IntersectionObserver;var i=new Map},5974:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(1664),o=n(6990),c=n.n(o),a=n(5893);function i(e){var t=e.title,n=e.contentHtml;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{children:t}),(0,a.jsxs)("div",{className:c().Article,children:[(0,a.jsx)(r.default,{href:"/",children:(0,a.jsx)("a",{children:"Back to home"})}),(0,a.jsx)("div",{className:c().Article__content,dangerouslySetInnerHTML:{__html:n}})]})]})}},1778:function(e,t,n){"use strict";n.r(t),n.d(t,{makeGetStaticProps:function(){return r.makeGetStaticProps}});var r=n(5974);t.default=r.default},4204:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c},default:function(){return a}});var r=n(1778),o=n(5893),c=!0;function a(e){var t=e.title,n=e.contentHtml;return(0,o.jsx)(r.default,{title:t,contentHtml:n})}},6937:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/react-speech-recognition-api-docs",function(){return n(4204)}])},6990:function(e){e.exports={Article:"Article_Article__2h4f-",Article__content:"Article_Article__content__Vy2r-"}},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[774,888,179],(function(){return t=6937,e(e.s=t);var t}));var t=e.O();_N_E=t}]);