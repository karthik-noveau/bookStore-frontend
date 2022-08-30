
import Slider from "react-slick";
import {BooksData} from './SlideData';
import './Slider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Slide() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow:4,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <div className="slide_cont">
      <Slider {...settings} className="slide_main_cont">
         {
          BooksData.map((item,index)=>(
            <div className="card">
              <div className="card-top" key={index}>
                 <img src={item.image} />
              </div>
            </div>
          ))
         }
      </Slider>
    </div>
  );
}

export default Slide;