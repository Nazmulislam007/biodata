import { ref, set } from "firebase/database";
import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useChecks } from "../context/ChecksContext";
import { db } from "../firebase/firebase";
import Button from "./Button";

const SubmitData = () => {
  const navigate = useNavigate();
  const { inputValue, dispatch } = useChecks();

  const handleSubmit = (e) => {
    e.preventDefault();
    set(ref(db, "BioData/" + inputValue.username), inputValue)
      .then(() => {
        alert("data insert successfully");
        navigate("/result", { replace: true });
      })
      .catch((er) => console.log(er));
  };

  return (
    <>
      <div className="bg-slate-100 mx-auto pt-5 max-w-sm p-2">
        <h1 className="text-center text-4xl font-bold text-gray-700 pt-10">
          Are you Sure to Submit Data
        </h1>
      </div>
      <div className="flex justify-center gap-3 mx-auto mt-3">
        <Button
          title="Prev"
          type="button"
          onClick={() => dispatch({ type: "ques", payload: true })}
        />
        <Button title="Submit" onClick={handleSubmit} />
      </div>
    </>
  );
};

export default SubmitData;
