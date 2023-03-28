import profRecords from "../profs.json";
import React, { useState, useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate, useParams } from "react-router-dom";


const IMSOE = () =>{
    const [data, setData] = useState([])  
    const [filteredData, setFilteredData] = useState([])  
    useEffect(() => {
        fetch("http://localhost:5000/profs/imsoe")
            .then(response => {
                return response.json()
            })
        
            .then(data => {
                setData(data);
                setFilteredData(data);
            })
    }, [])

    
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData(data);
        }
        else {
            setFilteredData(newFilter);
        }
    }

    const [letterData, setLetterdData] = useState([])  
    const letterClick = (event) => {
        const letter = event.target.dataset.value;
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().startsWith(letter);
        });
        if (letter === "all") {
            setFilteredData(data);
        }
        else {
            setFilteredData(newFilter);
        }
    }

    const navigate = useNavigate();

    const goInside = (event) => {
        const word = "/profs/" + event.target.dataset.id;
        console.log(word);
        
        navigate(word);
    }

    const color_list = [
        "#ff4545",
        "#ffa534",
        "#ffe234",
        "#b7dd29",
        "#57e32c"
    ];

    return (
        <div className="engg">
            <div className="namesearchbutt">
                <li data-value="all" onClick={letterClick}>All</li>
                <li data-value="a" onClick={letterClick}>A</li>
                <li data-value="b" onClick={letterClick}>B</li>
                <li data-value="c" onClick={letterClick}>C</li>
                <li data-value="d" onClick={letterClick}>D</li>
                <li data-value="e" onClick={letterClick}>E</li>
                <li data-value="f" onClick={letterClick}>F</li>
                <li data-value="g" onClick={letterClick}>G</li>
                <li data-value="h" onClick={letterClick}>H</li>
                <li data-value="i" onClick={letterClick}>I</li>
                <li data-value="j" onClick={letterClick}>J</li>
                <li data-value="k" onClick={letterClick}>K</li>
                <li data-value="l" onClick={letterClick}>L</li>
                <li data-value="m" onClick={letterClick}>M</li>
                <li data-value="n" onClick={letterClick}>N</li>
                <li data-value="o" onClick={letterClick}>O</li>
                <li data-value="p" onClick={letterClick}>P</li>
                <li data-value="q" onClick={letterClick}>Q</li>
                <li data-value="r" onClick={letterClick}>R</li>
                <li data-value="s" onClick={letterClick}>S</li>
                <li data-value="t" onClick={letterClick}>T</li>
                <li data-value="u" onClick={letterClick}>U</li>
                <li data-value="v" onClick={letterClick}>V</li>
                <li data-value="w" onClick={letterClick}>W</li>
                <li data-value="x" onClick={letterClick}>X</li>
                <li data-value="y" onClick={letterClick}>Y</li>
                <li data-value="z" onClick={letterClick}>Z</li>
            </div>
            <div className="searchBarProfs">
                <input type="text" placeholder="Search for a professor" onChange={handleFilter}/>
                <div className="searchIcon"><SearchIcon/></div>
            </div>
            {
                filteredData.map(pRec => {
                     
                    return (
                        <div className="profDiv" data-id = {pRec._id} onClick={goInside}>
                            <div className="leftProfDiv">
                                <h2>QUALITY</h2>
                                <div style={{
                                 backgroundColor: color_list[Math.ceil(pRec.rating) - 1]
                                }}>
                                    <h1>{pRec.rating}</h1>
                                </div>
                                <h2>{pRec.totRatings} Ratings</h2>
                            </div>
                            <div className="rightProfDiv">
                                <h1>{pRec.name.toUpperCase()}</h1>
                                <h2>{pRec.dept}</h2>
                                <h2>{pRec.lod} level of difficulty</h2>
                            </div>
                        </div>
                    )
                })    
              
            }


        </div>
    
    );
    
}
  export default IMSOE;