import Home from "./pages/home/home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopNavBar from "./top-nav-bar/top-nav-bar";
import Portfolio from "./pages/portfolio/portfolio";
function App(): JSX.Element {
  return <>
    <Router>
      <TopNavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio/>}/>
      </Routes>
    </Router>
  </>
}

export default App;
