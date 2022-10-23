import Carousel from 'react-bootstrap/Carousel';

function MainSlider() {
    return (
        <div>
            <div className='carousel_cont'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://firebasestorage.googleapis.com/v0/b/book-store-2701c.appspot.com/o/Main%20Slider%2Fslide_5.png?alt=media&token=c89edca4-63c8-4542-97ba-a845c1d51625"
                            alt="First slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://firebasestorage.googleapis.com/v0/b/book-store-2701c.appspot.com/o/Main%20Slider%2Fslide_6.png?alt=media&token=0a6c9e01-beee-402f-8fe7-39347116931e"
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://firebasestorage.googleapis.com/v0/b/book-store-2701c.appspot.com/o/Main%20Slider%2Fslide_8.png?alt=media&token=36fae19c-b898-4d8b-b674-9c31c3eb432b"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

            </div>
        </div>
    )
}

export default MainSlider;