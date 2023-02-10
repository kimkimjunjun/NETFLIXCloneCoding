import React from "react";

function Adverse() {
    return (
        <div className="blackback" style={{marginTop: '5px' ,paddingTop:'1%' , alignContent:'center', backgroundColor:'black', height:'500px'}}>
            <div className="tvtext-all" style={{display: 'flex', width:'100%' , justifyContent: 'center'}}>
                <div className="tvtext" style={{color:'white'}}>
                    <div className="tvfun" style={{fontSize:'50px',fontWeight:'600',paddingTop:'25%', paddingleft:'100px'}}>
                        TV로 즐기세요.
                    </div>
                    <div className="smarttv" style={{fontSize:'26px', paddingTop:'5%'}}>
                        스마트 TV, PlayStation, Xbox, Chromecast,<br/>
                        Apple TV, 블루레이 플레이어 등 다양한<br/>
                        디바이스에서 시청하세요.
                    </div>
                </div>
                <div className="tvimg" style={{zIndex:'1'}}>
                    <img style={{width:'80%', paddingLeft:'12%'}} alt="" className="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" data-uia="our-story-card-img"/>
                </div>
                <div className="tvvdo" style={{position: 'absolute', paddingLeft: '608px', paddingTop:'80px'}}>
                    <video className="our-story-card-video" style={{width:'78%'}} autoPlay muted loop>
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"></source>
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Adverse;