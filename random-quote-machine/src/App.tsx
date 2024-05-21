import './App.css'
import { Main } from './styledComponents.tsx'
import CardComponent from './components/Card.tsx'
import quotes from './quotes.json'
import { Quote } from './types.ts'
import { useState } from 'react'

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [quoteIndex, setQuoteIndex] = useState<number>(0)
  const quoteArr: Quote[] = quotes
  return (
    <Main>
      <CardComponent quote={quoteArr[quoteIndex]}/>
    </Main>
  )
}

export default App
