import Slider from 'infinite-react-carousel';

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
          <h3>1</h3>
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

