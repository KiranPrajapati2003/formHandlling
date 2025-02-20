import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const FormController = () => {

  const [isLogin, setIsLogin] = useState(false);
  const [userCredentials, setUserCredentials] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (data) => {
    if (isLogin) {
      setUserData(data);
    } else {
      setUserCredentials({ email: data.email, password: data.password });
      setIsLogin(true);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      {userData ? (
        <h2>Welcome {userData.email}</h2>
      ) : isLogin ? (
        <LoginForm onSubmit={handleFormSubmit} credentials={userCredentials} />
      ) : (
        <SignupForm onSubmit={handleFormSubmit} />
      )}

      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin
          ? "Dont have an account? Sing-up"
          : "Already have an account? Login"}
      </button>
    </div>
  );
};

export default FormController;