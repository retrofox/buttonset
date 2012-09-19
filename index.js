

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
 *  - buttons {Array} initial buttons
 *  - unselectable {Boolean} allows unset the current selected option (default false)
 *  - multiple {Boolean} allows multiple selections (default false)
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
 * @param {String|jQuery} button button/buttons to add
 * @api public
 */

ButtonSet.prototype.add = function(){
  for (var i = 0; i < arguments.length; i++) {
    this.el.append(o('<a href="#">' +  arguments[i] + '</a>'));
  }
};

/**
 * onSet event
 *
 * @param {Object} e event object
 * @api private
 */

ButtonSet.prototype.onSet = function(e){
  if (classes(e.target).has('selected')) {
    if (!this.options.unselectable) return;
    return this.unset(this.el.find('.selected'));
  }

  if (!this.options.multiple && this.el.find('.selected').length) {
    this.unset(this.el.find('.selected'));
  }

  this.set(o(e.target));
};

/**
 * Set the given button
 *
 * Emits `set` (el, index) event
 *
 * @param {jQuery|Number} button option to select
 * @api public
 */

ButtonSet.prototype.set = function(button){
  return this.change(button, true);
};

/**
 * Unset the given button
 *
 * Emits `unset` (el, index) event
 *
 * @param {jQuery|Number} button option to select
 * @api public
 */

ButtonSet.prototype.unset = function(button){
  return this.change(button, false);
};

/**
 * Set/Unset the given button
 *
 * @param {jQuery|Number} button option to select
 * @param {Boolean} set defines set or unset button
 * @api private
 */

ButtonSet.prototype.change = function(button, set){
  button = 'number' == typeof button ? this.el.find('a').eq(button) : button;
  if (!button.length) return false;

  classes(button.get(0))[set ? 'add' : 'remove']('selected');
  this.emit(set ? 'set' : 'unset', button, button.prevAll().length);
  return true;
};
