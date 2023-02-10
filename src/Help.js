import React,{useState} from "react"
import "./App.css"

function changedisplay() {
    const content = document.getElementById("box");
    content.style.display = "none";
}

function changedisplay1() {
    const content = document.getElementById("content");
    content.style.display = "block";
}

const showmenu = {
    width: "376px",
    height: "500px",
    position: "absolute",
    display:'none',
    transition: "1s"
};

const hidemenu = {
    width: "376px",
    height: "500px",
    position: "absolute",
    display: 'block',
    transition: "1s"
};


function Help() {
    const [isOpne, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(isOpne => !isOpne);
    } 
    return (
        <div className="Help-title" style={{color: 'white',paddingTop:'5%' , marginTop:'10px', backgroundColor:'black'}}>
            <div className="almost" style={{textAlign:'center',fontSize: '50px', fontWeight:'500'}}>
                자주 묻는 질문
            </div>
            <div className="what-all" style={{justifyContent:'center',fontSize:'26px', paddingTop:'3%', backgroundColor:'black',height:'900px'}}>
                <div className="what" style={{margin:'auto',marginBottom:'10px',height:'76.5px',verticalAlign:'middle',width:'815px', backgroundColor:'#303030', display:'flex', cursor:'pointer'}} onclick={changedisplay1}>
                    <div style={{paddingTop:'20px', paddingLeft:'30px'}}>넷플릭스란 무엇인가요?</div>
                    <div style={{marginLeft:'auto', marginTop:'-8px', paddingRight:'20px', fontSize:'60px', fontWeight:'100'}}>+</div>
                </div>
                <div id="content" className="content" style={showmenu}>넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다.
                    저렴한 월 요금으로 원하는 시간에 원하는 만큼 즐길 수 있습니다. 무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 시리즈와 영화가 제공됩니다.</div>
                <div className="what" style={{margin:'auto',marginBottom:'10px',height:'76.5px',width:'815px', backgroundColor:'#303030', display:'flex'}}>
                    <div style={{paddingTop:'20px', paddingLeft:'30px'}}>넷플릭스 요금은 얼마인가요?</div>
                    <div style={{marginLeft:'auto', marginTop:'-8px', paddingRight:'20px', fontSize:'60px', fontWeight:'100'}}>+</div>
                </div>
                <div className="what" style={{margin:'auto',marginBottom:'10px',height:'76.5px',width:'815px', backgroundColor:'#303030', display:'flex'}}>
                    <div style={{paddingTop:'20px', paddingLeft:'30px'}}>광고형 베이식은 뭐가 다른가요?</div>
                    <div style={{marginLeft:'auto', marginTop:'-8px', paddingRight:'20px', fontSize:'60px', fontWeight:'100'}}>+</div>
                </div>
                <div className="what" style={{margin:'auto',marginBottom:'10px',height:'76.5px',width:'815px', backgroundColor:'#303030', display:'flex'}}>
                    <div style={{paddingTop:'20px', paddingLeft:'30px'}}>어디에서 시청할 수 있나요?</div>
                    <div style={{marginLeft:'auto', marginTop:'-8px', paddingRight:'20px', fontSize:'60px', fontWeight:'100'}}>+</div>
                </div>
                <div className="what" style={{margin:'auto',marginBottom:'10px',height:'76.5px',width:'815px', backgroundColor:'#303030', display:'flex'}}>
                    <div style={{paddingTop:'20px', paddingLeft:'30px'}}>멤버십을 해지하려면 어떻게 하나요?</div>
                    <div style={{marginLeft:'auto', marginTop:'-8px', paddingRight:'20px', fontSize:'60px', fontWeight:'100'}}>+</div>
                </div>
                <div className="what" style={{margin:'auto',marginBottom:'10px',height:'76.5px',width:'815px', backgroundColor:'#303030', display:'flex'}}>
                    <div style={{paddingTop:'20px', paddingLeft:'30px'}}>넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?</div>
                    <div style={{marginLeft:'auto', marginTop:'-8px', paddingRight:'20px', fontSize:'60px', fontWeight:'100'}}>+</div>
                </div>
                <div className="what" style={{margin:'auto',marginBottom:'10px',height:'76.5px',width:'815px', backgroundColor:'#303030', display:'flex'}}>
                    <div style={{paddingTop:'20px', paddingLeft:'30px'}}>아이들이 넷플릭스를 봐도 좋을까요?</div>
                    <div style={{marginLeft:'auto', marginTop:'-8px', paddingRight:'20px', fontSize:'60px', fontWeight:'100'}}>+</div>
                </div>
                <div className="texttextinput" style={{textAlign:'center'}}>
                <div className="Title-3" style={{fontSize: '19px', paddingTop: '2%', paddingBottom:'1%'}}>
                시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.
                </div>
                    <input className="inppp" type={'text'} style={{width:'500px', height:'70px'}}></input>
                    <button style={{width:'207.5px', height:'75px', backgroundColor: 'red', border:'none', borderRadius:'3px', fontSize:'30px', color:'white',paddingBottom:'18px'}}>시작하기 </button>
                </div>
            </div>
            <div className="phone" style={{paddingTop: '10px' , backgroundColor: '#303030'}}>
                <img src="img/phone.png" alt=""></img>
            </div>
        </div>
        
    )
}

export default Help;
