import Logo2 from '../assets/logo2.svg'
export default function TopNavBar(): JSX.Element {
    return <>
        <div className="tnb">

            <div className="tnb-container">
                <img id="tnb-logo" className="tnb-clickable" src={Logo2} alt="" />
                <label htmlFor="tnb-dropdown-toggle" className="tnb-dropdown-toggle-icon tnb-clickable">
                    &#9776;
                </label>
            </div>

            <input type="checkbox" id="tnb-dropdown-toggle" />
            <div className="tnb-nav tnb-animate-dropdown">
                <nav className="tnb-links" >
                    <h1><a href="/">HOME</a></h1>
                    <ul className="tnb-tree-stem">
                        <li className="tnb-branch"><a href="/contact">CONTACT</a></li>
                        <li className="tnb-branch"><a href="/">ABOUT</a></li>
                        <li className="tnb-branch"><a href="/tutor">CS TUTORING</a></li>
                        <li className="tnb-branch"><a href="#">DISCORD BOTS</a></li>
                        <li className="tnb-branch"><a href="/portfolio">PORTFOLIO</a></li>
                    </ul>
                </nav>
            </div>

        </div>
    </>
}