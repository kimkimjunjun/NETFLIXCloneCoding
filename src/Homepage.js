import React from "react";
import Header from "./Header";
import Title from "./Title";
import Adverse from "./Adverse";
import Device from './Device';
import Child from './Child';
import Offline from './Offline';
import Help from './Help';
import './App.css';

function Homepage() {
    return (
      <div className='App' style={{backgroundColor:'#333333', width:'100%', height:'4000px', position:'relative'}}>
          <div className='banner'>
            <img className="backimg" style={{width: '100%'}} src="https://assets.nflxext.com/ffe/siteui/vlv3/7cee2527-d2cc-4cc9-99f6-d1375e72d46e/a17697ce-49b9-493c-b1e7-c539bb26a46d/KR-ko-20230103-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/7cee2527-d2cc-4cc9-99f6-d1375e72d46e/a17697ce-49b9-493c-b1e7-c539bb26a46d/KR-ko-20230103-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/7cee2527-d2cc-4cc9-99f6-d1375e72d46e/a17697ce-49b9-493c-b1e7-c539bb26a46d/KR-ko-20230103-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/7cee2527-d2cc-4cc9-99f6-d1375e72d46e/a17697ce-49b9-493c-b1e7-c539bb26a46d/KR-ko-20230103-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt=""/>
          </div>
          <div className='banner-txt'><Header/></div>
          <div className='banner-txt'><Title/></div>
          <div className='tv-txt'><Adverse/></div>
          <div className='tv-txt'><Device/></div>
          <div className='tv-txt'><Child/></div>
          <div className='tv-txt'><Offline/></div>
          <div className='tv-txt'><Help/></div>
      </div>
    );
  }
  
  export default Homepage;
  