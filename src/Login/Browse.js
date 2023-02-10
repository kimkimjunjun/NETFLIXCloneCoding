import React from "react";
import { Link } from "react-router-dom";
import './Browse.css'

function Browse() {
    return (
        <div className="background" style={{backgroundColor:'#141414', color:'white', height:'960px'}}>
            <div className="nettitle" style={{fontSize:'3.45vw', textAlign:'center', paddingTop:'11.5%', fontWeight:'500'}}>
                <p1>넷플릭스를 시청할 프로필을 선택하세요.</p1>
            </div>
            <div className="pick-all" style={{display:'flex', justifyContent:'center', paddingTop:'3%'}}>
                <div className="pick1">
                    <Link to="/browse1">
                        <img className="pick2" style={{cursor:'pointer'}} src="http://occ-0-3683-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229" alt=""></img>
                    </Link>
                    <p style={{textAlign:'center', fontSize:'1.3vw', color:'#808080'}}>1</p>
                </div>
                <div className="pick1">
                    <img className="pick2" style={{cursor:'pointer'}} src="http://occ-0-3683-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png?r=1d4" alt=""></img>
                    <p style={{textAlign:'center', fontSize:'1.3vw', color:'#808080'}}>2</p>
                </div>
                <div className="pick1">
                    <img className="pick2" style={{cursor:'pointer'}} src="http://occ-0-3683-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdi6oYb6DJb1LndQWckgaXvrqqP3QURNa8Xngiq7wwFwDtWIg1otEuYKVxbYwS9c5clAI1_Bn7DuljwcvhfUzQu2_Y2v9y5P6t_n.png?r=e6e" alt=""></img>
                    <p style={{textAlign:'center', fontSize:'1.3vw', color:'#808080'}}>3</p>
                </div>
                <div className="pick1">
                    <img className="pick2" style={{cursor:'pointer'}} src="http://occ-0-3683-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbV2URr-qEYOrESG0qnP2787XsIxWTMBh7QfJwyqYxMAVFNyiXAqFeu16gI8yTxg3kLwF2mUDKmZGfwBEDd7722xskhYwAMwsBBe.png?r=bd7" alt=""></img>
                    <p style={{textAlign:'center', fontSize:'1.3vw', color:'#808080'}}>4</p>
                </div>
                <div className="pick1">
                    <img className="pick2" style={{cursor:'pointer'}} src="http://occ-0-3683-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRZ9UvLLN8tmuXW65YweIeYLuhKgR4qnSL0rVwNF6rgxxbsMoW9mCtlxPcz76Ti7bnciG7lE4WcqR8Z7YVM4xjX_-r0wd449rgnY.png?r=acf" alt=""></img>
                    <p style={{textAlign:'center', fontSize:'1.3vw', color:'#808080'}}>키즈</p>
                </div>
            </div>
            <div className="profile" style={{textAlign:'center', paddingTop:'3%'}}>
                <button className="profilebtn" style={{backgroundColor:'#141414', color:'#808080', border:'1px solid #808080', width:'10vw',height:'3vw', fontSize:'1.2vw', cursor:'pointer'}}>프로필 관리</button>
            </div>
        </div>
    )
}

export default Browse;