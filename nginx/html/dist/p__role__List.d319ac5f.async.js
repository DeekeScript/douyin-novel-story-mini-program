(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[136],{5966:function(W,T,e){"use strict";var n=e(22122),i=e(81253),a=e(67294),f=e(81160),u=["fieldProps","proFieldProps"],Z=["fieldProps","proFieldProps"],b="text",m=function(l){var p=l.fieldProps,o=l.proFieldProps,r=(0,i.Z)(l,u);return a.createElement(f.Z,(0,n.Z)({mode:"edit",valueType:b,fieldProps:p,filedConfig:{valueType:b},proFieldProps:o},r))},y=function(l){var p=l.fieldProps,o=l.proFieldProps,r=(0,i.Z)(l,Z);return a.createElement(f.Z,(0,n.Z)({mode:"edit",valueType:"password",fieldProps:p,proFieldProps:o,filedConfig:{valueType:b}},r))},c=m;c.Password=y,c.displayName="ProFormComponent",T.Z=c},91220:function(W,T,e){"use strict";e.d(T,{Z:function(){return i}});var n=e(64254);function i(a,f){var u=typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(!u){if(Array.isArray(a)||(u=(0,n.Z)(a))||f&&a&&typeof a.length=="number"){u&&(a=u);var Z=0,b=function(){};return{s:b,n:function(){return Z>=a.length?{done:!0}:{done:!1,value:a[Z++]}},e:function(l){throw l},f:b}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var m=!0,y=!1,c;return{s:function(){u=u.call(a)},n:function(){var l=u.next();return m=l.done,l},e:function(l){y=!0,c=l},f:function(){try{!m&&u.return!=null&&u.return()}finally{if(y)throw c}}}}},94750:function(W,T,e){"use strict";var n=e(5632);T.Z=function(i){var a=(0,n.md)();return a.buttonHasAccess(i)?i.children:null}},38795:function(W,T,e){"use strict";e.r(T),e.d(T,{default:function(){return X}});var n=e(62350),i=e(24565),a=e(57663),f=e(71577),u=e(90636),Z=e(11849),b=e(34792),m=e(48086),y=e(3182),c=e(2824),v=e(60625),l=e(49101),p=e(67265),o=e(77022),r=e(67294),d=e(66456),s=e(15885),P=e(91220),_=e(37476),H=e(5966),z=e(88713),E=e(85893),J=function(I){var x,B=(0,r.useRef)(),Y=(0,r.useState)(((x=I.values)===null||x===void 0?void 0:x.action_id)||[]),F=(0,c.Z)(Y,2),U=F[0],K=F[1],V=function(g){K(g)};(0,r.useEffect)(function(){var M,g,A=[];if(!!((M=I.values)!==null&&M!==void 0&&(g=M.action_id)!==null&&g!==void 0&&g.length)){var R=(0,P.Z)(I.values.action_id),D;try{for(R.s();!(D=R.n()).done;){var G=D.value;A.push(G.action_id)}}catch(N){R.e(N)}finally{R.f()}K(A)}},[]);var L=[{title:"ID",dataIndex:"id",search:!1},{title:"\u540D\u79F0",dataIndex:"name",valueType:"text",search:!1},{title:"\u7C7B\u578B",dataIndex:"level",valueType:"select",search:!1,valueEnum:{0:{text:"\u83DC\u5355",status:"Error"},1:{text:"\u529F\u80FD",status:"Success",disabled:!0}}},{title:"\u8DEF\u7531",dataIndex:"route",valueType:"text",search:!1}];return(0,E.jsxs)(_.Y,{title:"\u7F16\u8F91",width:800+"px",initialValues:I.values,visible:I.updateModalVisible,layout:"horizontal",labelCol:{span:4},wrapperCol:{span:20},autoFocusFirstInput:!0,modalProps:{destroyOnClose:!0,onCancel:I.onCancel},submitTimeout:2e3,onFinish:function(){var M=(0,y.Z)((0,u.Z)().mark(function g(A){return(0,u.Z)().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return A.id=I.values.id,A.action_ids=U,D.next=4,I.onSubmit(A);case 4:case"end":return D.stop()}},g)}));return function(g){return M.apply(this,arguments)}}(),children:[(0,E.jsx)(H.Z,{name:"name",label:"\u540D\u79F0"}),(0,E.jsx)(o.Z,{actionRef:B,rowKey:"id",search:!1,toolBarRender:!1,request:z.VW,columns:L,rowSelection:{selections:[s.Z.SELECTION_ALL,s.Z.SELECTION_INVERT],defaultSelectedRowKeys:U,onChange:V}})]})},$=e(94750),Q=function(){var x=(0,r.useState)(!1),B=(0,c.Z)(x,2),Y=B[0],F=B[1],U=(0,r.useState)(!1),K=(0,c.Z)(U,1),V=K[0],L=(0,r.useRef)(),M=(0,r.useState)(),g=(0,c.Z)(M,2),A=g[0],R=g[1],D=function(){var S=(0,y.Z)((0,u.Z)().mark(function O(h){var C,j;return(0,u.Z)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(C=m.ZP.loading("Configuring"),!h.id){t.next=7;break}return t.next=4,(0,v.ul)((0,Z.Z)({},h));case 4:j=t.sent,t.next=10;break;case 7:return t.next=9,(0,v._d)((0,Z.Z)({},h));case 9:j=t.sent;case 10:if(C(),j.code!==0){t.next=14;break}return m.ZP.success("\u6210\u529F"),t.abrupt("return",!0);case 14:return t.abrupt("return",!1);case 15:case"end":return t.stop()}},O)}));return function(h){return S.apply(this,arguments)}}(),G=function(){var S=(0,y.Z)((0,u.Z)().mark(function O(h){var C,j;return(0,u.Z)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(C=m.ZP.loading("\u6B63\u5728\u5220\u9664"),h){t.next=3;break}return t.abrupt("return",!0);case 3:return t.next=5,(0,v.l5)({id:h.id});case 5:if(j=t.sent,C(),j.code!==0){t.next=10;break}return m.ZP.success("\u5220\u9664\u6210\u529F"),t.abrupt("return",!0);case 10:return t.abrupt("return",!1);case 11:case"end":return t.stop()}},O)}));return function(h){return S.apply(this,arguments)}}(),N=[{title:"ID",dataIndex:"id",search:!1},{title:"\u540D\u79F0",dataIndex:"name",valueType:"text"},{title:"\u4FEE\u6539\u65F6\u95F4",sorter:!0,dataIndex:"updated_at",valueType:"dateTime",search:!1},{title:"\u521B\u5EFA\u65F6\u95F4",sorter:!0,dataIndex:"created_at",valueType:"dateTime",search:!1},{title:"\u64CD\u4F5C",dataIndex:"option",valueType:"option",width:180,render:function(O,h){return[(0,E.jsx)($.Z,{access:"/role/updateRole",children:(0,E.jsx)("a",{onClick:function(){F(!0),R(h)},children:"\u4FEE\u6539"},"update"+h.id)},"if_update_"+h.id),(0,E.jsx)($.Z,{access:"/role/removeRole",children:(0,E.jsx)(i.Z,{title:"\u786E\u5B9A\u5220\u9664\u5417\uFF1F",onConfirm:(0,y.Z)((0,u.Z)().mark(function C(){var j;return(0,u.Z)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G(h);case 2:j=t.sent,j&&L.current&&L.current.reload();case 4:case"end":return t.stop()}},C)})),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",children:(0,E.jsx)(f.Z,{type:"primary",size:"small",danger:!0,children:"\u5220\u9664"})},"delete"+h.id)},"if_remove_"+h.id)]}}];return(0,E.jsxs)(p.ZP,{children:[(0,E.jsx)(o.Z,{actionRef:L,rowKey:"id",search:{labelWidth:120},toolBarRender:function(){return[(0,E.jsx)($.Z,{access:"/role/addRole",children:(0,E.jsxs)(f.Z,{type:"primary",onClick:function(){F(!0),R(void 0)},children:[(0,E.jsx)(l.Z,{})," \u6DFB\u52A0"]},"primary")},"if_update_")]},request:v.Uy,columns:N}),(0,E.jsx)(J,{onSubmit:function(){var S=(0,y.Z)((0,u.Z)().mark(function O(h){var C;return(0,u.Z)().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,D(h);case 2:C=w.sent,C&&(F(!1),R(void 0),L.current&&L.current.reload());case 4:case"end":return w.stop()}},O)}));return function(O){return S.apply(this,arguments)}}(),onCancel:function(){F(!1),V||R(void 0)},updateModalVisible:Y,values:A||{}})]})},X=Q},88713:function(W,T,e){"use strict";e.d(T,{VW:function(){return u},Gx:function(){return b},KG:function(){return y},iR:function(){return v}});var n=e(90636),i=e(11849),a=e(3182),f=e(21704);function u(p,o){return Z.apply(this,arguments)}function Z(){return Z=(0,a.Z)((0,n.Z)().mark(function p(o,r){return(0,n.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,f.WY)("/api/role/actionList",(0,i.Z)({method:"GET",params:(0,i.Z)({},o)},r||{})));case 1:case"end":return s.stop()}},p)})),Z.apply(this,arguments)}function b(p,o){return m.apply(this,arguments)}function m(){return m=(0,a.Z)((0,n.Z)().mark(function p(o,r){return(0,n.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,f.WY)("/api/role/updateAction",(0,i.Z)({method:"POST",headers:{"Content-Type":"application/json"},data:o},r||{})));case 1:case"end":return s.stop()}},p)})),m.apply(this,arguments)}function y(p,o){return c.apply(this,arguments)}function c(){return c=(0,a.Z)((0,n.Z)().mark(function p(o,r){return(0,n.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,f.WY)("/api/role/addAction",(0,i.Z)({method:"POST",headers:{"Content-Type":"application/json"},data:o},r||{})));case 1:case"end":return s.stop()}},p)})),c.apply(this,arguments)}function v(p){return l.apply(this,arguments)}function l(){return l=(0,a.Z)((0,n.Z)().mark(function p(o){return(0,n.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,f.WY)("/api/role/removeAction",{method:"get",params:(0,i.Z)({},o)}));case 1:case"end":return d.stop()}},p)})),l.apply(this,arguments)}},60625:function(W,T,e){"use strict";e.d(T,{Uy:function(){return u},ul:function(){return b},_d:function(){return y},l5:function(){return v},LP:function(){return p}});var n=e(90636),i=e(11849),a=e(3182),f=e(21704);function u(r,d){return Z.apply(this,arguments)}function Z(){return Z=(0,a.Z)((0,n.Z)().mark(function r(d,s){return(0,n.Z)().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,f.WY)("/api/role/roleList",(0,i.Z)({method:"GET",params:(0,i.Z)({},d)},s||{})));case 1:case"end":return _.stop()}},r)})),Z.apply(this,arguments)}function b(r,d){return m.apply(this,arguments)}function m(){return m=(0,a.Z)((0,n.Z)().mark(function r(d,s){return(0,n.Z)().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,f.WY)("/api/role/updateRole",(0,i.Z)({method:"POST",headers:{"Content-Type":"application/json"},data:d},s||{})));case 1:case"end":return _.stop()}},r)})),m.apply(this,arguments)}function y(r,d){return c.apply(this,arguments)}function c(){return c=(0,a.Z)((0,n.Z)().mark(function r(d,s){return(0,n.Z)().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,f.WY)("/api/role/addRole",(0,i.Z)({method:"POST",headers:{"Content-Type":"application/json"},data:d},s||{})));case 1:case"end":return _.stop()}},r)})),c.apply(this,arguments)}function v(r){return l.apply(this,arguments)}function l(){return l=(0,a.Z)((0,n.Z)().mark(function r(d){return(0,n.Z)().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.abrupt("return",(0,f.WY)("/api/role/removeRole",{method:"get",params:(0,i.Z)({},d)}));case 1:case"end":return P.stop()}},r)})),l.apply(this,arguments)}function p(r){return o.apply(this,arguments)}function o(){return o=(0,a.Z)((0,n.Z)().mark(function r(d){return(0,n.Z)().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.abrupt("return",(0,f.WY)("/api/role/idName",{method:"get",params:(0,i.Z)({},d)}));case 1:case"end":return P.stop()}},r)})),o.apply(this,arguments)}}}]);
