import { Review } from "./assets/index"
export default function TutorPage() {
    return <>
        <div className="tutor">
            <img src={Review} />

            <div>
                <h1>MY LANGUAGES</h1>
                <div className="my-langs">
                    public enum <span className="white">Language {"{"}</span>
                    <ul>
                        <li>C</li>
                        <li>C++</li>
                        <li>JAVA</li>
                        <li>PYTHON</li>
                        <li>JAVA_SCRIPT</li>
                        <li>TYPE_SCRIPT</li>
                        <li>GOLANG</li>
                        <li>DART</li>
                        <li>BASH</li>
                        <li>HTML_CSS</li>
                    </ul>
                    <span className="white">{"}"}</span>
                </div>
            </div>

            <div>
                <h1>TUTORING</h1>
                <div className="info">
                    <div className="tutor-info box">
                        <p>I teach Computer Science classes at any level, from a basic "Hello World!" to advanced Datastructures & Algorithms. I have an expertise in any of the listed languages, doing numerous projects throughout all of them.</p>
                    </div>

                    <div className="tutor-price box">
                        <h1>PRICING</h1>
                        <h1>$20/HR</h1>
                    </div>
                </div>
            </div>

            <div className="contact">
                <div className="contact-form-group">
                    <label htmlFor="Name" className="contact-label">Name</label>
                    <div className="contact-input">
                        <input type="text" id="Name" name="Name" className="contact-form-control" required />
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
                <button className="contact-send-button">SEND</button>
            </div>

        </div>
    </>
}