import "./App.css";
import Equity from "./Components/Equity/Equity";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Portfolio from "./Components/Portfolio/Portfolio";
import Startup from "./Components/Startup/Startup";

function App() {
  return (
    <div>
      <Header />
      <Equity />
      <Portfolio />
      <Startup />
      <Footer />
    </div>
  );
}

export default App;
