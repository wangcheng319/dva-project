/**
 * Created by wangc on 2018/7/11.
 */
import  UI from '../components/Main'
import { connect } from 'dva';
import React from 'react';

const Main = (props)=>{

  return (
    <UI
    />
  )
}

export default connect (({main})=>({main}))(Main)