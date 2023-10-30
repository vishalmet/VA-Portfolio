import About from "./components/about";
import Home from "./components/home";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Works from "./components/works";
import Experience from "./components/experience";
function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About}/>
        <Route path="/works" Component={Works}/>
        <Route path="/experience" Component={Experience}/>

      </Routes>
      </Router>
    {/* <Home/>
    <About/> */}
    </div>
  );
}

export default App;
