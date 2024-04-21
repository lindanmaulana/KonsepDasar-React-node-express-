import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../redux/slices/cartSlices";
import { useEffect } from "react";
import { formLogin } from "../services/auth.services";

const Regist = () => {
  // Hook redux untuk dispatch
  const dispatch = useDispatch();

  // Hook redux untuk mengambil data store
  const state = useSelector((state) => state.cart);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add data store redux
    dispatch(
      register({
        namaDepan: event.target.namaDepan.value,
        namaBelakang: event.target.namaBelakang.value,
      })
    );

    // Validasi data login
    if (state.data) {
      dispatch(login());
    }
  };

  useEffect(() => {
    const data = state.data.register;

    formLogin(data, (callback) => {
      console.log(callback)
    })
  }, [state.data])
  return (
    <>
      <section>
        <div className="container mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="w-full h-screen flex flex-col justify-center items-center">
              <div>
                <label htmlFor="namaDepan">Nama Depan</label>
                <input
                  type="text"
                  id="namaDepan"
                  name="namaDepan"
                  placeholder="masukan nama depan anda"
                />
              </div>
              <div>
                <label htmlFor="namaBelakang">Nama Belakang</label>
                <input
                  type="text"
                  id="namaBelakang"
                  name="namaBelakang"
                  placeholder="masukan nama belakang anda"
                />
              </div>
              <button>save</button>
            </div>
          </form>
          <div className="flex flex-col justify-center items-center">
            <h2>Name terdeteksi</h2>
            {state.data.register.map((item) => (
              <h1 key={item.namaDepan}>{item.namaDepan}</h1>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Regist;
