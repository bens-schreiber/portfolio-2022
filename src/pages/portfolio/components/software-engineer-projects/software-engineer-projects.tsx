import { EzQuizLogo, JavaLogo, Demo1, Demo2, UserFlow, UMLDiagramEzQuiz } from "../../assets"
import { FblaSVG } from "../../../home/components/about/assets";

export default function SoftwareEngineerProjects() {
    return <>
        <div className="sft-engin">

            <div className="headers">
                <h1>
                    SOFTWARE ENGINEERING
                </h1>
            </div>

            <div className="sft-engin-logo-header">
                <div className="l-container">
                    <img src={EzQuizLogo} />
                </div>
            </div>

            <div className="sft-engin-about">
                <div className="about sft-grid-box">
                    <h1 className="bold-header">ABOUT</h1>
                    <p>EzQuiz was designed for competition in the <span>2021 FBLA Coding & Programming</span> category. EzQuiz creates and administers fully customizeable, secure, locally hosted quizzes.</p>
                </div>
                <div className="awards sft-grid-box">
                    <img src={FblaSVG} />
                    <h1>FBLA 3rd in Nation</h1>
                    <h1>FBLA 1st in Washington State</h1>
                </div>
                <div className="tech sft-grid-box">
                    <img src={JavaLogo} />
                    <p>Developed primarily in Java with JavaFX</p>
                </div>
                <div className="guidelines sft-grid-box">
                    <h1 className="bold-header">GUIDELINES</h1>
                    <p>The project prompt, in summary (see <a href="https://www.fbla-pbl.org/media/2021/08/FBLA-Rating-Sheets.pdf">Judge Scoring Guidelines</a> for the complete), was required to have 50 questions in a relational database fetched by the software, present the user with a quiz, and inform them of their score.</p>
                </div>
            </div>

            <div className="front-end">
                <div className="headers">
                    <h1>
                        FRONT END
                    </h1>
                </div>
                <div className="demo-vids">
                    <video className="sft-grid-box" controls >
                        <source src={Demo1} />
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                    <video className="sft-grid-box" controls>
                        <source src={Demo2} />
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                </div>
                <div className="headers">
                    <h1>
                        USER FLOW
                    </h1>
                </div>
                <div className="user-flow-diagram">
                    <img className="sft-grid-box" src={UserFlow} />
                </div>
            </div>

            <div className="back-end">
                <div className="headers">
                    <h1>
                        BACK END
                    </h1>
                </div>
                <div className="uml-diagram">
                    <img className="sft-grid-box" src={UMLDiagramEzQuiz}/>
                </div>
            </div>
        </div>
    </>
}