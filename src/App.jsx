import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home = lazy(() => import('./pages/Home'));
const Gold = lazy(() => import('./pages/Gold'));
const Silver = lazy(() => import('./pages/Silver'));
const AboutMe = lazy(() => import('./pages/AboutMe'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const FooterPage = lazy(() => import('./pages/Footer'));
import Loading from "./components/Loading";

function App() {
  return (
    <Router>
      <Helmet>
        <title>Custom Gold & Silver Jewelry | GopiKrishna Arts</title>
        <meta name="description" content="Discover exquisite custom gold and silver jewelry at Gopi Krishna Arts. We offer bespoke jewelry crafting services for clients worldwide." />
        <meta name="keywords" content="custom gold jewelry, custom silver jewelry, bespoke jewelry, personalized jewelry, handmade jewelry, artisan jewelry, fine jewelry, luxury jewelry, unique jewelry, designer jewelry, custom jewelry designs, custom jewelry maker, bespoke jewelry designs, personalized jewelry gifts, custom goldsmith, silver crafts, artisanal jewelry, customized jewelry, bespoke jewelry creations, custom jewelry for men, custom jewelry for women, custom jewelry online, custom jewelry shop, custom jewelry store, custom jewelry pieces, custom jewelry sets, custom jewelry accessories, custom jewelry collection, bespoke jewelry services, personalized jewelry customization, custom god statues, handmade god statues, bespoke god statues, personalized god statues, custom antique arts, bespoke antique arts, personalized antique arts, custom sculptures, bespoke sculptures, personalized sculptures, custom metalwork, bespoke metalwork, personalized metalwork, custom artwork, bespoke artwork, personalized artwork, custom artisan crafts, bespoke artisan crafts, personalized artisan crafts, custom craft creations, bespoke craft designs, personalized craft gifts" />
        <meta name="author" content="GopiKrishna Arts" />
        <link rel="canonical" href="https://gopikrishnaarts.com" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "GopiKrishna Arts - Custom Gold & Silver Arts",
              "url": "https://gopikrishnaarts.com",
            }
          `}
        </script>
      </Helmet>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gold" element={<Gold />} />
          <Route path="/silver" element={<Silver />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <FooterPage />
      </Suspense>
    </Router>
  );
}

export default App;
