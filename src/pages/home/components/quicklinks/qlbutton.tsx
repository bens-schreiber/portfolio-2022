import React from 'react';
import anime from 'animejs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
interface Props {
    title: string;
}

interface State {
    title: string,
    collapsed: boolean
    animating: boolean
}

export default class QLButton extends React.Component<Props> {
    state: State;
    constructor(props: Props) {
        super(props);
        this.state = {
            title: props.title,
            collapsed: true,
            animating: false
        }
    }

    private path = (path: string = ""): string => `.ql-dropdown-btn[data-title=${this.props.title}] ` + path;

    render(): JSX.Element {
        return <>
            <button onClick={this.onClick} data-title={this.props.title} className="ql-dropdown-btn">
                <div className="typing-text">
                    {"exec tree ./"}
                    <span className="cursor" />
                </div>
                <div className="title-text">
                    {this.state.title}
                </div>
                <div className="ql-dropdown-icon">
                    <FontAwesomeIcon icon={faChevronDown}/>
                </div>
            </button>
        </>
    }

    private onClick = (): void => {
        if (this.state.animating) return;
        this.setState({ animating: this.state.collapsed, collapsed: !this.state.collapsed });
        this.state.collapsed ? this.openQuicklinks() : this.closeQuicklinks();
    }

    private openQuicklinks = (): void => {
        anime.timeline()
            .add({
                targets: this.path(".cursor"),
                translateX: [...Array(9)].map((_, i) => ({
                    value: ((i + 1) * 0.57) + "em",
                    duration: 100,
                })),
                easing: "easeInOutBack",
                begin: () => {
                    this.setDisplay(".typing-text", "inline");
                    this.setDisplay(".ql-dropdown-icon", "none")
                },
            })
            .add({
                targets: this.path(".cursor"),
                duration: 700,
                opacity: [
                    { value: [1, 1] },
                    { value: [0, 0] },
                    { value: [1, 1] },
                    { value: [0, 0] }
                ],
            })
            .finished.then(() => {
                // displays all of the portfolio links
                (document.querySelector(`#ql-dropdown-toggle[data-id=${this.props.title}]`) as HTMLInputElement).checked = true;
                this.setDisplay(".typing-text", "none");
                document.querySelector(this.path())?.scrollIntoView();
                this.setState({animating: false});
            })
    }

    private closeQuicklinks = (): void => {
        this.setDisplay(".ql-dropdown-icon", "grid");
        (document.querySelector(`#ql-dropdown-toggle[data-id=${this.props.title}]`) as HTMLInputElement).checked = false;
    }

    private setDisplay(query: string, value: string): void {
        (document.querySelector(this.path(query))! as HTMLElement).style.display = value;
    }


}