import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import "./Copyright.css"

export default function Copyright() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="copyright">
                <a className="socialIconsCopy" href="https://dreameleven.onrender.com/" target="_blank"><FontAwesomeIcon icon={faFutbol} /></a>
                <p className="copyrightDescription">© Copyright 2024 <a className="copyLink" href="https://www.instagram.com/">lineup builder</a></p>
            </div>
        </nav>
    )
}