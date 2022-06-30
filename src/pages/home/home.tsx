import {UnanimatedContact } from "../contact/components/contact";
import Quicklinks, { QLItem } from "./components/quicklinks/quicklinks";
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


                    <Quicklinks title="HIRE ME">
                            <QLItem link="/resume" name="RESUME" />
                            <QLItem link="/portfolio" name="MY PROJECTS" />
                            <QLItem link="/contact" name="CONTACT" />
                        </Quicklinks>

                        <Quicklinks title="TUTORING">
                            <QLItem link="/tutor" name="CS TUTORING" />
                            <QLItem link="/contact" name="CONTACT" />
                        </Quicklinks>

                        <Quicklinks title="MY PORTFOLIO">
                            <QLItem link="/portfolio" name="SOFTWARE ENGINEER" />
                            <QLItem link="/portfolio" name="MOBILE DEVELOPMENT" />
                            <QLItem link="/portfolio" name="WEBSITE DESIGN" />
                        </Quicklinks>

                    <UnanimatedContact />
                </div>

            </div>
        </div>
    </>
}
