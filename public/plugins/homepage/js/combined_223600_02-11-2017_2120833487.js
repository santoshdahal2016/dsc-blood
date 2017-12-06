/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
function MouseWheelHandler(e, t, r) {
    "use strict";

    function n(e) {
        var n = 0;
        e || (e = window.event), e.wheelDelta ? n = e.wheelDelta / 120 : e.detail && (n = -e.detail / 3), n && (a && t(n, e), r && (o && clearInterval(o), a = !1, o = setInterval(i, 30)))
    }

    function i() {
        a = !0
    }

    var o, s = {}, a = !0;
    return e.addEventListener(HM.MouseEvent.MOUSE_WHEEL, n, !1), s.kill = function () {
        e.removeEventListener(HM.MouseEvent.MOUSE_WHEEL, n, !1)
    }, s
}

function AudioController() {
    "use strict";
    var e = this, t = document.querySelector("#backgroundMusic"),
        r = document.querySelector("#backgroundMusicFiltered");
    e.muted = !1;
    return e.startMusic = function () {
        console.log(" start music"), t.load(), t.play(), r.load(), r.play()
    }, e.fadeInFilter = function () {
        e.fade(0, r.initVolume)
    }, e.fadeOutFilter = function () {
        e.fade(t.initVolume, 0)
    }, e.fadeInAll = function (n) {
        e.fade(t.initVolume, r.initVolume, n)
    }, e.fadeOutAll = function (t, r, n) {
        e.fade(t || 0, r || 0, n)
    }, e.fade = function (n, i, o) {
        var o = o >= 0 ? o : 1;
        e.muted ? (TweenMax.to(t, o, {mutedVolume: n}), TweenMax.to(r, o, {mutedVolume: i})) : (TweenMax.to(t, o, {volume: n}), TweenMax.to(r, o, {volume: i}))
    }, e.mute = function () {
        e.muted || (t.mutedVolume = t.volume, t.volume = 0, r.mutedVolume = r.volume, r.volume = 0, e.muted = !0, Globals.HEADER_MODULE.mute())
    }, e.unmute = function () {
        e.muted && (t.volume = t.mutedVolume, r.volume = r.mutedVolume, e.muted = !1, Globals.HEADER_MODULE.unmute())
    }, function () {
        t.volume = t.initVolume = .1, console.log("audio cotroller init"), r.initVolume = .1, r.volume = 0
    }(), e
}

function ScrollController() {
    "use strict";

    function e(e) {
        t.setWheelDelta(e), t.setPosition(i + u)
    }

    var t = this;
    t.ON_SCROLL = "on_scroll";
    var r, n, i = 0, o = 0, s = {top: 0, bottom: 0}, a = !0, l = !1, u = 0, h = 0;
    return t.start = function () {
        n = MouseWheelHandler(document.body, e)
    }, t.setWheelDelta = function (e) {
        h = u, u = 18 * -e, r = u - h >= 0
    }, t.getWheelDelta = function (e) {
        return u
    }, t.setPosition = function (e, n, h) {
        (a || n) && (l && !n || (o = i, i = e.clamp(s.top, s.bottom)), h || t.trigger(t.ON_SCROLL, {
            position: i,
            delta: u,
            accelerating: r
        }))
    }, t.getPosition = function () {
        return i
    }, t.setBoundsTop = function (e) {
        s.top = e
    }, t.setBoundsBottom = function (e) {
        s.bottom = e
    }, t.getDelta = function () {
        return i - o
    }, t.getBounds = function () {
        return s
    }, t.getScrollProgress = function () {
        return i / s.bottom
    }, t.isAccelerating = function () {
        return r
    }, t.enable = function () {
        a = !0
    }, t.disable = function () {
        t.setWheelDelta(0), a = !1
    }, t.isEnabled = function () {
        return a
    }, t.lock = function () {
        t.setWheelDelta(0), l = !0
    }, t.unlock = function () {
        l = !1
    }, t.isLocked = function () {
        return l
    }, t.reset = function () {
        i = 0, o = 0, u = 0, s = {top: 0, bottom: 0}
    }, t.kill = function () {
        t.reset(), n.kill()
    }, HM.EventDispatcher.mixin(t), t
}

function AbstractModule(e, t, r) {
    "use strict";
    var n = {};
    return n.element = e, n.name = t, n.template = r, n.killed = !1, n.animatedIn = !1, n.triggers = [], n.requestId, n.offsetTop = function (t) {
        var r;
        for (r = 0; t;) r += t.offsetTop, e = t.offsetParent;
        return r
    }, n.getScrollOffsetY = function () {
        return n.offsetTop(n.element)
    }, n.resize = function () {
        for (var e = n.triggers.length, t = 0; t < e; t++) n.triggers[t].triggered || (n.triggers[t].updateBounds(Globals.SCROLL_CONTROLLER.viewport), n.triggers[t].check(Globals.SCROLL_CONTROLLER.viewport))
    }, n.checkTriggers = function (e) {
        if (n.triggers.length > 0) for (var t = n.triggers.length, r = 0; r < t; r++) n.triggers[r].triggered || n.triggers[r].check(e)
    }, n.addEvents = function () {
    }, n.removeEvents = function () {
    }, n.kill = function () {
        n.killed = !0, n.removeEvents()
    }, HM.EventDispatcher.mixin(n), n
}


function HeaderModule(e, t) {
    "use strict";

    function r(e) {
        return e.preventDefault(), window.history.back(), !1
    }

    function n(e) {
        return e.preventDefault(), Globals.audioController.muted ? Globals.audioController.unmute() : Globals.audioController.mute(), !1
    }

    function i() {
        TweenMax.to(u, 1.2, {
            h1: 10, ease: Linear.easeNone, repeat: -1, yoyo: !0, onUpdate: function () {
                l.querySelector("#Rectangle").setAttribute("height", u.h1)
            }
        }), TweenMax.to(u, .7, {
            h2: 9, ease: Linear.easeNone, repeat: -1, yoyo: !0, onUpdate: function () {
                l.querySelector("#Rectangle-Copy").setAttribute("height", u.h2)
            }
        }), TweenMax.to(u, .5, {
            h3: 1, ease: Linear.easeNone, repeat: -1, yoyo: !0, onUpdate: function () {
                l.querySelector("#Rectangle-Copy-2").setAttribute("height", u.h3)
            }
        }), TweenMax.to(u, .9, {
            h4: 8, ease: Linear.easeNone, repeat: -1, yoyo: !0, onUpdate: function () {
                l.querySelector("#Rectangle-Copy-3").setAttribute("height", u.h4)
            }
        })
    }

    var o = HM.extend(AbstractModule, [e]), s = e.querySelector(".backToStories"), a = e.querySelector(".back"),
        l = e.querySelector(".soundToggle"), u = {h1: 2, h2: 5, h3: 7, h4: 4};
    return o.showBackToStories = function () {
        s.style.display = "inline-flex"
    }, o.hideBackToStories = function () {
        s.style.display = "none"
    }, o.showBack = function () {
        a.style.display = "inline-flex"
    }, o.hideBack = function () {
        a.style.display = "none"
    }, o.transitionIn = function () {
        TweenMax.to(e, 1, {autoAlpha: 1, delay: 0})
    }, o.mute = function () {
        l.classList.add("mute")
    }, o.unmute = function () {
        l.classList.remove("mute")
    }, function () {
        a.addEventListener(HM.MouseEvent.CLICK, r), l.addEventListener(HM.MouseEvent.CLICK, n), i()
    }(), o
}



function IntroTextModule(e, t) {
    "use strict";

    function r() {
        h.transitionOutIntroText()
    }

    var n, i, o, s, a, l = HM.extend(AbstractModule, [e]), u = [], h = t;
    return l.override("addEvents", function () {
        o && o.addEventListener("click", r)
    }), l.override("removeEvents", function () {
        o && o.removeEventListener("click", r)
    }), l.show = function () {
        e.style.display = "block"
    }, l.hide = function () {
        e.style.display = "none"
    }, l.transitionIn = function (t) {
        l.splitText(), a = new TimelineMax, TweenMax.to([s, o], 3, {opacity: 1, delay: .2}), i.style.opacity = 1;
        for (var r = 0; r < n.lines.length; r++) {
            var h = 20 + 20 * r;
            a.from(n.lines[r], 5, {y: h}, 0)
        }
        for (var r = 0; r < u.length; r++) a.staggerFrom(u[r], 1.5, {opacity: 0, delay: .5 * r}, .04, 0);
        TweenMax.delayedCall(4, l.transitionInComplete, [t]), e.querySelector("q").style.display = "block"
    }, l.transitionInComplete = function (e) {
        e && e()
    }, l.transitionOut = function (e) {
        TweenMax.killTweensOf([s, o]), a.kill(), TweenMax.killAll(!1, !1, !0, !1), TweenMax.to([s, o], 1, {opacity: 0});
        for (var t = new TimelineMax, r = 0; r < u.length; r++) t.staggerTo(u[r], .3, {
            opacity: 0,
            delay: .2 * r
        }, .01, 0);
        TweenMax.delayedCall(3, l.transitionOutComplete, [e])
    }, l.transitionOutComplete = function (e) {
        l.hide(), e && e()
    }, l.splitText = function () {
        u = [], n = new SplitText(e.querySelector("q"), {type: "chars, lines"});
        for (var t = 0; t < n.lines.length; t++) {
            var r = n.lines[t].querySelectorAll("div"), i = reorderArray(r, Math.floor(3 * Math.random()));
            u.push(i)
        }
    }, l.override("resize", function () {
        l._super.resize()
    }), l.override("kill", function () {
        TweenMax.killDelayedCallsTo(l.transitionInComplete), TweenMax.killDelayedCallsTo(l.transitionOutComplete), l._super.kill()
    }), function () {
        i = e.querySelector(".textContainer"), s = e.querySelector(".subhead"), o = e.querySelector(".skip"), o && (BrowserDetect.MOBILE || BrowserDetect.TABLET) && (o.innerHTML = "SKIP"), l.addEvents()
    }(), l
}

function LoaderTextModule(e) {
    "use strict";

    function t(e) {
        return e.preventDefault(), n.trigger("enter_site"), !1
    }

    var r, n = HM.extend(AbstractModule, [e]), i = e.querySelector(".footnote"), o = e.querySelector(".subhead"),
        s = e.querySelector(".button-corner"), a = e.querySelector(".button-corner-wrapper");
    return n.transitionIn = function () {
        TweenMax.to(e, 1, {opacity: 1}), TweenMax.to(i, 2, {opacity: 1, delay: 3}), TweenMax.from(i, 2, {
            y: 20,
            delay: 3
        }), TweenMax.to(a, 1, {opacity: 1, delay: 4}), r.transitionIn(), Globals.audioController.startMusic()
    }, n.transitionOut = function (t) {
        r.transitionOut(), s.style.pointerEvents = "none", TweenMax.to(i, .5, {
            opacity: 0,
            delay: 0
        }), TweenMax.to(s, .5, {opacity: 0, delay: 0}), TweenMax.to(e, .8, {
            opacity: 0,
            delay: 1,
            onComplete: function () {
                n.transitionOutComplete(), t && t()
            }
        })
    }, n.transitionOutComplete = function () {
        Globals.HEADER_MODULE.transitionIn(), e.style.display = "none", n.kill()
    }, n.showEnterButton = function () {
        TweenMax.to(s, 1, {opacity: 1}), o.innerHTML = "in my world"
    }, n.override("kill", function () {
        r.kill(), n._super.kill()
    }), function () {
        r = new IntroTextModule(e.querySelector(".IntroTextModule"), n), s.addEventListener(HM.MouseEvent.CLICK, t)
    }(), n
}


function AbstractTemplate(e) {
    "use strict";

    function t() {
        for (var e = n.length, t = 0; t < e; t++) HM.LinkParser.parse(n[t])
    }

    var r = {};
    r.element = e, r.requestId, r.killed = !1;
    var n = e.querySelectorAll("a");
    return r.templateIn = function () {
        Globals.TEMPLATE_LAYER.appendChild(e), r.templateInComplete()
    }, r.templateInComplete = function () {
        HM.TemplateManager.nextTemplate()
    }, r.templateOut = function () {
        r.templateOutComplete()
    }, r.templateOutComplete = function () {
        Globals.TEMPLATE_LAYER.removeChild(e), r.kill(), HM.TemplateManager.nextTemplate()
    }, r.animate = function () {
        r.requestId = window.requestAnimationFrame(r.animate)
    }, r.stopAnimation = function () {
        r.requestId && window.cancelAnimationFrame(r.requestId)
    }, r.addEvents = function () {
    }, r.removeEvents = function () {
    }, r.kill = function () {
        r.killed = !1, r.stopAnimation(), r.removeEvents()
    }, r.resize = function () {
    }, HM.EventDispatcher.mixin(r), function () {
        t()
    }(), r
}

function HomeTemplate(e) {
    "use strict";

    function t() {
        r.trigger(Globals.LOAD_COMPLETE)
    }

    var r = HM.extend(AbstractTemplate, [e]), n = e.querySelector(".blackRectangle");
    return r.carousel, r.override("templateIn", function () {
        HM.TemplateManager.isInitialLoad() || r.transitionIn(), r._super.templateIn()
    }), r.transitionIn = function () {
        TweenMax.to(n, 1, {
            opacity: 0, onComplete: function () {
                n.style.display = "none"
            }
        }), r.animate(), r.resize()
    }, r.override("templateOut", function () {
        HM.TemplateManager.isTemplate("about") || HM.TemplateManager.isTemplate("take-action") ? TweenMax.to(e, 1, {
            opacity: 0,
            onComplete: function () {
                r._super.templateOut()
            }
        }) : r.carousel.transitionOut(r._super.templateOut)
    }), r.override("resize", function () {
        r._super.resize(), r.carousel && r.carousel.resize()
    }), r.override("animate", function () {
    }), r.override("kill", function () {
        r.carousel && r.carousel.kill(), r._super.kill()
    }), function () {
      
    }(), r
}


function getImageURL(e) {
    var t = e.getAttribute("data-img-mobile"), r = e.getAttribute("data-img");
    return BrowserDetect.MOBILE && t ? t : r
}

function getStyle(e, t) {
    var r = window.getComputedStyle(e)[t];
    return r.indexOf("px") >= 0 && (r = parseInt(r, 10)), r
}

function getOffset(e) {
    return e = e.getBoundingClientRect(), {left: e.left + window.scrollX, top: e.top + window.scrollY}
}

function closest(e, t) {
    return t(e) ? e : e && closest(e.parentNode, t)
}

function isDescendant(e, t) {
    for (var r = t.parentNode; null != r;) {
        if (r == e) return !0;
        r = r.parentNode
    }
    return !1
}

function getElementIndex(e) {
    for (var t = 0; e = e.previousElementSibling;) t++;
    return t
}

function shuffle(e) {
    for (var t, r, n = e.length; 0 !== n;) r = Math.floor(Math.random() * n), n -= 1, t = e[n], e[n] = e[r], e[r] = t;
    return e
}

function reorderArray(e, t) {
    var r, n = [];
    switch (t) {
        case 0:
            n = e;
            break;
        case 1:
            for (r = 0; r < e.length; r++) n.unshift(e[r]);
            break;
        case 2:
            r = Math.ceil(e.length / 2);
            for (var i = r - 1; i >= 0;) n.push(e[i--]), r < e.length && n.push(e[r++])
    }
    return n
}

!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";

    function r(e, t) {
        t = t || re;
        var r = t.createElement("script");
        r.text = e, t.head.appendChild(r).parentNode.removeChild(r)
    }

    function n(e) {
        var t = !!e && "length" in e && e.length, r = ge.type(e);
        return "function" !== r && !ge.isWindow(e) && ("array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function i(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function o(e, t, r) {
        return ge.isFunction(t) ? ge.grep(e, function (e, n) {
            return !!t.call(e, n, e) !== r
        }) : t.nodeType ? ge.grep(e, function (e) {
            return e === t !== r
        }) : "string" != typeof t ? ge.grep(e, function (e) {
            return ae.call(t, e) > -1 !== r
        }) : Te.test(t) ? ge.filter(t, e, r) : (t = ge.filter(t, e), ge.grep(e, function (e) {
            return ae.call(t, e) > -1 !== r && 1 === e.nodeType
        }))
    }

    function s(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    function a(e) {
        var t = {};
        return ge.each(e.match(Oe) || [], function (e, r) {
            t[r] = !0
        }), t
    }

    function l(e) {
        return e
    }

    function u(e) {
        throw e
    }

    function h(e, t, r, n) {
        var i;
        try {
            e && ge.isFunction(i = e.promise) ? i.call(e).done(t).fail(r) : e && ge.isFunction(i = e.then) ? i.call(e, t, r) : t.apply(void 0, [e].slice(n))
        } catch (e) {
            r.apply(void 0, [e])
        }
    }

    function c() {
        re.removeEventListener("DOMContentLoaded", c), e.removeEventListener("load", c), ge.ready()
    }

    function d() {
        this.expando = ge.expando + d.uid++
    }

    function f(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Le.test(e) ? JSON.parse(e) : e)
    }

    function p(e, t, r) {
        var n;
        if (void 0 === r && 1 === e.nodeType) if (n = "data-" + t.replace(ke, "-$&").toLowerCase(), "string" == typeof(r = e.getAttribute(n))) {
            try {
                r = f(r)
            } catch (e) {
            }
            De.set(e, t, r)
        } else r = void 0;
        return r
    }

    function g(e, t, r, n) {
        var i, o = 1, s = 20, a = n ? function () {
                return n.cur()
            } : function () {
                return ge.css(e, t, "")
            }, l = a(), u = r && r[3] || (ge.cssNumber[t] ? "" : "px"),
            h = (ge.cssNumber[t] || "px" !== u && +l) && Fe.exec(ge.css(e, t));
        if (h && h[3] !== u) {
            u = u || h[3], r = r || [], h = +l || 1;
            do {
                o = o || ".5", h /= o, ge.style(e, t, h + u)
            } while (o !== (o = a() / l) && 1 !== o && --s)
        }
        return r && (h = +h || +l || 0, i = r[1] ? h + (r[1] + 1) * r[2] : +r[2], n && (n.unit = u, n.start = h, n.end = i)), i
    }

    function v(e) {
        var t, r = e.ownerDocument, n = e.nodeName, i = He[n];
        return i || (t = r.body.appendChild(r.createElement(n)), i = ge.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), He[n] = i, i)
    }

    function m(e, t) {
        for (var r, n, i = [], o = 0, s = e.length; o < s; o++) n = e[o], n.style && (r = n.style.display, t ? ("none" === r && (i[o] = Ie.get(n, "display") || null, i[o] || (n.style.display = "")), "" === n.style.display && je(n) && (i[o] = v(n))) : "none" !== r && (i[o] = "none", Ie.set(n, "display", r)));
        for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }

    function y(e, t) {
        var r;
        return r = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && i(e, t) ? ge.merge([e], r) : r
    }

    function _(e, t) {
        for (var r = 0, n = e.length; r < n; r++) Ie.set(e[r], "globalEval", !t || Ie.get(t[r], "globalEval"))
    }

    function b(e, t, r, n, i) {
        for (var o, s, a, l, u, h, c = t.createDocumentFragment(), d = [], f = 0, p = e.length; f < p; f++) if ((o = e[f]) || 0 === o) if ("object" === ge.type(o)) ge.merge(d, o.nodeType ? [o] : o); else if (ze.test(o)) {
            for (s = s || c.appendChild(t.createElement("div")), a = (Xe.exec(o) || ["", ""])[1].toLowerCase(), l = qe[a] || qe._default, s.innerHTML = l[1] + ge.htmlPrefilter(o) + l[2], h = l[0]; h--;) s = s.lastChild;
            ge.merge(d, s.childNodes), s = c.firstChild, s.textContent = ""
        } else d.push(t.createTextNode(o));
        for (c.textContent = "", f = 0; o = d[f++];) if (n && ge.inArray(o, n) > -1) i && i.push(o); else if (u = ge.contains(o.ownerDocument, o), s = y(c.appendChild(o), "script"), u && _(s), r) for (h = 0; o = s[h++];) We.test(o.type || "") && r.push(o);
        return c
    }

    function x() {
        return !0
    }

    function T() {
        return !1
    }

    function w() {
        try {
            return re.activeElement
        } catch (e) {
        }
    }

    function E(e, t, r, n, i, o) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof r && (n = n || r, r = void 0);
            for (a in t) E(e, a, r, n, t[a], o);
            return e
        }
        if (null == n && null == i ? (i = r, n = r = void 0) : null == i && ("string" == typeof r ? (i = n, n = void 0) : (i = n, n = r, r = void 0)), !1 === i) i = T; else if (!i) return e;
        return 1 === o && (s = i, i = function (e) {
            return ge().off(e), s.apply(this, arguments)
        }, i.guid = s.guid || (s.guid = ge.guid++)), e.each(function () {
            ge.event.add(this, t, i, n, r)
        })
    }

    function S(e, t) {
        return i(e, "table") && i(11 !== t.nodeType ? t : t.firstChild, "tr") ? ge(">tbody", e)[0] || e : e
    }

    function M(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function O(e) {
        var t = Je.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function C(e, t) {
        var r, n, i, o, s, a, l, u;
        if (1 === t.nodeType) {
            if (Ie.hasData(e) && (o = Ie.access(e), s = Ie.set(t, o), u = o.events)) {
                delete s.handle, s.events = {};
                for (i in u) for (r = 0, n = u[i].length; r < n; r++) ge.event.add(t, i, u[i][r])
            }
            De.hasData(e) && (a = De.access(e), l = ge.extend({}, a), De.set(t, l))
        }
    }

    function P(e, t) {
        var r = t.nodeName.toLowerCase();
        "input" === r && Ge.test(e.type) ? t.checked = e.checked : "input" !== r && "textarea" !== r || (t.defaultValue = e.defaultValue)
    }

    function A(e, t, n, i) {
        t = oe.apply([], t);
        var o, s, a, l, u, h, c = 0, d = e.length, f = d - 1, p = t[0], g = ge.isFunction(p);
        if (g || d > 1 && "string" == typeof p && !fe.checkClone && Qe.test(p)) return e.each(function (r) {
            var o = e.eq(r);
            g && (t[0] = p.call(this, r, o.html())), A(o, t, n, i)
        });
        if (d && (o = b(t, e[0].ownerDocument, !1, e, i), s = o.firstChild, 1 === o.childNodes.length && (o = s), s || i)) {
            for (a = ge.map(y(o, "script"), M), l = a.length; c < d; c++) u = o, c !== f && (u = ge.clone(u, !0, !0), l && ge.merge(a, y(u, "script"))), n.call(e[c], u, c);
            if (l) for (h = a[a.length - 1].ownerDocument, ge.map(a, O), c = 0; c < l; c++) u = a[c], We.test(u.type || "") && !Ie.access(u, "globalEval") && ge.contains(h, u) && (u.src ? ge._evalUrl && ge._evalUrl(u.src) : r(u.textContent.replace(et, ""), h))
        }
        return e
    }

    function R(e, t, r) {
        for (var n, i = t ? ge.filter(t, e) : e, o = 0; null != (n = i[o]); o++) r || 1 !== n.nodeType || ge.cleanData(y(n)), n.parentNode && (r && ge.contains(n.ownerDocument, n) && _(y(n, "script")), n.parentNode.removeChild(n));
        return e
    }

    function I(e, t, r) {
        var n, i, o, s, a = e.style;
        return r = r || nt(e), r && (s = r.getPropertyValue(t) || r[t], "" !== s || ge.contains(e.ownerDocument, e) || (s = ge.style(e, t)), !fe.pixelMarginRight() && rt.test(s) && tt.test(t) && (n = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = r.width, a.width = n, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function D(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function L(e) {
        if (e in ut) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), r = lt.length; r--;) if ((e = lt[r] + t) in ut) return e
    }

    function k(e) {
        var t = ge.cssProps[e];
        return t || (t = ge.cssProps[e] = L(e) || e), t
    }

    function N(e, t, r) {
        var n = Fe.exec(t);
        return n ? Math.max(0, n[2] - (r || 0)) + (n[3] || "px") : t
    }

    function F(e, t, r, n, i) {
        var o, s = 0;
        for (o = r === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === r && (s += ge.css(e, r + Be[o], !0, i)), n ? ("content" === r && (s -= ge.css(e, "padding" + Be[o], !0, i)), "margin" !== r && (s -= ge.css(e, "border" + Be[o] + "Width", !0, i))) : (s += ge.css(e, "padding" + Be[o], !0, i), "padding" !== r && (s += ge.css(e, "border" + Be[o] + "Width", !0, i)));
        return s
    }

    function B(e, t, r) {
        var n, i = nt(e), o = I(e, t, i), s = "border-box" === ge.css(e, "boxSizing", !1, i);
        return rt.test(o) ? o : (n = s && (fe.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + F(e, t, r || (s ? "border" : "content"), n, i) + "px")
    }

    function j(e, t, r, n, i) {
        return new j.prototype.init(e, t, r, n, i)
    }

    function U() {
        ct && (!1 === re.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(U) : e.setTimeout(U, ge.fx.interval), ge.fx.tick())
    }

    function H() {
        return e.setTimeout(function () {
            ht = void 0
        }), ht = ge.now()
    }

    function G(e, t) {
        var r, n = 0, i = {height: e};
        for (t = t ? 1 : 0; n < 4; n += 2 - t) r = Be[n], i["margin" + r] = i["padding" + r] = e;
        return t && (i.opacity = i.width = e), i
    }

    function X(e, t, r) {
        for (var n, i = (z.tweeners[t] || []).concat(z.tweeners["*"]), o = 0, s = i.length; o < s; o++) if (n = i[o].call(r, t, e)) return n
    }

    function W(e, t, r) {
        var n, i, o, s, a, l, u, h, c = "width" in t || "height" in t, d = this, f = {}, p = e.style,
            g = e.nodeType && je(e), v = Ie.get(e, "fxshow");
        r.queue || (s = ge._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
            s.unqueued || a()
        }), s.unqueued++, d.always(function () {
            d.always(function () {
                s.unqueued--, ge.queue(e, "fx").length || s.empty.fire()
            })
        }));
        for (n in t) if (i = t[n], dt.test(i)) {
            if (delete t[n], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                if ("show" !== i || !v || void 0 === v[n]) continue;
                g = !0
            }
            f[n] = v && v[n] || ge.style(e, n)
        }
        if ((l = !ge.isEmptyObject(t)) || !ge.isEmptyObject(f)) {
            c && 1 === e.nodeType && (r.overflow = [p.overflow, p.overflowX, p.overflowY], u = v && v.display, null == u && (u = Ie.get(e, "display")), h = ge.css(e, "display"), "none" === h && (u ? h = u : (m([e], !0), u = e.style.display || u, h = ge.css(e, "display"), m([e]))), ("inline" === h || "inline-block" === h && null != u) && "none" === ge.css(e, "float") && (l || (d.done(function () {
                p.display = u
            }), null == u && (h = p.display, u = "none" === h ? "" : h)), p.display = "inline-block")), r.overflow && (p.overflow = "hidden", d.always(function () {
                p.overflow = r.overflow[0], p.overflowX = r.overflow[1], p.overflowY = r.overflow[2]
            })), l = !1;
            for (n in f) l || (v ? "hidden" in v && (g = v.hidden) : v = Ie.access(e, "fxshow", {display: u}), o && (v.hidden = !g), g && m([e], !0), d.done(function () {
                g || m([e]), Ie.remove(e, "fxshow");
                for (n in f) ge.style(e, n, f[n])
            })), l = X(g ? v[n] : 0, n, d), n in v || (v[n] = l.start, g && (l.end = l.start, l.start = 0))
        }
    }

    function q(e, t) {
        var r, n, i, o, s;
        for (r in e) if (n = ge.camelCase(r), i = t[n], o = e[r], Array.isArray(o) && (i = o[1], o = e[r] = o[0]), r !== n && (e[n] = o, delete e[r]), (s = ge.cssHooks[n]) && "expand" in s) {
            o = s.expand(o), delete e[n];
            for (r in o) r in e || (e[r] = o[r], t[r] = i)
        } else t[n] = i
    }

    function z(e, t, r) {
        var n, i, o = 0, s = z.prefilters.length, a = ge.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (i) return !1;
            for (var t = ht || H(), r = Math.max(0, u.startTime + u.duration - t), n = r / u.duration || 0, o = 1 - n, s = 0, l = u.tweens.length; s < l; s++) u.tweens[s].run(o);
            return a.notifyWith(e, [u, o, r]), o < 1 && l ? r : (l || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1)
        }, u = a.promise({
            elem: e,
            props: ge.extend({}, t),
            opts: ge.extend(!0, {specialEasing: {}, easing: ge.easing._default}, r),
            originalProperties: t,
            originalOptions: r,
            startTime: ht || H(),
            duration: r.duration,
            tweens: [],
            createTween: function (t, r) {
                var n = ge.Tween(e, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(n), n
            },
            stop: function (t) {
                var r = 0, n = t ? u.tweens.length : 0;
                if (i) return this;
                for (i = !0; r < n; r++) u.tweens[r].run(1);
                return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
            }
        }), h = u.props;
        for (q(h, u.opts.specialEasing); o < s; o++) if (n = z.prefilters[o].call(u, e, h, u.opts)) return ge.isFunction(n.stop) && (ge._queueHooks(u.elem, u.opts.queue).stop = ge.proxy(n.stop, n)), n;
        return ge.map(h, X, u), ge.isFunction(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), ge.fx.timer(ge.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u
    }

    function Y(e) {
        return (e.match(Oe) || []).join(" ")
    }

    function V(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function K(e, t, r, n) {
        var i;
        if (Array.isArray(t)) ge.each(t, function (t, i) {
            r || Tt.test(e) ? n(e, i) : K(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, r, n)
        }); else if (r || "object" !== ge.type(t)) n(e, t); else for (i in t) K(e + "[" + i + "]", t[i], r, n)
    }

    function Z(e) {
        return function (t, r) {
            "string" != typeof t && (r = t, t = "*");
            var n, i = 0, o = t.toLowerCase().match(Oe) || [];
            if (ge.isFunction(r)) for (; n = o[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(r)) : (e[n] = e[n] || []).push(r)
        }
    }

    function $(e, t, r, n) {
        function i(a) {
            var l;
            return o[a] = !0, ge.each(e[a] || [], function (e, a) {
                var u = a(t, r, n);
                return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
            }), l
        }

        var o = {}, s = e === Pt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function Q(e, t) {
        var r, n, i = ge.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && ge.extend(!0, e, n), e
    }

    function J(e, t, r) {
        for (var n, i, o, s, a = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
        if (n) for (i in a) if (a[i] && a[i].test(n)) {
            l.unshift(i);
            break
        }
        if (l[0] in r) o = l[0]; else {
            for (i in r) {
                if (!l[0] || e.converters[i + " " + l[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        if (o) return o !== l[0] && l.unshift(o), r[o]
    }

    function ee(e, t, r, n) {
        var i, o, s, a, l, u = {}, h = e.dataTypes.slice();
        if (h[1]) for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
        for (o = h.shift(); o;) if (e.responseFields[o] && (r[e.responseFields[o]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = h.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
            if (!(s = u[l + " " + o] || u["* " + o])) for (i in u) if (a = i.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                !0 === s ? s = u[i] : !0 !== u[i] && (o = a[0], h.unshift(a[1]));
                break
            }
            if (!0 !== s) if (s && e.throws) t = s(t); else try {
                t = s(t)
            } catch (e) {
                return {state: "parsererror", error: s ? e : "No conversion from " + l + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    var te = [], re = e.document, ne = Object.getPrototypeOf, ie = te.slice, oe = te.concat, se = te.push,
        ae = te.indexOf, le = {}, ue = le.toString, he = le.hasOwnProperty, ce = he.toString, de = ce.call(Object),
        fe = {}, pe = "3.2.1", ge = function (e, t) {
            return new ge.fn.init(e, t)
        }, ve = function (e, t) {
            return t.toUpperCase()
        };
    ge.fn = ge.prototype = {
        jquery: pe, constructor: ge, length: 0, toArray: function () {
            return ie.call(this)
        }, get: function (e) {
            return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = ge.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return ge.each(this, e)
        }, map: function (e) {
            return this.pushStack(ge.map(this, function (t, r) {
                return e.call(t, r, t)
            }))
        }, slice: function () {
            return this.pushStack(ie.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, r = +e + (e < 0 ? t : 0);
            return this.pushStack(r >= 0 && r < t ? [this[r]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: se, sort: te.sort, splice: te.splice
    }, ge.extend = ge.fn.extend = function () {
        var e, t, r, n, i, o, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || ge.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++) if (null != (e = arguments[a])) for (t in e) r = s[t], n = e[t], s !== n && (u && n && (ge.isPlainObject(n) || (i = Array.isArray(n))) ? (i ? (i = !1, o = r && Array.isArray(r) ? r : []) : o = r && ge.isPlainObject(r) ? r : {}, s[t] = ge.extend(u, o, n)) : void 0 !== n && (s[t] = n));
        return s
    }, ge.extend({
        expando: "jQuery" + (pe + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === ge.type(e)
        }, isWindow: function (e) {
            return null != e && e === e.window
        }, isNumeric: function (e) {
            var t = ge.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, isPlainObject: function (e) {
            var t, r;
            return !(!e || "[object Object]" !== ue.call(e) || (t = ne(e)) && ("function" != typeof(r = he.call(t, "constructor") && t.constructor) || ce.call(r) !== de))
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ue.call(e)] || "object" : typeof e
        }, globalEval: function (e) {
            r(e)
        }, camelCase: function (e) {
            return e.replace(/^-ms-/, "ms-").replace(/-([a-z])/g, ve)
        }, each: function (e, t) {
            var r, i = 0;
            if (n(e)) for (r = e.length; i < r && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        }, makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ge.merge(r, "string" == typeof e ? [e] : e) : se.call(r, e)), r
        }, inArray: function (e, t, r) {
            return null == t ? -1 : ae.call(t, e, r)
        }, merge: function (e, t) {
            for (var r = +t.length, n = 0, i = e.length; n < r; n++) e[i++] = t[n];
            return e.length = i, e
        }, grep: function (e, t, r) {
            for (var n = [], i = 0, o = e.length, s = !r; i < o; i++) !t(e[i], i) !== s && n.push(e[i]);
            return n
        }, map: function (e, t, r) {
            var i, o, s = 0, a = [];
            if (n(e)) for (i = e.length; s < i; s++) null != (o = t(e[s], s, r)) && a.push(o); else for (s in e) null != (o = t(e[s], s, r)) && a.push(o);
            return oe.apply([], a)
        }, guid: 1, proxy: function (e, t) {
            var r, n, i;
            if ("string" == typeof t && (r = e[t], t = e, e = r), ge.isFunction(e)) return n = ie.call(arguments, 2), i = function () {
                return e.apply(t || this, n.concat(ie.call(arguments)))
            }, i.guid = e.guid = e.guid || ge.guid++, i
        }, now: Date.now, support: fe
    }), "function" == typeof Symbol && (ge.fn[Symbol.iterator] = te[Symbol.iterator]), ge.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        le["[object " + t + "]"] = t.toLowerCase()
    });
    var me = function (e) {
        function t(e, t, r, n) {
            var i, o, s, a, l, h, d, f = t && t.ownerDocument, p = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return r;
            if (!n && ((t ? t.ownerDocument || t : j) !== R && A(t), t = t || R, D)) {
                if (11 !== p && (l = ge.exec(e))) if (i = l[1]) {
                    if (9 === p) {
                        if (!(s = t.getElementById(i))) return r;
                        if (s.id === i) return r.push(s), r
                    } else if (f && (s = f.getElementById(i)) && F(t, s) && s.id === i) return r.push(s), r
                } else {
                    if (l[2]) return Z.apply(r, t.getElementsByTagName(e)), r;
                    if ((i = l[3]) && b.getElementsByClassName && t.getElementsByClassName) return Z.apply(r, t.getElementsByClassName(i)), r
                }
                if (b.qsa && !W[e + " "] && (!L || !L.test(e))) {
                    if (1 !== p) f = t, d = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(_e, be) : t.setAttribute("id", a = B), h = E(e), o = h.length; o--;) h[o] = "#" + a + " " + c(h[o]);
                        d = h.join(","), f = ve.test(e) && u(t.parentNode) || t
                    }
                    if (d) try {
                        return Z.apply(r, f.querySelectorAll(d)), r
                    } catch (e) {
                    } finally {
                        a === B && t.removeAttribute("id")
                    }
                }
            }
            return M(e.replace(oe, "$1"), t, r, n)
        }

        function r() {
            function e(r, n) {
                return t.push(r + " ") > x.cacheLength && delete e[t.shift()], e[r + " "] = n
            }

            var t = [];
            return e
        }

        function n(e) {
            return e[B] = !0, e
        }

        function i(e) {
            var t = R.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var r = e.split("|"), n = r.length; n--;) x.attrHandle[r[n]] = t
        }

        function s(e, t) {
            var r = t && e, n = r && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (n) return n;
            if (r) for (; r = r.nextSibling;) if (r === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function l(e) {
            return n(function (t) {
                return t = +t, n(function (r, n) {
                    for (var i, o = e([], r.length, t), s = o.length; s--;) r[i = o[s]] && (r[i] = !(n[i] = r[i]))
                })
            })
        }

        function u(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function h() {
        }

        function c(e) {
            for (var t = 0, r = e.length, n = ""; t < r; t++) n += e[t].value;
            return n
        }

        function d(e, t, r) {
            var n = t.dir, i = t.next, o = i || n, s = r && "parentNode" === o, a = H++;
            return t.first ? function (t, r, i) {
                for (; t = t[n];) if (1 === t.nodeType || s) return e(t, r, i);
                return !1
            } : function (t, r, l) {
                var u, h, c, d = [U, a];
                if (l) {
                    for (; t = t[n];) if ((1 === t.nodeType || s) && e(t, r, l)) return !0
                } else for (; t = t[n];) if (1 === t.nodeType || s) if (c = t[B] || (t[B] = {}), h = c[t.uniqueID] || (c[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[n] || t; else {
                    if ((u = h[o]) && u[0] === U && u[1] === a) return d[2] = u[2];
                    if (h[o] = d, d[2] = e(t, r, l)) return !0
                }
                return !1
            }
        }

        function f(e) {
            return e.length > 1 ? function (t, r, n) {
                for (var i = e.length; i--;) if (!e[i](t, r, n)) return !1;
                return !0
            } : e[0]
        }

        function p(e, r, n) {
            for (var i = 0, o = r.length; i < o; i++) t(e, r[i], n);
            return n
        }

        function g(e, t, r, n, i) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++) (o = e[a]) && (r && !r(o, n, i) || (s.push(o), u && t.push(a)));
            return s
        }

        function v(e, t, r, i, o, s) {
            return i && !i[B] && (i = v(i)), o && !o[B] && (o = v(o, s)), n(function (n, s, a, l) {
                var u, h, c, d = [], f = [], v = s.length, m = n || p(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !n && t ? m : g(m, d, e, a, l), _ = r ? o || (n ? e : v || i) ? [] : s : y;
                if (r && r(y, _, a, l), i) for (u = g(_, f), i(u, [], a, l), h = u.length; h--;) (c = u[h]) && (_[f[h]] = !(y[f[h]] = c));
                if (n) {
                    if (o || e) {
                        if (o) {
                            for (u = [], h = _.length; h--;) (c = _[h]) && u.push(y[h] = c);
                            o(null, _ = [], u, l)
                        }
                        for (h = _.length; h--;) (c = _[h]) && (u = o ? Q(n, c) : d[h]) > -1 && (n[u] = !(s[u] = c))
                    }
                } else _ = g(_ === s ? _.splice(v, _.length) : _), o ? o(null, s, _, l) : Z.apply(s, _)
            })
        }

        function m(e) {
            for (var t, r, n, i = e.length, o = x.relative[e[0].type], s = o || x.relative[" "], a = o ? 1 : 0, l = d(function (e) {
                return e === t
            }, s, !0), u = d(function (e) {
                return Q(t, e) > -1
            }, s, !0), h = [function (e, r, n) {
                var i = !o && (n || r !== O) || ((t = r).nodeType ? l(e, r, n) : u(e, r, n));
                return t = null, i
            }]; a < i; a++) if (r = x.relative[e[a].type]) h = [d(f(h), r)]; else {
                if (r = x.filter[e[a].type].apply(null, e[a].matches), r[B]) {
                    for (n = ++a; n < i && !x.relative[e[n].type]; n++) ;
                    return v(a > 1 && f(h), a > 1 && c(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(oe, "$1"), r, a < n && m(e.slice(a, n)), n < i && m(e = e.slice(n)), n < i && c(e))
                }
                h.push(r)
            }
            return f(h)
        }

        function y(e, r) {
            var i = r.length > 0, o = e.length > 0, s = function (n, s, a, l, u) {
                var h, c, d, f = 0, p = "0", v = n && [], m = [], y = O, _ = n || o && x.find.TAG("*", u),
                    b = U += null == y ? 1 : Math.random() || .1, T = _.length;
                for (u && (O = s === R || s || u); p !== T && null != (h = _[p]); p++) {
                    if (o && h) {
                        for (c = 0, s || h.ownerDocument === R || (A(h), a = !D); d = e[c++];) if (d(h, s || R, a)) {
                            l.push(h);
                            break
                        }
                        u && (U = b)
                    }
                    i && ((h = !d && h) && f--, n && v.push(h))
                }
                if (f += p, i && p !== f) {
                    for (c = 0; d = r[c++];) d(v, m, s, a);
                    if (n) {
                        if (f > 0) for (; p--;) v[p] || m[p] || (m[p] = V.call(l));
                        m = g(m)
                    }
                    Z.apply(l, m), u && !n && m.length > 0 && f + r.length > 1 && t.uniqueSort(l)
                }
                return u && (U = b, O = y), v
            };
            return i ? n(s) : s
        }

        var _, b, x, T, w, E, S, M, O, C, P, A, R, I, D, L, k, N, F, B = "sizzle" + 1 * new Date, j = e.document, U = 0,
            H = 0, G = r(), X = r(), W = r(), q = function (e, t) {
                return e === t && (P = !0), 0
            }, z = {}.hasOwnProperty, Y = [], V = Y.pop, K = Y.push, Z = Y.push, $ = Y.slice, Q = function (e, t) {
                for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            re = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            ne = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            ie = new RegExp(ee + "+", "g"), oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            se = new RegExp("^" + ee + "*," + ee + "*"), ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), ue = new RegExp(ne),
            he = new RegExp("^" + te + "$"), ce = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + ne),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            }, de = /^(?:input|select|textarea|button)$/i, fe = /^h\d$/i, pe = /^[^{]+\{\s*\[native \w/,
            ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ve = /[+~]/,
            me = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), ye = function (e, t, r) {
                var n = "0x" + t - 65536;
                return n !== n || r ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            }, _e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, be = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, xe = function () {
                A()
            }, Te = d(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {dir: "parentNode", next: "legend"});
        try {
            Z.apply(Y = $.call(j.childNodes), j.childNodes), Y[j.childNodes.length].nodeType
        } catch (e) {
            Z = {
                apply: Y.length ? function (e, t) {
                    K.apply(e, $.call(t))
                } : function (e, t) {
                    for (var r = e.length, n = 0; e[r++] = t[n++];) ;
                    e.length = r - 1
                }
            }
        }
        b = t.support = {}, w = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, A = t.setDocument = function (e) {
            var t, r, n = e ? e.ownerDocument || e : j;
            return n !== R && 9 === n.nodeType && n.documentElement ? (R = n, I = R.documentElement, D = !w(R), j !== R && (r = R.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", xe, !1) : r.attachEvent && r.attachEvent("onunload", xe)), b.attributes = i(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), b.getElementsByTagName = i(function (e) {
                return e.appendChild(R.createComment("")), !e.getElementsByTagName("*").length
            }), b.getElementsByClassName = pe.test(R.getElementsByClassName), b.getById = i(function (e) {
                return I.appendChild(e).id = B, !R.getElementsByName || !R.getElementsByName(B).length
            }), b.getById ? (x.filter.ID = function (e) {
                var t = e.replace(me, ye);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, x.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && D) {
                    var r = t.getElementById(e);
                    return r ? [r] : []
                }
            }) : (x.filter.ID = function (e) {
                var t = e.replace(me, ye);
                return function (e) {
                    var r = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return r && r.value === t
                }
            }, x.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && D) {
                    var r, n, i, o = t.getElementById(e);
                    if (o) {
                        if ((r = o.getAttributeNode("id")) && r.value === e) return [o];
                        for (i = t.getElementsByName(e), n = 0; o = i[n++];) if ((r = o.getAttributeNode("id")) && r.value === e) return [o]
                    }
                    return []
                }
            }), x.find.TAG = b.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var r, n = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; r = o[i++];) 1 === r.nodeType && n.push(r);
                    return n
                }
                return o
            }, x.find.CLASS = b.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && D) return t.getElementsByClassName(e)
            }, k = [], L = [], (b.qsa = pe.test(R.querySelectorAll)) && (i(function (e) {
                I.appendChild(e).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || L.push("\\[" + ee + "*(?:value|" + J + ")"), e.querySelectorAll("[id~=" + B + "-]").length || L.push("~="), e.querySelectorAll(":checked").length || L.push(":checked"), e.querySelectorAll("a#" + B + "+*").length || L.push(".#.+[+~]")
            }), i(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = R.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && L.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && L.push(":enabled", ":disabled"), I.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:")
            })), (b.matchesSelector = pe.test(N = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && i(function (e) {
                b.disconnectedMatch = N.call(e, "*"), N.call(e, "[s!='']:x"), k.push("!=", ne)
            }), L = L.length && new RegExp(L.join("|")), k = k.length && new RegExp(k.join("|")), t = pe.test(I.compareDocumentPosition), F = t || pe.test(I.contains) ? function (e, t) {
                var r = 9 === e.nodeType ? e.documentElement : e, n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(r.contains ? r.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, q = t ? function (e, t) {
                if (e === t) return P = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !b.sortDetached && t.compareDocumentPosition(e) === r ? e === R || e.ownerDocument === j && F(j, e) ? -1 : t === R || t.ownerDocument === j && F(j, t) ? 1 : C ? Q(C, e) - Q(C, t) : 0 : 4 & r ? -1 : 1)
            } : function (e, t) {
                if (e === t) return P = !0, 0;
                var r, n = 0, i = e.parentNode, o = t.parentNode, a = [e], l = [t];
                if (!i || !o) return e === R ? -1 : t === R ? 1 : i ? -1 : o ? 1 : C ? Q(C, e) - Q(C, t) : 0;
                if (i === o) return s(e, t);
                for (r = e; r = r.parentNode;) a.unshift(r);
                for (r = t; r = r.parentNode;) l.unshift(r);
                for (; a[n] === l[n];) n++;
                return n ? s(a[n], l[n]) : a[n] === j ? -1 : l[n] === j ? 1 : 0
            }, R) : R
        }, t.matches = function (e, r) {
            return t(e, null, null, r)
        }, t.matchesSelector = function (e, r) {
            if ((e.ownerDocument || e) !== R && A(e), r = r.replace(le, "='$1']"), b.matchesSelector && D && !W[r + " "] && (!k || !k.test(r)) && (!L || !L.test(r))) try {
                var n = N.call(e, r);
                if (n || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (e) {
            }
            return t(r, R, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== R && A(e), F(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== R && A(e);
            var r = x.attrHandle[t.toLowerCase()],
                n = r && z.call(x.attrHandle, t.toLowerCase()) ? r(e, t, !D) : void 0;
            return void 0 !== n ? n : b.attributes || !D ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }, t.escape = function (e) {
            return (e + "").replace(_e, be)
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, r = [], n = 0, i = 0;
            if (P = !b.detectDuplicates, C = !b.sortStable && e.slice(0), e.sort(q), P) {
                for (; t = e[i++];) t === e[i] && (n = r.push(i));
                for (; n--;) e.splice(r[n], 1)
            }
            return C = null, e
        }, T = t.getText = function (e) {
            var t, r = "", n = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) r += T(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[n++];) r += T(t);
            return r
        }, x = t.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: ce,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(me, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(me, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, r = !e[6] && e[2];
                    return ce.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : r && ue.test(r) && (t = E(r, !0)) && (t = r.indexOf(")", r.length - t) - r.length) && (e[0] = e[0].slice(0, t), e[2] = r.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(me, ye).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = G[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && G(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, r, n) {
                    return function (i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === r : !r || (o += "", "=" === r ? o === n : "!=" === r ? o !== n : "^=" === r ? n && 0 === o.indexOf(n) : "*=" === r ? n && o.indexOf(n) > -1 : "$=" === r ? n && o.slice(-n.length) === n : "~=" === r ? (" " + o.replace(ie, " ") + " ").indexOf(n) > -1 : "|=" === r && (o === n || o.slice(0, n.length + 1) === n + "-"))
                    }
                }, CHILD: function (e, t, r, n, i) {
                    var o = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                    return 1 === n && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, r, l) {
                        var u, h, c, d, f, p, g = o !== s ? "nextSibling" : "previousSibling", v = t.parentNode,
                            m = a && t.nodeName.toLowerCase(), y = !l && !a, _ = !1;
                        if (v) {
                            if (o) {
                                for (; g;) {
                                    for (d = t; d = d[g];) if (a ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                                    p = g = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [s ? v.firstChild : v.lastChild], s && y) {
                                for (d = v, c = d[B] || (d[B] = {}), h = c[d.uniqueID] || (c[d.uniqueID] = {}), u = h[e] || [], f = u[0] === U && u[1], _ = f && u[2], d = f && v.childNodes[f]; d = ++f && d && d[g] || (_ = f = 0) || p.pop();) if (1 === d.nodeType && ++_ && d === t) {
                                    h[e] = [U, f, _];
                                    break
                                }
                            } else if (y && (d = t, c = d[B] || (d[B] = {}), h = c[d.uniqueID] || (c[d.uniqueID] = {}), u = h[e] || [], f = u[0] === U && u[1], _ = f), !1 === _) for (; (d = ++f && d && d[g] || (_ = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++_ || (y && (c = d[B] || (d[B] = {}), h = c[d.uniqueID] || (c[d.uniqueID] = {}), h[e] = [U, _]), d !== t));) ;
                            return (_ -= i) === n || _ % n == 0 && _ / n >= 0
                        }
                    }
                }, PSEUDO: function (e, r) {
                    var i, o = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[B] ? o(r) : o.length > 1 ? (i = [e, e, "", r], x.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function (e, t) {
                        for (var n, i = o(e, r), s = i.length; s--;) n = Q(e, i[s]), e[n] = !(t[n] = i[s])
                    }) : function (e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: n(function (e) {
                    var t = [], r = [], i = S(e.replace(oe, "$1"));
                    return i[B] ? n(function (e, t, r, n) {
                        for (var o, s = i(e, null, n, []), a = e.length; a--;) (o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function (e, n, o) {
                        return t[0] = e, i(t, null, o, r), t[0] = null, !r.pop()
                    }
                }), has: n(function (e) {
                    return function (r) {
                        return t(e, r).length > 0
                    }
                }), contains: n(function (e) {
                    return e = e.replace(me, ye), function (t) {
                        return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                    }
                }), lang: n(function (e) {
                    return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(me, ye).toLowerCase(), function (t) {
                        var r;
                        do {
                            if (r = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (r = r.toLowerCase()) === e || 0 === r.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var r = e.location && e.location.hash;
                    return r && r.slice(1) === t.id
                }, root: function (e) {
                    return e === I
                }, focus: function (e) {
                    return e === R.activeElement && (!R.hasFocus || R.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: a(!1), disabled: a(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !x.pseudos.empty(e)
                }, header: function (e) {
                    return fe.test(e.nodeName)
                }, input: function (e) {
                    return de.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: l(function () {
                    return [0]
                }), last: l(function (e, t) {
                    return [t - 1]
                }), eq: l(function (e, t, r) {
                    return [r < 0 ? r + t : r]
                }), even: l(function (e, t) {
                    for (var r = 0; r < t; r += 2) e.push(r);
                    return e
                }), odd: l(function (e, t) {
                    for (var r = 1; r < t; r += 2) e.push(r);
                    return e
                }), lt: l(function (e, t, r) {
                    for (var n = r < 0 ? r + t : r; --n >= 0;) e.push(n);
                    return e
                }), gt: l(function (e, t, r) {
                    for (var n = r < 0 ? r + t : r; ++n < t;) e.push(n);
                    return e
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (_ in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) x.pseudos[_] = function (e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(_);
        for (_ in{submit: !0, reset: !0}) x.pseudos[_] = function (e) {
            return function (t) {
                var r = t.nodeName.toLowerCase();
                return ("input" === r || "button" === r) && t.type === e
            }
        }(_);
        return h.prototype = x.filters = x.pseudos, x.setFilters = new h, E = t.tokenize = function (e, r) {
            var n, i, o, s, a, l, u, h = X[e + " "];
            if (h) return r ? 0 : h.slice(0);
            for (a = e, l = [], u = x.preFilter; a;) {
                n && !(i = se.exec(a)) || (i && (a = a.slice(i[0].length) || a), l.push(o = [])), n = !1, (i = ae.exec(a)) && (n = i.shift(), o.push({
                    value: n,
                    type: i[0].replace(oe, " ")
                }), a = a.slice(n.length));
                for (s in x.filter) !(i = ce[s].exec(a)) || u[s] && !(i = u[s](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: s,
                    matches: i
                }), a = a.slice(n.length));
                if (!n) break
            }
            return r ? a.length : a ? t.error(e) : X(e, l).slice(0)
        }, S = t.compile = function (e, t) {
            var r, n = [], i = [], o = W[e + " "];
            if (!o) {
                for (t || (t = E(e)), r = t.length; r--;) o = m(t[r]), o[B] ? n.push(o) : i.push(o);
                o = W(e, y(i, n)), o.selector = e
            }
            return o
        }, M = t.select = function (e, t, r, n) {
            var i, o, s, a, l, h = "function" == typeof e && e, d = !n && E(e = h.selector || e);
            if (r = r || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && 9 === t.nodeType && D && x.relative[o[1].type]) {
                    if (!(t = (x.find.ID(s.matches[0].replace(me, ye), t) || [])[0])) return r;
                    h && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = ce.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !x.relative[a = s.type]);) if ((l = x.find[a]) && (n = l(s.matches[0].replace(me, ye), ve.test(o[0].type) && u(t.parentNode) || t))) {
                    if (o.splice(i, 1), !(e = n.length && c(o))) return Z.apply(r, n), r;
                    break
                }
            }
            return (h || S(e, d))(n, t, !D, r, !t || ve.test(e) && u(t.parentNode) || t), r
        }, b.sortStable = B.split("").sort(q).join("") === B, b.detectDuplicates = !!P, A(), b.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(R.createElement("fieldset"))
        }), i(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, r) {
            if (!r) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), b.attributes && i(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, r) {
            if (!r && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), i(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(J, function (e, t, r) {
            var n;
            if (!r) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), t
    }(e);
    ge.find = me, ge.expr = me.selectors, ge.expr[":"] = ge.expr.pseudos, ge.uniqueSort = ge.unique = me.uniqueSort, ge.text = me.getText, ge.isXMLDoc = me.isXML, ge.contains = me.contains, ge.escapeSelector = me.escape;
    var ye = function (e, t, r) {
            for (var n = [], i = void 0 !== r; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                if (i && ge(e).is(r)) break;
                n.push(e)
            }
            return n
        }, _e = function (e, t) {
            for (var r = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && r.push(e);
            return r
        }, be = ge.expr.match.needsContext, xe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Te = /^.[^:#\[\.,]*$/;
    ge.filter = function (e, t, r) {
        var n = t[0];
        return r && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? ge.find.matchesSelector(n, e) ? [n] : [] : ge.find.matches(e, ge.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, ge.fn.extend({
        find: function (e) {
            var t, r, n = this.length, i = this;
            if ("string" != typeof e) return this.pushStack(ge(e).filter(function () {
                for (t = 0; t < n; t++) if (ge.contains(i[t], this)) return !0
            }));
            for (r = this.pushStack([]), t = 0; t < n; t++) ge.find(e, i[t], r);
            return n > 1 ? ge.uniqueSort(r) : r
        }, filter: function (e) {
            return this.pushStack(o(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(o(this, e || [], !0))
        }, is: function (e) {
            return !!o(this, "string" == typeof e && be.test(e) ? ge(e) : e || [], !1).length
        }
    });
    var we, Ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (ge.fn.init = function (e, t, r) {
        var n, i;
        if (!e) return this;
        if (r = r || we, "string" == typeof e) {
            if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ee.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || r).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof ge ? t[0] : t, ge.merge(this, ge.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : re, !0)), xe.test(n[1]) && ge.isPlainObject(t)) for (n in t) ge.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return i = re.getElementById(n[2]), i && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : ge.isFunction(e) ? void 0 !== r.ready ? r.ready(e) : e(ge) : ge.makeArray(e, this)
    }).prototype = ge.fn, we = ge(re);
    var Se = /^(?:parents|prev(?:Until|All))/, Me = {children: !0, contents: !0, next: !0, prev: !0};
    ge.fn.extend({
        has: function (e) {
            var t = ge(e, this), r = t.length;
            return this.filter(function () {
                for (var e = 0; e < r; e++) if (ge.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var r, n = 0, i = this.length, o = [], s = "string" != typeof e && ge(e);
            if (!be.test(e)) for (; n < i; n++) for (r = this[n]; r && r !== t; r = r.parentNode) if (r.nodeType < 11 && (s ? s.index(r) > -1 : 1 === r.nodeType && ge.find.matchesSelector(r, e))) {
                o.push(r);
                break
            }
            return this.pushStack(o.length > 1 ? ge.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? ae.call(ge(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(ge.uniqueSort(ge.merge(this.get(), ge(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ge.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return ye(e, "parentNode")
        }, parentsUntil: function (e, t, r) {
            return ye(e, "parentNode", r)
        }, next: function (e) {
            return s(e, "nextSibling")
        }, prev: function (e) {
            return s(e, "previousSibling")
        }, nextAll: function (e) {
            return ye(e, "nextSibling")
        }, prevAll: function (e) {
            return ye(e, "previousSibling")
        }, nextUntil: function (e, t, r) {
            return ye(e, "nextSibling", r)
        }, prevUntil: function (e, t, r) {
            return ye(e, "previousSibling", r)
        }, siblings: function (e) {
            return _e((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return _e(e.firstChild)
        }, contents: function (e) {
            return i(e, "iframe") ? e.contentDocument : (i(e, "template") && (e = e.content || e), ge.merge([], e.childNodes))
        }
    }, function (e, t) {
        ge.fn[e] = function (r, n) {
            var i = ge.map(this, t, r);
            return "Until" !== e.slice(-5) && (n = r), n && "string" == typeof n && (i = ge.filter(n, i)), this.length > 1 && (Me[e] || ge.uniqueSort(i), Se.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var Oe = /[^\x20\t\r\n\f]+/g;
    ge.Callbacks = function (e) {
        e = "string" == typeof e ? a(e) : ge.extend({}, e);
        var t, r, n, i, o = [], s = [], l = -1, u = function () {
            for (i = i || e.once, n = t = !0; s.length; l = -1) for (r = s.shift(); ++l < o.length;) !1 === o[l].apply(r[0], r[1]) && e.stopOnFalse && (l = o.length, r = !1);
            e.memory || (r = !1), t = !1, i && (o = r ? [] : "")
        }, h = {
            add: function () {
                return o && (r && !t && (l = o.length - 1, s.push(r)), function t(r) {
                    ge.each(r, function (r, n) {
                        ge.isFunction(n) ? e.unique && h.has(n) || o.push(n) : n && n.length && "string" !== ge.type(n) && t(n)
                    })
                }(arguments), r && !t && u()), this
            }, remove: function () {
                return ge.each(arguments, function (e, t) {
                    for (var r; (r = ge.inArray(t, o, r)) > -1;) o.splice(r, 1), r <= l && l--
                }), this
            }, has: function (e) {
                return e ? ge.inArray(e, o) > -1 : o.length > 0
            }, empty: function () {
                return o && (o = []), this
            }, disable: function () {
                return i = s = [], o = r = "", this
            }, disabled: function () {
                return !o
            }, lock: function () {
                return i = s = [], r || t || (o = r = ""), this
            }, locked: function () {
                return !!i
            }, fireWith: function (e, r) {
                return i || (r = r || [], r = [e, r.slice ? r.slice() : r], s.push(r), t || u()), this
            }, fire: function () {
                return h.fireWith(this, arguments), this
            }, fired: function () {
                return !!n
            }
        };
        return h
    }, ge.extend({
        Deferred: function (t) {
            var r = [["notify", "progress", ge.Callbacks("memory"), ge.Callbacks("memory"), 2], ["resolve", "done", ge.Callbacks("once memory"), ge.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ge.Callbacks("once memory"), ge.Callbacks("once memory"), 1, "rejected"]],
                n = "pending", i = {
                    state: function () {
                        return n
                    }, always: function () {
                        return o.done(arguments).fail(arguments), this
                    }, catch: function (e) {
                        return i.then(null, e)
                    }, pipe: function () {
                        var e = arguments;
                        return ge.Deferred(function (t) {
                            ge.each(r, function (r, n) {
                                var i = ge.isFunction(e[n[4]]) && e[n[4]];
                                o[n[1]](function () {
                                    var e = i && i.apply(this, arguments);
                                    e && ge.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[n[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, then: function (t, n, i) {
                        function o(t, r, n, i) {
                            return function () {
                                var a = this, h = arguments, c = function () {
                                    var e, c;
                                    if (!(t < s)) {
                                        if ((e = n.apply(a, h)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                        c = e && ("object" == typeof e || "function" == typeof e) && e.then, ge.isFunction(c) ? i ? c.call(e, o(s, r, l, i), o(s, r, u, i)) : (s++, c.call(e, o(s, r, l, i), o(s, r, u, i), o(s, r, l, r.notifyWith))) : (n !== l && (a = void 0, h = [e]), (i || r.resolveWith)(a, h))
                                    }
                                }, d = i ? c : function () {
                                    try {
                                        c()
                                    } catch (e) {
                                        ge.Deferred.exceptionHook && ge.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= s && (n !== u && (a = void 0, h = [e]), r.rejectWith(a, h))
                                    }
                                };
                                t ? d() : (ge.Deferred.getStackHook && (d.stackTrace = ge.Deferred.getStackHook()), e.setTimeout(d))
                            }
                        }

                        var s = 0;
                        return ge.Deferred(function (e) {
                            r[0][3].add(o(0, e, ge.isFunction(i) ? i : l, e.notifyWith)), r[1][3].add(o(0, e, ge.isFunction(t) ? t : l)), r[2][3].add(o(0, e, ge.isFunction(n) ? n : u))
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? ge.extend(e, i) : i
                    }
                }, o = {};
            return ge.each(r, function (e, t) {
                var s = t[2], a = t[5];
                i[t[1]] = s.add, a && s.add(function () {
                    n = a
                }, r[3 - e][2].disable, r[0][2].lock), s.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = s.fireWith
            }), i.promise(o), t && t.call(o, o), o
        }, when: function (e) {
            var t = arguments.length, r = t, n = Array(r), i = ie.call(arguments), o = ge.Deferred(), s = function (e) {
                return function (r) {
                    n[e] = this, i[e] = arguments.length > 1 ? ie.call(arguments) : r, --t || o.resolveWith(n, i)
                }
            };
            if (t <= 1 && (h(e, o.done(s(r)).resolve, o.reject, !t), "pending" === o.state() || ge.isFunction(i[r] && i[r].then))) return o.then();
            for (; r--;) h(i[r], s(r), o.reject);
            return o.promise()
        }
    });
    var Ce = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ge.Deferred.exceptionHook = function (t, r) {
        e.console && e.console.warn && t && Ce.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, r)
    }, ge.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var Pe = ge.Deferred();
    ge.fn.ready = function (e) {
        return Pe.then(e).catch(function (e) {
            ge.readyException(e)
        }), this
    }, ge.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --ge.readyWait : ge.isReady) || (ge.isReady = !0, !0 !== e && --ge.readyWait > 0 || Pe.resolveWith(re, [ge]))
        }
    }), ge.ready.then = Pe.then, "complete" === re.readyState || "loading" !== re.readyState && !re.documentElement.doScroll ? e.setTimeout(ge.ready) : (re.addEventListener("DOMContentLoaded", c), e.addEventListener("load", c));
    var Ae = function (e, t, r, n, i, o, s) {
        var a = 0, l = e.length, u = null == r;
        if ("object" === ge.type(r)) {
            i = !0;
            for (a in r) Ae(e, t, a, r[a], !0, o, s)
        } else if (void 0 !== n && (i = !0, ge.isFunction(n) || (s = !0), u && (s ? (t.call(e, n), t = null) : (u = t, t = function (e, t, r) {
                return u.call(ge(e), r)
            })), t)) for (; a < l; a++) t(e[a], r, s ? n : n.call(e[a], a, t(e[a], r)));
        return i ? e : u ? t.call(e) : l ? t(e[0], r) : o
    }, Re = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    d.uid = 1, d.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, Re(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, r) {
            var n, i = this.cache(e);
            if ("string" == typeof t) i[ge.camelCase(t)] = r; else for (n in t) i[ge.camelCase(n)] = t[n];
            return i
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][ge.camelCase(t)]
        }, access: function (e, t, r) {
            return void 0 === t || t && "string" == typeof t && void 0 === r ? this.get(e, t) : (this.set(e, t, r), void 0 !== r ? r : t)
        }, remove: function (e, t) {
            var r, n = e[this.expando];
            if (void 0 !== n) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(ge.camelCase) : (t = ge.camelCase(t), t = t in n ? [t] : t.match(Oe) || []), r = t.length;
                    for (; r--;) delete n[t[r]]
                }
                (void 0 === t || ge.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !ge.isEmptyObject(t)
        }
    };
    var Ie = new d, De = new d, Le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ke = /[A-Z]/g;
    ge.extend({
        hasData: function (e) {
            return De.hasData(e) || Ie.hasData(e)
        }, data: function (e, t, r) {
            return De.access(e, t, r)
        }, removeData: function (e, t) {
            De.remove(e, t)
        }, _data: function (e, t, r) {
            return Ie.access(e, t, r)
        }, _removeData: function (e, t) {
            Ie.remove(e, t)
        }
    }), ge.fn.extend({
        data: function (e, t) {
            var r, n, i, o = this[0], s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = De.get(o), 1 === o.nodeType && !Ie.get(o, "hasDataAttrs"))) {
                    for (r = s.length; r--;) s[r] && (n = s[r].name, 0 === n.indexOf("data-") && (n = ge.camelCase(n.slice(5)), p(o, n, i[n])));
                    Ie.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                De.set(this, e)
            }) : Ae(this, function (t) {
                var r;
                if (o && void 0 === t) {
                    if (void 0 !== (r = De.get(o, e))) return r;
                    if (void 0 !== (r = p(o, e))) return r
                } else this.each(function () {
                    De.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                De.remove(this, e)
            })
        }
    }), ge.extend({
        queue: function (e, t, r) {
            var n;
            if (e) return t = (t || "fx") + "queue", n = Ie.get(e, t), r && (!n || Array.isArray(r) ? n = Ie.access(e, t, ge.makeArray(r)) : n.push(r)), n || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var r = ge.queue(e, t), n = r.length, i = r.shift(), o = ge._queueHooks(e, t), s = function () {
                ge.dequeue(e, t)
            };
            "inprogress" === i && (i = r.shift(), n--), i && ("fx" === t && r.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !n && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var r = t + "queueHooks";
            return Ie.get(e, r) || Ie.access(e, r, {
                empty: ge.Callbacks("once memory").add(function () {
                    Ie.remove(e, [t + "queue", r])
                })
            })
        }
    }), ge.fn.extend({
        queue: function (e, t) {
            var r = 2;
            return "string" != typeof e && (t = e, e = "fx", r--), arguments.length < r ? ge.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var r = ge.queue(this, e, t);
                ge._queueHooks(this, e), "fx" === e && "inprogress" !== r[0] && ge.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                ge.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var r, n = 1, i = ge.Deferred(), o = this, s = this.length, a = function () {
                --n || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) (r = Ie.get(o[s], e + "queueHooks")) && r.empty && (n++, r.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var Ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Fe = new RegExp("^(?:([+-])=|)(" + Ne + ")([a-z%]*)$", "i"),
        Be = ["Top", "Right", "Bottom", "Left"], je = function (e, t) {
            return e = t || e, "none" === e.style.display || "" === e.style.display && ge.contains(e.ownerDocument, e) && "none" === ge.css(e, "display")
        }, Ue = function (e, t, r, n) {
            var i, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            i = r.apply(e, n || []);
            for (o in t) e.style[o] = s[o];
            return i
        }, He = {};
    ge.fn.extend({
        show: function () {
            return m(this, !0)
        }, hide: function () {
            return m(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                je(this) ? ge(this).show() : ge(this).hide()
            })
        }
    });
    var Ge = /^(?:checkbox|radio)$/i, Xe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, We = /^$|\/(?:java|ecma)script/i, qe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    qe.optgroup = qe.option, qe.tbody = qe.tfoot = qe.colgroup = qe.caption = qe.thead, qe.th = qe.td;
    var ze = /<|&#?\w+;/;
    !function () {
        var e = re.createDocumentFragment(), t = e.appendChild(re.createElement("div")), r = re.createElement("input");
        r.setAttribute("type", "radio"), r.setAttribute("checked", "checked"), r.setAttribute("name", "t"), t.appendChild(r), fe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", fe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ye = re.documentElement, Ve = /^key/, Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ze = /^([^.]*)(?:\.(.+)|)/;
    ge.event = {
        global: {}, add: function (e, t, r, n, i) {
            var o, s, a, l, u, h, c, d, f, p, g, v = Ie.get(e);
            if (v) for (r.handler && (o = r, r = o.handler, i = o.selector), i && ge.find.matchesSelector(Ye, i), r.guid || (r.guid = ge.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function (t) {
                return void 0 !== ge && ge.event.triggered !== t.type ? ge.event.dispatch.apply(e, arguments) : void 0
            }), t = (t || "").match(Oe) || [""], u = t.length; u--;) a = Ze.exec(t[u]) || [], f = g = a[1], p = (a[2] || "").split(".").sort(), f && (c = ge.event.special[f] || {}, f = (i ? c.delegateType : c.bindType) || f, c = ge.event.special[f] || {}, h = ge.extend({
                type: f,
                origType: g,
                data: n,
                handler: r,
                guid: r.guid,
                selector: i,
                needsContext: i && ge.expr.match.needsContext.test(i),
                namespace: p.join(".")
            }, o), (d = l[f]) || (d = l[f] = [], d.delegateCount = 0, c.setup && !1 !== c.setup.call(e, n, p, s) || e.addEventListener && e.addEventListener(f, s)), c.add && (c.add.call(e, h), h.handler.guid || (h.handler.guid = r.guid)), i ? d.splice(d.delegateCount++, 0, h) : d.push(h), ge.event.global[f] = !0)
        }, remove: function (e, t, r, n, i) {
            var o, s, a, l, u, h, c, d, f, p, g, v = Ie.hasData(e) && Ie.get(e);
            if (v && (l = v.events)) {
                for (t = (t || "").match(Oe) || [""], u = t.length; u--;) if (a = Ze.exec(t[u]) || [], f = g = a[1], p = (a[2] || "").split(".").sort(), f) {
                    for (c = ge.event.special[f] || {}, f = (n ? c.delegateType : c.bindType) || f, d = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) h = d[o], !i && g !== h.origType || r && r.guid !== h.guid || a && !a.test(h.namespace) || n && n !== h.selector && ("**" !== n || !h.selector) || (d.splice(o, 1), h.selector && d.delegateCount--, c.remove && c.remove.call(e, h));
                    s && !d.length && (c.teardown && !1 !== c.teardown.call(e, p, v.handle) || ge.removeEvent(e, f, v.handle), delete l[f])
                } else for (f in l) ge.event.remove(e, f + t[u], r, n, !0);
                ge.isEmptyObject(l) && Ie.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t, r, n, i, o, s, a = ge.event.fix(e), l = new Array(arguments.length),
                u = (Ie.get(this, "events") || {})[a.type] || [], h = ge.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, a)) {
                for (s = ge.event.handlers.call(this, a, u), t = 0; (i = s[t++]) && !a.isPropagationStopped();) for (a.currentTarget = i.elem, r = 0; (o = i.handlers[r++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (n = ((ge.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, a), a.result
            }
        }, handlers: function (e, t) {
            var r, n, i, o, s, a = [], l = t.delegateCount, u = e.target;
            if (l && u.nodeType && !("click" === e.type && e.button >= 1)) for (; u !== this; u = u.parentNode || this) if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                for (o = [], s = {}, r = 0; r < l; r++) n = t[r], i = n.selector + " ", void 0 === s[i] && (s[i] = n.needsContext ? ge(i, this).index(u) > -1 : ge.find(i, this, null, [u]).length), s[i] && o.push(n);
                o.length && a.push({elem: u, handlers: o})
            }
            return u = this, l < t.length && a.push({elem: u, handlers: t.slice(l)}), a
        }, addProp: function (e, t) {
            Object.defineProperty(ge.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: ge.isFunction(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                }
            })
        }, fix: function (e) {
            return e[ge.expando] ? e : new ge.Event(e)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== w() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === w() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && i(this, "input")) return this.click(), !1
                }, _default: function (e) {
                    return i(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, ge.removeEvent = function (e, t, r) {
        e.removeEventListener && e.removeEventListener(t, r)
    }, ge.Event = function (e, t) {
        return this instanceof ge.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? x : T, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ge.extend(this, t), this.timeStamp = e && e.timeStamp || ge.now(), void(this[ge.expando] = !0)) : new ge.Event(e, t)
    }, ge.Event.prototype = {
        constructor: ge.Event,
        isDefaultPrevented: T,
        isPropagationStopped: T,
        isImmediatePropagationStopped: T,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = x, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = x, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = x, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ge.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && Ve.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, ge.event.addProp), ge.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        ge.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var r, n = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === n || ge.contains(n, i)) || (e.type = o.origType, r = o.handler.apply(this, arguments), e.type = t), r
            }
        }
    }), ge.fn.extend({
        on: function (e, t, r, n) {
            return E(this, e, t, r, n)
        }, one: function (e, t, r, n) {
            return E(this, e, t, r, n, 1)
        }, off: function (e, t, r) {
            var n, i;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, ge(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (r = t, t = void 0), !1 === r && (r = T), this.each(function () {
                ge.event.remove(this, e, r, t)
            })
        }
    });
    var $e = /<script|<style|<link/i, Qe = /checked\s*(?:[^=]|=\s*.checked.)/i, Je = /^true\/(.*)/,
        et = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ge.extend({
        htmlPrefilter: function (e) {
            return e.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, "<$1></$2>")
        }, clone: function (e, t, r) {
            var n, i, o, s, a = e.cloneNode(!0), l = ge.contains(e.ownerDocument, e);
            if (!(fe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ge.isXMLDoc(e))) for (s = y(a), o = y(e), n = 0, i = o.length; n < i; n++) P(o[n], s[n]);
            if (t) if (r) for (o = o || y(e), s = s || y(a), n = 0, i = o.length; n < i; n++) C(o[n], s[n]); else C(e, a);
            return s = y(a, "script"), s.length > 0 && _(s, !l && y(e, "script")), a
        }, cleanData: function (e) {
            for (var t, r, n, i = ge.event.special, o = 0; void 0 !== (r = e[o]); o++) if (Re(r)) {
                if (t = r[Ie.expando]) {
                    if (t.events) for (n in t.events) i[n] ? ge.event.remove(r, n) : ge.removeEvent(r, n, t.handle);
                    r[Ie.expando] = void 0
                }
                r[De.expando] && (r[De.expando] = void 0)
            }
        }
    }), ge.fn.extend({
        detach: function (e) {
            return R(this, e, !0)
        }, remove: function (e) {
            return R(this, e)
        }, text: function (e) {
            return Ae(this, function (e) {
                return void 0 === e ? ge.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return A(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    S(this, e).appendChild(e)
                }
            })
        }, prepend: function () {
            return A(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = S(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return A(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return A(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ge.cleanData(y(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return ge.clone(this, e, t)
            })
        }, html: function (e) {
            return Ae(this, function (e) {
                var t = this[0] || {}, r = 0, n = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !$e.test(e) && !qe[(Xe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ge.htmlPrefilter(e);
                    try {
                        for (; r < n; r++) t = this[r] || {}, 1 === t.nodeType && (ge.cleanData(y(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return A(this, arguments, function (t) {
                var r = this.parentNode;
                ge.inArray(this, e) < 0 && (ge.cleanData(y(this)), r && r.replaceChild(t, this))
            }, e)
        }
    }), ge.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        ge.fn[e] = function (e) {
            for (var r, n = [], i = ge(e), o = i.length - 1, s = 0; s <= o; s++) r = s === o ? this : this.clone(!0), ge(i[s])[t](r), se.apply(n, r.get());
            return this.pushStack(n)
        }
    });
    var tt = /^margin/, rt = new RegExp("^(" + Ne + ")(?!px)[a-z%]+$", "i"), nt = function (t) {
        var r = t.ownerDocument.defaultView;
        return r && r.opener || (r = e), r.getComputedStyle(t)
    };
    !function () {
        function t() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ye.appendChild(s);
                var t = e.getComputedStyle(a);
                r = "1%" !== t.top, o = "2px" === t.marginLeft, n = "4px" === t.width, a.style.marginRight = "50%", i = "4px" === t.marginRight, Ye.removeChild(s), a = null
            }
        }

        var r, n, i, o, s = re.createElement("div"), a = re.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", fe.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), ge.extend(fe, {
            pixelPosition: function () {
                return t(), r
            }, boxSizingReliable: function () {
                return t(), n
            }, pixelMarginRight: function () {
                return t(), i
            }, reliableMarginLeft: function () {
                return t(), o
            }
        }))
    }();
    var it = /^(none|table(?!-c[ea]).+)/, ot = /^--/,
        st = {position: "absolute", visibility: "hidden", display: "block"},
        at = {letterSpacing: "0", fontWeight: "400"}, lt = ["Webkit", "Moz", "ms"], ut = re.createElement("div").style;
    ge.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var r = I(e, "opacity");
                        return "" === r ? "1" : r
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {float: "cssFloat"},
        style: function (e, t, r, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = ge.camelCase(t), l = ot.test(t), u = e.style;
                return l || (t = k(a)), s = ge.cssHooks[t] || ge.cssHooks[a], void 0 === r ? s && "get" in s && void 0 !== (i = s.get(e, !1, n)) ? i : u[t] : (o = typeof r, "string" === o && (i = Fe.exec(r)) && i[1] && (r = g(e, t, i), o = "number"), void(null != r && r === r && ("number" === o && (r += i && i[3] || (ge.cssNumber[a] ? "" : "px")), fe.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (r = s.set(e, r, n)) || (l ? u.setProperty(t, r) : u[t] = r))))
            }
        },
        css: function (e, t, r, n) {
            var i, o, s, a = ge.camelCase(t);
            return ot.test(t) || (t = k(a)), s = ge.cssHooks[t] || ge.cssHooks[a], s && "get" in s && (i = s.get(e, !0, r)), void 0 === i && (i = I(e, t, n)), "normal" === i && t in at && (i = at[t]), "" === r || r ? (o = parseFloat(i), !0 === r || isFinite(o) ? o || 0 : i) : i
        }
    }), ge.each(["height", "width"], function (e, t) {
        ge.cssHooks[t] = {
            get: function (e, r, n) {
                if (r) return !it.test(ge.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? B(e, t, n) : Ue(e, st, function () {
                    return B(e, t, n)
                })
            }, set: function (e, r, n) {
                var i, o = n && nt(e), s = n && F(e, t, n, "border-box" === ge.css(e, "boxSizing", !1, o), o);
                return s && (i = Fe.exec(r)) && "px" !== (i[3] || "px") && (e.style[t] = r, r = ge.css(e, t)), N(e, r, s)
            }
        }
    }), ge.cssHooks.marginLeft = D(fe.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(I(e, "marginLeft")) || e.getBoundingClientRect().left - Ue(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), ge.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        ge.cssHooks[e + t] = {
            expand: function (r) {
                for (var n = 0, i = {}, o = "string" == typeof r ? r.split(" ") : [r]; n < 4; n++) i[e + Be[n] + t] = o[n] || o[n - 2] || o[0];
                return i
            }
        }, tt.test(e) || (ge.cssHooks[e + t].set = N)
    }), ge.fn.extend({
        css: function (e, t) {
            return Ae(this, function (e, t, r) {
                var n, i, o = {}, s = 0;
                if (Array.isArray(t)) {
                    for (n = nt(e), i = t.length; s < i; s++) o[t[s]] = ge.css(e, t[s], !1, n);
                    return o
                }
                return void 0 !== r ? ge.style(e, t, r) : ge.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), ge.Tween = j, j.prototype = {
        constructor: j, init: function (e, t, r, n, i, o) {
            this.elem = e, this.prop = r, this.easing = i || ge.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = o || (ge.cssNumber[r] ? "" : "px")
        }, cur: function () {
            var e = j.propHooks[this.prop];
            return e && e.get ? e.get(this) : j.propHooks._default.get(this)
        }, run: function (e) {
            var t, r = j.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ge.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : j.propHooks._default.set(this), this
        }
    }, j.prototype.init.prototype = j.prototype,
        j.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ge.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                }, set: function (e) {
                    ge.fx.step[e.prop] ? ge.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ge.cssProps[e.prop]] && !ge.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ge.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ge.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, ge.fx = j.prototype.init, ge.fx.step = {};
    var ht, ct, dt = /^(?:toggle|show|hide)$/, ft = /queueHooks$/;
    ge.Animation = ge.extend(z, {
        tweeners: {
            "*": [function (e, t) {
                var r = this.createTween(e, t);
                return g(r.elem, e, Fe.exec(t), r), r
            }]
        }, tweener: function (e, t) {
            ge.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Oe);
            for (var r, n = 0, i = e.length; n < i; n++) r = e[n], z.tweeners[r] = z.tweeners[r] || [], z.tweeners[r].unshift(t)
        }, prefilters: [W], prefilter: function (e, t) {
            t ? z.prefilters.unshift(e) : z.prefilters.push(e)
        }
    }), ge.speed = function (e, t, r) {
        var n = e && "object" == typeof e ? ge.extend({}, e) : {
            complete: r || !r && t || ge.isFunction(e) && e,
            duration: e,
            easing: r && t || t && !ge.isFunction(t) && t
        };
        return ge.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in ge.fx.speeds ? n.duration = ge.fx.speeds[n.duration] : n.duration = ge.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            ge.isFunction(n.old) && n.old.call(this), n.queue && ge.dequeue(this, n.queue)
        }, n
    }, ge.fn.extend({
        fadeTo: function (e, t, r, n) {
            return this.filter(je).css("opacity", 0).show().end().animate({opacity: t}, e, r, n)
        }, animate: function (e, t, r, n) {
            var i = ge.isEmptyObject(e), o = ge.speed(t, r, n), s = function () {
                var t = z(this, ge.extend({}, e), o);
                (i || Ie.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        }, stop: function (e, t, r) {
            var n = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0, i = null != e && e + "queueHooks", o = ge.timers, s = Ie.get(this);
                if (i) s[i] && s[i].stop && n(s[i]); else for (i in s) s[i] && s[i].stop && ft.test(i) && n(s[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(r), t = !1, o.splice(i, 1));
                !t && r || ge.dequeue(this, e)
            })
        }, finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, r = Ie.get(this), n = r[e + "queue"], i = r[e + "queueHooks"], o = ge.timers,
                    s = n ? n.length : 0;
                for (r.finish = !0, ge.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < s; t++) n[t] && n[t].finish && n[t].finish.call(this);
                delete r.finish
            })
        }
    }), ge.each(["toggle", "show", "hide"], function (e, t) {
        var r = ge.fn[t];
        ge.fn[t] = function (e, n, i) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(G(t, !0), e, n, i)
        }
    }), ge.each({
        slideDown: G("show"),
        slideUp: G("hide"),
        slideToggle: G("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        ge.fn[e] = function (e, r, n) {
            return this.animate(t, e, r, n)
        }
    }), ge.timers = [], ge.fx.tick = function () {
        var e, t = 0, r = ge.timers;
        for (ht = ge.now(); t < r.length; t++) (e = r[t])() || r[t] !== e || r.splice(t--, 1);
        r.length || ge.fx.stop(), ht = void 0
    }, ge.fx.timer = function (e) {
        ge.timers.push(e), ge.fx.start()
    }, ge.fx.interval = 13, ge.fx.start = function () {
        ct || (ct = !0, U())
    }, ge.fx.stop = function () {
        ct = null
    }, ge.fx.speeds = {slow: 600, fast: 200, _default: 400}, ge.fn.delay = function (t, r) {
        return t = ge.fx ? ge.fx.speeds[t] || t : t, r = r || "fx", this.queue(r, function (r, n) {
            var i = e.setTimeout(r, t);
            n.stop = function () {
                e.clearTimeout(i)
            }
        })
    }, function () {
        var e = re.createElement("input"), t = re.createElement("select"),
            r = t.appendChild(re.createElement("option"));
        e.type = "checkbox", fe.checkOn = "" !== e.value, fe.optSelected = r.selected, e = re.createElement("input"), e.value = "t", e.type = "radio", fe.radioValue = "t" === e.value
    }();
    var pt, gt = ge.expr.attrHandle;
    ge.fn.extend({
        attr: function (e, t) {
            return Ae(this, ge.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                ge.removeAttr(this, e)
            })
        }
    }), ge.extend({
        attr: function (e, t, r) {
            var n, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? ge.prop(e, t, r) : (1 === o && ge.isXMLDoc(e) || (i = ge.attrHooks[t.toLowerCase()] || (ge.expr.match.bool.test(t) ? pt : void 0)), void 0 !== r ? null === r ? void ge.removeAttr(e, t) : i && "set" in i && void 0 !== (n = i.set(e, r, t)) ? n : (e.setAttribute(t, r + ""), r) : i && "get" in i && null !== (n = i.get(e, t)) ? n : (n = ge.find.attr(e, t), null == n ? void 0 : n))
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!fe.radioValue && "radio" === t && i(e, "input")) {
                        var r = e.value;
                        return e.setAttribute("type", t), r && (e.value = r), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var r, n = 0, i = t && t.match(Oe);
            if (i && 1 === e.nodeType) for (; r = i[n++];) e.removeAttribute(r)
        }
    }), pt = {
        set: function (e, t, r) {
            return !1 === t ? ge.removeAttr(e, r) : e.setAttribute(r, r), r
        }
    }, ge.each(ge.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var r = gt[t] || ge.find.attr;
        gt[t] = function (e, t, n) {
            var i, o, s = t.toLowerCase();
            return n || (o = gt[s], gt[s] = i, i = null != r(e, t, n) ? s : null, gt[s] = o), i
        }
    });
    var vt = /^(?:input|select|textarea|button)$/i, mt = /^(?:a|area)$/i;
    ge.fn.extend({
        prop: function (e, t) {
            return Ae(this, ge.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[ge.propFix[e] || e]
            })
        }
    }), ge.extend({
        prop: function (e, t, r) {
            var n, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ge.isXMLDoc(e) || (t = ge.propFix[t] || t, i = ge.propHooks[t]), void 0 !== r ? i && "set" in i && void 0 !== (n = i.set(e, r, t)) ? n : e[t] = r : i && "get" in i && null !== (n = i.get(e, t)) ? n : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = ge.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : vt.test(e.nodeName) || mt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), fe.optSelected || (ge.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), ge.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ge.propFix[this.toLowerCase()] = this
    }), ge.fn.extend({
        addClass: function (e) {
            var t, r, n, i, o, s, a, l = 0;
            if (ge.isFunction(e)) return this.each(function (t) {
                ge(this).addClass(e.call(this, t, V(this)))
            });
            if ("string" == typeof e && e) for (t = e.match(Oe) || []; r = this[l++];) if (i = V(r), n = 1 === r.nodeType && " " + Y(i) + " ") {
                for (s = 0; o = t[s++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                a = Y(n), i !== a && r.setAttribute("class", a)
            }
            return this
        }, removeClass: function (e) {
            var t, r, n, i, o, s, a, l = 0;
            if (ge.isFunction(e)) return this.each(function (t) {
                ge(this).removeClass(e.call(this, t, V(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e) for (t = e.match(Oe) || []; r = this[l++];) if (i = V(r), n = 1 === r.nodeType && " " + Y(i) + " ") {
                for (s = 0; o = t[s++];) for (; n.indexOf(" " + o + " ") > -1;) n = n.replace(" " + o + " ", " ");
                a = Y(n), i !== a && r.setAttribute("class", a)
            }
            return this
        }, toggleClass: function (e, t) {
            var r = typeof e;
            return "boolean" == typeof t && "string" === r ? t ? this.addClass(e) : this.removeClass(e) : ge.isFunction(e) ? this.each(function (r) {
                ge(this).toggleClass(e.call(this, r, V(this), t), t)
            }) : this.each(function () {
                var t, n, i, o;
                if ("string" === r) for (n = 0, i = ge(this), o = e.match(Oe) || []; t = o[n++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else void 0 !== e && "boolean" !== r || (t = V(this), t && Ie.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Ie.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, r, n = 0;
            for (t = " " + e + " "; r = this[n++];) if (1 === r.nodeType && (" " + Y(V(r)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    ge.fn.extend({
        val: function (e) {
            var t, r, n, i = this[0];
            return arguments.length ? (n = ge.isFunction(e), this.each(function (r) {
                var i;
                1 === this.nodeType && (i = n ? e.call(this, r, ge(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = ge.map(i, function (e) {
                    return null == e ? "" : e + ""
                })), (t = ge.valHooks[this.type] || ge.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = ge.valHooks[i.type] || ge.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (r = t.get(i, "value")) ? r : (r = i.value, "string" == typeof r ? r.replace(/\r/g, "") : null == r ? "" : r)) : void 0
        }
    }), ge.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = ge.find.attr(e, "value");
                    return null != t ? t : Y(ge.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, r, n, o = e.options, s = e.selectedIndex, a = "select-one" === e.type, l = a ? null : [],
                        u = a ? s + 1 : o.length;
                    for (n = s < 0 ? u : a ? s : 0; n < u; n++) if (r = o[n], (r.selected || n === s) && !r.disabled && (!r.parentNode.disabled || !i(r.parentNode, "optgroup"))) {
                        if (t = ge(r).val(), a) return t;
                        l.push(t)
                    }
                    return l
                }, set: function (e, t) {
                    for (var r, n, i = e.options, o = ge.makeArray(t), s = i.length; s--;) n = i[s], (n.selected = ge.inArray(ge.valHooks.option.get(n), o) > -1) && (r = !0);
                    return r || (e.selectedIndex = -1), o
                }
            }
        }
    }), ge.each(["radio", "checkbox"], function () {
        ge.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = ge.inArray(ge(e).val(), t) > -1
            }
        }, fe.checkOn || (ge.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var yt = /^(?:focusinfocus|focusoutblur)$/;
    ge.extend(ge.event, {
        trigger: function (t, r, n, i) {
            var o, s, a, l, u, h, c, d = [n || re], f = he.call(t, "type") ? t.type : t,
                p = he.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = n = n || re, 3 !== n.nodeType && 8 !== n.nodeType && !yt.test(f + ge.event.triggered) && (f.indexOf(".") > -1 && (p = f.split("."), f = p.shift(), p.sort()), u = f.indexOf(":") < 0 && "on" + f, t = t[ge.expando] ? t : new ge.Event(f, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), r = null == r ? [t] : ge.makeArray(r, [t]), c = ge.event.special[f] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, r))) {
                if (!i && !c.noBubble && !ge.isWindow(n)) {
                    for (l = c.delegateType || f, yt.test(l + f) || (s = s.parentNode); s; s = s.parentNode) d.push(s), a = s;
                    a === (n.ownerDocument || re) && d.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0; (s = d[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : c.bindType || f, h = (Ie.get(s, "events") || {})[t.type] && Ie.get(s, "handle"), h && h.apply(s, r), (h = u && s[u]) && h.apply && Re(s) && (t.result = h.apply(s, r), !1 === t.result && t.preventDefault());
                return t.type = f, i || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), r) || !Re(n) || u && ge.isFunction(n[f]) && !ge.isWindow(n) && (a = n[u], a && (n[u] = null), ge.event.triggered = f, n[f](), ge.event.triggered = void 0, a && (n[u] = a)), t.result
            }
        }, simulate: function (e, t, r) {
            var n = ge.extend(new ge.Event, r, {type: e, isSimulated: !0});
            ge.event.trigger(n, null, t)
        }
    }), ge.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                ge.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var r = this[0];
            if (r) return ge.event.trigger(e, t, r, !0)
        }
    }), ge.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        ge.fn[t] = function (e, r) {
            return arguments.length > 0 ? this.on(t, null, e, r) : this.trigger(t)
        }
    }), ge.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), fe.focusin = "onfocusin" in e, fe.focusin || ge.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var r = function (e) {
            ge.event.simulate(t, e.target, ge.event.fix(e))
        };
        ge.event.special[t] = {
            setup: function () {
                var n = this.ownerDocument || this, i = Ie.access(n, t);
                i || n.addEventListener(e, r, !0), Ie.access(n, t, (i || 0) + 1)
            }, teardown: function () {
                var n = this.ownerDocument || this, i = Ie.access(n, t) - 1;
                i ? Ie.access(n, t, i) : (n.removeEventListener(e, r, !0), Ie.remove(n, t))
            }
        }
    });
    var _t = e.location, bt = ge.now(), xt = /\?/;
    ge.parseXML = function (t) {
        var r;
        if (!t || "string" != typeof t) return null;
        try {
            r = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            r = void 0
        }
        return r && !r.getElementsByTagName("parsererror").length || ge.error("Invalid XML: " + t), r
    };
    var Tt = /\[\]$/, wt = /^(?:submit|button|image|reset|file)$/i, Et = /^(?:input|select|textarea|keygen)/i;
    ge.param = function (e, t) {
        var r, n = [], i = function (e, t) {
            var r = ge.isFunction(t) ? t() : t;
            n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == r ? "" : r)
        };
        if (Array.isArray(e) || e.jquery && !ge.isPlainObject(e)) ge.each(e, function () {
            i(this.name, this.value)
        }); else for (r in e) K(r, e[r], t, i);
        return n.join("&")
    }, ge.fn.extend({
        serialize: function () {
            return ge.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = ge.prop(this, "elements");
                return e ? ge.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !ge(this).is(":disabled") && Et.test(this.nodeName) && !wt.test(e) && (this.checked || !Ge.test(e))
            }).map(function (e, t) {
                var r = ge(this).val();
                return null == r ? null : Array.isArray(r) ? ge.map(r, function (e) {
                    return {name: t.name, value: e.replace(/\r?\n/g, "\r\n")}
                }) : {name: t.name, value: r.replace(/\r?\n/g, "\r\n")}
            }).get()
        }
    });
    var St = /^(.*?):[ \t]*([^\r\n]*)$/gm, Mt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ot = /^(?:GET|HEAD)$/, Ct = {}, Pt = {}, At = "*/".concat("*"), Rt = re.createElement("a");
    Rt.href = _t.href, ge.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: _t.href,
            type: "GET",
            isLocal: Mt.test(_t.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": At,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": ge.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? Q(Q(e, ge.ajaxSettings), t) : Q(ge.ajaxSettings, e)
        },
        ajaxPrefilter: Z(Ct),
        ajaxTransport: Z(Pt),
        ajax: function (t, r) {
            function n(t, r, n, a) {
                var u, d, f, b, x, T = r;
                h || (h = !0, l && e.clearTimeout(l), i = void 0, s = a || "", w.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, n && (b = J(p, w, n)), b = ee(p, b, w, u), u ? (p.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (ge.lastModified[o] = x), (x = w.getResponseHeader("etag")) && (ge.etag[o] = x)), 204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, d = b.data, f = b.error, u = !f)) : (f = T, !t && T || (T = "error", t < 0 && (t = 0))), w.status = t, w.statusText = (r || T) + "", u ? m.resolveWith(g, [d, T, w]) : m.rejectWith(g, [w, T, f]), w.statusCode(_), _ = void 0, c && v.trigger(u ? "ajaxSuccess" : "ajaxError", [w, p, u ? d : f]), y.fireWith(g, [w, T]), c && (v.trigger("ajaxComplete", [w, p]), --ge.active || ge.event.trigger("ajaxStop")))
            }

            "object" == typeof t && (r = t, t = void 0), r = r || {};
            var i, o, s, a, l, u, h, c, d, f, p = ge.ajaxSetup({}, r), g = p.context || p,
                v = p.context && (g.nodeType || g.jquery) ? ge(g) : ge.event, m = ge.Deferred(),
                y = ge.Callbacks("once memory"), _ = p.statusCode || {}, b = {}, x = {}, T = "canceled", w = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (h) {
                            if (!a) for (a = {}; t = St.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return h ? s : null
                    }, setRequestHeader: function (e, t) {
                        return null == h && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, b[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == h && (p.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (h) w.always(e[w.status]); else for (t in e) _[t] = [_[t], e[t]];
                        return this
                    }, abort: function (e) {
                        var t = e || T;
                        return i && i.abort(t), n(0, t), this
                    }
                };
            if (m.promise(w), p.url = ((t || p.url || _t.href) + "").replace(/^\/\//, _t.protocol + "//"), p.type = r.method || r.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(Oe) || [""], null == p.crossDomain) {
                u = re.createElement("a");
                try {
                    u.href = p.url, u.href = u.href, p.crossDomain = Rt.protocol + "//" + Rt.host != u.protocol + "//" + u.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = ge.param(p.data, p.traditional)), $(Ct, p, r, w), h) return w;
            c = ge.event && p.global, c && 0 == ge.active++ && ge.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ot.test(p.type), o = p.url.replace(/#.*$/, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(/%20/g, "+")) : (f = p.url.slice(o.length), p.data && (o += (xt.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(/([?&])_=[^&]*/, "$1"), f = (xt.test(o) ? "&" : "?") + "_=" + bt++ + f), p.url = o + f), p.ifModified && (ge.lastModified[o] && w.setRequestHeader("If-Modified-Since", ge.lastModified[o]), ge.etag[o] && w.setRequestHeader("If-None-Match", ge.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || r.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + At + "; q=0.01" : "") : p.accepts["*"]);
            for (d in p.headers) w.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, w, p) || h)) return w.abort();
            if (T = "abort", y.add(p.complete), w.done(p.success), w.fail(p.error), i = $(Pt, p, r, w)) {
                if (w.readyState = 1, c && v.trigger("ajaxSend", [w, p]), h) return w;
                p.async && p.timeout > 0 && (l = e.setTimeout(function () {
                    w.abort("timeout")
                }, p.timeout));
                try {
                    h = !1, i.send(b, n)
                } catch (e) {
                    if (h) throw e;
                    n(-1, e)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function (e, t, r) {
            return ge.get(e, t, r, "json")
        },
        getScript: function (e, t) {
            return ge.get(e, void 0, t, "script")
        }
    }), ge.each(["get", "post"], function (e, t) {
        ge[t] = function (e, r, n, i) {
            return ge.isFunction(r) && (i = i || n, n = r, r = void 0), ge.ajax(ge.extend({
                url: e,
                type: t,
                dataType: i,
                data: r,
                success: n
            }, ge.isPlainObject(e) && e))
        }
    }), ge._evalUrl = function (e) {
        return ge.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
    }, ge.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (ge.isFunction(e) && (e = e.call(this[0])), t = ge(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (e) {
            return ge.isFunction(e) ? this.each(function (t) {
                ge(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = ge(this), r = t.contents();
                r.length ? r.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = ge.isFunction(e);
            return this.each(function (r) {
                ge(this).wrapAll(t ? e.call(this, r) : e)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                ge(this).replaceWith(this.childNodes)
            }), this
        }
    }), ge.expr.pseudos.hidden = function (e) {
        return !ge.expr.pseudos.visible(e)
    }, ge.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, ge.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {
        }
    };
    var It = {0: 200, 1223: 204}, Dt = ge.ajaxSettings.xhr();
    fe.cors = !!Dt && "withCredentials" in Dt, fe.ajax = Dt = !!Dt, ge.ajaxTransport(function (t) {
        var r, n;
        if (fe.cors || Dt && !t.crossDomain) return {
            send: function (i, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (s in i) a.setRequestHeader(s, i[s]);
                r = function (e) {
                    return function () {
                        r && (r = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(It[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                    }
                }, a.onload = r(), n = a.onerror = r("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function () {
                    4 === a.readyState && e.setTimeout(function () {
                        r && n()
                    })
                }, r = r("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (r) throw e
                }
            }, abort: function () {
                r && r()
            }
        }
    }), ge.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), ge.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return ge.globalEval(e), e
            }
        }
    }), ge.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), ge.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, r;
            return {
                send: function (n, i) {
                    t = ge("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", r = function (e) {
                        t.remove(), r = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), re.head.appendChild(t[0])
                }, abort: function () {
                    r && r()
                }
            }
        }
    });
    var Lt = [], kt = /(=)\?(?=&|$)|\?\?/;
    ge.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Lt.pop() || ge.expando + "_" + bt++;
            return this[e] = !0, e
        }
    }), ge.ajaxPrefilter("json jsonp", function (t, r, n) {
        var i, o, s,
            a = !1 !== t.jsonp && (kt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && kt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = ge.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(kt, "$1" + i) : !1 !== t.jsonp && (t.url += (xt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return s || ge.error(i + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            s = arguments
        }, n.always(function () {
            void 0 === o ? ge(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = r.jsonpCallback, Lt.push(i)), s && ge.isFunction(o) && o(s[0]), s = o = void 0
        }), "script"
    }), fe.createHTMLDocument = function () {
        var e = re.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), ge.parseHTML = function (e, t, r) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (r = t, t = !1);
        var n, i, o;
        return t || (fe.createHTMLDocument ? (t = re.implementation.createHTMLDocument(""), n = t.createElement("base"), n.href = re.location.href, t.head.appendChild(n)) : t = re), i = xe.exec(e), o = !r && [], i ? [t.createElement(i[1])] : (i = b([e], t, o), o && o.length && ge(o).remove(), ge.merge([], i.childNodes))
    }, ge.fn.load = function (e, t, r) {
        var n, i, o, s = this, a = e.indexOf(" ");
        return a > -1 && (n = Y(e.slice(a)), e = e.slice(0, a)), ge.isFunction(t) ? (r = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && ge.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, s.html(n ? ge("<div>").append(ge.parseHTML(e)).find(n) : e)
        }).always(r && function (e, t) {
            s.each(function () {
                r.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, ge.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        ge.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), ge.expr.pseudos.animated = function (e) {
        return ge.grep(ge.timers, function (t) {
            return e === t.elem
        }).length
    }, ge.offset = {
        setOffset: function (e, t, r) {
            var n, i, o, s, a, l, u, h = ge.css(e, "position"), c = ge(e), d = {};
            "static" === h && (e.style.position = "relative"), a = c.offset(), o = ge.css(e, "top"), l = ge.css(e, "left"), u = ("absolute" === h || "fixed" === h) && (o + l).indexOf("auto") > -1, u ? (n = c.position(), s = n.top, i = n.left) : (s = parseFloat(o) || 0, i = parseFloat(l) || 0), ge.isFunction(t) && (t = t.call(e, r, ge.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + i), "using" in t ? t.using.call(e, d) : c.css(d)
        }
    }, ge.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                ge.offset.setOffset(this, e, t)
            });
            var t, r, n, i, o = this[0];
            return o ? o.getClientRects().length ? (n = o.getBoundingClientRect(), t = o.ownerDocument, r = t.documentElement, i = t.defaultView, {
                top: n.top + i.pageYOffset - r.clientTop,
                left: n.left + i.pageXOffset - r.clientLeft
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, r = this[0], n = {top: 0, left: 0};
                return "fixed" === ge.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), i(e[0], "html") || (n = e.offset()), n = {
                    top: n.top + ge.css(e[0], "borderTopWidth", !0),
                    left: n.left + ge.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - n.top - ge.css(r, "marginTop", !0),
                    left: t.left - n.left - ge.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === ge.css(e, "position");) e = e.offsetParent;
                return e || Ye
            })
        }
    }), ge.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var r = "pageYOffset" === t;
        ge.fn[e] = function (n) {
            return Ae(this, function (e, n, i) {
                var o;
                return ge.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i ? o ? o[t] : e[n] : void(o ? o.scrollTo(r ? o.pageXOffset : i, r ? i : o.pageYOffset) : e[n] = i)
            }, e, n, arguments.length)
        }
    }), ge.each(["top", "left"], function (e, t) {
        ge.cssHooks[t] = D(fe.pixelPosition, function (e, r) {
            if (r) return r = I(e, t), rt.test(r) ? ge(e).position()[t] + "px" : r
        })
    }), ge.each({Height: "height", Width: "width"}, function (e, t) {
        ge.each({padding: "inner" + e, content: t, "": "outer" + e}, function (r, n) {
            ge.fn[n] = function (i, o) {
                var s = arguments.length && (r || "boolean" != typeof i),
                    a = r || (!0 === i || !0 === o ? "margin" : "border");
                return Ae(this, function (t, r, i) {
                    var o;
                    return ge.isWindow(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? ge.css(t, r, a) : ge.style(t, r, i, a)
                }, t, s ? i : void 0, s)
            }
        })
    }), ge.fn.extend({
        bind: function (e, t, r) {
            return this.on(e, null, t, r)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, r, n) {
            return this.on(t, e, r, n)
        }, undelegate: function (e, t, r) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
        }
    }), ge.holdReady = function (e) {
        e ? ge.readyWait++ : ge.ready(!0)
    }, ge.isArray = Array.isArray, ge.parseJSON = JSON.parse, ge.nodeName = i, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ge
    });
    var Nt = e.jQuery, Ft = e.$;
    return ge.noConflict = function (t) {
        return e.$ === ge && (e.$ = Ft), t && e.jQuery === ge && (e.jQuery = Nt), ge
    }, t || (e.jQuery = e.$ = ge), ge
});


var BrowserDetect = {};
BrowserDetect.init = function () {
    BrowserDetect.MOBILE = BrowserDetect.checkMobile(), BrowserDetect.TABLET = BrowserDetect.checkTablet(), BrowserDetect.BROWSER_NAME = this.searchString(this.dataBrowser) || "An unknown browser", BrowserDetect.BROWSER_VERSION = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version", BrowserDetect.OS = this.searchString(this.dataOS) || "an unknown OS", BrowserDetect.DESKTOP = !BrowserDetect.MOBILE && !BrowserDetect.TABLET, "Firefox" == BrowserDetect.BROWSER_NAME && BrowserDetect.BROWSER_VERSION >= 10 && (BrowserDetect.TRANSLATE3D_SUPPORT = !0)
}, BrowserDetect.searchString = function (e) {
    for (var t = 0; t < e.length; t++) {
        var r = e[t].string, n = e[t].prop;
        if (BrowserDetect.BROWSER_VERSIONSearchString = e[t].versionSearch || e[t].identity, r) {
            if (-1 != r.indexOf(e[t].subString)) return e[t].identity
        } else if (n) return e[t].identity
    }
}, BrowserDetect.searchVersion = function (e) {
    var t = e.indexOf(BrowserDetect.BROWSER_VERSIONSearchString);
    if (-1 != t) return parseFloat(e.substring(t + BrowserDetect.BROWSER_VERSIONSearchString.length + 1))
}, BrowserDetect.getOlderSafariVersion = function (e) {
    return e < 100 ? 1 : e < 125.2 ? 1.1 : e < 312.1 ? 1.2 : e < 412 ? 1.3 : e < 523.1 ? 2 : e <= 523.12 ? 3 : void 0
}, BrowserDetect.dataBrowser = [{
    string: navigator.userAgent,
    subString: "Chrome",
    identity: "Chrome"
}, {
    string: navigator.userAgent,
    subString: "OmniWeb",
    versionSearch: "OmniWeb/",
    identity: "OmniWeb"
}, {string: navigator.vendor, subString: "Apple", identity: "Safari", versionSearch: "Version"}, {
    prop: window.opera,
    identity: "Opera"
}, {string: navigator.vendor, subString: "iCab", identity: "iCab"}, {
    string: navigator.vendor,
    subString: "KDE",
    identity: "Konqueror"
}, {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"}, {
    string: navigator.vendor,
    subString: "Camino",
    identity: "Camino"
}, {string: navigator.userAgent, subString: "Netscape", identity: "Netscape"}, {
    string: navigator.userAgent,
    subString: "MSIE",
    identity: "Explorer",
    versionSearch: "MSIE"
}, {
    string: navigator.userAgent,
    subString: "Gecko",
    identity: "Mozilla",
    versionSearch: "rv"
}, {
    string: navigator.userAgent,
    subString: "Mozilla",
    identity: "Netscape",
    versionSearch: "Mozilla"
}], BrowserDetect.dataOS = [{
    string: navigator.platform,
    subString: "Win",
    identity: "Windows"
}, {string: navigator.platform, subString: "Mac", identity: "Mac"}, {
    string: navigator.userAgent,
    subString: "iPhone",
    identity: "iPhone/iPod"
}, {string: navigator.userAgent, subString: "iPad", identity: "iPad"}, {
    string: navigator.userAgent,
    subString: "Android",
    identity: "Android"
}, {string: navigator.userAgent, subString: "Windows CE", identity: "Windows CE"}, {
    string: navigator.userAgent,
    subString: "Palm",
    identity: "Palm"
}, {string: navigator.userAgent, subString: "Blackberry", identity: "Blackberry"}, {
    string: navigator.platform,
    subString: "Linux",
    identity: "Linux"
}], BrowserDetect.checkMobile = function () {
    var e = /iphone|ipod|kindle|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase());
    return 1 == e && (BrowserDetect.TABLET = !1), !0 === e
}, BrowserDetect.checkTablet = function () {
    var e = /ipad|sch-i800|playbook|xoom|gt-p1000|gt-p7510|sgh-t849|nexus 7|nexus 10|shw-m180s|a100|dell streak|silk/i.test(navigator.userAgent.toLowerCase());
    if (!0 === /android/i.test(navigator.userAgent.toLowerCase()) || !0 === e) {
        var t = screen.height, r = screen.width;
        t > r && (r = screen.height, t = screen.width), t >= 736 && r >= 1024 ? e = !0 : (BrowserDetect.MOBILE = !0, e = !1)
    }
    return 1 == e && (BrowserDetect.MOBILE = !1), !0 === e
}, BrowserDetect.BROWSER_NAME = null, BrowserDetect.BROWSER_VERSION = null, BrowserDetect.OS = null, BrowserDetect.MOBILE = !1, BrowserDetect.TABLET = !1, BrowserDetect.TRANSLATE3D_SUPPORT = "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix, BrowserDetect.init();


var HM = HM || {};
HM.Event = {}, HM.Event.RESIZE = "resize", HM.Event.ORIENTATIONCHANGE = "orientationchange", HM.Event.LOAD = "load", HM.Event.SCROLL = "scroll", HM.Event.SELECT = "select", HM.Event.SUBMIT = "submit", HM.Event.HASHCHANGE = "hashchange", HM.Event.BLUR = "blur", HM.Event.FOCUS = "focus", HM.Event.CHANGE = "change", HM.Event.ABORT = "abort", HM.Event.UNLOAD = "unload", HM.Event.BEFOREUNLOAD = "beforeunload", HM.Event.LOAD = "load", HM.Event.PROGRESS = "progress", HM.Event.ERROR = "error", HM.Event.CONTEXTMENU = "contextmenu", HM.Event.COPY = "copy", HM.Event.PASTE = "paste", HM.Event.READY_STATE_CHANGE = "readystatechange", HM.Event.RESET = "reset", HM.MouseEvent = {}, HM.MouseEvent.CLICK = "click", HM.MouseEvent.MOUSE_DOWN = "mousedown", HM.MouseEvent.MOUSE_MOVE = "mousemove", HM.MouseEvent.MOUSE_UP = "mouseup", HM.MouseEvent.RIGHT_CLICK = "rightclick", HM.MouseEvent.MOUSE_OVER = "mouseover", HM.MouseEvent.MOUSE_OUT = "mouseout", HM.MouseEvent.MOUSE_ENTER = "mouseenter", HM.MouseEvent.MOUSE_LEAVE = "mouseleave", HM.MouseEvent.ROLL_OVER = "mouseenter", HM.MouseEvent.ROLL_OUT = "mouseleave", HM.MouseEvent.DOUBLE_CLICK = "dblclick", HM.MouseEvent.DRAG_END = "dragend", HM.MouseEvent.DRAG_ENTER = "dragenter", HM.MouseEvent.DRAG_LEAVE = "dragleave", HM.MouseEvent.DRAG_OVER = "dragover", HM.MouseEvent.DRAG_START = "dragstart", HM.MouseEvent.DROP = "drop", HM.MouseEvent.MOUSE_WHEEL = "mousewheel", "Firefox" == BrowserDetect.BROWSER_NAME && (HM.MouseEvent.MOUSE_WHEEL = "DOMMouseScroll"), HM.KeyboardEvent = {}, HM.KeyboardEvent.KEY_DOWN = "keydown", HM.KeyboardEvent.KEY_UP = "keyup", HM.KeyboardEvent.KEY_PRESS = "keypress", HM.TouchEvent = {}, HM.TouchEvent.TOUCH_START = "touchstart", HM.TouchEvent.TOUCH_MOVE = "touchmove", HM.TouchEvent.TOUCH_END = "touchend", HM.TouchEvent.TOUCH_CANCEL = "touchcancel", HM.MouseAndTouchEvent = {}, HM.MutationEvent = {}, MutationEvent.DOM_NODE_INSERTED = "DOMNodeInserted", MutationEvent.DOM_NODE_REMOVED = "DOMNodeRemoved", HM.MessageEvent = {}, HM.MessageEvent.MESSAGE = "message", HM.MediaEvent = {}, HM.MediaEvent.ABORT = "abort", HM.MediaEvent.CANPLAY = "canplay", HM.MediaEvent.CAN_PLAY_THROUGH = "canplaythrough", HM.MediaEvent.DURATION_CHANGE = "durationchange", HM.MediaEvent.EMPTIED = "emptied", HM.MediaEvent.ENDED = "ended", HM.MediaEvent.ERROR = "error", HM.MediaEvent.LOADED_DATA = "loadeddata", HM.MediaEvent.LOADED_METADATA = "loadedmetadata", HM.MediaEvent.LOAD_START = "loadstart", HM.MediaEvent.PAUSE = "pause", HM.MediaEvent.PLAY = "play", HM.MediaEvent.PLAYING = "playing", HM.MediaEvent.PROGRESS = "progress", HM.MediaEvent.RATE_CHANGE = "ratechange", HM.MediaEvent.SEEKED = "seeked", HM.MediaEvent.SEEKING = "seeking", HM.MediaEvent.SUSPEND = "suspend", HM.MediaEvent.TIME_UPDATE = "timeupdate", HM.MediaEvent.VOLUME_CHANGE = "volumechange", HM.MediaEvent.WAITING = "waiting";
var HM = HM || {};
HM.extend = function (e, t) {
    "use strict";
    t = t || [];
    var r = e.apply(e, t);
    return r._super = r._super || {}, r.override = function (e, t) {
        void 0 !== this[e] && (this._super[e] = this[e]), this[e] = t
    }, r
};
var HM = HM || {};
!function (e) {
    "use strict";
    var t = {};
    t.mixin = function (e) {
        void 0 === e._listeners && (e._listeners = {}), e.add = function (e, t) {
            var r = this._listeners;
            void 0 === r[e] && (r[e] = []), -1 === r[e].indexOf(t) && r[e].push(t)
        }, e.remove = function (e, t) {
            if (void 0 !== this._listeners) {
                var r = this._listeners, n = r[e];
                if (void 0 !== n) {
                    var i = n.indexOf(t);
                    -1 !== i && n.splice(i, 1)
                }
            }
        }, e.trigger = function (e, t) {
            var r = t || {};
            r.type = e;
            var n = this._listeners;
            if (void 0 !== n) {
                var i = n[e], o = {type: e};
                if (void 0 !== i) {
                    o.target = this;
                    for (var s = [], a = i.length, l = 0; l < a; l++) s[l] = i[l];
                    for (l = 0; l < a; l++) s[l].call(this, r)
                }
            }
        }
    }, e.HM.EventDispatcher = t
}(window);
var HM = HM || {};
!function (e) {
    "use strict";
    var t = {};
    t.butAllowItOnTheseHostNames = function (t, r) {
        for (var n = !1, i = 0; i < t.length; i++) {
            var o = t[i];
            e.location.hostname.indexOf(o) > -1 && (n = !0)
        }
        !1 === n && void 0 !== r && r(), "undefined" != typeof console && !1 !== n || (e.console = {}, console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = function () {
        })
    }, e.HM.SuppressConsoleLogs = t
}(window);
var HM = HM || {};
!function (e) {
    "use strict";
    var t = {};
    t.disableSelection = function (e) {
        e.style["-moz-user-select"] = "none", e.style["-webkit-user-select"] = "none", e.style["-webkit-user-drag"] = "none", e.style["-webkit-touch-callout"] = "none", e.style["-khtml-user-select"] = "none", e.style["-moz-user-select"] = "none", e.style["-ms-user-select"] = "none", e.style["-user-select"] = "none"
    }, t.enableSelection = function (e) {
        e.style["-moz-user-select"] = "text", e.style["-webkit-user-select"] = "text", e.style["-webkit-user-drag"] = "text", e.style["-webkit-touch-callout"] = "text", e.style["-khtml-user-select"] = "text", e.style["-moz-user-select"] = "text", e.style["-ms-user-select"] = "text", e.style["-user-select"] = "text"
    }, t.getScrollY = function () {
        return Math.max(document.documentElement.scrollTop, document.body.scrollTop)
    }, t.getSize = function (e) {
        var t = {width: 0, height: 0};
        if (null == e.parentNode) document.body.appendChild(e), t.width = e.offsetWidth, t.height = e.offsetHeight, document.body.removeChild(e); else if (0 == e.offsetWidth) {
            var r = e.parentNode;
            document.body.appendChild(e), t.width = e.offsetWidth, t.height = e.offsetHeight, r.appendChild(e)
        } else t.width = e.offsetWidth, t.height = e.offsetHeight;
        return t
    }, t.getAbsoluteDiv = function () {
        var e = document.createElement("div");
        return e.style.position = "absolute", e
    }, HM.DOMUtils = t
}(window);
var HM = HM || {};
!function () {
    "use strict";
    var e = {};
    e.getRandomInt = function (e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
    }, e.getRandomIntsFromRange = function (t, r) {
        var n = 0, i = [], o = [];
        for (n; n < r; n++) i.push(n + 1);
        n = 0;
        var s, a = r - 1;
        for (n; n < t; n++) s = e.getRandomInt(0, a), o.push(i[s]), i.splice(s, 1), a--;
        return o
    }, e.clamp = function (e, t, r) {
        return Math.min(r, Math.max(t, e))
    }, e.degreesToRadians = function (e) {
        return e * Math.PI / 180
    }, e.radiansToDegrees = function (e) {
        return 180 * e / Math.PI
    }, e.squareToCircle = function (e) {
        var t = e, r = e, n = Math.pow(t, 2) + Math.pow(r, 2);
        return Math.sqrt(n)
    }, e.circleToSquare = function (e) {
        var t = e, r = Math.pow(t, 2), n = .5 * r;
        return Math.sqrt(n)
    }, HM.MathUtils = e
}();
var HM = HM || {};
!function (e) {
    "use strict";

    function t(t) {
        t.preventDefault();
        var r = t.currentTarget.href || t.target.parentNode.href;
        if (void 0 === r && (r = ""), n.isInternal(r)) {
            var i = document.location.protocol + "//" + e.location.host + "/", o = r.replace(i, "");
            HM.TemplateManager.path(o)
        } else -1 !== r.indexOf("mailto") ? e.location.href = r : e.open(r, "_blank");
        t.target._callback && t.target._callback()
    }

    function r(e) {
        return e.split("/").pop().split(".").length > 1
    }

    var n = {};
    n.parse = function (e, r) {
        e.classList.contains("ignoreParse") || (r && (e._callback = r), e.addEventListener(HM.MouseEvent.CLICK, t))
    }, n.kill = function (e) {
        e.removeEventListener(HM.MouseEvent.CLICK, t), e._callback && (e._callback = null)
    }, n.onClick = function (e) {
        t(e)
    }, n.click = function (t) {
        if (n.isInternal(t)) {
            var r = document.location.protocol + "//" + e.location.host + "/", i = t.replace(r, "");
            HM.TemplateManager.path(i)
        } else -1 !== t.indexOf("mailto") ? e.location.href = t : e.open(t, "_blank")
    }, n.isInternal = function (e) {
        for (var t = !1, n = Globals.WHITELISTED_DOMAINS.length, i = 0; i < n; i++) if (-1 !== e.indexOf(Globals.WHITELISTED_DOMAINS[i])) {
            t = !0;
            break
        }
        return r(e) && (t = !1), t
    }, e.HM.LinkParser = n
}(window);
var HM = HM || {};
!function (e) {
    "use strict";

    function t(e) {
        var t = e.currentTarget;
        t._size ? (t._perc = e.loaded / t._size, t._perc > 1 && (t._perc = 1), t._onUpdate(t._perc)) : !0 === e.lengthComputable && null !== t._onUpdate && t._onUpdate(e.loaded / e.total)
    }

    function r(e) {
        var n = e.currentTarget;
        if (4 == n.readyState && 200 == n.status) {
            if (n.removeEventListener(Event.PROGRESS, t, !0), n.removeEventListener(Event.READY_STATE_CHANGE, r, !1), 1 !== n._perc && n._onUpdate && (n._perc = 1, n._onUpdate(n._perc)), n._onComplete) {
                var i = [n.responseText];
                n._onCompleteParams && (i = i.concat(n._onCompleteParams)), n._onComplete.apply(n, i)
            }
            n = null
        } else n.readyState > 1 && (500 === n.status || 404 === n.status || 403 === n.status) && (n._onError && n._onError(n.statusText), n.removeEventListener(Event.PROGRESS, t, !0), n.removeEventListener(Event.READY_STATE_CHANGE, r, !1))
    }

    var n = {};
    n.load = function (n, i, o) {
        o = o || "GET", i = i || {};
        var s;
        return s = e.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), s._size = i.size || null, s._onComplete = i.onComplete || null, s._onUpdate = i.onUpdate || null, s._onError = i.onError || null, s._perc = 0, s._onCompleteParams = i.onCompleteParams || null, s.addEventListener(HM.Event.PROGRESS, t, !0), s.addEventListener(HM.Event.READY_STATE_CHANGE, r, !1), i.mimeType && s.overrideMimeType && s.overrideMimeType(i.mimeType), i.withCredentials && (s.withCredentials = !0), s.open(o, n, !0), i.json && s.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), s.send(i.json || null), s
    }, e.HM.Ajax = n
}(window);
TemplateManagerEvent = {}, TemplateManagerEvent.HASH_CHANGE = "TemplateManagerEvent.HASH_CHANGE";
var HM = HM || {};
!function (e) {
    function t(e) {
        var t = c.getPath();
        if (h = t, t = t.split("?")[0], c.useHistoryApi && (t = t.split("#")[0]), v = c.extractPath(t), "" === v && (v = m), c.hashChangeHook && !1 === c.hashChangeHook(v)) return !1;
        if (y !== v) {
            if (y = v, f.length > 0 && (g = !0, p = f.pop(), p.template.templateOut()), x.length > 0) {
                var n = x.pop();
                n.abort(), n = null
            }
            b.length > 0 && (b = []), _ ? i(l, v) : r(v)
        }
        u = h, c.trigger(TemplateManagerEvent.HASH_CHANGE, {fullUrl: h})
    }

    function r(e) {
        var t;
        "home" === e && (e = ""), t = c.defaultUrl + "/" + e + "?ajax=1";
        var r = HM.Ajax.load(t, {onComplete: i, onError: n, onCompleteParams: [e]});
        x.push(r)
    }

    function n(e) {
        console.log("error: " + e)
    }

    function i(e, t) {
        if (x.length > 0) {
            x.pop();
            null
        }
        if (_) e = e.querySelector(".template"); else {
            var r = document.createElement("div");
            r.innerHTML = e, e = r, e = e.querySelector(".template")
        }
        if (_) {
            var n = o(e, t);
            n.templateIn(), _ = !1
        } else if (g) b.push({path: t, data: e}); else {
            var n = o(e, t);
            n.templateIn(), g = !0
        }
    }

    function o(e, t) {
        s(e);
        var r = c.getTemplate(e, e.getAttribute("data-template"));
        return r.path = t, !0 !== c.trackGoogleAnalytics || _ || "undefined" != typeof ga && ga("send", "pageview", t), f.push({
            path: t,
            data: e,
            template: r
        }), r
    }

    function s(e) {
        var t = e.getAttribute("data-title");
        t || (t = ""), document.head.querySelector("title").textContent = t
    }

    var a, l, u, h, c = {}, d = [], f = [], p = {template: null}, g = !1, v = "", m = "", y = "", _ = !0, b = [],
        x = [];
    c.trackGoogleAnalytics = !0, c.useHistoryApi = !0, c.defaultUrl = document.location.protocol + "//" + e.location.host, c.defaultSubfolder = "", c.init = function (r, n) {
        l = r, n && (m = n), null === e.history && (c.useHistoryApi = !1), !0 === c.useHistoryApi ? e.addEventListener("popstate", t) : e.addEventListener("hashchange", t), y = "initialLoad", v = y, u = y, t()
    }, c.getTemplate = function (e, t, r) {
        for (var n, i = d.length, o = !1, s = 0; s < i; s++) if (d[s].templateName === t) {
            n = new d[s].template(e, r), o = !0;
            break
        }
        return o || console.error("Template with name: " + t + " not found"), n
    }, c.getCurrentActiveTemplate = function () {
        return f[0]
    }, c.extractPath = function (e) {
        for (var t, r = e.split("#"), n = r[r.length - 1].split("/"), i = [], o = n.length, s = 0; s < o; s += 1) null !== (t = n[s]) && "" !== t && i.push(t);
        return i.join("/")
    }, c.getPath = function () {
        var t = "";
        if (!0 === c.useHistoryApi) {
            var r = e.location.href;
            t = r.substring(c.defaultUrl.length + c.defaultSubfolder.length, r.length)
        } else t = e.location.hash;
        return t
    }, c.isTemplate = function (e) {
        return c.getPath().indexOf(e) > -1
    }, c.path = function (r, n) {
        !0 === c.useHistoryApi ? (r = "/" + r, history.pushState(r, r, r)) : e.location.hash = "/" + r, c.useHistoryApi && t(n)
    }, c.addTemplate = function (e, t) {
        d.push({templateName: e, template: t})
    }, c.nextTemplate = function (e) {
        if (a = e || {}, b.length > 0) {
            var t = b.pop();
            o(t.data, t.path).templateIn(), g = !0
        } else g = !1
    }, c.getPreviousTemplate = function () {
        return p.template
    }, c.getPreviousTemplateName = function () {
        var e = c.getPreviousTemplate();
        return e ? e.element.getAttribute("data-template") : null
    }, c.isInitialLoad = function () {
        return _
    }, c.resize = function () {
        var e = 0, t = f.length;
        for (e; e < t; e++) f[e].template.resize()
    }, HM.EventDispatcher.mixin(c), e.HM.TemplateManager = c
}(window), function (e) {
    "use strict";
    var t = {};
    t.debugMode = !0, t.width = e.innerWidth, t.height = e.innerHeight, t.halfWidth = Math.round(.5 * t.width), t.halfHeight = Math.round(.5 * t.height), t.framePadding = 10, t.headerHeight = 40, t.footerHeight = 50, t.STORY_MARGINS_MOBILE = {
        left: 20,
        right: 20,
        top: 30,
        bottom: 30
    }, t.STORY_MARGINS_NORMAL = {
        left: 80,
        right: 80,
        top: 30,
        bottom: 30
    }, t.SMALL_MIN_SIZE = 699, t.MED_MIN_SIZE = 1165, t.REG_MIN_SIZE = 1260, t.LARGE_MIN_SIZE = 1830, t.storyMargins = t.STORY_MARGINS_NORMAL, t.isStoryOneColumn, t.TIMELINE_MODULE = null, t.isTouch = BrowserDetect.MOBILE || BrowserDetect.TABLET, t.SITE_WRAPPER = null, t.TEMPLATE_LAYER = null, t.seenScrollIndicator = !1, t.WHITELISTED_DOMAINS = ["192.168", "127.0.0.1", "witness-change.local", "tranquil-thicket-11432.herokuapp.com", "witness-change-preview.herokuapp.com", "witness-change-live.herokuapp.com", "onedayinmyworld.com"], t.LOAD_COMPLETE = "load_complete", t.scrollController = new ScrollController, t.audioController = new AudioController, e.lastScrollY = 0, e.Globals = t
}(window), function (e) {
    "use strict";
    var t = {};
    t.buildModule = function (t, r, n) {
        if (null !== e[t] && void 0 !== e[t]) {
            return new e[t](r, t, n)
        }
        return console.log("ModuleFactory can't find module with name: " + t), null
    }, t.buildSubModules = function (e) {
        var r, n = 0, i = e.length, o = [];
        for (n; n < i; n++) (r = e[n].getAttribute("data-module")) && o.push(t.buildModule(r, e[n]));
        return o
    }, e.ModuleFactory = t
}(window);
Number.prototype.clamp = function (e, t) {
    return Math.min(Math.max(this, e), t)
}, function (e) {
    "use strict";

    function t() {
        Globals.SITE_WRAPPER = document.getElementById("siteWrapper"),
         Globals.TEMPLATE_LAYER = document.getElementById("templateLayer"),
         Globals.HEADER_MODULE = new HeaderModule(document.querySelector("header")), 
         Globals.LOADER_MODULE = new LoaderTextModule(document.querySelector(".LoaderTextModule")), 
         Globals.LOADER_MODULE.add("enter_site", o)
    }

    function r() {
        HM.TemplateManager.addTemplate("HomeTemplate", HomeTemplate),
             n(), s(), 
             e.addEventListener(HM.Event.RESIZE, a), e.onblur = function () {
            Globals.audioController.fadeOutAll(0, 0, 0)
        }, e.onfocus = function () {
            Globals.audioController.fadeInAll(0)
        }, a()
    }

    function n() {
        Globals.LOADER_MODULE.transitionIn(), l = Globals.TEMPLATE_LAYER.querySelector(".template").getAttribute("data-template"), "HomeTemplate" === l ? (HM.TemplateManager.init(Globals.TEMPLATE_LAYER, "home"), HM.TemplateManager.getCurrentActiveTemplate().template.add(Globals.LOAD_COMPLETE, i)) : i()
    }

    function i() {
        Globals.LOADER_MODULE.showEnterButton()
    }

    function o() {
        "HomeTemplate" === l ? Globals.LOADER_MODULE.transitionOut(function () {
            HM.TemplateManager.getCurrentActiveTemplate().template.transitionIn()
        }) : (HM.TemplateManager.init(Globals.TEMPLATE_LAYER, "home"), Globals.LOADER_MODULE.transitionOut())
    }

    function s() {
        for (var e = document.querySelectorAll("header a"), t = e.length, r = 0; r < t; r++) HM.LinkParser.parse(e[r])
    }

    function a() {
        Globals.width = e.innerWidth, Globals.height = e.innerHeight, Globals.halfWidth = Math.round(.5 * Globals.width), Globals.halfHeight = Math.round(.5 * Globals.height), Globals.width <= 699 ? Globals.storyMargins = Globals.STORY_MARGINS_MOBILE : Globals.storyMargins = Globals.STORY_MARGINS_NORMAL, HM.TemplateManager.resize()
    }

    var l, u = {};
    u.init = function () {
        var e = navigator.userAgent, n = document.querySelector("html");
        -1 !== e.indexOf("iPhone") || -1 !== e.indexOf("Android") && -1 !== e.indexOf("Mobile") ? n.classList.add("isTouch") : -1 !== e.indexOf("iPad") || -1 !== e.indexOf("Android") ? n.classList.add("isTouch") : n.classList.add("noTouch"), t(), r()
    }, e.Main = u
}(window), window.onload = Main.init;
