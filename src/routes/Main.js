/**
 * Created by wangc on 2018/7/11.
 */
import  UI from '../components/Main'
import { connect } from 'dva';
import React from 'react';

const Main = (props)=>{

  function onItemClick(item) {
    props.dispatch({
      type: 'main/itemClick',
      payload: item
    })
  }

  /**
   * 将定义的方法和参数与UI组建关联
   */
  return (
    <UI
      onItemClick = {onItemClick}
      state={props.main}
      state_login={props.login}
    />
  )
}

/**
 * Main组建关联两个models
 */
export default connect (({ main,login }) => ({ main,login }))(Main)


