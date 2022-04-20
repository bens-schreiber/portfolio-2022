import Home from "./pages/home/home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopNavBar from "./top-nav-bar/top-nav-bar";
function App() {
  return <>
    <Router>
      <TopNavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  </>
}

export default App;
