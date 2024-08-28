import Header from "./components/Header"
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from "./components/Hero";
import About from "./components/About";
import Why from "./components/Why";
import Info from "./components/Info";
import Chart from "./components/Chart";
import Roadmap from "./components/Roadmap";
import Legal from "./components/Legal";



const App = () => {



  return (
    <Router>
      <div>
        <Header/>
        <Hero/>
        <About/>
        <Why/>
        <Info/>
        <Chart/>
        <Roadmap/>
        <Legal/>
      </div>
    </Router>
  )
}

export default App
