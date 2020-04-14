import Link from 'next/link';
import Form from '../components/Form';
import Navbar from '../components/Navbar';



export default function Index() {
    return (
        <div>
            <main className="main">
                <Navbar />
                <div className="body">
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,600;1,700&display=swap" rel="stylesheet"></link>
                    <h1 >GLOBAL U MASK OPERATION</h1>
                    <div className="box1">
                        <div className="text-block">
                            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,600;1,700&display=swap" rel="stylesheet"></link>
                            <p className="paragraph2">Global U is a missions team of entrepreneurs who strive to come together to solve the world’s most pressing problems.</p>
                            <p className="paragraph2">Right now, there is a huge problem of mask shortages for essential employees who deal closely with the public everyday. These people fight to keep our world running as smoothly as possible - we couldn’t do life as we know it without them!</p>
                            <p className="paragraph2">We are reaching out to serve and love those around us by creating and distributing cloth masks to keep those people safe!</p>
                            <p className="paragraph2"> 1 Corinthians 12:20 states, "As it is, there are many parts, but one body."
                            We can work together to unify our community and do some social good!</p>

                        </div>
                        <div className="box2">
                            <img className="people" src='/People.png' alt="People and Masks" />
                        </div>
                    </div>

                </div>
                <h2 id="movement">Join the movement!</h2>
                <Form />

                <style jsx>{`
        h1 {
            font-family: Poppins;
            font-style: italic;
            color: #2F2D2A;
            font-size: 45px;
            margin-left: 15px;
        }
        .body {
            width: 100%;
            height:100%;
            display: flex;
            flex-direction: column;
        }

        .box1 {
            display: flex;
            flex-direction: row;
            
        }
        .box2 {
            display: flex;
            flex-direction: row;
            
        }
        h2 {
            text-align: center;
            font-family: Poppins;
            font-style: italic;
            color: #2F2D2A;
        }
       

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
        }

        .paragraph2 {
            font-family: Poppins;
            font-size: 20px;
            color: #2F2D2A;
            margin: 25px;
            width: 80%;
            padding: 10px;
        }
        .main {
            background-color: #ede1d0;
        }
        .people {
            height: 100%:
            display: flex;
            align-items: center;
        }

      `}</style>
            </main>
        </div>


    );
}