(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8d68"],{"571a":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("NavTabs"),t.isLoading?a("Spinner"):[a("h1",{staticClass:"mt-5"},[t._v("人氣餐廳")]),a("hr"),t._l(t.topRestaurants,(function(e){return a("div",{key:e.id,staticClass:"card mb-3",staticStyle:{"max-width":"540px",margin:"auto"}},[a("div",{staticClass:"row no-gutters"},[a("div",{staticClass:"col-md-4"},[a("router-link",{attrs:{to:{name:"restaurant",params:{id:e.id}}}},[a("img",{staticClass:"card-img",attrs:{src:e.image}})])],1),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(e.name))]),a("span",{staticClass:"badge badge-secondary"},[t._v(t._s("收藏數: "+e.FavoriteCount))]),a("p",{staticClass:"card-text"},[t._v(" "+t._s(e.description)+" ")]),a("router-link",{staticClass:"btn btn-primary mr-2",attrs:{to:{name:"restaurant-dashboard",params:{id:e.id}}}},[t._v(" Show ")]),e.isFavorited?a("button",{staticClass:"btn btn-danger mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.deleteFavorite(e)}}},[t._v(" 移除最愛 ")]):a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.addFavorite(e)}}},[t._v(" 加到最愛 ")])],1)])])])}))]],2)},n=[],s=a("1da1"),i=(a("d9e2"),a("96cf"),a("8bb1")),c=a("954e"),o=a("2612"),u=a("dfd8"),d=a("2375"),l={components:{NavTabs:i["a"],Spinner:d["a"]},data:function(){return{topRestaurants:[],isLoading:!0}},methods:{fetchTopRestaurants:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,c["a"].getRestaurantTop();case 4:a=e.sent,r=a.data,t.topRestaurants=r.restaurants,t.isLoading=!1,e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](0),t.isLoading=!1,u["a"].fire({icon:"error",title:"無法取得餐廳排行，請稍後再試"});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()},addFavorite:function(t){return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o["a"].addFavorite({restaurantId:t.id});case 3:if(a=e.sent,r=a.data,"success"===r.status){e.next=7;break}throw new Error(r.message);case 7:t.isFavorited=!0,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),u["a"].fire({icon:"error",title:"無法將餐廳加入最愛，請稍後再試"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},deleteFavorite:function(t){return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o["a"].deleteFavorite({restaurantId:t.id});case 3:if(a=e.sent,r=a.data,"success"===r.status){e.next=7;break}throw new Error(r.message);case 7:t.isFavorited=!1,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),u["a"].fire({icon:"error",title:"無法將餐廳移除最愛，請稍後再試"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}},created:function(){this.fetchTopRestaurants()}},p=l,v=a("2877"),m=Object(v["a"])(p,r,n,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0c8d68.78f09ac9.js.map