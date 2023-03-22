import {useState} from 'react';
import {useSelector,useDispatch } from 'react-redux'
import {newEmpleado,deleteEmpleado} from './EmpleadosSlice'

function Empleado(props) {
  //const [user,setUser] = useState(props.user);
  const user=props.user

  const empleados = useSelector((state) => state.empleados);
  const dispatch = useDispatch();

  const handleDeleteEmpleado=(e)=>{
    dispatch(deleteEmpleado(user))
  }

    return (
      <div>
        <p><b><span>{user.nombre}</span></b> - <i>{user.cargo}</i><button onClick={handleDeleteEmpleado}>X</button>
        </p>
      </div>
    );
  }

  export default Empleado;