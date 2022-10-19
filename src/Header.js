import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import './Header.css';
const Header = () => {

    const navLinkStyle = ({ isActive }) => {
        return (
            {
                color: isActive ? 'red' : ''
            }
        );
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink  className="nav-link" to='/' style={navLinkStyle}>Hello Name</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  className="nav-link" to='/increasedecrease' style={navLinkStyle} >Increse Decrese</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  className="nav-link" style={navLinkStyle} to="/machineslot">Machine Slot</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" style={navLinkStyle} to="/todolist">To-Do List</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" style={navLinkStyle} to="/ueseffect">Use-Effect</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" style={navLinkStyle} to="/usecontext">Use-Context</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" style={navLinkStyle} to="/useref">Use-Ref</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" style={navLinkStyle} to="/usereduce">Use-Reduce</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" style={navLinkStyle} to="/usememo">Use-Memo</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" style={navLinkStyle} to="/usecallback">Use-Callback</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" style={navLinkStyle} to="/car">Class Component</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;