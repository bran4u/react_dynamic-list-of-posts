(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),u=n.n(c),o=n(3),s=(n(11),n(1)),l=n.n(s),i=n(2),m=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://mate-academy.github.io/react_dynamic-list-of-posts/api/posts.json").then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://mate-academy.github.io/react_dynamic-list-of-posts/api/users.json").then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://mate-academy.github.io/react_dynamic-list-of-posts/api/comments.json").then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(e){var t=e.beforeLoaded,n=e.afterLoaded,a=function(){var e=Object(i.a)(l.a.mark((function e(){var a,r,c,u,o,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.next=3,m();case 3:return a=e.sent,e.next=6,d();case 6:return r=e.sent,e.next=9,f();case 9:c=e.sent,u=function(e){return r.find((function(t){return t.id===e.userId}))},o=function(e){return c.filter((function(t){return t.postId===e.id}))},s=a.map((function(e){var t,n,a;return{id:e.id,title:e.title,body:e.body,user:{name:null===(t=u(e))||void 0===t?void 0:t.name,email:null===(n=u(e))||void 0===n?void 0:n.email,street:null===(a=u(e))||void 0===a?void 0:a.address.street},comments:o(e)}})),n(s);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("button",{className:"load__button",type:"button",onClick:a},"Load"))},b=function(e){var t=e.comment;return r.a.createElement("tr",{className:"comment__row"},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.email),r.a.createElement("td",null,t.body))},E=(n(13),function(e){var t=e.comments;return r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("td",null,"Name"),r.a.createElement("td",null,"Email"),r.a.createElement("td",null,"Comment")),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement(b,{comment:e})}))))}),v=function(e){var t=e.title,n=e.body,a=e.user,c=e.comments;return r.a.createElement("li",null,r.a.createElement("div",{className:"post"},r.a.createElement("div",{className:"post__user"},null===a||void 0===a?void 0:a.name),r.a.createElement("div",{className:"post__text"},r.a.createElement("h2",{className:"post__title"},t),r.a.createElement("p",{className:"post__body"},n)),r.a.createElement("div",null,r.a.createElement(E,{comments:c}))))},h=(n(14),function(e){var t=e.list;return r.a.createElement("ul",{className:"post__list"},t.map((function(e){return r.a.createElement(v,{key:e.id,title:e.title,body:e.body,user:e.user,comments:e.comments})})))}),y=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(!1),s=Object(o.a)(u,2),l=s[0],i=s[1],m=Object(a.useState)(!1),d=Object(o.a)(m,2),f=d[0],b=d[1],E=Object(a.useState)(!1),v=Object(o.a)(E,2),y=v[0],_=v[1];return r.a.createElement("div",{className:"App"},y?r.a.createElement(r.a.Fragment,null):r.a.createElement(p,{beforeLoaded:function(){i(!0),_(!0)},afterLoaded:function(e){c(e),i(!1),b(!0)}}),l?r.a.createElement("span",{className:"button__text"},"Loading..."):r.a.createElement(r.a.Fragment,null),f?r.a.createElement(h,{list:n}):r.a.createElement(r.a.Fragment,null))};u.a.render(r.a.createElement(y,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.a183b974.chunk.js.map