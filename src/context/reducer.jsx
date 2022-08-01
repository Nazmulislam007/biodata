export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "login":
      return { ...state, login: payload, home: !payload };
    case "home":
      return { ...state, home: payload, edu: !payload };
    case "edu":
      return { ...state, edu: payload, ques: !payload };
    case "ques":
      return { ...state, ques: payload, final: !payload };
  }
  return state;
};
