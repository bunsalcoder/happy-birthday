(() => {
  var e = {},
    t = {};
  function a(o) {
    var i = t[o];
    if (void 0 !== i) return i.exports;
    var n = (t[o] = { exports: {} });
    return e[o](n, n.exports, a), n.exports;
  }
  (a.rv = function () {
    return "1.2.3";
  }),
    (a.ruid = "bundler=rspack@1.2.3");
  let o = "",
    i = null,
    n = !1,
    r = () => {
      let e = document.getElementsByClassName("hbd-chatbox")[0],
        t = document.getElementsByClassName("wish-hbd")[0];
      (e.innerHTML = `<span>${e.innerHTML
        .split("")
        .join("</span><span>")}</span`),
        (t.innerHTML = `<span>${t.innerHTML
          .split("")
          .join("</span><span>")}</span`);
      let a = { opacity: 0, y: -20, rotationX: 5, skewX: "15deg" },
        o = { opacity: 0, y: 20, rotationY: 5, skewX: "-15deg" },
        i = new TimelineMax();
      i
        .to(".container", 0.1, { visibility: "visible" })
        .from(".one", 0.7, { opacity: 0, y: 10 })
        .from(".two", 0.4, { opacity: 0, y: 10 })
        .to(".one", 0.7, { opacity: 0, y: 10 }, "+=2.5")
        .to(".two", 0.7, { opacity: 0, y: 10 }, "-=1")
        .from(".three", 0.7, { opacity: 0, y: 10 })
        .to(".three", 0.7, { opacity: 0, y: 10 }, "+=2")
        .from(".four", 0.7, { scale: 0.2, opacity: 0 })
        .from(".fake-btn", 0.3, { scale: 0.2, opacity: 0 })
        .staggerTo(".hbd-chatbox span", 0.5, { visibility: "visible" }, 0.05)
        .to(".fake-btn", 0.1, { backgroundColor: "#8FE3B6" })
        .to(".four", 0.5, { scale: 0.2, opacity: 0, y: -150 }, "+=0.7")
        .from(".idea-1", 0.7, a)
        .to(".idea-1", 0.7, o, "+=1.5")
        .from(".idea-2", 0.7, a)
        .to(".idea-2", 0.7, o, "+=1.5")
        .from(".idea-3", 0.7, a)
        .to(".idea-3 strong", 0.5, {
          scale: 1.2,
          x: 10,
          backgroundColor: "rgb(21, 161, 237)",
          color: "#fff",
        })
        .to(".idea-3", 0.7, o, "+=1.5")
        .from(".idea-4", 0.7, a)
        .to(".idea-4", 0.7, o, "+=1.5")
        .from(
          ".idea-5",
          0.7,
          {
            rotationX: 15,
            rotationZ: -10,
            skewY: "-5deg",
            y: 50,
            z: 10,
            opacity: 0,
          },
          "+=0.5"
        )
        .to(".idea-5 .smiley", 0.7, { rotation: 90, x: 8 }, "+=0.4")
        .to(".idea-5", 0.7, { scale: 0.2, opacity: 0 }, "+=2")
        .staggerFrom(
          ".idea-6 span",
          0.8,
          { scale: 3, opacity: 0, rotation: 15, ease: Expo.easeOut },
          0.2
        )
        .staggerTo(
          ".idea-6 span",
          0.8,
          { scale: 3, opacity: 0, rotation: -15, ease: Expo.easeOut },
          0.2,
          "+=1"
        )
        .staggerFromTo(
          ".baloons img",
          2.5,
          { opacity: 0.9, y: 1400 },
          { opacity: 1, y: -1e3 },
          0.2
        )
        .from(
          ".panda-dp",
          0.5,
          { scale: 3.5, opacity: 0, x: 25, y: -25, rotationZ: -45 },
          "-=2"
        )
        .from(".hat", 0.5, { x: -100, y: 350, rotation: -180, opacity: 0 })
        .staggerFrom(
          ".wish-hbd span",
          0.7,
          {
            opacity: 0,
            y: -50,
            rotation: 150,
            skewX: "30deg",
            ease: Elastic.easeOut.config(1, 0.5),
          },
          0.1
        )
        .staggerFromTo(
          ".wish-hbd span",
          0.7,
          { scale: 1.4, rotationY: 150 },
          { scale: 1, rotationY: 0, color: "#ff69b4", ease: Expo.easeOut },
          0.1,
          "party"
        )
        .from(".wish h5", 0.5, { opacity: 0, y: 10, skewX: "-15deg" }, "party")
        .staggerTo(
          ".eight svg",
          1.5,
          {
            visibility: "visible",
            opacity: 0,
            scale: 80,
            repeat: 3,
            repeatDelay: 1.4,
          },
          0.3
        )
        .to(".six", 0.5, { opacity: 0, y: 30, zIndex: "-1" })
        .staggerFrom(".nine p", 1, a, 1.2)
        .to(".last-smile", 0.5, { rotation: 90 }, "+=1"),
        document.getElementById("replay").addEventListener("click", () => {
          i.restart();
        });
    };
  fetch("wishes.json")
    .then((e) => e.json())
    .then((e) => {
      (dataArr = Object.keys(e)).map((t) => {
        "" !== e[t] &&
          ("imagePath" === t
            ? document
                .querySelector(`[data-node-name*="${t}"]`)
                .setAttribute("src", e[t])
            : "fonts" === t
            ? e[t].forEach((e) => {
                let t = document.createElement("link");
                (t.rel = "stylesheet"),
                  (t.href = e.path),
                  document.head.appendChild(t),
                  (document.body.style.fontFamily = e.name);
              })
            : "music" === t
            ? ((i = new Audio(e[t])).preload = "auto")
            : (document.querySelector(`[data-node-name*="${t}"]`).innerText =
                e[t])),
          dataArr.length === dataArr.indexOf(t) + 1 &&
            document
              .querySelector("#startButton")
              .addEventListener("click", () => {
                (document.querySelector(".startSign").style.display = "none"),
                  r();
              });
      });
    });
  let s = document.getElementById("playPauseButton");
  function c(e) {
    i && ((n = e), e ? i.play() : i.pause(), s.classList.toggle("playing", e));
  }
  document.getElementById("startButton").addEventListener("click", () => {
    i && c(!0);
  }),
    s.addEventListener("click", () => {
      i && c(!n);
    });
})();
//# sourceMappingURL=bundle.js.map
