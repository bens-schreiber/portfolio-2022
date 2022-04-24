import SoftwareEngineerProjects from "./components/software-engineer-projects/software-engineer-projects"
import AppDevelopmentProjects from "./components/app-development-projects/app-development-projects"
import GameDesignProjects from "./components/game-design-projects/game-design-project"
import WebDesignProjects from "./components/web-design-projects/web-design-projects"
import { PItem } from "./components/portfolio-item/portfolio-item"
import { EzQuizLogo, JavaLogo, Demo1, Demo2, UserFlow, UMLDiagramEzQuiz } from "./assets"
import { FblaSVG } from "../home/components/about/assets";
export default function Portfolio(): JSX.Element {
    return <>
        <div className="portfolio-page">
            <SoftwareEngineerProjects />
            {/* <AppDevelopmentProjects/>
            <GameDesignProjects/>
            <WebDesignProjects/> */}
            <PItem color="gray" path={EzQuizLogo} title="APP DEVELOPMENT">
                <PItem.ImageTextContainer path={FblaSVG}>
                    Test text 123
                </PItem.ImageTextContainer>
                <PItem.TextContainer header="Test">
                    test 123 123
                </PItem.TextContainer>
            </PItem>
        </div>
    </>
}