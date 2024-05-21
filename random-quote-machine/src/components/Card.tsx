import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { Card, CardButton, Attribution, QuoteComponent } from '../styledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

interface Props {
  handleClick: () => void
  color: string
}

const CardComponent = ({ handleClick, color }: Props) => {
  const quotes= useSelector((state: RootState) => state.quotes.quotes)
  const currentIndex = useSelector((state: RootState) => state.quotes.currentIndex)

  if (quotes.length === 0) return
  const quote = quotes[currentIndex]


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