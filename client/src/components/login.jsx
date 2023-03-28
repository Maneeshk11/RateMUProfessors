import Footer from "./footer";
import NavBar from "./nav";

function Login() {
    // const [count, setCount] = useState(0);
  
    return (
      
      <div className="loginMain">
        <div className="login1">
          <h1>Login to Your Account</h1>
          <div className="login11">
            <button className="buttonLogin bL1">Log In with Google</button>
            <h2><span>Or Sign In with Email</span></h2>
            <form>  
              <div class="emailCont">  
                <input id="email" type="email" placeholder="Email" required="required" />
                <input id="password" type="password" pattern="medha123" placeholder="Password" required="required" title=""/>
                <a href="#">Forgot password?</a>   
                <button className="buttonLogin bL1">Continue</button>
              </div>   
            </form>  
          </div>
        </div>
        <div className="login2">
          <h1>New Here?</h1>
          <h2>Sign Up and Review Your Favorite Professors!</h2>
          <button className="buttonLogin">Sign Up</button>
        </div>
      </div>
    );
  }

  export default Login;