import { UnanimatedContact } from "../contact/components/contact";
import Quicklink from "./components/quicklinks/quicklinks";
import { Logo } from "../../assets";
import { CareerSVG } from "../resume/assets";
import React from "react";
export default function Home(): JSX.Element {
    return <>
        <div className="hp-container">
            <div className="section-grid">

                <img id="logo" src={Logo} alt="" />

                <div className="hp-dropdown-btns section-inner-grid">

                    <CareerSVG />


                    <Quicklink title="CONTACT ME" href="/contact" />

                    <Quicklink title="PORTFOLIO" href="/portfolio" />

                    <Quicklink title="RESUME" href="/resume" />

                    <UnanimatedContact />
                </div>

            </div>
        </div>
    </>
}
