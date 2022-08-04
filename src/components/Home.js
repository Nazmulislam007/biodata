import { useChecks } from "../context/ChecksContext";
import Button from "./Button";
import InputField from "./InputField";

const Home = () => {
  const { dispatch, setInputValue, inputValue } = useChecks();
  const { bio } = inputValue;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, bio: { ...bio, [name]: value } });
  };

  const handleImgChange = (e) => {
    setInputValue({ ...inputValue, bio: { ...bio, image: e.target.files[0] } });
  };

  return (
    <>
      <h1 className="text-center text-4xl font-bold pt-10">Blue Bird Club</h1>
      <div className="bg-slate-100 mx-auto my-5 custom-grid max-w-3xl p-2">
        <InputField
          title="Applicant Name"
          onChange={handleChange}
          name="username"
          value={bio.username}
          type="text"
          required
        />
        <InputField
          className="custom-file-input"
          onChange={handleImgChange}
          type="file"
          name="image"
          accept="image/*"
        />
        <InputField
          title="Father's Name"
          type="text"
          onChange={handleChange}
          name="fName"
          value={bio.fName}
          required
        />
        <InputField
          title="Mother's Name"
          type="text"
          onChange={handleChange}
          name="mName"
          value={bio.mName}
          required
        />
        <InputField
          title="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={bio.email}
          required
        />

        <InputField
          title="Phone Number (Personal)"
          type="number"
          onChange={handleChange}
          name="pnp"
          value={bio.pnp}
          required
        />

        <InputField
          title="Phone Number (Emergency)"
          type="number"
          onChange={handleChange}
          name="pne"
          value={bio.pne}
          required
        />
        <InputField
          title="Religion"
          type="text"
          onChange={handleChange}
          name="reli"
          value={bio.reli}
          required
        />
        <InputField
          title="Blood Group"
          type="text"
          onChange={handleChange}
          name="bg"
          value={bio.bg}
        />
        <InputField
          title="NID/Birth Registration Number"
          type="number"
          onChange={handleChange}
          name="nid"
          value={bio.nid}
          required
        />
      </div>
      <div className="grid place-items-center">
        <Button
          title="Next"
          onClick={() => dispatch({ type: "home", payload: false })}
        />
      </div>
    </>
  );
};

export default Home;
