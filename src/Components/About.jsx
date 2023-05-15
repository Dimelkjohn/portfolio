import { useState, useEffect } from "react";
import { GitHub, LinkedIn } from "@mui/icons-material";

function About()
{
    const [li, setLi] = useState(false);
    const [git, setGit] = useState(false);

    // "Hello" sound
    let sound = new Audio("sounds/hello.mp3");

    function li_hover()
    {
        setLi(true);

        setTimeout(() =>
        {
            setLi(false);
        }, 1000);
    }

    function git_hover()
    {
        setGit(true);

        setTimeout(() =>
        {
            setGit(false);
        }, 1000);
    }

    // hover effect
    useEffect(() =>
    {
        document.querySelectorAll(".stack-holder").forEach((divider) =>
        {
            divider.addEventListener("mouseenter", handleMouseEnter);
        });

        function handleMouseEnter(e)
        {
            const ele = e.target;

            ele.querySelector("p").classList.remove("hidden");

            document.querySelector(".default").classList.add("hidden");
        }

        document.querySelectorAll(".stack-holder").forEach((divider) =>
        {
            divider.addEventListener("mouseleave", handleMouseLeave);
        });

        function handleMouseLeave(e)
        {
            const ele = e.target;

            ele.querySelector("p").classList.add("hidden");

            document.querySelector(".default").classList.remove("hidden");
        }

        return () => 
        {
            document.querySelectorAll(".stack-holder").forEach((divider) => 
            {
              divider.removeEventListener("mouseenter", handleMouseEnter);
            });

            document.querySelectorAll(".stack-holder").forEach((divider) =>
            {
                divider.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, [])

    return(
        <div className="about-container animate__animated animate__slideInUp">

            {/* about section */}
            <div className="abt-section">
                <img className="pfp" src="images/pfp.png" alt="John Dimelu"></img>

                <div className="txt-col">
                    <h2 onClick={() => sound.play()}>Hi, I'm John!</h2>

                    <p>
                        Hey there, I’m a full stack developer and a passionate creative hailing from Greenbelt, MD. 
                        I recently graduated from Towson University with a Bachelor of Science in Computer Science. 
                        I have a deep love for the arts, technology, and all things that make the internet tick.
                        Before diving into the world of crafting awesome web experiences, I started as a curious and imaginative young lad. 
                        I explored various avenues to channel my creativity, whether it was through captivating illustrations, 
                        compelling literature, or soul-stirring music. Today, these fundamental principles continue to fuel my endeavors 
                        as a web developer, as I perceive my role as a natural extension of my artistic inclinations.
                        <br /><br />
                        When I’m not pushing pixels, you’ll find me immersed in one of the internet’s many random yet intriguing YouTube 
                        video essays, enjoying the company of a good A24 film, or hiking (up the stairs to raid the fridge). 
                        Here are some quickfire facts about me: I think any day gets better with jollof, 
                        I’m a cinephile (I know, it sounds like a bad word), “tea” means hot cocoa where I’m from, I’m a bit of a clean freak, 
                        I’m a very competitive gamer (although I suck at pretty much every game I pick up), I’m terribly afraid of heights, 
                        and I can’t sleep without the AC on full blast!
                        Now that you know a little bit about me, I’d love to learn a little bit about you. Feel free to shoot me a message 
                        if you just want to say hi or if you’re interested in collaborating on something cool.
                    </p>

                    <div className="socials">
                        <a href="https://www.linkedin.com/in/john-dimelu/" target="__blank" onMouseOver={li_hover} className={li ? "animate__animated animate__jello" : undefined}>
                            <LinkedIn sx={{fontSize: 40}}  />
                        </a>

                        <a href="https://github.com/Dimelkjohn" target="__blank" onMouseOver={git_hover} className={git ? "animate__animated animate__jello" : undefined}>
                            <GitHub sx={{fontSize: 40}} />
                        </a>
                    </div>
                </div>
            </div>

            {/* stack section */}
            <div className="stack-section">
                <div className="abstract-stack">
                    <div className="stack-holder">
                        <h3 className="m-stack">M</h3>

                        <p className="stack m hidden">(mongo)</p>
                    </div>

                    <div className="stack-holder">
                        <h3 className="e-stack">E</h3>

                        <p className="stack e hidden">(express)</p>
                    </div>

                    <div className="stack-holder">
                        <h3 className="r-stack">R</h3>

                        <p className="stack r hidden">(react)</p>
                    </div>

                    <div className="stack-holder">
                        <h3 className="n-stack">N</h3>

                        <p className="stack n hidden">(node)</p>
                        <p className="stack s default">(stack)</p>
                    </div>
                </div>

                <p className="ab-p">
                    I wholeheartedly embrace the MERN stack for my web development endeavors. The versatility and power it offers 
                    align perfectly with my artistic vision and technical objectives. MongoDB provides a robust and scalable database 
                    solution, while the Express.js framework simplifies backend development. React.js’ component-based design allows 
                    me to craft dynamic and interactive UI. Finally, Node.js enables me to create scalable and efficient server-side 
                    applications. The MERN stack’s seamless integration and synergistic nature allow me to bring my ideas to life and 
                    create outstanding online experiences that resonate with users. Having said this, I am open to adopting any framework 
                    that aligns with a bold vision.
                </p>
            </div>
        </div>
    );
}

export default About;