import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import OfflineError from './pages/OfflineError';

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setLoading(false);
    // Small delay before showing content for smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 200);
  };

  // Ensure minimum loading time for better UX
  useEffect(() => {
    const minLoadingTime = setTimeout(() => {
      if (loading) {
        // Auto complete loading after 4 seconds max
        handleLoadingComplete();
      }
    }, 4000);

    return () => clearTimeout(minLoadingTime);
  }, [loading]);

  if (loading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <Router>
      <div className={`App bg-white dark:bg-secondary-900 transition-all duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <main>
                <Home />
              </main>
              <Footer />
              <BackToTop />
            </>
          } />
          <Route path="/offline-error" element={<OfflineError />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;