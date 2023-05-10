import "./App.css";
import Navbar from "./component/Navbar";
import BtnCart from "./component/BtnCart";
import Hero from "./component/Hero";
import Footer from "./component/Footer";
import Features from "./component/Features";
import FeaturesReverse from "./component/FeaturesReverse";
import Cta from "./component/Cta";
import Footer2 from "./component/Footer2";
import Post from "./component/Post";
import Pricing from "./component/Pricing";

function App() {
  return (
    <div>
      <Navbar />
      <BtnCart />
      <Hero />
      <Footer />
      <Features />
      <FeaturesReverse />
      <Cta />
      <Footer2 />
      <Post />
      <Pricing />
    </div>
  );
}

export default App;
