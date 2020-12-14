import React from 'react'
//class Action
export default class Action extends React.Component {

    render() {
      return (
        <div>
          <button className="big-button"
           onClick={this.props.onMakeDecision} disabled = {this.props.hasOptions}>
           What should I do First ?
           </button>
        </div>
      )
    };
  }