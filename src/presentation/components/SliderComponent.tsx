import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import imageAssets from "presentation/assets/images";
type Props = {};

const SliderComponent = (props: Props) => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      <div className="h-screen w-1/2 bg-blue-50 flex justify-center items-center">
        <img
          className="h-screen bg-contain"
          src={imageAssets.backgroundSignUp1}
          alt="backgroud 1"
        />
      </div>
      <div className="h-screen w-1/2 bg-blue-50">
        <img
          className="h-screen bg-contain"
          src={imageAssets.backgroundSignUp2}
          alt="backgroud 2"
        />
      </div>
      <div className="h-screen w-1/2 bg-blue-50">
        <img
          className="h-screen bg-contain"
          src={imageAssets.backgroundSignUp3}
          alt="backgroud 3"
        />
      </div>
    </Slider>
  );
};

export default SliderComponent;
