import { Routes, Route } from 'react-router-dom';
import * as PageURL from "./utils/pageUrl"
import './App.scss';
import ScrollToTop from './utils/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './routes/Homepage';
import { useEffect, useState } from 'react';
import Logo from "./assets/images/logo.svg";
import Loader from './components/Loader';
import Meet from './routes/Meet';
import Chekkit from './routes/Works/Chekkit';

export default function App() {
  const [loader, setLoader] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 5000000);
  }, [])

  if (!loader) {

    return (
      <div className="App relative overflow-x-hidden">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path={PageURL.HOMEPAGE} element={<Homepage />} />
          <Route exact path={PageURL.MEET_ME} element={<Meet />} />
          <Route exact path={PageURL.CHEKKIT_APP} element={<Chekkit />} />
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

  else {
    return (
      <div className='fixed h-screen w-full grid place-items-center'>
        <div className='items-center flex-col'>
        <img src={Logo} alt="" />
        <Loader />
        </div>
      </div>
    )
  }
}
