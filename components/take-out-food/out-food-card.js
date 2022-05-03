// components/take-out-food/out-food-card.js
/*
example-data:
orderInfo:{
  type: 'out_food',
  id: '345345342',
  publisher_name: '李同学',
  status: '取物中',
  address: {
    start_position: '军工路580门口',
    end_position: '四公寓2号楼717'
  },
  order_shortcut_url: '/img/order.jpg'
}
*/
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    orderInfo: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad: function (options) {
      console.log(this.properties.dataParam1);
    }
  }
})