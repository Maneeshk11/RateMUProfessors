import teamMembers from "../team.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function AboutUs() {
    // const [count, setCount] = useState(0);
   
  
    return (
      
      <div className="aboutMain">
        <div className="main1">
          <div className="mmmm">
            <div className="mission">
              <h1>OUR MISSION</h1>
              <p>RateMUProfessors  is a  platform for Mahindra University Students to give valuablle feedback to their professors regarding the courses they are teaching. This website allows students to rate a professor based on helpfulness, availability,  quality of course, and even leave a short review. This project is a great source for students to get a better idea of their future professors as well and for professors to make their classNamerooms a more productive environment.</p>
            </div>
          </div>
          <div className="team"> 
          <h1>MEET THE TEAM</h1>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {    
            teamMembers.map(pRec => {
              return (
                <SwiperSlide>
                <div className="card">
                  <div className="img-bx">
                    <img src={pRec.pic} alt="img" />
                  </div>
                  <div className="content">
                    <div className="detail">
                      <h2>{pRec.name}<br /><span>{pRec.branch}</span></h2>
                      <ul className="sci">
                        <li>
                          <a href={pRec.linkedin} target="_blank"><i class="fab fa-linkedin-in"></i></a>
                        </li>
                        <li>
                          <a href={pRec.github} target="_blank"><i class="fa-brands fa-github"></i></a>
                        </li>
                        <li>
                          <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
                        </li>
                        <li>
                          <a href={pRec.instagram} target="_blank"><i class="fab fa-instagram"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>    
                </SwiperSlide>        
              )}
            )
          }   
          </Swiper>
          </div>
        </div>
      </div>
    );
  }

  export default AboutUs;