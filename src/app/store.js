import { configureStore } from '@reduxjs/toolkit'
import usernameReducer from '../features/Username/UsernameSlice'
import empleadosReducer from '../features/Empleados/EmpleadosSlice'

export default configureStore({
  reducer: {
    empleados: empleadosReducer,
    //username: usernameReducer,
  },
})