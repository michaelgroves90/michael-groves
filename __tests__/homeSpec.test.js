import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

vi.mock('next/head', () => ({
  default: ({ children }) => children
}))

vi.mock('next/image', () => ({
  default: props => <img alt={props.alt} src={props.src} />
}))

test('Home', () => {
  render(<Home />)
  expect(screen.getByRole('heading', { level: 1, name: 'Michael Groves' })).toBeDefined()
})
