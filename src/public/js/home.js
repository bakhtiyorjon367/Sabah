console.log("Home frontend javascript file");

function fitElementToParent(el, padding) {
  let timeout = null;

  function resize() {
    if (timeout) clearTimeout(timeout);
    anime.set(el, { scale: 1 });
    let pad = padding || 0,
      parentEl = el.parentNode,
      elOffsetWidth = el.offsetWidth - pad,
      parentOffsetWidth = parentEl.offsetWidth,
      ratio = parentOffsetWidth / elOffsetWidth;
    timeout = setTimeout(anime.set(el, { scale: ratio }), 10);
  }

  resize();
  window.addEventListener("resize", resize);
}

// (function () {
//   const sphereEl = document.querySelector(".sphere-animation"),
//     spherePathEls = sphereEl.querySelectorAll(".sphere path"),
//     pathLength = spherePathEls.length,
//     animations = [];

//   fitElementToParent(sphereEl);

//   const breathAnimation = anime({
//     begin: function () {
//       for (let i = 0; i < pathLength; i++) {
//         animations.push(
//           anime({
//             targets: spherePathEls[i],
//             stroke: {
//               value: ["rgba(255,75,75,1)", "rgba(80,80,80,.35)"],
//               duration: 500,
//             },
//             translateX: [2, -4],
//             translateY: [2, -4],
//             easing: "easeOutQuad",
//             autoplay: false,
//           })
//         );
//       }
//     },
//     update: function (ins) {
//       animations.forEach(function (animation, i) {
//         let percent = (1 - Math.sin(i * 0.35 + 0.0022 * ins.currentTime)) / 2;
//         animation.seek(animation.duration * percent);
//       });
//     },
//     duration: Infinity,
//     autoplay: false,
//   });

//   const introAnimation = anime
//     .timeline({
//       autoplay: false,
//     })
//     .add(
//       {
//         targets: spherePathEls,
//         strokeDashoffset: {
//           value: [anime.setDashoffset, 0],
//           duration: 3900,
//           easing: "easeInOutCirc",
//           delay: anime.stagger(190, { direction: "reverse" }),
//         },
//         duration: 2000,
//         delay: anime.stagger(60, { direction: "reverse" }),
//         easing: "linear",
//       },
//       0
//     );

//   const shadowAnimation = anime(
//     {
//       targets: "#sphereGradient",
//       x1: "25%",
//       x2: "25%",
//       y1: "0%",
//       y2: "75%",
//       duration: 30000,
//       easing: "easeOutQuint",
//       autoplay: false,
//     },
//     0
//   );

//   function init() {
//     introAnimation.play();
//     breathAnimation.play();
//     shadowAnimation.play();
//   }

//   init();
// })();
//_______________________________________________________________________________

function fitElementToParent(el, padding) {
  var timeout = null;
  function resize() {
    if (timeout) clearTimeout(timeout);
    anime.set(el, {scale: 1});
    var pad = padding || 0;
    var parentEl = el.parentNode;
    var elOffsetWidth = el.offsetWidth - pad;
    var parentOffsetWidth = parentEl.offsetWidth;
    var ratio = parentOffsetWidth / elOffsetWidth;
    timeout = setTimeout(anime.set(el, {scale: ratio}), 10);
  }
  resize();
  window.addEventListener('resize', resize);
}

var advancedStaggeringAnimation = (function() {

  var staggerVisualizerEl = document.querySelector('.stagger-visualizer');
  var dotsWrapperEl = staggerVisualizerEl.querySelector('.dots-wrapper');
  var dotsFragment = document.createDocumentFragment();
  var grid = [20, 10];
  var cell = 55;
  var numberOfElements = grid[0] * grid[1];
  var animation;
  var paused = true;
  
  fitElementToParent(staggerVisualizerEl, 0);

  for (var i = 0; i < numberOfElements; i++) {
    var dotEl = document.createElement('div');
    dotEl.classList.add('dot');
    dotsFragment.appendChild(dotEl);
  }

  dotsWrapperEl.appendChild(dotsFragment);

  var index = anime.random(0, numberOfElements-1);
  var nextIndex = 0;

  anime.set('.stagger-visualizer .cursor', {
    translateX: anime.stagger(-cell, {grid: grid, from: index, axis: 'x'}),
    translateY: anime.stagger(-cell, {grid: grid, from: index, axis: 'y'}),
    translateZ: 0,
    scale: 1.5,
  });

  function play() {

    paused = false;
    if (animation) animation.pause();

    nextIndex = anime.random(0, numberOfElements-1);

    animation = anime.timeline({
      easing: 'easeInOutQuad',
      complete: play
    })
    .add({
      targets: '.stagger-visualizer .cursor',
      keyframes: [
        { scale: .75, duration: 120}, 
        { scale: 2.5, duration: 220},
        { scale: 1.5, duration: 450},
      ],
      duration: 300
    })
    .add({
      targets: '.stagger-visualizer .dot',
      keyframes: [
        {
          translateX: anime.stagger('-2px', {grid: grid, from: index, axis: 'x'}),
          translateY: anime.stagger('-2px', {grid: grid, from: index, axis: 'y'}),
          duration: 100
        }, {
          translateX: anime.stagger('4px', {grid: grid, from: index, axis: 'x'}),
          translateY: anime.stagger('4px', {grid: grid, from: index, axis: 'y'}),
          scale: anime.stagger([2.6, 1], {grid: grid, from: index}),
          duration: 225
        }, {
          translateX: 0,
          translateY: 0,
          scale: 1,
          duration: 1200,
        }
      ],
      delay: anime.stagger(80, {grid: grid, from: index})
    }, 30)
    .add({
      targets: '.stagger-visualizer .cursor',
      translateX: { value: anime.stagger(-cell, {grid: grid, from: nextIndex, axis: 'x'}) },
      translateY: { value: anime.stagger(-cell, {grid: grid, from: nextIndex, axis: 'y'}) },
      scale: 1.5,
      easing: 'cubicBezier(.075, .2, .165, 1)'
    }, '-=800')

    index = nextIndex;

  }

  play();

})();