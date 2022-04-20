import Logo from '../../assets/logo.svg'
import { Quicklinks, QuicklinkItem, Contact } from './components/main/index'
import Portfolio from './components/about/about';
export default function Home() {
    return <>
        <div className="home">
            <div className="front-page">
                <img id="main-logo" src={Logo} alt="" />
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
                    <Contact />
                </div>
            </div>
            <Portfolio />
            <Contact />
        </div>
    </>
}