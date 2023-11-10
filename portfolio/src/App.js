import About from "./components/about";
import Home from "./components/home";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Works from "./components/works";
import Experience from "./components/experience";
import SecureDApp from "./components/securedapp";
function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About}/>
        <Route path="/works" Component={Works}/>
        <Route path="/experience" Component={Experience}/>
        <Route path="/securedapp" Component={SecureDApp}/>

      </Routes>
      </Router>

    </div>
  );
}

export default App;
