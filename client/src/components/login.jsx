import Footer from "./footer";
import NavBar from "./nav";
import logoMain from "/home/maneesh/Desktop/rateprofs/client/src/assets/logoMain.svg";
import googleLogo from "../assets/google.svg"
import facebookLogo from "../assets/facebook.svg"
import userLogo from "../assets/user.svg"

function Login() {
  // const [count, setCount] = useState(0);

  return (
    <div className="loginMain">
      <div className="welcome">
        <img src={logoMain} alt="" className="" />
        <h1>Welcome back</h1>
        <h3>Please enter your details.</h3>
      </div>
      <div className="selectMail">
        <input type="text" placeholder="Enter your email" />
        <button type="submit" className="contS1">
          Continue
        </button>
        <div className="orDiv">
          <div></div>
          <h2>OR</h2>
          <div></div>
        </div>
        <button type="submit" className="contS">
          <img src={googleLogo} alt="google" />
          Continue with Google
        </button>
        <button type="submit" className="contS">
          <img src={facebookLogo} alt="meta" />
          Continue with Facebook
        </button>
        <button type="submit" className="contS">
          <img src={userLogo} alt="guest" />
          Continue as Guest
        </button>
        <div className="dontAcc">
          <h2>Don't have an account?</h2>
          <a href="">Sign up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
