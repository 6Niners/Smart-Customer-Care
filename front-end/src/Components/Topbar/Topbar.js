import "./topbar.css"
import { NotificationsNone, Language, Settings } from "@material-ui/icons";


const Topbar = () => {

    return (
         
            <nav className="navbar navbar-light navbar-expand">
                <div className="navbar-collapse ">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="./index.html" className="nav-link ">
                                <NotificationsNone />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="./index.html" className="nav-link ">
                                <Language />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="./index.html" className="nav-link ">
                                <Settings />
                            </a>
                        </li>
    
                        <img src= "https://source.unsplash.com/40x40" className="profile-pic" />
                    </ul>
                </div>                            
            </nav>
         
    )

}


export default Topbar