(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[261],{8498:function(x,c){"use strict";var e={ossUrl:"https://milu-story.oss-cn-hangzhou.aliyuncs.com/"};c.Z=e},94750:function(x,c,e){"use strict";var i=e(5632);c.Z=function(l){var m=(0,i.md)();return m.buttonHasAccess(l)?l.children:null}},12092:function(x,c,e){"use strict";e.r(c);var i=e(62350),l=e(24565),m=e(57663),E=e(71577),Z=e(12968),h=e(20352),f=e(90636),M=e(34792),y=e(48086),D=e(3182),T=e(13755),O=e(67265),a=e(77022),o=e(67294),p=e(94750),n=e(8498),t=e(85893),g=function(){var I=(0,o.useRef)(),R=function(){var P=(0,D.Z)((0,f.Z)().mark(function v(s){var _,u;return(0,f.Z)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(_=y.ZP.loading("\u6B63\u5728\u5220\u9664"),s){r.next=3;break}return r.abrupt("return",!0);case 3:return r.next=5,(0,T.Od)({id:s.id});case 5:if(u=r.sent,_(),u.code!==0){r.next=10;break}return y.ZP.success("\u5220\u9664\u6210\u529F"),r.abrupt("return",!0);case 10:return r.abrupt("return",!1);case 11:case"end":return r.stop()}},v)}));return function(s){return P.apply(this,arguments)}}(),C=[{title:"ID",dataIndex:"id",search:!1},{title:"\u7528\u6237\u4FE1\u606F",tooltip:"\u652F\u6301\u7528\u6237ID\u641C\u7D22",dataIndex:"user_id",valueType:"text",render:function(v,s){var _,u,d;return(0,t.jsxs)("div",{style:{display:"flex"},children:[(0,t.jsx)("div",{style:{paddingTop:"12px",marginRight:"12px"},children:(0,t.jsx)(h.Z,{width:"32px",src:n.Z.ossUrl+((_=s.user)===null||_===void 0?void 0:_.avatar)})}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{children:["ID\uFF1A",(u=s.user)===null||u===void 0?void 0:u.id]}),(0,t.jsxs)("p",{children:["\u6635\u79F0\uFF1A",(d=s.user)===null||d===void 0?void 0:d.nickname]})]})]})}},{title:"\u5C0F\u8BF4\u4FE1\u606F",tooltip:"\u652F\u6301\u5C0F\u8BF4ID\u641C\u7D22",dataIndex:"book_id",valueType:"text",render:function(v,s){var _,u,d;return(0,t.jsxs)("div",{style:{display:"flex"},children:[(0,t.jsx)("div",{style:{marginRight:"12px"},children:(0,t.jsx)(h.Z,{width:"48px",src:n.Z.ossUrl+((_=s.book)===null||_===void 0?void 0:_.novel_pic)})}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{children:["ID\uFF1A",(u=s.book)===null||u===void 0?void 0:u.id]}),(0,t.jsxs)("p",{children:["\u4E66\u540D\uFF1A",(d=s.book)===null||d===void 0?void 0:d.novel_name]})]})]})}},{title:"\u652F\u4ED8\u65B9\u5F0F",dataIndex:"way",valueType:"select",valueEnum:{10:{text:"\u6296\u97F3\u652F\u4ED8",status:"Success"},2:{text:"\u652F\u4ED8\u5B9D\u652F\u4ED8",status:"Default"},1:{text:"\u5FAE\u4FE1\u652F\u4ED8",status:"Processing"},0:{text:"\u672A\u77E5",status:"Error"}}},{title:"\u5145\u503C\u7C7B\u578B",dataIndex:"pattern",valueType:"select",valueEnum:{1:{text:"\u5145\u503C\u4E66\u5E01",status:"Success"},0:{text:"\u5145\u503C\u4F1A\u5458",status:"Processing"}}},{title:"\u652F\u4ED8\u72B6\u6001",dataIndex:"status",valueType:"select",valueEnum:{1:{text:"\u6210\u529F",status:"Success"},0:{text:"\u5F85\u652F\u4ED8",status:"Processing"}}},{title:"\u5145\u503C\u91D1\u989D",dataIndex:"pay",valueType:"text",search:!1,render:function(v){return(v/100).toFixed(2)}},{title:"\u4FEE\u6539\u65F6\u95F4",sorter:!0,dataIndex:"updated_at",valueType:"dateTime",search:!1},{title:"\u521B\u5EFA\u65F6\u95F4",sorter:!0,dataIndex:"created_at",valueType:"dateTime",search:!1},{title:"\u64CD\u4F5C",dataIndex:"option",valueType:"option",width:100,render:function(v,s){return[(0,t.jsx)(p.Z,{access:"/pay/remove",children:(0,t.jsx)(l.Z,{title:"\u786E\u5B9A\u5220\u9664\u5417\uFF1F",onConfirm:(0,D.Z)((0,f.Z)().mark(function _(){var u;return(0,f.Z)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,R(s);case 2:u=r.sent,u&&I.current&&I.current.reload();case 4:case"end":return r.stop()}},_)})),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",children:(0,t.jsx)(E.Z,{type:"primary",size:"small",danger:!0,children:"\u5220\u9664"})})},"if_delete_"+s.id)]}}];return(0,t.jsx)(O.ZP,{children:(0,t.jsx)(a.Z,{actionRef:I,rowKey:"id",search:{labelWidth:120},toolBarRender:function(){return[]},request:T.pb,columns:C})})};c.default=g},13755:function(x,c,e){"use strict";e.d(c,{pb:function(){return Z},Od:function(){return f},q2:function(){return y},c0:function(){return T}});var i=e(90636),l=e(11849),m=e(3182),E=e(21704);function Z(a,o){return h.apply(this,arguments)}function h(){return h=(0,m.Z)((0,i.Z)().mark(function a(o,p){return(0,i.Z)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,E.WY)("/api/pay/list",(0,l.Z)({method:"GET",params:(0,l.Z)({},o)},p||{})));case 1:case"end":return t.stop()}},a)})),h.apply(this,arguments)}function f(a){return M.apply(this,arguments)}function M(){return M=(0,m.Z)((0,i.Z)().mark(function a(o){return(0,i.Z)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,E.WY)("/api/pay/remove",{method:"get",params:(0,l.Z)({},o)}));case 1:case"end":return n.stop()}},a)})),M.apply(this,arguments)}function y(a,o){return D.apply(this,arguments)}function D(){return D=(0,m.Z)((0,i.Z)().mark(function a(o,p){return(0,i.Z)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,E.WY)("/api/pay/consumeList",(0,l.Z)({method:"GET",params:(0,l.Z)({},o)},p||{})));case 1:case"end":return t.stop()}},a)})),D.apply(this,arguments)}function T(a){return O.apply(this,arguments)}function O(){return O=(0,m.Z)((0,i.Z)().mark(function a(o){return(0,i.Z)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,E.WY)("/api/pay/removeConsume",{method:"get",params:(0,l.Z)({},o)}));case 1:case"end":return n.stop()}},a)})),O.apply(this,arguments)}}}]);
