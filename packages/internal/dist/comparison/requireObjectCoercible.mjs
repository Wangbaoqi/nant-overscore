import { isNullOrUndefined } from './isNullOrUndefined.mjs';

// https://tc39.es/ecma262/#sec-requireobjectcoercible
function requireObjectCoercible(it) {
    if (isNullOrUndefined(it))
        throw new TypeError("Cannot call method on " + it);
    return it;
}

export { requireObjectCoercible };
