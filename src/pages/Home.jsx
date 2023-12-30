import { Link } from "react-router-dom";
import Header from "../components/Header"
import './Home.css';

const Home = () => {
    return (
        <>
      <Header />
      <div className='main_banner'>
        <img src="images/main_img1.png" alt="" width="100%" />
      </div>
      <div className='about' id='about'>
        <div className='about_logo'><img src="images/wak_logo.svg" alt="" width="450px" /></div>
        <h1 className='about_text'><span>WAK Entertainment </span>와<br />새로운 음악의 차원을 탐험하세요</h1>
      </div>
      <div className='artists' id='artists'>
        <h1 className='artists_text'>ARTISTS</h1>
        <div className='artists_imgs'>
          <Link to='/isedol' className='artists_isedol'><img src="images/isedol_profile.svg" alt="" /></Link>
          <Link to='/rusuk' className='artists_rusuk'><img src="images/rusuk_profile.svg" alt="" /></Link>
        </div>
      </div>
      <div className="staffs" id='staffs'>
        <h1 className='staffs_text'>STAFFS</h1>
        <div className='staffs_content'>
          <div className="staffs_profile">
            <img src="images/wakgood_profile.webp" alt="" className='staffs_profile_img' />
            <h1>사장</h1>
            <h2>우왁굳</h2>
            <div className='staffs_links'>
              <a href="https://www.youtube.com/user/woowakgood" className='staffs_link' target='_blank'><img src="images/youtube.svg" alt="" /></a>
              <a href="https://www.twitch.tv/woowakgood" className='staffs_link' target='_blank'><img src="images/twitch.svg" alt="" /></a>
            </div>
          </div>
          <div className="staffs_profile">
            <img src="images/roent_profile.webp" alt="" className='staffs_profile_img' />
            <h1>마네쟈</h1>
            <h2>뢴트게늄</h2>
            <div className='staffs_links'>
              <a href="https://www.youtube.com/channel/UCSWG-hKh0u9tFCoZMRfCfuA" className='staffs_link' target='_blank'><img src="images/youtube.svg" alt="" /></a>
              <a href="https://www.twitch.tv/111roentgenium" className='staffs_link' target='_blank'><img src="images/twitch.svg" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}
export default Home;