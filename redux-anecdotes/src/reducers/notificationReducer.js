import { createSlice } from '@reduxjs/toolkit'

const initialState = null

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      return action.payload
    }
  }
})

export const { setNotification } = notificationSlice.actions

export const createNotification = (msg, delay) => {
  return async dispatch => {
    dispatch(setNotification(msg))
    setTimeout(() => dispatch(setNotification(null)), delay * 1000)
  }
}

export default notificationSlice.reducer