import React, { Children } from 'react';
interface PortfolioProps {
    color: string;
    path: string;
    title: string;
    children: React.ReactNode[] | React.ReactNode
}

interface Props {
    children: React.ReactNode[] | React.ReactNode;
}

interface ListItem {
    header: string,
    text: string
}

class PItem extends React.Component<PortfolioProps> {
    color: string;
    path: string;
    title: string;
    state: Props;
    dValue: string;
    constructor(props: PortfolioProps) {
        super(props);
        this.color = props.color;
        this.path = props.path;
        this.title = props.title
        this.dValue = props.title.replace(/\s/g, '')
        this.state = {
            children: props.children
        }
    }

    render() {
        return <div className="port-item">
            <PItem.Header title={this.title} />
            <this.Section>
                {this.props.children}
            </this.Section>

        </div>
    }

    static Header(props: { title: string }): JSX.Element {
        return <div className="port-header">{props.title}</div>
    }

    private Section = (props: { children: React.ReactNode }): JSX.Element => {
        return <div className="port-sec-container">

            <div className="port-sec-logo">
                <img alt="" src={this.path} />
            </div>

            <button onClick={this.expandClicked} data-value={this.dValue} className="port-expand-button">CLICK TO EXPAND!</button>

            <input data-value={this.dValue} id="collapse" type="checkbox" />
            <div className="collapsible">
                <div className="port-display-all">
                    {props.children}
                </div>
            </div>

        </div>
    }

    static ImageContainer = (props: { path: string }) => {
        return <div className="port-display-box">
            <img alt="" src={props.path} />
        </div>
    }

    static ImageTextContainer = (props: { path: string, children: React.ReactNode }) => {
        return <div className="port-text-container port-display-box">
            <img alt="" src={props.path} />
            <p>{props.children}</p>
        </div>
    }

    static TextContainer = (props: { header: string, children: React.ReactNode }) => {
        return <div className="port-text-container port-display-box">
            <h1>{props.header}</h1>
            <p>{props.children}</p>
        </div>
    }

    static ListContainer = (props: { children: ListItem[] }) => {
        return <ul className="port-list">
            {props.children.map((item, index) => {
                return <>
                    <li className="port-list-item">
                        <span className="port-list-index">
                            {index + 1}
                        </span>
                        <div className="port-list-text port-display-box">
                            <h1>
                                {props.children[index].header}
                            </h1>
                            <p>
                                {props.children[index].text}
                            </p>
                        </div>
                    </li>
                </>
            })}
        </ul>
    }

    static VideoContainer = (props: { path: string }) => {
        return <video className="port-display-box" controls>
            <source src={props.path} />
            Sorry, your browser doesn't support embedded videos.
        </video>
    }

    private expandClicked = (): void => {
        var collapse: HTMLInputElement = (document.querySelector(`#collapse[data-value=${this.dValue}]`) as HTMLInputElement);
        var btn: any = document.querySelector(`.port-expand-button[data-value=${this.dValue}]`);
        btn.textContent = collapse.checked ? "CLICK TO EXPAND!" : "CLICK TO COLLAPSE";
        collapse.checked = !collapse.checked;
    }
}

export { PItem }
