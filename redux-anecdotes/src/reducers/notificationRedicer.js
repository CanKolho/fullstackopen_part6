import { createSlice } from '@reduxjs/toolkit'

const initialState = 'notifications will be here'

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      state = action.payload
      return state
    }
  }
})

export const { setNotification } = notificationSlice.actions
export default notificationSlice.reducer