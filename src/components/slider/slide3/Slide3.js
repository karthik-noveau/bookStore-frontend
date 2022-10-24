
import Slider from "react-slick";
import { BooksData } from './SlideData';
import './Slider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Slide3() {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow:13, 
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint:850,
        settings: {
          slidesToShow:6,
          slidesToScroll: 5,
          infinite: true,
          dots: false
        }
      },
     
      {
        breakpoint:480,
        settings: {
          slidesToShow:3,
          slidesToScroll: 5,
          infinite: true,
          dots: false
        }
      },
     
      {
        breakpoint: 600,
        settings: {
          slidesToShow:4,
          slidesToScroll: 5,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow:6,
          slidesToScroll: 12,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1650,
        settings: {
          slidesToShow:6,
          slidesToScroll:9,
          infinite: true,
          dots: false
        }
      },
    

  
     
   
    ]
  };
  return (
    <div className="slide_main_cont">
 
      <div className="slide_cont">

        <Slider {...settings}>
          {
            BooksData.map((item, index) => {
              return (
                <div>
                  <img src={item.image} />
                </div>
              )
            })
          }

        </Slider>
      </div>


    </div>
  );
}

export default Slide3;