import "./Topbar.css"
import { NotificationsNone, Language, Settings, PhoneAndroid } from "@material-ui/icons"

const Topbar = () => {

    return (
        <nav className="navbar navbar-light bg-light navbar-expand">
            <div className="container">
                <a href="../../../public/index.html" className="navbar-brand">  
                    <PhoneAndroid className="logo mb-2" />
                    <span className="logo">SCC</span>
                </a>

                <div className="navbar-collapse ">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="./index.html" class="nav-link ">
                                <NotificationsNone />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="./index.html" class="nav-link ">
                                <Language />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="./index.html" class="nav-link ">
                                <Settings />
                            </a>
                        </li>

                        <img src= {require("../../Img/levi.jpg")} className="profile-pic" />
                    </ul>
                </div>                            
            </div>
        </nav>
    )

}


export default Topbar