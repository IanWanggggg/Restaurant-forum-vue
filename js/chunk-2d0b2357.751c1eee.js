(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2357"],{"22ab":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("NavTabs"),e.isLoading?r("Spinner"):[r("h1",{staticClass:"mt-5"},[e._v("美食達人")]),r("hr"),r("div",{staticClass:"row text-center"},e._l(e.users,(function(e){return r("UsersTopUser",{key:e.id,attrs:{initial_user:e}})})),1)]],2)},n=[],a=r("1da1"),i=(r("96cf"),r("8bb1")),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-3"},[r("router-link",{attrs:{to:{name:"user",params:{id:e.user.id}}}},[r("img",{attrs:{src:e.user.image?e.user.image:"https://image.cache.storm.mg/styles/smg-800x533-fp/s3/media/image/2021/06/17/20210617-045327_U22834_M695876_d6f7.jpeg?itok=Nzun_aAN",width:"140px",height:"140px"}})]),r("h2",[e._v(e._s(e.user.name))]),r("span",{staticClass:"badge badge-secondary"},[e._v("追蹤人數："+e._s(e.user.FollowerCount))]),r("p",{staticClass:"mt-3"},[e.user.isFollowed?r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.unfollowUser(e.user.id)}}},[e._v(" 取消追蹤 ")]):r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.followUser(e.user.id)}}},[e._v(" 追蹤 ")])])],1)},u=[],c=r("5530"),l=(r("d9e2"),r("2612")),p=r("dfd8"),d={props:{initial_user:{type:Object,required:!0}},data:function(){return{user:this.initial_user}},methods:{followUser:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].addFollowing({userId:e});case 3:if(s=r.sent,n=s.data,"success"===n.status){r.next=7;break}throw new Error(n.message);case 7:t.user=Object(c["a"])(Object(c["a"])({},t.user),{},{isFollowed:!0}),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),p["a"].fire({icon:"error",title:"目前無法追蹤使用者，請稍後再試"});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},unfollowUser:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].removeFollowing({userId:e});case 3:if(s=r.sent,n=s.data,"success"===n.status){r.next=7;break}throw new Error(n.message);case 7:t.user=Object(c["a"])(Object(c["a"])({},t.user),{},{isFollowed:!1}),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),p["a"].fire({icon:"error",title:"目前無法取消追蹤使用者，請稍後再試"});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}},f=d,b=r("2877"),h=Object(b["a"])(f,o,u,!1,null,null,null),m=h.exports,g=r("2375"),v={components:{NavTabs:i["a"],UsersTopUser:m,Spinner:g["a"]},data:function(){return{users:[],isLoading:!0}},methods:{fetchUsers:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,l["a"].getUserTop();case 4:r=t.sent,s=r.data,console.log(s),e.users=s.users,e.isLoading=!1,t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](0),e.isLoading=!1,p["a"].fire({icon:"error",title:"無法取得美食達人，請稍後再試"});case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))()}},created:function(){this.fetchUsers()}},w=v,_=Object(b["a"])(w,s,n,!1,null,null,null);t["default"]=_.exports}}]);
//# sourceMappingURL=chunk-2d0b2357.751c1eee.js.map