(this.webpackJsonpshopify=this.webpackJsonpshopify||[]).push([[0],{28:function(e,t,n){},30:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(20),i=n.n(s),r=(n(28),n(6)),l=n(10),u=n.n(l),o=n(21),j=n(7),d=(n(30),n(22)),b=n.n(d),h=n(23),O=n.n(h),m=n(4),p=n.n(m),x=n(0);function f(e){var t=e.truc,n=e.index,c=e.QuesButton,a=e.add,s=e.deleteFunc;return Object(x.jsxs)("li",{className:"Card",children:[Object(x.jsx)("img",{className:"img",src:t.Poster,alt:"movie poster"}),Object(x.jsxs)("p",{className:"header-sub",children:[t.Year," ",t.Title]}),a?Object(x.jsx)("button",{disabled:c(t),onClick:function(){return a(t)},children:"Nominate"}):Object(x.jsx)("button",{onClick:function(){return s(n)},children:"Un-Nominate"})]})}var v=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),i=Object(j.a)(s,2),l=i[0],d=i[1],h=Object(c.useState)([]),m=Object(j.a)(h,2),v=m[0],g=m[1],N=function(){var e=Object(o.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("//www.omdbapi.com/?apikey=".concat("bcf10e6b","&s=").concat(t));case 2:n=e.sent,g(n.data.Search);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=Object(c.useCallback)(O.a.debounce((function(e){return N(e)}),500),[]),w=function(e){return l&&(l.includes(e)||l.length>=5)},y=function(e){var t=Object(r.a)(l);-1!==e&&(t.splice(e,1),d(t),p.a.set("nominee",t))},k=function(e){if(l&&0!==l.length){var t=[].concat(Object(r.a)(l),[e]);d([].concat(Object(r.a)(l),[e])),p.a.set("nominee",t)}else d([e]),p.a.set("nominee",[e])};return Object(c.useEffect)((function(){var e=p.a.get("nominee");d(e)}),[]),Object(x.jsx)("div",{className:"a-container",children:Object(x.jsxs)("div",{className:"under",children:[Object(x.jsx)("img",{className:"shop",src:"https://cdn.betakit.com/wp-content/uploads/2015/04/shopify-ipo-blog-banner.png",alt:"Shopify"}),Object(x.jsx)("h2",{className:"rass",children:"The Shoppies"}),Object(x.jsx)("div",{className:"within",children:Object(x.jsx)("input",{className:"inputFF",label:" \ud83d\udd0e  Search...",value:n,placeholder:" \ud83d\udd0e  Search...",onChange:function(e){a(e.target.value),S(e.target.value)}})}),n?Object(x.jsx)("div",{className:"HH1",children:Object(x.jsxs)("h3",{className:"HH2",children:['YOU JUST SEARCHED: "',n,'"']})}):null,Object(x.jsxs)("div",{className:"suite",children:[Object(x.jsx)("ol",{className:"a-droite",children:v?v.map((function(e,t){return Object(x.jsx)("li",{children:Object(x.jsx)(f,{add:k,index:t,QuesButton:w,truc:e},t)})})):Object(x.jsx)("div",{children:"Empty.."})}),Object(x.jsxs)("ul",{className:"Gauu",children:[l&&0!==l.length?l.map((function(e,t){return Object(x.jsx)("li",{children:Object(x.jsx)(f,{QuesButton:w,truc:e,deleteFunc:y,index:t},t)})})):Object(x.jsx)("div",{children:"Please search and select."}),null!==l&&l.length>=5?Object(x.jsx)("div",{className:"end",children:Object(x.jsx)("h1",{children:"You are finished selecting your 5 nominee's. You can change it if you wish"})}):null]})]})]})})};i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(v,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.ef66b548.chunk.js.map