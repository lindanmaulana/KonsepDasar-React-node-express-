import { useState } from "react";
import LoginFragments from "../../components/Fragments/Auth/LoginFragments";
import { formLoginAdmin } from "../../services/auth.services";
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

  const handleLoginAdmin = async (event) => {
    event.preventDefault();
    
    setLoading("Connection loading...");

    const data = {
      username: username,
      password: password,
    };

    try {
      await formLoginAdmin(data)
        .then((results) => {
          if(results === data.username) window.location.href = "/dashboard"
        })
        .finally(() => {
          setLoading("");
        });
    } catch (err) {
      setError(err);
    }
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
      link="login"
      profesi="Admin"
    />
  );
};

export default LoginAdmin;
