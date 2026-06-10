import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ThemeProvider, useTheme } from '../context/ThemeContext'

function TestComponent() {
  const { theme, toggleTheme } = useTheme()
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button data-testid="toggle" onClick={toggleTheme}>Toggle</button>
    </div>
  )
}

describe('ThemeContext', () => {
  it('provides a default theme', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    )
    expect(screen.getByTestId('theme')).toHaveTextContent(/dark|light/)
  })

  it('toggles theme on button click', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    )
    const themeEl = screen.getByTestId('theme')
    const toggle = screen.getByTestId('toggle')
    const initial = themeEl.textContent
    fireEvent.click(toggle)
    expect(themeEl.textContent).not.toBe(initial)
  })
})
