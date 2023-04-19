import {useSelector,useDispatch } from 'react-redux'
import {newUsername,deleteUsername} from './UsernameSlice'

function Username() {
  const username = useSelector((state) => state.username.value);
  const dispatch = useDispatch();

  return (
        <>{username}</>
  );
}
export default Username;