import { useState } from "react";
import { formLoginMahasiswa } from "../../services/auth.services";
import LoginFragments from "../../components/Fragments/Auth/LoginFragments";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/cartSlices";

const LoginMahasiswa = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");


  const dispatch = useDispatch()

  const handleUsername = () => {
    setUsername(event.target.value);
  };

  const handlePassword = () => {
    setPassword(event.target.value);
  };

  const handleLoginMahasiswa = async (event) => {
    event.preventDefault();
    const data = {
      username: username,
      password: password,
    };

    setLoading("Connection loading...");

    try {
      if (data.username && data.password) {
        await formLoginMahasiswa(data)
          .then((results) => {
            if(results === data.username) window.location.href = "/dashboard"
            dispatch(login(results))
          })
          .finally(() => {
            setLoading("");
          });
      } else {
        setError("Data kosong!!!");
      }
    } catch (err) {
      console.log("Terjadi kesalahan", err);
      setError("Terjadi kesalahan", err);
    }
  };

  return (
    <>
      <LoginFragments
        title="Mahasiswa"
        handleForm={handleLoginMahasiswa}
        onUsername={handleUsername}
        onPassword={handlePassword}
        value={{ username: username, password: password }}
        loading={loading ? "Connection loading...." : ""}
        error={error}
        link="login-admin"
        loginToRole="Admin"
      />
    </>
  );
};

export default LoginMahasiswa;
