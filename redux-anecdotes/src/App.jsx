import AnecdotesForm from "./components/AnecdotesForm"
import AnecdotesList from "./components/AnecdotesList"

const App = () => {
  return (
    <>
      <h2>Anecdotes</h2>
      <AnecdotesForm />
      <AnecdotesList />
    </>
  )
}

export default App