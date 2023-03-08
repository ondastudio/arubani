//Splittext words
var charSplit = new SplitText(".is--char", {
  type: "chars",
  charsClass: "char"
});
//Splittext words
var wordSplit = new SplitText(".is--words", {
  type: "words",
  wordsClass: "word"
});
//SplitText lines
var lineSplit = new SplitText(".is--lines", {
  type: "lines",
  linesClass: "line"
});

// On Page Load
gsap.defaults({ duration: 1, ease: "power3.out" });
gsap.fromTo(
  ".hero-title .line",
  {
    y: "100%",
    opacity: 0
  },
  {
    y: "0%",
    opacity: 1,
    stagger: { each: 0.2 },
    delay: 3
  }
);

gsap.fromTo(
  ".hero-title2 .line",
  {
    y: "110%",
    opacity: 0
  },
  {
    y: "0%",
    opacity: 1,
    stagger: { each: 0.5 }
  }
);

// Scroll into view__Giant-letters
function letterStagger() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".how__s",
      start: "top center",
      end: "bottom top",
      toggleActions: "restart none none reverse"
    }
  });
  tl.from(".is--display .char", {
    y: "110%",
    opacity: 0,
    stagger: { each: 0.1 },
    ease: "power3.out",
    duration: 1
  });
}
letterStagger();

// Scroll into view
function footerAnimation() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer-section",
      start: "top 80%",
      end: "bottom top",
      toggleActions: "restart none none reverse"
    }
  });
  tl.to(".logo-container-desktop", {
    y: "-200%",
    opacity: 0,
    ease: "power4.out",
    duration: 1
  });
  tl.from(
    ".logo-naming-embed-foot",
    {
      x: "100%",
      opacity: 0,
      ease: "power4.out",
      duration: 1,
      delay: 0.5
    },
    0
  );
}
footerAnimation();

//sticky-footer-logo
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.create({
  trigger: ".footer-section",
  start: "top top",
  end: "bottom bottom",
  pin: ".footer-logo-wrap"
});

ScrollTrigger.create({
  trigger: ".research__s",
  start: "top top",
  end: "bottom bottom",
  pin: ".abs__wrapper.is--why"
});

ScrollTrigger.create({
  trigger: ".know-more__s",
  start: "top top",
  end: "bottom bottom",
  pin: ".abs__wrapper.is--how"
});
