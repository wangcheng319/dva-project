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

  return (
    <UI
      onItemClick = {onItemClick}
    />
  )
}

export default connect (({ main }) => ({ main }))(Main)


