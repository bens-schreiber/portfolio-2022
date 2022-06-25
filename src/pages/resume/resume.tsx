import { Logo, LogoUnanimated } from "../../assets"
import { EzQuizLogo, PUAppLogo } from "../portfolio/assets"
import { JavaLogo, JsLogo, CppLogo, GolangLogo, DartLogo, CareerSVG, ResumeAbout, ResumeSchool, FBLA, Intellitect } from "./assets"
import Skills from "./components/skills"
export const Resume = () => <>
    <div className="resume-container section-grid">
        <CareerSVG />

        <div className="resume-items">
            <img src={ResumeAbout} alt="" />
            <img src={ResumeSchool} alt="" />
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


        <div className="accolades-container section-grid">
            <div className="section-header">MY ACCOLADES</div>
            <div className="accolades section-grid">
                <div className="fbla section-inner-grid">
                    <img src={FBLA} alt="" />
                    <h1>Coding and Programming State Champion - 2021</h1>
                    <h1>Coding and Programming 3rd Nationally - 2021</h1>
                    <h1>Website Design Regional Champion - 2022</h1>
                    <h1>Website Design State Champion - 2022</h1>
                </div>
                <div className="intellitect section-inner-grid">
                    <img src={Intellitect} />
                    <h1>Intellitect Scholar Winner 2022</h1>
                </div>
            </div>
        </div>

        <div className="projects-container section-grid">
            <div className="section-header">MY PROJECTS</div>
            <div className="projects section-inner-grid">
                <img src={PUAppLogo}/>
                <img src={LogoUnanimated}/>
                <img src={EzQuizLogo}/>
            </div>
        </div>

    </div>
</>