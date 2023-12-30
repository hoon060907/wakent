const Memberdetail = ({ member }) => {
    switch (member) {
        case 'ine':
            return (
                <div className="member_detail">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/SXE-gIU3yJs?si=6Vc9zck0q4lonl4h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div className="member_info">
                        <h1 style={{ color: "#8A2BE2" }}>아이네</h1>
                        <h2>흐으으으으음~ 하이네~~!</h2>
                        <h3>#둘기 #아잉네 #맏언니즈 </h3>
                        <div>
                            <a href="https://www.youtube.com/channel/UCroM00J2ahCN6k-0-oAiDxg" target="_blank"><img src="images/youtube.svg" alt="" /></a>
                            <a href="https://www.twitch.tv/vo_ine" target="_blank"><img src="images/twitch.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
            )
        case 'jingburger':
            return (
                <div className="member_detail">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/kra0f71EIgc?si=hYmscK6WVDXG6G5x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div className="member_info">
                        <h1 style={{ color: "yellow" }}>징버거</h1>
                        <h2>하이부가</h2>
                        <h3>#똥강아지 #부가땅 #맏언니즈 </h3>
                        <div>
                            <a href="https://www.youtube.com/channel/UCHE7GBQVtdh-c1m3tjFdevQ" target="_blank"><img src="images/youtube.svg" alt="" /></a>
                            <a href="https://www.twitch.tv/jingburger" target="_blank"><img src="images/twitch.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
            )
        case 'lilpa':
            return (
                <div className="member_detail">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/crvPldgKJIo?si=3Bkj8jvhz51ssVkA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div className="member_info">
                        <h1 style={{ color : "#004fa8" }}>릴파</h1>
                        <h2>에블바리 세이~ 리라리라~!</h2>
                        <h3>#박쥐단 #릴파넴 #부산즈 </h3>
                        <div>
                            <a href="https://www.youtube.com/channel/UC-oCJP9t47v7-DmsnmXV38Q" target="_blank"><img src="images/youtube.svg" alt="" /></a>
                            <a href="https://www.twitch.tv/lilpaaaaaa" target="_blank"><img src="images/twitch.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
            )
        case 'jururu':
            return (
                <div className="member_detail">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/rFxJjpSeXHI?si=z03XFzgebzzDxUei" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div className="member_info">
                        <h1 style={{ color : "#ff008b" }}>주르르</h1>
                        <h2>밍나~ 콘르르 콘르르!</h2>
                        <h3>#주폭도 #르르땅 #부산즈</h3>
                        <div>
                            <a href="https://www.youtube.com/channel/UCTifMx1ONpElK5x6B4ng8eg" target="_blank"><img src="images/youtube.svg" alt="" /></a>
                            <a href="https://www.twitch.tv/cotton__123" target="_blank"><img src="images/twitch.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
            )
        case 'gosegu':
            return (
                <div className="member_detail">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/DPEtmqvaKqY?si=Fw0K1SDnj_BdXBqL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div className="member_info">
                        <h1 style={{ color : "#00c3ff" }}>고세구</h1>
                        <h2>하이 빵까루~~~!!</h2>
                        <h3>#세균단 #세구세구 #막내즈 </h3>
                        <div>
                            <a href="https://www.youtube.com/channel/UCV9WL7sW6_KjanYkUUaIDfQ" target="_blank"><img src="images/youtube.svg" alt="" /></a>
                            <a href="https://www.twitch.tv/gosegugosegu" target="_blank"><img src="images/twitch.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
            )
        case 'viichan':
            return (
                <div className="member_detail">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/lLIpFxWtqCQ?si=7sHdSCyptmBmSU6m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div className="member_info">
                        <h1 style={{ color : "#c3ff00" }}>비챤</h1>
                        <h2>하이하이!</h2>
                        <h3>#라니 #챠니 #막내즈 </h3>
                        <div>
                            <a href="https://www.youtube.com/@viichan116" target="_blank"><img src="images/youtube.svg" alt="" /></a>
                            <a href="https://www.twitch.tv/viichan6" target="_blank"><img src="images/twitch.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
            )
        default:
            return null;
    }
}

export default Memberdetail;