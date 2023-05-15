import VidCode from "./VidCode";
import PicsCode from "./PicsCode"

function Developer()
{    
    return (
        <div className="fs-container animate__animated animate__slideInUp">
            <VidCode
                heading="Week-in-Movies (coming soon)"
                video="videos/wim.mp4"
                tools={["React"]}
                desc="As an avid movie lover, I set a personal goal to discover a new film every day. However, I soon faced movie-search fatigue, 
                struggling to find worthwhile options. To solve this, I'm developing a web app that plans your movie week, offering a curated 
                selection of unique and interesting films sourced from The Movie Database. Utilizing React, the app allows users to shuffle through a randomized movie list, 
                lock in their preferences, and reshuffle until they have an exciting lineup of seven movies to enjoy. "
                sc="https://github.com/Dimelkjohn/Weekly-Movie-Planner-App"
            />

            <PicsCode
                heading="Bumper Globe LLC"
                link="https://bumper-globe-website.onrender.com/"
                pics={["images/bg.png"]}
                tools={["Node.js", "Express.js", "MongoDB", "JQuery"]}
                desc="After completing my college education, I felt the need to put my accumulated knowledge into practice. 
                I decided to revamp the website of a local auto repair business, giving it a fresh look and incorporating appointment 
                scheduling functionality. This project served as a valuable opportunity for me to gain hands-on experience with Node.js 
                servers and the integration of MongoDB databases. I utilized jQuery and Express to define the backend logic, enhancing 
                my proficiency in these areas as well. It was a rewarding experience that allowed me to apply my skills and further expand my 
                understanding of web development."
                sc="https://github.com/Dimelkjohn/bumper-globe"
            />

            <PicsCode
                heading="Repo Surfer"
                link="https://reposurfer.onrender.com/"
                pics={["images/rs.png"]}
                tools={["React"]}
                desc="In this React project, I leveraged Axios to fetch repositories from GitHub's API for specific organizations, 
                implementing a star rating filter. Upon clicking a repository, a modal displayed the latest commits for that repository. 
                This endeavor served as a valuable test of my knowledge in React and API interaction, allowing me to deepen my understanding 
                of these concepts while building a practical application."
                sc="https://github.com/Dimelkjohn/repo-surfer"
            />

            <PicsCode
                heading="Webfrui.it"
                pics={["images/wf1.png", "images/wf2.png", "images/wf3.png", "images/wf4.png"]}
                tools={["WordPress", "Webflow"]}
                desc="Webfruit is a web development company that I co-founded during my college years, alongside a talented team of designers, 
                programmers, and developers. Our approach was project-based, prioritizing quality and efficiency in every endeavor. 
                As part of our commitment to transparency, we integrated a feature on our website that allowed customers to 
                track the progress of their projects. Within the company, I played a pivotal role in spearheading design ventures 
                and leading the development efforts using CMS platforms."
            />

            <VidCode
                heading="MyPicasso.exe"
                link="https://github.com/Dimelkjohn/rectangles-on-image"
                video="videos/myPicasso.mp4"
                tools={["WPF"]}
                desc="This particular project stands out as a departure from web-based applications, as it allowed me to explore 
                non-web-centric development. Leveraging XAML and the powerful .NET Framework, I streamlined the app development 
                process and was able to produce a seamless and efficient user experience. The primary objective of this artsy play 
                tool was to offer users the ability to customize their images. The app incorporated features such as drawing rectangles, 
                recoloring them, deleting, and ultimately saving the image with the applied modifications. 
                (Please note that the mouse's overlays are not visible due to the screen recording tool I used.)"
                sc="https://github.com/Dimelkjohn/rectangles-on-image"
            />

            <PicsCode
                heading="This site too!"
                pics={["images/portfolio.png"]}
                tools={["React"]}
                desc="Finally, the current website you are browsing! I created this platform to not only showcase my web development skills but also to illuminate my creative endeavors. 
                Designed as a React project, it provided an opportunity for me to gain hands-on experience with React servers and 
                incorporate captivating CSS animations. I sincerely hope you find it as visually appealing as I do. Thank you for visiting!"
                sc="https://github.com/Dimelkjohn/portfolio"
            />
        </div>
    );
}

export default Developer;