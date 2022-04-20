export default function WebDesignProjects() {
    return <>
        <div className="web-des">
            <div className="headers">
                <h1>
                    WEB DESIGN
                </h1>
            </div>
            <div className="web-des-logo-header">
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
    // var collapse: HTMLInputElement = (document.querySelector(".web-des #collapse") as HTMLInputElement);
    // var btn: any = document.querySelector(".web-des .expand-button");
    // btn.textContent = collapse.checked ? "CLICK TO EXPAND!" : "CLICK TO COLLAPSE";
    // collapse.checked = !collapse.checked;
}