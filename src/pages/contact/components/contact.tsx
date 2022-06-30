import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import anime from 'animejs';
import React from 'react';

class UnanimatedContact extends React.Component {
    render = () => <>
        <div className="contact-container">
            <button id="email" data-value="email" className="contact-btn contact-btn-copyable" onClick={() => copyToClipboard("bpschreiber2003@gmail.com", "email")}>
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="copy-tooltip">Copied to clipboard!</span>
            </button>
            <a href="https://www.linkedin.com/in/benjamin-schreiber-a14aa219a/" id="linkedin" className="contact-btn">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/bens-schreiber" id="github" className="contact-btn">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <button id="discord" data-value="discord" className="contact-btn contact-btn-copyable" onClick={() => copyToClipboard("bminschreib#5110", "discord")}>
                <FontAwesomeIcon icon={faDiscord} />
                <span className="copy-tooltip">Copied to clipboard!</span>
            </button>
        </div>
    </>
}

class Contact extends React.Component {

    animationRef: React.RefObject<any>
    constructor(props: {}) {
        super(props);
        this.animationRef = React.createRef();
    }

    componentDidMount() {
        this.animationRef.current?.childNodes.forEach((element: any, index: number) => {
            anime({
                delay: 1000 + (index * 150),
                loop: true,
                targets: element,
                translateX: [10, -10, 0],
                easing: "easeInOutCirc",
                endDelay: 2000 - (index * 150)
            })
        });
    }

    render = () => <>
        <div className="contact-container" ref={this.animationRef}>
            <button id="email" data-value="email" className="contact-btn contact-btn-copyable" onClick={() => copyToClipboard("bpschreiber2003@gmail.com", "email")}>
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="copy-tooltip">Copied to clipboard!</span>
            </button>
            <a href="https://www.linkedin.com/in/benjamin-schreiber-a14aa219a/" id="linkedin" className="contact-btn">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/bens-schreiber" id="github" className="contact-btn">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <button id="discord" data-value="discord" className="contact-btn contact-btn-copyable" onClick={() => copyToClipboard("bminschreib#5110", "discord")}>
                <FontAwesomeIcon icon={faDiscord} />
                <span className="copy-tooltip">Copied to clipboard!</span>
            </button>
        </div>
    </>
}

const copyToClipboard = (text: string, attribute: string): void => {
    navigator.clipboard.writeText(text);
    anime({
        targets: `.contact-btn-copyable[data-value="${attribute}"] .copy-tooltip`,
        easing: "easeInOutCubic",
        duration: 1000,
        opacity: ["100%", "0%"]
    })
}

export {Contact, UnanimatedContact}