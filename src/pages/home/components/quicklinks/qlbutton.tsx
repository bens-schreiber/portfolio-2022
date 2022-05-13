import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import anime from "animejs";
import React from "react";
import When from "../../../../tools/tools";


interface State {
    title: string,
    animating: boolean
}

interface Props {
    title: string
    action: Function
}


export default class QLButton
    extends React.Component<Props> {

    state: State;
    animationRef: React.RefObject<HTMLElement>
    constructor(props: Props) {
        super(props);
        this.animationRef = React.createRef();
        this.state = {
            title: props.title,
            animating: false
        }
    }

    render(): React.ReactElement {
        return <>
            <button onClick={this.onClick} className="ql-btn clickable">

                <When condition={this.state.animating}>
                    <div className="ql-typing-text">
                        {"exec tree ./"}
                        <span className="ql-cursor" ref={this.animationRef} />
                    </div>
                </When>

                <div className="ql-title-text">
                    {this.state.title}
                </div>

                <When condition={!this.state.animating}>
                    <div className="ql-btn-icon">
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                </When>

            </button>
        </>
    }

    private onClick = (): void => {
        this.props.action();
        // if (this.state.animating) return;
        // this.setState({ animating: !this.state.animating });
    }

    componentDidUpdate() {
        this.openQuicklinks();
    }

    private openQuicklinks = (): void => {
        anime.timeline()
            .add({
                targets: this.animationRef.current,
                translateX: [...Array(9)].map((_, i) => ({
                    value: ((i + 1) * 0.57) + "em",
                    duration: 100,
                })),
                easing: "easeInOutBack",
            })
            .add({
                targets: this.animationRef.current,
                duration: 700,
                opacity: [
                    { value: [1, 1] },
                    { value: [0, 0] },
                    { value: [1, 1] },
                    { value: [0, 0] }
                ],
            }).finished.then(() => {
                console.log(this.props.action)
            })
    }
}