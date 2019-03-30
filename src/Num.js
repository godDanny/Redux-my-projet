import React, { Component } from 'react'
import { connect } from 'tls';

export class Num extends Component {
  render() {
    return (
      <div>
        <button onClick={()=>{}}>+1</button>
        <button>-1</button>
      </div>
    )
  }
}
const mapActionToProps=()=>{
  return {
    addNum:()=>{
      dispatch({
        type:'ADD',
        payload:null
      })
    }
  }
}

const 
export default connect(null,mapActionToProps)(Num)
