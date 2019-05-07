function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

function cloneObject(to, from) {
  for (const key in from) {
    if (from.hasOwnProperty(key)) {
      to[key] = deepClone(from[key]);
    }
  }
  return to;
}

export default function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  if (isObject(obj)) {
    return cloneObject({}, obj);
  }
  return obj;
}
