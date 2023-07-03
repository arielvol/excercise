function Answer({ answer, onAnswerSelected }) {
  return (
    <div
      className="card mt-4 has-background-info"
      onClick={() => onAnswerSelected(answer)}
    >
      <div className="card-content has-text-centered">
        <p className="title">{answer}</p>
      </div>
    </div>
  );
}

export default Answer;
