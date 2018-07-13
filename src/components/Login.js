/**
 * Created by wangc on 2018/7/10.
 */
import React from 'react';
import {Button} from 'antd'
import styles from  './Login.css';


const UI = (props) => {
  return(
    <div className="main">
      <div className={styles.login_title}>
        登录
      </div>

      <div className={styles.test}>
        <input type="text"
                placeholder="请输入用户名"
                maxLength="20"
                value={props.state.name1}
                onChange={props.changeHandler}
                className={styles.login_name}/>
      </div>

      <div className={styles.test}>
        <input type="text"
               placeholder="请输入密码"
               maxLength="20"
               value={props.state.passwd}
               onChange={props.passwdChangeHandler}
               className={styles.login_name}/>
      </div>

      <div className={styles.test}>
        <Button type="primary" onClick={props.onBtnClick} className={styles.login_btn}>登录</Button>
      </div>

    </div>
  )
}

export default UI
