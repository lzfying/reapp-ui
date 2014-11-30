var Component = require('./component');
var LayeredView = require('./mixins/LayeredView');

module.exports = function(name, spec) {
  spec.mixins = (spec.mixins || []).concat(LayeredViewMixin);
  return Component(name, spec);
};