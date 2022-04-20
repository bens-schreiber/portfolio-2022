import anime from "animejs";
import { AboutCollapsedHeader, AboutExpandedHeader, MyPhoto, WSULogo, FblaSVG} from './assets/index';
import Careers from './careers';

export default function About(): JSX.Element {
    return <>
        <div className="portfolio-container">
            <Careers />
            <div className="bio-container">
                <img src={AboutCollapsedHeader}/>
                <p>I am an 18 year old Computer Science major who will be attending Washington State University. I love all things engineering and design, putting a significant emphasis on being a <span>full stack engineer</span>.</p>
            </div>
            <div className="awards">
                <Award img={WSULogo} title="WSU Computer Science" subtitle="Class of 2026"/>
                <Award img={FblaSVG} title="National Champion" subtitle="2021 Coding & Programming"/>
                <Award img={FblaSVG} title="WA State Champion" subtitle="2021 Coding & Programming"/>
                <Award img={FblaSVG} title="Spokane Regional Champion" subtitle={"2022 Website Design, UX Design"}/>
            </div>
        </div>
    </>
}

interface Props {
    img: string,
    title: string,
    subtitle: string
}
function Award(props: Props): JSX.Element {
    return <>
        <div className="award">
            <img src={props.img}/>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    </>
}