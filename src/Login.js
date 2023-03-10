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
                <div className="logintxt" style={{fontSize:'32px', color:'white', paddingTop:'14%', paddingRight:'50%'}}>?????????</div>
                <div style={{paddingTop:'7%'}}>
                    <input type='text' style={{width:'314px', height:'45px', backgroundColor:'#333333' ,borderRadius:'7px',borderBottomColor:'#e87c03',borderTopColor:'#333333',borderLeftColor:'#333333',borderRightColor:'#333333',fontSize:'16px',color:'white'}} className="id"></input>
                    <div className="idvalue" style={{position:'absolute', top:'23.5%',paddingLeft:'18%', color:'#8c8c8c'}}>????????? ?????? ?????? ????????????</div>
                    <div className="email" style={{color:'#e87c03', fontSize:'13px',fontWeight:'500', paddingRight:'10%', paddingTop:'2%'}}>????????? ????????? ????????? ??????????????? ???????????????.</div>
                </div>
                <div style={{paddingTop:'5%'}}>
                    <input type='password' style={{width:'314px', height:'45px', backgroundColor:'#333333', borderRadius:'7px',borderBottomColor:'#e87c03',borderTopColor:'#333333',borderLeftColor:'#333333',borderRightColor:'#333333',fontSize:'16px',color:'white'}} className="pw"></input>
                    <div className="idvalue" style={{position:'absolute', top:'38.5%',paddingLeft:'18%', color:'#8c8c8c'}}>????????????</div>
                    <div className="email" style={{color:'#e87c03', fontSize:'13px',fontWeight:'500', paddingRight:'20%', paddingTop:'2%'}}>??????????????? 4~60??? ???????????? ?????????.</div>
                </div>
                <Link to="/browse">
                    <input style={{fontSize:'16px',color:'white',marginTop:'6%',backgroundColor:'red',border:'none',borderRadius:'5px' ,width:'314px', height:'48px',cursor:'pointer'}} value={"?????????"} type="button"></input>
                </Link>
                <div style={{paddingRight:'1px', paddingTop:'10px'}}>
                    <input className="inpput" style={{accentColor: "#b3b3b3" , boxSizing:'border-box', width:'22px', height:'17px'}} type='checkbox' value="true" tabindex="0" checked></input>
                    <label style={{color:'#b3b3b3', fontSize:'13px'}}>????????? ?????? ??????</label>
                    <a className="aa" href="https://www.netflix.com/LoginHelp" style={{fontSize:'13px', color:'#b3b3b3', paddingLeft:'15%'}}>????????? ???????????????????</a>
                </div>
                <div style={{paddingTop:'5%'}}>
                    <p style={{color:'#737373', paddingRight:'4%', fontSize:'16px'}}>Netflix ????????? ?????????????<a className="aa" href="https://www.netflix.com/" style={{color:'white', fontSize:'16px',paddingLeft:'5px'}}>?????? ???????????????.</a></p>
                    
                </div>
                <div style={{alignItems:'center', paddingRight:'10%'}}>
                    <p style={{color:'#8c8c8c', fontSize:'13px', width:'400px', paddingLeft:'5%'}}>??? ???????????? Google reCAPTCHA??? ????????? ??????<br/>???????????? ????????? ????????? ???????????????.<a style={{paddingLeft:'3px', color:'#0071eb', cursor:'pointer'}}>????????? ????????????.</a></p>
                </div>
                <div style={{color:'#8c8c8c', fontSize:'13px', width:'400px', paddingLeft:'5%'}}>
                    <p id="text">Google reCAPTCHA??? ???????????? ???????????? Google <br/>??????????????????????????? ????????? ????????? ????????????, ?????? <br/>????????? reCAPTCHA ????????? ??????, ?????? ??? ????????? <br/>???????????? ?????? ????????? ???????????????(Google??? ?????? ?????? <br/>????????? ?????? ??? ???).</p>
                </div>
            </div>
        </div>
        <img style={{position:'absolute', opacity:'0.7', top:'62.5%'}} src="./img/PHONE1.png" alt=""></img>
      </div>
    )
}

export default Login;