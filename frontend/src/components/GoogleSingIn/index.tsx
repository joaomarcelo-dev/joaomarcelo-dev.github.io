import { AiOutlineGoogle } from "react-icons/ai";
import handleGoogleSignIn from "../../authentication/google.auth";
import { requestServer } from "../../conections/server.conection";
import { useDispatch } from 'react-redux';

import './style.scss';
import userActions from "../../redux/actions/user.action";

export default function GoogleSingIn() {
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const { error, displayName, email, uid } = await handleGoogleSignIn();

    if (error) {
      return;
    }

    const { data } = await requestServer({
      url: '/login',
      method: 'POST',
      data: {
        name: displayName,
        email,
        uid,
        password: 'google',
      },
    });
    
    const { token, user } = data;

    
    dispatch(userActions.addUser({ token, user }))
  }

  return (
    <button
      className='btn btn-primary button-login button-sing-in-google'
      onClick={handleLogin}
    >
      Log In with Google
      {'  '}
      <AiOutlineGoogle size={26} />
    </button>
  )
}