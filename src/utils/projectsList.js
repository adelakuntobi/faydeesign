import * as Pages from "./pageUrl";
import ChekittApp from "../assets/images/chekkitapp.png";
import KidsMoni from "../assets/images/kidsmoni.png";
import Warenext from "../assets/images/warenext.png";
import Flitwire from "../assets/images/flitwire.png";
import FindConnect from "../assets/images/findconnect.png";
import CrystalPalace from "../assets/images/crystalpalace.png";
import Draivr from "../assets/images/draivr.png";
import SmartGarden from "../assets/images/smartgarden.png";
import PetAid from "../assets/images/petaid.png";
import Rooflat from "../assets/images/rooflat.png";


export const ProjectsList = {
  leftSide: [
    {
      img: ChekittApp,
      title: "ChekkitApp",
      description: "Safeguarding lives against fake products with the aid of a counterfeit detection and reporting application.",
      features: ["Case Study", "Anti-Counterfeit", "Mobile App"],
      linkText: "Read Case Study",
      route: Pages.CHEKKIT_APP
    },
    {
      img: SmartGarden,
      title: "SmartGarden",
      description: "Have you always thought of being a plant dad/mom?SmartGarden allows you to monitor and analyse your plant growth,  reminds you to maintain and help you adjust your hydroponic condition easier amidst your busy life.",
      features: ["UI Design", "Agrotech", "Mobile App"],
      linkText: "Coming Soon",
      route: Pages.SMART_GARDEN
    },
    {
      img: KidsMoni,
      title: "KidsMoni",
      description: "KidsMoni is an application that enlightens kids about the financial world and also allows them earn while learning.",
      features: ["Case Study", "Ed-fintech", "Mobile App"],
      linkText: "Restriced Access",
      route: ""
    },

    {
      img: FindConnect,
      title: "FindConnect",
      description: "A landing page that allows you to find and verify any email address to make new connections and reach out to any business or company.",
      features: ["UI Design", "Verification", "Website"],
      linkText: "Preview Screens",
      route: Pages.FIND_CONNECT
    },
   
    {
      img: Draivr,
      title: "DRAIVR",
      description: "Think of a scenario in which you see a car and adored it, but you have no prior understanding of cars and would like to know more about it and even test drive.",
      features: ["Case Study", "Automotive", "Mobile (AR/VR) App"],
      linkText: "Preview Screens",
      route: ""
    },
   

  ],
  rightSide: [
    {
      img: PetAid,
      title: "PetAid",
      description: "PetAid allows pet owners to book appointment with  vets, request consultation, purchase pet accessories, and also allow for pet-groomer interaction all in a single platform.",
      features: ["UI Design", "Telemedicine", "Website"],
      linkText: "Preview Screens",
      route: Pages.PETAID
    },
    {
      img: Flitwire,
      title: "FlitWire",
      description: "Helping Nigerians in the Abroad precisely Canada to send money back home in a simple and secured portal.",
      features: ["Case Study", "Fintech", "Mobile App"],
      linkText: "Read Case Study",
      route: Pages.FLITWIRE
    },
    {
      img: Warenext,
      title: "Warenext",
      description: "Redesigning a logistics company’s website to improve its web presence, user experience and retention rate.",
      features: ["UI Design", "Logistics", "Website"],
      linkText: "Preview Screens",
      route: Pages.WARENEXT
    },
    {
      img: CrystalPalace,
      title: "Crystal Palace",
      description: "An online store that sells Jewellery like rings,necklaces designed such that products are easily accessible to your customers and can increase your sales opportunities.",
      features: ["UI Design", "ECommerce", "Website"],
      linkText: "Preview Screens",
      route: Pages.CRYSTAL_PALACE
    },
    {
      img: Rooflat,
      title: "Rooflat",
      description: "Finding an apartment or a roommate is a stressful task that few people discuss. Rooflat makes it simple to choose an apartment and roommate that match your preferences.",
      features: ["Case Study", "Real Estate", "Mobile (AR/VR) App"],
      linkText: "Restricted Access",
      route: ""
    },
   
  ]
}

export const Skills = [
  "Accessibility", "AR/VR", "Figma", "HR Technology", "Logistics", "Travel",
  "illustration", "entertainment", "design talk", "Edtech", "Fintech", "Health",
  "real estate", "Web3", "content creation", "E-Commerce", "hospitality", "Frontend",
  "Insurtech", "Adobe Photoshop"
]

export const SideProjects = [
  {
    title: "Behance",
    description: "Check out some of my works on Behance. Most of the projects were carried out using Balsamiq, Figma, Adobe Photshop, and Ilustrator.",
    link: "https://www.behance.net/faidatakinwale"
  },
  {
    title: "Dribbble",
    description: "Here are some of my works on Dribbble. Most of the projects were carried out using Figma, Adobe Photshop, and Ilustrator.",
    link: "https://dribbble.com/faydee"
  },
  {
    title: "Instagram",
    description: "I have launched my design page on Instagram with the sole purpose of training new designers just getting started in their design journey.",
    link: "https://www.behance.net/joseph_j_m"
  },
]