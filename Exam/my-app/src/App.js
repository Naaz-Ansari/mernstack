import './App.css';
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import { CardShow } from "./Components/CardShow";
function App() {
  return (
    <>
      <Navbar />
      <CardShow/>
      <Footer/>
      </>
  );
}

export default App;