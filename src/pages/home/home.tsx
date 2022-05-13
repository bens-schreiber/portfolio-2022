import Contact from "../contact/components/contact";
import { About, Award } from "./components/about/about";
import { WSULogo, FblaSVG } from "./components/about/assets";
import Quicklinks, { QLItem } from "./components/quicklinks/quicklinks";
import { Logo1 } from "../../assets";
export default function Home(): JSX.Element {
    return <>
        <div className="home-page">
            <div className="hp-front-container">
                <div className="hp-front hp-content-width">
                    <img id="hp-front-logo" src={Logo1} alt="" />
                    <div className="hp-dropdown-btns">

                        <Quicklinks title="SERVICES">
                            <QLItem link="/tutor" name="CS TUTORING" />
                            <QLItem link="/tutor" name="SCHEDULE TUTORING" />
                        </Quicklinks>

                        <Quicklinks title="PORTFOLIO">
                            <QLItem link="/portfolio" name="SOFTWARE ENGINEER" />
                            <QLItem link="/portfolio" name="MOBILE DEVELOPMENT" />
                            <QLItem link="/portfolio" name="WEBSITE DESIGN" />
                            <QLItem link="/portfolio" name="GAME DESIGN" />
                        </Quicklinks>

                        <Contact />
                    </div>
                </div>
            </div>
            <About>
                <Award img={WSULogo} title="WSU Computer Science" subtitle="Class of 2026" />
                <Award img={FblaSVG} title="National Champion" subtitle="2021 Coding & Programming" />
                <Award img={FblaSVG} title="WA State Champion" subtitle="2021 Coding & Programming" />
                <Award img={FblaSVG} title="WA State Champion" subtitle="2022 Website Design" />
                <Award img={FblaSVG} title="Spokane Regional Champion" subtitle={"2022 Website Design, UX Design"} />
            </About>
        </div>
    </>
}