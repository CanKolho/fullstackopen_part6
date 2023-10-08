import AnecdotesList from "./components/AnecdotesList"
import AnecdotesForm from "./components/AnecdotesForm"
import Filter from "./components/Filter"

const App = () => {
  return (
    <>
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdotesList />
      <AnecdotesForm />
    </>
  )
}

export default App