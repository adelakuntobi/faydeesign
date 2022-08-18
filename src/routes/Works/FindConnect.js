import { HeadingSection } from './Chekkit'

// Images
import Findconnect1 from "../../assets/images/findconnect/findconnect1.svg";
import Findconnect2 from "../../assets/images/findconnect/findconnect2.svg";
import Findconnect3 from "../../assets/images/findconnect/findconnect3.svg";
import Findconnect4 from "../../assets/images/findconnect/findconnect4.svg";

import NextSection from '../../components/NextSection';

export default function FindConnect() {
  return (
    <div className='container'>
      <HeadingSection>
        <p className='text-[#3753D2]'>findconnect website landing page</p>
        <h3>A landing page that allows you to find and verify any email address to make new connections and reach out to any business or company.</h3>
      </HeadingSection>
      <section className='flex flex-col gap-6 md:gap-14 lg:gap-20'>
        <img src={Findconnect1} alt="" />
        <img src={Findconnect2} alt="" />
        <img src={Findconnect3} alt="" />
        <img src={Findconnect4} alt="" />
      </section>

    <NextSection previous="Warenext" next="Crystal Palace" />
       
    </div>
  )
}
