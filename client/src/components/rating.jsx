import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const RateProf  = () => {
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
            })
    }, [])
    console.log(filteredData[0].courses)
    return (
        <div></div>
    );
}

export default RateProf;