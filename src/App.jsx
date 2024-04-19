
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, login } from "./redux/slices/cartSlices";

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.cart)

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addToCart({
        namaDepan: event.target.namaDepan.value,
        namaBelakang: event.target.namaBelakang.value,
      })
    );

    if(state.data) {
      dispatch(login())
    }
  };
  return (
    <>
      <section>
        <div className="container mx-auto">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="namaDepan"
              placeholder="masukan nama depan anda"
            />
            <input
              type="text"
              name="namaBelakang"
              placeholder="masukan nama belakang anda"
            />
            <button>save</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default App;
