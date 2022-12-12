import './user-profile.css';

export function UserProfile() {
  return (
    <div className="user-profile-container">
      <div className="header-style" />

      <img className="user-photo" src="../../../1670632995681.jpg" alt="" />

      <div className="user-data-container">
        <div className="user-name">Weslyn</div>
        <div className="user-course">Software Engineering</div>
      </div>

      <div className="footer-style" />
    </div>
  );
}
