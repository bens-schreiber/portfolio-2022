import { AboutCollapsedHeader, WSULogo, FblaSVG } from './assets/index';
import Careers from './careers';
export {About, Award}

interface Props {
    children: JSX.Element[] | JSX.Element
}

function About(props: Props): JSX.Element {
    return <>
        <div className="portfolio-container">
            <Careers />
            <div className="bio-container">
                <img alt="" src={AboutCollapsedHeader} />
                <p>I am an 18 year old Computer Science major who will be attending Washington State University. I love all things engineering and design, putting a significant emphasis on being a <span>full stack engineer</span>.</p>
            </div>
            <div className="awards">
                {props.children}
            </div>
        </div>
    </>
}

interface AwardProps {
    img: string,
    title: string,
    subtitle: string
}
function Award(props: AwardProps): JSX.Element { 
    return <>
        <div className="award">
            <img alt="" src={props.img} />
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    </>
}