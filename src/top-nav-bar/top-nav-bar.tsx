import Logo2 from '../assets/logo2.svg'
export default function TopNavBar(): JSX.Element {
    return <>
        <div className="top-navbar-container">
            <a href="/" className="logo2-container">
                <img src={Logo2} alt="" />
            </a>
            <label htmlFor="nav-menu-toggle" className="nav-icon">
                &#9776;
            </label>
        </div>
        <input type="checkbox" id="nav-menu-toggle" />
        <div className="nav-menu nav-menu-slide-in">
            <nav >
                <h1>HOME</h1>
                <ul>
                    <li><a href="#">CONTACT</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">CS TUTORING</a></li>
                    <li><a href="#">DISCORD BOTS</a></li>
                    <li><a href="#">PORTFOLIO</a></li>
                </ul>
            </nav>
        </div>
    </>
}