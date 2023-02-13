import React, { useEffect, useState, useRef } from "react";
import './Browse1.css';
import {IoIosInformationCircleOutline} from "react-icons/io";
import {HiBell} from "react-icons/hi2";
import {AiOutlineSearch, AiFillCaretRight} from "react-icons/ai"
import { Link } from "react-router-dom";
import styeld from "styled-components";
import SlideComponent from "./SlideComponent";

function Browse1() {

    const [gnbStatus, setGnbStatus] = useState(false);

    const onClickGnb = (e) => {
        setGnbStatus(prevStatus => prevStatus ? false : true);
    };

    const GnbMenu = () => {
        <div id="gnbMenu" className="pt-4 pb-8">
            <div className="gooodflex">
                <div className="gray500">
                    <a className="hover:underline" href="/1">메뉴1</a>
                    <a className="hover:underline" href="/2">메뉴2</a>
                    <a className="hover:underline" href="/3">메뉴3</a>
                </div>
            </div>
        </div>
    };

    const Wrapper = styeld.div`
    width: 200px;
    height: 200px;
    overflow: hidden;
    `;

    const SlideWrapper = styeld.div`    
    display: flex;
    width: 100%;
    height: 100%;
    `;

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
                    <div className="home" style={{paddingLeft:'2%', paddingTop:'3px'}}>홈</div>
                    <Link to="/genre" style={{ textDecoration: "none", color:'white', width:'50px', paddingLeft:'1%'}}>
                        <div className="series" style={{paddingLeft:'1%', paddingTop:'3px'}}>시리즈</div>
                    </Link>
                    <Link to="/movies" style={{ textDecoration: "none", color:'white', paddingLeft:'1%'}}>
                    <div className="movie" style={{paddingLeft:'1%', paddingTop:'3px',width:'30px'}}>영화</div>
                    </Link>
                    <div className="contents" style={{paddingLeft:'1%', paddingTop:'3px'}}>NEW! 요즘 대세 콘텐츠</div>
                    <div className="zzim" style={{paddingLeft:'1%', paddingTop:'3px'}}>내가 찜한 콘텐츠</div>
                    <div className="language" style={{paddingLeft:'1%', paddingTop:'3px'}}>언어별로 찾아보기</div>
                    <div className="three" style={{display:'flex', marginLeft:"auto"}}>
                        <div className="search" style={{fontSize:'1.5vw'}}><AiOutlineSearch/></div>
                        <div className="kids" style={{fontSize:'0.8vw', paddingTop:'6px', paddingLeft:'15px'}}>키즈</div>
                        <div className="alram" style={{fontSize:'1.5vw', paddingLeft:'15px'}}><HiBell/></div>
                        <div className="menu" style={{paddingLeft:'10px', paddingRight:'70px'}}>
                                <img className="menuimg" style={{width:'1.6vw', borderRadius:'4px'}} src="http://occ-0-3683-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229" alt0="" onClick={onClickGnb}>
                                </img>
                                {gnbStatus ? <GnbMenu/> : null}
                                </div>
                    </div>
                </div>
                <div className="title-all" style={{position:'absolute', zIndex:'1', paddingLeft:'3%', paddingTop:'8%', height:'1000px'}}>
                    <img style={{width:'37vw'}} src="http://occ-0-3683-988.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABSdhuSphBycB2aMtO4WtAiRh4PjDxhzZGhTgfIqARz2hKQsnF6Y9NxE7tadt7SKWSCUkWxas2fGsqcQC4VbaAAg4uLB9MTvS-smQVqH_3NRWZDwijizaaeTzvtzuExPBGyqsho4n_Ql1N4aIqZsUjI0Z0obfPdKfiEOPpn2ywdiVlsyofcPTtw.webp?r=f8c" alt="100"></img>
                    <div className="today" style={{color:'white', fontSize:'1.6vw'}}>
                    <svg style={{width:'2vw', paddingRight:'20px'}} viewBox="0 0 28 30" class="svg-icon svg-icon-top-10-badge"><rect x="0" width="28" height="30" rx="3" fill="#e50914"></rect><path d="M16.8211527,22.1690594 C17.4133103,22.1690594 17.8777709,21.8857503 18.2145345,21.3197261 C18.5512982,20.7531079 18.719977,19.9572291 18.719977,18.9309018 C18.719977,17.9045745 18.5512982,17.1081018 18.2145345,16.5414836 C17.8777709,15.9754594 17.4133103,15.6921503 16.8211527,15.6921503 C16.2289952,15.6921503 15.7645345,15.9754594 15.427177,16.5414836 C15.0904133,17.1081018 14.9223285,17.9045745 14.9223285,18.9309018 C14.9223285,19.9572291 15.0904133,20.7531079 15.427177,21.3197261 C15.7645345,21.8857503 16.2289952,22.1690594 16.8211527,22.1690594 M16.8211527,24.0708533 C15.9872618,24.0708533 15.2579042,23.8605988 14.6324861,23.4406836 C14.0076618,23.0207685 13.5247891,22.4262352 13.1856497,21.6564897 C12.8465103,20.8867442 12.6766436,19.9786109 12.6766436,18.9309018 C12.6766436,17.8921018 12.8465103,16.9857503 13.1856497,16.2118473 C13.5247891,15.4379442 14.0076618,14.8410352 14.6324861,14.4205261 C15.2579042,14.0006109 15.9872618,13.7903564 16.8211527,13.7903564 C17.6544497,13.7903564 18.3844012,14.0006109 19.0098194,14.4205261 C19.6352376,14.8410352 20.1169224,15.4379442 20.4566558,16.2118473 C20.7952012,16.9857503 20.9656618,17.8921018 20.9656618,18.9309018 C20.9656618,19.9786109 20.7952012,20.8867442 20.4566558,21.6564897 C20.1169224,22.4262352 19.6352376,23.0207685 19.0098194,23.4406836 C18.3844012,23.8605988 17.6544497,24.0708533 16.8211527,24.0708533" fill="#FFFFFF"></path><polygon fill="#FFFFFF" points="8.86676 23.9094206 8.86676 16.6651418 6.88122061 17.1783055 6.88122061 14.9266812 11.0750267 13.8558085 11.0750267 23.9094206"></polygon><path d="M20.0388194,9.42258545 L20.8085648,9.42258545 C21.1886861,9.42258545 21.4642739,9.34834303 21.6353285,9.19926424 C21.806383,9.05077939 21.8919103,8.83993091 21.8919103,8.56731273 C21.8919103,8.30122788 21.806383,8.09572485 21.6353285,7.94961576 C21.4642739,7.80410061 21.1886861,7.73104606 20.8085648,7.73104606 L20.0388194,7.73104606 L20.0388194,9.42258545 Z M18.2332436,12.8341733 L18.2332436,6.22006424 L21.0936558,6.22006424 C21.6323588,6.22006424 22.0974133,6.31806424 22.4906012,6.51465818 C22.8831952,6.71125212 23.1872921,6.98684 23.4028921,7.34142182 C23.6178982,7.69659758 23.7259952,8.10522788 23.7259952,8.56731273 C23.7259952,9.04246424 23.6178982,9.45762788 23.4028921,9.8122097 C23.1872921,10.1667915 22.8831952,10.4429733 22.4906012,10.6389733 C22.0974133,10.8355673 21.6323588,10.9335673 21.0936558,10.9335673 L20.0388194,10.9335673 L20.0388194,12.8341733 L18.2332436,12.8341733 Z" fill="#FFFFFF"></path><path d="M14.0706788,11.3992752 C14.3937818,11.3992752 14.6770909,11.322063 14.9212,11.1664509 C15.1653091,11.0114327 15.3553697,10.792863 15.4913818,10.5107418 C15.6279879,10.2286206 15.695697,9.90136 15.695697,9.52717818 C15.695697,9.1535903 15.6279879,8.82573576 15.4913818,8.54361455 C15.3553697,8.26149333 15.1653091,8.04351758 14.9212,7.88790545 C14.6770909,7.73288727 14.3937818,7.65508121 14.0706788,7.65508121 C13.7475758,7.65508121 13.4642667,7.73288727 13.2201576,7.88790545 C12.9760485,8.04351758 12.7859879,8.26149333 12.6499758,8.54361455 C12.5139636,8.82573576 12.4456606,9.1535903 12.4456606,9.52717818 C12.4456606,9.90136 12.5139636,10.2286206 12.6499758,10.5107418 C12.7859879,10.792863 12.9760485,11.0114327 13.2201576,11.1664509 C13.4642667,11.322063 13.7475758,11.3992752 14.0706788,11.3992752 M14.0706788,12.9957842 C13.5634545,12.9957842 13.0995879,12.9090691 12.6784848,12.7344509 C12.2573818,12.5604267 11.8915152,12.3163176 11.5808848,12.0027176 C11.2708485,11.6891176 11.0314909,11.322063 10.8634061,10.9003661 C10.6953212,10.479263 10.6115758,10.0213358 10.6115758,9.52717818 C10.6115758,9.03302061 10.6953212,8.57568727 10.8634061,8.1539903 C11.0314909,7.73288727 11.2708485,7.36523879 11.5808848,7.05163879 C11.8915152,6.73803879 12.2573818,6.49452364 12.6784848,6.31990545 C13.0995879,6.14588121 13.5634545,6.05857212 14.0706788,6.05857212 C14.577903,6.05857212 15.0417697,6.14588121 15.4628727,6.31990545 C15.8839758,6.49452364 16.2498424,6.73803879 16.5604727,7.05163879 C16.871103,7.36523879 17.1098667,7.73288727 17.2779515,8.1539903 C17.4460364,8.57568727 17.5297818,9.03302061 17.5297818,9.52717818 C17.5297818,10.0213358 17.4460364,10.479263 17.2779515,10.9003661 C17.1098667,11.322063 16.871103,11.6891176 16.5604727,12.0027176 C16.2498424,12.3163176 15.8839758,12.5604267 15.4628727,12.7344509 C15.0417697,12.9090691 14.577903,12.9957842 14.0706788,12.9957842" fill="#FFFFFF"></path><polygon fill="#FFFFFF" points="8.4639503 12.8342327 6.65837455 13.2666206 6.65837455 7.77862061 4.65323515 7.77862061 4.65323515 6.22012364 10.4690897 6.22012364 10.4690897 7.77862061 8.4639503 7.77862061"></polygon></svg>
                    오늘 시리즈 순위 3위 아마두아무다ㅜ</div>
                    <div className="best" style={{color:'white', fontSize:'1.2vw', paddingTop:'4%', textShadow:'2px 2px 2px black'}}>최고의 피지컬을 자랑하는 100인의 참가자. 연이은 험난한<br/>대결에서 치열한 경쟁을 펼친다. 최후의 1인에게 주어지는 영예와<br/>상금을 차지하기 위하여.</div>
                    <div className="btntwo" style={{display:'flex', paddingTop:'4%'}}>
                        <button style={{width:'8vw', height:'3vw', marginRight:'15px', backgroundColor:'white',fontSize:'1.2vw', cursor:'pointer'}}><AiFillCaretRight/>재생</button>
                        <button style={{width:'11vw', backgroundColor:'rgba(109, 109, 110, 0.7)', color:'white',fontSize:'1.2vw', cursor:'pointer'}}><IoIosInformationCircleOutline/>상세 정보</button>
                    </div>
                </div>
                <div className="background" style={{position:'relative'}}>
                    <img className="backimg1" style={{width:'100%', position:'relative'}} src="http://occ-0-3683-988.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdNgUNRAWcTAZII-TPYfaSwbA0KM2Hc-AuvlXtg7V-9rYzouAUI6mW0UoUguje4TiO2aiOH_xSxfFQ6kWGIxoSaM-uUyByHagRY9.webp?r=eba" alt=""></img>
                </div>
                <div className="backall" style={{marginTop:'-13.5vw',height:'500px',position:'relative' ,zIndex:'1'}}>
                    <div className="hello" style={{color:'white', fontSize:'1.5vw', paddingLeft:'3.5%'}}>오늘 대한민국의 TOP 10 시리즈</div>
                    <SlideComponent/>
                </div>
                
            </div>
    )
}


export default Browse1;