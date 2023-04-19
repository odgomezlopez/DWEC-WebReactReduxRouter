import * as React from "react";
import {
  useParams,
} from "react-router-dom";

//Importo elementos de bootstra
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Username from "../features/Username/Username";
import UsernameInput from "../features/Username/UsernameInput";
import UsernameDelete from "../features/Username/UsernameDelete";

import Empleados from "../features/Empleados/Empleados";
import EmpleadoNew from "../features/Empleados/EmpleadoNew";



function MyUserName(props) {
    return (
        <>
            {/*<Username/>*/}
            <h1>Cambiar nombre de usuario</h1>
            <UsernameInput/>
            {/*<UsernameDelete/>

            <EmpleadoNew />
            <Empleados/>*/}
        </>
    );
}
export default MyUserName;
