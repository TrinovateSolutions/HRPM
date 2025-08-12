import './Login.css';
import Logo from '../assets/logo.png';

export default function Login() {
  return (
    <div className="login-page">
      <img className="logo" src={Logo} alt="Trinovate Solutions" />

      <div className="login-container">
        <h1 className="main-heading">Login</h1>

        <form className="form">
          <div className="form-group">
            <input type="text" placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <button type="submit">Login</button>
          </div>
        </form>
        <div className='signup_container'>
            <a className='signup_link' href="#">&nbsp;New to here? Signup!</a>
        </div>
      </div>
    </div>
  );
}