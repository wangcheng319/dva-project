/**
 * Created by wangc on 2018/7/11.
 */

// import fetch from 'dva/fetch';

export default {
  namespace:'main',

  state:{
    bookname:'',
    time:'',
     books : [
      { bookname: '1', time: '一号',bookurl:'http://img3.imgtn.bdimg.com/it/u=1094595333,134359380&fm=27&gp=0.jpg'},
      { bookname: '2', time: '二号',bookurl:'http://img3.imgtn.bdimg.com/it/u=1094595333,134359380&fm=27&gp=0.jpg'},
      { bookname: '3', time: '三号',bookurl:'http://img3.imgtn.bdimg.com/it/u=1094595333,134359380&fm=27&gp=0.jpg'},
      {bookname: '4', time: '四号',bookurl:'http://img3.imgtn.bdimg.com/it/u=1094595333,134359380&fm=27&gp=0.jpg'}
    ]
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
    /**
     * 点击当前列表，并删除此项
     * @param state
     * @param item
     * @returns {{books: Array}}
     */
    itemClick(state,{ payload: item }){
      console.log(item.time)
      var index = state.books.indexOf(item)
      console.log(index)
       state.books.splice(index,1)
      var booksa =  state.books;
      return { ...state,books:booksa }
    }
  }
}
