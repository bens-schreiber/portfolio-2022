import CareerSVG from "./assets/careers"
import Skills from "./components/skills"
import CppLogo from "./assets/cpp.svg"
import DartLogo from "./assets/dart.svg"
import JavaLogo from "./assets/java.svg"
import GolangLogo from "./assets/golang.svg"
import JsLogo from "./assets/js.svg"
export const Resume = () => <>
    <div className="resume-container">
        <CareerSVG />
        <Skills>
            <Skills.Item img={JavaLogo} header="Java" desc="Springboot, JavaFX, Gradle" />
            <Skills.Item img={JsLogo} header="JavaScript" desc="React, AnimeJS" />
            <Skills.Item img={CppLogo} header="C / C++" desc="Qt Framework" />
            <Skills.Item img={GolangLogo} header="Go" desc="Gin, SQL" />
            <Skills.Item img={DartLogo} header="Dart" desc="Flutter Framework" />
        </Skills>
    </div>
</>