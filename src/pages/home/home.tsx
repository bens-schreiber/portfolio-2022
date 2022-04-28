import Logo from '../../assets/logo.svg'
import { FblaSVG, WSULogo } from './components/about/assets';
import { QuicklinkItem, Quicklinks } from './components/quicklinks/quicklinks';
import Contact from '../contact/components/contact';
import { About, Award } from './components/about/about';
export default function Home(): JSX.Element {
    return <>
        <div className="home-page">
            <div className="hp-front-container">
                <div className="hp-front hp-content-width">
                    <img id="hp-front-logo" src={Logo} alt="" />
                    <div className="hp-dropdown-btns">
                        <Quicklinks title="SERVICES">
                            <QuicklinkItem link="/tutor" name="CS TUTORING" />
                        </Quicklinks>
                        <Quicklinks title="PORTFOLIO">
                            <QuicklinkItem link="/portfolio" name="SOFTWARE ENGINEER" />
                            <QuicklinkItem link="/portfolio" name="MOBILE DEVELOPMENT" />
                            <QuicklinkItem link="/portfolio" name="WEBSITE DESIGN" />
                            <QuicklinkItem link="/portfolio" name="GAME DESIGN" />
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