import { FaBars } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6";
import './Header.css';
import { useState } from "react";
import classNames from "classnames";
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <header>
            <a href="#"><img src="https://blog.kakaocdn.net/dn/bZnhsl/btsCUzjdJvF/DFKsiOhgk86Y7hsoPyKv0k/tfile.svg" alt="logo" width="70px" /></a>
            <ul className={classNames('header_navbar', {open})}>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#artists">ARTISTS</a></li>
                <li><a href="#staffs">STAFFS</a></li>
            </ul>
            <div className="header_main">
                <a href="https://www.youtube.com/@waktaverse" className="header_ytb" target="_blank"><img src="https://blog.kakaocdn.net/dn/bnrt2d/btsCRgSfRNn/ubDwtko9lxYRn1kNqdFgXk/tfile.svg" alt="logo" width="30px" /></a>
                <a href="https://cafe.naver.com/steamindiegame" className="header_cafe" target="_blank"><img src="images/cafe_icon.svg" alt="logo" width="26px" /></a>
                <div className="header_menu_icon" onClick={
                    () => {
                        setOpen(open?false:true)
                    }
                }>{open?<FaXmark />:<FaBars />}</div>
            </div>
        </header>
    )
}

export default Header;