

const deepClone = (source) => {

  const t = type(source);

  if (t !== 'Object' && t !== 'Array') return source;

  const target = Array.isArray(source) ? [] : {};

  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = deepClone(source[key]);
    }
  }

  return target;
}


const type = (source) => {
  return Object.prototype.toString.call(source).slice(8, -1);
}



// test
const aNull = deepClone(null);
console.log(aNull);
const aUndefined = deepClone(undefined);
console.log(aUndefined);
const aNumber = deepClone(123);
console.log(aNumber);
const aString = deepClone('123');
console.log(aString);
const aSymbol = deepClone(Symbol('symbol'));
console.log(aSymbol);

function foo() {
  console.log('foo');
}
const aFun = deepClone(foo);
aFun.length = 100;
console.log(aFun.length, foo.length, 'function name');


const aObject = deepClone({ a: 1, b: 2 });
console.log(aObject);
const aArray = deepClone([1, 2, 3]);
console.log(aArray);