import { requireObjectCoercible } from '../comparison/requireObjectCoercible.mjs';

// https://tc39.es/ecma262/#sec-toobject
function toObject(it) {
    return Object(requireObjectCoercible(it));
}

export { toObject };
