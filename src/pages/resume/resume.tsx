import CareerSVG from "./assets/careers"
import { Skills, FaSkillsItem, SkillsItem } from "./components/skills"
import CppLogo from "./assets/cpp.svg"
import DartLogo from "./assets/dart.svg"
import JavaLogo from "./assets/java.svg"
import GolangLogo from "./assets/golang.svg"
import JsLogo from "./assets/js.svg"
export const Resume = () => <>
    <div className="resume-container">
        <CareerSVG />
        <Skills>
            <SkillsItem img={JsLogo} header="JavaScript" desc="React, AnimeJS"/>
            <SkillsItem img={CppLogo} header="C++" desc="Qt Framework" />
            <SkillsItem img={JavaLogo} header="Java" desc="Springboot, JavaFX, Gradle" />
            <SkillsItem img={GolangLogo} header="Go" desc="Gin, SQL"/>
            <SkillsItem img={DartLogo} header="Dart" desc="Flutter Framework"/>
        </Skills>
    </div>
</>