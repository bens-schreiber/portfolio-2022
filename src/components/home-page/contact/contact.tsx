import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Contact(): JSX.Element {
    return <>
        <div className="contact-container">
            <a href="#"id="email" className="contact-btn">
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="#" id="linkedin" className="contact-btn">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" id="github" className="contact-btn">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" id="discord" className="contact-btn">
                <FontAwesomeIcon icon={faDiscord} />
            </a>
        </div>
    </>
}