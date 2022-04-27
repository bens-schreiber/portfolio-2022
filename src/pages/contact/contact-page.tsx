import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Contact from "./components/contact"
export default function ContactPage() {
    return <>
        <div className="contact">
            <div className="contact-inquries">
                <div className="business-inquries">
                    <FontAwesomeIcon icon={faEnvelopeSquare} />
                    <div className="title">
                        Business Inquries
                        <p>Reach me at bpschreiber2003@gmail.com</p>
                    </div>
                </div>
                <Contact />
            </div>

            <form action="contact-page.php" method="post" className="contact-form">
                <div className="contact-form-group">
                    <label htmlFor="Name" className="contact-label">Name</label>
                    <div className="contact-input">
                        <input type="text" id="Name" name="Name" className="contact-form-control"  required />
                    </div>
                </div>
                <div className="contact-form-group">
                    <label htmlFor="Email" className="contact-label">Email Address</label>
                    <div className="contact-input">
                        <input type="email" id="Email" name="Email" className="contact-form-control" required />
                    </div>
                </div>

                <div className="contact-form-group">
                    <label htmlFor="Message" className="contact-label">Message</label>
                    <div className="contact-input">
                        <textarea id="Message" name="Message" className="contact-form-control" rows={6} maxLength={3000} required></textarea>
                    </div>
                </div>
                <button type="submit" className="contact-send-button">SEND</button>
            </form>
        </div>
    </>
}