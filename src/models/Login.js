/**
 * Created by wangc on 2018/7/10.
 */

export default {

  namespace: 'login',

  state: {
    name1:'',
    passwd:'',
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { select,call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },

    *login({ payload }, { select,call, put }){
      const state = yield select(({ login }) => login);
      const { name1 } = state;
      console.log("=========="+state.name1)
    }
  },

  reducers: {
    save(state, action) {

      return { ...state, ...action.payload };
    },
    set(state, { payload: { field, value } }) {
      console.log(state.name1)
      return { ...state, [field]: value }
    },
  },

};
