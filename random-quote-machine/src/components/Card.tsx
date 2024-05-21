import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { Card, CardButton, Attribution, QuoteComponent } from '../styledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Quote } from '../types'

interface Props {
  quote: Quote
  handleClick: () => void
  color: string
}

const CardComponent = ({ quote, handleClick, color }: Props) => {
  return (
    <Card>
      <QuoteComponent $color={color}>
        <FontAwesomeIcon icon={faQuoteLeft} style={{ marginRight: '10px' }} />
        {quote.quote}
      </QuoteComponent>
      <Attribution $color={color}>- {quote.attribution}</Attribution>
      <CardButton onClick={handleClick} $backgroundColor={color}>New quote</CardButton>
    </Card>
  )
}

export default CardComponent