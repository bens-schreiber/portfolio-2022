import { faBook, faClock, faDollarSign, faMapLocation, faPerson, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ApiCalendar from "react-google-calendar-api";
import { ContactForm } from "../contact/contact-page";
import { Quote } from "./assets";
 

export class TutorPage extends React.Component {

    render = () => <div className="tutor-container section-grid">
    <img src={Quote} alt="" />
    <ul className="facts section-inner-grid">
        <li>
            <FontAwesomeIcon className="icon" icon={faPerson} />
            <h1>Audience</h1>
            <p>Students of any age, and expierence</p>
        </li>

        <li>
            <FontAwesomeIcon className="icon"  icon={faBook} />
            <h1>Why Ben?</h1>
            <p>I teach Computer Science in a unique and fun way, helping you explore the science.</p>
        </li>

        <li>
            <FontAwesomeIcon className="icon"  icon={faMapLocation} />
            <h1>Location</h1>
            <p>In person meetings, or zoom calls</p>
        </li>

        <li>
            <FontAwesomeIcon className="icon"  icon={faDollarSign} />
            <h1>Price</h1>
            <p>$25 Hourly Rate</p>
        </li>

        <li>
            <FontAwesomeIcon className="icon"  icon={faBook} />
            <h1>Subjects</h1>
            <p>From "Hello World" to Datastructures and Algorithms</p>
        </li>

        <li>
            <FontAwesomeIcon className="icon"  icon={faClock} />
            <h1>Availability</h1>
            <p>Sign up with the Calendar!</p>
        </li>
    </ul>
    <h1 className="section-header">CONTACT ME</h1>
    <ContactForm/>
</div>
}