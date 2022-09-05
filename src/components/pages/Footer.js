import '../css/Footer.css';
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { RiLinkedinFill } from 'react-icons/ri'
import { FiMail } from 'react-icons/fi'
import {Link} from 'react-router-dom'
 

function Footer() {
    return (
        <div>
            <footer>
                
                <div className="footer_container">
                    <div className="f_logo_container">
                        <img src="https://firebasestorage.googleapis.com/v0/b/book-store-2701c.appspot.com/o/Footer%2Ffooter_logo.png?alt=media&token=5598c3e5-46c6-47e3-963c-1a9df692f50d"/>
                        <div className="f_icon_container">
                            <a href="https://m.facebook.com/profile.php" target="_blank"><FaFacebookF className="f_icon"/></a>
                            <a href="https://www.instagram.com/karthik_skynoveau/" target="_blank"><BsInstagram className="f_icon" /></a>
                            <a href="https://www.linkedin.com/in/karthik-b-736308209/" target="_blank"><RiLinkedinFill className="f_icon" /></a>
                            <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=skynoveau.in@gmail.com" target="_black"><FiMail className="f_icon" /></a>
                        </div>
                    </div>

                    <div className="item_conteiner" >
                        <div className="f_item_1" >
                            <ul>
                                <li>Company</li>
                                <li><Link to="/ABooks">About</Link></li>
                                <li><a href="https://skybookstore1.netlify.app/About">Contact</a></li>
                            </ul>
                        </div>

                        <div className="f_item_1" >
                            <ul>
                                <li>Our services</li>
                                <li><a href="https://skybookstore1.netlify.app/Books">All Books</a></li>
                                <li><a href="https://skybookstore1.netlify.app/Books">Door Delivery</a></li>
                            </ul>
                        </div>

                        <div className="f_item_1" >
                            <ul>
                                <li>Quick Links</li>
                                <li><a href="https://skybookstore1.netlify.app/ABooks">Admin Portal</a></li>
                                <li><a href="https://skybookstore1.netlify.app/AddBook">Add Book</a></li>

                            </ul>
                        </div>
                    </div>

                </div>
                <div className="footer_line">
                    <hr></hr>
                </div>
                
                




                <div className="copy_rights">
                    <p>copyright © 2022 Skynoveau Technology</p>
                    <p>All rights reserved</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer