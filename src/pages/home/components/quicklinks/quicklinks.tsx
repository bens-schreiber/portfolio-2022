import React from "react";
import When from "../../../../tools/tools";
import QLButton from "./qlbutton";


interface Props {
    title: string;
    children: React.ReactNode[]
}

interface State {
    collapsed: boolean;
}

//TODO: text jiggle to emphasize clickable

const QuickLinkExpanded = (props: { title: string, children: React.ReactNode[], action: Function, ref_: React.RefObject<any> }) =>
    <>
        <ul className="ql-expanded-container ql-links ql-tree-stem">
            <button ref={props.ref_} className="ql-expanded-title clickable"
                onClick={() => props.action()}>{props.title}
            </button>
            {props.children}
        </ul>
    </>

export const QLItem = (props: { link: string, name: string }) =>
    <>
        <li className="ql-item ql-tree-branch"><a href={props.link}>{props.name}</a></li>
    </>

export default class Quicklinks
    extends React.Component<Props> {
    props: Props;
    state: State;
    ref: React.RefObject<any>;
    constructor(props: Props) {
        super(props);
        this.props = props;
        this.ref = React.createRef();
        this.collapse = this.collapse.bind(this);

        this.state = {
            collapsed: true
        }
    }

    collapse = () => 
        this.setState({ collapsed: !this.state.collapsed });

    render = () =>
        <>
            <div className="ql-container">

                <When condition={this.state.collapsed}>
                    <QLButton title={this.props.title} action={this.collapse} />
                </When>

                <When condition={!this.state.collapsed}>
                    <QuickLinkExpanded ref_={this.ref} title={this.props.title} action={this.collapse}>
                        {this.props.children}
                    </QuickLinkExpanded>    
                </When>

            </div>
        </>

    componentDidUpdate = () => !this.state.collapsed ? this.ref.current?.scrollIntoView() : null;
}


