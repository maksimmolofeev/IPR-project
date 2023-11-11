export function arrayReduce<T, U> (
  array: T[],
  reduceFunc: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U,
  initialValue: U
): U {
  return array.reduce(reduceFunc, initialValue)
}
