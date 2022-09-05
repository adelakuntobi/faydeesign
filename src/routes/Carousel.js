import Slider from 'infinite-react-carousel';
import Faydee1 from "../assets/images/1.jpg"
import Faydee2 from "../assets/images/2.JPG"
import Faydee3 from "../assets/images/3.JPG"
import Faydee4 from "../assets/images/4.jpeg"
import Faydee5 from "../assets/images/5.jpeg"
import Faydee6 from "../assets/images/6.jpeg"

export default function Carousel() {
  const settings =  {
    autoplay: true,
    autoplaySpeed: 10000,
    centerMode: true,
    centerPadding: 100,
    gutter: 50,
    shift: 10,
    slidesToShow: 3,
    adaptiveHeight: true,
    className: "my-10"
  };
  return (
    <div>
      <Slider { ...settings }>
        {/* <div> */}
          <div><img className='w-full h-full px-3' src={Faydee1} alt="" /></div>
          <div><img className='w-full h-full px-3' src={Faydee2} alt="" /></div>
          <div><img className='w-full h-full px-3' src={Faydee3} alt="" /></div>
          <div><img className='w-full h-full px-3' src={Faydee4} alt="" /></div>
          <div><img className='w-full h-full px-3' src={Faydee5} alt="" /></div>
          <div><img className='w-full h-full px-3' src={Faydee6} alt="" /></div>
        {/* </div> */}
       
      </Slider>
    </div>
  );
}

