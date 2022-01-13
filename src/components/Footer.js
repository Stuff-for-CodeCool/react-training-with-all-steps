const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <span className="navbar-text">&copy; {year}</span>
            </div>
        </footer>
    );
};

export default Footer;
