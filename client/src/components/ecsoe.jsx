import profRecords from "../profs.json";
import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useParams } from "react-router-dom";
import HeartLike from "../assets/Heart.svg";

const EcSoe = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/profs/ecsoe")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setData(data);
        setFilteredData(data);
      });
  }, []);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData(data);
    } else {
      setFilteredData(newFilter);
    }
  };

  const [letterData, setLetterdData] = useState([]);
  const letterClick = (event) => {
    const letter = event.target.dataset.value;
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().startsWith(letter);
    });
    if (letter === "all") {
      setFilteredData(data);
    } else {
      setFilteredData(newFilter);
    }
  };
  const navigate = useNavigate();

  const goInside = (event) => {
    const word = "/profs/" + event.target.dataset.id;
    console.log(word);

    navigate(word);
  };

  const color_list = ["#ff4545", "#ffa534", "#ffe234", "#b7dd29", "#57e32c"];

  const addFav = (event) => {
    event.stopPropagation();
    const img = event.target;
    img.style.fill = "#ff0000";
    console.log(event.target);
  };

  const deptFilt = (event) => {
    const checkboxValue = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      console.log(checkboxValue.toLowerCase());
      const newFilter = data.filter((value) => {
        return value.dept.toLowerCase() === checkboxValue.toLowerCase();
      });
      setFilteredData(newFilter);
    } else {
      setFilteredData(data);
    }
  };

  const ratingFilt = (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      // console.log(event.target.value);
      if (event.target.value === "1") {
        const newFilter = [...data].sort((a, b) => a.rating - b.rating);
        setFilteredData(newFilter);
      } else {
        const newFilter = [...data].sort((a, b) => b.rating - a.rating);
        setFilteredData(newFilter);
      }
    } else {
      setFilteredData(data);
    }
  };

  return (
    <div className="engg">
      <div className="filterTheProf">
        <div className="filterHeadName">
          <h1>FILTERS</h1>
        </div>
        <div className="borderBro"></div>
        <div className="fil">
          <label for="checkbox-1">
            <input
              type="checkbox"
              id="checkbox-1"
              name="checkbox-1"
              value="cse"
            />
            Favourites
          </label>

          {/* This is for rating filter */}

          <div className="deptFilter">
            <div className="deptF1">
              <h2>Rating</h2>
            </div>
            <div>
              <label for="checkbox-2">
                <input
                  type="checkbox"
                  id="checkbox-2"
                  name="checkbox-2"
                  onClick={ratingFilt}
                  value="1"
                />
                Low-high
              </label>
              <label for="checkbox-2">
                <input
                  type="checkbox"
                  id="checkbox-2"
                  name="checkbox-2"
                  onClick={ratingFilt}
                  value="2"
                />
                High-low
              </label>
            </div>
          </div>

          {/* This is for depatment filter  */}
          
          <div className="deptFilter">
            <div className="deptF1">
              <h2>Department</h2>
            </div>
            <div>
              <label for="checkbox-cs">
                <input
                  onClick={deptFilt}
                  type="checkbox"
                  id="checkbox-cs"
                  name="checkbox-cs"
                  value="Department of Computer Science and Engineering"
                />
                Dept of CSE
              </label>
              <label for="checkbox-phy">
                <input
                  onClick={deptFilt}
                  type="checkbox"
                  id="checkbox-phy"
                  name="checkbox-phy"
                  value="Department Of Physics"
                />
                Dept of Phy
              </label>
              <label for="checkbox-chem">
                <input
                  onClick={deptFilt}
                  type="checkbox"
                  id="checkbox-chem"
                  name="checkbox-chem"
                  value="Department Of Chemistry"
                />
                Dept of Chem
              </label>
              <label for="checkbox-math">
                <input
                  onClick={deptFilt}
                  type="checkbox"
                  id="checkbox-math"
                  name="checkbox-math"
                  value="Department of Mathematics"
                />
                Dept of Maths
              </label>
              <label for="checkbox-EEE">
                <input
                  type="checkbox"
                  id="checkbox-EEE"
                  name="checkbox-EEE"
                  onClick={deptFilt}
                  value="Department of Electrical & Electronics Engineering"
                />
                Dept of EEE
              </label>
              <label for="checkbox-mech">
                <input
                  type="checkbox"
                  id="checkbox-mech"
                  name="checkbox-mech"
                  onClick={deptFilt}
                  value="Department of Mechanical Engineering"
                />
                Dept of Mech
              </label>
              <label for="checkbox-civil">
                <input
                  type="checkbox"
                  id="checkbox-civil"
                  name="checkbox-civil"
                  onClick={deptFilt}
                  value="Department of Civil Engineering"
                />
                Dept of Civil
              </label>
              <label for="checkbox-hss">
                <input
                  type="checkbox"
                  id="checkbox-hss"
                  name="checkbox-hss"
                  onClick={deptFilt}
                  value="Department of Humanities & Social Sciences"
                />
                Dept of HSS
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="namesearchbutt">
        <li data-value="all" onClick={letterClick}>
          All
        </li>
        <li data-value="a" onClick={letterClick}>
          A
        </li>
        <li data-value="b" onClick={letterClick}>
          B
        </li>
        <li data-value="c" onClick={letterClick}>
          C
        </li>
        <li data-value="d" onClick={letterClick}>
          D
        </li>
        <li data-value="e" onClick={letterClick}>
          E
        </li>
        <li data-value="f" onClick={letterClick}>
          F
        </li>
        <li data-value="g" onClick={letterClick}>
          G
        </li>
        <li data-value="h" onClick={letterClick}>
          H
        </li>
        <li data-value="i" onClick={letterClick}>
          I
        </li>
        <li data-value="j" onClick={letterClick}>
          J
        </li>
        <li data-value="k" onClick={letterClick}>
          K
        </li>
        <li data-value="l" onClick={letterClick}>
          L
        </li>
        <li data-value="m" onClick={letterClick}>
          M
        </li>
        <li data-value="n" onClick={letterClick}>
          N
        </li>
        <li data-value="o" onClick={letterClick}>
          O
        </li>
        <li data-value="p" onClick={letterClick}>
          P
        </li>
        <li data-value="q" onClick={letterClick}>
          Q
        </li>
        <li data-value="r" onClick={letterClick}>
          R
        </li>
        <li data-value="s" onClick={letterClick}>
          S
        </li>
        <li data-value="t" onClick={letterClick}>
          T
        </li>
        <li data-value="u" onClick={letterClick}>
          U
        </li>
        <li data-value="v" onClick={letterClick}>
          V
        </li>
        <li data-value="w" onClick={letterClick}>
          W
        </li>
        <li data-value="x" onClick={letterClick}>
          X
        </li>
        <li data-value="y" onClick={letterClick}>
          Y
        </li>
        <li data-value="z" onClick={letterClick}>
          Z
        </li>
      </div>
      <div className="searchBarProfs">
        <input
          type="text"
          placeholder="Search for a professor"
          onChange={handleFilter}
        />
        <div className="searchIcon">
          <SearchIcon />
        </div>
      </div>
      <div className="scrollDivProf">
        {filteredData.map((pRec) => {
          return (
            <div className="profDiv" data-id={pRec._id} onClick={goInside}>
              <div className="favourite">
                <svg
                  onClick={addFav}
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.44 3.102c-1.81 0-3.43.88-4.44 2.23a5.549 5.549 0 0 0-4.44-2.23c-3.07 0-5.56 2.5-5.56 5.59 0 1.19.19 2.29.52 3.31 1.58 5 6.45 7.99 8.86 8.81.34.12.9.12 1.24 0 2.41-.82 7.28-3.81 8.86-8.81.33-1.02.52-2.12.52-3.31 0-3.09-2.49-5.59-5.56-5.59Z"
                    fill="#c9c9c9"
                  ></path>
                </svg>
              </div>
              <div className="leftProfDiv">
                <h2>QUALITY</h2>
                <div
                style={{
                  backgroundColor: pRec.rating === 0 ? color_list[0] : color_list[Math.ceil(pRec.rating) - 1]
                }}
                >
                  <h1>{pRec.rating}</h1>
                </div>
                <h2>{pRec.totRatings} Ratings</h2>
              </div>
              <div className="rightProfDiv">
                <h1>{pRec.name.toUpperCase()}</h1>
                <h2>{pRec.dept}</h2>
                {/* <h2>{pRec.lod} level of difficulty</h2> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default EcSoe;

// dynamic rendering
// dynamic urls
