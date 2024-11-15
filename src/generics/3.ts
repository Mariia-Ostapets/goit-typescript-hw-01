function merge<T extends Object, U extends Object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}
