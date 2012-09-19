
# ButtonSet

  ButtonSet component

  ![js buttonset
  component](http://f.cl.ly/items/2T2j301q1M0K0P3a1h21/Screen%20Shot%202012-09-19%20at%206.01.08%20PM.png)

## Installation

```
$ npm install buttonset-component
```

## Events

  - `set` (button, index) when an button is selected.
  - `unset` (button, index) when an button is unselected.

## Example

```js
var ButtonSet = require('buttonset');

var bset = new ButtonSet('.buttonset-placeholder');
bset.add('A');
bset.add('B', 'C', 'D');

bset.set(1);

bset.on('set', function(button, index){
  console.log('SET button "%s". index: %s', button.text(), index);
});

bset.on('unset', function(button, index){
  console.log('UNSET button "%s". index: %s', button.text(), index);
});
```

## API

### ButtonSet(el, options)

  Creates a new `ButtonSet` append to the given el element with the follows (optional) options.

  - buttons {Array} initial buttons
  - unselectable {Boolean} allows unset the current selected option (default false)
  - multiple {Boolean} allows multiple selections (default false)
  - select {Number} allows select initial option

### ButtonSet#set(button)

  Add `button` to the buttonset.

### ButtonSet#unset(button)

  Unset `button` from the buttonset, returning __true__ when present,
  otherwise returning __false__.

## License

(The MIT License)
Copyright(c) 2012 Damian Suarez <rdsuarez@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
