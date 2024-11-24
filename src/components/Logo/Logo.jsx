import logo from  '../Logo/logo.svg';

import '../Header/style.scss';

const Logo = () => {
    return (
        <a href="#">
            <img src={logo} alt=""/>
        </a>
    );
}

export default Logo;