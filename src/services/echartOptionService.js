import request from '../utils/request';

let pipeOption = {
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  title: {
    text: '天气情况统计',
    subtext: '虚构数据',
    left: 'center',
    textStyle: {
      color: '#FFF',
      fontSize: '16',
      fontWeight: 'normal'
    },

    subtextStyle: {
      color: '#FFF',
      fontSize: '16',
      fontWeight: 'normal'
    },
  },
  color: ['rgba(255,255,255,0)', '#bbe2e8'],
  series: [
    {
      name: '访问来源',
      type: 'pie',
      center: ['50%', '65%'],
      radius: ['40%', '50%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: true,
          position: 'center'
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '30',
            fontWeight: 'bold'
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        {value: 10, name: ''},
        {value: 50, name: '150人'},
      ]
    },

  ]
}
let zhuziOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: 'line'
  }]
}
export default {
  pipeOption,
  zhuziOption
}
