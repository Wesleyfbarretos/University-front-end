import { ProfileContent } from '../../components/profile-content/profile-content';
import { UserProfile } from '../../components/user-profile/user-profile';
import './profile.css';

export function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-side-bar">
          <UserProfile />
        </div>

        <main className="profile-main">
          <ProfileContent />
        </main>
      </div>
    </div>
  );
}
