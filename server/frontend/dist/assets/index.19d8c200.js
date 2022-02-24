import{R as U,j as B,s as a,r as N,a as d,b as G,v as K,N as A,S as O,c as f,u as Z,q as V,d as X,U as ee,W as te,e as ne,_ as oe,F as re,f as ie,g as se}from"./vendor.98f3bce5.js";const ae=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}};ae();const F=U.createContext({addressesRef:null}),t=B.exports.jsx,u=B.exports.jsxs,le=B.exports.Fragment,ce=a.div`
  position: fixed; z-index: 10; background: rgba(0,0,0,0.5); width: 100%;
  height: 100%; left: 0; top: 0;
`,ue=a.div`
  position: fixed; z-index: 11; min-width: 120px; min-height: 40px;
  max-width: 100%; max-height: 100%; background: white; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
`,de=({container:e,onClickOverlay:n,children:r})=>N.exports.createPortal(u(le,{children:[t(ce,{onClick:n}),t(ue,{children:r})]}),e!=null?e:document.body);let k=null;const I=e=>{!e||(N.exports.unmountComponentAtNode(e),e.remove(),k=null)},L=(e,n={})=>{I(k);const{closeOnClickOverlay:r,context:s}=n,o=k=document.createElement("div");o.className="tempApp",document.body.append(o);const i=()=>{r&&I(o)};return N.exports.render(t(F.Provider,{value:s,children:t(de,{container:o,onClickOverlay:i,children:e})}),o),()=>I(o)},h=a.div`
  display: flex;
  flex-direction: ${({virtical:e})=>e?"column":"row"};
  justify-content: center;
  align-items: center;
`,pe=a(h)`
  flex-direction: column;
  padding: 8px;
  > svg {
    width: 40px;
    height: 40px;
    margin: 16px;
  }
`,P=({children:e,className:n})=>u(pe,{className:n,children:[t("svg",{className:"spin",children:t("use",{xlinkHref:"#icon-loading"})}),t("p",{children:e})]}),he=e=>new Promise((n,r)=>{const s=new Image;s.onload=()=>{n(s)},s.onerror=o=>{r(o)},s.src=e}),ge=a(P)`
  width: 256px;
  height: 256px;
`,me=({content:e})=>{const[n,r]=d.exports.useState(null);e=encodeURIComponent(e);const[s,o]=d.exports.useState(!1),[i,l]=d.exports.useState(null);return d.exports.useEffect(()=>{if(!e)return;const c=`/api/v1/qrcodes?content=${e}`;o(!0),he(c).then(()=>r(t("img",{width:"256",height:"256",src:c})),p=>l(p)).finally(()=>o(!1))},[e]),s?t(ge,{children:"\u52A0\u8F7D\u4E2D"}):i?u("div",{children:["\u52A0\u8F7D\u4E8C\u7EF4\u7801\u51FA\u9519\uFF1A",JSON.stringify(i)]}):n},w=G.create({timeout:5e3}),xe=`ws://${window.location.hostname}:27149/ws`,j=new WebSocket(xe);class fe{constructor(n){this.client=n}send(n){this.client.send(JSON.stringify(n))}onMessage(n){this.client.onmessage=({data:r})=>{n(JSON.parse(r))}}}const Fe=new Promise((e,n)=>{j.onopen=()=>{e(new fe(j))},setTimeout(()=>{n(new Error("get ws connection timeout"))},1e4)}),T=()=>Fe;let m=localStorage.getItem("clientId");(m==null?void 0:m.length)!==36&&(m=K(),localStorage.setItem("clientId",m));const C=a.div`
  height: ${({x2:e,x3:n})=>e?16*2:n?16*3:16}px;
`,M=a.div`
  min-height: 100vh; display: flex; align-items: stretch; flex-direction: column;
  padding: 0 16px; margin: 0 auto;
  @media (min-width: 414px) {
    max-width: 600px; 
  }
`,W=a.h1`
  margin-top: 48px;
  margin-bottom: 32px;
  text-align: center;
`,q=a.textarea`
  width: 100%;
  min-height: 160px;
  line-height: 20px;
  &.draging {
    border-color: red;
  }
`,y=a.button`
  min-height: 40px;
  padding: 0 60px;
  border: 2px solid #666;
  background: #f5b70d;
  border-radius: 8px;
  cursor: pointer;
`,R=a.form`
  &> .row {
    margin: 16px 0;
  }
`,ye=a.span`
  margin-right: 8px;
`,ve=a.label`
  display: flex; padding: 4px 0; 
  justify-content: flex-start; align-items: center;
  min-height: 40px; white-space: nowrap;
`,be=a.h2`
  font-weight: bold; font-size: 24px;
  margin-bottom: 16px;
`,z=a.p`
  a {text-decoration: underline;}
`,J=({content:e,onClose:n})=>{var c,p;const[r,s]=d.exports.useState(localStorage.getItem("address")||""),o=d.exports.useContext(F),i=(c=o==null?void 0:o.addressesRef)!=null?c:null,l=g=>{s(g.target.value),localStorage.setItem("address",g.target.value)};return e=typeof e=="string"?e:e(r),u(we,{children:[t(be,{children:"\u4E0A\u4F20\u6210\u529F"}),i.current?u("div",{children:[u(z,{children:["\u8BF7 Windows \u7528\u6237\u5728\u9632\u706B\u5899\u5165\u7AD9\u89C4\u5219\u4E2D\u5F00\u901A 27149 \u7AEF\u53E3\uFF08",t("a",{href:"https://jingyan.baidu.com/article/09ea3ede7311dec0afde3977.html",target:"_blank",rel:"noreferrer",children:"\u6559\u7A0B"}),"\uFF09"]}),t(z,{children:u(ve,{children:[t(ye,{children:"\u8BF7\u9009\u62E9\u624B\u673A\u53EF\u4EE5\u8BBF\u95EE\u7684\u5C40\u57DF\u7F51IP"}),u("select",{value:r,onChange:l,children:[t("option",{value:"",disabled:!0,children:"- \u8BF7\u9009\u62E9 -"}),(p=i.current)==null?void 0:p.map(g=>t("option",{children:g},g))]})]})})]}):null,t(h,{children:e?t(me,{content:e}):null}),t(h,{children:e?t("a",{href:e,children:"\u8BF7 \u624B\u673A\u626B\u7801 \u6216 \u70B9\u51FB\u4E0B\u8F7D"}):null}),t(C,{}),t(h,{children:t(y,{onClick:n,children:"\u5173\u95ED"})})]})},Q=({context:e,content:n})=>{const r=L(t(J,{content:n,onClose:()=>r()}),{context:e})},E=({context:e,content:n})=>{const r=L(t(J,{content:n,onClose:()=>r()}),{context:e})},S=()=>L(t(P,{children:"\u4E0A\u4F20\u4E2D"})),we=a.div`
  padding: 16px;
`,_=(e,n)=>(T().then(r=>{r.send({clientId:m,type:n,url:e.data.url})}),e),Ce=e=>w.post("/api/v1/texts",{raw:e}).then(n=>_(n,"text")),H=e=>{const n=new FormData;return n.append("raw",e),w({method:"post",url:"/api/v1/files",data:n,headers:{"Content-Type":"multipart/form-data"}}).then(r=>_(r,"file"))},Ee=()=>{const e=d.exports.useContext(F),[n,r]=d.exports.useState("");return u(R,{className:"uploadForm",onSubmit:async o=>{o.preventDefault(),S();const{data:{url:i}}=await Ce(n);Q({context:e,content:l=>l&&`http://${l}:27149/static/downloads?type=text&url=http://${l+":27149"+encodeURIComponent(i)}`})},children:[t("div",{className:"row",children:t(q,{value:n,onChange:o=>r(o.target.value)})}),t(h,{className:"row",children:t(y,{type:"submit",children:"\u4E0A\u4F20"})})]})},Se=()=>{const e=d.exports.useContext(F),[n,r]=d.exports.useState("default");return t(R,{className:"uploadForm",children:t("div",{className:"row",children:u($e,{onDrop:async c=>{var v,b,x;c.preventDefault();const p=(x=(b=(v=c.dataTransfer)==null?void 0:v.items)==null?void 0:b[0])==null?void 0:x.getAsFile();if(!p)return;const g=p.type||"unknown";S();const{data:{url:$}}=await H(p);E({context:e,content:D=>D&&`http://${D}:27149/static/downloads?type=${g}&url=${encodeURIComponent(`http://${D}:27149${$}`)}`})},onDragOver:c=>{c.preventDefault(),r("dragging")},onDragLeave:c=>{r("default")},className:n,children:[t(De,{type:"file",value:"",onChange:async c=>{var v,b;const p=(b=(v=c.target)==null?void 0:v.files)==null?void 0:b[0];if(!p)return;const g=p.type||"unknown";S();const{data:{url:$}}=await H(p);E({context:e,content:x=>x&&`http://${x}:27149/static/downloads?type=${g}&url=${encodeURIComponent(`http://${x}:27149${$}`)}`})}}),t("p",{children:"\u70B9\u51FB\u6253\u5F00\u6587\u4EF6 \u6216 \u62D6\u62FD\u6587\u4EF6\u81F3\u6B64"})]})})})},$e=a.div`
  &.dragging {
    border-color: ${({theme:e})=>e.highlightColor};
    color: ${({theme:e})=>e.highlightColor};
  }
  min-height: 160px; border: 2px dashed ${({theme:e})=>e.borderColor}; 
  position: relative; overflow: hidden; display: flex; justify-content: center; align-items: center; border-radius: 8px;
`,De=a.input`
  position: absolute; right: 0; top: 0; width: 100%; height: 100%;
  opacity: 0; cursor: pointer;
`,Be=a.nav`
  text-align: center;
  > ul {
    display: flex; border-top: 1px solid ${({theme:e})=>e.borderColor}; 
    border-left: 1px solid ${({theme:e})=>e.borderColor};
    > li { flex-grow: 1; border-bottom: 1px solid #333;
      border-right: 1px solid ${({theme:e})=>e.borderColor};
      > a { display: block; padding: 8px 0; 
        &.selected{ background: ${({theme:e})=>e.highlightColor} }
      }
    }
  } 
`,Ne=t(Be,{children:u("ul",{children:[t("li",{children:t(A,{to:"/message",activeClassName:"selected",children:"\u4F20\u6D88\u606F"})}),t("li",{children:t(A,{to:"/file",activeClassName:"selected",children:"\u4F20\u6587\u4EF6"})}),t("li",{children:t(A,{to:"/screenshot",activeClassName:"selected",children:"\u4F20\u622A\u56FE"})})]})}),Ae=()=>{const e=d.exports.useContext(F),n=async o=>{if(!o)return;const i=o.type||"unknown";S();const{data:{url:l}}=await H(o);E({context:e,content:c=>c&&`http://${c}:27149/static/downloads?type=${i}&url=${encodeURIComponent(`http://${c}:27149${l}`)}`})},r=o=>{const{items:[i]}=o.clipboardData;n(i==null?void 0:i.getAsFile())};return d.exports.useEffect(()=>(window.addEventListener("paste",r),()=>{window.removeEventListener("paste",r)}),[]),t(R,{className:"uploadForm",children:t("div",{className:"row",children:u(ke,{children:[t(Ie,{type:"file",value:"",onChange:async o=>{var i,l;n((l=(i=o.target)==null?void 0:i.files)==null?void 0:l[0])},accept:"image/*;capture=camera"}),t("p",{children:"\u70B9\u51FB\u9009\u62E9\u56FE\u7247 \u6216 \u76F4\u63A5\u7C98\u8D34\u56FE\u7247"})]})})})},ke=a.div`
  &.dragging {
    border-color: ${({theme:e})=>e.highlightColor};
    color: ${({theme:e})=>e.highlightColor};
  }
  min-height: 160px; border: 2px dashed ${({theme:e})=>e.borderColor}; 
  position: relative; overflow: hidden; display: flex; justify-content: center; align-items: center; border-radius: 8px;
`,Ie=a.input`
  position: absolute; right: 0; top: 0; width: 100%; height: 100%;
  opacity: 0; cursor: pointer;
`;function Le(){return u(M,{children:[t(W,{children:"\u540C\u6B65\u4F20"}),Ne,u(O,{children:[t(f,{exact:!0,path:"/message",children:t(Ee,{})}),t(f,{exact:!0,path:"/file",children:t(Se,{})}),t(f,{exact:!0,path:"/screenshot",children:t(Ae,{})})]})]})}const Re=()=>{const e=Z();return V.parse(e.search)},Y=X({basename:"/static/"}),He=()=>{const e=Re(),n=Oe(e.type),[r,s]=d.exports.useState("");d.exports.useEffect(()=>{n==="text"&&w.get(e.url).then(({data:l})=>{s(l)})},[n]);let o=null;switch(n){case"text":o=u("div",{children:[t(q,{readOnly:!0,value:r}),t(C,{}),t(h,{virtical:!0,children:t(y,{children:"\u8BF7\u624B\u52A8\u590D\u5236\u4E0A\u9762\u6587\u672C"})})]});break;case"file":o=t(h,{virtical:!0,children:u("a",{href:e.url,children:[t("svg",{children:t("use",{xlinkHref:"#icon-file"})}),t(C,{}),t(h,{children:t(y,{children:"\u70B9\u51FB\u4E0B\u8F7D\u6587\u4EF6"})})]})});break;case"image":o=t(h,{children:u("a",{href:e.url,children:[t(Ue,{src:e.url}),t(h,{children:t(y,{children:"\u957F\u6309\u6216\u70B9\u51FB\uFF0C\u5373\u53EF\u4E0B\u8F7D\u56FE\u7247"})})]})});break}return u(M,{children:[t(W,{children:"\u540C\u6B65\u4F20"}),o,t(C,{x3:!0}),t(h,{children:t(y,{onClick:()=>{Y.push("/")},children:"\u6211\u4E5F\u8981\u4E0A\u4F20"})})]})},Ue=a.img`
  border: 2px solid ${({theme:e})=>e.borderColor};
  margin: 16px;
`;a.p`
  margin: 8px 0;
`;const Oe=e=>/^image\/.*$/.test(e)?"image":/^text(\/.*)?$/.test(e)?"text":"file",Pe=ee`
  0% {
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`,je=te`
  * { box-sizing: border-box; padding: 0; margin: 0; }
  *::before, *::after {box-sizing: border-box;}
  body {
    font-size: 16px;
    font-family: -apple-system, "Noto Sans", "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Noto Sans CJK SC", "Source Han Sans SC", "Source Han Sans CN", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
  }
  a {text-decoration: none; color: inherit;}
  img {max-width: 100%; max-height: 100%; }
  input, button {font: inherit;}
  ul, ol {list-style: none; }
  img{vertical-align: middle;}
  :focus{ outline: none; }

  // helpers
  .spin {
    animation: ${Pe} 2s linear infinite;
  }
`,Te={borderColor:"#333",highlightColor:"#f5b70d"},Me=()=>{const e=d.exports.useRef(null),n={addressesRef:e};return d.exports.useEffect(async()=>{const{data:{addresses:r}}=await w.get("/api/v1/addresses").catch(s=>Promise.reject(s));e.current=oe.uniq(r.concat("127.0.0.1"))},[]),d.exports.useEffect(()=>{T().then(r=>{r.onMessage(s=>{const{url:o,type:i}=s;if(s.clientId!==m){const l=c=>c&&`http://${c}:27149/static/downloads?type=${i}&url=${encodeURIComponent(`http://${c}:27149${o}`)}`;i==="text"?Q({context:n,content:l}):E({context:n,content:l})}})})},[]),u(re,{theme:Te,children:[t(je,{}),t(F.Provider,{value:n,children:t(ie,{history:Y,children:u(O,{children:[t(se,{exact:!0,from:"/",to:"/message"}),t(f,{exact:!0,path:"/downloads",children:t(He,{})}),t(f,{path:"/",children:t(Le,{})}),t(f,{path:"*",children:t("div",{children:"404"})})]})})})]})};ne.render(t(U.StrictMode,{children:t(Me,{})}),document.getElementById("root"));
