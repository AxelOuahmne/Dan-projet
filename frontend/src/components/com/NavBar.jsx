import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";


function NavBar() {
  const { user, logout, isAuthenticated } = useContext(AuthContext);

  return (
    <>
    <header>
        <div className="container">
            <div className="logo">
                <h1>MarketLine</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="#">Isolation</a></li>
                    <li><a href="#">Chauffage</a></li>
                    <li><a href="#">Solaire</a></li>
                    {isAuthenticated() ? (
                        <li className="client__space">
                            <a href="#" onClick={logout}>
                                <img src="https://bo.effy.fr/sites/default/files/2021-12/connexion-particulier-effy.svg" alt="" />
                                <span>Logout</span>
                            </a>
                        </li>
                    ) : (
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    </header>
</>
  )
}

export default NavBar
