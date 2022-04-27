import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import anime from 'animejs';

export default function Contact(): JSX.Element {
    return <>
        <div className="contact-container">
            <a href="/"id="email" data-value="email" className="contact-btn contact-btn-copyable" onClick={() => copyToClipboard("bpschreiber2003@gmail.com", "email")}>
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="copy-tooltip">Copied to clipboard!</span>
            </a>
            <a href="https://www.linkedin.com/in/benjamin-schreiber-a14aa219a/" id="linkedin" className="contact-btn">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/bens-schreiber" id="github" className="contact-btn">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="/" id="discord" data-value="discord" className="contact-btn contact-btn-copyable" onClick={() => copyToClipboard("bminschreib#5110", "discord")}>
                <FontAwesomeIcon icon={faDiscord} />
                <span className="copy-tooltip">Copied to clipboard!</span>
            </a>
        </div>
    </>
}

function copyToClipboard(text: string, attribute: string) {
    navigator.clipboard.writeText(text);
    anime({
        targets: `.contact-btn-copyable[data-value="${attribute}"] .copy-tooltip`,
        easing: "easeInOutCubic",
        duration: 1000,
        opacity: ["100%", "0%"]
    })
}