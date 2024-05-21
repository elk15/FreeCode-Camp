import './App.css'
import { Main } from './styledComponents.tsx'
import CardComponent from './components/Card.tsx'
import quotes from './quotes.json'
import { Quote } from './types.ts'
import { useState } from 'react'

function App() {
  const [quoteIndex, setQuoteIndex] = useState<number>(0)
  const [colorIndex, setColorIndex] = useState<number>(0)
  const quoteArr: Quote[] = quotes
  const colors = ['#8338EC', '#FB5607', '#3A86FF', '#FFBE0B', '#FF006E']

  const onNewQuote = () => {
    setQuoteIndex((quoteIndex + 1) % quoteArr.length)
    setColorIndex((colorIndex + 1) % colors.length)
  }

  return (
    <Main $backgroundColor={colors[colorIndex]}>
      <CardComponent quote={quoteArr[quoteIndex]} handleClick={onNewQuote} color={colors[colorIndex]}/>
    </Main>
  )
}

export default App
