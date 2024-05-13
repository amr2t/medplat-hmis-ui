// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';


// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useNavigate();

//   const handleLogin = () => {
//     // Here, you can implement your login logic
//     // For simplicity, let's just check if username and password are not empty
//     if (username && password) {
//       // Redirect to Dashboard if login is successful
//       history('/dashboard');
//     } else {
//       alert('Please enter username and password');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <br />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <br />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;






import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import your custom CSS for styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleLogin = () => {
    // Here, you can implement your login logic
    // For simplicity, let's just check if username and password are not empty
    if (username && password) {
      // Redirect to Dashboard if login is successful
      history('/dashboard');
    } else {
      alert('Please enter username and password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-container">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;



