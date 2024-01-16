import{S as J,i as O,s as P,N as Q,e as t,b as c,w as i,c as R,f as j,g as z,h as e,m as A,x as D,t as G,a as K,o as U,d as V}from"./index-ddbc82bb.js";function W(f){let n,o,u,d,v,s,p,w,h,y,r,F,_,S,b,E,C,a,$,L,q,H,M,N,m,T,k,B,x;return r=new Q({props:{content:"?fields=*,"+f[0]+"expand.relField.name"}}),{c(){n=t("tr"),o=t("td"),o.textContent="fields",u=c(),d=t("td"),d.innerHTML='<span class="label">String</span>',v=c(),s=t("td"),p=t("p"),w=i(`Comma separated string of the fields to return in the JSON response
            `),h=t("em"),h.textContent="(by default returns all fields)",y=i(`. Ex.:
            `),R(r.$$.fragment),F=c(),_=t("p"),_.innerHTML="<code>*</code> targets all keys from the specific depth level.",S=c(),b=t("p"),b.textContent="In addition, the following field modifiers are also supported:",E=c(),C=t("ul"),a=t("li"),$=t("code"),$.textContent=":excerpt(maxLength, withEllipsis?)",L=c(),q=t("br"),H=i(`
                Returns a short plain text version of the field string value.
                `),M=t("br"),N=i(`
                Ex.:
                `),m=t("code"),T=i("?fields=*,"),k=i(f[0]),B=i("description:excerpt(200,true)"),j(o,"id","query-page")},m(l,g){z(l,n,g),e(n,o),e(n,u),e(n,d),e(n,v),e(n,s),e(s,p),e(p,w),e(p,h),e(p,y),A(r,p,null),e(s,F),e(s,_),e(s,S),e(s,b),e(s,E),e(s,C),e(C,a),e(a,$),e(a,L),e(a,q),e(a,H),e(a,M),e(a,N),e(a,m),e(m,T),e(m,k),e(m,B),x=!0},p(l,[g]){const I={};g&1&&(I.content="?fields=*,"+l[0]+"expand.relField.name"),r.$set(I),(!x||g&1)&&D(k,l[0])},i(l){x||(G(r.$$.fragment,l),x=!0)},o(l){K(r.$$.fragment,l),x=!1},d(l){l&&U(n),V(r)}}}function X(f,n,o){let{prefix:u=""}=n;return f.$$set=d=>{"prefix"in d&&o(0,u=d.prefix)},[u]}class Z extends J{constructor(n){super(),O(this,n,X,W,P,{prefix:0})}}export{Z as F};
