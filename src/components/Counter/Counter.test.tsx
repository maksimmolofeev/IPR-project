import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('', () => {
  it('should', () => {
    render(
      <Counter />
    )
    const value = screen.getByTestId('value')

    expect(value.textContent).toBe('0')
  })
})
