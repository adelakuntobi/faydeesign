import { HeadingSection } from "./Chekkit";
import NextSection from "../../components/NextSection";

import CrystalPalace1 from "../../assets/images/crystalpalace/crystalpalace1.svg";
import CrystalPalace2 from "../../assets/images/crystalpalace/crystalpalace2.svg";
import CrystalPalace3 from "../../assets/images/crystalpalace/crystalpalace3.svg";
import CrystalPalace4 from "../../assets/images/crystalpalace/crystalpalace4.svg";
import CrystalPalace5 from "../../assets/images/crystalpalace/crystalpalace5.svg";
import CrystalPalace6 from "../../assets/images/crystalpalace/crystalpalace6.svg";
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

      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-20 my-12">
        <div className="w-full flex gap-y-10 flex-col">
          <img src={CrystalPalace2} alt="" />
          <img src={CrystalPalace3} alt="" />
        </div>
        <div className="w-full lg:mt-14 flex gap-y-10 flex-col">
          <img src={CrystalPalace4} alt="" />
          <img src={CrystalPalace5} alt="" />
        </div>
      </div>
      {/* </div> */}


      <img src={CrystalPalace6} className="mb-10" alt="" />
      <img src={CrystalPalace7} alt="" />


      <NextSection
        next="Return Home" previous="FindConnect"
        prevRoute={FIND_CONNECT} nextRoute={HOMEPAGE} />

    </div >
  )
}
