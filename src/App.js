import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import "./App.scss";

function App() {
  return (
    <div className="body">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
