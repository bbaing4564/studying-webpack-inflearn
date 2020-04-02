// ES6
import _ from 'lodash';

// ES5
// let _ = require('lodash');

function component() {
  let element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());