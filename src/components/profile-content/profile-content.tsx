import './profile-content.css';

export function ProfileContent() {
  return (
    <div className="course-information">
      <div className="course-img">
        <img
          src="https://rgm.com.br/blog/wp-content/uploads/2020/08/infrati.png"
          alt=""
        />
      </div>

      <div className="nav">
        <button type="button" className="contact-us">
          CONTACT US
        </button>
        <button type="button" className="complaints">
          COMPLAINTS
        </button>
        <button type="button" className="course-options">
          COURSE OPTIONS
        </button>
      </div>
    </div>
  );
}
