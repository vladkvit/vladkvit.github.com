(function(n,x,U,V){var C='mouseover',D='mouseout',E='indexLinksTop',F='fbContentWrapper',G='timeoutTimer',q='display',o='onclicker',k='height',l='width',e;try{e=fb.data.Z9().fb.data}catch(_){}if(!e||!e.X)return;var y=e.XX,H=e.YL,m=e.ZJ,r=fb.addEvent,s=fb.removeEvent,z=fb.getStyle;function M(d){var a=e.ZW('Z3'),b;while(b=d.pop()){var c=b.M.Z3,i=x,g=a.length;while(!i&&g--)i=b.B==a[g].B&&b.anchorIdframeHandle==a[g].Z;if(!i&&c&&(!b.UX||b.M.fbBox)){c.U.push(fb.extend(b,{UX:/\bfbIndex\b/.test(b.className),U0:e.W8(),WW:N,YS:O}));var f=m(b.Z,b.G),h=P(b),p=Q(b),t=I(b,h,p);r(f,o,I(b,h,p),c.R);r(f,'click',f[o],c.R);r(f,'touchstart',f[o],c.R);r(f,C,h,c.R);r(f,D,p,c.R)}}}function P(a){return function(d){e.Y0(a[G]);if(z(m(a.Z,a.B),'top',n)<0)a.WW()}}function Q(a){return function(d){a[G]=e.ZX(function(){a.YS()},50)}}function I(c,i,g){return function(d){var a=this,b=n;if(d.touches){if(a[o]){s(a,C,i);s(a,D,g);s(a,'click',a[o]);s(a,o)}if(d.touches[1])return}z(m(c.Z,c.B),'top',n)<0?c.WW():c.Y4?fb.start(c):(b=x);if(b)fb.stopEvent(d)}}function N(){var d=this,a=m(d.Z,d.B),b=a&&a.style;if(a&&e.W8()>d.U0+500){b[q]='inline';var c=a.offsetWidth,i=a.offsetHeight,g=0,f=0;b[q]='';if(d.ZQ=='pip'){var h=d.M,p=h[F];if(p){var t=h.J.maxIndexThumbSize,J=h.S[F],A=J[l],K=J[k],R=H(0,(h[E]?h.WJ:h.XQ)-h.J.innerBorder),S=y(A,K)/2,L=y(S,R),B,u;if(t&&c){B=e.N.core.W0(c,i,t,t,n,x);a[l]=c+=B[l];a[k]=i+=B[k]}u=(A-c)/2;e.Y8(a,p);g=z(h.fbIndexLinks,'textAlign')=='center'?u:h.indexLinksLeft?y(L,u):H(A-c-L,u);if(!h[E])f=K-i}}else{b[q]='none';var j=fb.getLayout(a.parentNode),v=fb.getViewport(),w=d.ZQ;b[q]='';a.parentNode.style[q]='inline-block';g=j.left+(w=='left'?-c:w=='right'?j[l]:(j[l]-c)/2);f=j.top+(w=='up'?2-i:w=='down'?j[k]:(j[k]-i)/2);if(g+c>v[l])g=v[l]-c-1;if(g<0)g=1;if(f+i>v[k])f=v[k]-i-1;if(f<0)f=1;j=fb.getLayout(a.offsetParent||a.ownerDocument.body);g-=j.left;f-=j.top}b.left=g+'px';b.top=f+'px'}}function O(){var d=this,a=m(d.Z,d.B),b;if(!d.V0&&a){if(d.ZQ=='pip'&&(b=m(d.Z,d.G)))e.Y8(a,b);a.style.left=0;a.style.top='-9999px'}}e.X7=function(d){var a=e.ZW('Z3'),b=a.length,c;while(b--){c=a[b];if(!fb.nodeContains(m(c.Z,c.G),d))c.YS()}};function T(d){e.F(d.Z3,n)}fb.extend(e.N.popup,{X:n,YP:M,F:T})})(!0,!1,null);