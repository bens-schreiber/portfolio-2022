import CareerSVG from "./assets/careers"
import { Skills, FaSkillsItem, SkillsItem } from "./components/skills"
import { faGolang, faJava, faJsSquare } from "@fortawesome/free-brands-svg-icons"
import CppLogo from "./assets/cpp.svg"
import DartLogo from "./assets/dart.svg"
export const Resume = () => <>
    <div className="resume-container">
        <CareerSVG />
        <Skills>
            <FaSkillsItem img={faJsSquare} header="JavaScript" desc="React, AnimeJS"/>
            <FaSkillsItem img={faGolang} header="Go" desc="Gin, SQL"/>
            <FaSkillsItem img={faJava} header="Java" desc="Springboot, JavaFX, Gradle" />
            <SkillsItem img={CppLogo} header="C++" desc="Qt Framework" />
            <SkillsItem img={DartLogo} header="Dart" desc="Flutter Framework"/>
        </Skills>
    </div>
</>