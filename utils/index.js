export function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

export function camelize(str) {
  return str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '');
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function dasherize(str) {
  return str.charAt(0).toLowerCase() + str.slice(1).replace(/([A-Z])/g, (_, c) => `-${c}`.toLowerCase());
}

export function toComponentName(str) {
  return capitalize(camelize(str));
}
