import { PUAppLogo, DebianLogo, GolangLogo, DartLogo } from "../../assets"
export default function AppDevelopmentProjects() {
    return <>
        <div className="app-dev">
            <div className="headers">
                <h1>
                    MOBILE DEVELOPMENT
                </h1>
            </div>
            <div className="app-dev-logo-header">
                <div className="l-container">
                    <img src={PUAppLogo} />
                </div>
            </div>

            <button onClick={expandClicked} className="expand-button">CLICK TO EXPAND!</button>
            <input id="collapse" type="checkbox" />
            <div className="collapse">
                <div className="app-dev-about">
                    <div className="about app-dev-grid-box">
                        <h1 className="bold-header">ABOUT</h1>
                        <p>Codenamed PUApp, Pushup App is an ongoing mobile developmnet project I hope to soon release on both Apple and Android mobile phones. PUApps concept is centered around a group of people passing around a <span>virtual "Pushup Token"</span> at random, where the users must complete an incrementing amount of pushups as the token is passed.</p>
                        <p>PUApp initially started development January 2022, and is in the Beta stage. The project serves as a representation of my understanding of REST servers, improving vastly from the initial understanding I had while creating EzQuiz</p>
                    </div>
                    <div className="tech app-dev-grid-box">
                        <h1 className="bold-header">TECHNOLOGY</h1>
                        <p>PUApp uses a Google Stack, with an entirely hand written back-end with Googles <span>Golang</span>, hosted on a manually set up Debian server on <span>Google Cloud</span></p>
                        <p>On the Front End, PUApp uses Googles <span>Flutter</span>, written in, you guessed it, Googles <span>Dart</span>. Fun fact: Using entirely Google tools was completely an accident, only realizing it now!</p>
                    </div>
                    <div className="tech-icons app-dev-grid-box">
                        <img src={GolangLogo}/>
                        <img id="dart" src={DartLogo}/>
                        <img src={DebianLogo}/>
                    </div>
                </div>
            </div>
        </div>
    </>
}

function expandClicked() {
    var collapse: HTMLInputElement = (document.querySelector(".app-dev #collapse") as HTMLInputElement);
    var btn: any = document.querySelector(".app-dev .expand-button");
    btn.textContent = collapse.checked ? "CLICK TO EXPAND!" : "CLICK TO COLLAPSE";
    collapse.checked = !collapse.checked;
}