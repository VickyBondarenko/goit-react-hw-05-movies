"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{396:function(e,t,n){n.d(t,{Df:function(){return c},IQ:function(){return u},Jh:function(){return s},V0:function(){return i},b:function(){return o}});var r=n(243),a="3d474b4b143267599ff69bdae2b1bdff",c=function(){return r.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(a))},i=function(e){return r.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"))},o=function(e){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(a,"&language=en-US"))},u=function(e){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(a,"&language=en-US&page=1"))},s=function(e){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(a,"&language=en-US&page=1"))}},544:function(e,t,n){n.r(t),n.d(t,{Home:function(){return d}});var r=n(861),a=n(439),c=n(757),i=n.n(c),o=n(396),u=n(791),s=n(689),f=n(87),p=n(184);function d(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],d=(0,s.TH)();return(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Df)();case 2:t=e.sent,c(t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,p.jsx)("div",{children:(0,p.jsx)("ul",{children:n&&n.map((function(e){return(0,p.jsx)("li",{children:(0,p.jsx)(f.rU,{to:"/movies/".concat(e.id),state:{from:d},children:(0,p.jsx)("p",{className:"",children:e.title})})},e.id)}))})})}t.default=d}}]);
//# sourceMappingURL=544.3343f7db.chunk.js.map