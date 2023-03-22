//import React from 'react';
import {useSelector,useDispatch } from 'react-redux'
import {newEmpleado,deleteEmpleado} from './EmpleadosSlice'

import Empleado from './Empleado';

function Empleados(props) {
    const empleados = useSelector((state) => state.empleados);
    const dispatch = useDispatch();

    return (
        <div>
            {empleados.value.map((item,i) => (<div key={i}><Empleado user={item}/> </div>))}
        </div>
      );
}

export default Empleados;