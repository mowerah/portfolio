import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "molid" && password === "abcd1234") {
      onLogin(username, password);
      navigate("/profile");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-4 border rounded"
    >
      <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-medium">
          Username
        </label>
        <input
          type="text"
          id="username"
          placeholder="Enter username: molid"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 block w-full p-2 border rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter password: abcd1234"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full p-2 border rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {error && <p className="mt-2 text-red-500">{error}</p>}
      <button
        type="submit"
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
