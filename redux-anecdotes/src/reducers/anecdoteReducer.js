import { createSlice } from '@reduxjs/toolkit'

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    setAnecdotes(state, action) {
      console.log('set anecdotes', action.payload)
      return action.payload
    },
    updateVote(state, action) {
      console.log('updatevote', action.payload)
      const id = action.payload
      const anecdoteToUpdate = state.find(a => a.id === id)
      const updatedAnecdote = {
        ...anecdoteToUpdate,
        votes: anecdoteToUpdate.votes + 1
      }
      return state.map(anec => 
        anec.id !== id ? anec : updatedAnecdote
      )
    },
    createAnecdote(state, action) {
      const initAnecdote = asObject(action.payload)
      return state.concat(initAnecdote)
    }
  }
})

export const { setAnecdotes, updateVote, createAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer