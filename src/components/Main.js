/**
 * Created by wangc on 2018/7/11.
 */
import React from 'react';
 const UI =  (props)=>{


  class Header extends  React.Component{
      render(){
        return(
          <div>
            header{props.state_login.loginname}
          </div>
        )
      }

  }
  return(
    <div>
      <Header/>
      <div>
        {
          props.state.books.map(book => {
            return (
              //点击事件利用bind传参
              <div key={book.bookname} onClick={props.onItemClick.bind(this,book)}>
                <div>书名：{book.bookname}</div>
                <div>出版时间：{book.time} </div>
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
