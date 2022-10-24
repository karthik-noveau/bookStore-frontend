import Slide1 from '../slider/slide1/Slide1';


import '../css/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {useEffect} from 'react'

import SearchBar from '../Search bar/SearchBar';
import MainSlider from '../slider/main-slider/MainSlider';
import Slide2 from '../slider/slide2/Slide2';
import Slide3 from '../slider/slide3/Slide3';
 
 





function Home() {
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    //   }, [])
    return (
        <div>
      
            <SearchBar />

            <MainSlider />

            <div className='view_all_cont'>
                <Link to="./Books"><button>View all books</button></Link>
            </div>


            <div className='new_arr_cont'>
                <h2>New Arrivals</h2>
                <Slide1 />
            </div>

            <div className='new_arr_cont'>
                <h2>Award Winning </h2>
                <Slide2 />
            </div>

            <div className='new_arr_cont'>
                <h2>Fiction Books</h2>
                <Slide3 />
            </div>

          
          
        </div>
    )
}

export default Home;