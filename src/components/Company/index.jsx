import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./company-styles.css"

// const Box = styled.div`
//   border: 1px solid black;
//   border-radius: 5px;

//   width: 80%;
//   margin: 0 auto;
//   margin-bottom: 15px;
//   display: grid;
//   color: red;
//   grid-template-columns: repeat(4, 1fr) ;
//   border: 3px solid black;

//   color: white;
// `;

const Company = ({ company }) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    getScore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getScore = async () => {
    try {
      const { data } = await axios(
        `https://api.github.com/users/${company.name}`
      );
      setScore(data.public_repos);
    } catch (error) {}
  };

  return (
    <div className="box">
      <span>{company.name}</span>
      <span>score: {score}</span>
      <Link to={`/update/${company.id}`}>Update</Link>
      <Link to={`/delete/${company.id}`}>Delete</Link>
    </div>
  );
};

export default Company;
