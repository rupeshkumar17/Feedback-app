import React, { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from "uuid";
import AboutPage from "./page/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIconLink from "./components/shared/AboutIconLink";

import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const deleteFeedback = (id) => {
    if (window.confirm("are you sure you want to delete it ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <FeedbackProvider>
      <Router>
        <Header />

        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  {" "}
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                  />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
         
        </div>
      </Router>
    </FeedbackProvider>
  );
}
export default App;

// const title = "hello ";
// const typical = "world";
// const comments = [
//   { id: 1, text: "comment one" },
//   { id: 2, text: "comment two" },
//   { id: 2, text: "comment three" },
// ];
// return (
//   <div className="container">
//     <div>
//       <h1>hello rupesh lets get started</h1>
//       <h2>{title.toUpperCase}</h2>
//       <h3>{typical}</h3>
//     </div>
//     <div className="comments">
//       <h3>comments ({comments.length})</h3>

//       <ul>
//         {comments.map((comment, index) => (
//           <li key={index}>{comment.text}</li>
//         ))}
//       </ul>
//     </div>
//   </div>
// );
// eslint-disable-next-line no-unused-vars
