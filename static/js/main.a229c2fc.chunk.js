(this["webpackJsonphw61-watches"]=this["webpackJsonphw61-watches"]||[]).push([[0],{21:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(9),a=n.n(s),r=(n(21),n(14)),l=n(5),u=n(10),d=n(16),o=n(13),h=n(11),j=n.n(h),f=n(6),b=n(8),m=n(15),O=n(12),x=n.n(O),v=function e(t,n,c){Object(l.a)(this,e),this.city=t,this.offset=n,this.id=c},p=n(0),w=function(e){var t=e.handleAdd,n=Object(c.useState)({city:"",offset:""}),i=Object(m.a)(n,2),s=i[0],a=i[1],r=function(e){var t=e.target,n=t.name,c=t.value;a((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(f.a)({},n,c))}))};return Object(p.jsxs)("form",{className:"ui form",onSubmit:function(e){e.preventDefault();var n=new v(s.city,s.offset,x.a.generate());t(n),a({city:"",offset:""})},children:[Object(p.jsxs)("div",{className:"two fields",children:[Object(p.jsxs)("div",{className:"field",children:[Object(p.jsx)("label",{htmlFor:"city",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(p.jsx)("div",{className:"ui input left icon",children:Object(p.jsx)("input",{type:"text",id:"city",name:"city",value:s.city,onChange:r,required:!0})})]}),Object(p.jsxs)("div",{className:"field",children:[Object(p.jsx)("label",{htmlFor:"distance",children:"\u0412\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0437\u043e\u043d\u0430"}),Object(p.jsx)("input",{type:"number",step:1,min:-12,max:14,name:"offset",id:"offset",value:s.offset,onChange:r,required:!0})]})]}),Object(p.jsx)("button",{className:"ui green button",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})},g=function(e){var t=e.watch,n=e.currentUTC,c=e.handleDelete;return Object(p.jsx)("div",{className:"eight wide column",children:Object(p.jsxs)("div",{className:"ui segment",children:[Object(p.jsx)("p",{children:Object(p.jsx)("b",{children:t.city})}),Object(p.jsx)("p",{children:n.utcOffset(Number(t.offset)).format("kk:mm:ss")}),Object(p.jsx)("button",{onClick:function(){return c(t.id)},children:Object(p.jsx)("i",{className:"times red icon"})})]})})},y=function(e){var t=e.watches,n=e.currentUTC,c=e.handleDelete;return Object(p.jsx)("div",{className:"ui basic segment",children:Object(p.jsx)("div",{className:"ui grid",children:t.map((function(e){return Object(p.jsx)(g,{watch:e,currentUTC:n,handleDelete:c},e.id)}))})})},C=(n(32),function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).loadTime=function(){setInterval((function(){e.setState({currentUTC:j()().utc()})}),1e3)},e.handleAdd=function(t){e.setState((function(e){return{watches:[].concat(Object(r.a)(e.watches),[t])}}))},e.handleDelete=function(t){e.setState((function(e){return{watches:e.watches.filter((function(e){return e.id!==t}))}}))},e.state={watches:[],currentUTC:null},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.loadTime()}},{key:"componentWillUnmount",value:function(){clearInterval(this.loadTime)}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("div",{className:"ui container segment",children:[Object(p.jsx)(w,{handleAdd:this.handleAdd}),Object(p.jsx)(y,{watches:this.state.watches,currentUTC:this.state.currentUTC,handleDelete:this.handleDelete})]}),Object(p.jsx)("p",{children:"learn react"})]})}}]),n}(c.Component)),N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};a.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(C,{})}),document.getElementById("root")),N()}},[[33,1,2]]]);
//# sourceMappingURL=main.a229c2fc.chunk.js.map