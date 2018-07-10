/**
 * Created by wangc on 2018/7/10.
 */
import React from 'react';
import {Button,Input} from 'antd'


const UI = (props) => {
  return(
    <div className="main">
      登录页面
      <input type="text" placeholder="请输入推荐码" maxLength="20" value={props.state.name1} onChange={props.changeHandler} />



      <Button type="primary" onClick={props.onBtnClick}>Primary</Button>

    </div>
  )
}

export default UI
