import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Skills = (props: { children: React.ReactNode[] | React.ReactNode }): JSX.Element => <>
    <ul className="skills">
        {props.children}
    </ul>
</>

export const FaSkillsItem = (props: { img: IconProp, header: string, desc: string }): JSX.Element =>
    <li className="skills-item">
        <FontAwesomeIcon className="skills-icon" icon={props.img}/>
        <h1>{props.header}</h1>
        <p>{props.desc}</p>
    </li>

export const SkillsItem = (props: { img: string, header: string, desc: string }): JSX.Element =>
    <li className="skills-item">
        <img className="skills-icon" src={props.img} alt=""/>
        <h1>{props.header}</h1>
        <p>{props.desc}</p>
    </li>