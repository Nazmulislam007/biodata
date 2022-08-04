import React from "react";
import { useChecks } from "../context/ChecksContext";
import Button from "./Button";
import TextInput from "./TextInput";

const Question = () => {
  const { dispatch, inputValue, setInputValue } = useChecks();
  const { question } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      question: {
        ...question,
        [name]: value,
      },
    });
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
            name="fq1"
            value={question.fq1}
            no="1."
          />
          <TextInput
            onChange={handleChange}
            name="fq2"
            value={question.fq2}
            no="2."
          />
          <TextInput
            onChange={handleChange}
            name="fq3"
            value={question.fq3}
            no="3."
          />
        </div>
        <div className="mx-auto py-5 max-w-2xl p-2">
          <h1 className="text-lg mb-3">
            👉 Describe Blue Bird Club (BB-C) in 3 Sentence:
          </h1>
          <TextInput
            onChange={handleChange}
            name="sq1"
            value={question.sq1}
            no="1."
          />
          <TextInput
            onChange={handleChange}
            name="sq2"
            value={question.sq2}
            no="2."
          />
          <TextInput
            onChange={handleChange}
            name="sq3"
            value={question.sq3}
            no="3."
          />
        </div>
        <div className="mx-auto py-5 max-w-2xl p-2">
          <h1 className="text-lg mb-3">
            👉 Identify 3 problems of modern society which need to be fixed:
          </h1>
          <TextInput
            onChange={handleChange}
            name="tq1"
            value={question.tq1}
            no="1."
          />
          <TextInput
            onChange={handleChange}
            name="tq2"
            value={question.tq2}
            no="2."
          />
          <TextInput
            onChange={handleChange}
            name="tq3"
            value={question.tq3}
            no="3."
          />
        </div>
        <div className="mx-auto py-5 max-w-2xl p-2">
          <h1 className="text-lg mb-3">
            👉 3 Ideas of social work which you want to do with BB-C:
          </h1>
          <TextInput
            onChange={handleChange}
            name="frq1"
            value={question.frq1}
            no="1."
          />
          <TextInput
            onChange={handleChange}
            name="frq2"
            value={question.frq2}
            no="2."
          />
          <TextInput
            onChange={handleChange}
            name="frq3"
            value={question.frq3}
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
