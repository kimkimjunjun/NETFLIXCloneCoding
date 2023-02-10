import React, { useState } from 'react';
import { Link, useNavigate} from "react-router-dom";

const headStyle = {
    display: "flex",
    padding: "40px",
    color: "White",
    position: 'absolute',
    width: '100%'
};



function Header() {
    return (
        <div className='header' style={headStyle}>
            <div className='header-in' style={{}}>
                    <img style={{width: '180px', cursor:'pointer', zIndex:'1'}} src="img/logo.png" alt=''/>
            </div>
            <div className='header-lang' style={{marginLeft:'auto', marginRight:'2%', zIndex:'1'}}>
                <select className='ui-select-medium' style={{width:'94px', height:'36px', backgroundColor:'black', color:'white', opacity:'0.8', borderRadius:'2px', borderColor:'white', fontSize:'14px'}}>
                    <option lang="ko" value="/kr/" data-language="ko" data-country="KR" style={{borderRadius:'5px', backgroundColor:'gray'}}>한국어</option>
                    <option lang="en" value="/kr-en/" data-language="en" data-country="KR" style={{borderRadius:'5px', backgroundColor:'gray'}}>English</option>
                </select>
            </div>
                <div className='header-login' style={{marginRight:'100px', cursor:'pointer',backgroundColor:'red', width:'82px', height:'35px', textAlign:'center', borderRadius: '3px', zIndex:'1'}}>
                    <Link to="/login" style={{textDecoration: "none"}}>
                        <div style={{paddingTop:'5px', cursor:'pointer', color:'white'}}>로그인</div>
                    </Link>
                </div>
        </div>
    )
}

export default Header;