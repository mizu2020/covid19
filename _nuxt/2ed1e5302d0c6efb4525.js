(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{413:function(t,e,n){var content=n(496);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("0ddbce0c",content,!1,{sourceMap:!1})},414:function(t,e,n){var content=n(498);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("f0fcac38",content,!1,{sourceMap:!1})},415:function(t,e,n){var content=n(501);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("93aae5f4",content,!1,{sourceMap:!1})},495:function(t,e,n){"use strict";var r=n(413);n.n(r).a},496:function(t,e,n){(e=n(11)(!1)).push([t.i,".header{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle{display:flex;align-items:center;font-size:1.875rem;line-height:1;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle{font-size:1.25rem}}.date{font-size:.875rem;color:#707070}.annotation{font-size:.75rem;color:#707070}@media screen and (min-width: 601px){.annotation{margin:0 0 0 auto}}",""]),t.exports=e},497:function(t,e,n){"use strict";var r=n(414);n.n(r).a},498:function(t,e,n){(e=n(11)(!1)).push([t.i,".WhatsNew{background-color:#fff;box-shadow:0px 0px 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:10px;margin-bottom:20px}.WhatsNew-heading{display:flex;align-items:center;font-size:19px;font-size:1.1875rem;color:#4d4d4d;font-weight:bold;margin-bottom:12px;color:#4d4d4d;margin-left:12px}.WhatsNew-heading-icon{margin:3px}.WhatsNew .WhatsNew-list{padding-left:0px;list-style-type:none}.WhatsNew .WhatsNew-list-item-anchor{display:inline-block;text-decoration:none;margin:5px;font-size:14px}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor{display:flex;flex-wrap:wrap}}.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 90px;color:#333}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 100%}}.WhatsNew .WhatsNew-list-item-anchor-link{flex:0 1 auto;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.WhatsNew .WhatsNew-list-item-anchor-link:hover{text-decoration:underline}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-link{padding-left:8px}}",""]),t.exports=e},499:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"3/25/2020","text":"の発表"}]}')},500:function(t,e,n){"use strict";var r=n(415);n.n(r).a},501:function(t,e,n){(e=n(11)(!1)).push([t.i,".MainPage .DataBlock[data-v-e21f25f8]{margin:20px -8px}@media screen and (min-width: 769px){.MainPage .DataBlock .DataCard[data-v-e21f25f8]{padding:10px}}@media screen and (max-width: 600px){.MainPage .DataBlock .DataCard[data-v-e21f25f8]{padding:4px 8px}}",""]),t.exports=e},505:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(403),l=r.default.extend({props:{title:{type:String,required:!0},icon:{type:String,required:!0},date:{type:String,required:!0}},computed:{formattedDate:function(){return Object(o.b)(this.date)}}}),d=(n(495),n(5)),c=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header mb-3"},[n("h2",{staticClass:"pageTitle"},[n("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[t._v("\n      "+t._s(t.icon)+"\n    ")]),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),n("div",{staticClass:"date"},[n("span",[t._v(t._s(t.$t("最終更新"))+" ")]),t._v(" "),n("time",{attrs:{datetime:t.formattedDate}},[t._v(t._s(t.date))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(t.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"annotation"},[n("span",[t._v(t._s(t.$t("注釈"))+" ")])])])}),[],!1,null,null,null).exports,m=r.default.extend({props:{items:{type:Array,required:!0}},methods:{isInternalLink:function(path){return!/^https?:\/\//.test(path)},formattedDate:function(t){return Object(o.a)(t)}}}),h=(n(497),Object(d.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"WhatsNew"},[n("h3",{staticClass:"WhatsNew-heading"},[n("v-icon",{staticClass:"WhatsNew-heading-icon",attrs:{size:"24"}},[t._v("\n      mdi-information\n    ")]),t._v("\n    "+t._s(t.$t("最新のお知らせ"))+"\n  ")],1),t._v(" "),n("ul",{staticClass:"WhatsNew-list"},t._l(t.items,(function(e,i){return n("li",{key:i,staticClass:"WhatsNew-list-item"},[n("a",{staticClass:"WhatsNew-list-item-anchor",attrs:{href:e.url,target:"_blank",rel:"noopener"}},[n("time",{staticClass:"WhatsNew-list-item-anchor-time px-2",attrs:{datetime:t.formattedDate(e.date)}},[t._v("\n          "+t._s(e.date)+"\n        ")]),t._v(" "),n("span",{staticClass:"WhatsNew-list-item-anchor-link"},[t._v("\n          "+t._s(e.text)+"\n          "),t.isInternalLink(e.url)?t._e():n("v-icon",{staticClass:"WhatsNew-item-ExternalLinkIcon",attrs:{size:"12"}},[t._v("\n            mdi-open-in-new\n          ")])],1)])])})),0)])}),[],!1,null,null,null).exports),f=n(374),x=n(499),w=n(424),v=n(422),_=n(425),N=r.default.extend({components:{PageHeader:c,WhatsNew:h,ConfirmedCasesNumberCard:w.a,TestedNumberCard:v.a,ConsultationDeskReportsNumberCard:_.a},data:function(){var data={Data:f,headerItem:{icon:"mdi-chart-timeline-variant",title:this.$t("ぐんぐん"),date:f.lastUpdate},newsItems:x.newsItems};return data},head:function(){return{title:this.$t("ぐんぐんぐん")}}}),W=(n(500),Object(d.a)(N,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MainPage"},[n("page-header",{attrs:{icon:t.headerItem.icon,title:t.headerItem.title,date:t.headerItem.date}}),t._v(" "),n("whats-new",{staticClass:"mb-4",attrs:{items:t.newsItems}}),t._v(" "),n("static-info",{staticClass:"mb-4",attrs:{url:t.localePath("/flow"),text:t.$t("自分や家族の症状に不安や心配があればまずは電話相談をどうぞ"),"btn-text":t.$t("相談の手順を見る")}}),t._v(" "),n("v-row",{staticClass:"DataBlock"},[t._v("\n  //  "),n("confirmed-cases-details-card"),t._v(" "),n("confirmed-cases-number-card"),t._v("\n  //  "),n("confirmed-cases-attributes-card"),t._v(" "),n("tested-number-card"),t._v("\n  //  "),n("telephone-advisory-reports-number-card"),t._v(" "),n("consultation-desk-reports-number-card"),t._v("\n  //  "),n("metro-card"),t._v("\n  //  "),n("agency-card")],1)],1)}),[],!1,null,"e21f25f8",null));e.default=W.exports}}]);