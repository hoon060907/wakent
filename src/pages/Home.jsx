import { Link } from "react-router-dom";
import Header from "../components/Header"
import './Home.css';

const Home = () => {
    return (
        <>
      <Header />
      <div className='main_banner'>
        <img src="https://blog.kakaocdn.net/dn/XcusT/btsCODtIRP7/dkdE2SJnyfc1gOSUTvYl3K/img.png" alt="" width="100%" />
      </div>
      <div className='about' id='about'>
        <div className='about_logo'><img src="https://blog.kakaocdn.net/dn/bZnhsl/btsCUzjdJvF/DFKsiOhgk86Y7hsoPyKv0k/tfile.svg" alt="" width="450px" /></div>
        <h1 className='about_text'><span>WAK Entertainment </span>와<br />새로운 음악의 차원을 탐험하세요</h1>
      </div>
      <div className='artists' id='artists'>
        <h1 className='artists_text'>ARTISTS</h1>
        <div className='artists_imgs'>
          <Link to='/isedol' className='artists_isedol'><img src="https://blog.kakaocdn.net/dn/MPaFa/btsCP6CqDeH/zQ9kJJv3jKgz0P0s0gloNk/tfile.svg" alt="" /></Link>
          <Link to='/rusuk' className='artists_rusuk'><img src="https://blog.kakaocdn.net/dn/Iit88/btsCTyychui/8H7KvZkTc2qBZIck4p1nY1/tfile.svg" alt="" /></Link>
        </div>
      </div>
      <div className="staffs" id='staffs'>
        <h1 className='staffs_text'>STAFFS</h1>
        <div className='staffs_content'>
          <div className="staffs_profile">
            <img src="https://i.namu.wiki/i/wjSHYGe82EEXsL33iOrRH5x7sCpp2EScLECiorXm6e0SoacG_OQsJyl859nr3duQDwuRwGlA8XFI0gP341_DLbfsjidfeYOc1vZ9izqU4qJWHFJYxOtNsDc-6kTZSSbexIrslbUjzmIhMl3KUpRNjg.webp" alt="" className='staffs_profile_img' />
            <h1>사장</h1>
            <h2>우왁굳</h2>
            <div className='staffs_links'>
              <a href="https://www.youtube.com/user/woowakgood" className='staffs_link' target='_blank'><img src="https://blog.kakaocdn.net/dn/cZQbOQ/btsCVHafkEA/PQgTpbV5SLXExHOmbLPuJk/tfile.svg" alt="" /></a>
              <a href="https://www.twitch.tv/woowakgood" className='staffs_link' target='_blank'><img src="https://blog.kakaocdn.net/dn/Sq4Cf/btsCLoxhrRL/wjchKgtXJAnXMerZfsKHJk/tfile.svg" alt="" /></a>
            </div>
          </div>
          <div className="staffs_profile">
            <img src="https://blog.kakaocdn.net/dn/J40IB/btsCRhKpOXj/O9Pj8uNk1Q4UrcnpVAnm9k/img.webp" alt="" className='staffs_profile_img' />
            <h1>마네쟈</h1>
            <h2>뢴트게늄</h2>
            <div className='staffs_links'>
              <a href="https://www.youtube.com/channel/UCSWG-hKh0u9tFCoZMRfCfuA" className='staffs_link' target='_blank'><img src="https://blog.kakaocdn.net/dn/cZQbOQ/btsCVHafkEA/PQgTpbV5SLXExHOmbLPuJk/tfile.svg" alt="" /></a>
              <a href="https://www.twitch.tv/111roentgenium" className='staffs_link' target='_blank'><img src="https://blog.kakaocdn.net/dn/Sq4Cf/btsCLoxhrRL/wjchKgtXJAnXMerZfsKHJk/tfile.svg" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}
export default Home;