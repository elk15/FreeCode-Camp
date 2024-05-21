import { render, screen } from '@testing-library/react'
import CardComponent from './Card'

test('renders content', () => {
  const quote = {
    quote: 'Stand in the ashes of a trillion dead souls and ask the ghosts if honor matters. The silence is your answer.',
    attribution: 'Javik, Mass Effect 3'
  }

  render(<CardComponent quote={quote} />)

  const displayedQuote = screen.getByText('Stand in the ashes of a trillion dead souls and ask the ghosts if honor matters. The silence is your answer.')
  expect(displayedQuote).toBeDefined()
  const displayedAttribution = screen.getByText('Javik, Mass Effect 3')
  expect(displayedAttribution).toBeDefined()
})