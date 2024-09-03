
// host environment eg. nodejs or browser
const documentAll = typeof document === 'object' && document.all;

// IsHTMLDDA-internal-slot and IsLooselyEqual and ToBoolean
const IsHTMLDDA = typeof documentAll == 'undefined' && documentAll === 'undefined';

export function IsCallable(argument) {

  if (IsHTMLDDA) return typeof argument === 'function' || argument === documentAll;

  return typeof argument === 'function';
}