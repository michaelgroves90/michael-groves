import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
 
test('Home', () => {
  render(<Home />)
  expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
})