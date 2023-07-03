import React, { useState, useEffect } from "react";
import Answer from './Answer';

const Timer = ({ time, onTimeUp, keyProp }) => {
  const [seconds, setSeconds] = useState(parseInt(time));

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timerId);
    } else {
      onTimeUp();
    }
  }, [seconds]);

  useEffect(() => {
    setSeconds(parseInt(time));
  }, [time]);

  return (
    <div key={keyProp}>
      <div className="card mt-4 has-background-warning">
        <div className="card-content has-text-centered">
          <h1 className="title">Time Left: {seconds} seconds</h1>
        </div>
      </div>
    </div>
  );
};

export default Timer;
