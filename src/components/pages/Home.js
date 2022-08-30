import Slide from '../slider/slide1/Slide';

import '../css/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import SearchBar from '../Search bar/SearchBar';
import MainSlider from '../slider/main-slider/MainSlider';
import Header from './Header';
import Footer from './Footer';


function Home() {
    return (
        <div>
            <Header />
            <SearchBar />

            <MainSlider />

            <div className='view_all_cont'>
                <Link to="./Books"><button>View all books</button></Link>
            </div>


            <div className='new_arr_cont'>
                <h2>New Arrivals</h2>
                <Slide />
            </div>

            <div className='new_arr_cont'>
                <h2>Award Winning </h2>
                <Slide />
            </div>

            <div className='new_arr_cont'>
                <h2>Fiction Books</h2>
                <Slide />
            </div>

            <Footer />
        </div>
    )
}

export default Home;