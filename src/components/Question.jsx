import React from "react";
import { useChecks } from "../context/ChecksContext";
import Button from "./Button";
import TextInput from "./TextInput";

const Question = () => {
  const { dispatch, inputValue, setInputValue } = useChecks();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-center pt-7">
          Answer The Questions
        </h1>
        <div className="mx-auto py-5 max-w-2xl p-2">
          <h1 className="text-lg mb-3">👉 Why do you want to Join us?</h1>
          <TextInput
            onChange={handleChange}
            name="j01"
            value={inputValue.j01}
            no="1."
          />
          <TextInput
            onChange={handleChange}
            name="j02"
            value={inputValue.j02}
            no="2."
          />
          <TextInput
            onChange={handleChange}
            name="j03"
            value={inputValue.j03}
            no="3."
          />
        </div>
        <div className="mx-auto py-5 max-w-2xl p-2">
          <h1 className="text-lg mb-3">
            👉 Describe Blue Bird Club (BB-C) in 3 Sentence:
          </h1>
          <TextInput
            onChange={handleChange}
            name="d01"
            value={inputValue.d01}
            no="1."
          />
          <TextInput
            onChange={handleChange}
            name="d02"
            value={inputValue.d02}
            no="2."
          />
          <TextInput
            onChange={handleChange}
            name="d03"
            value={inputValue.d03}
            no="3."
          />
        </div>
        <div className="mx-auto py-5 max-w-2xl p-2">
          <h1 className="text-lg mb-3">
            👉 Identify 3 problems of modern society which need to be fixed:
          </h1>
          <TextInput
            onChange={handleChange}
            name="i01"
            value={inputValue.i01}
            no="1."
          />
          <TextInput
            onChange={handleChange}
            name="i02"
            value={inputValue.i02}
            no="2."
          />
          <TextInput
            onChange={handleChange}
            name="i03"
            value={inputValue.i03}
            no="3."
          />
        </div>
        <div className="mx-auto py-5 max-w-2xl p-2">
          <h1 className="text-lg mb-3">
            👉 3 Ideas of social work which you want to do with BB-C:
          </h1>
          <TextInput
            onChange={handleChange}
            name="s01"
            value={inputValue.s01}
            no="1."
          />
          <TextInput
            onChange={handleChange}
            name="s02"
            value={inputValue.s02}
            no="2."
          />
          <TextInput
            onChange={handleChange}
            name="s03"
            value={inputValue.s03}
            no="3."
          />
        </div>
      </div>
      <div className="flex justify-center gap-3 mx-auto mb-8">
        <Button
          title="Prev"
          onClick={() => dispatch({ type: "edu", payload: true })}
        />
        <Button
          title="Next"
          onClick={() => dispatch({ type: "ques", payload: false })}
        />
      </div>
    </>
  );
};

export default Question;
