import React from "react";

function Device() {
    return (
        <div className="Device-all" style={{marginTop:'10px',backgroundColor: 'black'}}>
            <div className="tvtll" style={{display:'flex', justifyContent:'center'}}>
                <div className="tvimgimg" style={{marginRight:'2%', paddingTop:'50px',zIndex:'1'}}>
                    <img style={{width:'90%'}} src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt=""></img>
                </div>
                <div className="tvvdo" style={{position: 'absolute', paddingRight:'525px', paddingTop:'95px'}}>
                    <video className="our-story-card-video" style={{width:'73%'}} autoPlay muted loop>
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4"></source>
                    </video>
                </div>
                <div className="textallall" style={{color:'white'}}>
                    <div className="tvimgtext" style={{fontSize:'50px',fontWeight:'500',paddingTop:'22%'}}>
                        다양한 디바이스에서
                        <br/>시청하세요.
                    </div>
                    <div className="tvimgtext-1" style={{fontSize:'26px', paddingTop:'5%'}}>
                        각종 영화와 시리즈를 스마트폰, 태블릿, 노트북,
                        <br/>TV에서 무제한으로 스트리밍하세요. 추가
                        <br/>요금이 전혀 없습니다.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Device;