import { createSlice } from '@reduxjs/toolkit'

export const UsernameSlice = createSlice({
  name: 'username',
  initialState: {
    value: "default", //Default value
  },
  reducers: {
    newUsername: (state, action) => {
      state.value = action.payload
    },
    deleteUsername: (state) => {
        state.value = ""
    }
  },
})

// Action creators are generated for each case reducer function; Iguales a lo que hay dentro del reducers
export const { newUsername, deleteUsername } = UsernameSlice.actions
export default UsernameSlice.reducer