(function(t){function e(e){for(var n,a,i=e[0],c=e[1],u=e[2],p=0,d=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={app:0},s=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"01f1":function(t,e,r){},3056:function(t,e,r){"use strict";var n=r("5d23"),o=r.n(n);o.a},4940:function(t,e,r){"use strict";var n=r("01f1"),o=r.n(n);o.a},"54a6":function(t,e,r){"use strict";var n=r("fe5f"),o=r.n(n);o.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],a=(r("e612"),{name:"app"}),i=a,c=r("2877"),u=Object(c["a"])(i,o,s,!1,null,null,null),l=u.exports,p=r("5f5b"),d=r("b1e0"),f=(r("a4d3"),r("4de4"),r("4160"),r("d81d"),r("45fc"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("159b"),r("96cf"),r("1da1")),b=r("ade3"),m=r("2f62"),h=r("8c4f"),v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Navbar"),r("div",{staticClass:"container"},[r("b-row",[r("b-col",[r("div",{staticClass:"card"},[r("b-form-group",{attrs:{"label-cols-sm":"4","label-cols-lg":"2",label:"Post title :","label-for":"title","invalid-feedback":t.validateTitle,state:""===t.validateTitle,description:t.titleLength.toString()}},[r("b-form-input",{attrs:{type:"text",id:"title",state:""===t.validateTitle},on:{change:function(e){t.titleLength&&t.titleLength}},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),r("br"),r("b-form-group",{attrs:{"label-cols-sm":"4","label-cols-lg":"2",label:"Post body :","label-for":"body","invalid-feedback":t.validateBody,state:""===t.validateBody}},[r("b-form-textarea",{attrs:{type:"text",id:"body",state:""===t.validateBody},model:{value:t.body,callback:function(e){t.body=e},expression:"body"}})],1),r("br"),r("b-button",{attrs:{block:"",variant:"primary"},on:{click:function(e){return t.addPost(t.title,t.body)}}},[t._v("Add post")])],1)])],1)],1),r("Post",{attrs:{posts:t.POSTS}})],1)},O=[],y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{toggleable:"sm",type:"light",variant:"light"}},[r("div",{staticClass:"container"},[r("b-navbar-nav",[r("b-nav-item",[r("router-link",{attrs:{to:"/posts"}},[t._v(" Main ")])],1)],1),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item",[t._v(t._s(t.email))]),r("b-button",{staticClass:"mb-2",attrs:{size:"md",variant:"light"},on:{click:t.logOut}},[r("b-icon",{attrs:{icon:"power"}}),t._v(" Logout ")],1)],1)],1)])],1)},_=[],S={name:"Navbar",data:function(){return{email:localStorage.getItem("auth-mail")}},methods:{logOut:function(){return this.$store.dispatch("LOG_OUT")}}},E=S,g=(r("4940"),Object(c["a"])(E,y,_,!1,null,"3a2aa67e",null)),T=g.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},t._l(t.posts,(function(e,n){return r("b-row",{key:n},[r("b-col",[r("div",{staticClass:"card"},[r("div",{staticClass:"header"},[r("router-link",{class:{owner:t.validateUser(e.email)},attrs:{to:"/user/"+e.userId}},[t._v(t._s(e.name))]),t.validateUser(e.email)?r("div",{staticClass:"toolbar"},[t.edit&&t.editId===e.id?r("b-button-group",[r("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){t.edit=!1}}},[r("b-icon",{attrs:{icon:"x"}})],1)],1):r("b-button-group",[r("b-button",{attrs:{variant:"outline-primary"},on:{click:function(r){return t.enableEdit(e.id,e.title,e.body)}}},[r("b-icon",{attrs:{icon:"pencil"}})],1),r("b-button",{attrs:{variant:"outline-primary"},on:{click:function(r){return t.deletePost(e.id)}}},[r("b-icon",{attrs:{icon:"trash"}})],1)],1)],1):t._e()],1),t.edit&&t.editId==e.id?r("div",[r("br"),r("b-row",[r("b-col",{attrs:{sm:"2"}},[r("label",{attrs:{for:"edit-title"}},[t._v("Title : ")])]),r("b-col",{attrs:{sm:"10"}},[r("b-form-input",{attrs:{id:"edit-title",value:e.title},model:{value:t.editTitle,callback:function(e){t.editTitle=e},expression:"editTitle"}})],1)],1),r("br"),r("b-row",[r("b-col",{attrs:{sm:"2"}},[r("label",{attrs:{for:"edit-title"}},[t._v("Body : ")])]),r("b-col",{attrs:{sm:"10"}},[r("b-form-textarea",{attrs:{id:"edit-title",value:e.body},model:{value:t.editBody,callback:function(e){t.editBody=e},expression:"editBody"}})],1)],1),r("br"),r("b-button",{attrs:{block:"",variant:"primary"},on:{click:function(r){return t.editPost(t.editTitle,t.editBody,e.id)}}},[t._v("Save")])],1):r("div",[r("h2",[r("router-link",{attrs:{to:"/postInfo/"+JSON.stringify(e.id)}},[t._v(" "+t._s(e.title)+" ")])],1),r("p",[t._v(t._s(e.body))])])])])],1)})),1)},w=[],P={name:"Post",data:function(){return{title:"",body:"",editTitle:"",editBody:"",edit:!1,editId:null}},props:["posts"],methods:{validateUser:function(t){return localStorage.getItem("auth-mail")===t},deletePost:function(t){return this.$store.dispatch("DELETE_POST",t)},enableEdit:function(t,e,r){this.editId=t,this.edit=!0,this.editTitle=e,this.editBody=r},editPost:function(t,e,r){return this.edit=!1,this.$store.dispatch("EDIT_POST",{id:parseInt(localStorage.getItem("auth-id")),title:t,body:e,postId:r})}}},R=P,U=(r("bef4"),Object(c["a"])(R,j,w,!1,null,null,null)),x=U.exports;function C(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function k(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?C(Object(r),!0).forEach((function(e){Object(b["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var I={name:"Posts",components:{Navbar:T,Post:x},data:function(){return{title:"",body:""}},mounted:function(){this.$store.dispatch("GET_POSTS")},computed:k({},Object(m["b"])(["POSTS"]),{titleLength:function(){return this.title.length>50?0:50-this.title.length},validateTitle:function(){return this.title.length>50?"max 50 symbols":0===this.title.length?"can't be empty":""},validateBody:function(){return 0===this.body.length?"can't be empty":""}}),methods:{addPost:function(t,e){return""===this.validateTitle&&""===this.validateBody?this.$store.dispatch("ADD_POST",{title:t,body:e,userId:parseInt(localStorage.getItem("auth-id"))}):alert("Fulfill")}}},M=I,N=Object(c["a"])(M,v,O,!1,null,null,null),D=N.exports,$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"form"},[r("b-form-group",{attrs:{label:"Enter your email","label-for":"email",type:t.email}},[r("b-form-input",{attrs:{type:"email",id:"email",state:t.validateEmail,trim:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),r("b-form-group",{attrs:{label:"Enter your password","label-for":"password"}},[r("b-form-input",{attrs:{id:"type-password",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),r("b-button",{attrs:{variant:"outline-primary"},on:{click:t.authUser}},[t._v("Login")])],1)])},L=[],G={name:"Auth",data:function(){return{email:"",password:""}},computed:{validateEmail:function(){return""!=this.email?/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(this.email):null}},methods:{authUser:function(){return this.$store.dispatch("AUTHORIZATION",{email:this.email,password:this.password})}}},A=G,B=(r("6b31"),Object(c["a"])(A,$,L,!1,null,"0ce6aabc",null)),z=B.exports,J=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Navbar"),r("Post",{attrs:{posts:[t.POST]}}),r("Comments",{attrs:{comments:t.COMMENTS}})],1)},F=[],H=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},t._l(t.comments,(function(e,n){return r("div",{key:n,staticClass:"card"},[r("b-row",[r("b-col",[r("router-link",{attrs:{to:""}},[t._v(" "+t._s(e.email)+" ")])],1)],1),r("b-row",[r("b-col",[r("p",[t._v(t._s(e.body))])])],1)],1)})),0)},Z=[],W={name:"Comments",props:["comments"],data:function(){return{text:""}}},q=W,K=(r("54a6"),Object(c["a"])(q,H,Z,!1,null,null,null)),Q=K.exports;function V(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function X(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?V(Object(r),!0).forEach((function(e){Object(b["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Y={name:"PostInfo",components:{Navbar:T,Post:x,Comments:Q},mounted:function(){this.$store.dispatch("GET_POST",this.$route.params.id),this.$store.dispatch("GET_COMMENTS",this.$route.params.id)},computed:X({},Object(m["b"])(["POST","COMMENTS"]))},tt=Y,et=Object(c["a"])(tt,J,F,!1,null,null,null),rt=et.exports,nt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Navbar"),r("div",{staticClass:"container"},[t.USER?r("div",{staticClass:"card"},[r("b-row",[r("b-col",[r("label",{attrs:{for:"username"}},[t._v("Username :")]),r("p",{attrs:{id:"username"}},[t._v(t._s(t.USER.username))])]),r("b-col",[r("label",{attrs:{for:"address"}},[t._v("Address :")]),r("p",{attrs:{id:"address"}},[t._v(t._s(t.USER.address.street)+", "+t._s(t.USER.address.suite)+", "+t._s(t.USER.address.city))])])],1),r("b-row",[r("b-col",[r("label",{attrs:{for:"name"}},[t._v("Name :")]),r("p",{attrs:{id:"name"}},[t._v(t._s(t.USER.name))])]),r("b-col",[r("label",{attrs:{for:"company"}},[t._v("Company :")]),r("p",{attrs:{id:"company"}},[t._v(t._s(t.USER.company.name))])])],1),r("b-row",[r("b-col",[r("label",{attrs:{for:"phone"}},[t._v("Phone :")]),r("p",{attrs:{id:"phone"}},[t._v(t._s(t.USER.phone))])]),r("b-col",[r("label",{attrs:{for:"website"}},[t._v("Website :")]),r("p",{attrs:{id:"website"}},[t._v(t._s(t.USER.website))])])],1),r("b-row",[r("b-col",[r("label",{attrs:{for:"email"}},[t._v("Email :")]),r("p",{attrs:{id:"email"}},[t._v(t._s(t.USER.email))])])],1)],1):t._e(),r("br"),r("b-tabs",{attrs:{"content-class":"mt-3"}},[r("b-tab",{attrs:{title:"Posts",active:""}},[r("Post",{attrs:{posts:t.USER_POSTS}})],1),r("b-tab",{attrs:{title:"Comments"}},[t.USER_COMMENTS?r("Comments",{attrs:{comments:t.USER_COMMENTS}}):t._e(),r("div",[t._v("No comments, yet :)")])],1)],1)],1)],1)},ot=[];function st(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function at(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?st(Object(r),!0).forEach((function(e){Object(b["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):st(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var it={name:"User",components:{Navbar:T,Post:x,Comments:Q},mounted:function(){this.$store.dispatch("GET_USER",this.$route.params.id),this.$store.dispatch("GET_USER_RELATED_POSTS",this.$route.params.id),this.$store.dispatch("GET_USER_RELATED_COMMENTS",this.$route.params.id)},computed:at({},Object(m["b"])(["USER","USER_POSTS","USER_COMMENTS"]))},ct=it,ut=(r("3056"),Object(c["a"])(ct,nt,ot,!1,null,null,null)),lt=ut.exports,pt=[{path:"/",component:z},{path:"/posts",component:D},{path:"/postInfo/:id",component:rt},{path:"/user/:id",component:lt}],dt=new h["a"]({mode:"history",routes:pt});function ft(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function bt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ft(Object(r),!0).forEach((function(e){Object(b["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ft(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}n["default"].use(m["a"]);var mt=new m["a"].Store({state:{logged_in:!1,posts:[],users:[],post:[],comments:[],user:[],user_posts:[],user_comments:[]},getters:{POSTS:function(t){return t.posts},POST:function(t){return t.post},COMMENTS:function(t){return t.comments},USER:function(t){return t.user},USER_POSTS:function(t){return t.user_posts},USER_COMMENTS:function(t){return t.user_comments}},mutations:{LOGIN:function(t,e){localStorage.setItem("auth-mail",e.email),localStorage.setItem("auth-id",e.password),t.logged_in=!0,dt.push("/posts")},SET_POSTS:function(t,e){t.users.map((function(r){e.map((function(e){r.id!==e.userId||t.posts.some((function(t){return e.id===t.id}))||t.posts.push(bt({},r,{},e))}))}))},SET_USERS:function(t,e){t.users=e},SET_POST:function(t,e){t.posts.filter((function(r){r.id==e&&(t.post=r)}))},SET_COMMENTS:function(t,e){t.comments=e},SET_USER:function(t,e){t.user=e},SET_USER_POSTS:function(t,e){t.user_posts=[],t.posts.map((function(r){r.userId===parseInt(e)&&t.user_posts.length<5&&t.user_posts.push(r)}))},SET_USER_COMMENTS:function(t,e){t.posts.map((function(r){t.comments.map((function(n){r.id!==n.postId||r.userId!==parseInt(e)||t.user_comments.some((function(t){return n.id===t.id}))||t.user_comments.push(n)}))}))},LOG_OUT:function(t){t.logged_in=!1,localStorage.removeItem("auth-mail"),localStorage.removeItem("auth-id"),dt.push("/")}},actions:{AUTHORIZATION:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(e,r){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return n=t.sent,t.next=5,n.json();case 5:o=t.sent,o.some((function(t){return t.email===r.email&&t.id===parseInt(r.password)}))?e.commit("LOGIN",r):alert("Email or password is wrong");case 7:case"end":return t.stop()}}),t)})));function e(e,r){return t.apply(this,arguments)}return e}(),LOG_OUT:function(t){t.commit("LOG_OUT")},GET_POSTS:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(e){var r,n,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/posts");case 2:return r=t.sent,t.next=5,r.json();case 5:return n=t.sent,t.next=8,fetch("https://jsonplaceholder.typicode.com/users");case 8:return o=t.sent,t.next=11,o.json();case 11:s=t.sent,e.commit("SET_USERS",s),e.commit("SET_POSTS",n);case 14:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),GET_POST:function(t,e){t.commit("SET_POST",e)},DELETE_POST:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(e,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/posts/"+r,{method:"DELETE"}).then((function(t){return alert("Response status : "+t.status+"\nCurrent post id : "+r)}));case 2:case"end":return t.stop()}}),t)})));function e(e,r){return t.apply(this,arguments)}return e}(),ADD_POST:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(e,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(r),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(t){return alert("Response status : "+t.status+"\nCurrent post info : "+JSON.stringify(r))}));case 2:case"end":return t.stop()}}),t)})));function e(e,r){return t.apply(this,arguments)}return e}(),EDIT_POST:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(e,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/posts/"+r.id,{method:"PUT",body:JSON.stringify(r),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(t){return alert("Response status : "+t.status+"\nCurrent post info : "+JSON.stringify(r))}));case 2:case"end":return t.stop()}}),t)})));function e(e,r){return t.apply(this,arguments)}return e}(),GET_COMMENTS:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(e,r){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/comments?postId="+r);case 2:return n=t.sent,t.next=5,n.json();case 5:o=t.sent,e.commit("SET_COMMENTS",o);case 7:case"end":return t.stop()}}),t)})));function e(e,r){return t.apply(this,arguments)}return e}(),GET_USER:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(e,r){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/users/"+r);case 2:return n=t.sent,t.next=5,n.json();case 5:o=t.sent,e.commit("SET_USER",o);case 7:case"end":return t.stop()}}),t)})));function e(e,r){return t.apply(this,arguments)}return e}(),GET_USER_RELATED_POSTS:function(t,e){t.commit("SET_USER_POSTS",e)},GET_USER_RELATED_COMMENTS:function(t,e){t.commit("SET_USER_COMMENTS",e)}}});n["default"].config.productionTip=!1,n["default"].use(p["a"]),n["default"].use(d["a"]),n["default"].use(h["a"]),new n["default"]({render:function(t){return t(l)},store:mt,router:dt}).$mount("#app")},"5b63":function(t,e,r){},"5d23":function(t,e,r){},"6b31":function(t,e,r){"use strict";var n=r("9527"),o=r.n(n);o.a},9527:function(t,e,r){},bef4:function(t,e,r){"use strict";var n=r("5b63"),o=r.n(n);o.a},e612:function(t,e,r){},fe5f:function(t,e,r){}});
//# sourceMappingURL=app.ac5469dc.js.map