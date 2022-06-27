import { faFilePdf } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { LogoUnanimated } from "../../assets"
import { EzQuizLogo, PUAppLogo } from "../portfolio/assets"
import { JavaLogo, JsLogo, CppLogo, GolangLogo, DartLogo, FBLA, Intellitect, ResumeAboutSection, ResumePageHeader } from "./assets"
import Skills from "./components/skills"
export const Resume = () => <>
    <div className="resume-container section-grid">

        <img id="resume-page-header" src={ResumePageHeader} alt="" />

        <a href="/home/benjamin/projects/portfolio/src/pages/resume/assets/BenjaminSchreiber_Resume.pdf" download="BenjaminSchreiber_Resume" className="floating-pdf-download-btn">
            <FontAwesomeIcon icon={faFilePdf} />
        </a>

        <div className="resume-items">
            <img src={ResumeAboutSection} alt="" />
        </div>

        <div className="skills-container section-inner-grid">
            <div className="section-header">MY LANGUAGES & FRAMEWORKS</div>
            <Skills>
                <Skills.Item img={JavaLogo} header="Java" desc="Springboot, JavaFX, Gradle" />
                <Skills.Item img={JsLogo} header="JavaScript" desc="React, AnimeJS" />
                <Skills.Item img={CppLogo} header="C / C++" desc="Qt" />
                <Skills.Item img={GolangLogo} header="Go" desc="Gin, SQL" />
                <Skills.Item img={DartLogo} header="Dart" desc="Flutter" />
            </Skills>
        </div>


        <div className="pa section-inner-grid">
            <div className="accolades-container section-inner-grid">
                <div className="section-header">Accolades</div>
                <div className="fbla item">
                    <img src={FBLA} alt="" />
                    <ul className="items">
                        <li>Coding & Programming WA State Champion <span>2021</span></li>
                        <li>Coding & Programming 3rd in Nation <span>2021</span></li>
                        <li>Website Deisgn Regional Champion <span>2022</span></li>
                        <li>Website Deisgn WA State Champion <span>2022</span></li>
                    </ul>
                </div>
                <div className="scholarships item">
                    <img src={Intellitect} />
                    <ul className="items">
                        <li>Intellitect Scholar Winner<span>2022</span></li>
                    </ul>
                </div>
            </div>

            <div className="projects-container section-inner-grid">
                <div className="section-header">Projects</div>
                <div className="item">
                    <img src={PUAppLogo} alt="" />
                    <a href="/portfolio">PushApp / PUApp</a>
                </div>
                <div className="item">
                    <img src={EzQuizLogo} alt="" />
                    <a href="/portfolio">EzQuiz</a>
                </div>
                <div className="item">
                    <img src={LogoUnanimated} alt="" />
                    <a href="/portfolio">bmin-schreib</a>
                </div>
            </div>
        </div>
    </div>
</>