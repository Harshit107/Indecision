import React from 'react'

export default class Header extends React.Component {

    render() {
      return (
        <div className="header">
         <div className="container">
         <h1 className="header__title">{this.props.title} </h1>
         <h3 className="header__subTitle">{this.props.subTitle}</h3>
         </div>
        </div>
      );
    }
  }