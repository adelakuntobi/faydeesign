import Sketches from "../../assets/images/flitwire/sketches.svg";
import Screens from "../../assets/images/flitwire/screens.svg";
import Prototype from "../../assets/images/flitwire/prototypes.svg";
import Overview from "../../assets/images/flitwire/overview.svg";
import NextSection from "../../components/NextSection";
import { CHEKKIT_APP, WARENEXT } from "../../utils/pageUrl";
import { HeadingSection } from "./Chekkit";
import styled from "styled-components";

export default function Flitwire() {
  return (
    <div>
      <HeadingSection className="container">
        <p className='text-[#9B51E0]'>flitwire’s mobile application</p>
        <h3>Helping Nigerians in the Abroad precisely Canada to send money back home in a simple and secured portal.</h3>
      </HeadingSection>


      <div className="container">
        <section className="flex flex-col lg:flex-row items-center gap-y-10 gap-x-16">
          <div className="flex flex-col gap-7 w-1/2">
            <div>
              <h2 className="mb-4">Overview</h2>
              <p>Flitwire is a simple and secured portal to help Canadian(s) (residents) send money back home to family and friends also includes e-Transfer, instant payment integration, and transaction confirmation.</p>
            </div>
            <div className="flex gap-10 mt-4">
              <LabelAndBold className="pr-10">
                <label>Duration</label>
                <p>3 weeks</p>
              </LabelAndBold>
              <div className=" border-l-2 border-[#EDDAFF]"></div>
              <LabelAndBold>
                <label>Tools</label>
                <p>Figma, pen &amp; paper</p>
              </LabelAndBold>
            </div>
            <LabelAndBold>
              <label>Role</label>
              <p>UI/UX (Mobile) Designer</p>
            </LabelAndBold>
            <div className="mt-6">
              <p className="text-[#010136B8]">Link to live project: <a href="http://" target="_blank" rel="noopener noreferrer" className="text-[#5271FF] italic">Check out the app on playstore</a></p>
            </div>
          </div>
          <img src={Overview} alt="" />
        </section>

        <section className="flex items-center gap-12">
          <div className="w-8/12">
            <div className="mb-10">
              <h2 className="mb-4">key problem definition</h2>
              <p>Exchanging CAD to a local currency takes more steps, time, and security issues.</p>
            </div>
            <div>
              <h2 className="mb-4">finding Solution</h2>
              <p>To hasten the user's experience, I designed the app to access all major features on the home screen. I also incorporated a two-factor authentication process to make an effective secured platform.</p>
            </div>
          </div>

          <div>
            <h2 className="mb-4">design goals</h2>
            <ol className=" list-decimal pl-6">
              <li>Sell Canadian Dollars to a local account.</li>
              <li>Fund Wallet from a local account.</li>
              <li>Make a withdrawal from your wallet.</li>
              <li>See the last 5 transactions</li>
              <li>Check Reports</li>
              <li>Effective and secured</li>
              <li>Simple, organized, and easy to access.</li>
            </ol>
          </div>
        </section>
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


const LabelAndBold = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  label{
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: rgba(1, 1, 54, 0.72);
  }
  p{
    font-size: 24px;
    line-height: 26px;
    text-transform: capitalize;
    color: #010136;
    font-weight: 700;
  }
`;