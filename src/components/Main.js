/**
 * Created by wangc on 2018/7/11.
 */
import React from 'react';
 const UI =  (props)=>{
  const books = [
    { bookname: '1', time: '一号',},
    { bookname: '2', time: '二号'},
    { bookname: '3', time: '三号'},
    {bookname: '4', time: '四号'}
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
          books.map((book) => {
            return (
              <div key={book.bookname}>
                <div>书名：{book.bookname}</div>
                <div>出版时间：{book.time}</div>
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
