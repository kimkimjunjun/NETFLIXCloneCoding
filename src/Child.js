import React from "react";

function Child() {
    return (
        <div className="child-all" style={{display: 'flex',marginTop:'10px' , justifyContent:'center', backgroundColor:'black', paddingTop:'3%', height:'500px'}}>
            <div className="cild-all" style={{color:'white', paddingTop:'3%', paddingLeft:'10%'}}>
                <div className="child-text" style={{fontSize:'50px',fontWeight:'500',paddingTop:'1%'}}>
                    어린이 전용 프로필을
                    <br/>만들어 보세요.
                </div>
                <div className="child-text-1" style={{fontSize:'26px', paddingTop:'5%'}}>
                    자기만의 공간에서 좋아하는 캐릭터와 즐기는
                    <br/>신나는 모험. 자녀에게 이 특별한 경험을
                    <br/>선물하세요. 넷플릭스 회원이라면 무료입니다.
                </div>
            </div>
            <div className="childimg" style={{paddingLeft:'3%'}}>
                <img style={{width: '80%'}} src="https://occ-0-2218-988.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABe3Dqef6rg30BxYraI75i97IeQjD0YxUuToAnSA23dl0XQFrjXaFTWIB0HHy4TH_s094NU-9IjLpE_96AvWpTZTAQOR_icyEYcsB.png?r=acf" alt=""/>
            </div>
        </div>
    )
}

export default Child;