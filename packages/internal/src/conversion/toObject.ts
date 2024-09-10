
import {requireObjectCoercible} from "@/comparison/index";

type LanguageType = any

// https://tc39.es/ecma262/#sec-toobject
export function toObject(it: LanguageType) {
  return Object(requireObjectCoercible(it))
}