import React, { useState } from "react";
import { useChecks } from "../context/ChecksContext";
import Button from "./Button";
import InputField from "./InputField";

const Home = () => {
  const { dispatch, inputValue, setInputValue } = useChecks();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleImgChange = (e) => {
    setInputValue({ ...inputValue, image: e.target.files[0] });
  };

  return (
    <>
      <h1 className="text-center text-4xl font-bold pt-10">Blue Bird Club</h1>
      <div className="bg-slate-100 mx-auto my-5 custom-grid max-w-3xl p-2">
        <InputField
          title="Applicant Name"
          onChange={handleChange}
          name="username"
          value={inputValue.username}
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
          value={inputValue.fName}
          required
        />
        <InputField
          title="Mother's Name"
          type="text"
          onChange={handleChange}
          name="mName"
          value={inputValue.mName}
          required
        />
        <InputField
          title="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={inputValue.email}
          required
        />

        <InputField
          title="Phone Number (Personal)"
          type="number"
          onChange={handleChange}
          name="pnp"
          value={inputValue.pnp}
          required
        />

        <InputField
          title="Phone Number (Emergency)"
          type="number"
          onChange={handleChange}
          name="pne"
          value={inputValue.pne}
          required
        />
        <InputField
          title="Religion"
          type="text"
          onChange={handleChange}
          name="reli"
          value={inputValue.reli}
          required
        />
        <InputField
          title="Blood Group"
          type="text"
          onChange={handleChange}
          name="bg"
          value={inputValue.bg}
        />
        <InputField
          title="NID/Birth Registration Number"
          type="number"
          onChange={handleChange}
          name="nid"
          value={inputValue.nid}
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

// const [userName, setUserName] = useState("");

// const props = {
//   outputType: OutputType.Save,
//   returnJsPDFDocObject: true,
//   fileName: "Invoice 2021",
//   orientationLandscape: false,
//   compress: true,
//   logo: {
//     src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/logo.png",
//     type: "PNG", //optional, when src= data:uri (nodejs case)
//     width: 53.33, //aspect ratio = width/height
//     height: 26.66,
//     margin: {
//       top: 0, //negative or positive num, from the current position
//       left: 0, //negative or positive num, from the current position
//     },
//   },
//   stamp: {
//     inAllPages: true, //by default = false, just in the last page
//     src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/qr_code.jpg",
//     type: "JPG", //optional, when src= data:uri (nodejs case)
//     width: 20, //aspect ratio = width/height
//     height: 20,
//     margin: {
//       top: 0, //negative or positive num, from the current position
//       left: 0, //negative or positive num, from the current position
//     },
//   },
//   business: {
//     name: userName,
//     address: "Albania, Tirane ish-Dogana, Durres 2001",
//     phone: "(+355) 069 11 11 111",
//     email: "email@example.com",
//     email_1: "info@example.al",
//     website: "www.example.al",
//   },
//   contact: {
//     label: "Invoice issued for:",
//     name: "Client Name",
//     address: "Albania, Tirane, Astir",
//     phone: "(+355) 069 22 22 222",
//     email: "client@website.al",
//     otherInfo: "www.website.al",
//   },
//   invoice: {
//     label: "Invoice #: ",
//     num: 19,
//     invDate: "Payment Date: 01/01/2021 18:12",
//     invGenDate: "Invoice Date: 02/02/2021 10:17",
//     headerBorder: false,
//     tableBodyBorder: false,
//     header: [
//       {
//         title: "#",
//         style: {
//           width: 10,
//         },
//       },
//       {
//         title: "Title",
//         style: {
//           width: 30,
//         },
//       },
//       {
//         title: "Description",
//         style: {
//           width: 80,
//         },
//       },
//       { title: "Price" },
//       { title: "Quantity" },
//       { title: "Unit" },
//       { title: "Total" },
//     ],
//     table: Array.from(Array(10), (item, index) => [
//       index + 1,
//       "There are many variations ",
//       "Lorem Ipsum is simply dummy text dummy text ",
//       200.5,
//       4.5,
//       "m2",
//       400.5,
//     ]),
//     additionalRows: [
//       {
//         col1: "Total:",
//         col2: "145,250.50",
//         col3: "ALL",
//         style: {
//           fontSize: 14, //optional, default 12
//         },
//       },
//       {
//         col1: "VAT:",
//         col2: "20",
//         col3: "%",
//         style: {
//           fontSize: 10, //optional, default 12
//         },
//       },
//       {
//         col1: "SubTotal:",
//         col2: "116,199.90",
//         col3: "ALL",
//         style: {
//           fontSize: 10, //optional, default 12
//         },
//       },
//     ],
//     invDescLabel: "Invoice Note",
//     invDesc:
//       "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
//   },
//   footer: {
//     text: "The invoice is created on a computer and is valid without the signature and stamp.",
//   },
//   pageEnable: true,
//   pageLabel: "Page ",
// };
