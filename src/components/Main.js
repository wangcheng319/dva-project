/**
 * Created by wangc on 2018/7/11.
 */
import React from 'react';
 const UI =  (props)=>{
  const books = [
    { bookname: '1', time: '一号',bookurl:'http://img3.imgtn.bdimg.com/it/u=1094595333,134359380&fm=27&gp=0.jpg'},
    { bookname: '2', time: '二号',bookurl:'http://img3.imgtn.bdimg.com/it/u=1094595333,134359380&fm=27&gp=0.jpg'},
    { bookname: '3', time: '三号',bookurl:'http://img3.imgtn.bdimg.com/it/u=1094595333,134359380&fm=27&gp=0.jpg'},
    {bookname: '4', time: '四号',bookurl:'http://img3.imgtn.bdimg.com/it/u=1094595333,134359380&fm=27&gp=0.jpg'}
  ];

  class Header extends  React.Component{
      render(){
        return(
          <div>
            header
          </div>
        )
      }

  }
  return(
    <div>
      <Header/>
      <div>
        {
          books.map(book => {
            return (
              //点击事件利用bind传参
              <div key={book.bookname} onClick={props.onItemClick.bind(this,book)}>
                <div>书名：{book.bookname}</div>
                <div>出版时间：{book.time}</div>
                <img src={require('../assets/yay.jpg')} alt="" width="42" height="42"/>
                <img src={book.bookurl} width="80" height="80"/>
                <hr />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default UI
