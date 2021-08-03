var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,l=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&s(e,n,t[n]);if(r)for(var n of r(t))o.call(t,n)&&s(e,n,t[n]);return e},c=(e,r)=>t(e,n(r)),i=(e,t)=>{var n={};for(var s in e)a.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&r)for(var s of r(e))t.indexOf(s)<0&&o.call(e,s)&&(n[s]=e[s]);return n};import{r as u,p as m,R as p,b as d,N as f,S as h,a as b,H as g,c as x}from"./vendor.0fafbe32.js";const E=u.exports.createContext();function y({children:e}){const[t,n]=u.exports.useState();return p.createElement(E.Provider,{value:{loginData:t,setLoginData:n}},e)}y.propTypes={children:m.exports.node.isRequired};const v=()=>u.exports.useContext(E),w=(e,t)=>{const{git:n}=t,r=c(l({},e),{err:null});switch(n){case"commit":{const{content:e}=t;return c(l({},r),{content:e,isUpToDate:!1})}case"did fetch":{const{content:e=r.content,sha:n}=t;return c(l({},r),{content:e,isFetching:!1,isUpToDate:!0,sha:n})}case"failed fetch":{const{err:e}=t;return c(l({},r),{err:e,isFetching:!1})}case"will fetch":return c(l({},r),{isFetching:!0});default:throw new Error}},k=e=>e&&`Bearer ${e}`,N={afterPull:e=>e,beforePush:e=>e,branch:"main"},C=[],D=u.exports.createContext();function S({children:e}){const{loginData:t}=v(),[n,r,a]=((e,t,n,r=N)=>{const{token:a,initialContent:o,afterPull:s,beforePush:c,branch:i}=l(l({},N),r),[{content:m,err:p,isFetching:f,isUpToDate:h,sha:b},g]=u.exports.useReducer(w,{content:o}),x=e&&t&&n&&`https://api.github.com/repos/${e}/${t}/contents/${n}`;return u.exports.useEffect((()=>{if(x){const e=x&&`${x}?ref=${i}`;g({git:"will fetch"}),fetch(e,{headers:{Authorization:k(a),Accept:"application/vnd.github.v3+json"}}).then((e=>{if(e.ok)return e.json();throw new Error})).then((({content:e,sha:t})=>{const n=d.Buffer.from(e,"base64"),r=JSON.parse(n),a=s(r);g({git:"did fetch",content:a,sha:t})})).catch((e=>g({git:"failed fetch",err:e})))}}),[s,i,x,a]),[m,e=>g({git:"commit",content:e}),{err:p,isFetching:f,isUpToDate:h,push:()=>{if(!h&&!f&&m&&b&&x){const e=c(m),t=JSON.stringify(e),r=d.Buffer.from(t).toString("base64");g({git:"will fetch"}),fetch(x,{method:"put",headers:{Authorization:k(a),"Content-Type":"application/json"},body:JSON.stringify({message:`updated ${n}`,content:r,sha:b,branch:i})}).then((e=>{if(e.ok)return e.json();throw new Error})).then((({content:{sha:e}})=>g({git:"did fetch",sha:e}))).catch((e=>g({git:"failed fetch",err:e})))}}}]})(null==t?void 0:t.username,"elo-world","data.json",{token:null==t?void 0:t.pat,initialContent:C,branch:"data"}),o=!a.isUpToDate;return p.createElement(D.Provider,{value:{movies:n,addMovie:e=>{r([...n,c(l({},e),{elo:1500,matchCount:0})])},hasSomethingToSave:o,removeMovie:({id:e})=>{r(n.filter((t=>t.id!==e)))},saveMovies:()=>{a.push()},updateMovies:(...e)=>{r(n.map((t=>{var n;return null!=(n=e.find((({id:e})=>e===t.id)))?n:t})))}}},e)}S.propTypes={children:m.exports.node.isRequired};const T=()=>u.exports.useContext(D),j={afterFetch:()=>{},beforeFetch:()=>{},extractData:e=>e,extractBody:e=>e.json()};const F={initialState:[],extractData:e=>e.results},P=u.exports.createContext();function O({children:e}){const[t,n]=u.exports.useState(),[r]=function(e,t=j){const{afterFetch:n,beforeFetch:r,extractBody:a,extractData:o,fetchOptions:s,initialState:c}=l(l({},j),t),[i,m]=u.exports.useState(c),[p,d]=u.exports.useState();return u.exports.useEffect((()=>{r(),fetch(e,s).then((e=>e.ok&&a(e))).then((e=>e&&m(o(e)))).catch((e=>d(e))).finally(n)}),[n,r,a,o,s,e]),[i,p]}(t,F);return p.createElement(P.Provider,{value:{results:r,setQuery:e=>{n(`https://api.themoviedb.org/3/search/movie?query=${e}&api_key=b581f37ace71546447fa00eb1e80ab57`)}}},e)}O.propTypes={children:m.exports.node.isRequired};const R=()=>u.exports.useContext(P);function $({opener:e,children:t}){const[n,r,a]=(()=>{const[e,t]=u.exports.useState(!1);return[e,()=>t(!0),()=>t(!1)]})();return u.exports.useEffect((()=>{const e=({key:e})=>{"Escape"===e&&a()};return n&&window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}),[a,n]),p.createElement(p.Fragment,null,p.cloneElement(e,{onClick:r}),n&&p.createElement("div",{className:"fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 grid",style:{gridTemplateColumns:"1fr auto 1fr",gridTemplateRows:"1fr auto 1fr"}},p.createElement("button",{className:"col-start-3 justify-self-start self-end",type:"button",onClick:a},"x"),p.createElement("div",{className:"col-start-2 row-start-2"},t)))}function q(){const e=u.exports.useRef(),t=u.exports.useRef(),{setLoginData:n}=v();return p.createElement($,{opener:p.createElement("button",{className:"link",type:"button"},"Login")},p.createElement("form",{onSubmit:r=>{r.preventDefault(),fetch("https://api.github.com",{method:"head",headers:{authorization:`Bearer ${t.current.value}`}}).then((r=>{r.ok&&"public_repo"===r.headers.get("X-OAuth-Scopes")?n({username:e.current.value,pat:t.current.value}):alert("failed to use token")}))},className:"p-4 rounded-lg bg-white space-y-4"},p.createElement("div",{className:"space-y-2"},p.createElement("label",{htmlFor:"username"},"username"),p.createElement("input",{className:"focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 px-1",ref:e,id:"username",type:"text"})),p.createElement("div",{className:"space-y-2"},p.createElement("label",{htmlFor:"pat"},"PAT"),p.createElement("input",{className:"focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 px-1",ref:t,id:"pat",type:"password"})),p.createElement("div",null,p.createElement("button",{type:"submit"},"Validate"))))}function M(){const{setLoginData:e}=v();return p.createElement("button",{className:"link",type:"button",onClick:()=>e(null)},"Logout")}function W(){const{hasSomethingToSave:e,saveMovies:t}=T();return p.createElement("button",{className:"link",type:"button",onClick:t,disabled:!e},"Save")}function _({className:e}){const{loginData:t}=v();return p.createElement("div",{className:`flex flex-row justify-end shadow-b mr-2 sm:mr-0 ${e}`},null==t?p.createElement(q,null):p.createElement(p.Fragment,null,p.createElement(W,null),p.createElement(M,null)))}$.propTypes={opener:m.exports.node.isRequired,children:m.exports.node.isRequired},_.propTypes={className:m.exports.string},_.defaultProps={className:""};const A=(e,t)=>p.createElement("li",null,p.createElement(f,{to:e,exact:!0,activeClassName:"active",className:"link"},t));function L({className:e}){return p.createElement("nav",{className:e},p.createElement("ul",{className:"flex flex-row justify-evenly sm:justify-start shadow-t sm:shadow-b"},A("/","Home"),A("/play","Play"),A("/search","Search")))}L.propTypes={className:m.exports.string},L.defaultProps={className:""};function B({children:e,data:t}){const{backdrop_path:n,elo:r,lastDelta:a,overview:o,poster_path:s,release_date:l,title:c}=t,i=null!=s?s:n;return p.createElement("figure",{className:"sm:inline-flex shadow overflow-hidden rounded-xl sm:p-0 sm:h-72"},i&&p.createElement("img",{loading:"lazy",src:`https://image.tmdb.org/t/p/w500${i}`,alt:c,className:"block sm:w-48 h-auto"}),p.createElement("figcaption",{className:"flex flex-col sm:w-96 p-4 sm:p-8 text-center sm:text-left space-y-2"},p.createElement("p",{className:"font-semibold"},c),p.createElement("time",{className:"mb-2 text-gray-500"},new Date(l).getFullYear()),r&&a&&p.createElement("p",null,(e=>null==e?void 0:e.toFixed(1))(r),(e=>null==e?null:((e=e.toFixed(1))>0&&(e=`+${e}`),` (${e})`))(a)),p.createElement("div",{className:"hidden sm:block"},p.createElement("p",{className:"line-clamp-6 overflow-ellipsis"},o)),e))}function U(){const{movies:e}=T();return p.createElement("ol",{className:"grid grid-cols-1 sm:grid-cols-auto-fit gap-y-4 justify-items-center"},e.sort(((e,t)=>t.elo-e.elo||t.matchCount-e.matchCount||t.lastDelta-e.lastDelta)).map((e=>p.createElement("li",{key:e.id,className:"inline-block"},p.createElement(B,{data:e})))))}function z({data:e,onWin:t}){return p.createElement(B,{data:e},p.createElement("button",{type:"button",onClick:t},"WIN"))}B.propTypes={children:m.exports.node,data:m.exports.shape({backdrop_path:m.exports.string,elo:m.exports.number,id:m.exports.number.isRequired,lastDelta:m.exports.number,overview:m.exports.string,poster_path:m.exports.string,release_date:m.exports.string.isRequired,title:m.exports.string.isRequired}).isRequired},z.propTypes=c(l({},B.propTypes),{onWin:m.exports.func.isRequired});const J={DMax:400,kGenerator:({matchCount:e})=>e<30?32:24},G=(({DMax:e,kGenerator:t}=J)=>n=>{var r=i(n,[]);const a=({elo:t})=>{var n;return 1/(1+10**(-(n=r.elo-t,{between:(e,t)=>Math.max(Math.min(n,t),e)}).between(-e,e)/e))},o=e=>n=>{var o,s,u=i(n,[]);r.matchCount=null!=(o=r.matchCount)?o:0,r.k=t(r),r.didWin=e,r.p=a(u),u.matchCount=null!=(s=u.matchCount)?s:0,u.k=t(u),u.didWin=1-r.didWin,u.p=1-r.p;const m=e=>{var t=e,{elo:n,matchCount:r,k:a,didWin:o,p:s}=t,u=i(t,["elo","matchCount","k","didWin","p"]);const m=n+a*(o-s);return c(l({},u),{elo:m,matchCount:r+1,lastDelta:m-n,lastPlayedAt:Date.now()})};return[m(r),m(u)]};return{wins:o(1),ties:o(.5),loses:o(0),oddsAgainst:a}})();function H(){const{movies:e,updateMovies:t}=T();let[n,r]=e.sort(((e,t)=>e.matchCount-t.matchCount));return null==n||null==r?p.createElement("p",null,"you should start with searching movies ;)"):p.createElement(p.Fragment,null,p.createElement(z,{data:n,onWin:()=>{[n,r]=G(n).wins(r),t(n,r)}}),"vs",p.createElement(z,{data:r,onWin:()=>{[r,n]=G(r).wins(n),t(n,r)}}),p.createElement("button",{type:"button",onClick:()=>{[n,r]=G(n).ties(r),t(n,r)}},"=="))}function I(){const{setQuery:e}=R(),t=u.exports.useRef();return p.createElement("form",{onSubmit:n=>{n.preventDefault(),e(t.current.value)}},p.createElement("label",{htmlFor:"title"},"Title"),p.createElement("input",{ref:t,id:"title"}),p.createElement("button",{type:"submit"},"Search"))}function Q({data:e}){const{id:t}=e,{movies:n,addMovie:r,removeMovie:a}=T(),o={onClick:()=>r(e),text:"+"};return n.find((e=>e.id===t))&&(o.onClick=()=>a(e),o.text="-"),p.createElement(B,{data:e},p.createElement("button",{type:"button",onClick:o.onClick},o.text))}function V(){const{results:e}=R();return e.map((e=>p.createElement(Q,{key:e.id,data:e})))}function X(){return p.createElement(O,null,p.createElement(I,null),p.createElement(V,null))}Q.propTypes=l({},B.propTypes);const Y=(e,t)=>p.createElement(b,{exact:!0,path:e,component:t});function K(){return p.createElement(h,null,Y("/",U),Y("/play",H),Y("/search",X))}function Z(){return p.createElement(y,null,p.createElement(S,null,p.createElement(g,null,p.createElement(L,{className:"row-start-3 sm:row-auto sticky bottom-0 sm:top-0 bg-white"}),p.createElement(_,{className:"sticky top-0 bg-white"}),p.createElement("main",{className:"col-span-full p-4"},p.createElement(K,null)))))}x.render(p.createElement(Z,null),document.querySelector("#root"));
