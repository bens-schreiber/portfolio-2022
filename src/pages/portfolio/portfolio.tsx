import { PItem } from "./components/portfolio-item/portfolio-item"
import { EzQuizLogo, JavaLogo, Demo1, Demo2, UserFlow, UMLDiagramEzQuiz, DebianLogo, Docker } from "./assets"
import { FblaSVG } from "../home/components/about/assets";
export default function Portfolio(): JSX.Element {
    return <>
        <div className="portfolio-page">
            <PItem color="gray" path={EzQuizLogo} title="SOFTWARE ENGINEERING">

                <PItem.TextContainer header="ABOUT">
                    EzQuiz is a fairly large software engineering project I started in 2020, and finished in 2021.
                    EzQuiz was created for the <a href="https://www.fbla-pbl.org/" target="_blank" rel="noopener noreferrer">FBLA 2020-2021</a> Coding & Programming category.
                    EzQuiz creates and administers fully customizeable, secure, locally hosted quizzes.
                    See <a href="https://www.fbla-pbl.org/media/2021/08/FBLA-Rating-Sheets.pdf" target="_blank" rel="noopener noreferrer">FBLA Project Guidelines</a> for the judging guidelines.
                </PItem.TextContainer>
                <PItem.ImageTextContainer path={FblaSVG}>
                    Placed 3rd in the United States in 2021 for the Coding & Programming category.
                </PItem.ImageTextContainer>

                <PItem.Header title="OH SO MANY FEATURES" />
                <PItem.ListContainer>
                    {[
                        {
                            header: "TAKE QUIZZES",
                            text: "EzQuiz allows you to take quizzes on a local network, by typing in a Quiz Key. EzQuiz saves all Quiz results on your account, in a table accessable in the main menu."
                        },
                        {
                            header: "CREATE QUIZZES",
                            text: "By using the custom quiz creator, EzQuiz allows you to use the built-in Quiz Builder, or use Excel to create your own quiz, with Multiple Choice, Checkbox, and True or False questions."
                        },
                        {
                            header: "CUSTOMIZE QUIZZES",
                            text: "In the Quiz Creation menu, EzQuiz gives you a variety of settings options when creating a quiz, such as disabling the built in Calculator, Drawing Pad or Notepad, disabling the vieiwng of the correct answers, and randomizing the order of how questions appear"
                        },
                        {
                            header: "ADMINISTER QUIZZES",
                            text: "When you create a quiz, you don't have to share it with yourself! Manage your own created quizzes in the main menu, and share your Quiz Code with others on your local network to allow them to take your Quiz."
                        },
                        {
                            header: "BUILT IN TOOLS",
                            text: "Use the built-in Notepad, Calculator or Drawing pad to assist in the Quiz Taking expierence"
                        },
                        {
                            header: "SECURE",
                            text: "EzQuiz hashes all account passwords, securely requests for data using a custom created Token Based authentication system, uses HTTPS, and provides a lockdown browser to take a Quiz in."
                        },
                    ]}
                </PItem.ListContainer>

                <PItem.Header title="TECHNOLOGY STACK" />
                <PItem.ImageTextContainer path={JavaLogo}>
                    EzQuiz has a front end and back end developed entirely in Java, using JavaFX and Java Spring Boot.
                    EzQuiz uses a REST server with a Token based authentication system, and for SQL queries.
                    The program supports any operating system that can run Java, but is targetted for Windows machines so the lockdown browser can function properly.
                </PItem.ImageTextContainer>
                <PItem.ImageTextContainer path={Docker}>
                    EzQuiz takes full advantage of Docker, dockerizing its REST Server and MySQL Database in an Alpine Linux container, so the server may be easily executed on any machine regardless of operating system.
                </PItem.ImageTextContainer>

                <PItem.Header title="FRONT END" />
                <PItem.VideoContainer path={Demo1} />
                <PItem.VideoContainer path={Demo2} />
                <PItem.Header title="USER-FLOW" />
                <PItem.ImageContainer path={UserFlow} />

                <PItem.Header title="BACK END" />
                <PItem.ImageContainer path={UMLDiagramEzQuiz} />

                <PItem.Header title="CONCLUDING THOUGHTS" />
                <PItem.ImageTextContainer path={EzQuizLogo}>
                    EzQuiz was my first project-- ever.
                    As a Junior in highschool, who had just entered what was to be months off school for the COVID-19 quarantine, I decided to spend the majority of my time learning the skills that went into this project.
                    To begin EzQuiz, I did not know JavaFX/SpringBoot, REST, Docker, and had a shallow understanding of Object Oriented Programming. <br/> <br/>
                    Despite this being a project for FBLA, EzQuiz was a passion project.
                    From sending the first HTTP POST request from PostMan that successfully logged me into a remote server, to presenting at a national level competition in front of industry professionals, the expierence I had with this project is why I now pursue a career in the industry.
                    EzQuiz pushed me more than any project has, allowing me to climb a steep learning curve, from hobbyist programming to industry standard. <br/><br/>
                    In retrospect, the majority of the internal code of EzQuiz still holds up to time, from the hours spent learning the intracicies of Object Oriented design, and watching lectures on Datastructures and Algorithms to understand the efficiency of the algorithms. <br/><br/>
                    One aspect of EzQuiz I was not happy with was how the back end server was implemented and executed, after fully grasping the concepts of microservices and efficient REST design. This inspired me to start my next project, PUApp.
                </PItem.ImageTextContainer>

            </PItem>
        </div>
    </>
}