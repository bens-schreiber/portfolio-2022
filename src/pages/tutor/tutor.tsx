import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelopeSquare, faGem, faPerson, faQuestion, faStar } from "@fortawesome/free-solid-svg-icons"
import { Review } from "./assets/index"

function TutorPage() {
    return <>
        <div className="tutor">

            <img id="review" src={Review} />

            <div>
                <h1>TUTORING</h1>
                <div className="info">
                    <div className="tutor-info box">
                        <p>Computer Science is a field with an incredibly high learning curve, forcing you to completely change the way you think in order to grasp problems and concepts. I love the challenge Computer Science brings. In tutoring students, I aim to not only show how concepts work, but why, with the goal of having a student leave with enough mastery to teach another. From an initial "Hello World" to Datastrucutes & Algorithms, I am capable of teaching any level of course in a way that you can fully process and understand</p>
                    </div>

                    <div className="tutor-price box">
                        <h1>PRICING</h1>
                        <h1>$20/HR</h1>
                    </div>
                </div>
            </div>

            <div className="features">
                <div className="feature anim-1">
                    <FontAwesomeIcon icon={faPerson} />
                    <h1>Audience</h1>
                    <h2>Students of any age, goals, and education</h2>
                </div>
                <div className="feature anim2">
                    <FontAwesomeIcon icon={faGem} />
                    <h1>Expierence</h1>
                    <h2>4 years of FBLA competition</h2>
                </div>
                <div className="feature anim3">
                    <FontAwesomeIcon icon={faStar} />
                    <h1>Focus</h1>
                    <h2>Making Engineers, not Programmers</h2>
                </div>
                <div className="feature anim4">
                    <FontAwesomeIcon icon={faQuestion} />
                    <h1>Why</h1>
                    <h2>A strong passion for Computer Science</h2>
                </div>
            </div>

            <div className="my-langs-container">
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

            <div className="contact">

                <div className="inquries">
                    <div className="business-inquries">
                        <FontAwesomeIcon icon={faEnvelopeSquare} />
                        <div className="title">
                            Business Inquries
                            <p>Reach me at bpschreiber2003@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
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




        </div>

    </>
}

function ContactPage() {
    return <>
        <div className="contact">

            <div className="inquries">
                <div className="business-inquries">
                    <FontAwesomeIcon icon={faEnvelopeSquare} />
                    <div className="title">
                        Business Inquries
                        <p>Reach me at bpschreiber2003@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="contact-form">
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

export { ContactPage, TutorPage }