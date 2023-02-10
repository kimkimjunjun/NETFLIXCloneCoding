import React from "react";

function Offline() {
    return (
        <div className="Offline-all" style={{marginTop:'10px',backgroundColor: 'black', height:'500px'}}>
            <div className="tvtll" style={{display:'flex', justifyContent:'center'}}>
                <div className="tvimgimg" style={{paddingTop:'50px'}}>
                    <img style={{width:'80%'}} src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt=""></img>
                </div>
                
                <div className="textallall" style={{color:'white'}}>
                    <div className="tvimgtext" style={{fontSize:'50px',fontWeight:'500',paddingTop:'22%'}}>
                        즐겨 보는 콘텐츠를
                        <br/>저장해 오프라인으로
                        <br/>시청하세요.
                    </div>
                    <div className="tvimgtext-1" style={{fontSize:'26px', paddingTop:'5%'}}>
                        광고형 베이식을 제외한 모든 멤버십에서
                        <br/>이용할 수 있습니다.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offline;