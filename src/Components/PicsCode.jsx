function pics_code(props)
{
    return(
        <div className="fs-content">
            <h3>{!props.link ? props.heading : <a href={props.link} target="__blank" rel="noopener noreferrer" className="goto-website">{props.heading} &gt;</a>}</h3>
        
           {props.pics.length === 1 ?
                <img className="fs-pic" src={props.pics[0]} alt="visual of site"></img>
            :
            <div id="carouselExampleIndicators" className="carousel carousel-dark slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>

                <div className="carousel-inner">
                    {props.pics.map((pic) =>
                    {
                        return <div className={props.pics[0] === pic ? "carousel-item active" : "carousel-item"} key={pic}>
                                    <img src={pic} className="fs-pic d-block w-100" alt="visual of site"/>
                                </div>
                    })}
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
           }

            <div className="tool-container">
                {props.tools.map((tool) =>
                {
                    return <div className="tool" key={tool}>{tool}</div>
                })}
            </div>

            <p className="fs-desc">
                {props.desc}{props.heading === "Webfrui.it" ? "" : " Find the source code "} 
                <a href={props.sc} target="__blank" rel="noopener noreferrer" className={props.heading === "Webfrui.it" ? "hidden" : "sc"}>
                    here.
                </a>
            </p>
        </div>
    );
}

export default pics_code;