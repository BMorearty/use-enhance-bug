const db = {};

export function get(key) {
  return db[key];
}

export function put(key, value) {
  db[key] = value;
}
