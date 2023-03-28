import { Link } from "react-router-dom";

const Footer= () =>{
    return (
        <div className="footer">
            <div className="f1">
                <div className="f11">
                    <h1>RATEMUPROFESSORS</h1>
                    <p>RateMUProfessors is a website for students to review faculty members of their respective schools and make the classroom a productive place for future students.</p>

                </div>
                <div className="f12">
                    <div>
                        <li className="fH">
                            {/* <Link to="/">Our Story</Link> */}
                            Our Story
                        </li>
                        <li>
                            <Link to="/aboutus">About Us</Link>
                        </li>
                        <li>
                            <Link to="/aboutus">Our team</Link>
                        </li>
                    </div>
                    <div>
                        <li className="fH">
                            {/* <Link to="/">Community</Link> */}
                            Community
                        </li>
                        <li>
                            <Link to="/login">Register</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </div>
                    <div>
                        <li className="fH">
                            {/* <Link to="/">Help</Link> */}
                            Help
                        </li>
                        <li>
                            <Link to="/">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/">FAQ</Link>
                        </li>
                    </div>
                </div>
            </div>
            <div className="f2">
                <div className="f21">
                    <h1>
                    &#169; MU 2023
                    </h1>
                    <li>
                        <Link to="/">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="/">Terms Of Use</Link>
                    </li>
                </div>
                <div className="f22">
                    <Link to="/"><i class="fa-brands fa-facebook"></i></Link>
                    <Link to="/"><i class="fa-brands fa-linkedin"></i></Link>
                    <Link to="/"><i class="fa-brands fa-instagram"></i></Link>
                    <Link to="/"><i class="fa-brands fa-twitter"></i></Link>
                </div>
            </div>
        </div>
    );
  }
  export default Footer;