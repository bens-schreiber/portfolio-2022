export default function GameDesignProjects() {
    return <>
        <div className="gm-des">
            <div className="headers">
                <h1>
                    GAME DESIGN
                </h1>
            </div>
            <div className="gm-des-logo-header">
                <div className="l-container">
                    
                </div>
            </div>

            <button onClick={expandClicked} className="expand-button">COMING SOON!</button>
            <input id="collapse" type="checkbox" />
            <div className="collapse">
            </div>
        </div>
    </>
}

function expandClicked() {
    // var collapse: HTMLInputElement = (document.querySelector(".gm-des #collapse") as HTMLInputElement);
    // var btn: any = document.querySelector(".gm-des .expand-button");
    // btn.textContent = collapse.checked ? "CLICK TO EXPAND!" : "CLICK TO COLLAPSE";
    // collapse.checked = !collapse.checked;
}