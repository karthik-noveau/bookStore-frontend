import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import './SearchBar.css';

function SearchBar() {
    return (
        <div>
            <div id="search_bar">
                <Form className="d-flex" >
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        variant="outline-dark"
                    />
                    <Button variant="outline-dark">Search</Button>

                </Form>
            </div>
        </div>
    )
}

export default SearchBar;