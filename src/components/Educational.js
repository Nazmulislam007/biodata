import { useChecks } from "../context/ChecksContext";
import Button from "./Button";
import InputField from "./InputField";

const Educational = () => {
  const { dispatch, inputValue, setInputValue } = useChecks();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <>
      <h1 className="text-center text-4xl font-bold text-gray-700 pt-10">
        Last two(2) Educational Qualification
      </h1>
      <div>
        <div>
          <div className="bg-slate-100 border-2 mx-auto my-5 custom-grid max-w-3xl p-2">
            <h1 className="grid-1">Education 1</h1>
            <InputField
              title="Exam"
              onChange={handleChange}
              name="exam1"
              value={inputValue.exam1}
              type="text"
              required
            />
            <InputField
              title="Subject/Group"
              type="text"
              onChange={handleChange}
              name="group1"
              value={inputValue.group1}
              required
            />
            <InputField
              title="Institution Name"
              type="text"
              onChange={handleChange}
              name="inName1"
              value={inputValue.inName1}
              required
            />
            <InputField
              title="University/Board"
              type="text"
              onChange={handleChange}
              name="board1"
              value={inputValue.board1}
              required
            />
            <InputField
              title="CGPA"
              type="number"
              onChange={handleChange}
              name="cgpa1"
              value={inputValue.cgpa1}
              required
            />
            <InputField
              title="Passing Year"
              type="number"
              onChange={handleChange}
              name="year1"
              value={inputValue.year1}
              required
            />
          </div>
        </div>
        <div>
          <div className="bg-slate-100 border-2 mx-auto my-5 custom-grid max-w-3xl p-2">
            <h1 className="grid-1">Education 2</h1>
            <InputField
              title="Exam"
              onChange={handleChange}
              name="exam2"
              value={inputValue.exam2}
              type="text"
              required
            />
            <InputField
              title="Subject/Group"
              type="text"
              onChange={handleChange}
              name="group2"
              value={inputValue.group2}
              required
            />
            <InputField
              title="Institution Name"
              type="text"
              onChange={handleChange}
              name="inName2"
              value={inputValue.inName2}
              required
            />
            <InputField
              title="University/Board"
              type="text"
              onChange={handleChange}
              name="board2"
              value={inputValue.board2}
              required
            />
            <InputField
              title="CGPA"
              type="number"
              onChange={handleChange}
              name="cgpa2"
              value={inputValue.cgpa2}
              required
            />
            <InputField
              title="Passing Year"
              type="number"
              onChange={handleChange}
              name="year2"
              value={inputValue.year2}
              required
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-3 mx-auto mt-3">
        <Button
          title="Prev"
          onClick={() => dispatch({ type: "home", payload: true })}
        />
        <Button
          title="Next"
          onClick={() => dispatch({ type: "edu", payload: false })}
        />
      </div>
    </>
  );
};

export default Educational;
