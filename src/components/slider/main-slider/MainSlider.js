import Carousel from 'react-bootstrap/Carousel';

function MainSlider() {
    return (
        <div>
            <div className='carousel_cont'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://firebasestorage.googleapis.com/v0/b/book-store-2701c.appspot.com/o/Main%20Slider%2Fslide_2.jpg?alt=media&token=5e5e4a4e-6688-4fd9-bf6c-be8893286f82"
                            alt="First slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://firebasestorage.googleapis.com/v0/b/book-store-2701c.appspot.com/o/Main%20Slider%2Fslide_3.jpg?alt=media&token=1b45b4a0-30f7-4843-8fff-c424be3e4f0e"
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://firebasestorage.googleapis.com/v0/b/book-store-2701c.appspot.com/o/Main%20Slider%2Fslide_1.jpg?alt=media&token=d53a91bf-af8d-4b37-91f4-3d3122265cea"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

            </div>
        </div>
    )
}

export default MainSlider;