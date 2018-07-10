/**
 * Created by wangc on 2018/7/10.
 */
import { connect } from 'dva';
import React from 'react';
import UI from '../components/Login'


const Login = (props)=>{

  function changeHandler(e) {
    const value = e.target.value
    props.dispatch({
      type: 'login/set',
      payload: {
        field: 'name1',
        value
      }
    })
  }

  function onBtnClick(e) {
    props.dispatch({
      type:'login/login'
    })
  }

    return(
      <UI
        changeHandler={changeHandler}
        state={props.login}
        onBtnClick = {onBtnClick}
      />
    )
}

export default connect(({login})=>({login}))(Login)
