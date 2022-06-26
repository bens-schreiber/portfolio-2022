import Contact from "../contact/components/contact";
import Quicklinks, { QLItem } from "./components/quicklinks/quicklinks";
import { Logo } from "../../assets";
import { CareerSVG } from "../resume/assets";
export default function Home(): JSX.Element {
    return <>
        <div className="hp-container">
            <div className="section-grid">

                <img id="logo" src={Logo} alt=""/>

                <div className="hp-dropdown-btns section-inner-grid">

                    <CareerSVG/>

                    <Quicklinks title="HIRE ME">
                        <QLItem link="/tutor" name="CS TUTORING" />
                        <QLItem link="/resume" name="RESUME" />
                        <QLItem link="/contact" name="CONTACT" />
                    </Quicklinks>

                    <Quicklinks title="ABOUT ME">
                        <QLItem link="/portfolio" name="RESUME" />
                        <QLItem link="/portfolio" name="MY PROJECTS" />
                    </Quicklinks>

                    <Quicklinks title="MY PORTFOLIO">
                        <QLItem link="/portfolio" name="SOFTWARE ENGINEER" />
                        <QLItem link="/portfolio" name="MOBILE DEVELOPMENT" />
                        <QLItem link="/portfolio" name="WEBSITE DESIGN" />
                    </Quicklinks>

                    <Contact />
                </div>

            </div>
        </div>
    </>
}