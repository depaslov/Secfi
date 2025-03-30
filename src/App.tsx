import "./App.css";
import Equity from "./Components/Equity/Equity";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  return (
    <div>
      <Header />
      <Equity />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
