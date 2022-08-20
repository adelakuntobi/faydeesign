import Sketches from "../../assets/images/flitwire/sketches.svg";
import Screens from "../../assets/images/flitwire/screens.svg";
import Prototype from "../../assets/images/flitwire/prototypes.svg";
import NextSection from "../../components/NextSection";
import { CHEKKIT_APP, WARENEXT } from "../../utils/pageUrl";

export default function Flitwire() {
  return (
    <div>
      <div className="container">
        <section>
          <h2 className="mb-2">Sketches</h2>
          <img src={Sketches} className="w-full" alt="" />
        </section>
      </div>
      <section>
        <h2 className="mb-6 container">High fidelity prototypes</h2>
        <img src={Prototype} className="w-full" alt="" />
      </section>
      <section className="container">
        <h2 className="mb-6">More Screens</h2>
        <img src={Screens} className="w-full" alt="" />
      </section>

      <NextSection previous="ChekkitApp" next="Warenext"
        nextRoute={WARENEXT} prevRoute={CHEKKIT_APP} />

    </div>
  )
}
