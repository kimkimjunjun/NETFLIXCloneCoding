import { isValidDateValue } from "@testing-library/user-event/dist/utils/edit/isValidDateValue";
import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import "./Login.css";

const LoginTitle = {
    width:'450px',
    height:'660px', 
    textAlign:'center',
    borderRadius:'3px',
    backgroundColor: 'rgba(0,0,0,0.75)'
}

function Login() {
    const ViewContent = () => {
        const [check, setCheck] = useState(false);
        const handleView = () => {
            setCheck(!check)
        }
    }
    return (
        <div className='login' style={{backgroundColor:'#333333', width:'100%', position:'relative'}}>
        <div className='banner1' style={{backgroundColor: 'black'}}>
          <img className="backimg1" style={{width: '117%', opacity:'0.5'}} src="https://assets.nflxext.com/ffe/siteui/vlv3/935156fb-9579-4fc2-ad94-70680402b8ef/7eec8be2-105c-4ce6-b9d9-5ff1dae1042a/KR-ko-20230109-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/935156fb-9579-4fc2-ad94-70680402b8ef/7eec8be2-105c-4ce6-b9d9-5ff1dae1042a/KR-ko-20230109-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/935156fb-9579-4fc2-ad94-70680402b8ef/7eec8be2-105c-4ce6-b9d9-5ff1dae1042a/KR-ko-20230109-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/935156fb-9579-4fc2-ad94-70680402b8ef/7eec8be2-105c-4ce6-b9d9-5ff1dae1042a/KR-ko-20230109-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt=""/>
        </div>
        <div className='header-in' style={{position:'absolute', top:'0px', padding: '20px'}}>
            <Link to="/">
                <img style={{width: '180px', paddingLeft:'40px'}} src="img/logo.png" alt=''/>
                </Link>
        </div>
        <div className="LoginBar" style={{top:'7%',left:'38%' , position:'absolute'}}>
            <div className="loginTitle" style={LoginTitle}>
                <div className="logintxt" style={{fontSize:'32px', color:'white', paddingTop:'14%', paddingRight:'50%'}}>로그인</div>
                <div style={{paddingTop:'7%'}}>
                    <input type='text' style={{width:'314px', height:'45px', backgroundColor:'#333333' ,borderRadius:'7px',borderBottomColor:'#e87c03',borderTopColor:'#333333',borderLeftColor:'#333333',borderRightColor:'#333333',fontSize:'16px',color:'white'}} className="id"></input>
                    <div className="idvalue" style={{position:'absolute', top:'23.5%',paddingLeft:'18%', color:'#8c8c8c'}}>이메일 주소 또는 전화번호</div>
                    <div className="email" style={{color:'#e87c03', fontSize:'13px',fontWeight:'500', paddingRight:'10%', paddingTop:'2%'}}>정확한 이메일 주소나 전화번호를 입력하세요.</div>
                </div>
                <div style={{paddingTop:'5%'}}>
                    <input type='password' style={{width:'314px', height:'45px', backgroundColor:'#333333', borderRadius:'7px',borderBottomColor:'#e87c03',borderTopColor:'#333333',borderLeftColor:'#333333',borderRightColor:'#333333',fontSize:'16px',color:'white'}} className="pw"></input>
                    <div className="idvalue" style={{position:'absolute', top:'38.5%',paddingLeft:'18%', color:'#8c8c8c'}}>비밀번호</div>
                    <div className="email" style={{color:'#e87c03', fontSize:'13px',fontWeight:'500', paddingRight:'20%', paddingTop:'2%'}}>비밀번호는 4~60자 사이여야 합니다.</div>
                </div>
                <Link to="/browse">
                    <input style={{fontSize:'16px',color:'white',marginTop:'6%',backgroundColor:'red',border:'none',borderRadius:'5px' ,width:'314px', height:'48px',cursor:'pointer'}} value={"로그인"} type="button"></input>
                </Link>
                <div style={{paddingRight:'1px', paddingTop:'10px'}}>
                    <input className="inpput" style={{accentColor: "#b3b3b3" , boxSizing:'border-box', width:'22px', height:'17px'}} type='checkbox' value="true" tabindex="0" checked></input>
                    <label style={{color:'#b3b3b3', fontSize:'13px'}}>로그인 정보 저장</label>
                    <a className="aa" href="https://www.netflix.com/LoginHelp" style={{fontSize:'13px', color:'#b3b3b3', paddingLeft:'15%'}}>도움이 필요하신가요?</a>
                </div>
                <div style={{paddingTop:'5%'}}>
                    <p style={{color:'#737373', paddingRight:'4%', fontSize:'16px'}}>Netflix 회원이 아닌가요?<a className="aa" href="https://www.netflix.com/" style={{color:'white', fontSize:'16px',paddingLeft:'5px'}}>지금 가입하세요.</a></p>
                    
                </div>
                <div style={{alignItems:'center', paddingRight:'10%'}}>
                    <p style={{color:'#8c8c8c', fontSize:'13px', width:'400px', paddingLeft:'5%'}}>이 페이지는 Google reCAPTCHA의 보호를 받아<br/>사용자가 로봇이 아님을 확인합니다.<a style={{paddingLeft:'3px', color:'#0071eb', cursor:'pointer'}}>자세히 알아보기.</a></p>
                </div>
                <div style={{color:'#8c8c8c', fontSize:'13px', width:'400px', paddingLeft:'5%'}}>
                    <p id="text">Google reCAPTCHA가 수집하는 정보에는 Google <br/>개인정보처리방침과 서비스 약관이 적용되며, 해당 <br/>정보는 reCAPTCHA 서비스 제공, 관리 및 개선과 <br/>일반적인 보안 유지에 사용됩니다(Google의 개인 맞춤 <br/>광고에 사용 안 함).</p>
                </div>
            </div>
        </div>
        <img style={{position:'absolute', opacity:'0.7', top:'62.5%'}} src="./img/PHONE1.png" alt=""></img>
      </div>
    )
}

export default Login;