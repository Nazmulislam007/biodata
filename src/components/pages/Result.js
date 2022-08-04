import { child, get, ref } from "firebase/database";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { db } from "../../firebase/firebase";
import InputField from "../InputField";
import Button from "../Button";

const Result = () => {
  const [data, setData] = useState({});
  const [inputData, setInputData] = useState("");
  const { bio, education, question } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    get(child(ref(db), "BioData/" + inputData))
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
  };

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
          <p>{bio?.username}</p>
          <p>{bio?.fName}</p>
          <p>{bio?.mName}</p>
          <p>{bio?.email}</p>
          <p>{bio?.pnp}</p>
          <p>{bio?.pne}</p>
          <p>{bio?.reli}</p>
          <p>{bio?.bg}</p>
          <p>{bio?.nid}</p>
          <p>{education?.exam1.exam1}</p>
          <p>{education?.exam1.group1}</p>
          <p>{education?.exam1.inName1}</p>
          <p>{education?.exam1.board1}</p>
          <p>{education?.exam1.cgpa1}</p>
          <p>{education?.exam1.year1}</p>
          <p>{education?.exam2.exam2}</p>
          <p>{education?.exam2.group2}</p>
          <p>{education?.exam2.inName2}</p>
          <p>{education?.exam2.board2}</p>
          <p>{education?.exam2.cgpa2}</p>
          <p>{education?.exam2.year2}</p>
          <p>{question?.first.fq1}</p>
          <p>{question?.first.fq2}</p>
          <p>{question?.first.fq3}</p>
          <p>{question?.second.sq1}</p>
          <p>{question?.second.sq2}</p>
          <p>{question?.second.sq3}</p>
          <p>{question?.third.tq1}</p>
          <p>{question?.third.tq2}</p>
          <p>{question?.third.tq3}</p>
          <p>{question?.fourth.fq1}</p>
          <p>{question?.fourth.fq2}</p>
          <p>{question?.fourth.fq3}</p>
        </div>
      </div>

      <Link to="/" className="bg-green-600 px-10 py-2 text-white text-lg">
        Back
      </Link>
    </>
  );
};

export default Result;
