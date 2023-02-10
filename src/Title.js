import React from "react";


function Title() {
    return (
        <div className="Title" style={{color: 'white', textAlign:'center', paddingTop: '13%'}}>
            <div className="Title-1" style={{fontSize: '64px', }}>
                영화와 시리즈를 <br/>무제한으로.
            </div>
            <div className="Title-2" style={{fontSize: '26px', paddingTop: '1%'}}>
                다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
            </div>
            <div className="Title-3" style={{fontSize: '19px', paddingTop: '2%', paddingBottom:'1%'}}>
                시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.
            </div>
            <input className="inppp" type={'text'} style={{width:'500px', height:'70px'}}></input>
            <button style={{width:'207.5px', height:'75px', backgroundColor: 'red', border:'none', borderRadius:'3px', fontSize:'30px', color:'white',paddingBottom:'18px'}}>시작하기 </button>
        </div>
    )
}

export default Title;