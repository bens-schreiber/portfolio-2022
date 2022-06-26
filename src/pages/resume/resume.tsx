import { faFilePdf } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Logo, LogoUnanimated } from "../../assets"
import { EzQuizLogo, PUAppLogo } from "../portfolio/assets"
import { JavaLogo, JsLogo, CppLogo, GolangLogo, DartLogo, CareerSVG, ResumeAbout, ResumeSchool, FBLA, Intellitect, ResumeAboutSection } from "./assets"
import Skills from "./components/skills"
export const Resume = () => <>
    <div className="resume-container section-grid">

        <button className="floating-pdf-download-btn">
            <FontAwesomeIcon icon={faFilePdf}/>
        </button>

        <div className="resume-items">
            <img src={ResumeAboutSection} alt=""/>
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


        <div className="accolades-container section-inner-grid">
            <div className="section-header">Accolades</div>
            <div className="fbla">
                <img src={FBLA} alt=""/>
                <ul className="items">
                    <li>Coding & Programming WA State Champion <span>2021</span></li>
                    <li>Coding & Programming 3rd in Nation <span>2021</span></li>
                    <li>Website Deisgn Regional Champion <span>2022</span></li>
                    <li>Website Deisgn WA State Champion <span>2022</span></li>
                </ul>
            </div>
            <div className="scholarships">
                <img src={Intellitect}/>
                <ul className="items">
                    <li>Intellitect Scholar Winner<span>2022</span></li>
                </ul>
            </div>
        </div>

        <div className="projects-container section-inner-grid">
            <div className="section-header">Projects</div>
            <img src={PUAppLogo} alt="" />
            <img src={EzQuizLogo} alt="" />
            <img src={LogoUnanimated} alt="" />
        </div>
    </div>
</>