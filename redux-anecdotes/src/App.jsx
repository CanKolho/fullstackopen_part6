import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

import AnecdotesList from "./components/AnecdotesList"
import AnecdotesForm from "./components/AnecdotesForm"
import Filter from "./components/Filter"
import Notification from "./components/Notification"

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [])

  return (
    <>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdotesList />
      <AnecdotesForm />
    </>
  )
}

export default App