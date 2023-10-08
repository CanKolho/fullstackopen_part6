import Anecdotes from "./components/Anecdotes"

const App = () => {
  return (
    <>
      <Anecdotes />
      <h2>create new</h2>
      <form>
        <div><input /></div>
        <button>create</button>
      </form>
    </>
  )
}

export default App