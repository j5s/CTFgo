(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ba72d38"],{"408a":function(t,e,n){var a=n("e330");t.exports=a(1..valueOf)},"4bec":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"challenges"},[n("h1",[t._v(t._s(t.category.toUpperCase()))]),n("div",{staticClass:"center"},t._l(Math.ceil(t.challenges.length/4),(function(e,a){return n("vs-row",{key:a,attrs:{data:e}},[n("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"2"}}),t._l(Math.min(4,t.challenges.length-4*(e-1)),(function(a,s){return n("vs-col",{key:s,attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"2"}},[n("ChallengeCard",{attrs:{id:t.challenges[4*(e-1)+a-1].id,name:t.challenges[4*(e-1)+a-1].name,score:t.challenges[4*(e-1)+a-1].score,description:t.challenges[4*(e-1)+a-1].description,isSolved:t.challenges[4*(e-1)+a-1].is_solved,solverCount:t.challenges[4*(e-1)+a-1].solver_count,attachment:t.challenges[4*(e-1)+a-1].attachment,hints:t.challenges[4*(e-1)+a-1].hints},on:{reloadChallenges:t.getChallenges}})],1)})),n("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"2"}})],2)})),1)])},s=[],r=n("1da1"),o=(n("96cf"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"challengecard"},[n("vs-button",{attrs:{flat:"",active:1==t.isSolved},on:{click:function(e){t.active=!t.active}}},[n("div",{staticClass:"challenge"},[t.name.length>30?n("h2",[n("marquee",[n("span",[t._v(t._s(t.name))])])],1):n("h2",[t._v(" "+t._s(t.name)+" ")]),n("p",[t._v(t._s(t.score))])])]),n("vs-dialog",{attrs:{width:"500px",scroll:""},scopedSlots:t._u([{key:"header",fn:function(){return[n("h3",{staticClass:"not-margin"},[t._v(" "+t._s(t.name)+" ")]),t.hints[0].length>0?n("vs-button",{attrs:{shadow:"",transparent:""},on:{click:function(e){t.active3=!t.active3}}},[t._v(" Hint ")]):t._e()]},proxy:!0},{key:"footer",fn:function(){return[n("div",{staticClass:"con-form"},[n("div",{staticClass:"flex"},[n("vs-button",{attrs:{shadow:"",transparent:""},on:{click:t.getSolves}},[t._v(" Solves: "+t._s(t.solverCount)+" ")]),t.isSolved?n("vs-button",{attrs:{disabled:"",transparent:""},on:{click:function(e){t.active=!1}}},[t._v(" Submit ")]):n("vs-button",{attrs:{transparent:""},on:{click:t.submitFlag}},[t._v(" Submit ")])],1)]),n("div",{staticClass:"con-footer"},[n("vs-dialog",{attrs:{scroll:"","auto-width":"","overflow-hidden":""},model:{value:t.active2,callback:function(e){t.active2=e},expression:"active2"}},[n("div",{staticClass:"con-content center"},[n("vs-table",{scopedSlots:t._u([{key:"thead",fn:function(){return[n("vs-tr",[n("vs-th",[t._v(" Number ")]),n("vs-th",[t._v(" Name ")]),n("vs-th",[t._v(" Time ")])],1)]},proxy:!0},{key:"tbody",fn:function(){return t._l(t.solves,(function(e,a){return n("vs-tr",{key:a,attrs:{data:e}},[n("vs-td",[t._v(" "+t._s(a+1)+" ")]),n("vs-td",[t._v(" "+t._s(e.username)+" ")]),n("vs-td",[t._v(" "+t._s(t.timestampToTime(e.submitted_at))+" ")])],1)}))},proxy:!0}])})],1)]),n("vs-dialog",{attrs:{scroll:"","auto-width":"","overflow-hidden":""},model:{value:t.active3,callback:function(e){t.active3=e},expression:"active3"}},[n("div",{staticClass:"con-content"},t._l(t.hints,(function(e,a){return n("a",{key:e,attrs:{data:a}},[n("br"),t._v(" Hint "+t._s(a+1)+": "+t._s(e)+" "),n("br")])})),0)])],1)]},proxy:!0}]),model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("div",{staticClass:"con-content"},[n("p",{staticClass:"not-margin",domProps:{innerHTML:t._s(t.description)}}),n("br"),t.attachment[0].length>0?n("vs-row",t._l(t.attachment,(function(e,a){return n("vs-col",{key:e,attrs:{data:a,"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"3"}},[n("a",{staticStyle:{"text-decoration":"none"},attrs:{href:e,target:"_blank"}},[n("vs-button",{staticStyle:{display:"block",margin:"0 auto"},attrs:{flat:"",primary:""}},[t._v(" Attachment "+t._s(a+1)+" ")])],1)])})),1):t._e(),n("vs-input",{attrs:{placeholder:"NCTF{.*}"},model:{value:t.flag,callback:function(e){t.flag=e},expression:"flag"}})],1)])],1)}),c=[],i=(n("a9e3"),{props:{id:{type:Number,default:1},name:{type:String,default:"Challenge Name"},score:{type:Number,default:1e3},description:{type:String,default:"More information of a challenge..."},isSolved:{type:Boolean,default:!1},solverCount:{type:Number,default:0},attachment:[],hints:[]},data:function(){return{active:!1,active2:!1,active3:!1,search:"",flag:"",solves:[{username:"test1",time:"2021-11-23 16:34",submitted_at:1622649485}]}},methods:{timestampToTime:function(t){var e=new Date,n=60*-e.getTimezoneOffset(),a=n>0?" UTC+":" UTC";a+=n/3600;var s=new Date(1e3*t),r=s.getFullYear()+"-",o=(s.getMonth()+1<10?"0"+(s.getMonth()+1):s.getMonth()+1)+"-",c=s.getDate()+" ",i=s.getHours()+":",l=s.getMinutes()+":",u=s.getSeconds();return r+o+c+i+l+u+a},submitFlag:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.active=!1,e.next=3,t.$http.post("/user/submitflag",{cid:t.id,flag:t.flag});case 3:n=e.sent,a=n.data,200==a.code?(t.openNotification("🥳 Congratulations～ Correct flag!"),t.$emit("reloadChallenges")):400==a.code?t.openNotification("😅 Wrong flag!"):300==a.code&&t.openNotification("NCTF 2021 has ended");case 6:case"end":return e.stop()}}),e)})))()},getSolves:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.active2=!0,e.next=3,t.$http.get("/user/solves/cid/"+t.id);case 3:n=e.sent,a=n.data,200==a.code&&(t.solves=a.data);case 6:case"end":return e.stop()}}),e)})))()},openNotification:function(t,e){this.$vs.notification({position:"top-center",title:t,text:e})}}}),l=i,u=(n("88b0"),n("7301"),n("2877")),v=Object(u["a"])(l,o,c,!1,null,"be0b617e",null),f=v.exports,d={components:{ChallengeCard:f},data:function(){return{category:null,challenges:[]}},methods:{setCategory:function(){this.category=this.$route.params.category},reload:function(){this.setCategory(),this.getChallenges()},getChallenges:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/user/challenges/"+t.category);case 2:n=e.sent,a=n.data,200==a.code&&null!=a.data?t.challenges=a.data:t.challenges=[];case 5:case"end":return e.stop()}}),e)})))()}},created:function(){this.setCategory(),this.getChallenges()}},g=d,h=(n("c7c0"),Object(u["a"])(g,a,s,!1,null,"01bef871",null));e["default"]=h.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var a=n("e330"),s=n("1d80"),r=n("577e"),o=n("5899"),c=a("".replace),i="["+o+"]",l=RegExp("^"+i+i+"*"),u=RegExp(i+i+"*$"),v=function(t){return function(e){var n=r(s(e));return 1&t&&(n=c(n,l,"")),2&t&&(n=c(n,u,"")),n}};t.exports={start:v(1),end:v(2),trim:v(3)}},6822:function(t,e,n){},7156:function(t,e,n){var a=n("1626"),s=n("861d"),r=n("d2bb");t.exports=function(t,e,n){var o,c;return r&&a(o=e.constructor)&&o!==n&&s(c=o.prototype)&&c!==n.prototype&&r(t,c),t}},7301:function(t,e,n){"use strict";n("ce00")},"81c9":function(t,e,n){},"88b0":function(t,e,n){"use strict";n("81c9")},a9e3:function(t,e,n){"use strict";var a=n("83ab"),s=n("da84"),r=n("e330"),o=n("94ca"),c=n("6eeb"),i=n("1a2d"),l=n("7156"),u=n("3a9b"),v=n("d9b5"),f=n("c04e"),d=n("d039"),g=n("241c").f,h=n("06cf").f,p=n("9bf2").f,m=n("408a"),b=n("58a8").trim,_="Number",y=s[_],C=y.prototype,w=s.TypeError,x=r("".slice),N=r("".charCodeAt),k=function(t){var e=f(t,"number");return"bigint"==typeof e?e:S(e)},S=function(t){var e,n,a,s,r,o,c,i,l=f(t,"number");if(v(l))throw w("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=b(l),e=N(l,0),43===e||45===e){if(n=N(l,2),88===n||120===n)return NaN}else if(48===e){switch(N(l,1)){case 66:case 98:a=2,s=49;break;case 79:case 111:a=8,s=55;break;default:return+l}for(r=x(l,2),o=r.length,c=0;c<o;c++)if(i=N(r,c),i<48||i>s)return NaN;return parseInt(r,a)}return+l};if(o(_,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var I,T=function(t){var e=arguments.length<1?0:y(k(t)),n=this;return u(C,n)&&d((function(){m(n)}))?l(Object(e),n,T):e},E=a?g(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),M=0;E.length>M;M++)i(y,I=E[M])&&!i(T,I)&&p(T,I,h(y,I));T.prototype=C,C.constructor=T,c(s,_,T)}},c7c0:function(t,e,n){"use strict";n("6822")},ce00:function(t,e,n){}}]);
//# sourceMappingURL=chunk-1ba72d38.f2968594.js.map