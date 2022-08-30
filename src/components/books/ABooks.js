import SearchBar from "../Search bar/SearchBar";
import axios from 'axios'
import { useEffect, useState } from "react";
import Book from './ABook';
import URL from '../path'
import '../css/Book.css'


function ABooks() {

    const fetchData = async () => {
        return await axios.get(URL).then((res) => res.data)
    };
    // const fetchDemo =async ()=>{
    //     return await axios.get(URL).then((item1)=>console.log(item1))
    // }
    // fetchDemo();

    const [books, setBooks] = useState();
    useEffect(() => {
        fetchData().then((data) => setBooks(data.books));
    }, []);

    return (
        <div>
            <SearchBar />
            <div className="book_cont">
                <ul>
                    {books &&
                        books.map((book, i) => (
                            <li key={i}>
                                <Book book={book} />
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}

export default ABooks;