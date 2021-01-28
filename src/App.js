import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainBanner from "./components/Banners/MainBanner";
// import NavSideBar from "./components/Navbar/NavSideBar/NavSideBar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <MainBanner />
    </div>
  );
}

export default App;
