import { useState, FormEvent, useEffect } from 'react';
import './style.scss';

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import GoogleSingIn from '../../../components/GoogleSingIn';
import { requestServer } from '../../../conections/server.conection';
import { useDispatch } from 'react-redux';
import userActions from '../../../redux/actions/user.action';

export default function SingIn() {
  const dispatch = useDispatch();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setUserData({ ...userData, [name]: value });
  }
  
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email, password } = userData;

    const { data } = await requestServer({
      data: {
        email,
        password,
      },
      method: 'POST',
      url: '/login',
    });

    const { token, user } = data;

    dispatch(userActions.addUser({ token, user}));
  }

  useEffect(() => {

  }, )

  const activeButtonSubmit = !userData.email || !userData.password

  return (
    <main className='main-page-singin flex_center'>
      <section className='flex_center content-login'>
        <h2 className='title-page-login'>Log In</h2>

        <div className='buttons-login-accounts'>
          <GoogleSingIn />
        </div>

        <form
          className='form-login'
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className='form-loin-inputs'>
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              className="form-control input-login"
              placeholder="Email Address"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              required
              name='email'
            />
            <div className='div-password flex_center'>
              <input
                onChange={(e) => handleChange(e)}
                type={passwordVisible ? 'text' : 'password'}
                className="form-control input-login"
                placeholder="Password"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                required
                name='password'
              />
              <button
                className='button-eye'
                type='button'
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {
                  passwordVisible
                    ? <AiOutlineEye size={23} />
                    : <AiOutlineEyeInvisible size={23} />
                }
              </button>
            </div>
          </div>

          <div className='form-login-buttons flex_center'>
            <button
              disabled={activeButtonSubmit}
              type='submit'
              className={`
                btn
                btn-primary
                button-login
                ${activeButtonSubmit ? '' : 'active'}
              `}
            >
              Log In
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}