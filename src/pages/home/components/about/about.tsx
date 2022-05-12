import AboutCollapsedHeader from '../../../../assets/about-collapsed-header.svg';
import Careers from './careers';
export { About, Award }

const About =
    (props: { children: JSX.Element[] | JSX.Element })
        : JSX.Element =>
        <>
            <div className="abt-container">

                <Careers />
                <div className="abt-bio">
                    <div data-id="first-bio" className="abt-bio-item">
                        <img alt="" src={AboutCollapsedHeader} />
                        <p>I am an 18 year old Computer Science major from Cheney Washington who will be attending Washington State University.
                            I love all things engineering and design, putting a significant emphasis on being a <span>full stack engineer</span>.
                        </p>
                    </div>
                    <div data-id="second-bio" className="abt-bio-item">
                        <p>
                            I enjoy doing Computer Science competitions such as <span>Future Business Leaders of America, or FBLA</span> where I compete in events from Software Engineering to Website Design.
                        </p>
                    </div>
                </div>

                {props.children}
            </div>
        </>


const Award =
    (props: { img: string, title: string, subtitle: string })
        : JSX.Element =>
        <>
            <div data-value={props.title} className="abt-award">
                <img alt="" src={props.img} />
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </div>
        </>

