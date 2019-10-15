(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"./src/shared/actions/blogs.js":function(n,e,t){"use strict";t.d(e,"b",(function(){return a})),t.d(e,"g",(function(){return c})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return s})),t.d(e,"e",(function(){return l})),t.d(e,"f",(function(){return d})),t.d(e,"d",(function(){return f}));var r=t("./node_modules/axios/index.js"),o=t.n(r),i=t("./src/shared/types.js"),a=function(n){return function(e){return o.a.post("/api/blogcontent",{blog:n}).then((function(n){return n.data.blog})).then((function(n){e(function(n){return{type:i.g,blog:n}}(n))}))}},c=function(){return function(n){return o.a.get("/api/collections/usercollections").then((function(n){return n.data.blogcollections})).then((function(e){n(function(n){return{type:i.m,blogcollections:n}}(e))}))}},u=function(n){return function(e){return new Promise((function(t,r){o.a.get("/api/blogcontent",{params:{parameter:n}}).then((function(n){return n.data.blog})).then((function(n){e(function(n){return{type:i.i,blog:n}}(n)),t(n)}))}))}},s=function(n){return function(e){return o.a.post("/api/blogcontent/comments",{data:n}).then((function(n){return n.data.comment})).then((function(n){e(function(n){return{type:i.h,comment:n}}(n))}))}},l=function(n){return function(e){return o.a.get("/api/blogcontent/comments",{params:{blogid:n}}).then((function(n){return n.data.comments})).then((function(n){e(function(n){return{type:i.f,comments:n}}(n))}))}},d=function(n){return function(e){return o.a.get("/api/collections/related",{params:{category:n,limit:3}}).then((function(n){return n.data.blogcollections})).then((function(n){e(function(n){return{type:i.l,blogcollections:n}}(n))}))}},f=function(n){return function(e){return o.a.get("/api/collections/related",{params:{category:n,limit:20}}).then((function(n){return n.data.blogcollections})).then((function(n){e(function(n){return{type:i.b,blogcollections:n}}(n))}))}}},"./src/shared/actions/theme.js":function(n,e,t){"use strict";t.d(e,"a",(function(){return a})),t.d(e,"f",(function(){return c})),t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return s})),t.d(e,"d",(function(){return l})),t.d(e,"e",(function(){return d}));var r=t("./node_modules/axios/index.js"),o=t.n(r),i=t("./src/shared/types.js"),a=function(){return function(n){return o.a.get("/api/category/allcategorynames").then((function(n){return n.data.allcategories})).then((function(e){n(function(n){return{type:i.j,allcategories:n}}(e))}))}},c=function(n){return function(e){return o.a.get("/api/collections/type",{params:{type:n,limit:9,skip:0}}).then((function(n){return n.data.blogcollections})).then((function(n){e(function(n){return{type:i.k,blogcollections:n}}(n))}))}},u=function(n,e,t){return function(r){return new Promise((function(a,c){o.a.get("/api/collections/type",{params:{type:n,limit:e,skip:t}}).then((function(n){return n.data.blogcollections})).then((function(n){r(function(n){return{type:i.a,blogcollections:n}}(n)),a(n)}))}))}},s=function(n){return function(e){return o.a.get("/api/collections/related",{params:{category:n,limit:9}}).then((function(n){return n.data.blogcollections})).then((function(n){e(function(n){return{type:i.c,blogcollections:n}}(n))}))}},l=function(n){return function(e){return o.a.get("/api/collections/related",{params:{category:n,limit:9}}).then((function(n){return n.data.blogcollections})).then((function(n){e(function(n){return{type:i.d,blogcollections:n}}(n))}))}},d=function(n){return function(e){return o.a.get("/api/collections/related",{params:{category:n,limit:9}}).then((function(n){return n.data.blogcollections})).then((function(n){e(function(n){return{type:i.e,blogcollections:n}}(n))}))}}},"./src/shared/container/homePage/components/slidingComponent.js":function(n,e,t){"use strict";var r=t("./node_modules/react/index.js"),o=t.n(r),i=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=t("./node_modules/prop-types/index.js"),c=t.n(a),u=t("./node_modules/react-router-dom/esm/react-router-dom.js"),s=t("./src/shared/lib/buttons/carouselbutton.jsx"),l=t("./src/shared/lib/Headers/index.js");t("./src/shared/actions/blogs.js");function d(n){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function f(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function p(n){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function h(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function m(n,e){return(m=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function b(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function g(){var n=C(["\n      width:80%;\n      height:30%;\n      margin:0 auto;\n      overflow: hidden;\n"]);return g=function(){return n},n}function y(){var n=C(["\n    background-size:cover;\n    background-repeat:no-repeat;\n    background-position:center;\n    width:100%;\n    height:100%;\n    transition:all 0.3s ease-in-out 0s;\n"]);return y=function(){return n},n}function x(){var n=C(["\n      width:80%;\n      height:70%;\n      border-radius:15px;\n      margin:0 auto;\n      overflow: hidden;\n\n      &:hover .im{\n        transform: scale(1.2);\n      }\n"]);return x=function(){return n},n}function v(){var n=C(["\n    display:inline-block;\n    height: 100%; \n    overflow: hidden;\n\n    ",";\n\n    @media only screen and (min-width:768px){\n      ",";\n    }\n\n    @media only screen and (min-width:992px){\n      ",";\n    }\n\n    @media only screen and (min-width:1200){\n      ",";\n    }\n\n    h4{\n      white-space: pre-wrap;\n      /* CSS3 */\n      white-space: -moz-pre-wrap;\n      /* Firefox */\n      white-space: -pre-wrap;\n      /* Opera <7 */\n      white-space: -o-pre-wrap;\n      /* Opera 7 */\n      word-wrap: break-word;\n      /* IE */\n    }\n"]);return v=function(){return n},n}function w(){var n=C(["\n  position: relative;\n  height: 100%;\n  width: 100%;\n"]);return w=function(){return n},n}function j(){var n=C(["\n  position:relative;\n  width:100vw;\n  height:50vh;\n  margin:0;\n  padding:0;\n  white-space: nowrap;\n  overflow:hidden;\n\n"]);return j=function(){return n},n}function C(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var k=i.b.div(j()),O=i.b.div(w());function E(n){if(n)return"width:".concat(n/12*100,"%;")}var _=i.b.div(v(),(function(n){var e=n.xs;return e?E(e):"width:100%"}),(function(n){var e=n.sm;return e&&E(e)}),(function(n){var e=n.md;return e&&E(e)}),(function(n){var e=n.lg;return e&&E(e)})),S=i.b.div(x()),T=i.b.div(y()),q=i.b.div(g()),P=function(n){var e=n.blogdetail,t={backgroundImage:"url(".concat(e.thumbnail_url,")")};return o.a.createElement(_,{sm:"4",className:"slide"},o.a.createElement(u.b,{to:"/".concat(e.username,"/").concat(e.title.split(" ").join("-"),"-").concat(e._id),style:{textDecoration:"none"}},o.a.createElement(S,null,o.a.createElement(T,{style:t,className:"im"})),o.a.createElement(q,null,o.a.createElement("h4",{style:{textAlign:"left",color:"black"}},e.title))))},R=function(n){function e(){var n,t,r,o;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return r=this,o=(n=p(e)).call.apply(n,[this].concat(a)),t=!o||"object"!==d(o)&&"function"!=typeof o?h(r):o,b(h(t),"state",{currentIndex:0,translateValue:0}),b(h(t),"previousSlide",(function(n){n.preventDefault(),console.log("clicked"),0!==t.state.currentIndex&&t.setState({currentIndex:t.state.currentIndex-1,translateValue:t.state.translateValue+t.slideWidth()})})),b(h(t),"nextSlide",(function(n){n.preventDefault(),console.log("clicked");var e=t.props.data.length;if(t.state.currentIndex===e-3)return t.setState({currentIndex:0,translateValue:0});t.setState({currentIndex:t.state.currentIndex+1,translateValue:t.state.translateValue-t.slideWidth()})})),b(h(t),"slideWidth",(function(){return document.querySelector(".slide").clientWidth})),t}var t,r,i;return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&m(n,e)}(e,n),t=e,(r=[{key:"render",value:function(){var n=this.props,e=n.title,t=n.data;return o.a.createElement("div",{style:{backgroundColor:"#fdfaf5",margin:"0",marginTop:"-38px",padding:"0"}},o.a.createElement("div",{style:{margin:"0",padding:"0 4%",paddingTop:"5%"}},o.a.createElement(l.a,null,e)),o.a.createElement(k,null,o.a.createElement(O,{style:{transform:"translateX(".concat(this.state.translateValue,"px)"),transition:"transform ease-out 0.45s"}},t&&t.map((function(n,e){return o.a.createElement(P,{key:e,blogdetail:n})}))),o.a.createElement("div",{onClick:this.previousSlide,style:{position:"absolute",top:"50%",margin:"-6% 0 0 1%"}},o.a.createElement(s.a,{direction:"left",style:{position:"absolute"}})),o.a.createElement("div",{onClick:this.nextSlide,style:{position:"absolute",top:"50%",right:"0",margin:"-6% 1% 0 0"}},o.a.createElement(s.a,{direction:"right",style:{position:"absolute"}}))))}}])&&f(t.prototype,r),i&&f(t,i),e}(o.a.Component);R.propTypes={data:c.a.arrayOf(c.a.shape({title:c.a.string.isRequired,username:c.a.string.isRequired,description:c.a.string.isRequired,thumbnail_url:c.a.string.isRequired,votes:c.a.number.isRequired,category:c.a.string.isRequired,_id:c.a.string.isRequired})).isRequired},e.a=R},"./src/shared/container/homePage/containers/slidingCategoryContainer.js":function(n,e,t){"use strict";t.r(e);var r=t("./node_modules/react/index.js"),o=t.n(r),i=t("./node_modules/react-redux/es/index.js"),a=t("./node_modules/prop-types/index.js"),c=t.n(a),u=t("./src/shared/actions/theme.js"),s=t("./src/shared/container/homePage/components/slidingComponent.js");function l(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if(!(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)))return;var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(n){o=!0,i=n}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d=function(n){var e=n.title,t=n.theme,i=n.category_type,a=n.category,c=n.fetchThemeCategoryACollections,u=n.fetchThemeCategoryBCollections,d=n.fetchThemeCategoryCCollections,f=l(Object(r.useState)(a),2),p=(f[0],f[1]),h=l(Object(r.useState)(e),2),m=h[0],b=h[1];return Object(r.useEffect)((function(){p(a),b(a),"categoryA"==i&&a&&c(a),"categoryB"==i&&a&&u(a),"categoryC"==i&&a&&d(a)}),[a]),o.a.createElement(s.a,{data:t[i],title:m})};d.propTypes={title:c.a.string.isRequired,category_type:c.a.string.isRequired,fetchThemeCategoryACollections:c.a.func.isRequired,fetchThemeCategoryBCollections:c.a.func.isRequired,fetchThemeCategoryCCollections:c.a.func.isRequired,theme:c.a.object.isRequired},e.default=Object(i.b)((function(n){return{theme:n.theme}}),{fetchThemeCategoryACollections:u.c,fetchThemeCategoryBCollections:u.d,fetchThemeCategoryCCollections:u.e})(d)},"./src/shared/lib/Headers/index.js":function(n,e,t){"use strict";function r(){var n=function(n,e){e||(e=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n  color:#121416;\n  font-size:1.7em;\n  font-weight:800;\n  font-family: proxima-nova,Proxima Nova,sans-serif;\n  letter-spacing:0.1em;\n  text-transform: uppercase; \n  text-align:center;\n\n   @media only screen and (min-width:768px){\n      font-size:2.2em;\n    }\n"]);return r=function(){return n},n}t.d(e,"a",(function(){return o}));var o=t("./node_modules/styled-components/dist/styled-components.browser.esm.js").b.h3(r())},"./src/shared/lib/buttons/carouselbutton.jsx":function(n,e,t){"use strict";var r=t("./node_modules/react/index.js"),o=t.n(r),i=t("./node_modules/styled-components/dist/styled-components.browser.esm.js");function a(){var n=l(["\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  box-sizing: border-box;\n  left: 20%;\n  top: 50%;\n  margin-top: -10px;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n\n  &:before{\n      content: '';\n      width: 100%;\n      height: 100%;\n      border-width: 0px 2px 2px 0px\n      border-style: solid;\n      border-color: white;\n      transition: .2s ease;\n      display: block;\n  };\n\n    &:after{\n      content: '';\n      width: 100%;\n      height: 100%;\n      border-width: 0px 0px 2px 0px\n      border-style: solid;\n      border-color: white;\n      transition: .2s ease;\n      display: block;\n      transform:translate(0px,-22px);\n  }\n\n"]);return a=function(){return n},n}function c(){var n=l(["\n  position:relative;\n  border:3px solid #fff;\n  background-color:#000;\n  border-radius:50%;\n  box-shadow:2px 2px 18px 4px rgba(0,0,0,0.5);\n  height:50px;\n  width:50px;\n  right:20px;\n  &:hover{\n      border:4px solid #fff;\n      transition:all 0.85s cubic-bezier(0.175,0.885,0.320,1.275);\n    }\n\n  &:hover ",":after{\n    transform-origin: 226% 45%;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  } \n\n"]);return c=function(){return n},n}function u(){var n=l(["\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  box-sizing: border-box;\n  right: 20%;\n  top: 50%;\n  margin-top: -10px;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n\n  &:before{\n      content: '';\n      width: 100%;\n      height: 100%;\n      border-width: 2px 0px 0px 2px;\n      border-style: solid;\n      border-color: white;\n      transition: .2s ease;\n      display: block;\n  };\n\n    &:after{\n      content: '';\n      width: 100%;\n      height: 100%;\n      border-width: 0px 0px 0px 2px;\n      border-style: solid;\n      border-color: white;\n      transition: .2s ease;\n      display: block;\n      transform:translate(0px,-20px);\n  }\n\n"]);return u=function(){return n},n}function s(){var n=l(["\n  position:relative;\n  border:3px solid #fff;\n  background-color:#000;\n  border-radius:50%;\n  box-shadow:2px 2px 18px 4px rgba(0,0,0,0.5);\n  height:50px;\n  width:50px;\n  left:20px;\n  &:hover{\n      border:4px solid #fff;\n      transition:all 0.85s cubic-bezier(0.175,0.885,0.320,1.275);\n    }\n\n  &:hover ",":after{\n    transform-origin: -108% -50%;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  } \n\n"]);return s=function(){return n},n}function l(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var d=i.b.div(s(),f),f=i.b.div(u()),p=i.b.div(c(),h),h=i.b.div(a());e.a=function(n){return"left"===n.direction?o.a.createElement(d,null,o.a.createElement(f,null)):o.a.createElement(p,null,o.a.createElement(h,null))}}}]);