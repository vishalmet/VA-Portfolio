import About from "./components/about";
import Home from "./components/home";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Works from "./components/works";
function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About}/>
        <Route path="/works" Component={Works}/>

      </Routes>
      </Router>
    {/* <Home/>
    <About/> */}
    </div>
  );
}

export default App;
