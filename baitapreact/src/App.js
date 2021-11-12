import logo from "./logo.svg";
import "./App.css";
import BaiTapChonXe from "./BaiTapChonMauXe/BaiTapChonXe";
import BaiTapLayoutComponent from "./BaiTapLayoutComponent /BaiTapLayoutComponent ";
import BtDoiMauKinh from "./BaiTapDoiMauKinh/BtDoiMauKinh";

function App() {
  return (
    <div className="">
      {/* <h1 className="text-center bg-dark p-3 text-white">Bài Tập Chọn Xe</h1>
      <BaiTapChonXe />
      <br />
      <hr />
      <h1 className="text-center  p-3  mt-5 pt-5 mb-5">
        Bài Tập Tạo Component theo layout
      </h1>
      <BaiTapLayoutComponent />

      <br />
      <br />
      <hr /> */}

      <BtDoiMauKinh />
    </div>
  );
}

export default App;
