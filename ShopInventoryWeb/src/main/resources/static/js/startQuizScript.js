import React, {
useRef,
useState,
useEffect } from
"https://cdn.skypack.dev/react";
import { render } from "https://cdn.skypack.dev/react-dom";

import gsap from "https://cdn.skypack.dev/gsap";

const questions = [];



function useCounter(initialState) {
  const [value, setValue] = useState(initialState);
  const reset = () => setValue(0);

  const add = () => setValue(value => value += 1);

  return { value, add, reset };
}

function Question({
  data,
  buttonText,
  hasButton = true,
  onQuestionButtonClick,
  showAnswer = false,
  markSelection = null })
{
  const [answer, setAnswer] = useState(null);
  const parseValue = value => value ? parseInt(value.split("-")[1]) : null;
  const questionRef = useRef(null);
  const [questions, setQuestions] = useState(null);
const [cs, setCs] = useState(null);
const [sb, setSb] = useState(null);
const [quizNumber, setQuizNumber] = useState(null);
useEffect(() => {
    setCs(() => [[${cs}]]);
  }, [cs]);
  useEffect(() => {
      setSb(() => [[${sb}]]);
    }, [sb]);
    useEffect(() => {
        setQuizNumber(() => [[${quizNumber}]]);
      }, [quizNumber]);
  useEffect(() => {
    gsap.fromTo(
    questionRef.current.querySelector(".question-text"),
    {
      x: 40,
      opacity: 0 },

    {
      x: 0,
      opacity: 1,
      duration: 0.4 });


    gsap.fromTo(
    questionRef.current.querySelectorAll("li"),
    {
      opacity: 0,
      x: 40 },

    {
      x: 0,
      opacity: 1,
      duration: 0.4,
      stagger: 0.1 });


  }, [data]);

  useEffect(() => {
      fetch("http://localhost:8080/Eedu/getQuizData/"+{cs}+"/"+{sb}+"/"+{quizNumber})
        .then(
          (data) => {
            $.each(data, function(id,text,answers,correct,selection){
                        		        				setQuestions({"id":id,"text":text,"answers":answers,"correct":correct,"selection":selection});
                         		        			});
          },
          (error) => {
            setError(error);
            setLoading(false);
          }
        );
    }, []);


  return /*#__PURE__*/(
    React.createElement("div", { className: "question", ref: questionRef }, /*#__PURE__*/
    React.createElement("div", { className: "question-inner" }, /*#__PURE__*/
    React.createElement("h2", { className: "question-text" }, data.text), /*#__PURE__*/
    React.createElement("ul", { className: "question-answers" },
    data.answers.map((text, index) => {
      const value = `q${data.id}-${index}`;
      return /*#__PURE__*/(
        React.createElement("li", {
          className:
          index === data.correct && showAnswer ? "is-true" : "",

          "data-selected": markSelection === index ? true : null }, /*#__PURE__*/

        React.createElement("input", {
          type: "radio",
          name: `q_${data.id}`,
          value: value,
          id: value,
          onChange: e => setAnswer(e.target.value),
          checked:
          !showAnswer ? answer === value : markSelection === index }), /*#__PURE__*/


        React.createElement("label", { className: "question-answer", htmlFor: value },
        text)));



    }))),


    hasButton && /*#__PURE__*/
    React.createElement("button", {
      className: "question-button",
      onClick: () => onQuestionButtonClick(parseValue(answer), data) },

    buttonText)));




}

function Results({ wrong, correct, empty }) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "result" }, /*#__PURE__*/
    React.createElement("div", { className: "result-item is-correct" }, /*#__PURE__*/
    React.createElement("span", { className: "result-count" }, correct), /*#__PURE__*/
    React.createElement("span", { className: "result-text" }, /*#__PURE__*/
    React.createElement("svg", {
      width: "16",
      height: "16",
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      className: "css-i6dzq1",
      viewBox: "0 0 24 24" }, /*#__PURE__*/

    React.createElement("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }), /*#__PURE__*/
    React.createElement("path", { d: "M22 4L12 14.01 9 11.01" })), "CORRECT")), /*#__PURE__*/




    React.createElement("div", { className: "result-item is-wrong" }, /*#__PURE__*/
    React.createElement("span", { className: "result-count" }, wrong), /*#__PURE__*/
    React.createElement("span", { className: "result-text" }, /*#__PURE__*/
    React.createElement("svg", {
      width: "16",
      height: "16",
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      className: "css-i6dzq1",
      viewBox: "0 0 24 24" }, /*#__PURE__*/

    React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /*#__PURE__*/
    React.createElement("path", { d: "M15 9L9 15" }), /*#__PURE__*/
    React.createElement("path", { d: "M9 9L15 15" })), "WRONG")), /*#__PURE__*/




    React.createElement("div", { className: "result-item is-empty" }, /*#__PURE__*/
    React.createElement("span", { className: "result-count" }, empty), /*#__PURE__*/
    React.createElement("span", { className: "result-text" }, /*#__PURE__*/
    React.createElement("svg", {
      width: "16",
      height: "16",
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      className: "css-i6dzq1",
      viewBox: "0 0 24 24" }, /*#__PURE__*/

    React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /*#__PURE__*/
    React.createElement("path", { d: "M8 12L16 12" })), "EMPTY"))));






}

function QuestionCorrection({ wrong, correct, empty }) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "correction" },
    questions.map(question => {
      return /*#__PURE__*/(
        React.createElement(Question, {
          hasButton: false,
          markSelection: question.selection,
          showAnswer: true,
          data: question }));


    })));


}

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [gameSize, setGameSize] = useState({});
  const totalQuestion = questions.length - 1;
  const gameRef = useRef(null);
  const gameOverlayRef = useRef(null);

  const question = useCounter(0);
  const correct = useCounter(0);
  const wrong = useCounter(0);
  const empty = useCounter(0);

  const handleNewQuestionClick = (selectedValue, currQuestion) => {
    if (totalQuestion >= question.value) {
      if (selectedValue === currQuestion.correct) {
        correct.add();
      } else if (
      selectedValue !== null &&
      selectedValue !== currQuestion.correct)
      {
        wrong.add();
      } else {
        empty.add();
      }
      questions[currQuestion.id].selection = selectedValue;
      question.add();
    }
  };

  const resetSelection = () => {
    questions.forEach(q => q.selection = null);
  };

  const handleRestartClick = () => {
    setGameFinished(false);
    setGameStarted(false);
    resetSelection();
    question.reset();
    correct.reset();
    wrong.reset();
    empty.reset();
  };

  const indicatorBg = index => {
    if (question.value > index) {
      return "#fff";
    } else if (question.value === index) {
      return "#29b5d5";
    } else {
      return "rgba(255,255,255,.2)";
    }
  };

  useEffect(() => {
    if (gameStarted) {
      document.body.classList.add("game-started");
    } else {
      document.body.classList.remove("game-started");
    }
  }, [gameStarted]);

  useEffect(() => {
    if (question.value > totalQuestion) {
      gameRef.current.scrollTop = 0;
    }
  }, [question.value]);

  return /*#__PURE__*/(
    React.createElement("div", {
      className: "game",
      ref: gameRef,
      "data-game-started": gameStarted ? true : null,
      "data-game-finished": question.value > totalQuestion ? true : null }, /*#__PURE__*/

    React.createElement("div", { className: "intro" }, /*#__PURE__*/
    React.createElement("div", { className: "intro-inner" }, /*#__PURE__*/
    React.createElement("h1", { className: "intro-title" }, "Test"),
    !gameStarted && /*#__PURE__*/
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("p", { className: "intro-desc" },
    `The test contains ${questions.length} questions and there is no time limit.`), /*#__PURE__*/


    React.createElement("button", {
      className: "intro-button",
      onClick: () => setGameStarted(true) }, "Start Test")),





    gameStarted && /*#__PURE__*/
    React.createElement("div", { className: "indicator" },
    questions.map((q, index) => {
      return /*#__PURE__*/(
        React.createElement("span", {
          className: "indicator-item",
          style: {
            backgroundColor: indicatorBg(index) } }));



    })), /*#__PURE__*/


    React.createElement(Results, {
      wrong: wrong.value,
      correct: correct.value,
      empty: empty.value }), /*#__PURE__*/

    React.createElement("button", {
      className: "restart-button",
      onClick: () => handleRestartClick() }, "Restart Test"))), /*#__PURE__*/





    React.createElement("div", { className: "game-area" },
    questions[question.value] && /*#__PURE__*/
    React.createElement(Question, {
      data: questions[question.value],
      buttonText:
      question.value !== totalQuestion ? "Next Question" : "Finish Test",

      onQuestionButtonClick: handleNewQuestionClick }),



    !questions[question.value] && /*#__PURE__*/
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement(QuestionCorrection, { data: questions })))));





}

render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#app"));