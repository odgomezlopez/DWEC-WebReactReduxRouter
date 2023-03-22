import { createSlice } from '@reduxjs/toolkit'

export const EmpleadosSlice = createSlice({
  name: 'empleados',
  initialState: {
    value: [], //Default value
  },
  reducers: {
    newEmpleado: (state, action) => {
      state.value = [...state.value,action.payload]
    },
    deleteEmpleado: (state, action) => {
        console.log(action.payload);
        var a=[...state.value].filter(a=>
          (a.nombre!==action.payload.nombre && a.cargo!==action.payload.cargo)
        );
        console.log(a)
        state.value = a
    }
  },
})

// Action creators are generated for each case reducer function; Iguales a lo que hay dentro del reducers
export const { newEmpleado, deleteEmpleado } = EmpleadosSlice.actions
export default EmpleadosSlice.reducer