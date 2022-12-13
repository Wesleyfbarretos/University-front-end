import { AsideContent } from '../../components/profile-aside-content/profile-aside-content';
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

        <aside className="profile-aside">
          <AsideContent />
        </aside>
      </div>
    </div>
  );
}
