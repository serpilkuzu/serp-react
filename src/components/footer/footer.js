import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import './footer.css';


export default function Footer(props) {
    return (
        <div className="footer social-container">


            <a href="https://www.linkedin.com/in/serpilkuzu/"
               className="linkedin social">
                <FontAwesomeIcon icon={faLinkedin} size="2x"/>
            </a>


            <a href="https://github.com/serpilkuzu"
               className="github social">
                <FontAwesomeIcon icon={faGithub} size="2x"/>
            </a>

            <a href="https://www.instagram.com/kuzu.serpil/"
               className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x"/>
            </a>

        </div>
    )
}
