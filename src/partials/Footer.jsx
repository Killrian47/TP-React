import { Link } from "react-router-dom";

const Footer = () => {
   return (
    <div className="App-footer">
        <div className="App-footer-left">
            <img src="https://media.tenor.com/SZI1sUMkTAkAAAAM/wall-lice-figglebottom.gif" alt="" width={75} height={75}/>
        </div>
        <div className="App-footer-right">
            <li><Link to="/cgv">CGV</Link></li>
            <p>© 2023 Killian PORTIER</p>
        </div>
    </div>
   )
}

export default Footer;