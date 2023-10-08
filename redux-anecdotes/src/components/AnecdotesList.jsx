import { useDispatch, useSelector } from 'react-redux'
import { updateVote } from '../reducers/anecdoteReducer'

const AnecdotesList = () => {
  const anecdotes = useSelector(state => 
    state.anecdotes
      .sort((a, b) => b.votes - a.votes)
      .filter(anec => anec.content.toLowerCase().includes(state.filter.toLowerCase()))
    )
  const dispatch = useDispatch()

  const vote = id => dispatch(updateVote(id))

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdotesList