import { PortItem } from "./components/portfolio-item/portfolio-item"
import { EzQuizLogo, JavaLogo, Demo1, Demo2, UserFlow, UMLDiagramEzQuiz, DebianLogo, Docker, PUAppLogo, GolangLogo, DartLogo, PUAppFrontEnd } from "./assets"
import { FblaSVG } from "../home/components/about/assets";
import { Logo1 } from "../../assets";
export default function Portfolio(): JSX.Element {
    return <>
        <div className="portfolio-page">
            <SoftwareEngineering/>
            <AppDevelopment/>
            <WebDevelopment/>
        </div>
    </>
}

function SoftwareEngineering(): JSX.Element {
    return <div data-id="ezquiz" className="ezquiz port-item">
        <PortItem img={EzQuizLogo} title="SOFTWARE ENGINEERING" id="ezquiz">

            <PortItem.ImageTextContainer path={EzQuizLogo}>
                EzQuiz is a fairly large software engineering project I started in 2019, and finished in 2020.
                EzQuiz was created for the <a href="https://www.fbla-pbl.org/" target="_blank" rel="noopener noreferrer">FBLA 2020-2021</a> Coding & Programming category.
                EzQuiz creates and administers fully customizeable, secure, locally hosted quizzes.
                See <a href="https://www.fbla-pbl.org/media/2021/08/FBLA-Rating-Sheets.pdf" target="_blank" rel="noopener noreferrer">FBLA Project Guidelines</a> for the judging guidelines.
            </PortItem.ImageTextContainer>

            <PortItem.ImageTextContainer path={FblaSVG}>
                Placed 3rd in the United States in 2021 for the Coding & Programming category.
            </PortItem.ImageTextContainer>

            <PortItem.Header>APPLICATION FEATURES</PortItem.Header>
            <PortItem.ListContainer>
                {[
                    {
                        title: "TAKE QUIZZES",
                        text: "EzQuiz allows you to take quizzes on a local network, by typing in a Quiz Key. EzQuiz saves all Quiz results on your account, in a table accessable in the main menu."
                    },
                    {
                        title: "CREATE QUIZZES",
                        text: "By using the custom quiz creator, EzQuiz allows you to use the built-in Quiz Builder, or use Excel to create your own quiz, with Multiple Choice, Checkbox, and True or False questions."
                    },
                    {
                        title: "CUSTOMIZE QUIZZES",
                        text: "In the Quiz Creation menu, EzQuiz gives you a variety of settings options when creating a quiz, such as disabling the built in Calculator, Drawing Pad or Notepad, disabling the vieiwng of the correct answers, and randomizing the order of how questions appear"
                    },
                    {
                        title: "ADMINISTER QUIZZES",
                        text: "When you create a quiz, you don't have to share it with yourself! Manage your own created quizzes in the main menu, and share your Quiz Code with others on your local network to allow them to take your Quiz."
                    },
                    {
                        title: "BUILT IN TOOLS",
                        text: "Use the built-in Notepad, Calculator or Drawing pad to assist in the Quiz Taking expierence"
                    },
                    {
                        title: "SECURE",
                        text: "EzQuiz hashes all account passwords, securely requests for data using a custom created Token Based authentication system, uses HTTPS, and provides a lockdown browser to take a Quiz in."
                    },
                ]}
            </PortItem.ListContainer>

            <PortItem.Header>TECHNOLOGY STACK</PortItem.Header>
            <PortItem.ImageTextContainer path={JavaLogo}>
                EzQuiz has a front end and back end developed entirely in Java, using JavaFX and Java Spring Boot.
                EzQuiz uses a REST server with a Token based authentication system, and for SQL queries.
                The program supports any operating system that can run Java, but is targetted for Windows machines so the lockdown browser can function properly.
            </PortItem.ImageTextContainer>

            <PortItem.ImageTextContainer path={Docker}>
                EzQuiz takes full advantage of Docker, dockerizing its REST Server and MySQL Database in an Alpine Linux container, so the server may be easily executed on any machine regardless of operating system.
            </PortItem.ImageTextContainer>

            <PortItem.Header>FRONT END</PortItem.Header>
            <PortItem.VideoContainer path={Demo1} />
            <PortItem.VideoContainer path={Demo2} />

            <PortItem.Header>USER FLOW</PortItem.Header>
            <PortItem.ImageContainer path={UserFlow} />

            <PortItem.Header>BACK END</PortItem.Header>
            <PortItem.ImageContainer path={UMLDiagramEzQuiz} />

            <PortItem.Header>CONCLUDING THOUGHTS</PortItem.Header>
            <PortItem.LargeTextContainer>
                EzQuiz was my first project-- ever. As a junior in highschool, who had just entered what was to be months off school for the COVID-19 quarantine, I decided to spend the majority of my time learning the skills that went into this project. To begin EzQuiz, I did not know JavaFX/SpringBoot, REST, Docker, and had a shallow understanding of Object Oriented Programming. <br /><br />

                Despite this being a project for FBLA, EzQuiz was a passion project. From sending the first HTTP POST request from PostMan that successfully logged me into a remote server, to presenting at a national level competition in front of industry professionals, the experience I had with this project is why I now pursue a career in the industry. EzQuiz pushed me more than any project has, allowing me to climb a steep learning curve, from hobbyist programming to industry standards. <br /><br />

                In retrospect, the majority of the internal code of EzQuiz still holds up to time, from the hours spent learning the intracicies of Object-Oriented design, and watching lectures on Datastructures and Algorithms to understand the efficiency of the algorithms. <br /><br />

                One aspect of EzQuiz I was not happy with was how the back end server was implemented and executed, after fully grasping the concepts of microservices and efficient REST design. This inspired me to start my next project, PUApp.
            </PortItem.LargeTextContainer>
        </PortItem>

    </div>
}

function AppDevelopment(): JSX.Element {
    return <div data-id="puapp" className="puapp port-item">
        <PortItem title="APP DEVELOPMENT" img={PUAppLogo} id="puapp">

            <PortItem.TextContainer title="ABOUT">
                Pushup App, or PUApp is an ongoing project I started in 2021. 
                The goal with PUApp is to create a simple app with a modern and secure written from scratch back end server REST and Websocket server, utilizing the microservice architecture. <br/><br/>
                The concept of PUApp is like a social challenge. A group of people create accounts on the app, and one individual hosts a group. A Pushup Token is passed randomly to a group member,
                and a notification is sent to the user who has been passed the token. Upon recieving the notification, the user is to complete the amount of pushups provided on the pushup token.
                Once complete, they can send an image of where they completed the pushups, which is posted to a group board. The token is then incremented by 1, and sent to the next user.
            </PortItem.TextContainer>

            <PortItem.TextContainer title="ONGOING DEVELOPMENT">
                PUApp is an ongoing project. As it currently stands, the front end of the app is finalized, as well as the REST services. The next step
                is to create the Web Socket microservice, and deliver notifications to users. <a href="https://github.com/bens-schreiber/goproj">Check out the Backend</a> to see the
                back end server, written in Golang. <a href="https://github.com/bens-schreiber/pushupapp">Check out the Front End</a> to see the UI writen in Dart.  <br/><br/>
                The project is currently on hold, and the Google Cloud server is down until it is picked back up.
            </PortItem.TextContainer>

            <PortItem.Header>APPLICATION FEATURES</PortItem.Header>
            <PortItem.ListContainer>
                {[
                    {
                        title: "LOGIN TO AN ACCOUNT",
                        text: "PUApp requires a user account in order to function. Usernames and passwords are cached, so users never need to log in twice."
                    },
                    {
                        title: "CREATE, JOIN, MANAGE GROUPS",
                        text: "Users can create groups and invite up to 10 friends to play along with. Users can be apart of 3 groups, and leave at any time. Group owners are capable of managing users within their group, and disbanding the group entirely."
                    },
                    {
                        title: "UPLOAD PHOTOS TO A GROUP BOARD",
                        text: "Whenever a user completes a Pushup Task, they can upload a photo from their camera. (IN DEVELOPMENT)"
                    },
                    {
                        title: "PRIORITY OF SECURITY",
                        text: "PUApp salts and hashes account information, implements a token based authentication system with token timeouts, ratelimits suspicious activity, and uses HTTPS encryption on every single request.  "
                    },

                ]}
            </PortItem.ListContainer>

            <PortItem.Header>A GOOGLE TECHNOLOGY STACK</PortItem.Header>
            <PortItem.ImageTextContainer path={GolangLogo}>
                PUApp has a backend written primarily in Googles Golang. Golang is a language created for the purpose of programming web services, 
                and has incredibly intuitie libaries for REST servers.
            </PortItem.ImageTextContainer>
            <PortItem.ImageTextContainer path={DebianLogo}>
                Pushup App servers are hosted entirely on Google Cloud Services, on a custom Debian machine.
                Fun fact! PUApp was written on an Arch Linux machine, using entirely VIM.
            </PortItem.ImageTextContainer>
            <PortItem.ImageTextContainer path={Docker}>
                Microservice architecture was one of the main goals when creating PUApp. 
                Utilizing Docker and Alpine Linux, every individual container is networked together via a Docker Compose build file.
            </PortItem.ImageTextContainer>
            <PortItem.ImageTextContainer path={DartLogo}>
                PUApp uses Googles Dart, taking advantage of the Flutter framework for all front end programming.
                Flutter provides an incredible service of writing both Android and IOS applications in one single codebase.
            </PortItem.ImageTextContainer>

    
            <PortItem.Header>EARLY FRONT END DESIGN</PortItem.Header>
            <PortItem.ImageContainer path={PUAppFrontEnd}/>
        </PortItem>
    </div>
}

function WebDevelopment():JSX.Element {
    return <>
        <div data-id="bmin-schreib" className="bmin-schreib port-item">
            <PortItem img={Logo1} title="WEBSITE DEVELOPMENT" id="bmin-schreib">

                <PortItem.ImageTextContainer path={Logo1}>
                    This website was created for an FBLA project I started my senior year of highschool, built entirely from scratch using Typescript, React, AnimeJS, and PHP.
                    <a href="https://github.com/bens-schreiber/portfolio">Check out the github</a> to see the code.
                </PortItem.ImageTextContainer>

                <PortItem.ImageTextContainer path={FblaSVG}>
                    Placed 1st in the Washington State FBLA Conference, proceeding to the national competiton in June.
                </PortItem.ImageTextContainer>
                
            </PortItem>
        </div>
    </>
}