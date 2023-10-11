import { useDispatch, useSelector } from 'react-redux'
import { updateAncdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdotesList = () => {
  const anecdotes = useSelector(state => 
    state.anecdotes
      .filter(anec => anec.content.toLowerCase().includes(state.filter.toLowerCase()))
    )
  const dispatch = useDispatch()

  const vote = anecdote => {
    dispatch(updateAncdote(anecdote))
    
    dispatch(setNotification(`you voted '${anecdote.content}'`))
    setTimeout(() => {dispatch(setNotification(null))}, 5000)
  }
  
  const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes)

  return (
    <div>
      {sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdotesList