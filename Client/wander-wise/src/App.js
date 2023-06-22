import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNavBar from './components/MyNavBar';
import MyFooter from './components/MyFooter';
import HomePage from './pages/HomePage';
import Listing from './pages/ListingPage';
import LoginUser from './pages/LoginUser';
import PropertyPage from './pages/PropertyPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path='/listing' element={<Listing />} />
        <Route path='/login' element={<LoginUser />} />
        <Route path=':type/:id' element={<PropertyPage />} />
        {/* <Route element={<ProtectedRoutes />}>
            tutte le rotte contenute al suo interno vengono protette
        </Route> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
