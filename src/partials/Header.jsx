import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="App-header">
            <div className="App-header-logo-and-title">
                <img src="https://media.tenor.com/SZI1sUMkTAkAAAAM/wall-lice-figglebottom.gif" alt="" width={75} height={75}/>
                <h4>TP bases React</h4>
            </div>
            <nav className="App-header-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/canapes">All canapes</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cgv">CGV</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;