(function(o,m,s,bt){var bd='mouseover',be='mouseout',bf='center',bg='nodeContains',bh='fadeDuration',O='document',P='overHost',Q='moveWithMouse',R='attachToHost',S='shadowType',T='placement',U='className',H='sampleCallback',I='shadowSize',J='tooltip',B='mousemove',w='onover',p='top',q='left',e;try{e=fb.data.Z9().fb.data}catch(_){}if(!e||!e.X)return;var V=e.W,y=e.ZB,W=e.ZX,X=e.Y0,K=e.Z9,L=e.U5,Y=e.ZJ,bi=e.N.core.VW,M=fb.extend,n=fb.addEvent,C=fb.removeEvent,x,z,Z={},D=[],bj=/fbShown=(.+?)(;|$)/,k,i,E,bk,ba;V.Y1[J]=M({},{placement:'bottom',delay:80,mouseSpeed:120,XY:o},V.ZI,{centerOnResize:m,closeOnClick:m,colorTheme:'white',cornerRadius:4,doAnimations:m,enableDragMove:m,enableDragResize:m,fadeDuration:3,innerBorder:0,outerBorder:1,padding:0,scrolling:'no',shadowSize:4,shadowType:'drop',showClose:m,showOuterClose:m,titleAsCaption:m,className:''},V.Y1[J]);function bo(j){x=e.ZW('Y2');while(z=j.pop()){var l=z.M.Y2,f=z.Z,a=l.R,g=Y(f,z.P),r=g&&e.Y7(fb.attr(g,'data-fb-tooltip')),t=m,u=x.length,h;while(!t&&u--)t=x[u].P==z.P&&x[u].Z==f;if(l&&r&&r.source&&!t){e.YG(z,'M');M(r,z);l.U.push(r);x.push(r);h=M(r);h[U]=(h[U]||'')+' '+g[U];e.WF(h,J);h.modal=h.sameBox=m;h.resizeDuration=0;if(h.placeAbove)h[T]=p;if(h[S]=='none')h[I]=0;if(h[I]>16)h[I]=16;if(h[R]||h[T]==bf)h[Q]=m;h.disableScroll=h[Q]&&!y.XJ;if(!D[f])D[f]=new bp(f);if(h.defaultCursor)g.style.cursor='default';fb.attr(g,'title',s);g.tabIndex=0;g.touched=m;n(g,w,bq(h),a);n(g,bd,g[w],a);n(g,B,bl,a);n(g,be,bb,a);n(g,'touchstart',g[w],a);n(g,'focus',e.X3(W,g[w],99),a);n(g,'blur',e.X3(A,o),a);h.WS=function(d){var b=d.fbBox,c=d.J;if(b){F();if(!y.A){n(b,'onmouseover',F);n(b,'onmouseout',bb)}bi(b,1,y.ZV?0:c[bh],Z,function(){if(c.timeout)ba=W(A,c.timeout*1000)},s,'tt')}}}}}function bp(f){var a=this,g=50,r=g*0.001,t=0,u=0,h=m,v,bc,N;function G(d){a.ZM=t+(E?i[q]+i.width/2:d.clientX);a.ZL=u+(E?i[p]+i.height/2:d.clientY);a[P]=i&&a.ZM-i[q]>-3&&a.ZL-i[p]>-3&&a.ZM-i.right<3&&a.ZL-i.bottom<3;if(e.XD(a.XB))a.XB(a)}function bm(){var d=a.ZM-v,b=a.ZL-bc;a.speed=Math.sqrt(d*d+b*b)/r;v=a.ZM;bc=a.ZL;a.W2+=g;if(a.W2&&e.XD(a[H]))a[H](a)}a.T5=function(d){if(!h){var b=d&&d.touches,c=K(),j=f?L(f):c,l;a.TW=fb.getScroll(j);if(f){l=fb.getLayout(j.frameElement);t=l[q];u=l[p]}h=o;if(!y.A){n(j[O],B,G);if(j!=c)n(c[O],B,G)}E=!d||y.A;G(b?b[0]:d)}};a.VO=function(){C(L(f)[O],B,G);C(K(1),B,G);a.XB=h=s};a.T4=function(){if(!N){a.W2=-g;v=a.ZM;bc=a.ZL;N=L(f).setInterval(bm,g);bm()}};a.VN=function(){L(f).clearInterval(N);a[H]=N=s}}function bq(f){return function(b){if(k!=f){var c=this,j=D[f.Z],l;if(e.Z8)A(o);else if(!(f.showOnce&&(l=bj.exec(K(1).cookie))&&e.Y5(l[1],'|'+escape(f.Z+f.P+f.source)+'|'))){k=f;F();if(b&&b.touches&&!c.touched){C(c,bd,c[w]);C(c,B,bl);C(c,be,bb);C(c,w);c.touched=o}i=e.N.core.UL(c,o);j.T5(b);if(!b||b.touches){bn();return fb.stopEvent(b)}else{j[H]=function(d){if(k&&!e.Z8&&d[P]&&(!k.delay||d.speed<k.mouseSpeed&&d.W2>k.delay))bn()};j.T4(c)}}c=s}}}function bl(d){var b=this;if(!k&&b[w])b[w](d)}function bn(){if(k){var l=Y(k.Z,k.P),f=D[k.Z];X(ba);if(l&&f){f.VN();i.VQ=f.ZM;i.VP=f.ZL;if(k[R]||E)f.VO();else if(k[Q]){f.XB=function(d){var b=e.Z8,c=b&&b.fbBox,j=b&&b.S.fbBox;if(c&&e.YM(j[q])){if(!d[P])A();else{c.style[q]=(j[q]+d.ZM-i.VQ)+'px';c.style[p]=(j[p]+d.ZL-i.VP)+'px'}}}}fb.start(s,k);if(k.showOnce){var a=K(1),g=bj.exec(a.cookie);a.cookie='fbShown='+(g?g[1]:'|')+escape(k.Z+k.P+k.source)+'|; path=/'}}}}function bb(){F();if(k)bk=W(A,66)}function F(){X(bk)}function A(d){var b=e.Z8,c;if(k){F();X(ba);Z.f_tt=s;if(c=D[k.Z]){c.VN();c.VO()}if(b&&!b.X5){b.X5=o;b.J.WT=function(){k=s};bi(b.fbBox,0,d!==o&&!y.ZV&&b.J[bh],Z,function(){b&&b.X&&b.end()})}else k=s}}e.WK=function(d){var b=e.Z8;if(b&&!b.X5&&!fb[bg](b.fbBox,d)){var c=x.length,j=m;while(!j&&c--)j=fb[bg](Y(x[c].Z,x[c].P),d);if(!j)A()}};function br(d,b,c,j){var l=i.VQ,f=i.VP,a=j[R],g=j[I],r=j[S]=='halo'?g:j[S]=='hybrid'?g/2:0,t=e.XX(g,e.YL(g/2,4)),u=e.XX(g,e.YL(r/2,2)),h,v;c=c||j[T];if(c==bf){if(a){h=i[q]+(i.width-d)/2;v=i[p]+(i.height-b)/2}else{h=l-d/2;v=f-b/2}}else if(/top|bot/.test(c)){h=l-d/4;v=a?i[p]+(c==p?-(b+t):i.height+u):f+(c==p?-b-12:E?12:y.YR?19:21)}else{v=f-b/2;h=a?i[q]+(c==q?-(d+t):i.width+u):l+(c==q?-d-12:16)}return e.VS(h,v)}function bs(d){e.F(d.Y2,o)}M(e.N[J],{X:o,YP:bo,F:bs,WI:A,VE:br})})(!0,!1,null);