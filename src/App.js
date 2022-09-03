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

// Routes
import Chekkit from './routes/Works/Chekkit';
import FindConnect from './routes/Works/FindConnect';
import Warenext from './routes/Works/Warenext';
import CrystalPalace from './routes/Works/CrystalPalace';
import Flitwire from './routes/Works/Flitwire';
import PetAid from './routes/Works/PetAid';

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
          <Route exact path={PageURL.PETAID} element={<PetAid />} />
          <Route exact path={PageURL.FLITWIRE} element={<Flitwire />} />
          <Route exact path={PageURL.FIND_CONNECT} element={<FindConnect />} />
          <Route exact path={PageURL.WARENEXT} element={<Warenext />} />
          <Route exact path={PageURL.CRYSTAL_PALACE} element={<CrystalPalace />} />
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
