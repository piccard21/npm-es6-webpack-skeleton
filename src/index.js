  import _ from 'lodash';
  import printMe from './print.js';
  import {
      cube
  } from './math.js';


  if (process.env.NODE_ENV !== 'production') {
      console.log('Looks like we are in development mode!');
  }

  // function component1() {
  //     var element = document.createElement('div');
  //     var btn = document.createElement('button');
  //     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  //     btn.innerHTML = 'Click me and check the console!';
  //     btn.onclick = printMe;
  //     element.appendChild(btn);
  //     return element;
  // }

  // function component2() {
  //     var element = document.createElement('pre');
  //     element.innerHTML = ['Hello webpack!', '5 cubed is equal to ' + cube(5)].join('\n\n');
  //     return element;
  // }
  // document.body.appendChild(component1());
  // document.body.appendChild(component2());



  export function hello() {
      return _.join(['Hello', 'world'], ' ');
  };
  export function cubeString(num) {
      return num + ' cubed is equal to ' + cube(num);
  };
  export const cubeFunction=cube;

  export function printConsole() {
      printMe();
  };