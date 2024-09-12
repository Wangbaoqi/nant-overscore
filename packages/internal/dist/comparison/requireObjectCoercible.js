'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const isNullOrUndefined = require('./isNullOrUndefined.js');

// https://tc39.es/ecma262/#sec-requireobjectcoercible
function requireObjectCoercible(it) {
    if (isNullOrUndefined.isNullOrUndefined(it))
        throw new TypeError("Cannot call method on " + it);
    return it;
}

exports.requireObjectCoercible = requireObjectCoercible;
