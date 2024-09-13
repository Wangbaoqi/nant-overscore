export type LanguageType = object | string | number | bigint | boolean | symbol | null | undefined;


export type ESZeroType = 0 | -0;


// the project of object
export type PropertyKey = string | symbol;


export type ObjectSelf = {
  [key: string | number | symbol]: object
}