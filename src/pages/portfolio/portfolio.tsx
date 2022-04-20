import SoftwareEngineerProjects from "./components/software-engineer-projects/software-engineer-projects"
import AppDevelopmentProjects from "./components/app-development-projects/app-development-projects"
import GameDesignProjects from "./components/game-design-projects/game-design-project"
import WebDesignProjects from "./components/web-design-projects/web-design-projects"
export default function Portfolio(): JSX.Element {
    return <>
        <div className="portfolio-page">
            <SoftwareEngineerProjects/>
            <AppDevelopmentProjects/>
            <GameDesignProjects/>
            <WebDesignProjects/>
        </div>
    </>
}