import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/AddBook.css';
 
import Footer from './Footer';

function AddBook() {

    const history = useNavigate();
    const [inputs, setInputs] = useState({
        name: "",
        description: "",
        off_price: "",
        ori_price: "",
        author: "",
        image: "",
    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        console.log(e.target.name, "Value", e.target.value);
    };

    const sendRequest = async () => {
        await axios
            .post("https://skybook-store.herokuapp.com/books", {
                name: String(inputs.name),
                author: String(inputs.author),
                off_price: Number(inputs.off_price),
                ori_price: Number(inputs.ori_price),
                image: String(inputs.image),
            })
            .then((res) => res.data);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => history("/books"));
    };

    return (
        <div>
 
            <div className="add_main_cont">
                <div className="addb_cont">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Book name" name="name"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="text" placeholder="Author" name="author"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" placeholder="Offer Price" name="off_price"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" placeholder="Original Price" name="ori_price"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="url" placeholder="image url" name="image"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>

                    </Form>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default AddBook;