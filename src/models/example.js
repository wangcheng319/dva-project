import { routerRedux } from 'dva/router';
export default {

  namespace: 'example',

  state: {},

  /**
   * 异步的只读操作，并不直接修改state，可以调用actions
   */
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  /**
   * 主要是执行异步操作，
   * @param action
   * @param select 用于从全局状态中选取数据
   * @param put 相当于dispatch，分发action
   * @param call 调用异步操作，一般用于IO操作、网络请求、数据库读写
   */
  effects: {
    *fetch({ payload }, { select,call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },

    *to_next(action,{select,call,put}){
      yield put(routerRedux.push('/Login'))
    }
  },

  /**
   * 同步操作，直接修改state
   */
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
