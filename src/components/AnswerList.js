import Answer from './Answer';

function AnswerList({ answers, onAnswerSelected}) {

  const answerClicked = (answer) => {
    onAnswerSelected(answer);
  }

  const renderedAnswers = answers.map((answer) => {
    return (
      <Answer answer={answer} key={answer} onAnswerSelected={answerClicked}/>
    );
  });

  return <div>{renderedAnswers}</div>;
}

export default AnswerList;