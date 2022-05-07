import anime from 'animejs'
import Logo2 from '../assets/logo2.svg'
export default function TopNavBar(): JSX.Element {
    return <>
        <div className="tnb">

            <div className="tnb-container">
                <a href="/"><img id="tnb-logo" src={Logo2} alt="" /></a>
                <label htmlFor="tnb-dropdown-toggle" id="tnb-dropdown-toggle-icon" className="clickable" onClick={onClick}>
                    &#9776;
                </label>
            </div>

            <input type="checkbox" id="tnb-dropdown-toggle" />
            <div className="tnb-nav tnb-nav-animate-dropdown">
                <nav className="tnb-links" >
                    <h1><a href="/">HOME</a></h1>
                    <ul className="tnb-tree-stem">
                        <li className="tnb-branch"><a href="/contact">CONTACT</a></li>
                        <li className="tnb-branch"><a href="/">ABOUT</a></li>
                        <li className="tnb-branch"><a href="/tutor">CS TUTORING</a></li>
                        <li className="tnb-branch"><a href="/portfolio">PORTFOLIO</a></li>
                    </ul>
                </nav>
            </div>

        </div>
    </>
}

function onClick() {
    anime({
        targets: "#tnb-dropdown-toggle-icon",
        rotate: [0, 360],
        easing: "easeInOutSine",
        duration: 400,
    })
}