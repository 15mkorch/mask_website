import Navbar from '../components/Navbar';


export default function dropOff() {
    return (
        <div className="main">
            <Navbar />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,600;1,700&display=swap" rel="stylesheet"></link>
            <h1>MATERIAL DROP OFF LOCATIONS</h1>
            <div className="element">
                <h3>ADVENTURES IN MISSION ANNEX HOUSE</h3>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,600;1,700&display=swap" rel="stylesheet"></link>
                <p className="indent">5375 Clarkes Bridge Rd
                Gainesville, GA 30534</p>
            </div>
            <div>
                <h3>BECAUSE COFFEE</h3>
                <p className="indent">240 Dawson Village Way N #100, Dawsonville, GA 30534</p>
            </div>
            <div>
                <h3>CHASTAIN JANITORIAL</h3>
                <p className="indent">1630 M.L.K. Jr. Blvd,
                Gainesville, GA 30534</p>
            </div>
            <div>

            </div>
            <h2>Spring is here and cleaning has begun!</h2>
            <p className="space">So many of us are quarantined in our homes. While you're doing your spring cleaning, donate materials to one of our partnered drop-off locations in the North Georgia area! </p>
            <br></br>
            <p className="space1">You can drop off goods while still maintaining your social distance. For a list of needed donation materials, click <a href="#list">here</a>. </p>

            <style jsx>{`
            h1 {
                font-family: Poppins;
                font-style: italic;
                color: #2F2D2A;
                margin-left: 15px;
                font-size: 45px;
            }
            h2 {
                font-family: Poppins;
                color: #2F2D2A;
                margin-left: 10px;
            }
            h3 {
                text-align: left;
                margin-left: 15px;
                font-family: Poppins;
                color: #2F2D2A
                
            }
            p {
                color: #2F2D2A;
                font-family: Poppins;
                margin-left: 20px;
                
            }
            .indent {
                line-height: 0px;
            }
            .main {
                background-color: #ede1d0;
                width: 100vw;
                height: 100vh;
            }
            ul {
                color: #2F2D2A;
                font-family: Poppins;
            }
            .space1 {
                text-align: center;
                font-style: italic;
            }
            .space {
                margin-right: 60px;
                margin-left: 60px;
            }

            a {
                color: #9cd6d6;
            }
            
             `}</style>
        </div >

    );
}

