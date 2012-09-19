
# Buttonset

  Buttonset component

  ![js buttonset
  component](http://f.cl.ly/items/2a3a0j3H2p3v1Q0Q2w08/Screen%20Shot%202012-09-18%20at%208.52.24%20PM.png)

## Installation

```
$ npm install buttonset-component
```

## Events

  - `set` when an option (opt) is setted.
  - `unset` when an option (opt) is unsetted.

## Example

```js
var Buttonset = require('buttonset');

new Buttonset('.buttonset-placeholder', {
  options: ['A', 'B', 'C', 'D'],
  unselectable: true
}).set(2)
  .on('set', function(opt){
    console.log('setted "%s"', opt.text());
  })
  .on('unset', function(opt){
    console.log('unsetted "%s"', opt.text());
  });
```

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
