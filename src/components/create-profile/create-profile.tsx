import { useState } from 'react';
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiFillLock,
  AiOutlineMail,
  AiOutlineUser,
} from 'react-icons/ai';
import './create-profile.css';

export function CreateProfile() {
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
    <div className="create-profile-container">
      <div className="create-profile-title">Create an account</div>

      <div className="create-profile-email-container">
        <span className="create-profile-email-icon-container">
          <AiOutlineMail size={20} />
        </span>
        <input
          className="create-profile-email"
          type="text"
          placeholder="Email"
        />
      </div>

      <div className="create-profile-name-container">
        <span className="create-profile-name-icon-container">
          <AiOutlineUser size={20} />
        </span>

        <input className="create-profile-name" type="text" placeholder="Name" />
      </div>

      <div className="create-profile-password-container">
        <span className="create-profile-key-icon-container">
          <AiFillLock size={20} />
        </span>

        <input
          className="create-profile-password"
          type={updaterInputType}
          placeholder="Password"
        />

        <span className="create-profile-eyes-icons-container">
          <AiFillEyeInvisible
            size={20}
            className="create-profile-hide-password"
            style={hidePassword}
            onClick={() => {
              updaterType();
            }}
          />
          <AiFillEye
            size={20}
            className="create-profile-show-password"
            style={showPassword}
            onClick={() => {
              updaterType();
            }}
          />
        </span>
      </div>

      <div className="create-profile-password-container">
        <span className="create-profile-key-icon-container">
          <AiFillLock size={20} />
        </span>

        <input
          className="create-profile-password"
          type={updaterInputType}
          placeholder="Confirm your password"
        />

        <span className="create-profile-eyes-icons-container">
          <AiFillEyeInvisible
            size={20}
            className="create-profile-hide-password"
            style={hidePassword}
            onClick={() => {
              updaterType();
            }}
          />
          <AiFillEye
            size={20}
            className="create-profile-show-password"
            style={showPassword}
            onClick={() => {
              updaterType();
            }}
          />
        </span>
      </div>

      <button className="create-profile-register" type="submit">
        REGISTER
      </button>
    </div>
  );
}
