import { Link } from 'react-router-dom';
import './user-profile.css';

export function UserProfile() {
  return (
    <div>
      <div className="user-profile-container">
        <div className="header-style" />

        <img className="user-photo" src="../../../1670632995681.jpg" alt="" />

        <div className="user-data-container">
          <div className="user-name">Weslyn</div>
          <div className="user-course">Software Engineering</div>
        </div>

        <div className="footer-style" />
      </div>

      <div className="about-you-container">
        <div className="about-you">About you:</div>

        <div className="notes-container">
          <Link className="notes" to="/">
            Notes
          </Link>
        </div>

        <div className="presence-container">
          <Link className="presence" to="/">
            Presence
          </Link>
        </div>

        <div className="settings-container">
          <Link className="settings" to="/">
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
}
