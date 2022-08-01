// import jsPDFInvoiceTemplate, { OutputType } from "jspdf-invoice-template";
// import { useState } from "react";

import { Educational, Home, Login, Question, SubmitData } from "./components";
import { Routes, Route } from "react-router-dom";
import { useChecks } from "./context/ChecksContext";
import Result from "./components/pages/Result";

function App() {
  const { dispatch, inputValue, data } = useChecks();
  const handleSubmit = (e) => {
    dispatch({ type: "addData", payload: inputValue });
    dispatch({ type: "ques", payload: true });
  };

  const { home, edu, ques, final } = useChecks();
  return (
    <div className="min-h-screen bg-slate-100">
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route
          path="/form"
          element={
            <>
              <form onSubmit={handleSubmit}>
                {home && <Home />}
                {edu && <Educational />}
                {ques && <Question />}
                {final && <SubmitData />}
              </form>
            </>
          }
        />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
