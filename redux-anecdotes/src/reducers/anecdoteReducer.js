import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

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
    addAnecdote(state, action) {
      return state.concat(action.payload)
    }
  }
})

export const { setAnecdotes, updateVote, addAnecdote } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newObj = await anecdoteService.create(content)
    dispatch(addAnecdote(newObj))
  }
}

export default anecdoteSlice.reducer