
//Importo el sistema de rutas
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

//Importo  estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';


//Importo mis componentes
import MyNavBar from './webComp/MyNavBar';

import MyHome from './webComp/MyHome';
import MyVerdura from "./webComp/MyVerdura";

import NoFound from './webComp/NoFound';
import MyInWork from './webComp/MyInWork';

import MyFooter from './webComp/MyFooter';

//Importo mis recursos
import Logo from './imgs/logo.svg'

//Estructura de la Web App
function App() {
  return (
    <div className='d-flex flex-column bg-light min-vh-100'>
        <MyNavBar title="Green Basked" logo={Logo}/>
        <Routes>
          <Route path="/" element={<MyHome logo={Logo}/>} />
          
          <Route path="/frutas" element={<MyInWork text="Frutas"/>} />
          <Route path="/verdura/:verdura" element={<MyVerdura verdura="Patata"/>} />

          <Route path="/carrito" element={<MyInWork text="Carrito"/>} />
          
          <Route path='*' exact={true} element={<NoFound/>} />
        </Routes>
        <MyFooter className="footer"/>
    </div>
  )
}

export default App;