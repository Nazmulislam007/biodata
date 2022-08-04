export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "home":
      return { ...state, home: payload, edu: !payload };
    case "edu":
      return { ...state, edu: payload, ques: !payload };
    case "ques":
      return { ...state, ques: payload, final: !payload };
    default:
      return state;
  }
};
