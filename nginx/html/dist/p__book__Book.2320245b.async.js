(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[847],{31199:function(L,F,e){"use strict";var u=e(22122),l=e(28991),f=e(81253),c=e(67294),j=e(81160),T=["fieldProps","min","proFieldProps","max"],U=function(s,g){var M=s.fieldProps,P=s.min,v=s.proFieldProps,D=s.max,Z=(0,f.Z)(s,T);return c.createElement(j.Z,(0,u.Z)({mode:"edit",valueType:"digit",fieldProps:(0,l.Z)({min:P,max:D},M),ref:g,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:v},Z))};F.Z=c.forwardRef(U)},64317:function(L,F,e){"use strict";var u=e(22122),l=e(28991),f=e(81253),c=e(22270),j=e(67294),T=e(66758),U=e(81160),x=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],s=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],g=j.forwardRef(function(Z,K){var V=Z.fieldProps,w=Z.children,re=Z.params,R=Z.proFieldProps,z=Z.mode,Y=Z.valueEnum,H=Z.request,r=Z.showSearch,te=Z.options,Q=(0,f.Z)(Z,x),J=(0,j.useContext)(T.Z);return j.createElement(U.Z,(0,u.Z)({mode:"edit",valueEnum:(0,c.h)(Y),request:H,params:re,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,l.Z)({options:te,mode:z,showSearch:r,getPopupContainer:J.getPopupContainer},V),ref:K,proFieldProps:R},Q),w)}),M=j.forwardRef(function(Z,K){var V=Z.fieldProps,w=Z.children,re=Z.params,R=Z.proFieldProps,z=Z.mode,Y=Z.valueEnum,H=Z.request,r=Z.options,te=(0,f.Z)(Z,s),Q=(0,l.Z)({options:r,mode:z||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},V),J=(0,j.useContext)(T.Z);return j.createElement(U.Z,(0,u.Z)({mode:"edit",valueEnum:(0,c.h)(Y),request:H,params:re,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,l.Z)({getPopupContainer:J.getPopupContainer},Q),ref:K,proFieldProps:R},te),w)}),P=g,v=M,D=P;D.SearchSelect=v,D.displayName="ProFormComponent",F.Z=D},90672:function(L,F,e){"use strict";var u=e(22122),l=e(81253),f=e(67294),c=e(81160),j=["fieldProps","proFieldProps"],T=function(x,s){var g=x.fieldProps,M=x.proFieldProps,P=(0,l.Z)(x,j);return f.createElement(c.Z,(0,u.Z)({ref:s,mode:"edit",valueType:"textarea",fieldProps:g,proFieldProps:M},P))};F.Z=f.forwardRef(T)},98921:function(L){L.exports={operate:"operate___2pEBk"}},85073:function(L){L.exports={bookDetail:"bookDetail___3Eca0",bookDetailContent:"bookDetailContent___2-YwQ",bookDetailContentDesc:"bookDetailContentDesc___38meA",left:"left___2OQDa"}},94750:function(L,F,e){"use strict";var u=e(5632);F.Z=function(l){var f=(0,u.md)();return f.buttonHasAccess(l)?l.children:null}},62339:function(L,F,e){"use strict";e.r(F),e.d(F,{default:function(){return t}});var u=e(62350),l=e(24565),f=e(57663),c=e(71577),j=e(71153),T=e(60331),U=e(12968),x=e(20352),s=e(90636),g=e(11849),M=e(34792),P=e(48086),v=e(3182),D=e(2824),Z=e(67966),K=e(67265),V=e(77022),w=e(67294),re=e(37476),R=e(64317),z=e(31199),Y=e(90672),H=e(69363),r=e(85893),te=function(d){var O=(0,w.useState)([]),I=(0,D.Z)(O,2),ee=I[0],_=I[1],W=(0,w.useState)([]),y=(0,D.Z)(W,2),G=y[0],k=y[1],S=[];for(var B in d.values.cate)S.push(d.values.cate[B].id*1);d.values.cate_id=S;var de=[];for(var ce in d.values.tag)de.push(d.values.tag[ce].id*1);return d.values.tag_id=de,(0,w.useEffect)(function(){(0,v.Z)((0,s.Z)().mark(function N(){var A,ie,pe;return(0,s.Z)().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,(0,H.b)({});case 2:return A=b.sent,A.code===0&&(ie=A.data.map(function(h){return{label:h.title,value:h.id}}),_(ie)),b.next=6,(0,H.A)({});case 6:A=b.sent,A.code===0&&(pe=A.data.map(function(h){return{label:h.title,value:h.id}}),k(pe));case 8:case"end":return b.stop()}},N)}))()},[]),(0,r.jsxs)(re.Y,{title:"\u7F16\u8F91",width:600+"px",initialValues:d.values,visible:d.updateModalVisible,layout:"horizontal",labelCol:{span:4},wrapperCol:{span:20},autoFocusFirstInput:!0,modalProps:{destroyOnClose:!0,onCancel:d.onCancel},submitTimeout:2e3,onFinish:function(){var N=(0,v.Z)((0,s.Z)().mark(function A(ie){return(0,s.Z)().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:return ie.id=d.values.id,oe.next=3,d.onSubmit(ie);case 3:case"end":return oe.stop()}},A)}));return function(A){return N.apply(this,arguments)}}(),children:[(0,r.jsx)(R.Z,{mode:"multiple",name:"cate_id",label:"\u7C7B\u76EE",options:ee}),(0,r.jsx)(R.Z,{mode:"multiple",name:"tag_id",label:"\u6807\u7B7E",options:G}),(0,r.jsx)(z.Z,{label:"\u5343\u5B57\u4EF7\u683C",name:"thousand_words_price",fieldProps:{addonAfter:"\u4E66\u5E01"}}),(0,r.jsx)(z.Z,{label:"\u514D\u8D39\u7AE0\u8282",name:"free_num",fieldProps:{addonAfter:"\u7AE0"}}),(0,r.jsx)(Y.Z,{name:"good_detail",label:"\u7CBE\u9009\u5185\u5BB9"})]})},Q=e(71194),J=e(50146),le=e(71975),me=e(85073),X=e.n(me),q=e(94750),ne=e(21704);function he(d,O){return ae.apply(this,arguments)}function ae(){return ae=(0,v.Z)((0,s.Z)().mark(function d(O,I){return(0,s.Z)().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,ne.WY)("/api/book/generateLink",(0,g.Z)({method:"GET",params:(0,g.Z)({},O)},I||{})));case 1:case"end":return _.stop()}},d)})),ae.apply(this,arguments)}function fe(d,O){return se.apply(this,arguments)}function se(){return se=(0,v.Z)((0,s.Z)().mark(function d(O,I){return(0,s.Z)().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,ne.WY)("/api/book/generatePaperWork",(0,g.Z)({method:"GET",params:(0,g.Z)({},O)},I||{})));case 1:case"end":return _.stop()}},d)})),se.apply(this,arguments)}function ve(d,O){return ue.apply(this,arguments)}function ue(){return ue=(0,v.Z)((0,s.Z)().mark(function d(O,I){return(0,s.Z)().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,ne.WY)("/api/book/chapter",(0,g.Z)({method:"GET",params:(0,g.Z)({},O)},I||{})));case 1:case"end":return _.stop()}},d)})),ue.apply(this,arguments)}var n=function(d){var O=(0,w.useRef)(),I=function(W){navigator.clipboard.writeText(W).then((0,v.Z)((0,s.Z)().mark(function y(){return(0,s.Z)().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,P.ZP.success("\u590D\u5236\u6210\u529F");case 2:case"end":return k.stop()}},y)}))).catch(function(y){console.error("Failed to copy text: ",y)})},ee=[{title:"ID",dataIndex:"id",search:!1},{title:"\u7AE0\u8282\u540D\u79F0",dataIndex:"title",search:!1},{title:"\u5B57\u6570",dataIndex:"number_of_words",valueType:"text"},{title:"\u6240\u9700\u4E66\u5E01\u6570",dataIndex:"number_of_words",valueType:"text",render:function(W,y){return Math.round(W/1e3*d.values.thousand_words_price)}},{title:"\u521B\u5EFA\u65F6\u95F4",sorter:!0,dataIndex:"updated_at",valueType:"dateTime",search:!1},{title:"\u64CD\u4F5C",dataIndex:"option",valueType:"option",width:240,render:function(W,y){return[(0,r.jsx)(q.Z,{access:"/book/generateLink",children:(0,r.jsx)("a",{onClick:(0,v.Z)((0,s.Z)().mark(function G(){var k;return(0,s.Z)().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,he({book_id:y.book_id,index:y.index});case 2:k=B.sent,k.code==0&&J.Z.success({content:k.data});case 4:case"end":return B.stop()}},G)})),children:"\u751F\u6210\u63A8\u5E7F\u94FE\u63A5"})},"generateLink_"+y.id),(0,r.jsx)(q.Z,{access:"/book/generatePaperWork",children:(0,r.jsx)("a",{onClick:(0,v.Z)((0,s.Z)().mark(function G(){var k;return(0,s.Z)().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,fe({book_id:y.book_id,index:y.index});case 2:k=B.sent,k.code==0&&J.Z.success({content:(0,r.jsx)(x.Z,{preview:!1,src:k.data})});case 4:case"end":return B.stop()}},G)})),children:"\u751F\u6210\u63A8\u5E7F\u4E8C\u7EF4\u7801"})},"generatePaperWork_"+y.id)]}}];return(0,r.jsxs)(le.a,{title:"\u7AE0\u8282\u8BE6\u60C5",visible:d.visible,resize:{maxWidth:window.innerWidth*.85,minWidth:900},width:window.innerWidth*.55,autoFocusFirstInput:!0,drawerProps:{destroyOnClose:!0,onClose:d.onCancel},submitTimeout:2e3,submitter:{render:function(W,y){return[(0,r.jsx)(c.Z,{onClick:d.onCancel,children:"\u5173\u95ED"},"extra-reset")]}},children:[(0,r.jsxs)("div",{className:X().bookDetail,children:[(0,r.jsxs)("div",{className:X().left,children:[(0,r.jsx)("div",{children:(0,r.jsx)(x.Z,{width:"100px",src:d.values.novel_pic})}),(0,r.jsxs)("div",{className:X().bookDetailContent,children:[(0,r.jsx)("h3",{style:{fontWeight:"bolder"},children:d.values.novel_name}),(0,r.jsxs)("p",{children:[(0,r.jsx)("span",{children:d.values.number_of_words}),"\u5B57\uFF0C\u5171 ",(0,r.jsx)("span",{children:d.values.total_chapter_num}),"\u7AE0"]}),(0,r.jsxs)("p",{children:["\u770B\u5B8C\u6574\u672C\u4E66\u5E01\uFF1A",(0,r.jsxs)("span",{children:[Math.round(d.values.number_of_words/1e3*d.values.thousand_words_price)||0," \u3010",d.values.thousand_words_price,"\u4E66\u5E01/\u5343\u5B57\u3011"]})]}),(0,r.jsxs)("p",{className:X().bookDetailContentDesc,children:["\u7B80\u4ECB\uFF1A",d.values.desc]})]})]}),(0,r.jsx)("div",{children:(0,r.jsx)(c.Z,{onClick:function(){I(d.values.id)},type:"primary",children:"\u590D\u5236\u4E66\u7C4DID"})})]}),(0,r.jsx)("div",{style:{marginTop:"24px"},children:(0,r.jsx)(V.Z,{cardBordered:!0,actionRef:O,rowKey:"id",search:!1,headerTitle:"\u7AE0\u8282\u8BE6\u60C5",options:!1,toolBarRender:function(){return[]},request:function(W,y,G){return W.book_id=d.values.id,ve(W)},columns:ee})})]})},a=e(98921),m=e.n(a),p=function(){var O=(0,w.useState)(!1),I=(0,D.Z)(O,2),ee=I[0],_=I[1],W=(0,w.useState)(!1),y=(0,D.Z)(W,2),G=y[0],k=y[1],S=(0,w.useRef)(),B=(0,w.useState)(),de=(0,D.Z)(B,2),ce=de[0],N=de[1],A=function(){var b=(0,v.Z)((0,s.Z)().mark(function h(o){var E,C;return(0,s.Z)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return E=P.ZP.loading("Configuring"),i.next=3,(0,Z.h_)((0,g.Z)({},o));case 3:if(C=i.sent,E(),C.code!==0){i.next=8;break}return P.ZP.success("\u66F4\u65B0\u6210\u529F"),i.abrupt("return",!0);case 8:return i.abrupt("return",!1);case 9:case"end":return i.stop()}},h)}));return function(o){return b.apply(this,arguments)}}(),ie=function(){var b=(0,v.Z)((0,s.Z)().mark(function h(o){var E,C;return(0,s.Z)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(E=P.ZP.loading("\u6B63\u5728\u5220\u9664"),o){i.next=3;break}return i.abrupt("return",!0);case 3:return i.next=5,(0,Z.fy)({id:o.id});case 5:if(C=i.sent,E(),C.code!==0){i.next=10;break}return P.ZP.success("\u5220\u9664\u6210\u529F"),i.abrupt("return",!0);case 10:return i.abrupt("return",!1);case 11:case"end":return i.stop()}},h)}));return function(o){return b.apply(this,arguments)}}(),pe=function(){var b=(0,v.Z)((0,s.Z)().mark(function h(o){var E,C;return(0,s.Z)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(E=P.ZP.loading("\u6B63\u5728\u8FDB\u884C"),o){i.next=3;break}return i.abrupt("return",!0);case 3:return i.next=5,(0,Z.VS)({id:o.id,online:o.online?0:1});case 5:if(C=i.sent,E(),C.code!==0){i.next=10;break}return P.ZP.success("\u64CD\u4F5C\u6210\u529F"),i.abrupt("return",!0);case 10:return i.abrupt("return",!1);case 11:case"end":return i.stop()}},h)}));return function(o){return b.apply(this,arguments)}}(),oe=[{title:"ID",dataIndex:"id",search:!1},{title:"\u4E66\u540D",dataIndex:"novel_name",valueType:"text"},{title:"\u5C01\u9762",dataIndex:"novel_pic",valueType:"text",width:100,search:!1,render:function(h){return(0,r.jsx)(x.Z,{src:h,width:80})}},{title:"\u8BE6\u60C5",dataIndex:"book_num",valueType:"text",width:180,search:!1,render:function(h,o){return(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",lineHeight:"24px"},children:[(0,r.jsxs)("span",{children:["\u4E66\u53F7\uFF1A",o.book_num]}),(0,r.jsxs)("span",{children:["\u4F5C\u8005\uFF1A",o.author]}),(0,r.jsxs)("span",{children:["\u603B\u5B57\u6570\uFF1A",o.number_of_words]}),(0,r.jsxs)("span",{children:["\u5916\u90E8ID\uFF1A",o.novel_id]})]},"book_num"+h)}},{title:"\u7C7B\u76EE",dataIndex:"cate",valueType:"text",width:100,search:!1,render:function(h,o){return h.length===0?"-":(0,r.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:h.map(function(E,C){return(0,r.jsx)("div",{children:(0,r.jsx)(T.Z,{style:{margin:"2px 0"},color:"volcano",children:E.title})},"cate"+C)})})}},{title:"\u6807\u7B7E",dataIndex:"tag",valueType:"text",width:100,search:!1,render:function(h,o){return h.length===0?"-":(0,r.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:h.map(function(E,C){return(0,r.jsx)("div",{children:(0,r.jsx)(T.Z,{style:{margin:"2px 0"},color:"volcano",children:E.title})},"cate"+C)})})}},{title:"\u7C7B\u578B",dataIndex:"is_end",valueType:"select",search:!1,valueEnum:{all:{text:"\u5168\u90E8"},0:{text:"\u8FDE\u8F7D",status:"Processing"},1:{text:"\u5DF2\u5B8C\u7ED3",status:"Success"}}},{title:"\u7AE0\u8282",dataIndex:"free_num",valueType:"text",search:!1,render:function(h,o){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("p",{children:["\u514D\u8D39\uFF1A",o.free_num]}),(0,r.jsxs)("p",{children:["\u603B\u6570\uFF1A",o.total_chapter_num]})]},"free_num"+h)}},{title:"\u5206\u7C7B",dataIndex:"classify_name",valueType:"text",search:!1},{title:"\u7B80\u4ECB",dataIndex:"desc",valueType:"text",search:!1,ellipsis:!0,copyable:!0},{title:"\u7CBE\u9009\u5185\u5BB9",dataIndex:"good_detail",valueType:"text",search:!1,ellipsis:!0,copyable:!0},{title:"\u72B6\u6001",dataIndex:"online",valueType:"select",valueEnum:{all:{text:"\u5168\u90E8"},0:{text:"\u5F85\u4E0A\u67B6",status:"Error"},1:{text:"\u5DF2\u4E0A\u67B6",status:"Success"}}},{title:"\u4FEE\u6539\u65F6\u95F4",sorter:!0,dataIndex:"updated_at",valueType:"dateTime",search:!1},{title:"\u521B\u5EFA\u65F6\u95F4",sorter:!0,dataIndex:"created_at",valueType:"dateTime",search:!1},{title:"\u64CD\u4F5C",dataIndex:"option",valueType:"option",width:132,className:m().operate,render:function(h,o){return[(0,r.jsx)(q.Z,{access:"/book/detail",children:(0,r.jsx)("a",{onClick:function(){k(!0),N(o)},children:"\u8BE6\u60C5"},"book_detail_"+o.id)},"key_book_detail_"+o.id),(0,r.jsx)(q.Z,{access:"/book/updateBookCate",children:(0,r.jsx)("a",{onClick:function(){_(!0),N(o)},children:"\u4FEE\u6539"},"update"+o.id)},"key_update_"+o.id),(0,r.jsx)(q.Z,{access:"/book/online",children:(0,r.jsx)(l.Z,{title:"\u786E\u5B9A"+(o.online==1?"\u4E0B\u67B6":"\u4E0A\u67B6")+"\u5417\uFF1F",onConfirm:(0,v.Z)((0,s.Z)().mark(function E(){var C;return(0,s.Z)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,pe(o);case 2:C=i.sent,C&&S.current&&S.current.reload();case 4:case"end":return i.stop()}},E)})),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",children:(0,r.jsx)(c.Z,{type:"primary",size:"small",children:o.online==1?"\u4E0B\u67B6":"\u4E0A\u67B6"},"online-btn-"+o.id)},"online"+o.id)},"if_online_"+o.id),(0,r.jsx)(q.Z,{access:"/book/removeBook",children:(0,r.jsx)(l.Z,{title:"\u786E\u5B9A\u5220\u9664\u5417\uFF1F",onConfirm:(0,v.Z)((0,s.Z)().mark(function E(){var C;return(0,s.Z)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,ie(o);case 2:C=i.sent,C&&S.current&&S.current.reload();case 4:case"end":return i.stop()}},E)})),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",children:(0,r.jsx)(c.Z,{type:"primary",size:"small",danger:!0,children:"\u5220\u9664"},"delete-btn-"+o.id)},"delete"+o.id)},"key_"+o.id)]}}];return(0,r.jsxs)(K.ZP,{children:[(0,r.jsx)(V.Z,{actionRef:S,rowKey:"id",search:{labelWidth:120},toolBarRender:function(){return[]},request:Z.ZN,columns:oe}),(0,r.jsx)(te,{onSubmit:function(){var b=(0,v.Z)((0,s.Z)().mark(function h(o){var E;return(0,s.Z)().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.next=2,A(o);case 2:E=$.sent,E&&(N(void 0),S.current&&S.current.reload(),_(!1));case 4:case"end":return $.stop()}},h)}));return function(h){return b.apply(this,arguments)}}(),onCancel:function(){N(void 0),_(!1)},updateModalVisible:ee,values:ce||{}}),(0,r.jsx)(n,{visible:G,values:ce||{},onCancel:function(){N(void 0),k(!1)}})]})},t=p},67966:function(L,F,e){"use strict";e.d(F,{ZN:function(){return j},h_:function(){return s},VS:function(){return M},fy:function(){return Z},nM:function(){return V},vj:function(){return re},kV:function(){return z},gj:function(){return H},C9:function(){return te},d$:function(){return J},PN:function(){return me},oG:function(){return q},Lp:function(){return he},_U:function(){return fe},tc:function(){return ve}});var u=e(90636),l=e(11849),f=e(3182),c=e(21704);function j(n,a){return T.apply(this,arguments)}function T(){return T=(0,f.Z)((0,u.Z)().mark(function n(a,m){return(0,u.Z)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.WY)("/api/book/bookList",(0,l.Z)({method:"GET",params:(0,l.Z)({},a)},m||{})));case 1:case"end":return t.stop()}},n)})),T.apply(this,arguments)}function U(n,a){return x.apply(this,arguments)}function x(){return x=_asyncToGenerator(_regeneratorRuntime().mark(function n(a,m){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/api/book/updateBook",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:a},m||{})));case 1:case"end":return t.stop()}},n)})),x.apply(this,arguments)}function s(n,a){return g.apply(this,arguments)}function g(){return g=(0,f.Z)((0,u.Z)().mark(function n(a,m){return(0,u.Z)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.WY)("/api/book/updateBookCate",(0,l.Z)({method:"POST",headers:{"Content-Type":"application/json"},data:a},m||{})));case 1:case"end":return t.stop()}},n)})),g.apply(this,arguments)}function M(n,a){return P.apply(this,arguments)}function P(){return P=(0,f.Z)((0,u.Z)().mark(function n(a,m){return(0,u.Z)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.WY)("/api/book/onlineBook",(0,l.Z)({method:"POST",headers:{"Content-Type":"application/json"},data:a},m||{})));case 1:case"end":return t.stop()}},n)})),P.apply(this,arguments)}function v(n,a){return D.apply(this,arguments)}function D(){return D=_asyncToGenerator(_regeneratorRuntime().mark(function n(a,m){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/api/book/addBook",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:a},m||{})));case 1:case"end":return t.stop()}},n)})),D.apply(this,arguments)}function Z(n){return K.apply(this,arguments)}function K(){return K=(0,f.Z)((0,u.Z)().mark(function n(a){return(0,u.Z)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",(0,c.WY)("/api/book/removeBook",{method:"get",params:(0,l.Z)({},a)}));case 1:case"end":return p.stop()}},n)})),K.apply(this,arguments)}function V(n,a){return w.apply(this,arguments)}function w(){return w=(0,f.Z)((0,u.Z)().mark(function n(a,m){return(0,u.Z)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.WY)("/api/book/cateList",(0,l.Z)({method:"GET",params:(0,l.Z)({},a)},m||{})));case 1:case"end":return t.stop()}},n)})),w.apply(this,arguments)}function re(n,a){return R.apply(this,arguments)}function R(){return R=(0,f.Z)((0,u.Z)().mark(function n(a,m){return(0,u.Z)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.WY)("/api/book/updateCate",(0,l.Z)({method:"POST",headers:{"Content-Type":"application/json"},data:a},m||{})));case 1:case"end":return t.stop()}},n)})),R.apply(this,arguments)}function z(n,a){return Y.apply(this,arguments)}function Y(){return Y=(0,f.Z)((0,u.Z)().mark(function n(a,m){return(0,u.Z)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.WY)("/api/book/addCate",(0,l.Z)({method:"POST",headers:{"Content-Type":"application/json"},data:a},m||{})));case 1:case"end":return t.stop()}},n)})),Y.apply(this,arguments)}function H(n){return r.apply(this,arguments)}function r(){return r=(0,f.Z)((0,u.Z)().mark(function n(a){return(0,u.Z)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",(0,c.WY)("/api/book/removeCate",{method:"get",params:(0,l.Z)({},a)}));case 1:case"end":return p.stop()}},n)})),r.apply(this,arguments)}function te(n,a){return Q.apply(this,arguments)}function Q(){return Q=(0,f.Z)((0,u.Z)().mark(function n(a,m){return(0,u.Z)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.WY)("/api/book/commentList",(0,l.Z)({method:"GET",params:(0,l.Z)({},a)},m||{})));case 1:case"end":return t.stop()}},n)})),Q.apply(this,arguments)}function J(n,a){return le.apply(this,arguments)}function le(){return le=(0,f.Z)((0,u.Z)().mark(function n(a,m){return(0,u.Z)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.WY)("/api/book/examineComment",(0,l.Z)({method:"POST",headers:{"Content-Type":"application/json"},data:a},m||{})));case 1:case"end":return t.stop()}},n)})),le.apply(this,arguments)}function me(n){return X.apply(this,arguments)}function X(){return X=(0,f.Z)((0,u.Z)().mark(function n(a){return(0,u.Z)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",(0,c.WY)("/api/book/removeComment",{method:"get",params:(0,l.Z)({},a)}));case 1:case"end":return p.stop()}},n)})),X.apply(this,arguments)}function q(n,a){return ne.apply(this,arguments)}function ne(){return ne=(0,f.Z)((0,u.Z)().mark(function n(a,m){return(0,u.Z)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.WY)("/api/book/tagList",(0,l.Z)({method:"GET",params:(0,l.Z)({},a)},m||{})));case 1:case"end":return t.stop()}},n)})),ne.apply(this,arguments)}function he(n,a){return ae.apply(this,arguments)}function ae(){return ae=(0,f.Z)((0,u.Z)().mark(function n(a,m){return(0,u.Z)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.WY)("/api/book/updateTag",(0,l.Z)({method:"POST",headers:{"Content-Type":"application/json"},data:a},m||{})));case 1:case"end":return t.stop()}},n)})),ae.apply(this,arguments)}function fe(n,a){return se.apply(this,arguments)}function se(){return se=(0,f.Z)((0,u.Z)().mark(function n(a,m){return(0,u.Z)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.WY)("/api/book/addTag",(0,l.Z)({method:"POST",headers:{"Content-Type":"application/json"},data:a},m||{})));case 1:case"end":return t.stop()}},n)})),se.apply(this,arguments)}function ve(n){return ue.apply(this,arguments)}function ue(){return ue=(0,f.Z)((0,u.Z)().mark(function n(a){return(0,u.Z)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",(0,c.WY)("/api/book/removeTag",{method:"get",params:(0,l.Z)({},a)}));case 1:case"end":return p.stop()}},n)})),ue.apply(this,arguments)}},69363:function(L,F,e){"use strict";e.d(F,{b:function(){return j},A:function(){return U}});var u=e(90636),l=e(11849),f=e(3182),c=e(21704);function j(s,g){return T.apply(this,arguments)}function T(){return T=(0,f.Z)((0,u.Z)().mark(function s(g,M){return(0,u.Z)().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",(0,c.WY)("/api/book/cateIdName",(0,l.Z)({method:"GET",params:(0,l.Z)({},g)},M||{})));case 1:case"end":return v.stop()}},s)})),T.apply(this,arguments)}function U(s,g){return x.apply(this,arguments)}function x(){return x=(0,f.Z)((0,u.Z)().mark(function s(g,M){return(0,u.Z)().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",(0,c.WY)("/api/book/tagIdName",(0,l.Z)({method:"GET",params:(0,l.Z)({},g)},M||{})));case 1:case"end":return v.stop()}},s)})),x.apply(this,arguments)}}}]);
