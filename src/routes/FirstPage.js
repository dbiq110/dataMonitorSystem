import React from 'react';
import { connect } from 'dva';
import style from  './FirstPage.less';
import MapComponent from "../components/Map.component";
import Box1 from '../components/box1/box1.jsx'
import echartOptionService from '../services/echartOptionService'
function FirstPage() {
  return (
    <div className="first-page">
      <MapComponent className="map" markers={[{
        site:[48.22488861329015,106.42048950192312],
        title:'33333333'
      }]}></MapComponent>
      {/*<div className="layout">*/}
        <div className="top">*******重点工作一张图*******</div>
        <div className="center">
          <div className="center-left">
            <div className="box box1">
              <p style={{width:'100%',height:'2vh',lineHeight:'2vh',color:'#fff',fontSize:'1vh'}}>2015</p>
              <Box1></Box1>
              <div style={{display:'flex'}}>
                <div style={{flex:1,color:'#FFF',textAlign:'center'}}>xxxxxxxxxx</div>
                <div style={{flex:1,color:'#FFF',textAlign:'center'}}>xxxxxxxxxx</div>
              </div>
            </div>
            <div className="box box2"></div>
            <div className="box box3"></div>
            <div className="box box4"></div>
          </div>
          <div className="center-right">
            <div className="box box5"></div>
            <div className="box6"></div>
          </div>
        </div>
        <div className="bottom">
        </div>
      </div>
    // </div>
  );
}
FirstPage.propTypes = {
};

export default connect()(FirstPage);
