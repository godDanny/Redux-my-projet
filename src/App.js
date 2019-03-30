import React, { Component } from 'react';
import Num from './Num';
// 5.1引入connect函数 将App组件与redux进行连接
import {connect} from 'react-redux'


class App extends Component {
  render() {
    return (
      <div>
        <h3>当前获取的值是：{}</h3>
      <Num></Num>
      </div>
    );
  }
}
// 5.2创建一个映射函数，将state中的数据，映射成为组件的属性
const mapStateToProps=()=>{
  // return一个对象
  return{
    // 自定义 key   它将成为App组件的属性
     num:state
  }
}

//5.3 将上面的映射函数，放进connect方法中
export default connect(mapStateToProps)(App);
