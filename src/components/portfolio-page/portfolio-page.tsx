import anime from 'animejs'
import AboutHeader from '../../assets/about-header.svg'
import WSULogo from '../../assets/wsu-logo.svg'

export default function Portfolio(): JSX.Element {
    return <>
        <div className="portfolio-container">
            <object id="about-header" type="image/svg+xml" onLoad={animate} data={AboutHeader}/>
            {/* <div className="bio-container">
                <div className="bio">a</div>
                <img src={WSULogo} height="100"/>
                <div className="photo2">c</div>
            </div> */}
        </div>
    </>
}

function animate(): void {
    const svg: any = document.querySelector("#about-header");
    const topText = svg.contentDocument.querySelector("#top-text");
    const bottomText = svg.contentDocument.querySelector("#bottom-text");

    interface Career {
        top: string,
        bottom: string
    };

    const careers: Array<Career> = [
        {top: "COMPUTER", bottom: "SCIENTIST"},
        {top: "WEB", bottom: "DESIGNER"},
        {top: "SOFTWARE", bottom: "ENGINEER"},
        {top: "MOBILE", bottom: "DEVELOPER"},
        {top: "GAME", bottom: "DESIGNER"},
        {top: "FULLSTACK", bottom: "ENGINEER"}
    ]

    let index = 0;
    anime.timeline({
        loop: true,
        easing: 'easeInOutSine',
        loopComplete: () => {
            index === (careers.length - 1) ? index = 0 : index++;
            topText.textContent=careers[index].top;
            bottomText.textContent=careers[index].bottom;
        }
    })
    .add({
        targets: topText,
        duration: 500,
        x: 0,
    })
    .add({
        targets: bottomText,
        x: 0,
        endDelay: 1000,
    })
    .add({
        targets: topText,
        duration: 500,
        x: 130,
    })
    .add({
        targets: bottomText,
        duration: 500,
        x: -120,
    })
}