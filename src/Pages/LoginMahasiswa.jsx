import { useState } from "react";
import { formLoginMahasiswa } from "../services/auth.services";
import LoginFragments from "../components/Fragments/Auth/LoginFragments";

const LoginMahasiswa = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState(null);

  const handleUsername = () => {
    setUsername(event.target.value);
  };

  const handlePassword = () => {
    setPassword(event.target.value);
  };


  const loginUser = async (data) => {
    const res = await formLoginMahasiswa(data)
    if(res.status !== 200) {
      setError(res.data.text)
    } else {
      setLoading("")
      window.location.href = "/dashboard"
    }
    
  }

  const handleLoginMahasiswa = (event) => {
    event.preventDefault();
    const dataIn = {
      username: username,
      password: password,
    };

    setLoading("Logging in...");
    loginUser(dataIn)
  };

  console.log({error})


  return (
    <>
      <LoginFragments
        title="Mahasiswa"
        handleForm={handleLoginMahasiswa}
        onUsername={handleUsername}
        onPassword={handlePassword}
        value={{ username: username, password: password }}
        loading={loading}
        error={error}
        link="login-admin"
        loginToRole="Admin"
      />
    </>
  );
};

export default LoginMahasiswa;

// const [username, setUsername] = useState("");
// const [password, setPassword] = useState("");
// const [loading, setLoading] = useState("");
// const [error, setError] = useState("");

// const dispatch = useDispatch();

// const handleUsername = () => {
//   setUsername(event.target.value);
// };

// const handlePassword = () => {
//   setPassword(event.target.value);
// };

// const handleLoginMahasiswa = async (event) => {
//   event.preventDefault();
//   const data = {
//     username: username,
//     password: password,
//   };

//   setLoading("Connection loading...");

//   try {
//     if (data.username && data.password) {
//       await formLoginMahasiswa(data)
//         .then((results) => {
//           if (results === data.username) {
//             window.location.href = "/dashboard";
//           } else {
//             setError("Akun anda salah!!")
//           }
//           dispatch(login(results));
//         })
//         .finally(() => {
//           setLoading("");
//         });
//     } else {
//       setError("Data kosong!!!");
//     }
//   } catch (err) {
//     console.log("Terjadi kesalahan", err);
//     setError("Terjadi kesalahan", err);
//   }
// };

// cara 2 simple
// const [username, setUsername] = useState("");
// const [password, setPassword] = useState("");
// const [loading, setLoading] = useState("");
// const [error, setError] = useState("");
// const [data, setData] = useState("");

// const dispatch = useDispatch();

// const handleUsername = () => {
//   setUsername(event.target.value);
// };

// const handlePassword = () => {
//   setPassword(event.target.value);
// };

// const fetch = async () => {
//   try {
//     await formLoginMahasiswa(data).then((res) => {

//       if (res) console.log("data res: ", res);

//       if (res !== username) throw new Error("Akun anda salah!!");
//     });
//   } catch (err) {
//     setError(err);
//   }
// };

// const handleLoginMahasiswa = async (event) => {
//   event.preventDefault();
//   const dataIn = {
//     username: username,
//     password: password,
//   };

//   setData(dataIn);

//   setLoading("Connection loading...");

//   if (dataIn) fetch();
// };
