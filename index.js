

/**
 * Module dependencies.
 */

var classes = require('classes')
  , o = require('jquery');

/**
 * Expose `ButtonSet`.
 */

module.exports = ButtonSet;

/**
 * Initialize a new `ButtonSet`.
 *
 * @param {String|Object} el reference element
 * @param {Object} opts options
 *
 * @api public
 */

function ButtonSet(el, opts) {
  if (!(this instanceof ButtonSet)) return new ButtonSet(el, opts);

  this.el = o(el).addClass('buttonset');
  this.options = opts || [];

  // add options
  if (this.options) {
    for (var i = 0; i < this.options.length; i++) {
      this.add(this.options[i]);
    }
  }
}

/**
 * Add a new option
 *
 * @param {String|jQuery} el option element
 * @api public
 */

ButtonSet.prototype.add = function(el){
  this.el.append(o('<a href="#">' + el + '</a>'));
};
