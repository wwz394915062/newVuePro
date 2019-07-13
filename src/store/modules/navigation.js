const navigation = {
   state: {
     routes: [{
         path: '/homepage',
         name: '首页'
       },
       {
         path: '/echartspage',
         name: 'Echarts图表',
         children: [{
             path: '/echartspage-line',
             name: '折线图'
           },
           {
             path: '/echartspage-bar',
             name: '柱状图'
           }
         ]
       },
       {
         path: '',
         name: 'art-template使用',
         children: [
           {
             path: '/template-for',
             name: '遍历功能'
           }
         ]
       }
     ]
   }
}

export default navigation