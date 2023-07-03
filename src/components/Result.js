function Result({ score, totalNumberOfQuestions, startOverCallback }) {
  const getResultMessage = () => {
    if (score / totalNumberOfQuestions < 0.5) {
      return "Try Again and improve";
    } else if (score / totalNumberOfQuestions < 0.9) {
      return "Nice attempt but try again";
    } else {
      return "Way to go Champ!!";
    }
  };

  return (
    <div>
      <div className="card mt-4 has-background-white-ter">
        <div className="card-content has-text-centered">
          <p className="title">{getResultMessage()}</p>
          <button className="button is-danger" onClick={() => startOverCallback()}>Start Over</button>
        </div>
      </div>
    </div>
  );
}

export default Result;
