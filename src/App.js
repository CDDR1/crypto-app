import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cryptocurrencies from "./components/Cryptocurrencies";
import CryptocurrencyDetails from "./components/CryptocurrencyDetails";
import News from "./components/News";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <div className="right-content">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies simplified={false} />} />
            <Route path="/cryptocurrencies/:id" element={<CryptocurrencyDetails />} />
            <Route path="/news" element={<News simplified={false} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
