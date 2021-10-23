(this["webpackJsonpmath-magicians"]=this["webpackJsonpmath-magicians"]||[]).push([[0],{12:function(t,n,e){t.exports={View:"view_View__3vKuY"}},13:function(t,n,e){t.exports={UI:"ui_UI__35J1M"}},14:function(t,n,e){t.exports={Calculator:"calculator_Calculator__2P3R-"}},20:function(t,n,e){},22:function(t,n,e){"use strict";e.r(n);var a=e(2),c=e.n(a),l=e(11),i=e.n(l),o=(e(20),e(3)),r=e(4),s=e(6),j=e(5),u=e(1),h=e(15),d=e(12),b=e.n(d),O=e(0),x=function(t){Object(s.a)(e,t);var n=Object(j.a)(e);function e(){return Object(o.a)(this,e),n.apply(this,arguments)}return Object(r.a)(e,[{key:"render",value:function(){var t=this.props,n=t.output,e=t.operation,a=t.next;return Object(O.jsxs)("div",{className:"".concat(b.a.View),children:[Object(O.jsx)("p",{children:n||null}),Object(O.jsx)("p",{children:e||null}),Object(O.jsx)("p",{children:n||e||a?a:"0"})]})}}]),e}(a.Component);x.defaultProps={output:"",operation:"",next:""};var p=x,C=e(7),k=e(8),m=e.n(k),f=function(t){Object(s.a)(e,t);var n=Object(j.a)(e);function e(){return Object(o.a)(this,e),n.apply(this,arguments)}return Object(r.a)(e,[{key:"render",value:function(){var t=this.props,n=t.name,e=t.handleClick,a=m.a.Button;"0"===n&&(a+=" ".concat(m.a.ButtonSpan2)),"x"!==n&&"\xf7"!==n&&"-"!==n&&"+"!==n&&"="!==n||(a+=" ".concat(m.a.ButtonOrange));return Object(O.jsx)("button",{type:"button",className:"".concat(a),onClick:function(){return e(n)},children:n})}}]),e}(a.Component),v=e(13),g=e.n(v),_=function(t){Object(s.a)(e,t);var n=Object(j.a)(e);function e(t){var a;return Object(o.a)(this,e),(a=n.call(this,t)).handleClick=a.handleClick.bind(Object(C.a)(a)),a}return Object(r.a)(e,[{key:"handleClick",value:function(t){(0,this.props.onClickHandler)(t)}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"".concat(g.a.UI),children:[Object(O.jsxs)("div",{className:"group",children:[Object(O.jsx)(f,{name:"AC",handleClick:this.handleClick}),Object(O.jsx)(f,{name:"+/-",handleClick:this.handleClick}),Object(O.jsx)(f,{name:"%",handleClick:this.handleClick}),Object(O.jsx)(f,{name:"\xf7",handleClick:this.handleClick})]}),Object(O.jsxs)("div",{className:"group",children:[Object(O.jsx)(f,{name:"8",handleClick:this.handleClick}),Object(O.jsx)(f,{name:"7",handleClick:this.handleClick}),Object(O.jsx)(f,{name:"9",handleClick:this.handleClick}),Object(O.jsx)(f,{name:"x",handleClick:this.handleClick})]}),Object(O.jsxs)("div",{className:"group",children:[Object(O.jsx)(f,{name:"4",handleClick:this.handleClick}),Object(O.jsx)(f,{name:"5",handleClick:this.handleClick}),Object(O.jsx)(f,{name:"6",handleClick:this.handleClick}),Object(O.jsx)(f,{name:"-",handleClick:this.handleClick})]}),Object(O.jsxs)("div",{className:"group",children:[Object(O.jsx)(f,{name:"1",handleClick:this.handleClick}),Object(O.jsx)(f,{name:"2",handleClick:this.handleClick}),Object(O.jsx)(f,{name:"3",handleClick:this.handleClick}),Object(O.jsx)(f,{name:"+",handleClick:this.handleClick})]}),Object(O.jsxs)("div",{className:"group",children:[Object(O.jsx)(f,{name:"0",handleClick:this.handleClick,size:"2"}),Object(O.jsx)(f,{name:".",handleClick:this.handleClick}),Object(O.jsx)(f,{name:"=",handleClick:this.handleClick})]})]})}}]),e}(a.Component),y=e(10),S=e.n(y);function B(t,n,e){var a=S()(t),c=S()(n);if("+"===e)return a.plus(c).toString();if("-"===e)return a.minus(c).toString();if("x"===e)return a.times(c).toString();if("\xf7"===e)try{return a.div(c).toString()}catch(l){return"Can't divide by 0."}if("%"===e)return a.mod(c).toString();throw Error("Unknown operation '".concat(e,"'"))}var N=e(14),w=e.n(N),I=function(){var t=Object(a.useState)({total:null,next:null,operation:null}),n=Object(h.a)(t,2),e=n[0],c=n[1],l=e.total,i=e.next,o=e.operation;return Object(O.jsxs)("div",{className:"".concat(w.a.Calculator),children:[Object(O.jsx)(p,{output:l,operation:o,next:i}),Object(O.jsx)(_,{onClickHandler:function(t){c(Object(u.a)(Object(u.a)({},e),function(t,n){return"AC"===n?{total:null,next:null,operation:null}:n.match(/[0-9]+/)?"0"===n&&"0"===t.next?{}:t.operation?t.next?Object(u.a)(Object(u.a)({},t),{},{next:t.next+n}):Object(u.a)(Object(u.a)({},t),{},{next:n}):t.next?{next:t.next+n,total:null}:{next:n,total:null}:"."===n?t.next?t.next.includes(".")?Object(u.a)({},t):Object(u.a)(Object(u.a)({},t),{},{next:"".concat(t.next,".")}):t.operation?{next:"0."}:t.total?t.total.includes(".")?{}:{total:"".concat(t.total,".")}:{total:"0."}:"="===n?t.next&&t.operation?{total:B(t.total,t.next,t.operation),next:null,operation:null}:{}:"+/-"===n?t.next?Object(u.a)(Object(u.a)({},t),{},{next:(-1*parseFloat(t.next)).toString()}):t.total?Object(u.a)(Object(u.a)({},t),{},{total:(-1*parseFloat(t.total)).toString()}):{}:t.next||!t.total||t.operation?t.next?{total:t.next,next:null,operation:n}:{operation:n}:Object(u.a)(Object(u.a)({},t),{},{operation:n})}(e,t)))}})]})},U=function(t){Object(s.a)(e,t);var n=Object(j.a)(e);function e(){return Object(o.a)(this,e),n.apply(this,arguments)}return Object(r.a)(e,[{key:"render",value:function(){return Object(O.jsx)(I,{})}}]),e}(c.a.Component);i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(U,{})}),document.getElementById("root"))},8:function(t,n,e){t.exports={Button:"button_Button__A3c3E",ButtonSpan2:"button_ButtonSpan2__3OhWW",ButtonOrange:"button_ButtonOrange__19HoI"}}},[[22,1,2]]]);
//# sourceMappingURL=main.00826ac3.chunk.js.map