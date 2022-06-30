import React from "react";
import anime from "animejs";
export default class CareerSVG extends React.Component {

  topText: React.RefObject<SVGTSpanElement>;
  bottomText: React.RefObject<SVGTSpanElement>;
  constructor(props = {}) {
    super(props);
    this.topText = React.createRef();
    this.bottomText = React.createRef();
  }

  render = () =>
    <svg id="careers" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236.43 95.18">
      <defs>
        <style type="text/css">{`
      @font-face {
        font - family: BoldTestament;
        src: url("data:application/font-truetype;charset=utf-8;base64,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");
      }

      .rect {
        fill: var(--primary-green-color);
      }

      .b {
        fill: var(--white-color);
      }

      .c {
        fill: var(--background-color);
        font-family: BoldTestament;
        font-size: 48.23px;
        user-select: none;
    }`}
        </style>
      </defs>
      <rect className="rect" x="118.77" y="5.69" width="120" height="81.19" />
      <text className="c" transform="translate(121.28 41) scale(.96 1)">
        <tspan ref={this.topText} id="top-text" x="130" y="0">COMPUTER </tspan>
        <tspan ref={this.bottomText} id="bottom-text" x="-130" y="44.52">SCIENTIST</tspan>
      </text>
      <g>
        <path className="b" d="M4.69,24.82v14.06H0V6.07H4.69v14.06h2.34V6.07h4.69V38.88H7.03v-14.06h-2.34Z" />
        <path className="b" d="M18.75,6.07V38.88h-4.69V6.07h4.69Z" />
        <path className="b" d="M23.44,38.88h-2.34v-4.69h4.69v4.69c0,1.56-.39,2.73-1.17,3.52s-1.95,1.17-3.52,1.17v-2.34c1.56,0,2.34-.78,2.34-2.34Z" />
        <path className="b" d="M39.84,6.07V38.88h-4.69V6.07h4.69Z" />
        <path className="b" d="M44.53,10.75h-2.34V6.07h4.69v4.69c0,1.56-.39,2.73-1.17,3.52s-1.95,1.17-3.52,1.17v-2.34c1.56,0,2.34-.78,2.34-2.34Z" />
        <path className="b" d="M55.66,35.36l-1.76-10.55v14.06h-4.69V6.07h4.69l2.34,14.06,2.34-14.06h4.69V38.88h-4.69v-14.06l-1.76,10.55h-1.17Z" />
        <path className="b" d="M72.66,38.88V6.07h5.86c1.62,0,3.01,.57,4.15,1.71s1.71,2.52,1.71,4.15v7.03c0,1.33-.38,2.5-1.15,3.52,.77,1.02,1.15,2.19,1.15,3.52v7.03c0,1.62-.57,3.01-1.71,4.15s-2.52,1.71-4.15,1.71h-5.86Zm4.69-28.12v9.38h1.17c.33,0,.61-.11,.83-.34s.34-.5,.34-.83v-7.03c0-.33-.11-.61-.34-.83s-.5-.34-.83-.34h-1.17Zm0,14.06v9.38h1.17c.33,0,.61-.11,.83-.34s.34-.5,.34-.83v-7.03c0-.33-.11-.61-.34-.83s-.5-.34-.83-.34h-1.17Z" />
        <path className="b" d="M91.41,34.19h4.69v4.69h-9.38V6.07h9.38v4.69h-4.69v9.38h3.52v4.69h-3.52v9.38Z" />
        <path className="b" d="M103.12,24.82v14.06h-4.69V6.07h4.69l2.34,14.06V6.07h4.69V38.88h-4.69l-2.34-14.06Z" />
        <path className="b" d="M11.72,59.93v2.34l-4.69,1.17v-3.52c0-.33-.11-.61-.34-.83s-.5-.34-.83-.34-.61,.11-.83,.34-.34,.5-.34,.83v7.03c0,.33,.11,.61,.34,.83s.5,.34,.83,.34c1.62,0,3.01,.57,4.15,1.71s1.71,2.52,1.71,4.15v7.03c0,1.62-.57,3.01-1.71,4.15s-2.52,1.71-4.15,1.71-3.01-.57-4.15-1.71-1.71-2.52-1.71-4.15v-2.34l4.69-1.17v3.52c0,.33,.11,.61,.34,.83s.5,.34,.83,.34,.61-.11,.83-.34,.34-.5,.34-.83v-7.03c0-.33-.11-.61-.34-.83s-.5-.34-.83-.34c-1.62,0-3.01-.57-4.15-1.71s-1.71-2.52-1.71-4.15v-7.03c0-1.62,.57-3.01,1.71-4.15s2.52-1.71,4.15-1.71,3.01,.57,4.15,1.71,1.71,2.52,1.71,4.15Z" />
        <path className="b" d="M25.78,59.93v2.34l-4.69,1.17v-3.52c0-.33-.11-.61-.34-.83s-.5-.34-.83-.34-.61,.11-.83,.34-.34,.5-.34,.83v21.09c0,.33,.11,.61,.34,.83s.5,.34,.83,.34,.61-.11,.83-.34,.34-.5,.34-.83v-3.52l4.69,1.17v2.34c0,1.62-.57,3.01-1.71,4.15s-2.52,1.71-4.15,1.71-3.01-.57-4.15-1.71-1.71-2.52-1.71-4.15v-21.09c0-1.62,.57-3.01,1.71-4.15s2.52-1.71,4.15-1.71,3.01,.57,4.15,1.71,1.71,2.52,1.71,4.15Z" />
        <path className="b" d="M32.81,72.82v14.06h-4.69V54.07h4.69v14.06h2.34v-14.06h4.69v32.81h-4.69v-14.06h-2.34Z" />
        <path className="b" d="M46.88,72.82v14.06h-4.69V54.07h5.86c1.62,0,3.01,.57,4.15,1.71s1.71,2.52,1.71,4.15v7.03c0,1.33-.38,2.5-1.15,3.52,.77,1.02,1.15,2.19,1.15,3.52v12.89h-4.69v-12.89c0-.33-.11-.61-.34-.83s-.5-.34-.83-.34h-1.17Zm0-14.06v9.38h1.17c.33,0,.61-.11,.83-.34s.34-.5,.34-.83v-7.03c0-.33-.11-.61-.34-.83s-.5-.34-.83-.34h-1.17Z" />
        <path className="b" d="M60.94,82.19h4.69v4.69h-9.38V54.07h9.38v4.69h-4.69v9.38h3.52v4.69h-3.52v9.38Z" />
        <path className="b" d="M72.66,54.07v32.81h-4.69V54.07h4.69Z" />
        <path className="b" d="M75,86.88V54.07h5.86c1.62,0,3.01,.57,4.15,1.71s1.71,2.52,1.71,4.15v7.03c0,1.33-.38,2.5-1.15,3.52,.77,1.02,1.15,2.19,1.15,3.52v7.03c0,1.62-.57,3.01-1.71,4.15s-2.52,1.71-4.15,1.71h-5.86Zm4.69-28.12v9.38h1.17c.33,0,.61-.11,.83-.34s.34-.5,.34-.83v-7.03c0-.33-.11-.61-.34-.83s-.5-.34-.83-.34h-1.17Zm0,14.06v9.38h1.17c.33,0,.61-.11,.83-.34s.34-.5,.34-.83v-7.03c0-.33-.11-.61-.34-.83s-.5-.34-.83-.34h-1.17Z" />
        <path className="b" d="M93.75,82.19h4.69v4.69h-9.38V54.07h9.38v4.69h-4.69v9.38h3.52v4.69h-3.52v9.38Z" />
        <path className="b" d="M105.47,72.82v14.06h-4.69V54.07h5.86c1.62,0,3.01,.57,4.15,1.71s1.71,2.52,1.71,4.15v7.03c0,1.33-.38,2.5-1.15,3.52,.77,1.02,1.15,2.19,1.15,3.52v12.89h-4.69v-12.89c0-.33-.11-.61-.34-.83s-.5-.34-.83-.34h-1.17Zm0-14.06v9.38h1.17c.33,0,.61-.11,.83-.34s.34-.5,.34-.83v-7.03c0-.33-.11-.61-.34-.83s-.5-.34-.83-.34h-1.17Z" />
      </g>
    </svg>

  componentDidMount = () => this.animate();


  animate = () => {

    const careers: Array<{ top: string, bottom: string }> = [
      { top: "COMPUTER", bottom: "SCIENTIST" },
      { top: "WEB", bottom: "DESIGNER" },
      { top: "SOFTWARE", bottom: "ENGINEER" },
      { top: "MOBILE", bottom: "DEVELOPER" },
      { top: "GAME", bottom: "DESIGNER" },
      { top: "FULLSTACK", bottom: "ENGINEER" }
    ]

    const topText = this.topText.current;
    const bottomText = this.bottomText.current;
    var index = 0;
    anime.timeline({
      loop: true,
      easing: 'easeInOutSine',
      loopComplete: () => {
        index === (careers.length - 1) ? index = 0 : index++;
        if (topText == null || bottomText == null) return
        topText.textContent = careers[index].top;
        bottomText.textContent = careers[index].bottom;
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
}
