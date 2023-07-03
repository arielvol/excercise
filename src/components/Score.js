const Score = ({ score }) => {
  return (
    <div className="card mt-4 has-background-white-ter">
      <div className="card-content has-text-centered">
      <h1 className="title">Score: {score}</h1>
      </div>
    </div>
  );
};

export default Score;
