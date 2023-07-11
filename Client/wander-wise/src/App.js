import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginUser from './pages/LoginUser';
import PropertyPage from './pages/PropertyPage';
import ListingPage from './pages/ListingPage';
import AboutUsPage from './pages/AboutUsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ListingPageFeatures from './pages/ListingPageFeatures';
import ReservationAdminPage from './pages/AdminPageReservation';
import PropertyAdminPage from './pages/AdminPageProperty';
import AdminPageAddProperty from './pages/AdminPageAddProperty';

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
          <Route path="/adminreservations" element={<ReservationAdminPage />} />
          <Route path="/adminproperties" element={<PropertyAdminPage />} />
          <Route path="/addproperty" element={<AdminPageAddProperty />} />
          {/* <Route element={<ProtectedRoutes />}>
            tutte le rotte contenute al suo interno vengono protette. Da inserire le rotte del back
        </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
