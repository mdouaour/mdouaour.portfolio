import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { LanguageProvider, useLang } from '../context/LanguageContext'

function TestComponent() {
  const { lang, setLang, isRTL } = useLang()
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="rtl">{isRTL ? 'true' : 'false'}</span>
      <button data-testid="set-ar" onClick={() => setLang('ar')}>Arabic</button>
      <button data-testid="set-en" onClick={() => setLang('en')}>English</button>
    </div>
  )
}

describe('LanguageContext', () => {
  it('defaults to English', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>,
    )
    expect(screen.getByTestId('lang')).toHaveTextContent('en')
    expect(screen.getByTestId('rtl')).toHaveTextContent('false')
  })

  it('switches to Arabic and sets RTL', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>,
    )
    fireEvent.click(screen.getByTestId('set-ar'))
    expect(screen.getByTestId('lang')).toHaveTextContent('ar')
    expect(screen.getByTestId('rtl')).toHaveTextContent('true')
  })

  it('switches back to English and clears RTL', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>,
    )
    fireEvent.click(screen.getByTestId('set-ar'))
    fireEvent.click(screen.getByTestId('set-en'))
    expect(screen.getByTestId('lang')).toHaveTextContent('en')
    expect(screen.getByTestId('rtl')).toHaveTextContent('false')
  })
})
