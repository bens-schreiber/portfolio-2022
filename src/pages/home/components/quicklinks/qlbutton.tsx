import React from 'react';
import anime from 'animejs';
import { When } from '../../../../tools/tools';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

interface State {
    title: string,
    animating: boolean
}


export default class QLButton
    extends React.Component<{ title: string }> {
    state: State;
    animationRef: React.RefObject<HTMLElement>
    constructor(props: { title: string }) {
        super(props);
        this.animationRef = React.createRef();
        this.state = {
            title: props.title,
            animating: false
        }
    }

    render(): React.ReactElement {
        return <>
            <button onClick={this.onClick} className="ql-btn">

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
        if (this.state.animating) return;
        this.setState({ animating: !this.state.animating });
    }

    componentDidUpdate() {
        this.state.animating ? this.openQuicklinks() : this.closeQuicklinks();
    }

    private openQuicklinks = (): void => {
        var cursor = "." + this.animationRef.current?.className;    // Format for CSS queries
        anime.timeline()
            .add({
                targets: cursor,
                translateX: [...Array(9)].map((_, i) => ({
                    value: ((i + 1) * 0.57) + "em",
                    duration: 100,
                })),
                easing: "easeInOutBack",
            })
            .add({
                targets: cursor,
                duration: 700,
                opacity: [
                    { value: [1, 1] },
                    { value: [0, 0] },
                    { value: [1, 1] },
                    { value: [0, 0] }
                ],
            })
            .finished.then(() => {
                this.setState({ animating: false });
            })
    }

    private closeQuicklinks = (): void => {

    }


}