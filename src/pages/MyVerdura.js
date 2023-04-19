import * as React from "react";
import {
  useParams,
} from "react-router-dom";

//Importo elementos de bootstra
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function MyVerdura(props) {
    const { verdura } = useParams();

    return (
        <>
                    <i className="bi bi-circle-fill" style={{ fontSize: '250px' }}></i>
                    <h1>{verdura.toUpperCase()}</h1> 
        </>
    );
}
export default MyVerdura;

