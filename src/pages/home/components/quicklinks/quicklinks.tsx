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

            <QLButton title={props.title} />

            {/* <ul className="ql-expanded-container ql-links ql-tree-stem">
                {props.children}
            </ul> */}

        </div>
    </>
}