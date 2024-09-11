import type { LanguageType } from "../types/languageType";

// eslint-disable-next-line import/no-anonymous-default-export
export function isNullOrUndefined(it: LanguageType) {
  return it === null || it === undefined
}