import { HeadingSection } from "./Chekkit";
import NextSection from "../../components/NextSection";

import CrystalPalace1 from "../../assets/images/crystalpalace/crystalpalace1.svg";
import CrystalPalace2 from "../../assets/images/crystalpalace/crystalpalace2.svg";
import CrystalPalace7 from "../../assets/images/crystalpalace/crystalpalace7.svg";
import { FIND_CONNECT, HOMEPAGE } from "../../utils/pageUrl";

export default function CrystalPalace() {
  return (
    <div className="container">
      <HeadingSection>
        <p className='text-[#6C99D0]'>crystal palace online ecommerce store</p>
        <h3>An e-online store that sells Jewellery like rings,necklaces designed such that products are easily accessible to your customers and can increase your sales opportunities.</h3>
      </HeadingSection>
      <img src={CrystalPalace1} alt="" />

      <section className='flex flex-col gap-6 md:gap-14 lg:gap-20'>
        <img src={CrystalPalace2} alt="" />
      </section>
      <img src={CrystalPalace7} alt="" />


      <NextSection 
      next="Return Home" previous="FindConnect" 
      prevRoute={FIND_CONNECT} nextRoute={HOMEPAGE} />

    </div>
  )
}
