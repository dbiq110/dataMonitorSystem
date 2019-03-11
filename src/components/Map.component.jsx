import React,{Component} from 'react'
import L from 'leaflet'
import './Map.component.less'
export default class MapComponent extends Component{
  state={
    markers:[
      {
        site:[],
        title:''
      }
    ]
  }
  constructor(props){
    super(props)
    this.state.markers=props.markers

  }
  componentDidMount(props){
    this.map = L.map('map').setView([47.92388861359015,105.22048950195312], 7,{
      // crs: L.CRS.Baidu
    });
    // L.tileLayer('http://webst0{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8', {
    L.tileLayer('http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&gl=CN&x={x}&y={y}&z={z}&s={s}', {
      subdomains: "1234567",
      // attribution: '高德地图'
    }).addTo(this.map);
    this.state.markers&&this.state.markers.forEach((v)=>{
      L.marker(v.site,{...v.option})
        .addTo(this.map)
        .bindPopup(`<b>${v.title}</b>`)
        .openPopup();
    })

    L.marker([48.92488861329015,105.22048950192312])
      .addTo(this.map)
      .bindPopup("<b>中心点2</b>.")
      // .openPopup()
    L.marker([48.92488861329015,106.22048950192312])
      .addTo(this.map)
      .bindPopup("<b>中心点3</b>.")

    L.marker([48.42488861329015,107.22048950192312])
      .addTo(this.map)
      .bindPopup("<b>中心点4</b>.")

    L.marker([48.42488861329015,108.22048950192312])
      .addTo(this.map)
      .bindPopup("<b>中心点4</b>.")

    L.marker([49.42488861329015,110.22048950192312])
      .addTo(this.map)
      .bindPopup("<b>中心点4</b>.")
  }
  render(){
    return (<div id='map'{...this.props}></div>)
  }
}
