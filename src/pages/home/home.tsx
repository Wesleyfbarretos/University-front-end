import './home.css';

// eslint-disable-next-line import/prefer-default-export
export function Home() {
  return (
    <div className="container">
      <div className="university">University</div>
      <input className="email" type="text" placeholder="Email" />
      <input className="password" type="text" placeholder="Password" />
      <div className="forgot-my-password">forgot my password</div>
      <button className="submit" type="button">
        Submit
      </button>
      <div>
        dont you have an account? <span className="sign-up">Sign up</span>
      </div>
    </div>
  );
}
