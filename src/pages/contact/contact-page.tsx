import { Contact } from "./components/contact"
import emailjs from 'emailjs-com';
const ContactPage = (): JSX.Element =>
    <>
        <div className="contact">
            <div className="contact-inquries section-inner-grid">
                <div className="business-inquries">
                    <div className="title">
                        Business Inquries
                        <p>Reach me at bpschreiber2003@gmail.com</p>
                    </div>
                </div>
                <Contact />
            </div>

            <ContactForm/>
        </div>
    </>

export const ContactForm = () => <form className="contact-form" onSubmit={sendEmail}>
    <div className="contact-form-group">
        <label htmlFor="user_name" className="contact-label">Name</label>
        <div className="contact-input">
            <input type="text" id="user_name" name="user_name" className="contact-form-control" required />
        </div>
    </div>
    <div className="contact-form-group">
        <label htmlFor="user_email" className="contact-label">Email Address</label>
        <div className="contact-input">
            <input type="email" id="user_email" name="user_email" className="contact-form-control" required />
        </div>
    </div>

    <div className="contact-form-group">
        <label htmlFor="message" className="contact-label">Message</label>
        <div className="contact-input">
            <textarea id="message" name="message" className="contact-form-control" rows={6} maxLength={3000} required></textarea>
        </div>
    </div>
    <button type="submit" className="button-outlined">SEND</button>
</form>

function sendEmail(e: any): void {
    e.preventDefault();
    emailjs.sendForm('service_9bfqcdi', 'template_d46zy4m', e.target, 'vAFgaWafsvixFsX62')
        .then((result) => {
            window.location.reload()
        }, (error) => {
            console.log(error.text);
        });
}
export default ContactPage;