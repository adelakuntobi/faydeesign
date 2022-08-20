
// Images
import Warenext1 from "../../assets/images/warenext/warenext1.svg";
import Warenext2 from "../../assets/images/warenext/warenext2.svg";
import Warenext3 from "../../assets/images/warenext/warenext3.svg";
import Warenext4 from "../../assets/images/warenext/warenext4.svg";


import NextSection from '../../components/NextSection'
import { FIND_CONNECT, FLITWIRE } from "../../utils/pageUrl";
import { HeadingSection } from './Chekkit'

export default function Warenext() {
  return (
    <div>
      <HeadingSection className="container">
        <p className='text-[#FB7921]'>warenext’s website redesign</p>
        <h3>Redesigning a logistics company’s website to improve its web presence, user experience and retention rate.</h3>
      </HeadingSection>

      <section className='flex flex-col gap-6 md:gap-14 lg:gap-20'>
        <img src={Warenext1} alt="" />
        <img src={Warenext2} alt="" />
      </section>
      <section className='container my-0 flex flex-col gap-6 md:gap-14 lg:gap-20'>
        <img src={Warenext3} alt="" />
        <img src={Warenext4} alt="" />
      </section>

      <NextSection previous="Flitwire" next="FindConnect"
      prevRoute={FLITWIRE} nextRoute={FIND_CONNECT} />
    </div>
  )
}
