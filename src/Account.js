import React, { useEffect, useState } from 'react';

const Account = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('userinfo');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="container mt-5">
      <h2>Account Details</h2>
      {userData ? (
        <div className="card p-3">
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          {userData.phone && <p><strong>Phone:</strong> {userData.phone}</p>}
          {userData.address && <p><strong>Address:</strong> {userData.address}</p>}
          {userData.createdAt && (
            <p><strong>Joined:</strong> {new Date(userData.createdAt).toLocaleDateString()}</p>
          )}
          

        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default Account;
