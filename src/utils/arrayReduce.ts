export function arrayReduce<T> (
  array: T[],
  reduceFunc: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T,
  initialValue: T
): T {
  return array.reduce(reduceFunc, initialValue)
}
