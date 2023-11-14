import ImgUser from '../assets/user-image.jpg'
import { Briefcase, Home, Phone, School, User } from './Icons';

function Sidebar() {
    return (
        <aside className="sidebar">
            <header className="sidebar__header">
                <picture className="sidebar__user-picture">
                    <img src={ImgUser.src} alt="Mitchel Proffitt" />
                </picture>
                <h3 className="sidebar__fullname">Mitchel Proffitt</h3>
                <p className='sidebar__profession'>Programmer</p>
            </header>
            <nav className="sidebar__nav">
                <ul className="sidebar__list">
                    <li className="sidebar__item">
                        <a href="#home" className="active">
                            <Home />Home
                        </a>
                    </li>
                    <li className="sidebar__item">
                        <a href="#home">
                            <User />About me
                        </a>
                    </li>
                    <li className="sidebar__item">
                        <a href="#home">
                            <Briefcase />Portfolio
                        </a>
                    </li>
                    <li className="sidebar__item">
                        <a href="#home">
                            <School />Studies
                        </a>
                    </li>
                    <li className="sidebar__item">
                        <a href="#home">
                            <Phone />Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <footer className="sidebar__footer">
                <a href="#" className="btn-primary">Let's talk</a>
            </footer>
        </aside>
    )
}

export default Sidebar;