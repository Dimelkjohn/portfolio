import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "animate.css";

function Home()
{
    const [font, setFont] = useState("");
    const [index, setIndex] = useState(0);
    const font_arr = ["f1", "f2", "f3", "f4", "f5"];

    useEffect(()=>
    {
        const interval = setInterval(()=>
        {
            setIndex((prev) => (prev + 1) % font_arr.length);
        }, 2000);

        return () => 
        {
            clearInterval(interval);
        };

    }, [font_arr.length])

    useEffect(() =>
    {
        setFont(font_arr[index]);
    }, [index]);
    
    return(
        <div className="content-container">  
            <div className="home-container animate__animated animate__slideInUp">
                <h1><span className={font}>John Dimelu</span> <br/>is a <Link to="/full-stack" className="choose-adv">full-stack developer</Link> by <br /> day and an <Link to="/creative" className="choose-adv">all out creative</Link> by <br /> night.</h1>

                <p className="click-this">Click any of my trades :)</p>
                
                <img className="glasses-one" src="images/logoR.png" alt="logo-animation-frame"></img>
                <img className="glasses-two" src="images/logoL.png" alt="logo-animation-frame"></img>
            </div>
        </div>
    )
}

export default Home;