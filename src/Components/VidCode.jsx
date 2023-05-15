function vid_code(props)
{
    return(
        <div className="fs-content">
            <h3>{!props.link ? props.heading : <a href={props.link} target="__blank" rel="noopener noreferrer" className="goto-website ">{props.heading} &gt;</a>}</h3>

            <video className="fs-vid" autoPlay muted loop>
                <source src={props.video} type="video/mp4"></source>
            </video>

            <div className="tool-container">
                {props.tools.map((tool) =>
                {
                    return <div className="tool" key={tool}>{tool}</div>
                })}
            </div>

            <p className="fs-desc">{props.desc} Find the source code <a href={props.sc} target="__blank" rel="noopener noreferrer" className="sc">here</a>.</p>
        </div>
    );
}

export default vid_code;