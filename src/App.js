import "./assets/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import HeroSection from "./components/HeroSection";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <div>
      <HeroSection />
      <CardContainer />
    </div>
  );
}

export default App;
