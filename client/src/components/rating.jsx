import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarFilled from "@mui/icons-material/Star";
// import TextArea from '@atlaskit/textarea';
import Modal from "react-modal";
import tickCircle from "../assets/TickCircle.svg";
import cross from "../assets/cross.svg";
import { red } from "@mui/material/colors";

const RateProf = () => {
  const params = useParams();
  const userId = params.userId;

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/profs/all")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setData(data);
        // setFilteredData(data);
        const newFilter = data.filter((value) => {
          return value._id.includes(userId);
        });
        setFilteredData(newFilter);
        console.log(newFilter);
      });
  }, []);

  const [difficultyRating, setDifficultyRating] = useState(0);
  const [respoRating, setRespoRating] = useState(0);
  const [qualRating, setQualRating] = useState(0);
  const [helpRating, setHelpRating] = useState(0);
  const [reviewFeed, setReviewFeed] = useState("");
  const [takenCourse, setTakenCourse] = useState("");

  const [numStars0, setNumStars0] = useState(0);
  const colorStars0 = (index) => {
    setNumStars0(index + 1);
    setDifficultyRating(index + 1);
    // console.log(difficultyRating);
  };
  const [numStars1, setNumStars1] = useState(0);
  const colorStars1 = (index) => {
    setNumStars1(index + 1);
    setHelpRating(index + 1);
    // console.log(index + 1);
  };
  const [numStars2, setNumStars2] = useState(0);
  const colorStars2 = (index) => {
    setNumStars2(index + 1);
    setRespoRating(index + 1);
    // console.log(index + 1);
  };
  const [numStars3, setNumStars3] = useState(0);
  const colorStars3 = (index) => {
    setNumStars3(index + 1);
    setQualRating(index + 1);
    // console.log(index + 1);
  };

  const starArray1 = [...Array(5)];
  const starArray2 = [...Array(5)];
  const starArray3 = [...Array(5)];
  const starArray4 = [...Array(5)];

  const showRes = (event) => {
    let ct;
    var myHeaders = new Headers();
    myHeaders.append("apikey", "u46l74BJPU9QaRlWzn4g0TFpEstBk3aw");
  
    var raw = reviewFeed;
    var requestOptions = {
      method: "POST",
      redirect: "follow",
      headers: myHeaders,
      body: raw,
    };
  
    fetch(
      "https://api.apilayer.com/bad_words?censor_character={censor_character}",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const obj = JSON.parse(result);
        console.log(obj);
        console.log(obj.bad_words_total);
        if (obj.bad_words_total > 0) {
          openPopup1();
        }
        else {
          const dataObj = {
            objectId: userId,
            courseQuality: qualRating,
            lod: difficultyRating,
            responsiveness: respoRating,
            helpfulness: helpRating,
            feedback: reviewFeed,
            course: takenCourse,
            date: new Date().toISOString(),
          };
          const jsonString = JSON.stringify(dataObj);
          console.log(jsonString);
          fetch("http://localhost:5000/ratedData", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: jsonString,
          })
            .then((response) => {
              // Handle the response from the server
            })
            .catch((error) => {
              // Handle any errors that occur during the request
            });
          openPopup();
        }
        
      })
      .catch((error) => console.log("error", error));
  };
  

  const textSave = (event) => {
    setReviewFeed(document.querySelector("#textPuppy").value);
  };

  const courseSave = (event) => {
    setTakenCourse(event.target.value);
    // console.log(takenCourse)
  };
  // useEffect(() => {
  //     console.log(takenCourse)
  // }, [takenCourse])

  // popup

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupOpen1, setIsPopupOpen1] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    // setIsPopupOpen(false);
    window.history.go(-1);
  };

  const openPopup1 = () => {
    setIsPopupOpen1(true);
  }

  const closePopup1 = () => {
    setIsPopupOpen1(false);
    // window.history.go(-1);
  };

  return (
    <div className="ratingTheProf">
      {filteredData[0] && (
        <div className="rateBig">
          <div className="ratehim1">
            <div className="rateStars rateStarsCourse">
              <h1>Course: </h1>
              <select
                name="courses"
                id="courses"
                className="selectCourse"
                onChange={courseSave}
              >
                <option value="all">Select Course</option>
                {filteredData[0].courses.map((cours) => (
                  <option value={cours}>{cours}</option>
                ))}
              </select>
            </div>
            <div className="rateStars">
              <h1>Teaching Quality: </h1>
              <div className="starDiv">
                {starArray1.map((_, i) =>
                  numStars0 > i ? (
                    <StarFilled key={i} onClick={() => colorStars0(i)} />
                  ) : (
                    <StarBorderRoundedIcon
                      key={i}
                      onClick={() => colorStars0(i)}
                    />
                  )
                )}
              </div>
            </div>
            <div className="rateStars">
              <h1>Professor Helpfulness: </h1>
              <div className="starDiv">
                {starArray2.map((_, i) =>
                  numStars1 > i ? (
                    <StarFilled key={i} onClick={() => colorStars1(i)} />
                  ) : (
                    <StarBorderRoundedIcon
                      key={i}
                      onClick={() => colorStars1(i)}
                    />
                  )
                )}
              </div>
            </div>
            <div className="rateStars">
              <h1>Professor Responsiveness: </h1>
              <div className="starDiv">
                {starArray3.map((_, i) =>
                  numStars2 > i ? (
                    <StarFilled key={i} onClick={() => colorStars2(i)} />
                  ) : (
                    <StarBorderRoundedIcon
                      key={i}
                      onClick={() => colorStars2(i)}
                    />
                  )
                )}
              </div>
            </div>
            <div className="rateStars">
              <h1>Quality of the course: </h1>
              <div className="starDiv">
                {starArray4.map((_, i) =>
                  numStars3 > i ? (
                    <StarFilled key={i} onClick={() => colorStars3(i)} />
                  ) : (
                    <StarBorderRoundedIcon
                      key={i}
                      onClick={() => colorStars3(i)}
                    />
                  )
                )}
              </div>
            </div>
          </div>
          <div className="ratehim2">
            <div className="rateStarsTextDiv rateStars">
              <div>
                <h1>Feedback: </h1>
              </div>

              {/* <textarea name="reviewProf" id="reviewProf" cols="90" rows="10" appearance="none"></textarea> */}
              <textarea
                appearance="subtle"
                placeholder="Your thoughts ....."
                spellCheck="true"
                style={{ fontSize: "2rem", padding: "2rem" }}
                id="textPuppy"
                onChange={textSave}
              />
            </div>

            <button className="buttonLogin bbb111" onClick={showRes}>
              Submit
            </button>
          </div>
        </div>
      )}
      <Modal
        isOpen={isPopupOpen}
        onRequestClose={closePopup}
        contentLabel="Popup Modal"
        className="modal"
        style={{
          overlay: {
            zIndex: 1000,
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            backdropFilter: "blur(16px)",
          },
          content: {
            zIndex: 1000,
          },
        }}
      >
        <img src={tickCircle} alt="cross"/>
        <h2>Thank you for your feedback!</h2>

        <button onClick={closePopup}>Go Back</button>
      </Modal>
      <Modal
        isOpen={isPopupOpen1}
        onRequestClose={closePopup1}
        contentLabel="Popup Modal"
        className="modal"
        style={{
          overlay: {
            zIndex: 1000,
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            backdropFilter: "blur(16px)",
          },
          content: {
            zIndex: 1000,
          },
        }}
      >
        <img src={cross} alt="tick" />
        <h2>Refrain from using foul language</h2>

        <button onClick={closePopup1}>Go Back</button>
      </Modal>
    </div>
  );
};

export default RateProf;

// DIFFICULTY LEVEL
// HELPFULNESS
// RESPONSIVENESS
// COURSE QUALITY
// TEXT-BAR TO WRITE THE FEEDBACK
// COURSE
