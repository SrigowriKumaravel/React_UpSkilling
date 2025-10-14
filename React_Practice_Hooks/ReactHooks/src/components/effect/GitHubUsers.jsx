import React, { useEffect, useState } from "react";
import "./GitHubUsers.css";

function GitHubUsers(props) {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  async function fetchUsers() {
    try {
      const response = await fetch("https://api.github.com/users");
      const result = await response.json();
      setUsers(result);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 3000);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!loading) {
    return (
      <div className="users">
        <h1>GitHub Users</h1>
        <ul>
          {users.map((user, index) => {
            const { id, avatar_url, login, html_url } = user;
            return (
              <li key={id}>
                <img src={avatar_url} alt={login} />
                <p>{login}</p>
                <a href={html_url} target="_blank" rel="noopener noreferrer" className="profile-btn">
                  Profile
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default GitHubUsers;
