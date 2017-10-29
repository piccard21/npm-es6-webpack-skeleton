  import _ from 'lodash'; 
  import printMe from './lib/print.js';
  import {
      cube
  } from './lib/math.js';
  import * as pointClass from './lib/class.Point.js';

  // say, if you are in development-mode
  if (process.env.NODE_ENV !== 'production') {
      console.log('Looks like we are in development mode!');
  }
  
  // make this accessable
  export function hello() {
      return _.join(['Hello', 'world'], ' ');
  };
  export function cubeString(num) {
      return num + ' cubed is equal to ' + cube(num);
  };
  export const cubeFunction = cube;
  export function printConsole() {
      printMe();
  };
  export const point = new pointClass.Point();
  export const colorpoint = new pointClass.ColorPoint();

  
  export function numFormatter(number, locale) {
      return number.toLocaleString(locale);
  };