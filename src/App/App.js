import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import "./App.scss";

function App() {
  const featuresList = [
    {
      src: "/images/icon-chat.png",
      alt: "Chat Icon",
      title: "You are our #1 priority",
      text: `Need to talk to a representative? You can get in touch through our 24/7
                chat or through a phone call in less than 5 minutes.`,
    },
    {
      src: "/images/icon-money.png",
      alt: "Money Icon",
      title: "More savings means higher rates",
      text: `The more you save with us, the higher your interest rate will be!`,
    },
    {
      src: "/images/icon-security.png",
      alt: "Security Icon",
      title: "Security you can trust",
      text: `We use top of the line encryption to make sure your data and money
      is always safe.`,
    },
  ];
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
