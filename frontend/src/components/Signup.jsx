import './Login.css';
import Logo from '../assets/logo.png';

export default function Signup() {
  return (
    <div className="login-page">
      <img className="logo" src={Logo} alt="Trinovate Solutions" />

      <div className="login-container">
        <h1 className="main-heading">SignUp</h1>

        <form className="form">
          <div className="form-group">
            <input type="text" placeholder=" Email" />
          </div>
          <div className="form-group">
            <input type="text" placeholder=" Phone number" />
          </div>
          <div className="form-group">
            <input type="password" placeholder=" Password" />
          </div>
          <div className="form-group">
            <input type="repeat-password" placeholder=" Re-enter Password" />
          </div>
          <div className="form-group">
            <input type="Role" value={"Admin"} placeholder=" Role" readOnly />
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