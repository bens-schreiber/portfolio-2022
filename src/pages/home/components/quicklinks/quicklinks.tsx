import React from "react";
import QLButton from './qlbutton';
interface Item {
    name: string;
    link: string;
}

interface Props {
    title: string;
    children: React.ReactNode[] | React.ReactNode
}

export const QuicklinkItem = ({ name, link }: Item) => {
    return <>
        <li className="ql-item ql-tree-branch"><a href={link}>{name}</a></li>
    </>
}

export const Quicklinks = (props: Props) => {
    return <>
        <div className="ql-container">
            <input data-id={props.title} type="checkbox" id="ql-dropdown-toggle" />
            <ul className="ql-dropdown-container ql-links ql-tree-stem">
                <QLButton title={props.title} />
                {props.children}
            </ul>
        </div>
    </>
}