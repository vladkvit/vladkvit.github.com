/*
 * Floatbox 5.6.1
 * December 27, 2012
 *
 * Copyright (c) 2008-2012 Byron McGregor
 * Website: http://floatboxjs.com/
 * This software and all associated files are protected by copyright.
 * Redistribution and/or modification of the executable portions is prohibited.
 * Use on any commercial site requires registration and purchase of a license key.
 * See http://floatboxjs.com/license for details.
 * This comment block must be retained in all deployments.
 */ (function (q, G, u, bz) {
    var dM = 'start_page',
        dN = 'scribd',
        dO = 'direct',
        dP = 'fbVideoThumb',
        dQ = '</div>',
        dR = 'inline-block',
        dS = 'floatbox',
        dT = 'data-fb-options',
        dU = 'object',
        dV = 'window',
        dW = 'number',
        dX = 'function',
        dY = 'paddingLeft',
        dZ = 'paddingTop',
        ea = 'borderLeftWidth',
        eb = 'borderTopWidth',
        ec = 'keydown',
        ed = 'DOMContentLoaded',
        ee = 'corner',
        ef = 'getBoundingClientRect',
        eg = 'fbContent',
        eh = 'contentDocument',
        ei = 'compareDocumentPosition',
        ej = 'getComputedStyle',
        ek = 'getElementsByClassName',
        el = 'preventDefault',
        em = 'stopPropagation',
        en = 'removeEventListener',
        eo = 'floatboxClass',
        ep = 'enableQueryStringOptions',
        eq = 'ontouchend',
        cY = 'inline',
        er = 'start',
        cZ = 'script',
        da = 'rel',
        db = 'touchstart',
        dc = 'scrollTop',
        dd = 'scrollLeft',
        de = 'setRequestHeader',
        df = 'getElementById',
        dg = 'bottom',
        dh = 'preload',
        di = 'fbCursor',
        dj = 'showThis',
        dk = 'visibility',
        dl = 'autoStart',
        dm = 'ontouchstart',
        cv = 'image',
        cw = 'video',
        cx = 'pdf',
        cy = 'null',
        cz = 'area',
        cA = 'none',
        cB = 'value',
        cC = 'onreadystatechange',
        cD = 'addEventListener',
        cE = 'defaultView',
        cF = 'caption',
        cG = 'globalOptions',
        cH = 'location',
        bZ = 'html',
        ca = 'on',
        cb = 'media',
        cc = 'iframe',
        cd = 'nodeType',
        ce = 'touches',
        cf = 'options',
        cg = 'onclick',
        bM = 'px',
        bN = 'img',
        bO = 'firstChild',
        bP = 'target',
        bQ = 'concat',
        bR = 'group',
        bS = 'proto',
        bA = 'source',
        bB = 'ieVersion',
        bC = 'ready',
        bD = 'core',
        bs = '#',
        bt = 'height',
        bu = 'width',
        bv = 'display',
        bl = '?',
        bm = 'zoomSource',
        bn = 'toLowerCase',
        bf = 'className',
        bg = 'ownerDocument',
        X = ' ',
        Y = 'left',
        Z = 'documentElement',
        P = 'parentNode',
        Q = 'style',
        R = 'exec',
        I = 'document',
        C = 'split',
        B = 'push',
        z = 'test',
        t = 'replace',
        s = 'length',
        o = '',
        g = {
            U: [],
            R: [],
            ZZ: [],
            ZY: {
                U: [],
                R: [],
                Y3: {}
            },
            Z3: {
                U: [],
                R: []
            },
            Y2: {
                U: [],
                R: []
            },
            Y9: {
                U: [],
                R: []
            },
            H: {
                ZY: [],
                Z3: [],
                Y2: [],
                Y9: [],
                ZG: [],
                YH: []
            },
            XR: [],
            N: {},
            YH: {},
            I: {},
            Z2: {},
            U9: 0,
            V9: 1
        }, bh = [],
        r, N, E, es, dn, et = g.W7 = 'fbPageOptions',
        ch = self[et] || {}, eu = S(cZ, 0, -1).src,
        m = /(.*\/)[^\/]+\.js(\?.*)?$/i [R](eu) || [],
        cI = g.UZ = ch.installPath || m[1] || './',
        eT = /\bframed\b/ [z](m[2] || o),
        ev = ch.modulesPath || cI + 'modules/',
        fy = g.UQ = ch.languagesPath || cI + 'languages/',
        ci = g.U4 = ch.graphicsPath || cI + 'graphics/',
        ew = cI + 'options.js',
        eU = g.VH = ci + 'blank.gif',
        eV = g.UC = ci + 'magnify_plus.cur',
        o0 = /\bnofloatbox\b/i,
        D = g.ZB = {}, cj = [],
        cJ, bE = Math,
        fz = g.UN = bE.ceil,
        fA = g.XA = bE.floor,
        ex = g.YL = bE.max,
        cK = g.XX = bE.min,
        fB = g.W9 = bE.pow,
        fC = g.V3 = bE.random,
        ck = g.UM = bE.round,
        fD = g.WN = String.fromCharCode,
        ba = g.UU = bw('string'),
        cL = g.YM = bw(dW),
        fE = g.UY = bw('boolean'),
        bx = g.UV = bw(dU),
        cM = g.XD = bw(dX),
        bF = g.XF = bw('array'),
        bi = g.UW = bw('node'),
        eW = g.UT = bw(dV),
        ey = g.WP = function (d) {
            return (d || o)[t](/-(\w)/g, function (a, b) {
                return b.toUpperCase()
            })
        }, ez = function (a) {
            return (a || o)[t](/[A-Z]/g, '-$&')[bn]()
        }, bo = g.Y5 = function (a, b) {
            return !!(a.indexOf(b) + 1)
        }, cl = function (a, b) {
            return !a.indexOf(b)
        }, eX = g.VI = o.charCodeAt,
        by = g.X2 = function (a) {
            return (a && a.nodeName || o)[bn]()
        }, eA = g.W8 = function () {
            return +(new Date())
        }, eY = g.YW = function (a, b) {
            return parseInt(a, b || 10)
        }, eB = g.XK = parseFloat,
        J = g.ZX = function (a, b) {
            return O().setTimeout(a, b || 1)
        }, cN = g.Y0 = function (a) {
            return O().clearTimeout(a)
        }, eZ = g.W1 = function (a) {
            alert(a)
        }, cm = g.YG = function (a, b) {
            delete a[b]
        }, fa = '-102472062268',
        dp = cn(location.href[C](bs)[0]),
        dq = T(dr(dp[C](bl)[1])),
        ds = dp[C]('/', 3).join('/'),
        bp = self == top || eT || ch.framed || co(parent),
        dt = bb(cO, 'Width'),
        du = bb(cO, 'Height'),
        cP = bq(er),
        fc = bq('end'),
        fd = bq('resize'),
        fe = bq('reload'),
        ff = bq('goBack'),
        fg = bq('pause'),
        fh = bq('showItem'),
        eC = bq(dh),
        fi = bq('printNode'),
        fj = function (a, b, d) {
            cP(bi(a) || bx(a) ? a : {
                href: a,
                rev: b,
                title: d
            })
        };
    if (self.fb && fb.data) return;

    function bw(b) {
        return function (a) {
            return dv(a) == b
        }
    }
    g.X3 = bb;

    function bb(a, b, d, c, e, f, h) {
        return function () {
            return a(b, d, c, e, f, h)
        }
    }
    function bq(h) {
        return function l(a, b, d, c, e, f) {
            (f = r && r.N && r.N[bD] && r.N[bD].X && r.N[bD][h]) ? f(a, b, d, c, e) : J(bb(l, a, b, d, c, e), 99)
        }
    }
    g.U2 = bG;

    function bG(a, b, d) {
        return a ? a : a === bz || a === o ? b : a !== u ? a : d !== bz ? d : cL(b) ? 0 : a
    }
    g.YV = bj;

    function bj(a, b) {
        return bG(a[b], E[b], u)
    }
    function dw(a) {
        cJ = q;
        while (a = cj.shift()) a()
    }
    function dx(a) {
        var b = a + o,
            d = 0,
            c = b[s];
        while (c--) d = eX.call(b, c) + (d << 6) + (d << 16) - d;
        return d
    }
    function co(a, b) {
        b = q;
        try {
            if (ba(a)) {
                if (cl(a, '//')) a = ds[C]('/')[0] + a;
                b = /^https?:\/\/\w/i [z](a) && !cl(a[bn](), ds)
            } else b = a && a[cH] ? co(a[cH].href) : q
        } catch (_) {}
        return b
    }
    g.YX = br;

    function br(a, b, d) {
        d = (b || O(1)).createElement(a || 'div');
        if (a == 'a') {
            K(d, da, 'nofloatbox');
            d.hideFocus = q
        }
        return d
    }
    g.UR = cp;

    function cp(a) {
        if (bi(a)) {
            var b = a[bg] || document,
                d = 'fbTrash',
                c = x(d, b);
            bT(a);
            a.onmouseover = a.onmousemove = a.onmouseout = a[dm] = a[eq] = a.onmousedown = a[cg] = a.onfocus = a.onblur = u;
            if (!c) {
                c = br(d, b);
                c.id = d;
                c[Q][bv] = cA;
                bc(c, b.body || b[Z])
            }
            bc(a, c);
            bT(c)
        }
        return u
    }
    g.Y8 = bc;

    function bc(a, b, d) {
        try {
            return d ? b.insertBefore(a, d) : b ? b.appendChild(a) : a[P] && a[P].removeChild(a)
        } catch (_) {}
    }
    g.VL = cq;

    function cq(a, b) {
        if (ba(b)) b = b[C](/\s+/);
        return a[bf] = ((a[bf] || o) + X + b.join(X))[t](/\s\s+/, X)[t](/^\s|\s$/g, o)
    }
    g.VA = cn;

    function cn(a, b) {
        try {
            a = b ? decodeURIComponent(a) : decodeURI(a)
        } catch (_) {}
        return a
    }
    g.WE = bU;

    function bU(a, b, d) {
        var c = r || g,
            e = c.N,
            f = e[a] || (e[a] = {}),
            h = bb(c.WE, a, b, d);
        !bp ? J(h) : !fb[bC] || f.UD && !f.X || a != bD && !(e[bD] && e[bD].X) ? J(h, 99) : f.X ? (f.YP || x)(b) + (d || x)() : (f.UD = q) + bV(ev + a + '_561.js', h)
    }
    g.WF = eD;

    function eD(a, b, d) {
        var c = a.W || a,
            e = {}, f = cq({}, [a.YY || o, N.XO[bf] || o, bj(c, bf) || o, c.V6 || o])[C](X),
            h = f[s];
        while (h--) H(e, N.VC[f[h]]);
        H(c, H({}, N.Y1[b], N.Y1[d || o], e, N.XO, self.fbFormOptions, c))
    }
    function fk() {
        var d = document,
            c;

        function e(a, b) {
            b = {};
            if (a) U(a, function (k, v) {
                b[k == bN ? cv : k] = T(v)
            });
            return b
        }
        g.XL = bp ? 0 : parent.fb.data.XL + 1;
        if (!(c = O().fb) || !eW(self)) return;
        r = c.data;
        g.X = q;
        if (bp) {
            g.VX = L(d.body, 'direction') == 'rtl';
            g.UP = ds[C]('/')[2][t]('www.', o);
            if (m = fb[bB]) {
                D.ie = q;
                D.U3 = m < 10;
                D.ZV = m < 9;
                D.YR = m < 8;
                D.XJ = m < 7
            }
            D.A = dm in d;
            N = g.W = {};
            E = N.ZI = {};
            m = fb[cf] || fb[bS][cG];
            H(E, T(m[cG]), T(self[et]));
            N.VD = H(T(m.childOptions), T(self.fbChildOptions));
            N.Y1 = H(e(m.typeOptions), e(self.fbTypeOptions));
            N.VC = H(e(m.classOptions), e(self.fbClassOptions));
            N.XO = dq[ep] || E[ep] ? dq : {}
        } else {
            D = r.ZB;
            N = r.W;
            E = N.ZI
        }
        bh = fb.instances = r.XR;
        es = new RegExp('(^|\\s)(' + (E[eo] || dS) + ')(\\s|$)', 'i');
        g.Z = r.U9++;
        cm(fb, cf);
        cm(fb, bS);
        g.WQ = dq[dl];
        fb[bC] = q;
        if (bp) bU(bD);
        bH(d.body)
    }
    g.Y7 = T;

    function T(b) {
        var d = {}, c = [],
            e = /`([^`]*)`/g,
            f;

        function h(a) {
            return a == 'true' ? q : a == 'false' ? G : a == cy ? u : a == '``' ? c.pop() || o : /^-?\d+(\.\d+)?(px)?$/ [z](a) ? eB(a) : a
        }
        if (ba(b)) {
            e.lastIndex = 0;
            while (f = e[R](b)) c[B](f[1]);
            if (c[s]) b = b[t](e, '``');
            b = b[t](/[\r\n]/g, X)[t](/\s{2,}/g, X)[t](/\s*[:=]\s*/g, ':')[t](/\s*[;&,]\s*/g, X)[t](/^\s+|\s+$/g, o);
            var l = b[C](X),
                i = l[s],
                j;
            while (i--) {
                j = l[i][C](':');
                if (j[0] && j[1]) d[j[0]] = h(j[1][t](/^(['"])(.+)\1$/, '$2'))
            }
        }
        if (bi(b)) H(d, T(K(b, 'rev')), T(K(b, dT)));
        if (bx(b)) U(b, function (k, v) {
            d[k] = h(v)
        });
        return d
    }
    g.UO = eE;

    function eE(d, c) {
        c = o;
        bx(d) ? U(d, function (a, b) {
            if (/[:=&;,\s]/ [z](b)) b = '`' + b + '`';
            c += a + ':' + b + ';'
        }) : c = d;
        return c
    }
    function fl(a, b) {
        var d = a.Y[C](bs),
            c = a.WC = d[1] || o,
            e = d[0],
            f = b == 'flash',
            h, l, i, j, n, p, w, y;
        d = e[C](bl);
        i = d[1] || o;
        h = d[0];
        l = /\.(\w+)$/ [R](h);
        j = l ? l[1][bn]() : o;
        if (!b) {
            b = /^(jpe?g|png|gif|bmp)$/ [z](j) ? cv : j == 'swf' && !/(moogaloop|ScribdViewer)\.swf/ [z](h) ? 'flash' : j == cx ? cx : j == 'xap' ? 'silverlight' : /^(mpe?g|movi?e?|3gp|3g2|m4v|mp4|m1v|mpe|qt)$/ [z](j) ? 'quicktime' : /^(wmv?|avi|asf)$/ [z](j) ? 'wmp' : cc
        }
        if (f || b == cc || b == cb || b == cw) {
            if (l = /youtu(?:be\.com\/(?:embed\/|watch\?v=|v\/)|\.be\/)([\w\-]+)/i [R](e)) {
                n = 'youtube';
                p = '//www.youtube.com/';
                w = 'v/';
                y = 'embed/';
                if (!bo(i, 'autohide')) i = 'autohide=1&' + i
            } else if (l = /vimeo.com\/(?:video\/|moogaloop.swf\?clip_id=)?(\w+)/i [R](e)) {
                n = 'vimeo';
                p = '//';
                w = 'vimeo.com/moogaloop.swf?clip_id=';
                y = 'player.vimeo.com/video/'
            } else if (l = /dailymotion\.com\/(?:(?:embed\/|swf\/)?video|swf)\/([a-z\d]+)/i [R](e)) {
                n = 'dailymotion';
                p = '//www.dailymotion.com/';
                w = 'swf/video/';
                y = 'embed/video/';
                i = 'logo=0&' + i
            } else if (l = /scribd(?:assets)?\.com\/(?:doc\/|embeds\/|ScribdViewer.swf\?document_id=)(\w+)/i [R](e)) {
                n = dN;
                p = '//';
                w = 'd1.scribdassets.com/ScribdViewer.swf?document_id=';
                y = 'www.scribd.com/embeds/';
                i = i[t](/\bpage\b/, dM);
                if (f) i = i[t](dM, 'page')
            }
            if (l) {
                a.Z2 = {
                    T0: l[1],
                    WV: n
                };
                if (!f) {
                    b = cw;
                    if (n == dN) l[1] += '/content'
                }
                a.Y = p + (f ? w : y) + l[1];
                a.Y += (i ? (bo(a.Y, bl) ? '&' : bl) + i : o) + (c ? bs + c : o)
            }
            if (b == cw) {
                d = a.Y[C](bl);
                i = d[1] || o;
                if (!bo(i, 'autoplay')) i = 'autoplay=1&' + i;
                if (!bo(i, 'wmode')) i = 'wmode=opaque&' + i;
                a.Y = d[0] + bl + i
            }
        }
        return b == bN ? cv : b
    }
    g.TX = dy;

    function dy(a, b, d) {
        var c = a[P],
            e;
        d = d || 'fbWrapper';
        if (c[bf] == d) e = c;
        else {
            e = br(b, a[bg]);
            cq(e, d);
            c.replaceChild(e, a);
            bc(a, e);
            if (!b) {
                var f = L(a, bv),
                    h = L(a, dk);
                e[Q][bv] = f;
                e[Q][dk] = h;
                if (f == cA) a[Q][bv] = 'block';
                if (h == 'hidden') a[Q][dk] = 'visible'
            }
        }
        return bk(e)
    }
    g.VM = eF;

    function eF(a, b, d) {
        var c = {
            W: H(b),
            Y4: d,
            WO: [],
            XT: []
        }, e = c.W,
            f, h, l, i, j, n, p, w, y;
        c.Z = bG(e.Z, g.Z);
        a = e[bA] || a;
        if (!a && e[dj] !== G) return;
        if (bi(a)) {
            var bd = by(a),
                be = T(a);
            if (/^a(rea)?$/ [z](bd)) {
                H(e, be, b);
                c.ZN = cn(e[bA] || a.href || o);
                c.YY = a[bf] || o;
                l = K(a, da);
                f = a;
                h = bd == cz ? f : S(bN, f, 0);
                if (es[z](c.YY)) c.Y4 = q;
                else {
                    if (!o0[z](l + X + c.YY) && (m = /^((float|light|lyte|slide|i)(box|show|frame)|gallery)(.*)/i [R](l))) {
                        c.Y4 = q;
                        c[bR] = m[4];
                        if (m[3] == 'show') {
                            e.doSlideshow = q;
                            c[bR] = c[bR] || l
                        }
                    }
                }
            } else {
                i = bZ;
                j = cY
            }
        }
        c.Y = c.ZN || bi(a) && (m = bk(a)) && bs + m || a || o;
        if (!i) {
            c.Y = dz(c.Y);
            if (/<.+>/ [z](c.Y)) {
                i = bZ;
                j = dO
            } else if ((m = c.Y[t](dp, o)) && m[s] > 1 && cl(m, bs)) {
                c.Y = m;
                i = bZ;
                j = cY
            }
        }
        i = i || bj(e, 'type');
        if (!j) {
            i = fl(c, i);
            if (/^(iframe|inline|ajax|direct)$/ [z](i)) {
                j = i;
                i = bZ
            }
            if (/^(video|flash|quicktime|wmp|silverlight|pdf)$/ [z](i)) {
                j = i;
                i = cb
            }
        }
        c.Y4 = (d || !o0[z](l + X + c.YY)) && c.Y4 || e.V6 && (!(m = e.autoTypes) || bo(m, i) || j && bo(m, j));
        if (h && (m = /\bfbPop(up|down|left|right|center|pip)\b/i [R](c.YY))) {
            g.H.Z3[B](H(c, {
                ZQ: m[1],
                M: dA(f, g),
                G: bk(f),
                B: bk(h)
            }));
            cq(h, 'fbPopper')
        }
        if (!c.Y4) return;
        eD(c, i, j);
        if (f && dv(e[cF] = bj(e, cF)) != cy && !e[cF]) e[cF] = (m = bj(e, 'titleAsCaption')) !== G && (m != bN && K(f, 'title') || m != 'a' && h && K(h, 'title')) || h && bj(e, 'altAsCaption') && K(h, 'alt');
        m = h && K(h, 'data-fb-src');
        H(c, {
            G: bk(f),
            B: bk(h),
            XV: m != 'src' && m || h && h.src,
            ZO: j,
            O: i == cv,
            E: i == bZ,
            ZU: i == cb,
            L: j == cc,
            YO: j == cY,
            XG: j == 'ajax',
            XE: j == dO,
            group: e[bR] || c[bR] || !d && E[bR] || o
        });
        c.YZ = !c.YO && !c.XE;
        c.YQ = c.L || j == cw || j == cx;
        if (c.YQ) {
            c.ZT = co(c.Y);
            if (c.L && !c.ZT) c.Y = c.Y[C](bs)[0]
        }
        if (c.O && e[bm] === bz) e[bm] = E[bm] === bz ? c.Y : E[bm];
        if (c.O) e[bm] = bG(bj(e, bm), c.Y, u);
        if (n = bj(e, 'indexThumbSource')) {
            if (n == 'href') n = c.O && c.Y;
            if (n) c.V7 = n
        }
        if (c.YO) {
            m = cQ(c.Z, c.Y);
            if (!m) return;
            c.XI = (p = m[P]) && p.fbName == eg ? dB(p).V.XI : dy(m);
            m = p = u
        }
        if (d) return c;
        c.M = dA(f, g);
        w = G;
        y = c.M.U[s];
        while (!w && y--) {
            m = c.M.U[y];
            w = m.G == c.G && m.Z == c.Z
        }
        if (!w) {
            c.M.U[B](c);
            m = r.H.YH;
            if (c.O && c.Y != e[bm]) m[B](c.Y);
            if (e[bm]) m[B](e[bm]);
            eG(h, bj(e, 'addPlayButton'));
            if (c.ZU && c.ZO != cx) g.H.ZG[B](c);
            if (h) {
                var M = bj(e, 'showMagCursor'),
                    A = h[Q];
                if (M && M != 'no') {
                    A[di] = A[di] || L(h, 'cursor') || o;
                    A.cursor = 'url(' + eV + '), ' + A[di]
                }
            }
            if (c.ZN && !g.ZE) {
                if (g.WQ) {
                    if (e[dj] !== G && bo(c.ZN[t](location, o), g.WQ)) g.ZE = c
                } else if (e[dl] === q) g.ZE = c;
                else if (e[dl] == 'once') {
                    var V = /fbShown=(.+?)(;|$)/ [R](document.cookie),
                        cr = V ? V[1] : '|',
                        bW = escape(c.ZN) + '|';
                    if (!bo(cr, '|' + bW)) {
                        g.ZE = c;
                        document.cookie = 'fbShown=' + cr + bW + '; path=/'
                    }
                }
            }
            if (f && !c.ZQ) {
                W(f, cg, fm(c), c.M.R);
                if (D.A) {
                    W(f, dm, f[cg], c.M.R);
                    W(f, eq, f[cg], c.M.R)
                }
            }
        }
    }
    function fm(b) {
        return function (a) {
            if (a.type == db) this[cg] = dC;
            else if (r.I.Z7 && !(a[ce] && a[ce][s]) && (!(a.ctrlKey || a.metaKey || a.shiftKey || a.altKey) || !(b.O || b.L) || b.W[dj] === G)) {
                J(bb(cP, b));
                this.blur();
                return dC(a)
            }
        }
    }
    function dA(a, b) {
        if (bi(a) && b == r) b = dB(a) || b;
        return b
    }
    g.Z9 = O;

    function O(a) {
        var b = self,
            d = g.XL || 0;
        try {
            while (d--) b = b.parent
        } catch (_) {}
        return a ? b[I] : b
    }
    g.XS = bk;

    function bk(a) {
        return a && (a.id || (a.id = 'fb_' + (r && r.V9++ || eA() + g.V9++)))
    }
    g.WG = bI;

    function bI(a, b, d) {
        if (!b) b = d = O();
        var c = b.fb && b.fb.data,
            e = S(cc, b[I]),
            f = e[s],
            h;
        if (c && (c.Z !== 0 || b == d)) {
            a(b, c);
            while (f--) {
                if (h = cR(e[f])) bI(a, h, d)
            }
        }
    }
    g.U5 = eH;

    function eH(d) {
        var c;
        if (d) {
            bI(function (a, b) {
                if (b.Z == d) c = a
            })
        }
        return c || O()
    }
    g.ZJ = cQ;

    function cQ(a, b, d) {
        if (ba(b)) {
            b = b[t](bs, o);
            d = d || eH(a);
            return x(b, d[I]) || d[b]
        }
    }
    g.X1 = S;

    function S(a, b, d) {
        var c = (b || document).getElementsByTagName(a),
            e = [];
        if (d === -1) e = c[c[s] - 1];
        else if (d === 0) e = c[0];
        else {
            d = 0;
            while (d < c[s]) e[B](c[d++])
        }
        return e
    }
    function dD(a) {
        a = bJ(a);
        return a != O() && a.frameElement || u
    }
    g.WD = bJ;

    function bJ(a) {
        var b = a && (a[I] || (a[Z] || a)[bg]);
        return b && (b[cE] || b.parentWindow)
    }
    g.WH = cS;

    function cS(a) {
        var b = bh[s],
            d;
        while (b--) {
            if ((d = bh[b]) && d.X && !d.Q) a(d, b)
        }
    }
    g.ZW = fn;

    function fn(d) {
        var c = [],
            e;
        cS(function (a) {
            c = c[bQ]((d ? a[d] : a).U)
        });
        bI(function (a, b) {
            c = c[bQ]((d ? b[d] : b).U)
        });
        return c
    }
    g.T9 = eI;

    function eI(b, d, c, e, f) {
        if (b = x(b)) {
            var h = [],
                l = /<script[^>]*>([\s\S]+?)<\/script>/gi,
                i = /^<script[^>]+src\s*=\s*["']/i,
                j = d || o;
            if (!f) j = '<div>' + j + dQ;
            l.lastIndex = 0;
            while (m = l[R](d)) {
                if (!i[z](m[0])) {
                    j = j[t](m[0], o);
                    h[B](m[1])
                }
            }
            bT(b, j);
            if (c) {
                J(function (a) {
                    a = 0;
                    while (a < h[s]) bV(h[a++], u, q)
                })
            }
            if (e) bH(b)
        }
    }
    g.VJ = eG;

    function eG(n, p, w) {
        if (n && p && n[P][bf] != dP) {
            fb[dh](ci + 'videoPlay.png', function (j) {
                fb[dh](n.src, function (a) {
                    if (j && a) {
                        var b = n[bu] || a[bu],
                            d = n[bt] || a[bt],
                            c = br(bN, n[bg]),
                            e = c[Q],
                            f = dy(n, 'span', dP) && n[P],
                            h = 865,
                            l = 0.197,
                            i;
                        c.src = j.src;
                        c.alt = o;
                        if (p == 'large') {
                            h = 607;
                            l = 0.21
                        } else if (p == 'small') {
                            h = 1515;
                            l = 0.184
                        }
                        i = cK(1, b / h + l);
                        c[bu] = j[bu] * i;
                        c[bt] = j[bt] * i;
                        e[Y] = ((b - c[bu]) / 2) + bM;
                        e.top = ((d - c[bt]) / 2) + bM;
                        cq(c, 'fbVideoPlay');
                        m = L(f, bv);
                        e[bv] = m && L(f, bv) != dR ? cA : o;
                        if (w) {
                            f[Q][bu] = b + bM;
                            f[Q][bt] = d + bM
                        }
                        bc(c, f)
                    }
                })
            })
        }
    }
    g.VS = cT;

    function cT(a, b, d, c, e) {
        var f = {
            left: a || 0,
            top: b || 0,
            width: d || 0,
            height: c || 0
        };
        if (e === q) {
            f.right = f[Y] + f[bu];
            f[dg] = f.top + f[bt]
        } else if (e) f.id = e;
        return f
    }
    function dE(a, b, d) {
        if (b in a) {
            if (!bF(a[b])) a[b] = [a[b]];
            a[b][B](d)
        } else a[b] = d
    }
    g.UJ = dF;

    function dF(b) {
        bF(b) ? b[s] = 0 : bx(b) ? U(b, function (a) {
            cm(b, a)
        }) : 0
    }
    g.F = dG;

    function dG(d, c) {
        if (d && fb[bC]) {
            while (m = d.R.pop()) bX(m);
            dF(d.U);
            if (!c) {
                U(d.H, function (a, b) {
                    dF(b)
                });
                U(r.N, function (a, b) {
                    if (b && b.F) b.F(d)
                });
                J(self.CollectGarbage || x)
            }
        }
    }
    function x(b, d, c) {
        if (ba(b)) {
            b = b[t](/^#/, o);
            d ? (c = d[df] && d[df](b)) : (c = document[df](b)) ? 0 : bI(function (a) {
                c = c || x(b, a[I])
            })
        } else c = b;
        return c
    }
    function eJ(a) {
        if (cM(a)) cJ ? a() : cj[B](a)
    }
    function W(a, b, d, c, e) {
        var f = cl(b, ca),
            h = [
                [],
                [], b, f ? u : d],
            l = G,
            i, j, n, p;
        if (bF(a)) {
            p = a[s];
            while (p--) W(a[p], b, d, c, e)
        } else if (a = x(a)) {
            i = bJ(a);
            j = i && i.fb && i.fb.data && i.fb.data.Z;
            if (cL(j)) {
                n = a == i ? 'self' : a == i[I] ? I : bk(a);
                h[0][B](j);
                h[1][B](n)
            }
            if (a[cd] == 9 && b == ed) {
                p = cj[s];
                while (!l && p--) l = cj[p] == d;
                if (!l) cj[B](d)
            } else if (f) a[b] = eK(a, d);
            else if (a[cD]) a[cD](b, d, e === q || c === q);
            else if (a.attachEvent) {
                var w = h[4] = dx(d),
                    y = ca + b,
                    bd = y + w;
                bX(a, b, d, w);
                a[bd] = eK(a, d);
                a.attachEvent(y, a[bd])
            }
            if (c && c[B]) c[B](h)
        }
        a = i = u;
        return h[0][s] && h
    }
    function eK(b, d) {
        return function (a) {
            if (b) {
                a = a || (bJ(b) || {}).event;
                if (a && !a[bP]) a[bP] = a.srcElement;
                try {
                    return d.call(b, a)
                } catch (_) {}
            }
        }
    }
    function bX(a, b, d, c) {
        var e;
        if (bF(a)) {
            if (bF(a[0])) {
                e = a[0][s];
                while (e--) bX(cQ(a[0][e], a[1][e]), a[2], a[3], a[4])
            } else {
                e = a[s];
                while (e--) {
                    try {
                        bX(a[e], b, d, c)
                    } catch (_) {}
                }
            }
        } else if (a = x(a)) {
            if (cl(b, ca)) a[b] = u;
            else if (cM(d)) {
                if (a[en]) a[en](b, d, G);
                else if (a.detachEvent) {
                    c = c || dx(d);
                    var f = ca + b,
                        h = f + c;
                    if (a[h]) a.detachEvent(f, a[h]);
                    a[h] = u
                }
            }
        }
    }
    function dC(a, b, d) {
        d = d !== G;
        if (a) {
            if (b) {
                if (a[em]) a[em]();
                try {
                    a.cancelBubble = q
                } catch (_) {}
            }
            if (d) {
                if (a[el]) a[el]();
                try {
                    a.returnValue = G
                } catch (_) {}
            }
        }
        return !d
    }
    function bT(a, b) {
        if (a = x(a)) {
            try {
                a.innerHTML = b || o
            } catch (_) {
                try {
                    var d = a[bg],
                        c = d.createRange();
                    c.selectNodeContents(a);
                    c.deleteContents();
                    if (b) {
                        var e = (new DOMParser).parseFromString('<div xmlns="http://www.w3.org/1999/xhtml">' + b + dQ, 'application/xhtml+xml'),
                            f = e[Z].childNodes,
                            h = f[s],
                            l = 0;
                        while (l < h) bc(d.importNode(f[l++], q), a)
                    }
                } catch (_) {}
            }
        }
    }
    function fo(a) {
        var b = o,
            d;
        if (bi(a = x(a))) {
            if (a.outerHTML) b = a.outerHTML;
            else {
                d = br(0, a[bg]);
                bc(a.cloneNode(q), d);
                b = d.innerHTML;
                cp(d)
            }
        }
        return b
    }
    function fp(a) {
        return ba(a) ? a[t](/&/g, '&amp;')[t](/</g, '&lt;')[t](/>/g, '&gt;')[t](/"/g, '&quot;') : a
    }
    function dz(a) {
        return ba(a) ? a[t](/&lt;/g, '<')[t](/&gt;/g, '>')[t](/&quot;/g, '"')[t](/&apos;/g, '\'').replace(/&amp;/g, '&') : a
    }
    function H() {
        var a = arguments,
            b = a[s],
            d = b == 1 ? H({}, a[0]) : a[0] || {}, c = 1,
            e;
        while (c < b) {
            if (bx(e = a[c++])) U(e, function (key, val) {
                if (val !== bz) d[key] = val
            })
        }
        return d
    }
    function U(a, b, d) {
        for (var c in a) {
            if (d || {}.hasOwnProperty.call(a, c)) b(c, a[c])
        }
    }
    function cs(a, b) {
        var d = [],
            c, e, f;
        if (a) {
            b = x(b) || document[Z];
            if (bF(a)) {
                if (a[s]) d = cs(a.pop())[bQ](cs(a))
            } else {
                if (b[ek]) {
                    c = b[ek](a);
                    d = [].slice.call(c)
                } else {
                    e = new RegExp('(^|\\s)' + a + '(\\s|$)');
                    c = S('*', b);
                    f = 0;
                    while (f < c[s]) {
                        if (e[z](c[f][bf])) d[B](c[f]);
                        f++
                    }
                }
            }
        }
        return d
    }
    function L(a, b, d) {
        var c = o,
            e, f, h, l, i;
        if (a = x(a)) {
            if ((h = bJ(a)) && h[ej]) {
                f = h[ej](a, o);
                b = ez(b)
            } else {
                f = a.currentStyle;
                e = q;
                b = ey(b)
            }
            if (f) {
                if (b) {
                    if (e) {
                        c = f[b] || o;
                        if (/(%|em|ex)$/i [z](c)) {
                            l = br(bM, a[bg]);
                            i = /html|body/ [z](by(a)) ? a[bO] : a;
                            bc(l, i[P], i);
                            l[Q][Y] = c;
                            c = l[Q].pixelLeft + bM;
                            cp(l)
                        }
                    } else c = f.getPropertyValue(b)
                } else {
                    if (!(c = f.cssText || o)) U(f, function (name, val) {
                        if (/[a-z]/i [z](name) && val && ba(val)) c += ez(name) + ': ' + val + '; '
                    }, q)
                }
            }
        }
        return d ? ck(eB(c) || 0) : c
    }
    function bV(b, d, c) {
        var e = document,
            f = S('head', e, 0) || e[Z],
            h = br(cZ, e);

        function l(a) {
            fb[bB] && fb[bB] < 8 ? h[c ? 'text' : 'src'] = o : h = cp(h);
            cm(fb, 'cbk');
            cm(fb, 'jsGet');
            if (cM(d)) d(a)
        }
        if (c) {
            fb.cbk = function (a) {
                l(a)
            };
            g.VR = fa[t](dx(b), er);
            b = b[t](/\\/g, '\\\\')[t](/"/g, '\\"')[t](/[\n\r]+/g, '\\n');
            b = '//<![CDATA[\nfb.cbk(eval("' + b + '"))//]]>';
            if (!bc(e.createTextNode(b), h)) h.text = b
        } else {
            fb.jsGet = dr(b[C](bl)[1]);
            h.onload = h[cC] = function () {
                if (h[P] && /^$|complete|loaded/ [z](this.readyState || o)) {
                    this.onload = this[cC] = u;
                    l()
                }
            };
            h.async = q;
            h.src = b
        }
        bc(h, f, f[bO])
    }
    function fq(b) {
        var d = 'XMLHttpRequest',
            c = 'Msxml2.XMLHTTP',
            e, f;

        function h(a) {
            cM(a) ? a(e) : ba(a) ? bV(a, u, q) : 0
        }
        if (self[d]) e = new self[d];
        else {
            f = q;
            try {
                e = new ActiveXObject(c + '.6.0')
            } catch (_) {
                try {
                    e = new ActiveXObject(c)
                } catch (_) {}
            }
        }
        if (e && b && (b[bA] = b[bA] || b.url || b.uri || b.href)) {
            var l = b[bA],
                i = b.postData || u,
                j = b.async !== G,
                n = x(b.updateNode);
            if (b.cacheable === G) l += (bo(l, bl) ? '&' : bl) + 'no_cache=' + eA();
            try {
                e.open(i ? 'POST' : 'GET', l, j);
                e[de]('X-Requested-With', d);
                if (i) {
                    i = eL(i) || i;
                    e[de]('Content-Type', 'application/x-www-form-urlencoded')
                }
                if (bx(b.headers)) U(b.headers, function (key, val) {
                    e[de](key, val)
                });
                if (b.timeout) b.T3 = J(bb(e.abort), +b.timeout);
                e[cC] = function (a) {
                    if (e.readyState == 4) {
                        a = e.status;
                        cN(b.T3);
                        if (a >= 200 && a < 300 || a == 304 || a == 1223) {
                            if (n) eI(n, e.responseText, q, q, !b.addDiv);
                            h(b.success)
                        } else if (a) h(b.failure);
                        h(b.finish || b.callback);
                        if (!f) e[cC] = u;
                        e = n = u
                    }
                };
                e.send(i)
            } catch (_) {
                h(b.failure)
            }
            return e
        }
    }
    function eM(a) {
        var b = {}, d = {}, c = 0,
            e, f, h, l;
        a = document.forms[a] || x(a);
        if (by(a) == 'form') {
            e = a.elements;
            while (c < e[s]) {
                var i = e[c++],
                    j = by(i),
                    n = i.type[bn](),
                    p = i.name,
                    w = i[cB];
                if (p && !i.disabled) {
                    if (j == 'input') {
                        if (!/file|image|reset|submit|button/ [z](n)) {
                            if (n == 'radio') {
                                if (d[p]) p = u;
                                else {
                                    d[p] = q;
                                    f = a[p];
                                    l = f[s];
                                    while (l--) {
                                        h = f[l];
                                        if (h.checked) {
                                            w = h[cB];
                                            break
                                        }
                                    }
                                    if (l == -1) p = u
                                }
                            } else if (n == 'checkbox') i.checked ? w = w || ca : p = u;
                            if (p) dE(b, p, w)
                        }
                    } else if (j == 'select') {
                        f = i[cf];
                        l = 0;
                        while (l < f[s]) {
                            h = f[l++];
                            if (h.selected) dE(b, p, eN(h, cB) ? h[cB] : h.text)
                        }
                    } else if (j == 'textarea') b[p] = w
                }
            }
        }
        return b
    }
    function eL(d) {
        var c = o,
            e = [],
            f = encodeURIComponent,
            h;
        if (d) {
            if (ba(d)) d = document.forms[d] || x(d);
            if (by(d) == 'form') d = eM(d);
            if (bx(d)) {
                U(d, function (a, b) {
                    if (!bF(b)) b = [b];
                    h = 0;
                    while (h < b[s]) e[B](f(a) + '=' + f(b[h++]))
                });
                c = e.join('&')[t](/%20/g, '+')
            }
        }
        return c
    }
    function dr(a) {
        var b = {}, d = 0,
            c, e;
        if (a && ba(a)) {
            c = dz(a)[t](/\+/g, '%20')[C]('&');
            while (d < c[s]) {
                e = c[d++][C]('=');
                e[0] = cn(e[0], q);
                e[1] = cn(e[1], q);
                dE(b, e[0], e[1] || o)
            }
        }
        return b
    }
    function fr(a) {
        var b = arguments;
        if (!bx(a)) {
            a = {
                source: b[0],
                width: b[1],
                height: b[2],
                params: b[3],
                node: b[4],
                id: b[5],
                altContent: b[6],
                minVersion: b[7]
            }
        }
        if (a[bA] = a[bA] || a.url || a.uri || a.href) {
            var d = x(a.node),
                c = document,
                e = (!d || d[cd] != 1) && S(cZ, c, -1);
            if (e) {
                d = br('span', c);
                d[Q][bv] = dR;
                bc(d, e[P], e)
            }
            g.H.ZG[B](H(a, {
                XM: q,
                Z: g.Z,
                P: bk(d)
            }));
            bU(cb, g.H.ZG)
        }
    }
    function bH(e, f) {
        if (!fb[bC]) return J(bb(bH, e, f), 80);
        if (!bi(e = x(e))) {
            bI(function (a, b) {
                a.fb.activate(a[I].body, b)
            });
            return
        }
        var h = bJ(e),
            l = O();
        if (!h.fb) h = l;
        if (h != self) return h.fb.activate(e, f);
        if (f) dG(f);

        function i(a) {
            var b = a.U,
                d = b[s],
                c;
            while (d--) {
                if (b[d] != a.T) {
                    c = b[d];
                    if (!cQ(c.Z, c.G)) b.splice(d, 1)
                }
            }
        }
        cS(i);
        i(g);
        var j = cs((E[eo] || dS)[C]('|'), e[P] || e),
            n = j[s],
            p;
        while (n--) {
            p = j[n];
            if (!/^a(rea)?$/ [z](by(p))) {
                var w = T(p),
                    y = S('a', p)[bQ](S(cz, p)),
                    bd = y[s],
                    be, M;
                w.V6 = p[bf];
                while (bd--) {
                    be = y[bd];
                    if (!o0[z](be[bf] + X + K(be, da))) {
                        M = H({}, w, T(be));
                        K(be, dT, eE(M))
                    }
                }
            }
        }
        var A = S('a', e)[bQ](S(cz, e)),
            n = 0;
        while (n < A[s]) eF(A[n++], u, G);
        if (g.H.Z3[s]) bU('popup', g.H.Z3);
        if (g.H.ZG[s]) bU(cb, g.H.ZG);
        U({
            cycler: g.H.ZY,
            tooltip: g.H.Y2,
            context: g.H.Y9
        }, function (a, b) {
            A = cs(E[a + 'Class'] || ey('fb-' + a), e);
            if (n = A[s]) {
                while (n--) {
                    b[B]({
                        P: bk(A[n]),
                        Z: g.Z,
                        M: dA(A[n], g)
                    })
                }
                bU(a, b)
            }
        })
    }
    function fs(a) {
        var b = bh[s],
            d, c;
        if (a !== bz) {
            if (cL(a)) c = bh[a];
            while (b-- && !c) {
                if ((d = bh[b]) && d.X && (d.name === a || d == a)) c = d
            }
        }
        return c && c.X ? c : u
    }
    function dB(a) {
        var b = bh[s],
            d, c;
        if (a = x(a)) {
            while (b-- && !c) {
                if ((d = bh[b]) && cU(d.fbBox, a)) c = d
            }
        }
        return c && c.X ? c : u
    }
    function cU(a, b) {
        var d, c;
        if (bi(a = x(a)) && bi(b = x(b))) {
            if (b[cd] == 3) b = b[P];
            a = a[Z] || a;
            b = b[Z] || b;
            d = a == b ? q : (c = b[bg]) && c != a[bg] ? cU(a, dD(c)) : a.contains && a.contains(b) || a[ei] && !! (a[ei](b) & 16) || G
        }
        return d
    }
    function eN(a, b, d) {
        return (a = x(a)) && (d = a.getAttributeNode(b)) && d.specified
    }
    function K(a, b, d) {
        return (a = x(a)) && (d === u ? a.removeAttribute(b) : d === bz ? bG(a.getAttribute(b), o, o) : a.setAttribute(b, d))
    }
    function dv(a) {
        var b = typeof a,
            d = o,
            c;
        if (b == dU) {
            try {
                if (!(a && (a[cH] || a.toString))) d = a ? b : cy
            } catch (_) {
                d = cy
            }
            d = d ? d : a[cH] && a == a.self ? dV : a[cd] && a.cloneNode ? 'node' : (c = /array|string|date|regexp/ [R]({}.toString.call(a)[bn]())) ? c[0] : b
        } else d = b == dW && isNaN(a) ? 'NaN' : b == 'unknown' ? dX : b;
        return d
    }
    function cR(a, b) {
        a = x(a);
        var d = u,
            c, e, f;
        if (by(a) == cc) {
            if (b || a.src && !co(a.src)) d = a.contentWindow || a[eh] && a[eh][cE] || u
        } else d = (c = fb.topInstance) && (e = c.V) && e.L && (f = c[eg]) ? cR(f, b) : u;
        return !d || b || !co(d) ? d : u
    }
    function ft(a, b) {
        return (b = cR(a)) && b[I]
    }
    function cO(a) {
        if (a) {
            var b = O(),
                d = b[I][Z]['client' + a],
                c = D.UB ? d : b['inner' + a] || d
        }
        return a ? c : {
            width: dt(),
            height: du()
        }
    }
    function fu(a) {
        a = a || O();
        return {
            left: cV(a),
            top: cW(a)
        }
    }
    function cV(a) {
        a = a || O();
        var b = a[I][Z],
            d = a.pageXOffset || a[I].body[dd] || b[dd] || 0;
        if (D.ZV && r && r.VX) D.YR ? d -= b.scrollWidth - b.clientWidth : d = -d;
        return d
    }
    function cW(a) {
        a = a || O();
        return a.pageYOffset || a[I].body[dc] || a[I][Z][dc] || 0
    }
    function bY(a, b) {
        var d = cT(0, 0, 0, 0, q);
        if (!(a = x(a)) || a[cd] != 1 || !a[bg]) return d;
        var c = bJ(a),
            e = c[I],
            f = e.body,
            h = e[Z],
            l = by(a),
            i, j, n, p, w, y;
        if (!cU(h, a)) return d;
        if (l == cz) {
            var bd = (bs + a[P].name)[bn](),
                be = S(bN, e),
                M = u,
                A = be[s];
            while (!M && A--) {
                if ((K(be[A], 'usemap') + o)[bn]() == bd) M = be[A]
            }
            if (!(bd && M)) return d;
            var V = [0, 0, 0, 0],
                cr = bY(M, b),
                bW = K(a, 'shape')[bn](),
                F = K(a, 'coords')[t](/\s+/g, o)[C](','),
                A = F[s];
            while (A--) F[A] = +F[A];
            if (bW == 'rect') V = [F[0], F[1], F[2], F[3]];
            else if (bW == 'circle') V = [F[0] - F[2], F[1] - F[2], F[0] + F[2], F[1] + F[2]];
            else if (bW == 'poly') {
                var cX = cK(),
                    ct = cX,
                    cu = cX,
                    dH = 0,
                    dI = 0,
                    A = F[s];
                while (A--) {
                    m = F[A];
                    if (A % 2) {
                        cu = cK(cu, m);
                        dI = ex(dI, m)
                    } else {
                        ct = cK(ct, m);
                        dH = ex(dH, m)
                    }
                }
                if (ct == cX) ct = 0;
                if (cu == cX) cu = 0;
                V = [ct, cu, dH, dI]
            }
            return cT(cr[Y] + L(M, dY, q) + L(M, ea, q) + V[0], cr.top + L(M, dZ, q) + L(M, eb, q) + V[1], V[2] - V[0], V[3] - V[1], q)
        }
        if (a == h && f) return bY(f, b);
        if (a[ef]) {
            i = a[ef]();
            j = i[Y];
            n = i.top;
            p = i.right - i[Y];
            w = i[dg] - i.top;
            if (D.YR) {
                j -= h.clientLeft;
                n -= h.clientTop
            }
        } else {
            j = a.offsetLeft - cV(c);
            n = a.offsetTop - cW(c);
            y = a;
            while (y = y.offsetParent) {
                j += y.offsetLeft - y[dd];
                n += y.offsetTop - y[dc]
            }
            p = a.offsetWidth;
            w = a.offsetHeight
        }
        if (!b) {
            var bK = dD(e),
                dJ;
            if (bK) {
                dJ = bY(bK);
                j += dJ[Y];
                n += dJ.top;
                if (D.ZV) {
                    m = eY(K(bK, 'frameBorder')) ? 2 : 0;
                    j += m;
                    n += m
                }
                if (!D.YR) {
                    j += L(bK, dY, q);
                    n += L(bK, dZ, q)
                }
                j += L(bK, ea, q);
                n += L(bK, eb, q)
            }
        }
        return cT(ck(j), ck(n), ck(p), ck(w), q)
    }
    function eO(a, b) {
        if (!a) eP(eO);
        else if (b = r && r.N.cycler) {
            dK(a);
            a.Y3.go = r.ZX(bb(b.T6, a), b.U6(a) * 600)
        }
    }
    function dK(a) {
        a ? cN(a.Y3.go) : eP(dK)
    }
    function eP(d) {
        var c = bh[s],
            e, f;
        bI(function (a, b) {
            if (e = b.ZY) d(e)
        });
        while (c--) {
            if ((f = bh[c]) && (e = f.ZY)) d(e)
        }
    }
    self.fb = {
        version: '5.6.1',
        build: '2012-12-27',
        data: g,
        proto: {},
        $: x,
        DOMReady: eJ,
        addEvent: W,
        removeEvent: bX,
        stopEvent: dC,
        setInnerHTML: bT,
        getOuterHTML: fo,
        encodeHTML: fp,
        decodeHTML: dz,
        extend: H,
        forEach: U,
        executeJS: bV,
        ajax: fq,
        getFormValues: eM,
        serialize: eL,
        deserialize: dr,
        flashObject: fr,
        getElementsByClassName: cs,
        getStyle: L,
        activate: bH,
        tagAnchors: bH,
        activateElements: bH,
        getInstance: fs,
        ownerInstance: dB,
        nodeContains: cU,
        hasAttribute: eN,
        attr: K,
        typeOf: dv,
        getIframeWindow: cR,
        getIframeDocument: ft,
        getViewport: cO,
        getViewportWidth: dt,
        getViewportHeight: du,
        getDisplaySize: cO,
        getDisplayWidth: dt,
        getDisplayHeight: du,
        getScroll: fu,
        getScrollLeft: cV,
        getScrollTop: cW,
        getLayout: bY,
        cycleGo: eO,
        cycleStop: dK,
        start: cP,
        loadAnchor: fj,
        end: fc,
        resize: fd,
        reload: fe,
        goBack: ff,
        pause: fg,
        showItem: fh,
        printNode: fi,
        preload: eC
    };
    self.fb$ = x;
    if (!(fb[bB] = document.documentMode || 0)) {
        var bL = br(),
            eQ = '<!--[if IE]><div id="',
            eR = '"></div><![endif]-->',
            dL = 'fb_ie',
            eS = dL + 6;
        bT(bL, eQ + dL + eR);
        if (bL[bO] && bL[bO].id == dL) {
            bT(bL, eQ[t]('IE', 'lt IE 7') + eS + eR);
            fb[bB] = bL[bO] && bL[bO].id == eS ? 6 : 7
        }
        cp(bL)
    }
    if (bp) {
        dn = document.compatMode == 'BackCompat';
        g.V1 = eu;
        J(function () {
            if (!(fb[bC] || fb[cf] || fb[bS] && fb[bS][cG])) {
                g.V1 = ew;
                bV(ew + '?v=' + fb.version)
            }
        }, 10)
    }
    eJ(function fv(p) {
        if (dn) return eZ('Floatbox does not support quirks mode.\nThis page needs a valid doctype.');
        if (bp && !(fb[cf] || fb[bS] && fb[bS][cG]) || !bp && !(parent.fb && parent.fb[bC])) return J(fv, 50);
        fk();
        p = document;
        W(p, 'mousedown', w, g.ZZ);
        W(p, db, w, g.ZZ, q);
        W(p, ec, w, g.ZZ);

        function w(a) {
            if (r && r.X) {
                var b = this,
                    d = a[ce],
                    c = d && d[0] || a,
                    e = c.clientX || 0,
                    f = c.clientY || 0,
                    h, l, i, j, n;
                if (d) {
                    D.A = q;
                    if (d[1]) r.I = {};
                    else if (c[bP]) {
                        h = (c.pageX || e) - cV(b[cE]);
                        l = (c.pageY || f) - cW(b[cE]);
                        if (r.WK) r.WK(c[bP]);
                        if (r.X7) r.X7(c[bP])
                    }
                } else if (a.type == ec) {
                    i = a.keyCode || a.which;
                    if (i == 13) {
                        j = bY(a[bP], q);
                        h = j[Y] + j[bu] / 2;
                        l = j.top + j[bt] / 2
                    }
                    if (i == 27 && r.X7) r.X7()
                } else {
                    D.A = G;
                    if (r.I.Z7 != db || D.UI) {
                        h = e;
                        l = f
                    }
                }
                if (cL(h)) {
                    if (n = dD(b)) {
                        j = bY(n);
                        h += j[Y];
                        l += j.top
                    }
                    r.I = {
                        x0: e,
                        y0: f,
                        x: h,
                        y: l,
                        Z7: a.type
                    };
                    if (E && E.activateOnClick) bH();
                    cN(r.WL);
                    r.WL = J(function () {
                        try {
                            r.I = {}
                        } catch (_) {}
                    }, 999)
                }
            }
        }
        W(p, 'touchmove', y, g.ZZ, q);
        W(p, 'mousemove', y, g.ZZ, q);

        function y(a) {
            if (r.I.Z7) {
                var b = r.I.x0,
                    d = r.I.y0,
                    c = a[ce] && a[ce][0] || a;
                b -= c.clientX || 0;
                d -= c.clientY || 0;
                if (b * b + d * d > 25) r.I = {}
            }
        }
        p = u;
        g.ZE ? J(bb(cP, g.ZE), 60) : D.XJ && r.W.ZI.showIE6EndOfLife ? bV(ev + 'ie6eol.js') : 0
    });
    if (document[cD]) document[cD](ed, dw, G);
    if (fb[bB] && fb[bB] < 9) {
        (function fw() {
            try {
                document.body.doScroll(Y);
                cJ = q
            } catch (_) {}
            cJ ? dw() : J(fw, 33)
        })();
        document.write('<xml:namespace ns="urn:schemas-microsoft-com:vml" prefix="v">')
    }
    W(self, 'load', function fx() {
        dw();
        if (!dn) {
            if (!(document.body && fb[bC])) return J(fx, 99);
            if (bp) {
                var a = [eU, ci + 'black/loader.gif'];
                if (E.shadowType != cA) {
                    var b = E.shadowSize || 12,
                        d = bG(E.boxCornerRadius, bG(E.cornerRadius, 12)),
                        c = ci + 's' + b + '_r' + d + '_',
                        e = '.png';
                    a = a[bQ]([c + 'top' + e, c + 'right' + e, c + ee + e, c[t]('_r' + d, '_r' + 0) + ee + e, c + dg + e, c + Y + e])
                }
                J(bb(eC, a, u, q), 99)
            }
        }
    }, g.ZZ);
    W(self, 'unload', function (a) {
        cN(r && r.WL);
        while (a = g && g.ZZ && g.ZZ.pop()) {
            try {
                bX(a)
            } catch (_) {}
        }
        if (bp) cS(function (box) {
            box.X8()
        });
        dG(g)
    }, g.ZZ)
})(!0, !1, null);