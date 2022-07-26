import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <div className="main-content-container">
        <main className="main-content"></main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
