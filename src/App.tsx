import Home from "./pages/home/home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopNavBar from "./top-nav-bar/top-nav-bar";
import Portfolio from "./pages/portfolio/portfolio";
import { TutorPage, ContactPage } from "./pages/tutor/tutor";
function App(): JSX.Element {
  return <>
    <Router>
      <TopNavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path="/tutor" element={<TutorPage />} />
        <Route path="contact" element={<div className="contact-margin">
          <ContactPage />
        </div>} />
      </Routes>
    </Router>
  </>
}

export default App;
