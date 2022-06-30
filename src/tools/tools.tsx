import React from "react";


export const When = (props: {
    children: React.ReactElement,
    condition: boolean,
})
    : React.ReactElement =>
    props.condition ? props.children : <></>


export const MultiRef = (props: {
    arr: Array<React.RefObject<any>>
    children: React.ReactElement[];
}) => <div>
    {props.children.map(element => <div ref={React.createRef()}>{element}</div>)}
</div>

export default When;