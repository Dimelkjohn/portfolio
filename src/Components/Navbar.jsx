import { useState } from "react";
import { Link } from "react-router-dom";
import "animate.css";

function Navbar() 
{
    const [hover, setHover] = useState(false);

    function handleHover()
    {
        setHover(true);

        setTimeout(() => 
        {
            setHover(false);
        }, 1000)
    }

    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img 
                        onMouseOver={handleHover}
                        className={hover ? "logo animate__animated animate__swing" : "logo"} 
                        src="images/logo.png" 
                        alt="logo">
                    </img>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" aria-current="page" >About Me</Link>
                        </li>

                        <li className="nav-item">
                            <a href="https://black-stephenie-15.tiiny.site/" className="nav-link" target="_blank" rel="noopener noreferrer">Resume</a>
                        </li>

                        <li className="nav-item">
                            <a href="mailto:paul.johndim@gmail.com" className="nav-link" target="_blank" rel="noopener noreferrer">Email Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;