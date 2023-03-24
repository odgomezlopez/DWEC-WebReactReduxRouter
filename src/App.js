
//Importo  estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';


//Importo mis componentes
import MyNavBar from './webComp/MyNavBar';
import MyHome from './webComp/MyHome';
import MyFooter from './webComp/MyFooter';

//Importo mis recursos
import Logo from './imgs/logo.svg'

//Estructura de la Web App
function App() {
  return (
    <div className='d-flex flex-column bg-light min-vh-100'>
        <MyNavBar title="Green Basked" logo={Logo}/>
        <MyHome logo={Logo}/>
        <MyFooter className="footer"/>
    </div>
  )
}

export default App;