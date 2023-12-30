import { Link } from "react-router-dom";
import './Rusuk.css';

const Rusuk = () => {
    return (
    <>
        <header>
            <Link to='/'><img src="images/wak_logo.svg" alt="" width="70px" /></Link>
            <h1 className="rusuk_logo">RUSUK</h1>
        </header>
        <div className="rusuk_body">
            <div className="rusuk">
                <img src="images/rusuk_profile.svg" alt="" />
                <h1>해루석</h1>
                <p>고정멤버 상현의 1, 왁타버스의 원빈, 해루석이 2023년 3월 발라드 가수로까지 데뷔했다..! 왁타버스의 만능 엔터테이너</p>
            </div>
            <div className="rusuk_album">
                <a href="https://www.melon.com/album/detail.htm?albumId=11210617" target="_blank"><img src="images/rusuk_album.webp" alt="" width="300px" /></a>
                <h2>ALBUM</h2>
            </div>
        </div>
    </>
    );
}

export default Rusuk;