import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGem, faPerson, faQuestion, faStar } from "@fortawesome/free-solid-svg-icons"
import { Review } from "./assets/index"

export default function TutorPage() {
    return <>
        <div className="tutor-page">

            <img id="tp-review" alt="" src={Review} />

            <h1 className="tp-header">TUTORING</h1>
            <div className="tp-about">

                <div className="tutor-info tp-text-box">
                    <p>Computer Science is a field with an incredibly high learning curve, forcing you to completely change the way you think in order to grasp problems and concepts. I love the challenge Computer Science brings. In tutoring students, I aim to not only show how concepts work, but why, with the goal of having a student leave with enough mastery to teach another. From an initial "Hello World" to Datastrucutes & Algorithms, I am capable of teaching any level of course in a way that you can fully process and understand</p>
                </div>

                <div className="tutor-price tp-text-box">
                    <h1>PRICING</h1>
                    <h1>$20/HR</h1>
                </div>

            </div>

            <div className="tp-features">
                <div className="tp-feature anim-1">
                    <FontAwesomeIcon icon={faPerson} />
                    <h1>Audience</h1>
                    <h2>Students of any age, goals, and education</h2>
                </div>
                <div className="tp-feature anim2">
                    <FontAwesomeIcon icon={faGem} />
                    <h1>Expierence</h1>
                    <h2>4 years of FBLA competition</h2>
                </div>
                <div className="tp-feature anim3">
                    <FontAwesomeIcon icon={faStar} />
                    <h1>Focus</h1>
                    <h2>Engineering, not just Programming</h2>
                </div>
                <div className="tp-feature anim4">
                    <FontAwesomeIcon icon={faQuestion} />
                    <h1>Why</h1>
                    <h2>A strong passion for Computer Science</h2>
                </div>
            </div>

            <div className="tp-my-langs-container">
                <h1 className="tp-header">MY LANGUAGES</h1>
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
        </div>
    </>
}