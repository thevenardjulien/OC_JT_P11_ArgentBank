import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import { featuresList } from "./datas/featuresList";
import "./App.scss";

function App() {
  return (
    <div className="body">
      <Header />
      <main>
        <Hero />
        <Feature list={featuresList} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
