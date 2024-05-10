import { useState } from "react";
import LoginFragments from "../components/Fragments/Auth/LoginFragments";
import { formLoginAdmin } from "../services/auth.services";

const LoginAdmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const handleUsername = () => {
    setUsername(event.target.value);
  };

  const handlePassword = () => { 
    setPassword(event.target.value);
  };

  const loginUser = async(data) => {
    const res = await formLoginAdmin(data)

    if(res.status !== 200) {
      setError(res.data.text)

    } else {
      setLoading('')
      window.location.href = "/dashboard"
    }
  }

  const handleLoginAdmin = (event) => {
    event.preventDefault();

    setLoading("Connection loading...");

    const data = {
      username: username,
      password: password,
    };

    setLoading("Logging in...")

    loginUser(data)
  };
  return (
    <LoginFragments
      title="Admin"
      handleForm={handleLoginAdmin}
      onUsername={handleUsername}
      onPassword={handlePassword}
      value={{ username: username, password: password }}
      loading={loading ? "Connection loading...." : ""}
      error={error}
      link="login-mahasiswa"
      loginToRole="Mahasiswa"
    />
  );
};

export default LoginAdmin;
