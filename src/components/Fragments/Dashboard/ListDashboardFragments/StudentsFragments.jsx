import ContentList from "../../../Elements/DashboardElements/ListDashboard/Content";
import HeaderOne from "../../../Elements/DashboardElements/ListDashboard/HeaderList";
import HeaderTwo from "../../../Elements/DashboardElements/ListDashboard/HeaderTwo";
import Option from "../../../Elements/DashboardElements/ListDashboard/Option";
const StudentsFragments = (props) => {
  const { data } = props;
  return (
    <>
      <HeaderOne title="Students" />
      <HeaderTwo titleSelect="City" subject="Students">
        <Option value="" />
        <Option value="Kuningan" />
        <Option value="Cirebon" />
        <Option value="Majalengka" />
      </HeaderTwo>
      <ContentList>
        <div className="flex flex-col">
          <h2 className="px-4 py-4 border-b border-black/20">Id</h2>
          <ul>
            {data ? (
              data.map((items) => (
                <li
                  key={items.id}
                  className="px-4 py-3 border-b border-black/20"
                >
                  {items.id}
                </li>
              ))
            ) : (
              <p>Terjadi kesalahan!!</p>
            )}
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="px-4 py-4 border-b border-black/20">Name</h2>
          <ul>
            {data ? (
              data.map((items) => (
                <li
                  key={items.id}
                  className="px-4 py-3 border-b border-black/20"
                >
                  {items.nama}
                </li>
              ))
            ) : (
              <p>Terjadi kesalahan!!</p>
            )}
          </ul>
        </div>
        <div>
          <h2 className="px-4 py-4 border-b border-black/20">Asal (Desa)</h2>
          <ul>
            {data ? (
              data.map((items) => (
                <li
                  key={items.id}
                  className="px-4 py-3 border-b border-black/20"
                >
                  {items.asal_desa}
                </li>
              ))
            ) : (
              <p>Terjadi kesalahan!!</p>
            )}
          </ul>
        </div>
        <div>
          <h2 className="px-4 py-4 border-b border-r border-black/20 ">
            Asal (Kota)
          </h2>
          <ul>
            {data ? (
              data.map((items) => (
                <li
                  key={items.id}
                  className="px-4 py-3 border-b border-r border-black/20"
                >
                  {items.asal_kota}
                </li>
              ))
            ) : (
              <p>Terjadi kesalahan!!</p>
            )}
          </ul>
        </div>
      </ContentList>
    </>
  );
};

export default StudentsFragments;
