const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true },
});

// Couleur du body
scroll.on("scroll", () => {
  if (document.querySelector("#color.is-inview")) {
    document.body.style.background = "#83b8e3";
    document.body.style.color = "#000101";
  } else {
    document.body.style.background = "#ffc397";
    document.body.style.color = "#000101";
  }
});
