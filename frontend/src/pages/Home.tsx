import React from "react";
import LoginForm from "../components/LoginForm";

interface HomeProps {
  onLogin: (username: string, password: string) => void;
}

const Home: React.FC<HomeProps> = ({ onLogin }) => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-4">Login Page</h1>
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default Home;
