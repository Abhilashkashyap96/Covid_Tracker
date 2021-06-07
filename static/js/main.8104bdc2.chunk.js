(this.webpackJsonpcovid_tracker=this.webpackJsonpcovid_tracker||[]).push([[0],{109:function(e,t,a){},237:function(e,t,a){},238:function(e,t,a){},239:function(e,t,a){},240:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(90),o=a.n(c),s=a(10),i=a.n(s),u=a(16),d=a(3),l=a(4),j=a(7),b=a(6),f=a(258),h=a(263),p=a(259),v=a(260),x=a(43),O=a.n(x),m=(a(109),a(2));var g=function(e){var t=e.data,a=t.confirmed,n=t.recovered,r=t.deaths,c=t.lastUpdate;return a?Object(m.jsx)("div",{className:"containerCard",children:Object(m.jsxs)(f.a,{container:!0,spacing:3,justify:"center",children:[Object(m.jsx)(f.a,{item:!0,component:h.a,xs:12,md:3,className:"card infected",children:Object(m.jsxs)(p.a,{children:[Object(m.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:"Infected"}),Object(m.jsx)(v.a,{variant:"h5",children:Object(m.jsx)(O.a,{start:0,end:a.value,duration:2.5,seperator:","})}),Object(m.jsxs)(v.a,{color:"textSecondary",children:[new Date(c).toDateString(),")"]}),Object(m.jsx)(v.a,{variant:"body2",children:"Number of active cases of COVID-19"})]})}),Object(m.jsx)(f.a,{item:!0,component:h.a,xs:12,md:3,className:"card recovered",children:Object(m.jsxs)(p.a,{children:[Object(m.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:"Recovered"}),Object(m.jsx)(v.a,{variant:"h5",children:Object(m.jsx)(O.a,{start:0,end:n.value,duration:2.5,seperator:","})}),Object(m.jsxs)(v.a,{color:"textSecondary",children:[new Date(c).toDateString(),")"]}),Object(m.jsx)(v.a,{variant:"body2",children:"Number of recoveries from COVID-19"})]})}),Object(m.jsx)(f.a,{item:!0,component:h.a,xs:12,md:3,className:"card deaths",children:Object(m.jsxs)(p.a,{children:[Object(m.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:"Deaths"}),Object(m.jsx)(v.a,{variant:"h5",children:Object(m.jsx)(O.a,{start:0,end:r.value,duration:2.5,seperator:","})}),Object(m.jsxs)(v.a,{color:"textSecondary",children:[new Date(c).toDateString(),")"]}),Object(m.jsx)(v.a,{variant:"body2",children:"Number of deaths cases caused by COVID-19"})]})})]})}):"Loading..."},y=a(27),C=a(44),w=a.n(C),k="https://covid19.mathdro.id/api",D=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r,c,o,s,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=k,t&&(a="".concat(k,"/countries/").concat(t)),e.prev=2,e.next=5,w.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,u=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:u});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("".concat(k,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,recovered:e.recovered.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("".concat(k,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),I=a(61);a(237);var L=function(e){var t=e.data,a=e.country,r=Object(n.useState)([]),c=Object(y.a)(r,2),o=c[0],s=c[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var d=o.length?Object(m.jsx)(I.b,{data:{labels:o.map((function(e){var t=e.date;return new Date(t).toLocaleDateString()})),datasets:[{data:o.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:o.map((function(e){return e.recovered})),label:"Recovered",borderColor:"green",backgroundColor:"rgba(0, 255, 0, 0.5)",fill:!0},{data:o.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null,l=t.confirmed?Object(m.jsx)(I.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[t.confirmed.value,t.recovered.value,t.deaths.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(a)}}}):null;return Object(m.jsx)("div",{className:"containerChart",children:a?l:d})},B=a(262),F=a(261),V=(a(238),function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),r=Object(y.a)(a,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),Object(m.jsx)(B.a,{className:"formControl",children:Object(m.jsxs)(F.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(m.jsx)("option",{value:"",children:"Global"}),c.map((function(e,t){return Object(m.jsx)("option",{value:e,children:e},t)}))]})})}),E=a.p+"static/media/Logo.9e5d4fc7.png",P=(a(239),function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).handleCountryChange=function(){var t=Object(u.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={data:{},country:""},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"logo",children:[Object(m.jsx)("img",{src:E,alt:"Logo"}),Object(m.jsx)("h1",{children:"Tracker"})]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(g,{data:this.state.data}),Object(m.jsx)(V,{handleCountryChange:this.handleCountryChange}),Object(m.jsx)(L,{data:this.state.data,country:this.state.country})]})}}]),a}(n.Component)),R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,264)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(P,{})}),document.getElementById("root")),R()}},[[240,1,2]]]);
//# sourceMappingURL=main.8104bdc2.chunk.js.map