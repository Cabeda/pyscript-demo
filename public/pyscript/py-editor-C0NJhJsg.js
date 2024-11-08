import{T as e,X as t,d as r,a as n,r as o,o as s,H as i,s as a}from"./core-B41yp4Hb.js";import{notify as c}from"./error-BWLhIfGl.js";let l=0;const d=e=>`${e}-editor-${l++}`,u=new Map,p=new Map,f={worker:{codeBeforeRun:()=>a,onReady:({runAsync:e,io:t},{sync:r})=>{t.stdout=t.buffered(r.write),t.stderr=t.buffered(r.writeErr),r.revoke(),r.runAsync=e}}},m=(e,t)=>{if("boolean"==typeof t)throw`Invalid source: ${e}`;return t};async function g({currentTarget:n}){const{env:a,pySrc:l,outDiv:d}=this,p=!!n;if(p&&(n.disabled=!0,d.innerHTML=""),!u.has(a)){const l=URL.createObjectURL(new Blob([""])),d={type:this.interpreter,serviceWorker:this.serviceWorker},{config:g}=this;if(g)try{if(d.configURL=o(g),g.endsWith(".toml")){const[{parse:e},t]=await Promise.all([import("./toml-CvAfdf9_.js"),fetch(g).then((e=>e.ok&&e.text()))]);d.config=e(m(g,t))}else if(g.endsWith(".json")){const e=await fetch(g).then((e=>e.ok&&e.json()));d.config=m(g,e)}else d.configURL=o("./config.txt"),d.config=JSON.parse(g);d.version=s(d.config)}catch(e){return void c(e)}else d.config={};const v=t.call(new i(null,f),l,d);if(p)for(const t of e.keys()){const e=n.closest(`.${t}-editor-box`),o=e?.parentNode?.previousElementSibling;if(o){r(o,{xworker:{value:v}});break}}const{sync:h}=v,{promise:b,resolve:y}=Promise.withResolvers();u.set(a,b),h.revoke=()=>{URL.revokeObjectURL(l),y(v)}}return u.get(a).then((e=>{e.onerror=({error:e})=>{p&&d.insertAdjacentHTML("beforeend",`<span style='color:red'>${e.message||e}</span>\n`),console.error(e)};const t=()=>{p&&(n.disabled=!1)},{sync:r}=e;r.write=e=>{p?d.innerText+=`${e}\n`:console.log(e)},r.writeErr=e=>{p?d.insertAdjacentHTML("beforeend",`<span style='color:red'>${e}</span>\n`):(c(e),console.error(e))},r.runAsync(l).then(t,t)}))}const v=(e,t)=>{const r=document.createElement("div");r.className=`${t}-editor-input`,r.setAttribute("aria-label","Python Script Area");const n=((e,t)=>{const r=document.createElement("button");return r.className=`absolute ${t}-editor-run-button`,r.innerHTML='<svg style="height:20px;width:20px;vertical-align:-.125em;transform-origin:center;overflow:visible;color:green" viewBox="0 0 384 512" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"><g transform="translate(192 256)" transform-origin="96 0"><g transform="translate(0,0) scale(1,1)"><path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" fill="currentColor" transform="translate(-192 -256)"></path></g></g></svg>',r.setAttribute("aria-label","Python Script Run Button"),r.addEventListener("click",(async t=>{r.blur(),await e.handleEvent(t)})),r})(e,t),o=document.createElement("div");return o.addEventListener("keydown",(e=>{e.stopPropagation()})),r.append(n,o),r},h=(e,t)=>{const r=document.createElement("div");r.className=`${t}-editor-box`;const n=v(e,t),o=(e=>{const t=document.createElement("div");return t.className=`${e}-editor-output`,t.id=`${d(e)}-output`,t})(t);return r.append(n,o),[r,o,n.querySelector("button")]},b=async(e,o,s)=>{const[{basicSetup:i,EditorView:a},{Compartment:l},{python:u},{indentUnit:f},{keymap:v},{defaultKeymap:b,indentWithTab:y}]=await Promise.all([import("./codemirror-58X3ss1_.js"),import("./codemirror_state-1d1uncXx.js"),import("./codemirror_lang-python-tUxVZ93u.js"),import("./codemirror_language-BXIPubDH.js").then((function(e){return e.x})),import("./codemirror_view-epWNLlvw.js").then((function(e){return e.q})),import("./codemirror_commands-CQkUEN52.js")]);let w=e.hasAttribute("setup");const E=e.hasAttribute("config"),k=e.getAttribute("service-worker"),$=`${s}-${e.getAttribute("env")||d(o)}`;if(k&&(new t("data:application/javascript,postMessage(0)",{type:"dummy",serviceWorker:k}).onmessage=({target:e})=>e.terminate()),E&&p.has($))throw new SyntaxError(p.get($)?`duplicated config for env: ${$}`:`unable to add a config to the env: ${$}`);p.set($,E);let x=e.textContent;const{src:A}=e;if(A)try{x=m(A,await fetch(A).then((e=>e.ok&&e.text())))}catch(e){return void c(e)}const S={handleEvent:g,serviceWorker:k,interpreter:s,env:$,config:E&&e.getAttribute("config"),get pySrc(){return w?x:N.state.doc.toString()},get outDiv(){return w?null:M}};let j;r(e,{target:{get:()=>j},handleEvent:{get:()=>S.handleEvent,set:e=>{S.handleEvent=e===g?g:async t=>{const{currentTarget:n}=t;r(t,{code:{value:S.pySrc}}),!1!==await e(t)&&await g.call(S,{currentTarget:n})}}},code:{get:()=>S.pySrc,set:e=>{w||N.update([N.state.update({changes:{from:0,to:N.state.doc.length,insert:e}})])}},process:{value(e,t=!1){if(t)return H();const r=w,n=x;w=!0,x=e;const o=()=>{w=r,x=n};return S.handleEvent({currentTarget:null}).then(o,o)}}});const L=()=>{const t=new Event(`${o}-editor`,{bubbles:!0});e.dispatchEvent(t)};if(w)return await S.handleEvent({currentTarget:null}),void L();const C=e.getAttribute("target");if(C){if(j=document.getElementById(C)||document.querySelector(C),!j)throw new Error(`Unknown target ${C}`)}else j=document.createElement(`${o}-editor`),j.style.display="block",e.after(j);j.id||(j.id=d(o)),j.hasAttribute("exec-id")||j.setAttribute("exec-id",0),j.hasAttribute("root")||j.setAttribute("root",j.id);const[T,M,R]=h(S,o);T.dataset.env=e.hasAttribute("env")?$:s;const U=T.querySelector(`.${o}-editor-input > div`).attachShadow({mode:"open"});U.innerHTML="<style> :host { all: initial; }</style>",j.appendChild(T);const P=n(e.textContent).trim(),W=/^([ \t]+)/m.test(P)?RegExp.$1:"    ",H=()=>R.click(),N=new a({extensions:[f.of(W),(new l).of(u()),v.of([...b,{key:"Ctrl-Enter",run:H,preventDefault:!0},{key:"Cmd-Enter",run:H,preventDefault:!0},{key:"Shift-Enter",run:H,preventDefault:!0},y]),i],foldGutter:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],parent:U,doc:P});N.focus(),L()};let y=0,w=Promise.resolve();const E=()=>{y=0,k()},k=()=>{if(!y){y=setTimeout(E,250);for(const[t,r]of e){const e=`script[type="${t}-editor"]`;for(const n of document.querySelectorAll(e))n.type+="-active",w=w.then((()=>b(n,t,r)))}return w}};new MutationObserver(k).observe(document,{childList:!0,subtree:!0});var $=k();export{$ as default};
//# sourceMappingURL=py-editor-C0NJhJsg.js.map