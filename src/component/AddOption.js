import React from 'react'

export default class AddOption extends React.Component {
    state = {
      error:undefined
    };

    formSubmit = (e=> {
      e.preventDefault();
      const option = e.target.elements.option.value
      const error = this.props.addNewOption(option)
      this.setState(() => {
        return { error }
      })
      if(!error) e.target.elements.option.value = "";
    });

    render() {
      return (
        <div>
        <p className="add_option--error"
        visible={!!this.state.error}>
        {this.state.error}
        </p>
          <form className="add--option"
          onSubmit={this.formSubmit} >
            <input className="add-option-input" type="text" name="option"></input>
            <button className="button">Add Item</button>
          </form>
        </div>
      )
    }
  };
  
  