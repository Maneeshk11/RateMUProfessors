import { Link } from "react-router-dom";
import coding_bro from "/home/maneesh/Desktop/rateprofs/client/src/assets/Coding workshop-bro 2coding_bro.svg"

const MainPageCard= () =>{
    return (
        <div className="mainCardHold">
            <div className="card1">
                <div className="c1cards sDiv">
                    <div>
                        <h1>YOU MAKE THE <br /> CLASSROOM <br /> A BETTER PLACE</h1>
                        <h2>Enter School/Professor Name</h2>
                        <div className="box">
                            <form name="search">
                                <input type="text" className="input" name="txt" onmouseout="this.value = ''; this.blur();" />
                            </form>
                            <i className="fa-solid fa-magnifying-glass"></i>

                        </div>
                    </div>
                </div>
                <div className="c1cards"><img src={coding_bro} className="codingBro" alt="codingbro" /></div>
                
            </div>
            <div className="card2">
            
            </div>
            
        </div>
    );
  }
  export default MainPageCard;