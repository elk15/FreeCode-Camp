import './App.css'
import { Main } from './styledComponents.tsx'
import CardComponent from './components/Card.tsx'
import quotes from './quotes.json'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from './store.tsx'
import { incrementCurrentIndex, setQuotes } from './reducers/quoteReducer.ts'

function App() {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(setQuotes(quotes))
  }, [dispatch])

  const [colorIndex, setColorIndex] = useState<number>(1)
  const colors = ['#8338EC', '#FB5607', '#3A86FF', '#FFBE0B', '#FF006E']


  const onNewQuote = () => {
    dispatch(incrementCurrentIndex())
    setColorIndex((colorIndex + 1) % colors.length)
  }

  return (
    <Main $backgroundColor={colors[colorIndex]}>
      <CardComponent handleClick={onNewQuote} color={colors[colorIndex]}/>
    </Main>
  )
}

export default App
