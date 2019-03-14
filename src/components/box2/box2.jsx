import React, {Component} from 'react';
import './box2.less'

const ChartBox=(props)=>{
  return   <li className="chart-box">
    <p>
      <span className="top-text1">地点？</span>
      <span className="top-text2">40000<i className="top-text3">人次？</i></span>
    </p>
    <div className="box-middle">
      <i className="bar" style={{background:props.color+',.6)'}}> <i style={{height:"20%",background:props.color+',1)'}}></i> </i>
      <p className="text">
        <span className="top-text2">33.33%?</span>
        <span className="top-text1">地点？</span>

      </p>
    </div>
    <p style={{textAlign:'left'}}>XXXX</p>
  </li>
}
const Box2 = () => {
  return <ul style={{
    display: 'flex'
  }
  }>
    <ChartBox color="rgba(250, 255, 120"></ChartBox>
    <ChartBox color="rgba(83,134 ,212"></ChartBox>
    <ChartBox color="rgba(85,93,177"></ChartBox>

  </ul>
}


export default Box2
