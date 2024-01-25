import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Gold = lazy(() => import('./pages/Gold'));
const Silver = lazy(() => import('./pages/Silver'));
const AboutMe = lazy(() => import('./pages/AboutMe'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const FooterPage = lazy(() => import('./pages/Footer'));

import Loading from "./components/Loading"

function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gold" element={<Gold />} />
          <Route path="/silver" element={<Silver />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <FooterPage/>
      </Router>
    </Suspense>
  );
}

export default App;
