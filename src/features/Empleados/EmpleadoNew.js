//import React from 'react';

import React, { useState, useRef,useEffect} from 'react';

import {useSelector,useDispatch } from 'react-redux'
import {newEmpleado,deleteEmpleado} from './EmpleadosSlice'

function EmpleadoNew() {
  const empleados = useSelector((state) => state.empleados);
  const dispatch = useDispatch();


  const nombreInputRef = useRef(null);
  const cargoInputRef = useRef(null);
  const bottonRef = useRef(null);

  const handleAddEmpleado = (e) => {
    dispatch(newEmpleado({nombre: nombreInputRef.current.value, cargo: cargoInputRef.current.value}))
  }

  const handleInputChange = (e) => {
    if(nombreInputRef.current.value == "" || cargoInputRef.current.value == "" ){
      bottonRef.current.disabled=true;
    }
    else{
      bottonRef.current.disabled=false;
    }
  }

  useEffect(handleInputChange);

  return (
    <div>
      {/*<FechaActual/>*/}
      <label htmlFor="nombre">Nombre: </label><input name="nombre" type="text" ref={nombreInputRef} onChange={handleInputChange}></input>
      <label htmlFor="cargo">Cargo: </label><input name="cargo" type="text" ref={cargoInputRef} onChange={handleInputChange}></input>

      <button ref={bottonRef} onClick={handleAddEmpleado}>Add Empleado</button>
    </div>
  );
  
}

export default EmpleadoNew;