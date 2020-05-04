import Navbar from '../components/Navbar';


export default function donations() {


    return (
        <div className="main">
            <Navbar />
            <h1 id="list">WE ARE LOOKING FOR...</h1>
            <div className="container">
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,600;1,700&display=swap" rel="stylesheet"></link>
                <div className="box1">
                    <ul className="list">
                        <li>100% Cotton Fabric</li>
                        <li>Flannel</li>
                        <li>T-shirts</li>
                        <li>Sheets</li>
                        <li>Elastic</li>
                        <li>Bias Tape</li>
                    </ul>
                </div>

                <div className="box2">
                    <img className="noContact" src='/noContact.jpeg' alt="No Contact Pic" />
                </div>
            </div>
            <p className="safe">You can drop off goods while still maintaining your social distance. For locations, click <a href="#movement">here</a>. </p>

            <style jsx>{`
            h1 {
                font-family: Poppins;
                font-style: italic;
                color: #ede1d0;
                margin-left: 1em;
                font-size: 45px;
            }
            h2 {
                font-family: Poppins;
                color: #ede1d0;
            }
            h3 {
                text-align: left;
                font-family: Poppins;
                color: #ede1d0;
            }
            p {
                color: #ede1d0;
                font-family: Poppins;
                text-align: center;
            }
            .main {
                background-color: #2F2D2A;
                width: 100vw;
                height: 100vh;
            }
            ul {
                color: #ede1d0;
                font-family: Poppins;
                font-size: 30px;
            }
            .noContact {
                border: 1px solid #ddd;
                border-radius: 4px;
                padding: 5px;
                width: 300px;
            }
            .container {
                display: flex;
                height: 75vh;
                widght: 100vh;
            }

            .box1 {
                display: flex;
                width: 50%;
                justify-content: center;
                align-items: center;
            }

            .box2 {
                display: flex;
                width: 50%;
                height: 100%;
                justify-content: center;
                align-items: center;

            }
            .safe {
                font-style: italic;
                font-size: 15px;
            }
            a {
                color: #9cd6d6;
            }
            
             `}</style>
        </div >

    );
}

