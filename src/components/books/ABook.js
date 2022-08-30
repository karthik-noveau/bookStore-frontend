import Button from 'react-bootstrap/Button';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import '../css/Book.css'
import URL from '../path'

function Book(props) {

    const history =useNavigate();
    const { _id, name, author, off_price, ori_price, image} =props.book;

    const deleteData =async()=>{
        await axios
        .delete(`${URL}${_id}`)
        .then((res) => res.data)
        .then(() => history("/books"));
    };
    

    return (
        <div className="card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <article>By {author}</article>
            <h3>Rs {off_price} <span> Rs<del>{ori_price}</del></span></h3>
            <Link to={`/books/${_id}`} >
                <Button variant="primary" type="submit" >
                    Update
                </Button>
            </Link>
            <Button className="btn_2" variant="primary" type="submit" onClick={deleteData}>
                Delete
            </Button>
        </div>
    )
}

export default Book;