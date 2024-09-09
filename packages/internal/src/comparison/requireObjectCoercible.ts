
import {isNullOrUndefined} from "./isNullOrUndefined";

// https://tc39.es/ecma262/#sec-requireobjectcoercible
export function requireObjectCoercible(it: any) {
  if(isNullOrUndefined(it)) throw new TypeError("Cannot call method on " + it);
  return it
}