(function(t){function e(e){for(var n,s,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)s=o[l],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var o=a[s];0!==i[o]&&(n=!1)}n&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},s={app:0},i={app:0},r=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"765e8ffa"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"df3564de"}[t]+".css",i=c.p+n,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var u=r[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===n||l===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete s[t],f.parentNode.removeChild(f),a(r)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){s[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",d.name="ChunkLoadError",d.type=n,d.request=s,a[1](d)}i[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01ba":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEnElEQVRYR61XXUwcZRQ9d2ZpkZSus4vFKBjb7LBYDIli7E9MtAnRYtOHGtEYtVjB0t1FjG0T3xSSJkYT+wC7gwWtFeOLTWq0xsT6Q42JVKPGVKrdnUWJwRdlBxATK+x+18zCrLPL/g11nnbmO/ecs/e73507hDVc7rB+u0SSn8A3QGIBxvRiEuf/6lX/cEpHTgOUiP4iCM8SsN4ey8AkGMdnQ6rmhNORAa8WG2LQoaICLPqNkL+vXBNlG7h2UL9HkjFWDjEJ3p7oafiqLGw5IE8kvhOEfoBby8GDRX9yfdXAn131Ril80Qx4XtW3IsXHQLSvFFH+dR42gg3dxWILGkiLC7wDoGlt4itRjJNGSO0sxJHXwKaRn2uTS8lzADVflXjGA87PBtVd+bjyGlA0fZSAx/8PcYuDgbdmg+r+XM5VBpQhPUAMR2e5bKOMLiOkvm7HZxlwaxcVGVXjAPvLJnUAZKzeiiwDnki0DyS94IDTOZSw2wioH1mB2QY03Vy4t3DFUi+DB5yr2iJyOmXGgGdA3wgX5ouQXzKC6q0eTf8QQNuaTTDGjZC6c1UGSrZaoqNGwPeKGahosQECPb1WE4bsW4duWjLjMxkoaoDoUyPgy2rDV1MvRKIuEfD/VqYBNoi4LRHwf537j2u0eIuAOAjQQSfZEMy3zYUavi/HwAQJ8Xyix/9uMQG3FtsiQ2pdeVmZmVKKGpLQZBxSf8wy4I3Ee5h4MBNI6DQC6kkn/8zEpou5AjsgxA6QtB3Afas4bCfhv1Og6b8CqLfAgpKb5wK3TJn3NS9drhYb6AiTdDcxfWCElosx9/JGYg8wUVvVlcre6cP1f6cNDelPmpMSALcdbwTVtLbdAOcDmM+yC5SmpIVk88xzjQt2vDcc28YSXUiTMt5OhNTHrPXlWuFvihrwavr7DOy1QItJbLKGTI+mtwPpV3P6SsnwzXerk3bCHEy6Z1jr3qHojczStHVvb8mZDChabA8BowB50iICLfM96nfpNI7odVhKp7EdyD9kmBhagsZAC1iM2OdC5cTkXZQSX9gMP2QE1dNZW2DeKNrlZiL5DjA/QSy9lgj5RvPttdNniqaPEVgGaBAVGDeeUjPZyD8PhKP3kyy3GwHfAadiufhlcdSC0GcE1Mw2WriCI5mi6Z8x82GrYTg1okT0vUQ0TOAoA98aQfVIPo7CM2FEfxASKUbAN+JE3D0ytVlOJp8BcBOIPgezCylx0ehp+NiRgZvf+KVybg6Vro3/pGY6s4+cSXRd5NKGJK07a/7mFPpJ4juJsA1E1ZRKRRI9je95IrGjTLTHfY2rberA5iuODJhg72C0kWXpHLF4ORHyh7PO/VB8HzOfWXl2mkkadVdKn1hCXi3ewcTHJJZbZ4JbooWyWPLLyBOJ7wbxMDPOCheO289/TXiyQbiEy+rrpkhN+KeGFMn7SaIOAF326cdxBqyA6hPRmgohdxDzowBfEEwTDP4SixVTqapFl0uwnyD7wfQIgOvB4s0lF59a6PbPlKqfkhnIIugbcym1dQ9DwPxU2wpGExEYRD8AmADzhPH79Cn07UqWErbW/wUiddMwFDMdPwAAAABJRU5ErkJggndD0Ow8jycwF6uN7hwpGlpwKyKxGQRmaXIKBOPSLfvDuGnsGpqllLqgFAzHcKFn/gf4DyKlF77atWADAAAAAElFTkSuQmCC"},"0219":function(t,e,a){t.exports=a.p+"img/duowei.095c4639.png"},"1b45":function(t,e,a){t.exports=a.p+"img/home-2_2.23f7ac97.png"},2057:function(t,e,a){},"20ac":function(t,e,a){},3228:function(t,e,a){"use strict";a("2057")},"34d9":function(t,e,a){t.exports=a.p+"img/home-1.c418e20d.png"},"38fb":function(t,e,a){"use strict";a("7e3e")},"49fe":function(t,e){t.exports="data:image/png;base64,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"},"4aee":function(t,e,a){t.exports=a.p+"img/shishi.fc2a246f.png"},"4ee2":function(t,e,a){},"4ffd":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAsCAYAAAAacYo8AAAFRElEQVRoQ7WZaaxdUxTHf3/zEEJIScxSxSeCT0g0VFs1K0XSlrbGaNIS1QjaIB4JYkwkaJDWGARFaqiURCKNIYIgIqIxjzWUGpf8r31e7n3v3vP2Oefd/e2+t/Zav73P3mvaYsiIiA2BY4ETgf2B7YHfgA+B54Blkn4cOq/J74jYGzgbmAjsBWwKfA+8CTwGLJX0e7sNtf+IiEOAu4B9S0B+AhYDt0qKhsCbAdcD5wPesF7jM+BcSc8WAoPgETEDWAJsnAnzIHCGpL8y5TvEImIrYAVwcOb8f4G5ku6wfAs8Ig5Px2CjTCWFmA1PleSjVGlExJPAcZUmgeGPlrRCEeHP9QGwW0UlhfirwDGS1ubOj4hTgEdy5YfIrQHGGXwOcHdNJcW0t4FJkr7O0RMRrwMH5sj2kJltcH/uSQ2UFFM/Ao6U9GmZrojYBfCuNRnLDf5tcnlNFBVzffsnSnq/l7KIsKt9qqGxNQZv5NK6AHwHHCXJx2HYiIiZwH0NwdcZ3I7dF3Q0x8/A8ZJWDVUaEWcC9zQ0tt7gb6UI2VDXsOnekNMkdRyL0QS/Dlg42tRJ39/ALEnLCv0RcRjwErBBA5utHd8j5SG5EbOqPQeN+ZJua4P3cXFqUTXgFSrWF5FzALi0KlFF+UWSrm6DPwl4ICVUFVUxCO6VP+FwWlVDRfmbgYuK5CwinA0+DmxZUc//4B4R4VTSiZPT2X4Ou8I5kv5Jdp1kPQ1sW8Fo64w747o9KXFq6fDvM9jP4a9rj/NHsuu83xF8h0yjLXAHoMslXZOU+CvcCFyYqaSumD2Lff2vye444AVg1wyFg+CWvUHSgrajcwVwVYaSJiKrgSmSXO34uBra8F5E2egAt6Bd1HmS7MKsaC5wS0OfO9LC3kv5zRfJ5phUG/j49BrDwC34MDCjqGwiYnoK0XV97kjg/v8nKbP8OMFvAzxTUh11Bfdc13YnFwVqyui8oM1zKGrKfJly+ncSvF2kXaVd5tDRE9yCr7jal+SEycdmPOBya+uaYDnT3D3wmX8t2bSLdpBysGofpeAWfAOYLMmpquFdtdhtuWXRr7HOoJKeTza7uegRwT3XRYErm8+Ton3Szd+5X+SA/ft0SY8mm3bRNwHzks0s8G6Xx4W13ZabN/0ajqzupbhl0hoRcSWwCMgG9zxfHpdl7yYljnI+NmVuq+miHBwXSHJALOAdGAeqlm4OFL48DhzeAbut5cChTQlHmD8g6bI2+JlVwT33F+AESQ7Zht8i9fcm9xneHSznVa3gWAfc89YDpxZlWUS4CFnqv/UZ3pmlK6qoC24+9wyt5P608y7FvCvn9Bn+Yp/5JuDm62hEpgX0s4a1CfcpxzYFLzZ3vKSX2y7PJYAX0NHGHsUvsXi0wE+X9FA7WES4Ue+jU9b3rruW1X0DT8dmWrq0m9Ql7DGv1cnyJWuastrDdG0bR4TdpEN31YK4dK0Gd0TcseGOTJC0speO9ETjQFWlIC5DWmtwJ+xTGoDbs4wpyq8S+P1SitB0k2xilcFnp7efuuwrJU3ImRwRY1NytnuOfInMPIM7WfdTYN2nFKe8L+aCRMROCb7sZa9M3TctP55u/xGpQK3qupZIOisXus3Pb5eOzUEV5zpbnOY8vb2TNQu4s4KH8WVzXfpnReMt8fRc6MaQX/xyhqEXSvK7aGdkS3Wl4csKBPe93SS9tmij5VjtJpOSMzei5o/wvupHsQsk+ZW5NYaF5IiwT5+aCtQDAH9Ww/oeuA68V9JXdWF7LGDPlJz5Ec3P4+4m/AD40cFfxTZbHa9i/AdmBisPbeZ02gAAAABJRU5ErkJggg=="},"56d7":function(t,e,a){"use strict";a.r(e);a("0fb7"),a("450d");var n=a("f529"),s=a.n(n),i=(a("be4f"),a("896a")),r=a.n(i),o=(a("10cb"),a("f3ad")),c=a.n(o),u=(a("1951"),a("eedf")),l=a.n(u),d=(a("06f1"),a("6ac9")),f=a.n(d),p=(a("186a"),a("301f")),m=a.n(p),v=(a("96dc"),a("9cea")),A=a.n(v),h=(a("acb6"),a("c673")),g=a.n(h),b=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},E=[],w=(a("5c0b"),a("2877")),S={},D=Object(w["a"])(S,C,E,!1,null,null,null),y=D.exports,x=(a("d3b7"),a("8c4f")),I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"border"},[a("Header",{attrs:{headerData:t.headerData}}),a("div",{staticClass:"introduce"},[t._m(0),a("div",{staticClass:"content"},[a("div",{staticClass:"container"},[a("div",{staticClass:"item",on:{mouseenter:function(e){return t.mouseenter()}}},[a("p",{staticClass:"circle"}),a("title",[t._v("弹性福利")]),a("p",{staticClass:"describe1"},[t._v("好的员工")]),a("p",{staticClass:"describe1"},[t._v("是夸出来的")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isDetail,expression:"isDetail"}],staticClass:"item2",on:{mouseleave:function(e){return t.mouseleave()}}},[a("title",[t._v("弹性福利")]),a("p",{staticClass:"line"}),a("p",{staticClass:"detail"},[t._v(" 根据员工工作日常表现发放福利，员工选择心仪礼物，降低激励成本，提高激励效果 ")])]),a("div",{staticClass:"item",on:{mouseenter:function(e){return t.mouseenter2()}}},[a("p",{staticClass:"circle"}),a("title",[t._v("智能获客")]),a("p",{staticClass:"describe2"},[t._v("最好的广告是口口相传")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isDetail2,expression:"isDetail2"}],staticClass:"item2",staticStyle:{left:"6.94rem"},on:{mouseleave:function(e){return t.mouseleave2()}}},[a("title",[t._v("智能获客")]),a("p",{staticClass:"line"}),a("p",{staticClass:"detail"},[t._v(" 基于H5,小程序的功能，通过砍价，秒杀等活动方式提高用户量和转化率、复购率的等。 ")])]),a("div",{staticClass:"item",on:{mouseenter:function(e){return t.mouseenter3()}}},[a("p",{staticClass:"circle"}),a("title",[t._v("销售激励")]),a("p",{staticClass:"describe3"},[t._v("让工作如此有趣真是不好意思")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isDetail3,expression:"isDetail3"}],staticClass:"item2",staticStyle:{left:"10.78rem"},on:{mouseleave:function(e){return t.mouseleave3()}}},[a("title",[t._v("销售激励")]),a("p",{staticClass:"line"}),a("p",{staticClass:"detail"},[t._v(" 多维度的销售PK玩法。全员参与营销，类似游戏升级打怪。从过升级等方式提升业务能力及销售量。 ")])])])])]),a("div",{staticClass:"way"},[t._m(1),t._m(2),a("el-image",{staticClass:"img",staticStyle:{right:"3.5rem",width:"3rem"},attrs:{src:t.url1,lazy:""}}),a("div",{staticClass:"f9"},[t._m(3),a("el-image",{staticClass:"img",staticStyle:{"z-index":"1",top:"16.3rem",right:"9.76rem",width:"2.43rem",height:"2.4rem","box-shadow":"10px 10px 10px rgba(0,0,0,.5)","-moz-box-shadow":"10px 10px 10px rgba(0,0,0,.5)","-webkit-box-shadow":"10px 10px 10px rgba(0,0,0,.5)"},attrs:{src:t.url2_1,lazy:""}}),a("el-image",{staticClass:"img",staticStyle:{top:"16.05rem",right:"8.9rem",width:"1.43rem",height:"3.4rem"},attrs:{src:t.url2_2,lazy:""}})],1),t._m(4),a("el-image",{staticClass:"img",staticStyle:{top:"19.5rem",width:"3.2rem",height:"3.4rem"},attrs:{src:t.url3,lazy:""}})],1),t._m(5),t._m(6),a("Weixinkefu"),a("Footer",{attrs:{footerData:t.footerData}})],1)])},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("dl",[a("dt",[t._v("应用价值")]),a("dd",[t._v("VALUE")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wayHeader"},[a("h3",[t._v("销售管理就选 NICETEAM")]),a("p",[a("span",[t._v("高效协作")]),t._v(" | "),a("span",[t._v("有效裂变")]),t._v(" | "),a("span",[t._v("免费注册下载")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"means"},[a("span",{staticClass:"sort"},[t._v("01")]),a("p",[t._v("我们如何")]),a("p",[t._v("帮您实现激励")]),a("p",{staticClass:"star"},[t._v(" 为员工建立星愿梦工厂，员工通过平台选择专属星愿，通过销售任务及日常表现累计业绩，从而提升员工积极性 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"means",staticStyle:{"background-color":"#"}},[a("span",{staticClass:"sort",staticStyle:{"margin-left":"5.75rem"}},[t._v("02")]),a("p",{staticStyle:{"margin-left":"5.75rem",width:"2rem"}},[t._v("激发游戏管理")]),a("p",{staticStyle:{"margin-left":"5.75rem",width:"2rem"}},[t._v("拒绝乏味无趣")]),a("p",{staticClass:"star",staticStyle:{"margin-left":"5.75rem"}},[t._v(" 分享、裂变、砍价、拼单 你以为的营销都是打怪升级，游戏化管理，趣味性工作，让工作生动有趣，不再乏味无趣 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"means"},[a("span",{staticClass:"sort"},[t._v("03")]),a("p",[t._v("让工作有趣")]),a("p",[t._v("赋团队激情")]),a("p",{staticClass:"star"},[t._v(" 为员工建立星愿梦工厂，员工通过平台选择专属星愿，通过销售任务及日常表现累计业绩，从而提升员工积极性 ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"advantage"},[n("h5",[t._v("NICETEAM 的部分优势")]),n("div",{staticClass:"advan"},[n("div",{staticClass:"box"},[n("img",{attrs:{src:a("0219"),alt:""}}),n("dl",[n("dt",[t._v("自定义多维度玩法")]),n("dd",[t._v(" 个人PK公司，战队PK战队，个人PK个人，二线人员押宝，多种玩法随心选择，自定义PK周期，员工自主选择标的物。 ")])])]),n("div",{staticClass:"box"},[n("img",{attrs:{src:a("4aee"),alt:""}}),n("dl",[n("dt",[t._v("销售行为实时采集")]),n("dd",[t._v(" SCRM销售场景的数据采集为你研判员工和客户提供精准数据支撑，有效提高员工成交率、客单量、销售业绩。 ")])])]),n("div",{staticClass:"box"},[n("img",{attrs:{src:a("68e3"),alt:""}}),n("dl",[n("dt",[t._v("全场景营销工具支撑")]),n("dd",[t._v(" 分享朋友圈的砍价H5、发送微信群的拼团小程序，适合不同销售能级的员工提供工具支持、知识赋能让销售技能不断提升。 ")])])]),n("div",{staticClass:"box"},[n("img",{attrs:{src:a("49fe"),alt:""}}),n("dl",[n("dt",[t._v("高性价比福利物品")]),n("dd",[t._v(" 严选品牌供应商，放大福利价值。提升员工对福利的感知度，沉浸到福利场景中，更有效的激活员工的主观能动性。 ")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"partners"},[n("div",{staticClass:"friend"},[n("h5",[t._v("NICETEAM 的合作伙伴")]),n("p",[n("img",{attrs:{src:a("7113"),alt:""}})])])])}],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"headerTop"},[n("p",{staticClass:"bar"},[n("img",{staticClass:"logo",attrs:{src:a("4ffd"),alt:""}}),n("a",{staticClass:"header-item",attrs:{href:"javascript:;"},on:{click:function(e){return t.goHome()}}},[t._v("首页")]),n("a",{staticClass:"header-item",attrs:{href:"javascript:;"},on:{click:function(e){return t.goProductIntroduction()}}},[t._v("产品介绍")]),n("a",{staticClass:"header-item",attrs:{href:"javascript:;"},on:{click:function(e){return t.goSolutions()}}},[t._v("解决方案")]),n("a",{staticClass:"header-item",attrs:{href:"javascript:;"},on:{click:function(e){return t.goCustomercase()}}},[t._v("客户案例")]),n("a",{staticClass:"header-item",attrs:{href:"javascript:;"},on:{click:function(e){return t.goBlog()}}},[t._v("Nice博客")]),n("a",{staticClass:"header-item",attrs:{href:"javascript:;"},on:{click:function(e){return t.goAbout()}}},[t._v("关于")])]),n("button",{staticClass:"mianfei",on:{click:function(e){return t.tiyan()}}},[t._v(t._s(t.headerData.free))])]),n("div",{staticClass:"headerMain"},[n("div",{staticClass:"theme"},[n("dl",[t.headerData.title?n("dt",[t._v(t._s(t.headerData.title))]):t._e(),t.headerData.content?n("dd",[t._v(t._s(t.headerData.content))]):t._e()]),t.headerData.detail?n("p",{staticClass:"jianjie"},[t._v(" "+t._s(t.headerData.detail)+" ")]):t._e(),t.headerData.immediately?n("button",{staticClass:"knowMore",on:{click:function(e){return t.goProductIntroduction()}}},[t._v(" "+t._s(t.headerData.immediately)+" ")]):t._e()]),t.headerData.path?n("img",{staticClass:"mainImg",attrs:{src:t.headerData.path,alt:""}}):t._e()])])},H=[],F={name:"Header",props:{headerData:{type:Object}},data:function(){return{}},methods:{goHome:function(){this.$router.push("/")},goProductIntroduction:function(){this.$router.push("/productintroduction")},goSolutions:function(){this.$router.push("/solutions")},goCustomercase:function(){this.$router.push("/customercase")},goBlog:function(){this.$router.push("/blog")},goAbout:function(){this.$router.push("/aboutus")},tiyan:function(){this.$router.push("/connect")}}},N=F,O=(a("fddf"),Object(w["a"])(N,R,H,!1,null,"4e15dc28",null)),T=O.exports,J=a("81b0"),L=a("fd2d"),B={name:"Home",components:{Header:T,Weixinkefu:J["a"],Footer:L["a"]},data:function(){return{isDetail:!1,isDetail2:!1,isDetail3:!1,url1:a("34d9"),url2_1:a("72db"),url2_2:a("1b45"),url3:a("82f3"),headerData:{free:"免费体验",title:"游戏化管理平台",content:"销售团队弹性激励",detail:"NICETEAM : 一个促进全员销售的员工激励平台，让销售更轻松，让管理更高效，让工作更有趣",immediately:"立即了解",path:a("7385")},footerData:{title:"限时免费！ 立刻定制企业管理解决方案"}}},methods:{mouseenter:function(){this.isDetail=!0},mouseleave:function(){this.isDetail=!1},mouseenter2:function(){this.isDetail2=!0},mouseleave2:function(){this.isDetail2=!1},mouseenter3:function(){this.isDetail3=!0},mouseleave3:function(){this.isDetail3=!1}}},Q=B,k=(a("38fb"),Object(w["a"])(Q,I,P,!1,null,"44651c51",null)),j=k.exports;b["default"].use(x["a"]);var G=[{path:"/",name:"Home",component:j},{path:"/productintroduction",name:"ProductIntroduction",component:function(){return a.e("about").then(a.bind(null,"ffa6"))}},{path:"/solutions",name:"Solutions",component:function(){return a.e("about").then(a.bind(null,"d4f5"))}},{path:"/connect",name:"Connect",component:function(){return a.e("about").then(a.bind(null,"985a"))}},{path:"/transform",name:"Transform",component:function(){return a.e("about").then(a.bind(null,"31a6"))}},{path:"/manage",name:"Manage",component:function(){return a.e("about").then(a.bind(null,"41d9"))}},{path:"/inspire",name:"Inspire",component:function(){return a.e("about").then(a.bind(null,"741a"))}},{path:"/customercase",name:"CustomerCase",component:function(){return a.e("about").then(a.bind(null,"afe0"))}},{path:"/aboutus",name:"AboutUs",component:function(){return a.e("about").then(a.bind(null,"2664"))}},{path:"/blog",name:"Blog",component:function(){return a.e("about").then(a.bind(null,"fd3f"))}},{path:"*",name:"NotFound",component:function(){return a.e("about").then(a.bind(null,"9703"))}}],K=new x["a"]({routes:G}),X=K,M=a("2f62");b["default"].use(M["a"]);var W=new M["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Y=(a("4ee2"),a("46a1"),a("e5f2")),z=a.n(Y),U=a("bc3a"),Z=a.n(U),V="";Z.a.defaults.withCredentials=!1,Z.a.defaults.headers.common["token"]=V,Z.a.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8",Z.a.interceptors.request.use((function(t){var e=window.localStorage.getItem("token");return e&&(t.headers.Authorization=e,t.headers["token"]=e),t}),(function(t){return z()({title:"温馨提示",message:"请求超时",type:"warning"}),Promise.reject(t)})),Z.a.interceptors.response.use((function(t){return t.data&&0==t.data.code||z()({title:"温馨提示",message:t.data.msg,type:"warning"}),t}),(function(t){return Promise.reject(t)}));var _="http://manager.niceteam.com.cn",q=function(t,e){return Z.a.post("".concat(_).concat(t),e).then((function(t){return t.data}))},$=function(t,e){return Z.a.get("".concat(_).concat(t),{params:e}).then((function(t){return t.data}))};b["default"].use(g.a),b["default"].use(A.a),b["default"].use(m.a),b["default"].use(f.a),b["default"].use(l.a),b["default"].use(c.a),b["default"].use(r.a),b["default"].prototype.$message=s.a,b["default"].prototype.$ajaxGet=$,b["default"].prototype.$ajaxPost=q,b["default"].config.productionTip=!1,new b["default"]({router:X,store:W,render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"68e3":function(t,e,a){t.exports=a.p+"img/gongju.b7bfecae.png"},7113:function(t,e,a){t.exports=a.p+"img/partner.4abf0b4e.png"},"72db":function(t,e,a){t.exports=a.p+"img/home-2_1.2eb8accf.png"},7385:function(t,e,a){t.exports=a.p+"img/toutu.965dc139.png"},"7e3e":function(t,e,a){},"7eb4":function(t,e,a){t.exports=a.p+"img/kefu.98a30bae.png"},"81b0":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weixinkefu"},[a("el-popover",{attrs:{placement:"left-start",title:"禧人科技客户经理",width:"200",trigger:"hover",content:"\n        <img src='../assets/img/logo.png'/>\n        扫码免费领取体验资格\n        "}},[a("el-button",{staticClass:"lianxi",attrs:{slot:"reference"},slot:"reference"},[a("div",{staticClass:"borderImg"},[a("el-image",{staticClass:"touxiang",attrs:{src:t.QRcode}})],1),a("p",{staticClass:"zixun"},[t._v("立即咨询")])]),a("el-image",{attrs:{src:t.KFcode}})],1)],1)},s=[],i={name:"Weixinkefu",props:{},data:function(){return{QRcode:a("01ba"),KFcode:a("7eb4")}},methods:{}},r=i,o=(a("3228"),a("2877")),c=Object(o["a"])(r,n,s,!1,null,"3f869beb",null);e["a"]=c.exports},"82f3":function(t,e,a){t.exports=a.p+"img/home-3.09fba718.png"},"9c0c":function(t,e,a){},bb6e:function(t,e,a){t.exports=a.p+"img/gzhCode.3d2d5a77.png"},c081:function(t,e,a){"use strict";a("20ac")},f223:function(t,e){t.exports="data:image/png;base64,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"},f892:function(t,e,a){},fd2d:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"footerTop"},[a("h5",[t._v(t._s(t.footerData.title))]),a("button",{on:{click:function(e){return t.tiyan()}}},[t._v("免费体验")])]),t._m(0)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footerBottom"},[n("div",{staticClass:"detail"},[n("div",{staticClass:"left"},[n("dl",[n("dt",[t._v("产品及服务")]),n("dd",[t._v("关于NICETEAM")]),n("dd",[t._v("公司历程")]),n("dd",[t._v("禧多多")])]),n("dl",[n("dt",[t._v("关于NICETEAM")]),n("dd",[t._v("相关业务")]),n("dd",[t._v("公司历程")]),n("dd",[t._v("禧多多")])]),n("dl",{staticClass:"jishu"},[n("dt",[t._v("技术支持")]),n("dd",[t._v("注册登陆问题")]),n("dd",{staticStyle:{"margin-bottom":"0.09rem"}},[t._v("备案")]),n("dd",{staticStyle:{color:"#515151"}},[t._v("1")])])]),n("div",{staticClass:"right"},[n("img",{attrs:{src:a("bb6e"),alt:""}}),n("p",[t._v("扫码关注公众号")])])]),n("p",{staticClass:"line"}),n("div",{staticClass:"bottom"},[n("dl",[n("dt",[n("span",[t._v("用户反馈")]),n("span",[t._v("隐私政策")]),n("span",[t._v("详情了解")])]),n("dd",[t._v("sdasdsad@qq.com")])]),n("p",[n("img",{attrs:{src:a("f223"),alt:""}}),n("span",[t._v("NICETEAM")])])])])}],i={name:"Footer",props:{footerData:{type:Object}},data:function(){return{}},methods:{tiyan:function(){this.$router.push("/connect")}}},r=i,o=(a("c081"),a("2877")),c=Object(o["a"])(r,n,s,!1,null,"e5591e9c",null);e["a"]=c.exports},fddf:function(t,e,a){"use strict";a("f892")}});