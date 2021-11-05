import logo from "./logo.svg";
import "./App.css";
import BaiTapChonXe from "./BaiTapChonMauXe/BaiTapChonXe";
import BaiTapLayoutComponent from "./BaiTapLayoutComponent /BaiTapLayoutComponent ";

function App() {
  return (
    <div>
      <h1 className="text-center bg-dark p-3 text-white">Bài Tập Chọn Xe</h1>
      <BaiTapChonXe />

      <h1 className="text-center bg-dark p-3 text-white">
        Bài Tập Tạo Component theo layout
      </h1>
      <BaiTapLayoutComponent />
    </div>
  );
}

export default App;
