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
        <li><a href={link}>{name}</a></li>
    </>
}

export const Quicklinks = (props: Props) => {
    return <>
        <div className="quicklinks-container">
            <input data-id={props.title} type="checkbox" id="d-toggle" />
            <ul className="dropdown-container dropdown-links">
                <QLButton title={props.title} />
                {props.children}
            </ul>
        </div>
    </>
}