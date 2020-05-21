import Navbar from '../components/Navbar';
import Head from 'next/head'

export default function About() {
    return (
        <>
            <Head>
                <title>About GlobalU Mask Operation</title>
                <meta name="description" content="Entreprenuers are problem solvers, and right now, there's a lot of problems in the world. Global U brings together driven student who are sold out for Jesus to work on projects that impact the world." />
            </Head>
            <Navbar />
            <div className="mainAbout">
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,600;1,700&display=swap" rel="stylesheet"></link>
                <h1>Meet the Partners</h1>

                <h2>Global U</h2>
                <div className="globalU">
                    <div className="box1">
                        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,600;1,700&display=swap" rel="stylesheet"></link>
                        <p className="paragraph1"> Entreprenuers are problem solvers, and right now, there's a lot of problems in the world. Global U brings together driven student who are sold out for Jesus to work on projects that impact the world. Our faith leads our business - it's what sets Global U apart. Through Christian community, computer science, and entrepreneurship, our students will walk away equipped to live a life on mission! </p>
                    </div>
                    <div className="box2">
                        <img className="GU" src='/GU.png' alt="Global U" />
                    </div>

                </div>
                <h2>Mary Korch</h2>
                <div className="globalU">
                    <div className="box1">
                        <img className="Mary" src='/IMG_6030.jpg' alt="Mary Headshot" />
                    </div>
                    <div className="box2">
                        <p className="paragraph1">Hello! I am 23 and grew up in Cedar Rapids, Iowa. I graduated from Creighton University in Omaha with an economics degree in 2018. While finishing up school, I was a College Pro Painters Franchisee before I left for the World Race. I love to workout, cook, and go on adventures. Through traveling, I love to explore how the truth of our Father manifests across other cultures. Additionally, I am passionate about bridging economics and faith to eradicate the poverty mindset.</p>
                    </div>

                </div>

                <h2>Catherine Gibson</h2>
                <div className="globalU">
                    <div className="box1">
                        <p className="paragraph1">My name is Catherine Gibson! I am an eighteen year old from North Georgia. I have departed school to pursue God and have a passion for the exploring the world and making connections to people. I follow a fire in my heart and jump into anything that calls me into. I strive to spend my life creating things that bring joy to those both near and far from me. I love a looking for the soul of a story, feeling the thrill of understanding a new culture, and connecting people to people!</p>
                    </div>
                    <div className="box2">
                        <img className="Catherine" src='/Catherine.jpeg' alt="Catherine Headshot" />
                    </div>
                </div>
            </div>
            <style jsx>{`
            h1 {
            font-family: Poppins;
            font-style: italic;
            color: #ede1d0;
            margin-left: 25px;
            font-size: 45px;
            }
            h2 {
                font-family: Poppins;
                color: #9cd6d6;
                margin-left: 25px;
                font-size: 40px
            }
            .paragraph1 {
            font-family: Poppins;
            color: #ede1d0;
            margin: 20px;
            width: 100%;
            font-size: 17px;
            
            }
            .mainAbout {
                background-color: #2F2D2A;

            }
            .globalU {
                display: flex;
                
            }
        
            .Mary {
                border: 1px solid #ddd;
                border-radius: 4px;
                padding: 5px;
                width: 250px;
            }
            .Catherine {
                border: 1px solid #ddd;
                border-radius: 4px;
                padding: 5px;
                width: 400px;
            }
            .GU {
                
                border: 1px solid #ddd;
                border-radius: 4px;
                padding: 5px;
                width: 400px;
                
            }
        
            .box1 {
                display: flex;
                flex-direction: row;
                width: 50%;
                justify-content: center;
                align-items: center;
            }

            .box2 {
                display: flex;
                flex-direction: row;
                width: 50%;
                height: 100%;
                justify-content: center;
                align-items: center;

            }
        
            `}</style>
        </>
    );
}