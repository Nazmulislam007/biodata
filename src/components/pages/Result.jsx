import { child, get, ref } from "firebase/database";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { db } from "../../firebase/firebase";
import InputField from "../InputField";
import Button from "../Button";

const Result = () => {
  const [data, setData] = useState({});
  const [inputData, setInputData] = useState("");
  const [userData, setUserData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(inputData);
  };

  get(child(ref(db), "BioData/" + userData))
    .then((snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
      } else {
        alert("no data found");
      }
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <>
      <div>
        <InputField
          title="Enter your Username"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <Button title="Details" className="mb-4" onClick={handleSubmit} />
        <div className="style">
          <p>{data.username}</p>
          <p>{data.fName}</p>
          <p>{data.mName}</p>
          <p>{data.email}</p>
          <p>{data.pnp}</p>
          <p>{data.pne}</p>
          <p>{data.reli}</p>
          <p>{data.bg}</p>
          <p>{data.nid}</p>
          <p>{data.exam1}</p>
          <p>{data.group1}</p>
          <p>{data.inName1}</p>
          <p>{data.board1}</p>
          <p>{data.cgpa1}</p>
          <p>{data.year1}</p>
          <p>{data.exam2}</p>
          <p>{data.group2}</p>
          <p>{data.inName2}</p>
          <p>{data.board2}</p>
          <p>{data.cgpa2}</p>
          <p>{data.year2}</p>
          <p>{data.j01}</p>
          <p>{data.d01}</p>
          <p>{data.i01}</p>
          <p>{data.s01}</p>
          <p>{data.j02}</p>
          <p>{data.d02}</p>
          <p>{data.i02}</p>
          <p>{data.s02}</p>
          <p>{data.j03}</p>
          <p>{data.d03}</p>
          <p>{data.i03}</p>
          <p>{data.s03}</p>
          <p>{data.username}</p>
        </div>
      </div>

      <Link to="/" className="bg-green-600 px-10 py-2 text-white text-lg">
        Back
      </Link>
    </>
  );
};

export default Result;
