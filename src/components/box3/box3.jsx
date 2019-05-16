import React from 'react';
import './box3.less'
 const Box3=()=>{
  return <ul className="inside-box">
      <li>
        <span>不知道啥</span>
        <i style={{height:'30%'}}></i>
        <p className="title">不知道啥50%</p>
        <img className="icon-up" src={require('../../assets/image/icon/icon-up.png')} alt=""/>

      </li>
      <li>
        <span>不知道啥</span>
        <i style={{height:'60%'}}></i>
        <p className="title">不知道啥50%</p>
        <img className="icon-up" src={require('../../assets/image/icon/icon-up.png')} alt=""/>

      </li>
      <li>
        <span>不知道啥</span>
        <i style={{height:'40%'}}></i>
        <p className="title">不知道啥50%</p>
        <img className="icon-up" src={require('../../assets/image/icon/icon-up.png')} alt=""/>

      </li>
    </ul>
}
export default Box3;
