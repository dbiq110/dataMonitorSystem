import React from 'react';
import './box3.less'
 const Box3=()=>{
  return <ul className="box3">
      <li>
        <img className="icon-up" src={require('../../assets/image/icon/icon-up.png')} alt=""/>
        <p className="title">不知道啥50%</p>
        <p className="content-box">
          <i className="background"><i className="deep"></i></i>
          <span className="decs">1200</span>
        </p>
      </li>
  </ul>
}
export default Box3;
