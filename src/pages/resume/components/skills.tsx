import anime from "animejs";
import React from "react"

interface Props {
    children: React.ReactNode[]
}

export default class Skills extends React.Component {

    props: Props;
    animationRef: React.RefObject<HTMLUListElement>;
    constructor(props: Props) {
        super(props);
        this.props = props;
        this.animationRef = React.createRef();
    }

    render = () =>
        <ul ref={this.animationRef} className="skills">
            {this.props.children}
        </ul>

    componentDidMount() {
        this.animationRef.current?.childNodes.forEach((element, index) => {
            anime({
                delay: 1000 + (index * 150),
                loop: true,
                targets: element,
                translateX: [10, -10, 0],
                easing: "easeInOutCirc",
                endDelay: 5000 - (index * 150)
            })
        });
    }
    

    static Item = (props: { img: string, header: string, desc: string }): JSX.Element =>
        <li className="skills-item">
            <img className="skills-icon" src={props.img} alt="" />
            <h1>{props.header}</h1>
            <p>{props.desc}</p>
        </li>
}