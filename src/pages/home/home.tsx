import Logo from '../../assets/logo.svg'
import { FblaSVG, WSULogo } from './components/about/assets';
import { Quicklinks, QuicklinkItem, Contact } from './components/main/index'
import { About, Award } from './components/about/about';
export default function Home(): JSX.Element {
    return <>
        <div className="home">
            <div className="front-page">
                <div className="main-logo-container">
                <img id="main-logo" src={Logo} alt="" />
                </div>

                <div className="all-quicklinks">
                    <Quicklinks title="SERVICES">
                        <QuicklinkItem link="#" name="CS TUTORING" />
                        <QuicklinkItem link="#" name="DISCORD BOTS" />
                    </Quicklinks>
                    <Quicklinks title="PORTFOLIO">
                        <QuicklinkItem link="#" name="Software Engineer" />
                        <QuicklinkItem link="#" name="Mobile Development" />
                        <QuicklinkItem link="#" name="Website Design" />
                        <QuicklinkItem link="#" name="Game Design" />
                    </Quicklinks>
                </div>

                <Contact />

            </div>
            <About>
                <Award img={WSULogo} title="WSU Computer Science" subtitle="Class of 2026" />
                <Award img={FblaSVG} title="National Champion" subtitle="2021 Coding & Programming" />
                <Award img={FblaSVG} title="WA State Champion" subtitle="2021 Coding & Programming" />
                <Award img={FblaSVG} title="Spokane Regional Champion" subtitle={"2022 Website Design, UX Design"} />
            </About>
            <Contact />
        </div>
    </>
}