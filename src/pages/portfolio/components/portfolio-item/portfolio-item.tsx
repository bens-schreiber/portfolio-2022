import React from 'react';
interface PortfolioProps {
    color: string;
    path: string;
    title: string;
    children: React.ReactNode[] | React.ReactNode
}

interface Props {
    children: React.ReactNode[] | React.ReactNode;
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

    static ImageTextContainer = (props: {path: string, children: React.ReactNode}) => {
        return <div className="port-text-container port-display-box">
            <img alt="" src={props.path}/>
            <p>{props.children}</p>
        </div>
    }

    static TextContainer = (props: {header: string, children: React.ReactNode}) => {
        return <div className="port-text-container port-display-box">
            <h1>{props.header}</h1>
            <p>{props.children}</p>
        </div>
    }

    private expandClicked = (): void => {
        var collapse: HTMLInputElement = (document.querySelector(`#collapse[data-value=${this.dValue}]`) as HTMLInputElement);
        var btn: any = document.querySelector(`.port-expand-button[data-value=${this.dValue}]`);
        btn.textContent = collapse.checked ? "CLICK TO EXPAND!" : "CLICK TO COLLAPSE";
        collapse.checked = !collapse.checked;
    }
}

export { PItem }
