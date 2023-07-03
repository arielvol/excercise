function Question({ question }) {
  return (
    <div className="card mt-4 has-text-danger-light has-background-danger">
      <div className="card-content has-text-centered">
        <h1 className="title">{question.text}</h1>
      </div>
    </div>
  );
}

export default Question;
