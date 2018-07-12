/**
 * Created by wangc on 2018/7/10.
 */
import { routerRedux } from 'dva/router';
import axios from 'axios';
import $ from 'jquery';
export default {

  namespace: 'login',

  state: {
    name1:'',
    passwd:'',
  },

  /**
   * 订阅
   */
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      /**
       * 下面用于判断到达和离开当前页面，到登录页面用户名设置默认值1234，离开登录页面清空密码
       */
      history.listen(location => {
        if (location.pathname.includes('Login')) {
          dispatch({
            type: 'tologin'
          })
        }else{
          dispatch({
            type: 'leftlogin'
          })
        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { select,call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },

    //到达登录页面，通常用于获取初始化数据
    *tologin({ payload }, { select,call, put }){

      $(function(){
        $.ajax({
          async: true,
          type: "GET",
          dataType: 'jsonp',
          jsonp: 'callback',
          jsonpCallback: 'callbackfunction',
          url: "https://api.douban.com/v2/book/1220562",
          data: "",
          timeout: 3000,
          contentType: "application/json;utf-8",
          success: function(data) {
            console.log(data);
          }
        });
      })

      const value = "123"
      yield put({
        type: 'set',
        payload: {
          field: 'name1',
          value
        }
      })
    },

    //离开登录页面，通常用于清空数据
    *leftlogin({ payload }, { select,call, put }){
      const value = ""
      yield put({
        type: 'set',
        payload: {
          field: 'passwd',
          value
        }
      })
    },

    *login({ payload }, { select,call, put }){
      const state = yield select(({ login }) => login);
      const { name1,passwd } = state;
      if (name1.length===0){
        console.log("用户名不能为空");
        return;
      }

      if(passwd.length===0){
        console.log("密码不能为空");
        return;
      }

      if (name1!=="123"){
        console.log("用户名错误");
        return;
      }

      if (passwd!=="123"){
        console.log("密码错误");
        return;
      }

      console.log("登录成功"+name1+passwd)
      yield put(routerRedux.push('/Main'))


    }
  },

  reducers: {
    save(state, action) {

      return { ...state, ...action.payload };
    },
    set(state, { payload: { field, value } }) {
      return { ...state, [field]: value }
    },
  },

};
