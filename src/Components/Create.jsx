function Create(props) 
{
    let count = 0;

    return(
        <div className="creative-content">
            <h3>{props.heading}</h3>

            <p className="cc-desc">{props.desc}</p>

            {props.media[0].slice(-3) === "png" ?
                <div className="cc-grid">
                    {
                        props.media.map((item) =>
                        {
                            return <img src={item} alt="grid" className={`p${item.slice(-5, -4)}`} key={item}></img>
                        })
                    }
                </div>
                :
                props.media.map((item) =>
                {
                    count++; 

                    return  <div className="yt-container" key={item}>
                                <iframe width="560" height="315"
                                        className={`yt-vid yt${count}`}
                                        src={item}
                                        title="YouTube video player" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        loading="lazy" 
                                        allowFullScreen>
                                </iframe>
                            </div>
                })
            }
            <div className="cc-grid">
                
            </div>
        </div>
    );
}

export default Create;