import AnecdotesList from "./components/AnecdotesList"
import AnecdotesForm from "./components/AnecdotesForm"
import Filter from "./components/Filter"
import Notification from "./components/Notification"

const App = () => {
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