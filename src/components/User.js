import { useState, useEffect } from 'react';
import QuizzService from "../services/QuizzService";

function User() {
  const [userName, setUserName] = useState('');

  const getUser = async () => {
    const response = await QuizzService.getUser();
    setUserName(response.data.name)
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="card mt-4 has-background-success">
      <div className="card-content has-text-centered">
        <p className="title">{userName}, Want to be a millioner?</p>
      </div>
    </div>
  );
}

export default User;