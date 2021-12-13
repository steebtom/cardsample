import "./styles.css";
import Info from "./components/info/info.components";
import About from "./components/about/about.components";
import Interests from "./components/interests/interests.components";
import Footer from "./components/footer/footer.components";

export default function App() {
  return (
    <div className="App">
      <div className="card">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}
