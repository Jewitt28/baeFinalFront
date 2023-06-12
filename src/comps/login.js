import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!password) {
      alert('Please enter a password');
      document.getElementById('password').focus(); // Set focus on the password input
      return;
    }

    

    // Redirect to the search page -- using as we dont have actual user data. Would be API
    navigate('/');
  };

  const handleUsernameKeyDown = (event) => {
    if (event.key === 'Enter' && !password) {
      alert('Please enter a password');
      document.getElementById('password').focus(); 
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleUsernameKeyDown} 
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="submit btn btn-outline-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
