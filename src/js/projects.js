const tl = gsap.timeline();

tl.to(".titleGSAP", {
  opacity: 1,
});
tl.from(
  ".line",
  {
    duration: 1,
    stagger: {
      amount: 0.5,
    },
    width: "0%",
  },
  "-=.2"
);
tl.from(
  ".projects__nav-name",
  {
    duration: 1,
    stagger: {
      amount: 0.5,
    },
    y: 100,
  },
  "-=1.3"
);
tl.from(
  ".projects__nav-sub",
  {
    duration: 1,
    stagger: {
      amount: 0.5,
    },
    y: 120,
  },
  "-=1.1"
);