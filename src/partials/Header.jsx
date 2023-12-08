const Header = () => {
    return (
        <header className="App-header">
            <div className="App-header-logo-and-title">
                <img src="https://media.tenor.com/SZI1sUMkTAkAAAAM/wall-lice-figglebottom.gif" alt="" width={75} height={75}/>
                <h4>TP bases React</h4>
            </div>
            <nav className="App-header-nav">
                <ul>
                    <li><a href="#">1er lien</a></li>
                    <li><a href="#">2nd lien</a></li>
                    <li><a href="#">3ème lien</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;