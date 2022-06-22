import CareerSVG from "./assets/careers"
import Skills from "./components/skills"
import CppLogo from "./assets/cpp.svg"
import DartLogo from "./assets/dart.svg"
import JavaLogo from "./assets/java.svg"
import GolangLogo from "./assets/golang.svg"
import JsLogo from "./assets/js.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAddressCard, faBookmark } from "@fortawesome/free-regular-svg-icons"
import React from "react"
export const Resume = () => <>
    <div className="resume-container">
        <CareerSVG />

        <div className="info-container">   
            <InfoItem icon={["fa", "book"]}>
                I am from Cheney, Washington. I graduated from Cheney Highschool with a GPA of 3.8 / 4.0
            </InfoItem>
            <InfoItem icon={faBookmark}>
                Class of 2026 at Washington State University, pursuing a Bachelor in Computer Science.
            </InfoItem>
            <InfoItem className="grid-span-2" icon={faAddressCard}>
                <a href="/contact">Contact me here</a> or at bpschreiber2003@gmail.com
            </InfoItem>
        </div>

        <div className="skills-container">
            <div className="section-header">MY TECH STACK</div>
            <Skills>
                <Skills.Item img={JavaLogo} header="Java" desc="Springboot, JavaFX, Gradle" />
                <Skills.Item img={JsLogo} header="JavaScript" desc="React, AnimeJS" />
                <Skills.Item img={CppLogo} header="C / C++" desc="Qt" />
                <Skills.Item img={GolangLogo} header="Go" desc="Gin, SQL" />
                <Skills.Item img={DartLogo} header="Dart" desc="Flutter" />
            </Skills>
        </div>
    </div>
</>

const InfoItem = (props: { icon: any, children: React.ReactNode, className?:string}) =>
    <div className={"info-item " + props.className}>
        <FontAwesomeIcon className="icon" icon={props.icon} />
        <p>{props.children}</p>
    </div>