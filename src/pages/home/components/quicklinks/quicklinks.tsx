import React from "react";
import QLButton from './qlbutton';
import { When } from '../../../../tools/tools';
interface Props {
    title: string;
    children: React.ReactNode[]
}

interface State {
    collapsed: boolean;
}

export class Quicklinks
    extends React.Component<Props> {
    props: Props;
    state: State;
    constructor(props: Props) {
        super(props);
        this.props = props;

        //Bind the collapse method to this component
        this.collapse = this.collapse.bind(this);

        this.state = {
            collapsed: true
        }
    }

    private QuickLinkExpanded = () =>
        <>
            <ul className="ql-expanded-container ql-links ql-tree-stem">
                <button className="ql-expanded-title clickable" onClick={this.collapse}>{this.props.title}</button>
                {this.props.children}
            </ul>
        </>

    public static Item = (props: {link: string, name: string}) =>
        <>
            <li className="ql-item ql-tree-branch"><a href={props.link}>{props.name}</a></li>
        </>

    collapse = () => this.setState({collapsed: !this.state.collapsed})

    render = () =>
        <>
            <div className="ql-container">

                <When condition={this.state.collapsed}>
                    <QLButton title={this.props.title} action={this.collapse} />
                </When>

                <When condition={!this.state.collapsed}>
                    <this.QuickLinkExpanded />
                </When>

            </div>
        </>
}


