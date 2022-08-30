import Button from 'react-bootstrap/Button';
import '../css/Book.css'


function Book(props) {

    const { id, name, author, off_price, ori_price, image} =props.book;


    return (
        <div className="card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <article>By {author}</article>
            <h3>Rs {off_price} <span> Rs<del>{ori_price}</del></span></h3>
            <Button className="btn_2" variant="primary" type="submit">
                Details
            </Button>
        </div>
    )
}

export default Book;