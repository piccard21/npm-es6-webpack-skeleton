  import _ from 'lodash';
  import * as mathLib from './lib/math.js';
  import {
      cube,
      square,
      diag as d
  } from './lib/math.js';
  import printMe from './lib/print.js';
  import * as pointLib from './lib/class.Point.js';

  // are we in development-mode?
  if (process.env.NODE_ENV !== 'production') {
      console.log('Looks like we are in development mode!');
  }

  // exports
  export default function(x) {
      return 'I am the default function.';
  }
  export function hello() {
      return _.join(['Hello', 'world'], ' ');
  };
  export function print(num) {
      return printMe();
  };
  export function numFormatter(number, locale) {
      return number.toLocaleString(locale);
  };
  export const math = mathLib;
  export const mathSelection = {
      cube: cube,
      square: square,
      diag: d,
  };
  export const point = pointLib;