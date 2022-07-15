import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import questions from "./questions.json";
import Rating from "./Rating";
import OverallPrograss from "./OverallPrograss";
import PrograssBar from "./PrograssBar";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [option, setOption] = useState([]);
  const [answer, setAnswer] = useState();
  const [checkQuestion, setCheckQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(0);

  const [wrongAnswer, setWrongAnswer] = useState(0);

  const shuffleArray = (array, correctAnswer) => {
    const result = new Array(array, correctAnswer);
    const newShaffleArr = [...result].flat(1).sort(() => Math.random() - 0.5);
    setOption(newShaffleArr);
  };

  useEffect(() => {
    const myElement = questions.find((element, index) => index == currentIndex);
    shuffleArray(myElement.incorrect_answers, myElement.correct_answer);
    setCurrentQuestion(myElement);
  }, [currentIndex]);

  const currentHandler = () => {
    setCurrentIndex((prev) => prev + 1);
  };
  const checkHandler = (e) => {
    setAnswer(e);
    e == currentQuestion.correct_answer
      ? setCheckQuestion("Correct!")
      : e !== currentQuestion.correct_answer
      ? setCheckQuestion("Sorry")
      : setCheckQuestion("");

    e == currentQuestion.correct_answer
      ? setCorrectAnswer((prev) => prev + 1)
      : setWrongAnswer((prev) => prev + 1);
  };
  return (
    <div className="App">
      <div className="card-container">
        <OverallPrograss data={currentIndex} />

        <div className="card-container-inner">
          <h1>
            Questions {currentIndex + 1} of {questions.length}
          </h1>
          <p>{currentQuestion.category}</p>
          <p>
            <Rating data={currentQuestion.difficulty} />
          </p>
          <h2 style={{ textAlign: "center", marginLeft: "66px" }}>
            {currentQuestion.question}
          </h2>
          <div style={{ marginLeft: "90px" }}>
            {option.map((signleOption, index) => (
              <p
                onClick={() => checkHandler(signleOption)}
                key={index}
                className="options"
                value={signleOption}
              >
                {signleOption}
              </p>
            ))}
          </div>
          <div
            style={{ textAlign: "center", fontSize: "19px", fontWeight: "600" }}
          >
            {checkQuestion}
          </div>
          {currentIndex + 1 === questions.length ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="nextbtn"
                onClick={() => window.location.reload()}
              >
                Finish
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button className="nextbtn" onClick={currentHandler}>
                next Question
              </button>
            </div>
          )}
        </div>
        <div>
          <PrograssBar
            data={currentIndex}
            correctAnswer={correctAnswer}
            wrongAnswer={wrongAnswer}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
