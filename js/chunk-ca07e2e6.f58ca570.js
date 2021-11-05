(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ca07e2e6"],{"608c":function(t,e,s){},"8f5a":function(t,e,s){},"9a95":function(t,e,s){"use strict";var i=s("d4ec"),n=s("bee2"),r=s("ade3"),a=(s("99af"),s("eb6d")),o=function(){function t(){Object(i["a"])(this,t),Object(r["a"])(this,"endpoint","/teachers")}return Object(n["a"])(t,[{key:"getAll",value:function(){return a["a"].get(this.endpoint)}},{key:"getById",value:function(t){return a["a"].get("".concat(this.endpoint,"/").concat(t))}}]),t}();e["a"]=new o},b97a:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"teacher-detail"},[s("v-container",{staticClass:"pt-6"},[s("v-row",[s("v-col",{attrs:{cols:"8"}},[s("h1",{staticClass:"font-weight-bold pb-3"},[t._v("Teacher information")]),s("v-card",{staticClass:"mx-auto",attrs:{"max-height":"200","min-height":"150"}},[s("v-card-title",{staticClass:"mb-1 indigo accent-4 font-weight-bold white--text"},[t._v(" "+t._s(t.teacher.name)+" "+t._s(t.teacher.lastname)+" ")]),s("v-card-text",{staticClass:"text--primary mt-3"},[s("p",{staticClass:"text-justify mb-0"},[s("strong",[t._v("Personal information:")]),s("br"),t._v(" Name(s): "+t._s(t.teacher.name)),s("br"),t._v(" Last name: "+t._s(t.teacher.lastname)),s("br"),t._v(" Age: "+t._s(t.teacher.age)+" "),s("br")])])],1)],1),s("v-col",{staticClass:"pl-15",attrs:{cols:"4"}},[s("h1",{staticClass:"font-weight-bold pb-3"},[t._v("Teacher progress")]),s("v-card",{staticClass:"mx-auto pa-5",attrs:{"min-height":"150"}},[s("p",{staticClass:"display-3 font-weight-bold"},[t._v("25%")]),s("v-progress-linear",{staticClass:"rounded-pill",attrs:{color:"indigo accent-4",height:"25",value:"25",striped:""}})],1)],1)],1),s("v-row",{staticClass:"pt-4"},[s("v-col",{attrs:{cols:"8"}},[s("h1",{staticClass:"font-weight-bold pb-3"},[t._v("Point for progress")]),s("v-card",{staticClass:"mx-auto mb-3"},[s("v-container",[s("v-row",[s("div",{staticClass:"d-flex justify-start align-center ml-5 mr-3"},[s("v-icon",[t._v("mdi-check-bold")])],1),s("v-col",[s("div",[t._v("This teacher")]),s("p",{staticClass:"text--primary font-weight-bold mb-1"},[t._v("Points earned")])]),s("v-col",{staticClass:"d-flex justify-center align-center"},[s("v-chip",{staticClass:"font-weight-bold",attrs:{outlined:"",rounded:"",color:"green darken-1"}},[t._v(" 1250 Points ")])],1)],1)],1)],1),s("h1",{staticClass:"font-weight-bold py-3"},[t._v("Courses in progress and completed")]),t._l(t.units,(function(e){return s("v-card",{key:e,staticClass:"mx-auto mb-3"},[s("v-container",[s("v-row",[s("div",{staticClass:"d-flex justify-start align-center ml-5 mr-3"},[s("v-icon",[t._v("mdi-file-document-outline")])],1),s("v-col",[s("div",[t._v("Course")]),s("p",{staticClass:"text--primary font-weight-bold mb-1"},[t._v(t._s(e))]),s("div",{staticClass:"text--secondary"},[t._v("Lorem ipsum sit amet")])]),s("v-col",{staticClass:"d-flex justify-center align-center"},[s("v-btn",t._g(t._b({staticClass:"font-weight-bold",attrs:{outlined:"",rounded:"",color:"indigo accent-4"}},"v-btn",t.attrs,!1),t.on),[t._v(" Learn More ")])],1)],1)],1)],1)}))],2),s("v-col",{staticClass:"pl-15",attrs:{cols:"4"}},[s("h1",{staticClass:"font-weight-bold pb-3"},[t._v("Competences includes")]),s("v-card",{staticClass:"d-flex mx-auto px-5 align-center",attrs:{"min-height":"150"}},[s("div",[s("v-chip-group",{staticClass:"py-3",attrs:{column:""}},t._l(t.competences,(function(e){return s("v-chip",{key:e,attrs:{outlined:""}},[t._v(" "+t._s(e)+" ")])})),1)],1)])],1)],1)],1)],1)},n=[],r=s("9a95"),a={name:"teacher-detail",data:function(){return{teacher:{id:"",name:"",lastname:"",age:""},units:["Literature","Arithmetic","History"],competences:["Mathematical Reasoning","Assertiveness","Critical thinking","Grammar","Mathematical design","Creativity","Logic"]}},created:function(){var t=this;r["a"].getById(this.$route.params.id).then((function(e){t.teacher=e.data,console.log(e.data)})).catch((function(t){console.log(t)}))}},o=a,c=s("2877"),l=s("6544"),h=s.n(l),f=s("8336"),u=s("b0af"),d=s("99d9"),v=s("cc20"),p=s("ef9a"),g=s("62ad"),m=s("a523"),w=s("132d"),b=s("8e36"),C=s("0fd9"),x=Object(c["a"])(o,i,n,!1,null,"6fe9ffa0",null);e["default"]=x.exports;h()(x,{VBtn:f["a"],VCard:u["a"],VCardText:d["c"],VCardTitle:d["d"],VChip:v["a"],VChipGroup:p["a"],VCol:g["a"],VContainer:m["a"],VIcon:w["a"],VProgressLinear:b["a"],VRow:C["a"]})},ef9a:function(t,e,s){"use strict";var i=s("5530"),n=(s("8f5a"),s("b85c")),r=(s("caad"),s("99af"),s("fb6a"),s("608c"),s("9d26")),a=s("0789"),o=s("604c"),c=s("e4cd"),l=s("dc22"),h=s("c3f0"),f=s("58df"),u=s("80d2");function d(t,e,s,i){var n=t.clientWidth,r=s?e.content-t.offsetLeft-n:t.offsetLeft;s&&(i=-i);var a=e.wrapper+i,o=n+r,c=.4*n;return r<=i?i=Math.max(r-c,0):a<=o&&(i=Math.min(i-(a-o-c),e.content-e.wrapper)),s?-i:i}function v(t,e,s){var i=t.offsetLeft,n=t.clientWidth;if(s){var r=e.content-i-n/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,r))}var a=i+n/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,a))}var p=Object(f["a"])(o["a"],c["a"]).extend({name:"base-slide-group",directives:{Resize:l["a"],Touch:h["a"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:function(t){return"boolean"===typeof t||["always","desktop","mobile"].includes(t)}}},data:function(){return{internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,isSwipingHorizontal:!1,isSwiping:!1,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{canTouch:function(){return"undefined"!==typeof window},__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return Object(i["a"])(Object(i["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,e=t.content,s=t.wrapper;return e>Math.abs(this.scrollOffset)+s},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){this.$refs.content.style.transform="translateX(".concat(-t,"px)")}},beforeUpdate:function(){this.internalItemsLength=(this.$children||[]).length},updated:function(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{onScroll:function(){this.$refs.wrapper.scrollLeft=0},onFocusin:function(t){if(this.isOverflowing){var e,s=Object(n["a"])(Object(u["f"])(t));try{for(s.s();!(e=s.n()).done;){var i,r=e.value,a=Object(n["a"])(this.items);try{for(a.s();!(i=a.n()).done;){var o=i.value;if(o.$el===r)return void(this.scrollOffset=d(o.$el,this.widths,this.$vuetify.rtl,this.scrollOffset))}}catch(c){a.e(c)}finally{a.f()}}}catch(c){s.e(c)}finally{s.f()}}},genNext:function(){var t=this,e=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content",on:{focusin:this.onFocusin}},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var s="".concat(t[0].toUpperCase()).concat(t.slice(1)),i=this["has".concat(s)];return this.showArrows||i?this.$createElement(r["a"],{props:{disabled:!i}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,e=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[e])},genTransition:function(t){return this.$createElement(a["c"],[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper",on:{scroll:this.onScroll}},[this.genContent()])},calculateNewOffset:function(t,e,s,i){var n=s?-1:1,r=n*i+("prev"===t?-1:1)*e.wrapper;return n*Math.max(Math.min(r,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var e=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove:function(t){if(this.canTouch){if(!this.isSwiping){var e=t.touchmoveX-t.touchstartX,s=t.touchmoveY-t.touchstartY;this.isSwipingHorizontal=Math.abs(e)>Math.abs(s),this.isSwiping=!0}this.isSwipingHorizontal&&(this.scrollOffset=this.startX-t.touchmoveX,document.documentElement.style.overflowY="hidden")}},onTouchEnd:function(){if(this.canTouch){var t=this.$refs,e=t.content,s=t.wrapper,i=e.clientWidth-s.clientWidth;e.style.setProperty("transition",null),e.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-i&&(this.scrollOffset=-i):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=i&&(this.scrollOffset=i),this.isSwiping=!1,document.documentElement.style.removeProperty("overflow-y")}},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){if(!this.selectedItem&&this.items.length){var t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=v(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=d(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){var e=t.$refs,s=e.content,i=e.wrapper;t.widths={content:s?s.clientWidth:0,wrapper:i?i.clientWidth:0},t.isOverflowing=t.widths.wrapper+1<t.widths.content,t.scrollIntoView()}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}}),g=(p.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}}),s("a9ad"));e["a"]=Object(f["a"])(p,g["a"]).extend({name:"v-chip-group",provide:function(){return{chipGroup:this}},props:{column:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},p.options.computed.classes.call(this)),{},{"v-chip-group":!0,"v-chip-group--column":this.column})}},watch:{column:function(t){t&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData:function(){return this.setTextColor(this.color,Object(i["a"])({},p.options.methods.genData.call(this)))}}})}}]);
//# sourceMappingURL=chunk-ca07e2e6.f58ca570.js.map