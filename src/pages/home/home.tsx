import Contact from "../contact/components/contact";
import Quicklinks, { QLItem } from "./components/quicklinks/quicklinks";
import { Logo, Logo1 } from "../../assets";
export default function Home(): JSX.Element {
    return <>
        <div className="hp-container">
            <div className="hp-items hp-content-width">

                <img src={Logo} alt=""/>

                <div className="hp-dropdown-btns">

                    <Quicklinks title="SERVICES">
                        <QLItem link="/tutor" name="CS TUTORING" />
                        <QLItem link="/tutor" name="SCHEDULE TUTORING" />
                    </Quicklinks>

                    <Quicklinks title="RESUME">
                        <QLItem link="/portfolio" name="RESUME" />
                             <QLItem link="/portfolio" name="ABOUT ME" />
                        <QLItem link="/portfolio" name="CONTACT" />
                    </Quicklinks>

                    <Quicklinks title="PORTFOLIO">
                        <QLItem link="/portfolio" name="SOFTWARE ENGINEER" />
                        <QLItem link="/portfolio" name="MOBILE DEVELOPMENT" />
                        <QLItem link="/portfolio" name="WEBSITE DESIGN" />
                        <QLItem link="/portfolio" name="GAME DESIGN" />
                    </Quicklinks>

                </div>

                <Contact />

            </div>
        </div>
    </>
}