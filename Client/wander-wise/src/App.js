import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import HomePage from './pages/HomePage';
// import Listing from './pages/ListingPage';
import LoginUser from './pages/LoginUser';
import PropertyPage from './pages/PropertyPage';
import ListingPage from './pages/ListingPage';
import AboutUsPage from './pages/AboutUsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ListingPageFeatures from './pages/ListingPageFeatures';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path='/listing' element={<ListingPage />} />
          <Route path='/about-us' element={<AboutUsPage />} />
          <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
          <Route path='/login' element={<LoginUser />} />
          <Route path="/property/:id" element={<PropertyPage />} />
          <Route path="/listing/:features" element={<ListingPageFeatures />} />
          {/* <Route element={<ProtectedRoutes />}>
            tutte le rotte contenute al suo interno vengono protette. Da inserire le rotte del back
        </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
