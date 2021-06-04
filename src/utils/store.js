/**
 * 
 * @param {{ key: any }} value 
 */
exports.set = (value) => {
  global.store = { ...global.store, ...value };
}

exports.get = (key) => {
  try {
    return global.store[key];
  } catch (e) {
    return null;
  }
}

exports.delete = (key) => {
  try {
    delete global.store[key];
  } catch (e) {
    console.log('[ERROR]:', e);
  }
}

