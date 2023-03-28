// import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
// import { Percent } from '@mui/icons-material';
import { useNavigate, useParams } from "react-router-dom";

const ProfDetail = () => {
    const params = useParams();
    const userId = params.userId;

    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])     
    useEffect(() => {
        fetch("http://localhost:5000/profs/all")
            .then(response => {
                return response.json()
            })
        
            .then(data => {
                setData(data);
                // setFilteredData(data);
                const newFilter = data.filter((value) => {
                    return value._id.includes(userId);
                });
                setFilteredData(newFilter);
                console.log(newFilter);
            })
    }, [])

    const color_list = [
        "#ff4545",
        "#ffa534",
        "#ffe234",
        "#b7dd29",
        "#57e32c"
    ];
    
    const navigate = useNavigate();
    const goInside = (event) => {
        const word = "/profs/" + filteredData[0]._id + "/review";
        // console.log(word);
        
        navigate(word);
    }


    return (
        <div className="profsPage">
            {
                filteredData[0]&&
                        <div className="profPageTop">
                            <div className="pTop1">
                                <div className="pTopL1">
                                    <div className="ratingProfDetails">
                                        <div>
                                            <h1>{filteredData[0].rating}</h1>
                                            <h2>/5</h2>
                                        </div>
                                        <h2>Overall ratings based on {filteredData[0].totRatings} Reviews</h2>
                                    </div>
                                    <div className="profTotDetails">
                                        <h1>{filteredData[0].name}</h1>
                                        <h2>{filteredData[0].school} - {filteredData[0].dept}</h2>
                                        <h2>Courses: </h2>
                                    </div>
                                </div>
                                <div className="pTopL2">
                                    <button className="buttonLogin bL1" data-id="review" onClick={goInside}>Rate This Professor</button>
                                    <a href="#"><h2>I am this professor | submit a correction</h2></a>
                                </div>
                            </div>
                            <div className="pTop2">
                                <div className="pTopR1">
                                    <div className="barDiv">
                                        <h2>Difficulty Level: </h2>
                                        <div>
                                            <div style={{
                                            width: ((filteredData[0].lod/5)*600)
                                            }}></div>
                                        </div>
                                    </div>
                                    <div className="barDiv">
                                        <h2>Helpfulness: </h2>
                                        <div>
                                            <div style={{
                                            width: ((filteredData[0].helpfulness/5)*600)
                                            }}></div>
                                        </div>
                                    </div>
                                    <div className="barDiv">
                                        <h2>Responsiveness: </h2>
                                        <div>
                                            <div style={{
                                            width: ((filteredData[0].responsiveness/5)*600)
                                            }}></div>
                                        </div>
                                    </div>
                                    <div className="barDiv">
                                        <h2>Course Quality: </h2>
                                        <div>
                                            <div style={{
                                            width: ((filteredData[0].courseQuality/5)*600)
                                            }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pTopR2"></div>
                            </div>
                            <div className="pTop3">
                                <select name="courses" id="courses" className="selectCourse">
                                    <option value="all">All courses</option>
                                    {
                                        filteredData[0].courses.map(cours =>
                                            <option value={cours}>{cours}</option>
                                        )
                                    }
                                </select>
                                {
                                filteredData[0].userRatings.map(ratingObj => 
                                <div className="userRatDiv">
                                     <div className="userText">
                                        <div className="userTextTop">
                                            <h1>Course: {ratingObj.course}</h1>
                                            <h2>March 12th, 2023</h2>
                                        </div>
                                        
                                        <p>{ratingObj.feedback}</p>
                                    </div>
                                    <div className="userNum">
                                        <div className="userQual" style={{
                                        backgroundColor: color_list[Math.ceil(ratingObj.courseQuality) - 1]
                                        }}>
                                            <h1>{ratingObj.courseQuality}</h1>
                                        </div>
                                        <h2>QUALITY</h2>
                                        <div className="userDiff" style={{
                                        backgroundColor: color_list[Math.ceil(ratingObj.lod) - 1]
                                        }}>
                                            <h1>{ratingObj.lod}</h1>
                                        </div>
                                        <h2>DIFFICULTY</h2>
                                    </div>
                                    <div className="userNum">
                                        <div className="userQual" style={{
                                        backgroundColor: color_list[Math.ceil(ratingObj.helpfulness) - 1]
                                        }}>
                                            <h1>{ratingObj.helpfulness}</h1>
                                        </div>
                                        <h2>HELPFULNESS</h2>
                                        <div className="userDiff" style={{
                                        backgroundColor: color_list[Math.ceil(ratingObj.responsiveness) - 1]
                                        }}>
                                            <h1>{ratingObj.responsiveness}</h1>
                                        </div>
                                        <h2>RESPONSIVENESS</h2>
                                    </div>
                                   
                                </div>
                                )
                                }
                            </div>
                        </div>  
              
            }
        </div>
    );
}

export default ProfDetail;