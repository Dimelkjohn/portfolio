import Create from "./Create";

function Creative()
{
    return(
        <div className="creative-container animate__animated animate__slideInUp">
            <Create 
                heading="Designs"
                desc="As a visually oriented individual, I earnestly embrace the Adobe Creative Suite to unleash my imagination, 
                        creating captivating cover arts, flyers, pamphlets and much more for friends and clients."
                media={["images/designs/1.png", "images/designs/2.png", "images/designs/5.png", "images/designs/3.png", "images/designs/4.png"]}
            />
            <Create 
                heading="Music"
                desc='I recently mustered the confidence to release my debut single, "Was a Good Day," alongside its music video. 
                        Music has definitely always been a passion of mine and I eagerly anticipate sharing more tunes in the future. 
                        If you like what you hear, I warmly invite you to join the fan base.'
                media={["https://tube.rvere.com/embed?v=ZPWtfxaj3Yc"]}
            />

            <Create     
                heading="Film"
                desc="Fuelled by my profound passion for cinema, I couldn't resist the urge to lend my creative touch. 
                        I proudly present a couple of skits I wrote and directed for my friend's album promotion, 
                        merging the realms of music and film in captivating harmony. "
                media={["https://tube.rvere.com/embed?v=AzMlU86AP-s", "https://tube.rvere.com/embed?v=DVcO-mRHDCw"]}
            />

            <Create     
                heading="Animation"
                desc="Having cherished cartoons growing up, I aspired to evoke the same magic in others. 
                        Today, I'm delighted to share one of my finest animation works, a testament to my artistic journey. I also did the voice work!"
                media={["https://tube.rvere.com/embed?v=j7XBMVEvy7g"]}
            />
        </div>
    );
}

export default Creative;