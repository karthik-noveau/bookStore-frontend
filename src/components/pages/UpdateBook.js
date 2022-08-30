import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/AddBook.css'
import Header from './Header';
import Footer from './Footer';

function UpdateBook() {


    const [inputs, setInputs] = useState();
    const id = useParams().id;

    const history = useNavigate();
    useEffect(() => {
        const fetchHandler = async () => {
            await axios
                .get(`https://skybook-store.herokuapp.com/books/${id}`)
                .then((res) => res.data)
                .then((data) => setInputs(data.book))
                .then((res) => console.log(res))
                .catch((err) => console.log("update error is " + err))
        };
        fetchHandler();
    }, [id]);

    const sendRequest = async () => {
        await axios
            .put(`https://skybook-store.herokuapp.com/books/${id}`, {
                name: String(inputs.name),
                author: String(inputs.author),
                off_price: Number(inputs.off_price),
                ori_price: Number(inputs.ori_price),
                image: String(inputs.image)
            })
            .then((res) => res.data);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => history("/books"));
    };
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };


    return (
        <div>
            <Header />
            <div className="add_main_cont">
                {inputs && (
                    <div className="addb_cont">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Book name" name="name"
                                    value={inputs.name}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Author</Form.Label>
                                <Form.Control type="text" placeholder="Author" name="author"
                                    value={inputs.author}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" placeholder="Offer Price" name="off_price"
                                    value={inputs.off_price}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" placeholder="Original Price" name="ori_price"
                                    value={inputs.ori_price}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="url" placeholder="image url" name="image"
                                    value={inputs.image}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit" >
                                Submit
                            </Button>

                        </Form>
                    </div>

                )}

            </div>
            <Footer />
        </div>

    );
}

export default UpdateBook;
