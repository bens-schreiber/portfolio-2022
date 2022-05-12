import { Logo2 } from "../assets"
import Contact from "../pages/contact/components/contact"
export default function Footer(): JSX.Element {
    return <>
        <div className="footer-container">
            <img src={Logo2}/>
            <Contact/>
        </div>
    </>
}