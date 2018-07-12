/**
 * Created by wangc on 2018/7/11.
 */

// import fetch from 'dva/fetch';

export default {
  namespace:'main',

  state:{
    bookname:'',
    time:''
  },

  subscriptions:{
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname.includes('Main')) {
          console.log("开始获取数据1")
         dispatch({type:'togetList'})
        }else{
          dispatch({type: 'test'})
        }
      });
    },
  },

  effect:{
    *togetList({ payload }, { select,call, put }){
      console.log("开始获取数据2")
    },
  },

  reducers:{
    set(state, { payload: { field, value } }) {
      console.log("hehe1"+value)
      return { ...state, [field]: value }
    },
    itemClick(state,{ payload: item }){
      console.log(item.time)
      return { ...state, item }
    }
  }
}
