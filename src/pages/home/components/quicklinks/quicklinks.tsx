import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import anime from "animejs";
import React from "react";
import { Link } from "react-router-dom";
import When from "../../../../tools/tools";

export default class Quicklink
    extends React.Component {
    props: { title: string, href: string }
    anchorRef: React.RefObject<any>;
    animationRef: React.RefObject<any>;
    state: { animating: boolean }
    constructor(props: { title: string, href: string }) {
        super(props);
        this.props = props;
        this.anchorRef = React.createRef();
        this.animationRef = React.createRef();
        this.state = {
            animating: false
        }
    }

    render = () =>
        <>
            <div className="ql-container">

                <div className="ql-btn clickable" onClick={this.onClick}>

                    <When condition={!this.state.animating}>
                        <div className="ql-btn-icon">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </When>

                    <When condition={this.state.animating}>
                        <div className="ql-typing-text">
                            {"curl https://"}
                            <span className="ql-cursor" ref={this.animationRef} />
                        </div>
                    </When>

                    <div className="ql-title-text">
                        {this.props.title}
                    </div>
                </div>
            </div>
            <Link ref={this.anchorRef} className="hidden" to={this.props.href}>{this.props.title}</Link>
        </>

    private onClick = (): void => {
        if (this.state.animating) return;
        this.setState({ animating: true }, this.openQuicklinks);
    }


    private openQuicklinks = (): void => {
        this.animationRef.current?.scrollIntoView();
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
                this.anchorRef.current.click();

                // When you click the back arrow to return to the previous page the state is still animating, so even though
                // we are navigating to a new page, this should still be ran.
                this.setState({animating: false})
            });
    }
}


