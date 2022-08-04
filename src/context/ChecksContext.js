import { createContext, useContext, useReducer, useState } from "react";
import { reducer } from "./reducer";

const CreateChecks = createContext();

export const useChecks = () => {
  return useContext(CreateChecks);
};

const ChecksContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    home: true,
    edu: false,
    ques: false,
    final: false,
  });

  const [inputValue, setInputValue] = useState({
    bio: {
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
    },

    education: {
      exam1: {
        name1: "",
        group1: "",
        inName1: "",
        board1: "",
        cgpa1: "",
        year1: "",
      },
      exam2: {
        name2: "",
        group2: "",
        inName2: "",
        board2: "",
        cgpa2: "",
        year2: "",
      },
    },

    qusetion: {
      first: {
        fq1: "",
        fq2: "",
        fq3: "",
      },
      second: {
        sq1: "",
        sq2: "",
        sq3: "",
      },
      third: { tq1: "", tq2: "", tq3: "" },
      fourth: {
        fq1: "",
        fq2: "",
        fq3: "",
      },
    },
  });
  const value = {
    ...state,
    inputValue,
    setInputValue,
    dispatch,
  };

  return (
    <CreateChecks.Provider value={value}>{children}</CreateChecks.Provider>
  );
};

export default ChecksContext;
