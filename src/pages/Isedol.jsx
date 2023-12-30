import { FaBars } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6";
import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Isedol.css';
import Memberdetail from "../components/Memberdetail";
import Member from "../components/Member";

const Isedol = () => {
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState(null);
    const members = ['ine', 'jingburger', 'lilpa', 'jururu', 'gosegu', 'viichan'];

    const onClick = cate => {
        setCategory(category ? (category===cate?null:cate) : cate);
    };

    return (
        <>
            <header className="isedol_header">
                <Link to='/'><img src="images/wak_logo.svg" alt="" width="70px" /></Link>
                <ul className={classNames('isedol_header_navbar', {open})}> 
                    <li><a href="#"><img src="images/isedol_logo.webp" alt="" height="50px" /></a></li>
                    <li><a href="#isedol_info">INFO</a></li>
                    <li><a href="#isedol_members">MEMBERS</a></li>
                    <li><a href="#isedol_discography">DISCOGRAPHY</a></li>
                </ul>
                <div className="isedol_header_main">
                    <a href="https://www.youtube.com/@waktaverse" className="header_ytb" target="_blank"><img src="images/youtube_icon.svg" alt="logo" width="30px" /></a>
                    <a href="https://cafe.naver.com/steamindiegame" className="header_cafe" target="_blank"><img src="images/cafe_icon.svg" alt="logo" width="26px" /></a>
                    <div className="isedol_header_menu_icon" onClick={
                        () => {
                            setOpen(open?false:true)
                        }
                    }>{open?<FaXmark />:<FaBars />}</div>
                </div>
            </header>
            <div className="isedol_banner">
                <img src="images/isedol.webp" alt="" className="isedol_banner_img" />
                <img src="images/isedol_logo2.webp" alt="" className="isedol_banner_logo" />
            </div>
            <div className="isedol_info" id="isedol_info">
                <img src="images/isedol.webp" alt="" className="isedol_info_img" />
                <div className="isedol_info_info">
                    <h1>이세계아이돌</h1>
                    <h2>차원을 넘어! 안녕하세요, 이세계아이돌입니다!</h2>
                    <h3>데뷔일</h3>
                    <p>2021년 12월 17일</p>
                    <h4>이세계아이돌은 왁 엔터테인먼트 소속 대한민국의 6인조 버추얼 걸그룹이다. 
                        오디션부터 활동까지 전부 가상의 세계에서 진행된 메타버스 프로젝트로, 
                        화려하고 리얼한 밴드 사운드 위에 다채로운 음색이 돋보이는 싱글 'RE : WIND'를 발표하며 본격 데뷔를 알렸고 이어 '겨울봄', 'Another World', '이세계 페스티벌' 등 다양한 음악을 히트시키며 화려한 역사를 쓰고 있는 최고의 아이돌 그룹이다.</h4>
                    <div>
                        <ul>
                            <li><a href="https://open.spotify.com/artist/08OoIISROuIG0Hw8pVhYE6" target="_blank"><img src="images/spotify.svg" alt="" /></a></li>
                            <li><a href="https://open.spotify.com/artist/08OoIISROuIG0Hw8pVhYE6" target="_blank"><img src="images/melon.svg" alt="" /></a></li>
                            <li><a href="https://www.music-flo.com/detail/artist/405114569/track/" target="_blank"><img src="images/flo.svg" alt="" /></a></li>
                            <li><a href="https://music.apple.com/kr/artist/%EC%9D%B4%EC%84%B8%EA%B3%84-%EC%95%84%EC%9D%B4%EB%8F%8C/1599900374" target="_blank"><img src="images/apple.svg" alt="" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="isedol_members" id="isedol_members">
                <h1>MEMBERS</h1>
                <ul>
                    {members.map(member => (
                        <Member active={category === member} onClick={onClick} member={member} />
                    ))}
                </ul>
                <Memberdetail member={category} />
            </div>
            <div className="isedol_discography" id="isedol_discography">
                <h1>DISCOGRAPHY</h1>
                <ul>
                    <li><a href="https://www.melon.com/album/detail.htm?albumId=10815040" target="_blank"><img src="images/rewind.webp" alt="" /></a></li>
                    <li><a href="https://www.melon.com/album/detail.htm?albumId=10889597" target="_blank"><img src="images/winterspring.webp" alt="" /></a></li>
                    <li><a href="https://www.melon.com/album/detail.htm?albumId=11269236" target="_blank"><img src="images/lockdown.webp" alt="" /></a></li>
                    <li><a href="https://www.melon.com/album/detail.htm?albumId=11290352" target="_blank"><img src="images/anotherworld.webp" alt="" /></a></li>
                    <li><a href="https://www.melon.com/album/detail.htm?albumId=11308283" target="_blank"><img src="images/kidding.webp" alt="" /></a></li>
                    <li><a href="https://www.melon.com/album/detail.htm?albumId=11332440" target="_blank"><img src="images/isefe.webp" alt="" /></a></li>
                </ul>
            </div>
        </>
    )
}

export default Isedol;