import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { Card, CardButton, Attribution, QuoteComponent } from '../styledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Quote } from '../types'

interface Props {
  quote: Quote
}

const CardComponent = ({ quote }: Props) => {
  return (
    <Card>
      <QuoteComponent>
        <FontAwesomeIcon icon={faQuoteLeft} style={{ marginRight: '10px' }} />
        {quote.quote}
      </QuoteComponent>
      <Attribution>- {quote.attribution}</Attribution>
      <CardButton>New quote</CardButton>
    </Card>
  )
}

export default CardComponent