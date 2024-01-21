import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import { featuresList } from "./services/datas/featuresList";
import "./App.scss";

function App() {
  return (
    <div className="body">
      <Header />
      <main>
        <Hero />
        <Features list={featuresList} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
