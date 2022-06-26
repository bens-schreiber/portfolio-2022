import anime from 'animejs'
import React from 'react'
// import { Logo2 } from "../assets/index"
export default class TopNavBar extends React.Component {
    menuRef: React.RefObject<HTMLLabelElement>
    constructor(props = {}) {
        super(props);
        this.menuRef = React.createRef();
    }
    render = () =>
        <>
            <div className="tnb">

                <div className="tnb-container">
                    <label ref={this.menuRef} htmlFor="tnb-dropdown-toggle" id="tnb-dropdown-toggle-icon"
                        onClick={() => anime({
                            targets: this.menuRef.current,
                            rotate: [0, 360],
                            easing: "easeInOutSine",
                            duration: 400,
                        })}>

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
