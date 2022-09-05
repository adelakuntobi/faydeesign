import Slider from 'infinite-react-carousel';
import Faydee1 from "../assets/images/1.jpg"
export default function Carousel() {
  const settings =  {
    autoplay: true,
    autoplaySpeed: 10000,
    centerMode: true,
    centerPadding: 70,
    gutter: 20,
    shift: 10,
    slidesToShow: 3
  };
  return (
    <div>
      <span>CustomSlider</span>
      <Slider { ...settings }>
        <div>
          <img src={Faydee1} alt="" />
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
      </Slider>
    </div>
  );
}

