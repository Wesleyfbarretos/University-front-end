import { useState } from 'react';
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineKey,
  AiOutlineMail,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './login.css';

export function Login() {
  const [updaterInputType, setUpdaterInputType] = useState('password');
  const [showPassword, setShowPassword] = useState({ display: 'none' });
  const [hidePassword, setHidePassword] = useState({ display: 'block' });

  function updaterStatesToChangeTypesToText() {
    setUpdaterInputType('text');
    setShowPassword({ display: 'block' });
    setHidePassword({ display: 'none' });
  }

  function updaterStatesToChangeTypesToPassword() {
    setUpdaterInputType('password');
    setShowPassword({ display: 'none' });
    setHidePassword({ display: 'block' });
  }

  function updaterType() {
    if (updaterInputType === 'password') {
      return updaterStatesToChangeTypesToText();
    }
    return updaterStatesToChangeTypesToPassword();
  }

  return (
    <div className="container">
      <div className="university">University</div>

      <div className="email-container">
        <span className="email-icon-container">
          <AiOutlineMail size={20} />
        </span>

        <input className="email" type="text" placeholder="Email" />
      </div>

      <div className="password-container">
        <span className="key-icon-container">
          <AiOutlineKey size={20} className="key-password" />
        </span>

        <input
          className="password"
          type={updaterInputType}
          placeholder="Password"
        />

        <span className="eyes-icons-container">
          <AiFillEyeInvisible
            size={20}
            className="hide-password"
            style={hidePassword}
            onClick={() => {
              updaterType();
            }}
          />
          <AiFillEye
            size={20}
            className="show-password"
            style={showPassword}
            onClick={() => {
              updaterType();
            }}
          />
        </span>
      </div>

      <Link className="forgot-my-password" to="/">
        forgot my password
      </Link>

      <Link className="sign-in" to="/profile">
        <button className="submit" type="button">
          Submit
        </button>
      </Link>

      <div>
        dont you have an account?{' '}
        <Link className="sign-up" to="/create">
          Sign-up
        </Link>
      </div>
    </div>
  );
}
