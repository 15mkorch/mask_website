import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="nav">
            <ul className="main-nav">
                <li><Link href="/index" className="navbar">
                    <a title="Home" >Home</a>
                </Link></li>
                <li><Link href="/about" className="navbar">
                    <a title="About Page" >About</a>
                </Link></li>
                <li><Link href="/donations" className="navbar">
                    <a title="Donations">Donations</a>
                </Link></li>
                <li><Link href="/dropOff" className="navbar">
                    <a title="dropOff">Drop Off</a>
                </Link></li>
            </ul>

            <style jsx>{`
                .nav {
                    overflow: hidden;
                    background-color: #333;
                }
                .nav a {
                    float: right;
                    color: #f2f2f2;
                    text-align: center;
                    padding: 14px 16px;
                    text-decoration: none;
                    font-size: 17px;
                    font-family: "Poppiins"

                }
                
                .main-nav {
                    list-style: none;
                }

                .nav a:hover {
                    background-color: #9cd6d6;
                    color: black;
                }
                .navbar {
                    float: left;
                    list-style: none;
                }
        
            }
            `}</style>
        </div>

    )
}

