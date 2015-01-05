var {
  symmetrical,
  decreaseOnExit,
  increaseOnEnter,
  decreaseOnEnter,
  scaleBetween
} = require('../../lib/animate/helpers');

var Animations = module.exports = {
  viewParallax({ index, step, width }) {
    var translateX = (index - step) * width;

    if (index < step)
      translateX = translateX / 2;

    return {
      translate: { x: translateX },
      boxShadow: `0 0 15px rgba(0,0,0,${increaseOnEnter(index, step) / 2})`
    };
  },

  viewSideBySide({ index, step, width }) {
    return {
      translate: { x: (index - step) * width }
    };
  },

  fadeToLeft({ index, step, width }) {
    return {
      translate: { x: - (step - index) * (width/2.5) },
      opacity: symmetrical(index, step)
    };
  },

  down({ index, step }) {
    return {
      opacity: symmetrical(index, step),
      height: symmetrical(index, step) * 100 + '%'
    };
  },

  moveToRight({ index, step, width }) {
    return {
      translate: { x: (step - index) * (width/2.5) }
    };
  },

  card({ index, step }) {
    return {
      translate: { y: step * index + symmetrical(step) * 10 }
    };
  },

  fade({ index, step }) {
    return {
      opacity: symmetrical(index, step)
    };
  },

  fadeOnEnter({ index, step }) {
    return {
      opacity: symmetrical(index, step) / 2
    };
  },

  scaleDown({ index, step }) {
    return {
      scale: scaleBetween(decreaseOnExit(index, step), 2, 0, 1.2, 0.8)
    };
  },

  rotate({ index, step }) {
    return {
      rotate: step * 360
    };
  }
};