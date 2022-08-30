import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { AiOutlineHome} from 'react-icons/ai';
import { MdOutlineLibraryBooks, MdOutlinePersonOutline} from 'react-icons/md';
import {GiBookshelf} from 'react-icons/gi';
 

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Header.css'

function Header() {


  return (
    <div className='header_cont'>
      {['xxl'].map((expand) => (
        <Navbar key={expand} bg="dark" variant="dark" expand="md" className="mb-3" collapseOnSelect >
          <Container fluid>
            <Navbar.Brand as={Link} to="/" style={{ display: "flex" }}><h2 style={{ marginTop: "5px" }}>Skynoveau</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='nav_p'>
                  <p>Welcome to Book Shop</p>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/" eventKey="1"><AiOutlineHome className='n_icon' />Home</Nav.Link>
                  <Nav.Link as={Link} to="./Books" eventKey="2"><MdOutlineLibraryBooks className='n_icon' />Books</Nav.Link>
                  <Nav.Link as={Link} to="./AddBook"  eventKey="3"><GiBookshelf className='n_icon' />Add Book</Nav.Link>
                  <Nav.Link as={Link} to="./ABooks" eventKey="4"><MdOutlinePersonOutline className='n_icon' style={{fontSize:'22px'}}/>Admin</Nav.Link>
                  {/* <Nav.Link href="https://api.whatsapp.com/send?phone=919360375911&text=Hai%20karthik" eventKey="5"><AiOutlineWhatsApp className='n_icon' />Whatsapp</Nav.Link> */}

                </Nav>

                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='nav_v'>
                    <p >version 1.2</p>
                  </Offcanvas.Title>
                </Offcanvas.Header>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Header;