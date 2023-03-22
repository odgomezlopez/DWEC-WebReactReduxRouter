import Username from './features/Username/Username';
import UsernameInput from './features/Username/UsernameInput';
import UsernameDelete from './features/Username/UsernameDelete';

import EmpleadoNew from './features/Empleados/EmpleadoNew';
import Empleados from './features/Empleados/Empleados';

function App() {
  return (
    <div>
        {/*<UsernameInput></UsernameInput>
        <Username></Username>
        <UsernameDelete></UsernameDelete>*/}
        <EmpleadoNew />
        <Empleados />
    </div>
  )
}

export default App;