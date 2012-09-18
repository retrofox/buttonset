

/**
 * Module dependencies.
 */

var Emitter = require('emitter')
  , classes = require('classes')
  , inherit = require('inherit')
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
  Emitter.call(this);

  this.el = o(el).addClass('buttonset');
  this.options = opts || [];

  // add options
  if (this.options) {
    for (var i = 0; i < this.options.length; i++) {
      this.add(this.options[i]);
    }
  }

  // bind click event to options
  this.el.on('click', 'a', this.onSet.bind(this));

  return this;
}

/**
 * Inherits from `Emitter.prototype`.
 */

inherit(ButtonSet, Emitter);

/**
 * Add a new option
 *
 * @param {String|jQuery} el option element
 * @api public
 */

ButtonSet.prototype.add = function(el){
  this.el.append(o('<a href="#">' + el + '</a>'));
};


/**
 * onSet event
 *
 * @param {Object} e event object
 * @api private
 */

ButtonSet.prototype.onSet = function(e){
  this.unset(this.el.find('a.setted'));
  this.set(o(e.target));
};

/**
 * Set an option
 *
 * @param {jQuery|Number} opt option to select
 * @api public
 */

ButtonSet.prototype.set = function(opt){
  opt = 'number' == typeof opts ? this.el.find('a').get(opt) : opt;
  opt.addClass('setted');
  this.emit('set', opt);
};

/**
 * Unset an option
 *
 * @param {jQuery|Number} opt option to select
 * @api public
 */

ButtonSet.prototype.unset = function(opt){
  opt = 'number' == typeof opts ? this.el.find('a').get(opt) : opt;
  opt.removeClass('setted');
  this.emit('unset', opt);
};
