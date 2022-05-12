import React from 'react';
import When from '../../../../tools/tools'
interface PortfolioProps {
    img: string;
    title: string;
    id: string;
    children: React.ReactNode[] | React.ReactNode
}

class PortItem extends React.Component<PortfolioProps> {

    props: PortfolioProps;
    state: { collapsed: boolean }
    buttonRef: React.RefObject<HTMLButtonElement>
    constructor(props: PortfolioProps) {
        super(props);
        this.state = { collapsed: true }
        this.buttonRef = React.createRef();
        this.props = props;
    }

    render = () =>
        <>
            <PortItem.Header>
                {this.props.title}
            </PortItem.Header>

            <div className="port-sec-container">
                <img alt="" src={this.props.img} id={this.props.id + "-logo"} />
            </div>

            <button ref={this.buttonRef} className="port-expand-button" onClick={this.expandClicked}>CLICK TO EXPAND!</button>

            <When condition={!this.state.collapsed}>
                <div className="collapsible">
                    <div className="port-display-all">
                        {this.props.children}
                    </div>
                </div>
            </When>
        </>


    private expandClicked = (): void => {
        this.setState({ collapsed: !this.state.collapsed });
        if (this.buttonRef.current == null) return
        this.state.collapsed ?
            this.buttonRef.current.textContent = "CLICK TO COLLAPSE!"
            : this.buttonRef.current.textContent = "CLICK TO EXPAND!"
    }


    static Header(props: { children: React.ReactNode }): JSX.Element {
        return <div className="port-header grid-span-2">{props.children}</div>
    }

    static ImageContainer = (props: { path: string }) => {
        return <div className="port-img-container">
            <img alt="" src={props.path} />
        </div>
    }

    static ImageTextContainer = (props: { path: string, children: React.ReactNode }) => {
        return <div className="port-text-container port-display-box">
            <img alt="" src={props.path} />
            <p>{props.children}</p>
        </div>
    }


    static LargeTextContainer = (props: { children: React.ReactNode }) => {
        return <div className="port-text-container port-display-box grid-span-2">
            <p>{props.children}</p>
        </div>
    }


    static TextContainer = (props: { title: string, children: React.ReactNode }) => {
        return <div className="port-text-container port-display-box">
            <h1>{props.title}</h1>
            <p>{props.children}</p>
        </div>
    }

    static ListContainer = (props: { children: { title: string, text: string }[] }) => {
        return <ul className="port-list grid-span-2">
            {props.children.map((item, index) => {
                return <>
                    <li className="port-list-item">
                        <span className="port-list-index">
                            {index + 1}
                        </span>
                        <div className="port-list-text port-display-box">
                            <h1>
                                {props.children[index].title}
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
}

export { PortItem }
