import { faFilePdf } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { JavaLogo, JsLogo, CppLogo, GolangLogo, DartLogo, FBLA, Intellitect, ResumeAboutSection, ResumePageHeader, CSLogo } from "./assets"
import Skills from "./components/skills"
export const Resume = () => <>
    <div className="resume-container section-grid">

        <a href="src/pages/resume/assets/benschreiber_resume.pdf" download="benschreiber_resume" target="_blank"
            type="application/octet-stream" className="floating-pdf-download-btn">
            <FontAwesomeIcon icon={faFilePdf} />
        </a>

        <img id="page-header-img" src={ResumePageHeader} alt="" />


        <img src={ResumeAboutSection} alt="" />


        <div className="skills-container section-inner-grid">
            <div className="section-header">MY LANGUAGES & FRAMEWORKS</div>
            <Skills>
                <Skills.Item img={CSLogo} header="C#" desc="ASP.NET" />
                <Skills.Item img={JavaLogo} header="Java" desc="Springboot, JavaFX, Gradle" />
                <Skills.Item img={JsLogo} header="JavaScript" desc="React, AnimeJS" />
                <Skills.Item img={CppLogo} header="C / C++" desc="Qt" />
                <Skills.Item img={GolangLogo} header="Go" desc="Gin, SQL" />
                <Skills.Item img={DartLogo} header="Dart" desc="Flutter" />
            </Skills>
        </div>

        <div className="pa section-inner-grid">
            <div className="accolades-container section-inner-grid">
                <div className="section-header">WORK EXPERIENCE</div>
                <div className="fbla item">
                    <img src={Intellitect} alt="" />
                    <ul className="items">
                        <li>Intern at IntelliTect<span>June 2022 - Present</span></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="pa section-inner-grid">
            <div className="accolades-container section-inner-grid">
                <div className="section-header">ACCOLADES</div>
                <div className="fbla item">
                    <img src={FBLA} alt="" />
                    <ul className="items">
                        <li>Coding & Programming WA State Champion <span>2021</span></li>
                        <li>Coding & Programming 3rd Nationally <span>2021</span></li>
                        <li>Website Design Regional Champion <span>2022</span></li>
                        <li>Website Design WA State Champion <span>2022</span></li>
                    </ul>
                </div>
                <div className="scholarships item">
                    <img alt="" src={Intellitect} />
                    <ul className="items">
                        <li>Intellitect Scholar Winner<span>2022</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</>