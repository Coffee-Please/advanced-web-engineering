const { easing, keyframes, styler } = window.popmotion;

// first star

const divStyler = styler(document.querySelector(".star1"));

keyframes({
  values: [
    { x: 0, y: 20, scaleY: 1, scaleX: 1 },
    { x: 0, y: 15, scaleY: 0.5, scaleX: 0.5 },
    { x: 0, y: 11, scaleY: 0, scaleX: 0 },
    { x: 0, y: 7, scaleY: 0.5, scaleX: 0.5 },
    { x: 0, y: 3, scaleY: 1, scaleX: 1 }
  ],

  duration: 500,
  easings: [
    easing.easeInOut,
    easing.easeInOut,
    easing.easeInOut,
    easing.easeInOut
  ],
  yoyo: Infinity
}).start(divStyler.set);

// second star

const divStyler2 = styler(document.querySelector(".star2"));

keyframes({
  values: [
    { x: 0, y: 3, scaleY: 1, scaleX: 1 },
    { x: 0, y: 7, scaleY: 0.5, scaleX: 0.5 },
    { x: 0, y: 11, scaleY: 0, scaleX: 0 },
    { x: 0, y: 15, scaleY: 0.5, scaleX: 0.5 },
    { x: 0, y: 20, scaleY: 1, scaleX: 1 }
  ],

  duration: 500,
  easings: [
    easing.easeInOut,
    easing.easeInOut,
    easing.easeInOut,
    easing.easeInOut
  ],
  yoyo: Infinity
}).start(divStyler2.set);

// third star

const divStyler3 = styler(document.querySelector(".star3"));

keyframes({
  values: [
    { x: 0, y: 20, scaleY: 1, scaleX: 1 },
    { x: 0, y: 15, scaleY: 0.5, scaleX: 0.5 },
    { x: 0, y: 11, scaleY: 0, scaleX: 0 },
    { x: 0, y: 7, scaleY: 0.5, scaleX: 0.5 },
    { x: 0, y: 3, scaleY: 1, scaleX: 1 }
  ],

  duration: 500,
  easings: [
    easing.easeInOut,
    easing.easeInOut,
    easing.easeInOut,
    easing.easeInOut
  ],
  yoyo: Infinity
}).start(divStyler3.set);

// title

const divStyler4 = styler(document.getElementById("title"));

keyframes({
  values: [
    { color: 'rgba(255, 255, 255, 1)' },
    { color: 'rgba(0, 0, 0, 0.3)' },
    { color: 'rgba(0, 0, 0, 0.5)' },
    { color: 'rgba(0, 0, 0, 0.9)' },
    { color: 'rgba(0, 0, 0, 1)' }
  ],

  duration: 6000,
  easings: [
    easing.easeInOut,
    easing.easeInOut,
    easing.easeInOut,
    easing.easeInOut
  ],
  loop: Infinity
}).start(divStyler4.set);

// weather icon

const divStyler5 = styler(document.getElementById("weatherIcon"));

keyframes({
  values: [
    { rotateY: 180 },
    { rotateY: 0 },
    { rotateY: 180 },
    { rotateY: 0 },
    { rotateY: 180 }
  ],

  duration: 6000,
  easings: [
    easing.easeInOut,
    easing.easeInOut,
    easing.easeInOut,
    easing.easeInOut
  ],
  yoyo: Infinity
}).start(divStyler5.set);
