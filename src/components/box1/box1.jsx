import React,{Component} from 'react'

import ReactEcharts from 'echarts-for-react';

export default (props)=>{
  const data1=props.data1?props.data1:30
  const data2=props.data2?props.data2:30

  return <div style={{width:'100%',display:"flex"}}>
      <ReactEcharts style={{height:'11vh',width:'50%'}} option={{
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
            fontSize: '14',
            fontWeight: 'normal'
          },

          subtextStyle: {
            color: '#FFF',
            fontSize: '14',
            fontWeight: 'normal'
          },
        },
        color: ['#bbe2e8','rgba(255,255,255,0)' ],
        series: [
          {
            name: '访问来源',
            startAngle:270,
            type: 'pie',
            center: ['50%', '65%'],
            radius: ['40%', '48%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: 'center'
              },
              // emphasis: {
              //   show: true,
              //   textStyle: {
              //     fontSize: '30',
              //     fontWeight: 'bold'
              //   }
              // }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {value: data2, name: data2+'人'},
              {value: 100-data2,name: ''},
            ]
          },

        ]
      }} />
      <ReactEcharts style={{height:'11vh',width:'50%'}}
                    option={{
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
                          fontSize: '14',
                          fontWeight: 'normal'
                        },

                        subtextStyle: {
                          color: '#FFF',
                          fontSize: '14',
                          fontWeight: 'normal'
                        },
                      },
                      color: ['#bbe2e8','rgba(255,255,255,0)' ],
                      series: [
                        {
                          name: '访问来源',
                          type: 'pie',
                          startAngle:270,
                          center: ['50%', '65%'],
                          radius: ['40%', '48%'],
                          avoidLabelOverlap: false,
                          label: {
                            normal: {
                              show: true,
                              position: 'center'
                            },
                            //   emphasis: {
                            //   show: true,
                            //   textStyle: {
                            //   fontSize: '30',
                            //   fontWeight: 'bold'
                            // }
                            // }
                          },
                          labelLine: {
                            normal: {
                              show: false
                            }
                          },
                          data: [
                            {value: data1, name: data1+'人'},
                            {value: 100-data1, name:'' },

                          ]
                        },

                      ]
                    }
                    } />

  </div>
}
