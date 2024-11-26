import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from '@/routes';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/utils/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}