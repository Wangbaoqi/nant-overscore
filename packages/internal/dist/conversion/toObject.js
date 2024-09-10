'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const requireObjectCoercible = require('../comparison/requireObjectCoercible.js');

// https://tc39.es/ecma262/#sec-toobject
function toObject(it) {
    return Object(requireObjectCoercible.requireObjectCoercible(it));
}

exports.toObject = toObject;
