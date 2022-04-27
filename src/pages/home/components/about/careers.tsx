import anime from 'animejs'
import {CareerSVG} from './assets/index';

interface Career {
    top: string,
    bottom: string
};

export default function Careers() {
    return <>
        <object id="careers" type="image/svg+xml" onLoad={animate} data={CareerSVG}>lol</object>
    </>
}

function animate(): void {
    const svg: any = document.querySelector("#careers");
    const topText = svg.contentDocument.querySelector("#top-text");
    const bottomText = svg.contentDocument.querySelector("#bottom-text");

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