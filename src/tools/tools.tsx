export const When = (props: {
    children: React.ReactElement,
    condition: boolean
})
    : React.ReactElement =>
    props.condition ? props.children : <></>

