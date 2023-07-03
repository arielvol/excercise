import React, { useState, useEffect } from 'react';

function User() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    fetch(' http://localhost:3030/user')
      .then(response => response.json())
      .then(data => setUserName(data.name));
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