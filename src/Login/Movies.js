import React, { useEffect, useState } from "react";
import './Browse1.css';
import {IoIosInformationCircleOutline} from "react-icons/io";
import {HiBell} from "react-icons/hi2";
import {AiOutlineSearch, AiFillCaretRight} from "react-icons/ai"
import { Link } from "react-router-dom";

function Movies() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });
    return (
            <div className="allcontain">
                <div className={scrollPosition < 100 ? "original_header" : "change_header"} style={{display:'flex', position:'fixed', top:'0', color:'white', width:'100%',height:'50px' ,zIndex:'10', paddingTop:'1%', fontSize:'0.75vw', fontWeight:'100'}}>
                    <div className="logogo" style={{paddingLeft:'3%'}}><img style={{width: '10vh', cursor:'pointer', zIndex:'1'}} src="img/logo.png" alt=''/></div>
                    <Link to="/browse1" style={{ textDecoration: "none", color:'white', paddingLeft:'2%'}}>
                        <div className="home" style={{paddingLeft:'2%', paddingTop:'3px'}}>홈</div>
                    </Link>
                    <Link to="/genre" style={{ textDecoration: "none", color:'white', paddingLeft:'1%'}}>
                        <div className="series" style={{paddingTop:'3px', width:'50px'}}>시리즈</div>
                    </Link>
                    <div className="movie" style={{paddingLeft:'1%', paddingTop:'3px'}}>영화</div>
                    <div className="contents" style={{paddingLeft:'1%', paddingTop:'3px'}}>NEW! 요즘 대세 콘텐츠</div>
                    <div className="zzim" style={{paddingLeft:'1%', paddingTop:'3px'}}>내가 찜한 콘텐츠</div>
                    <div className="language" style={{paddingLeft:'1%', paddingTop:'3px'}}>언어별로 찾아보기</div>
                    <div className="three" style={{display:'flex', marginLeft:"auto"}}>
                        <div className="search" style={{fontSize:'1.5vw'}}><AiOutlineSearch/></div>
                        <div className="kids" style={{fontSize:'0.8vw', paddingTop:'6px', paddingLeft:'15px'}}>키즈</div>
                        <div className="alram" style={{fontSize:'1.5vw', paddingLeft:'15px'}}><HiBell/></div>
                        <div className="menu" style={{paddingLeft:'10px', paddingRight:'70px'}}>
                            <Link to="/">
                                <img className="menuimg" style={{width:'1.6vw', borderRadius:'4px'}} src="http://occ-0-3683-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229" alt=""></img>
                            </Link>
                                </div>
                    </div>
                </div>
                <div className="title-all" style={{position:'absolute', zIndex:'1', paddingLeft:'3%', paddingTop:'4%', height:'1000px'}}>
                    <div className="series-title" style={{display:'flex'}}>
                        <div className="titletitle" style={{color:'white', fontSize:'4vh'}}>영화</div>
                        <select className='ui-select-medium' style={{width:'5vw', height:'1.8vw', backgroundColor:'rgba(0,0,0,0.8)', color:'white', borderColor:'white', fontSize:'1vw', cursor:'pointer', marginTop:'1%', marginLeft:'12%'}}>
                            <option lang="ko" value="/kr/" data-language="ko" data-country="KR" style={{backgroundColor:'rgba(0,0,0,0.8)'}}>장르</option>
                            <option lang="en" value="/kr-en/" data-language="en" data-country="KR" style={{backgroundColor:'rgba(0,0,0,0.8)'}}>설 연휴 정주행 가이드</option>
                            <option lang="en" value="/kr-en/" data-language="en" data-country="KR" style={{backgroundColor:'rgba(0,0,0,0.8)'}}>한국 드라마</option>
                            <option lang="en" value="/kr-en/" data-language="en" data-country="KR" style={{backgroundColor:'rgba(0,0,0,0.8)'}}>미국 드라마</option>
                            <option lang="en" value="/kr-en/" data-language="en" data-country="KR" style={{backgroundColor:'rgba(0,0,0,0.8)'}}>영국 드라마</option>
                            <option lang="en" value="/kr-en/" data-language="en" data-country="KR" style={{backgroundColor:'rgba(0,0,0,0.8)'}}>아시아 드라마</option>
                            <option lang="en" value="/kr-en/" data-language="en" data-country="KR" style={{backgroundColor:'rgba(0,0,0,0.8)'}}>≪위쳐≫,그 세상 속으로</option>
                            <option lang="en" value="/kr-en/" data-language="en" data-country="KR" style={{backgroundColor:'rgba(0,0,0,0.8)'}}>전 세계 예능이 한곳에!</option>
                            <option lang="en" value="/kr-en/" data-language="en" data-country="KR" style={{backgroundColor:'rgba(0,0,0,0.8)'}}>예능</option>
                            <option lang="en" value="/kr-en/" data-language="en" data-country="KR" style={{backgroundColor:'rgba(0,0,0,0.8)'}}>코미디</option>
                            <option lang="en" value="/kr-en/" data-language="en" data-country="KR" style={{backgroundColor:'rgba(0,0,0,0.8)'}}>로맨스</option>
                            <option lang="en" value="/kr-en/" data-language="en" data-country="KR" style={{backgroundColor:'rgba(0,0,0,0.8)'}}>드라마 장르</option>
                            <option lang="en" value="/kr-en/" data-language="en" data-country="KR" style={{backgroundColor:'rgba(0,0,0,0.8)'}}>액션</option>
                            <option lang="en" value="/kr-en/" data-language="en" data-country="KR" style={{backgroundColor:'rgba(0,0,0,0.8)'}}>스릴러</option>
                        </select>
                    </div>
                    <img style={{width:'37vw', paddingTop:'10%'}} src="https://occ-0-325-988.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABZSdzecgxmS2FpS0uhGNf0jQUmn1zBQ4ckwp-xmTS3U9f9enG9pVr8K04uzuFBCPPXUYeONIjH78QRFlZVpFfBZ-XRikpwjnTLDcaexmoTv1.webp?r=60f" alt="부부의세계"></img>
                    <div className="best" style={{color:'white', fontSize:'1.2vw', paddingTop:'4%', textShadow:'2px 2px 2px black'}}>가벼운 만남과 인간미 없는 데이팅 앱의 시대. 19금 칼럼을 떠맡은<br/>신입 기자와 냉소적인 20대 여자가 데이트의 딜레마에 빠진다.</div>
                    <div className="btntwo" style={{display:'flex', paddingTop:'4%'}}>
                        <button style={{width:'8vw', height:'3vw', marginRight:'15px', backgroundColor:'white',fontSize:'1.2vw', cursor:'pointer'}}><AiFillCaretRight/>재생</button>
                        <button style={{width:'11vw', backgroundColor:'rgba(109, 109, 110, 0.7)', color:'white',fontSize:'1.2vw', cursor:'pointer'}}><IoIosInformationCircleOutline/>상세 정보</button>
                    </div>
                </div>
                <div className="background" style={{position:'relative'}}>
                    <img className="backimg1" style={{width:'100%', position:'relative'}} src="https://occ-0-325-988.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbeecWIsXtksV5D-S1Ln9ZHOBM3vULAlTd0myMP36rjiK50PaXHucOXI8BcnR6EkwOq_5e-4pUOSFnDpgBWa1qw8hnQnrxlbKR0Q.webp?r=8dc" alt=""></img>
                </div>
                <div className="backall" style={{marginTop:'-150px',height:'500px',position:'relative' ,zIndex:'1'}}></div>
            </div>
    )
}

export default Movies;