import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target"
             id="ftco-navbar">
            <div className="container">
                <NavLink className="navbar-brand" to={'/'}>Oğuzhan</NavLink>
                <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button"
                        data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav nav ml-auto">
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to={'/'}>
                                <span>Anasayfa</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to={'/about'}>
                                <span>Hakkımda</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to={'/services'}>
                                <span>Hizmetler</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to={'/blog'}>
                                <span>Blog</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to={'/contact'}>
                                <span>İletişim</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;