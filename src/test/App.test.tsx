import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'
import { LanguageProvider } from '../context/LanguageContext'

function renderWithProviders() {
  return render(
    <LanguageProvider>
      <App />
    </LanguageProvider>,
  )
}

describe('App', () => {
  it('renders the main sections', () => {
    renderWithProviders()
    const nameElements = screen.getAllByText(/Mohammed Yassine/i)
    expect(nameElements.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.queryAllByText('Skills').length).toBeGreaterThan(0)
    expect(screen.getByText('Featured Projects')).toBeInTheDocument()
    expect(screen.getByText("Let's Work Together")).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    renderWithProviders()
    const aboutLinks = screen.getAllByText('About')
    expect(aboutLinks.length).toBeGreaterThan(0)
    const contactLinks = screen.getAllByText('Contact')
    expect(contactLinks.length).toBeGreaterThan(0)
  })

  it('renders social links', () => {
    renderWithProviders()
    const githubLinks = screen.getAllByLabelText('GitHub')
    expect(githubLinks.length).toBeGreaterThanOrEqual(1)
    const linkedinLinks = screen.getAllByLabelText('LinkedIn')
    expect(linkedinLinks.length).toBeGreaterThanOrEqual(1)
  })
})
