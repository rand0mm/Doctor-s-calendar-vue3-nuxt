import{a as G,r as R,b as K,e as y,w as Q,o as k,f as D,h as v,q as U,m as X,s as Y,t as w,F as S,k as W,u as i,p as tt,l as T,j as Z}from"./entry.374da493.js";import{f as N,h as C,g as et,c as $}from"./getDaysData.e2b963c8.js";const at={class:"content container"},st={class:"content__top"},lt={class:"content__title"},rt=v("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[v("path",{d:"M14 16V5L13 6V15H1V3H10L11 2H0V16H14Z",fill:"currentColor"}),v("path",{d:"M16 0H11L12.8 1.8L6 8.6L7.4 10L14.2 3.2L16 5V0Z",fill:"currentColor"})],-1),ot={class:"content__tab-link tab-link"},ct={class:"tab-link__list"},nt=["onClick"],it={class:"table"},ut={class:"table__caption"},vt={class:"table__date"},_t={class:"table__weekday"},dt={class:"table__hours"},mt=["onClick"],ft={__name:"[id]",setup(ht){const H=G(),c=R(null),F=R(""),n=K(),f=y({get(){return n.getWeek||0},set(a){n.curWeek=a}});y({get(){return n.getDay||0},set(a){n.curDay=a}});const j=y({get(){return n.getMonth||et()},set(a){n.curMonth=a}}),b=y({get(){return n.getFirst||N(j.value[f.value][0],!0)},set(a){n.curFirst=a}}),q=y(()=>{let a=c.value?c.value.data.filter(s=>s.date>=b.value&&s.date<=b.value+6):[],l=7-a.length;if(l>0)for(let s=0;s<l;s++){let r=$(b.value,7-l+s,!0);a.push({date:r,active:"",start:""})}return a}),B=y(()=>n.getEmployes),z=y(()=>{if(!c.value)return;let a=c.value.data?c.value.data.filter(s=>s.date>=b.value-1&&s.date<=b.value+7):[],l=9-a.length;if(l>0)for(let s=0;s<l;s++){let r=$(b.value,9-l+s-1,!0);a.push({date:r,active:"",start:""}),c.value.data.push({date:r,active:"",start:""})}return a}),A=(a,l)=>{console.log("\u0412\u044B\u0431\u0440\u0430\u043B\u0438:","\u0447\u0430\u0441",a,"\u0434\u0435\u043D\u044C",l);let s=Number(a),r=Number(l),_=z.value.filter(t=>Number(t.date)>=r-1&&Number(t.date)<=r+1),e={active:"",start:""},E=_[0],I=_[1],P=_[2],m={active:E.active.match(/.{1,2}/g),start:E.start.match(/.{1,2}/g)};m.active=m.active?m.active.map(t=>Number(t)-24):[],m.start=m.start?m.start.map(t=>Number(t)-24):[];let h={active:I.active.match(/.{1,2}/g),start:I.start.match(/.{1,2}/g)};h.active=h.active?h.active.map(t=>Number(t)):[],h.start=h.start?h.start.map(t=>Number(t)):[];let p={active:P.active.match(/.{1,2}/g),start:P.start.match(/.{1,2}/g)};p.active=p.active?p.active.map(t=>Number(t)+24):[],p.start=p.start?p.start.map(t=>Number(t)+24):[],console.log("\u041F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u0434\u0430\u043D\u043D\u044B\u0435:",m,h,p),e.active=m.active.concat(h.active,p.active),e.start=m.start.concat(h.start,p.start),console.log("\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u043E\u0431\u044A\u0435\u043A\u0442:",e);let o=e.start.filter(t=>s>=t-3&&s<=t+8);if(console.log(o),o=o[o.length-1],console.log("\u0427\u0430\u0441 \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u0441\u043C\u0435\u043D\u0443 \u043D\u0430\u0447\u0430\u043B\u043E \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0441",o),o||o===0){let t=e.start.find(d=>(console.log(d,o),d>o+3))-1||99;console.log(t,Math.min(o+8,t));let g=e.active.indexOf(s);if(g!==-1){let d=e.active.filter(u=>u>=o&&u<=Math.min(o+8,t));console.log("\u041D\u0443\u0436\u043D\u0430\u044F \u0441\u043C\u0435\u043D\u0430",d),d.length<5?e.active=e.active.filter(u=>!d.includes(u)):(e.active.splice(g,1),d[0]===s&&(console.log(d[1]),e.start.push(d[1]))),e.start=e.start.filter(u=>u!==s)}else{let d=o-s;d>0?(e.start=e.start.filter(u=>u!==o),e.active=e.active.map(u=>(u>=o&&u<=o+8&&(u-=d),u)),e.start.push(s)):e.active.push(s)}}else{e.start.push(s);for(let t=0;t<4;t++)e.active.push(s+t)}console.log("\u0418\u0442\u043E\u0433\u043E\u0432\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435",e);const L={active:[],start:[]},x={active:[],start:[]},M={active:[],start:[]};for(var V in e)e[V].forEach(g=>{g<0?L[V].push(C(g+24)):g>23?M[V].push(C(g-24)):x[V].push(C(g))});console.log("\u041D\u043E\u0432\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043F\u043E \u0434\u043D\u044F\u043C",L,x,M),c.value.data=c.value.data.map(t=>(t.date===r?(t.active=x.active.join(""),t.start=x.start.join("")):t.date===r-1?(t.active=L.active.join(""),t.start=L.start.join("")):t.date===r+1&&(t.active=M.active.join(""),t.start=M.start.join("")),t)),console.log("\u041D\u043E\u0432\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0432 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0435",c.value),n.data.employes=n.data.employes.map(t=>(t.id==H.params.id&&(console.log(t.data,c.value.data),t.data=c.value.data),t)),localStorage.setItem("employes",JSON.stringify(n.data))},O=(a,l)=>l?l.match(/.{1,2}/g).includes(C(a-1)):!1,J=a=>{f.value=a,b.value=N(j.value[f.value][0],!0)};return Q([B,f],()=>{let a=B.value.employes;c.value=a?a.find(l=>l.id==H.params.id):{},F.value=c.value?c.value.name:"",console.log("\u0414\u0430\u043D\u043D\u044B\u0435 \u043F\u043E \u0442\u0435\u043A\u0443\u0449\u0435\u043C\u0443 \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A\u0443 \u0438\u0437 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0430",c.value)}),n.getLocal(),(a,l)=>{const s=tt;return k(),D("main",at,[v("div",st,[v("h2",lt,[U(s,{class:"content__link",to:"/Doctor-s-calendar-vue3-nuxt/"},{default:X(()=>[rt]),_:1}),Y(" "+w(F.value),1)]),v("div",ot,[v("ul",ct,[(k(!0),D(S,null,W(i(j),(r,_)=>(k(),D("li",{class:T(["tab-link__item",{"tab-link__item--active":i(f)===_}]),key:_,onClick:Z(e=>J(_),["prevent"])},w(i(N)(r[0]))+"-"+w(i(N)(r[6])),11,nt))),128))])])]),v("section",it,[(k(!0),D(S,null,W(i(q),(r,_)=>(k(),D("div",{class:"table__row",key:_},[v("div",ut,[v("div",vt,w(i(N)(i(j)[i(f)][_])),1),v("div",_t,w(i(n).weekDays[_].title),1)]),v("div",dt,[(k(),D(S,null,W(24,e=>v("div",{class:T(["table__hour",{"table__hour--chosen":O(e,r.start),"table__hour--cover":O(e,r.active)}]),key:e,onClick:Z(E=>A(i(C)(e-1),i(N)(i(j)[i(f)][_],!0)),["prevent"])},w(i(C)(e-1)),11,mt)),64))])]))),128))])])}}};export{ft as default};
