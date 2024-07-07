import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <div className="logoHeader">
                    <button className="navButton"><span className="firstHeader">DreamEleven</span><span className="secondHeader">Builder</span></button>
                </div>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul>
                        <li><a className="socialIcons" href="https://dreameleven.onrender.com/" target="_blank"><FontAwesomeIcon icon={faFutbol} /></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}