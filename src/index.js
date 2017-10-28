  import _ from 'lodash';
  import printMe from './print.js';
  import {
      cube
  } from './math.js';

  function component1() {
      var element = document.createElement('div');
      var btn = document.createElement('button');
      element.innerHTML = _.join(['Hello', 'webpack'], ' ');
      btn.innerHTML = 'Click me and check the console!';
      btn.onclick = printMe;
      element.appendChild(btn);
      return element;
  }

  function component2() {
      var element = document.createElement('pre');
      element.innerHTML = ['Hello webpack!', '5 cubed is equal to '+ cube(5)].join('\n\n');
      return element;
  }
  document.body.appendChild(component1());
  document.body.appendChild(component2());