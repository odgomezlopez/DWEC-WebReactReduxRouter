import {useSelector,useDispatch } from 'react-redux'
import {newUsername,deleteUsername} from './UsernameSlice'

function UsernameInput() {
  const username = useSelector((state) => state.username.value);
  const dispatch = useDispatch();
  
  const handleInput = (e) => {
    dispatch(newUsername(e.target.value))
  }

  return (
    <div>
       <input type="text" onInput={handleInput}></input>
    </div>
  );
}

export default UsernameInput;