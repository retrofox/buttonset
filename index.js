

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
 *  - buttons {Array} buttonset buttons
 *  - unselectable {Boolean} allows unset the current setted option (default: true)
 *
 * @api public
 */

function ButtonSet(el, opts) {
  if (!(this instanceof ButtonSet)) return new ButtonSet(el, opts);
  Emitter.call(this);


  this.el = o(el);
  classes(this.el.get(0)).add('buttonset');
  this.options = opts || {};

  // add buttons
  if (this.options.buttons) {
    for (var i = 0; i < this.options.buttons.length; i++) {
      this.add(this.options.buttons[i]);
    }
  }

  // unseletable option is true by default
  this.options.unselectable = false !== this.options.unselectable ;

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
  if (o(e.target).hasClass('setted')) {
    if (!this.options.unselectable) return;
    return this.unset(this.el.find('a.setted'));
  }

  if (this.el.find('a.setted').length) {
    this.unset(this.el.find('a.setted'));
  }

  this.set(o(e.target));
};

/**
 * Set an option
 *
 * Emits `set` event
 *
 * @param {jQuery|Number} button option to select
 * @api public
 */

ButtonSet.prototype.set = function(button){
  button = 'number' == typeof button ? this.el.find('a').eq(button) : button;
  classes(button.get(0)).add('setted');
  this.emit('set', button);
  return this;
};

/**
 * Unset an option
 *
 * Emits `unset` event
 *
 * @param {jQuery|Number} button option to select
 * @api public
 */

ButtonSet.prototype.unset = function(button){
  button = 'number' == typeof buttons ? this.el.find('a').eq(button) : button;
  classes(button.get(0)).remove('setted');
  this.emit('unset', button);
  return this;
};
