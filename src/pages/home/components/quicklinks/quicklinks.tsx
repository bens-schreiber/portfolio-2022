import React from "react";
import QLButton from './qlbutton';
interface Item {
    name: string;
    link: string;
}

export const QuicklinkItem = ({ name, link }: Item) => {
    return <>
        <li className="ql-item ql-tree-branch"><a href={link}>{name}</a></li>
    </>
}

const QuickLinkExpanded = (props: { title: string, children: React.ReactNode[] }) =>
    <>
        <ul className="ql-expanded-container ql-links ql-tree-stem">
            <button className="ql-expanded-title">{props.title}</button>
            {props.children}
        </ul>
    </>

export const Quicklinks = (props: { title: string, children: React.ReactNode[] }) =>
    <>
        <div className="ql-container">

            <QLButton title={props.title} />

            {/* <QuickLinkExpanded title={props.title}>
                {props.children}
            </QuickLinkExpanded> */}

        </div>
    </>