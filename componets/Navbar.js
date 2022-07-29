import Link from "next/link";
import {useState} from "react";

const NavBar = () => {

    const [active, setActive] = useState('home');

    const handlerLogout = () => {
        localStorage.clear();
        window.location.href = '/login';
    }

    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link href="/">
                            <a className={`nav-link ${active === 'home' ? 'active' : ''}`} onClick={() => setActive('home')}>
                                Home
                            </a>
                        </Link>
                        <Link href="/counter">
                            <a className={`nav-link ${active === 'counter' ? 'active' : ''}`} onClick={() => setActive('counter')}>
                                Counter
                            </a>
                        </Link>
                        <Link href="/users">
                            <a className={`nav-link ${active === 'usuer' ? 'active' : ''}`} onClick={() => setActive('user')}>
                                Users
                            </a>
                        </Link>
                        <Link href="/todo">
                            <a className={`nav-link ${active === 'todo' ? 'active' : ''}`} onClick={() => setActive('todo')}>
                                ToDo
                            </a>
                        </Link>
                        <Link href="/view">
                            <a className={`nav-link ${active === 'View' ? 'active' : ''}`} onClick={() => setActive('View')}>
                                View Data Redux
                            </a>
                        </Link>
                        <a className="nav-link p-2" href="#" onClick={handlerLogout}>
                            Logout
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
