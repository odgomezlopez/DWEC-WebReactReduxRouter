import {useSelector,useDispatch } from 'react-redux'
import {newUsername,deleteUsername} from './UsernameSlice'

function UsernameDelete() {
  const username = useSelector((state) => state.username.value);
  const dispatch = useDispatch();
  
  const handleClick = (e) => {
    dispatch(deleteUsername())
  }

  return (
    <div>
      <button onClick={handleClick}>DeleteUserName</button>
    </div>
  );
}

export default UsernameDelete;