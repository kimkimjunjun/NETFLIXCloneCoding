import React, { useEffect, useState } from "react";
import './Browse1.css';
import {IoIosInformationCircleOutline} from "react-icons/io";
import {HiBell} from "react-icons/hi2";
import {AiOutlineSearch, AiFillCaretRight} from "react-icons/ai"
import { Link } from "react-router-dom";

function Series() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });
    return (
            <div className="allcontain">
                <div className="original_header" style={{display:'flex', position:'absolute', top:'0', color:'white', width:'100%',height:'50px' ,zIndex:'10', paddingTop:'1%', fontSize:'0.75vw', fontWeight:'100'}}>
                    <div className="logogo" style={{paddingLeft:'3%'}}><img style={{width: '10vh', cursor:'pointer', zIndex:'1'}} src="img/logo.png" alt=''/></div>
                    <Link to="/browse1" style={{ textDecoration: "none", color:'white', paddingLeft:'2%'}}>
                    <div className="home" style={{paddingLeft:'2%', paddingTop:'3px'}}>홈</div>
                    </Link>
                    <div className="series" style={{paddingLeft:'1%', paddingTop:'3px'}}>시리즈</div>
                    <Link to="/movies" style={{ textDecoration: "none", color:'white', paddingLeft:'1.35%'}}>
                        <div className="movie" style={{paddingTop:'3px', width:'30px'}}>영화</div>
                    </Link>
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
                <div className="title-all" style={{position:'absolute', zIndex:'1', paddingLeft:'3%', paddingTop:'3%', height:'1000px', width:'100%'}}>
                    <div className={scrollPosition < 100 ? "original_header1" : "change_header1"} style={{display:'flex',width:'100%',top:'0',position:'fixed', height:'65px',paddingRight:'3%'}}>
                        <div className="titletitle" style={{color:'white', fontSize:'4vh'}}>시리즈</div>
                        <select className='ui-select-medium' style={{width:'6vw', height:'1.8vw', backgroundColor:'rgba(0,0,0,0.8)', color:'white', borderColor:'white', fontSize:'1vw', cursor:'pointer', marginTop:'0.5%', marginLeft:'3%'}}>
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
                        <button style={{width:'2.5vw', height:'1.5vw', backgroundColor:'rgba(255,255,255,0.01', border:'1px solid white', borderRadius:'0px', marginLeft:'auto', cursor:'pointer', marginTop:'18px'}}>
                            <svg width="12" height="12" color="white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon svg-icon-rows"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 6H0V4H24V6ZM24 18V20H0V18H24ZM0 13H12V11H0V13Z" fill="currentColor"></path></svg></button>
                        <div>
                            <button style={{width:'2.5vw', height:'1.5vw', backgroundColor:'rgba(255,255,255,0.01', border:'1px solid white', borderRadius:'0px', marginRight:'130px', cursor:'pointer', marginTop:'18px'}}>
                            <svg width="12" height="12" color="white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon svg-icon-grid"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 3C0.447715 3 0 3.44772 0 4V10C0 10.5523 0.447715 11 1 11H10C10.5523 11 11 10.5523 11 10V4C11 3.44772 10.5523 3 10 3H1ZM1 13C0.447715 13 0 13.4477 0 14V20C0 20.5523 0.447715 21 1 21H10C10.5523 21 11 20.5523 11 20V14C11 13.4477 10.5523 13 10 13H1ZM13 4C13 3.44772 13.4477 3 14 3H23C23.5523 3 24 3.44772 24 4V10C24 10.5523 23.5523 11 23 11H14C13.4477 11 13 10.5523 13 10V4ZM14 13C13.4477 13 13 13.4477 13 14V20C13 20.5523 13.4477 21 14 21H23C23.5523 21 24 20.5523 24 20V14C24 13.4477 23.5523 13 23 13H14Z" fill="currentColor"></path></svg>
                            </button>
                        </div>
                    </div>
                    <img style={{width:'37vw', paddingTop:'3%'}} src="https://occ-0-3683-988.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABSWQaU8tnnoul6teIamAnGOjwxZRDljhMkwPVdvBrbZqsoXfwwbkg3VkU6WxMKuv3uO0Mu4o-ZbPrVEb07dFGOjZrDtB7eDw7aV2BtOrg_A7.webp?r=999" alt="부부의세계"></img>
                    <div className="best" style={{color:'white', fontSize:'1.2vw', paddingTop:'4%', textShadow:'2px 2px 2px black'}}>일과 가정 모두 놓치지 않는 그녀. 다정한 이웃과 친구까지 있어<br/>더없이 행복하다. 그러나 그녀의 세계를 비로소 완성하는건,<br/>세월에도 변함없는 남편의 사랑. 그러니 그 사랑이 흔들린다는건,<br/>완벽한 세계에 균열이 생겼다는 것.</div>
                    <div className="btntwo" style={{display:'flex', paddingTop:'1%'}}>
                        <button style={{width:'8vw', height:'3vw', marginRight:'15px', backgroundColor:'white',fontSize:'1.2vw', cursor:'pointer'}}><AiFillCaretRight/>재생</button>
                        <button style={{width:'11vw', backgroundColor:'rgba(109, 109, 110, 0.7)', color:'white',fontSize:'1.2vw', cursor:'pointer'}}><IoIosInformationCircleOutline/>상세 정보</button>
                    </div>
                </div>
                <div className="background" style={{position:'relative'}}>
                    <img className="backimg1" style={{width:'100%', position:'relative'}} src="https://occ-0-3683-988.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABV7FFGPqzVGqutoEx1gjkIQt4VlCLSqcYe4V_EvhFt-HsG_IfsH8idguWWFRm85Xkexd6gjrVQ9BsAOrseCbTOecVFXgp1M6-Uzq.webp?r=66b" alt=""></img>
                </div>
                <div className="backall" style={{marginTop:'-150px',height:'500px',position:'relative' ,zIndex:'1'}}></div>
            </div>
    )
}

export default Series;