import logo from '../../assets/images/logo.svg';
import './header.scss';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo" />
            <div id="CartCount"></div>
        </header>
    )
}

export default Header;