import Home from "./pages/home/home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopNavBar from "./top-nav-bar/top-nav-bar";
import Portfolio from "./pages/portfolio/portfolio";
import TutorPage from "./pages/tutor/tutor";
import ContactPage from "./pages/contact/contact-page";
import Footer from "./footer/footer";
function App(): JSX.Element {
  return <>
    <Router>
      <TopNavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path="tutor" element={<TutorPage />} />
        <Route path="contact" element=
          {<div className="contact-margin">
            <ContactPage />
          </div>} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  </>
}

export default App;
