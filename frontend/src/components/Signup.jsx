import './Login.css';
import Logo from '../assets/logo.png';

export default function Signup() {
  return (
    <div className="signin-page">
      <img className="logo" src={Logo} alt="Trinovate Solutions" />

      <div className="signin-container">
        <h1 className="main-heading">SignUp</h1>

        <form className="form">
          <div className="form-group">
            <input type="text" placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Phone number" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <button type="submit">SignUp</button>
          </div>
        </form>
        <div className='signup_container'>
            <a className='signup_link' href="#">&nbsp;Already a user? Signin!</a>
        </div>
      </div>
    </div>
  );
}