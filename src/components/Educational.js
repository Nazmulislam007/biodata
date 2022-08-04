import { useChecks } from "../context/ChecksContext";
import Button from "./Button";
import InputField from "./InputField";

const Educational = () => {
  const { dispatch, inputValue, setInputValue } = useChecks();
  const { education } = inputValue;
  const { exam1, exam2 } = education;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      education: {
        ...education,
        exam1: { ...exam1, [name]: value },
        exam2: { ...exam2, [name]: value },
      },
    });
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
              name="name1"
              value={exam1.name}
              type="text"
              required
            />
            <InputField
              title="Subject/Group"
              type="text"
              onChange={handleChange}
              name="group1"
              value={exam1.group}
              required
            />
            <InputField
              title="Institution Name"
              type="text"
              onChange={handleChange}
              name="inName1"
              value={exam1.inName}
              required
            />
            <InputField
              title="University/Board"
              type="text"
              onChange={handleChange}
              name="board1"
              value={exam1.board}
              required
            />
            <InputField
              title="CGPA"
              type="number"
              onChange={handleChange}
              name="cgpa1"
              value={exam1.cgpa}
              required
            />
            <InputField
              title="Passing Year"
              type="number"
              onChange={handleChange}
              name="year1"
              value={exam1.year}
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
              name="name2"
              value={exam2.name}
              type="text"
              required
            />
            <InputField
              title="Subject/Group"
              type="text"
              onChange={handleChange}
              name="group2"
              value={exam2.group}
              required
            />
            <InputField
              title="Institution Name"
              type="text"
              onChange={handleChange}
              name="inName2"
              value={exam2.inName}
              required
            />
            <InputField
              title="University/Board"
              type="text"
              onChange={handleChange}
              name="board2"
              value={exam2.board}
              required
            />
            <InputField
              title="CGPA"
              type="number"
              onChange={handleChange}
              name="cgpa2"
              value={exam2.cgpa}
              required
            />
            <InputField
              title="Passing Year"
              type="number"
              onChange={handleChange}
              name="year2"
              value={exam2.year}
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
