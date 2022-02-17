import "./sidebar.css"
import DashboardIcon from '@material-ui/icons/Dashboard';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PollIcon from '@material-ui/icons/Poll';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import ReportIcon from '@material-ui/icons/Report';
import { Timeline, TrendingUp } from '@material-ui/icons';

import { useNavigate } from "react-router-dom";


const Sidebar = () => {

    let navigate = useNavigate();

    return (
        
        <div id="sidebar" className="">
            <a href="" onClick={() => {navigate("/")}} className="navbar-brand ">  
                <span className="logo">SCC</span>
            </a>
            <div className="sidebar-menu pt-4 mb-3">
                <h3 className="sidebar-title">Dashboard</h3>
                <ul className="nav flex-column">
                    <li className="nav-item sidebar-active">
                        <a href="" onClick={() => {navigate("/")}} className="nav-link">
                            <DashboardIcon className="sidebar-icon" /> Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">
                        <Timeline className="sidebar-icon" /> Analytics</a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">
                        <TrendingUp className="sidebar-icon" /> Sales</a>
                    </li>
                </ul>
            </div>

            <div className="sidebar-menu mb-3">
                <h3 className="sidebar-title">Tools</h3>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a href="" onClick={() => {navigate("/emotion")}} className="nav-link">
                            <FavoriteIcon className="sidebar-icon" /> Emotion</a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">
                        <PollIcon className="sidebar-icon" /> Scraper</a>
                    </li>
                </ul>
            </div>

            <div className="sidebar-menu mb-3">
                <h3 className="sidebar-title">Staff</h3>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a href="" className="nav-link">
                            <PeopleIcon className="sidebar-icon" /> Users</a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">
                        <WorkIcon className="sidebar-icon" /> Manage</a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">
                        <ReportIcon className="sidebar-icon" /> Reports</a>
                    </li>
                </ul>
            </div>
        </div>
        
    )
}


export default Sidebar