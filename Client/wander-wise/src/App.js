import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PropertyPage from './pages/PropertyPage';
import ListingPage from './pages/ListingPage';
import AboutUsPage from './pages/AboutUsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ListingPageFeatures from './pages/ListingPageFeatures';
import ReservationAdminPage from './pages/AdminPageReservation';
import PropertyAdminPage from './pages/AdminPageProperty';
import AdminPageAddProperty from './pages/AdminPageAddProperty';
import LoginPage from './pages/LoginPage';
import ProtectedRoutes from './middlewares/ProtectedRoutes';
import Error404Page from './pages/Error404Page';
import AdminPageEditProperty from './pages/AdminPageEditProperty';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path='/listing' element={<ListingPage />} />
          <Route path='/about-us' element={<AboutUsPage />} />
          <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path="/property/:id" element={<PropertyPage />} />
          <Route path="/listing/:features" element={<ListingPageFeatures />} />
          <Route path="/*" element={<Error404Page />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/adminreservations" element={<ReservationAdminPage />} />
            <Route path="/adminproperties" element={<PropertyAdminPage />} />
            <Route path="/addproperty" element={<AdminPageAddProperty />} />
            <Route path="/editproperty/:id" element={<AdminPageEditProperty />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
