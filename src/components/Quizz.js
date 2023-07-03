import { useEffect, useState } from "react";
import QuizzService from "../services/QuizzService";
import User from "./User";
import Timer from "./Timer";
import Score from "./Score";
import Question from "./Question";
import AnswerList from "./AnswerList";
import Result from "./Result";

function Quizz() {
  const [timerTime, setTimerTime] = useState(10);
  const [timerKey, setTimerKey] = useState(0);

  const [numberOfQuestionsLeft, setNumberOfQuestionsLeft] = useState(0);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [answersList, setAnswersList] = useState([]);
  const [currentCorrectAnswer, setCurrentCorrectAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [isQuizzOver, setIsQuizzOver] = useState(false);

  const getQuestionByNumber = async (number) => {
    const reposense = await QuizzService.getQuestions(number);
    return reposense.data;
  };

  const getNumberOfQuestions = async () => {
    const response = await QuizzService.getNumberOfQuestions();
    setNumberOfQuestionsLeft(response.data.number);
    setNextQuestion();
  };

  const getNextQuestion = async (questionNumber) => {
    const question = await getQuestionByNumber(questionNumber);
    setCurrentQuestion(question);
    setAnswersList(question.possilbe_answers);
    const response = await QuizzService.getCorrectAnswers(questionNumber);
    setCurrentCorrectAnswer(response.data);
  };

  useEffect(() => {
    getNumberOfQuestions();
  }, []);

  useEffect(() => {
    if (currentQuestionNumber > 0) {
      if (currentQuestionNumber > numberOfQuestionsLeft) {
        setTimerTime(0);
        setIsQuizzOver(true);
      } else {
        getNextQuestion(currentQuestionNumber);
        resetTimer();
      }
    }
  }, [currentQuestionNumber]);

  const setNextQuestion = () => {
    setCurrentQuestionNumber((prevNum) => prevNum + 1);
  };

  const resetTimer = () => {
    setTimerKey((prevKey) => prevKey + 1);
  }

  const onAnswerSelected = (answer) => {
    if (isQuizzOver) {
      return;
    }
    if (answer === currentCorrectAnswer.correct) {
      setScore(score + 1);
    }
    setNextQuestion();
  };

  const onTimerUp = () => {
    setNextQuestion();
  };

  const onStartOverClicked = () => {
    setCurrentQuestionNumber(1);
    setScore(0);
    setIsQuizzOver(false);
    setTimerTime(10);
  }


  return (
    <div className="container">
      <User />
      <div className="columns">
        <div className="column">
          <Timer key={timerKey} time={timerTime} onTimeUp={onTimerUp}/>
        </div>
        <div className="column">
          <Score score={score} />
        </div>
      </div>
      <div>
        <Question question={currentQuestion} />
        <AnswerList answers={answersList} onAnswerSelected={onAnswerSelected} />
      </div>
      <div>
        {isQuizzOver && <Result score={score} totalNumberOfQuestions={numberOfQuestionsLeft} startOverCallback={onStartOverClicked}/>}
      </div>
    </div>
  );
}

export default Quizz;
