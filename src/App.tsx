import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = (loggedInUsername: string) => {
    setIsLoggedIn(true);
    setUsername(loggedInUsername);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  if (isLoggedIn) {
    return <Dashboard username={username} onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {showSignup ? 'Create an account' : 'Log in to your account'}
        </h2>
        {showSignup ? (
          <SignupForm onSignup={() => setShowSignup(false)} />
        ) : (
          <LoginForm onLogin={handleLogin} />
        )}
        <div className="text-center">
          <button
            onClick={() => setShowSignup(!showSignup)}
            className="text-indigo-600 hover:text-indigo-500"
          >
            {showSignup ? 'Already have an account? Log in' : 'Need an account? Sign up'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
