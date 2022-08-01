import { createContext, useContext, useReducer, useState } from "react";
import { reducer } from "./reducer";

const CreateChecks = createContext();

export const useChecks = () => {
  return useContext(CreateChecks);
};

const ChecksContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    login: true,
    home: false,
    edu: false,
    ques: false,
    final: false,
  });

  const [inputValue, setInputValue] = useState({
    username: "",
    fName: "",
    mName: "",
    image: "",
    email: "",
    pnp: "",
    pne: "",
    reli: "",
    bg: "",
    nid: "",
    exam1: "",
    group1: "",
    inName1: "",
    board1: "",
    cgpa1: "",
    year1: "",
    exam2: "",
    group2: "",
    inName2: "",
    board2: "",
    cgpa2: "",
    year2: "",
    j01: "",
    d01: "",
    i01: "",
    s01: "",
    j02: "",
    d02: "",
    i02: "",
    s02: "",
    j03: "",
    d03: "",
    i03: "",
    s03: "",
  });

  const value = { ...state, inputValue, setInputValue, dispatch };

  return (
    <CreateChecks.Provider value={value}>{children}</CreateChecks.Provider>
  );
};

export default ChecksContext;
