import barba from "@barba/core";
import gsap from "gsap";
import "../css/index.css";
import { initScene1 } from "./scene1";
import { initScene2 } from "./scene2";
import { initScene3 } from "./scene3";
import { initScene4 } from "./scene4";
import { Modal } from "flowbite";

// const $targetEl = document.getElementById('questionMark');

// const options = {
//   backdrop: "dynamic",
//   closable: true
// }

// const modal = new Modal($targetEl, options);

const hamburgerBtn = document.getElementById("hamburger-button");
const mobileMenu = document.getElementById("mobile-menu");

const toggleMenu = () => {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");
  hamburgerBtn.classList.toggle("toggle-btn");
};

hamburgerBtn.addEventListener("click", toggleMenu);
mobileMenu.addEventListener("click", toggleMenu);

barba.hooks.after(() => {
  const hamburgerBtn = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    hamburgerBtn.classList.toggle("toggle-btn");
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
});

const squareContainer = document.querySelector(".square-container");

function fillSquares() {
  const desiredSquareSize = 80; // Adjust as needed

  const screenWidth = window.innerWidth;
  const numCols = Math.floor(screenWidth / desiredSquareSize);
  const numRows = Math.ceil(screenWidth / desiredSquareSize);

  squareContainer.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`;
  squareContainer.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;

  const totalSquares = numCols * numRows;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    squareContainer.appendChild(square);
  }

  const squares = Array.from(document.querySelectorAll(".square"));
  const randomSquares = gsap.utils.shuffle(squares);

  const timeline = gsap.timeline({
    defaults: { duration: 0.0005, ease: "expo.out" },
  });
  randomSquares.forEach((square, index) => {
    timeline.to(square, { opacity: 1 }, index * 0.001);
  });

  return timeline;
}

function clearSquares() {
  const squares = document.querySelectorAll(".square");
  const randomSquares = gsap.utils.shuffle(Array.from(squares));

  const timeline = gsap.timeline({ defaults: { duration: 0.005 } });

  randomSquares.forEach((square, index) => {
    timeline.to(square, { opacity: 0 }, index * 0.003);
  });

  timeline.eventCallback("onComplete", () => {
    squares.forEach((square) => {
      square.remove();
    });
  });

  return timeline;
}

const animationEnterHome = (container) => {
  const navElements = document.querySelectorAll(".navelement");

  const tl = gsap.timeline();

  tl.fromTo(
    container,
    {
      duration: 1,
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,

      ease: "power4.out",
    },
  )
    .from(navElements, {
      opacity: 0,
      y: 30,
      duration: 0.05,

      stagger: 0.1,
    })
    .to(
      ".marquee_group",
      {
        x: "-100%",
        duration: 30,
        repeat: -1,
        ease: "linear",
      },
      "-=2",
    );
};

const animationEnterAboutMe = (container) => {
  const navElements = document.querySelectorAll(".navelement");

  const tl = gsap.timeline();

  tl.fromTo(
    container,
    {
      duration: 1,
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,

      ease: "power4.out",
    },
  )
    .from(navElements, {
      opacity: 0,
      yPercent: 101,
      duration: 0.05,
      stagger: 0.1,
    })
    .from(".octopus", {
      x: -1200,
      duration: 0.3,
    })
    .from(".outline-title-yellow", {
      x: 1200,
      duration: 0.3,
    })

    .from("p", { yPercent: 2000, duration: 0.2 });
};

const animationEnterSkills = (container) => {
  const navElements = document.querySelectorAll(".navelement");

  const tl = gsap.timeline();

  tl.fromTo(
    container,
    {
      duration: 1,
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,

      ease: "power4.out",
    },
  )
    .from(navElements, {
      opacity: 0,
      y: 100,
      duration: 0.05,
      stagger: 0.1,
    })
    .from(".front", {
      x: 800,
      duration: 0.2,
    })
    .from(".back", {
      x: -800,
      duration: 0.2,
    })
    .from(".pfront", { x: 800, stagger: 0.1 }, "-=0.5")
    .from(".pback", { x: -800, stagger: 0.1 }, "-=0.5")
    .from(
      ".social",
      {
        opacity: 0,
        y: 100,
        duration: 0.2,
        stagger: 0.1,
      },
      "-=0.3",
    );
};

const animationEnterProjects = (container) => {
  const navElements = document.querySelectorAll(".navelement");
  const images = container.querySelectorAll(".image");

  const tl = gsap.timeline();

  tl.fromTo(
    container,
    {
      duration: 1,
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,

      ease: "power4.out",
    },
  )
    .from(navElements, {
      opacity: 0,
      y: 100,
      duration: 0.05,
      stagger: 0.1,
    })

    .from(".outline-title-rosa", {
      x: -1200,
      duration: 0.4,
    })
    .from(".projectdiv", {
      xPercent: -301,
      stagger: 0.1,
    })

    .from(
      ".social",
      {
        opacity: 0,
        y: 100,
        duration: 0.2,
        stagger: 0.1,
      },
      "-=0.1",
    );
};

const animationEnterContact = (container) => {
  const navElements = document.querySelectorAll(".navelement");

  const tl = gsap.timeline();

  tl.fromTo(
    container,
    {
      duration: 1,
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,

      ease: "power4.out",
    },
  )
    .from(navElements, {
      opacity: 0,
      y: 100,
      duration: 0.05,
      stagger: 0.1,
    })
    .from(".text-container", {
      x: 800,
      duration: 0.2,
    })
    .from(".contact-container", {
      x: -800,
      duration: 0.2,
    })
    .from(
      ".social",
      {
        opacity: 0,
        y: 100,
        duration: 0.2,
        stagger: 0.1,
      },
      "-=0.3",
    )
    .from(".hand", {
      y: 800,
      x: 200,
      duration: 1.5,
    })
    .to(".hand", {
      y: 20,
      x: -280,
      duration: 0.2,
      repeat: 2,
      yoyo: true,

      delay: 0.5,
    })
    .to(".hand", { y: 0, x: -300, duration: 0.2 });
};

const animationEnterProject = (container) => {
  const navElements = document.querySelectorAll(".navelement");
  const elements = document.querySelectorAll(".element");

  const tl = gsap.timeline();

  tl.fromTo(
    container,
    {
      duration: 1,
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,

      ease: "power4.out",
    },
  )
    .from(navElements, {
      opacity: 0,
      y: 100,
      duration: 0.05,
      stagger: 0.1,
    })
    .from(elements, {
      opacity: 0,
      y: 100,
      duration: 0.2,
      stagger: 0.2,
    })
    .from(
      ".social",
      {
        opacity: 0,
        y: 100,
        duration: 0.2,
        stagger: 0.1,
      },
      "-=0.3",
    );
};

const animationLeave = (container) => {
  gsap.fromTo(
    container,
    {
      duration: 1,
      autoAlpha: 1,
    },
    {
      autoAlpha: 0,

      ease: "power4.out",
    },
  );
};

const loadingScreenTransition = () => {
  const tl = gsap.timeline();

  tl.to("#counter", {
    innerText: 100,
    duration: 2,
    snap: { innerText: 4 },
  })
    .to("#loading-screen", {
      x: "-100%",
      ease: "bounce",
      // delay: 2,
      duration: 2.5,
      onComplete: () => {
        // Animation complete, add the 'hidden' class
        document.getElementById("loading-screen").classList.add("hidden");
      },
    })
    .from(
      "#main-page",
      {
        x: "100%",
        ease: "bounce",
        duration: 2.5,
      },
      2,
    )
    .from(
      ".questionmark",
      {
        x: "25%",
        y: "50%",
        ease: "expoScale(0.5,7,none)",

        scale: 500,
        duration: 2,
      },
      "-=0.5",
    )
    .from(".marquee", {
      x: "100%",
      // duration: 6,
      duration: window.innerWidth / 300,
      ease: "linear",
    })
    .to(".marquee_group", {
      x: "-100%",
      duration: 30,
      repeat: -1,
      ease: "linear",
    });

  return tl;
};

barba.hooks.after((data) => {
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
    loadingScreen.classList.add("hidden");
  }
});

barba.init({
  views: [
    {
      namespace: "home",
      beforeEnter() {
        initScene1();
        initScene2();
        // const modalBtn = document.querySelector(".questionmark");
        // console.log(modalBtn);
        // modalBtn.addEventListener("click", function () {
        //   console.log("clicked");
        // });
      },
    },
    {
      namespace: "aboutme",
      beforeEnter() {
        initScene4();
        // initAboutme();
      },
      after() {
        body.classList.remove("overflow-hidden");
      },
    },
    {
      namespace: "skills",
      beforeEnter() {
        initScene3();
      },
    },
    {
      namespace: "projects",
      beforeEnter() {
        const video = document.querySelector(".bg-video video");
        video.play();
      },
    },
    {
      namespace: "project",
      beforeEnter() {
        document.body.classList.remove("overflow-hidden");
      },
      beforeLeave({ current }) {
        document.body.classList.add("overflow-hidden");
      },
    },
  ],

  transitions: [
    {
      name: "home",
      to: {
        namespace: ["home"],
      },
      once() {
        loadingScreenTransition();
      },
      async leave(data) {
        await fillSquares();
        animationLeave(data.current.container);
      },
      async enter(data) {
        await animationEnterHome(data.next.container);
        clearSquares();
      },
    },
    {
      name: "aboutme",
      to: {
        namespace: ["aboutme"],
      },
      async once(data) {
        await animationEnterAboutMe(data.next.container);
        clearSquares();
      },
      async leave(data) {
        await fillSquares();
        animationLeave(data.current.container);
      },
      async enter(data) {
        await animationEnterAboutMe(data.next.container);
        clearSquares();
      },
    },
    {
      name: "skills",
      to: {
        namespace: ["skills"],
      },
      async once(data) {
        await animationEnterSkills(data.next.container);
        clearSquares();
      },
      async leave(data) {
        await fillSquares();
        animationLeave(data.current.container);
      },
      async enter(data) {
        await animationEnterSkills(data.next.container);
        clearSquares();
      },
    },
    {
      name: "contact",
      to: {
        namespace: ["contact"],
      },
      async once(data) {
        await animationEnterContact(data.next.container);
        clearSquares();
      },
      async leave(data) {
        await fillSquares();
        animationLeave(data.current.container);
      },
      async enter(data) {
        await animationEnterContact(data.next.container);
        clearSquares();
      },
    },
    {
      name: "projects",
      to: {
        namespace: ["projects"],
      },
      async once(data) {
        await animationEnterProjects(data.next.container);
        clearSquares();
      },
      async leave(data) {
        await fillSquares();
        animationLeave(data.current.container);
      },
      async enter(data) {
        await animationEnterProjects(data.next.container);
        clearSquares();
      },
    },
    {
      name: "project",
      to: {
        namespace: ["project"],
      },
      async once(data) {
        await animationEnterProject(data.next.container);
        clearSquares();
      },
      async leave(data) {
        await fillSquares();
        animationLeave(data.current.container);
      },
      async enter(data) {
        await animationEnterProject(data.next.container);
        clearSquares();
      },
    },
  ],
});
