import { describe, expect, it } from 'vitest'
import { arrayReduce } from './arrayReduce'

describe('arrayReduce', () => {
  it('Передаем массив в функцию', function () {
    const sum = arrayReduce([1, 2, 3], (acc, val) => (acc + val), 0)

    expect(sum).toBe(6)
  })

  it('Передаем объект в функцию', function () {
    const obj = { a: 1, b: 2, c: 3 }
    const result = arrayReduce(Object.values(obj), (acc, val) => acc + val, 0)

    expect(result).toBe(6)
  })
})
