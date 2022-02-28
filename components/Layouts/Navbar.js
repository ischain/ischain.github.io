import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';

class Navbar extends Component {

    // Navbar 
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <>
                <div id="navbar" className="navbar-area fixed-top">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <div className="container">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src="/images/white-logo.png" alt="logo" />
                                </a>
                            </Link>

                            <button 
                                onClick={this.toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav m-auto">
                                    
                                    <li className="nav-item">
                                        <Link href="/tentang-kami">
                                            <a className="nav-link" activeClassName="active">
                                                Tentang Kami
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/">
                                            <a className="nav-link" onClick={e => e.preventDefault()}>
                                                Entitas Bisnis<i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/ischain-academy" activeClassName="active">
                                                    <a className="nav-link">Ischain Academy</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/ischain-solution" activeClassName="active">
                                                    <a className="nav-link">Ischain Solution</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/ischain-dao" activeClassName="active">
                                                    <a className="nav-link">Ischain DAO</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/publikasi">
                                            <a className="nav-link" activeClassName="active">
                                                Publikasi
                                            </a>
                                        </Link>
                                    </li>

                                    {/*
                                    <li className="nav-item">
                                        <Link href="/faq">
                                            <a className="nav-link" activeClassName="active">
                                                FAQ
                                            </a>
                                        </Link>
                                    </li>
                                    */}

                                    <li className="nav-item">
                                        <Link href="/kontak">
                                            <a className="nav-link" activeClassName="active">
                                                Hubungi Kami
                                            </a>
                                        </Link>
                                    </li>
                                    
                                </ul>
                            </div>
                            
                            {/*
                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <Link href="/">
                                            <a className="nav-link" activeClassName="active">
                                            <button type="button" className="btn btn-warning">Connect Wallet<i className='bx bx-chevron-right'></i></button>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            */}
                        </div>
                    </nav>
                </div>
            </>
        );
    }
}

export default Navbar;
