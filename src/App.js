import { Routes, Route } from 'react-router-dom';
import * as PageURL from "./utils/pageUrl"
import './App.scss';
import ScrollToTop from './utils/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './routes/Homepage';

export default function App() {
  return (
    <div className="App relative overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path={PageURL.HOMEPAGE} element={<Homepage />} />
        {/* <Route exact path={PageURL.STEPHAR} element={<Stephar />} />
        <Route exact path={PageURL.DRESS_MANAGEMENT} element={<DressMeasurement />} />
        <Route exact path={PageURL.BERVHOME} element={<BervHome />} />
        <Route exact path={PageURL.URBN} element={<Urbn />} />
        <Route exact path={PageURL.DRESS_BRANDING} element={<Dress />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}
