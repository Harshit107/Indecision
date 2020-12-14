import React from 'react'
import AddOption from './AddOption.js'
import OptionParent from './OptionParent.js'
import Action from './Action.js'
import Header from './Header.js'
import OptionModal from './OptionModal.js'

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    error : undefined,
    selectedOption: undefined
  }
  ////////*********  Local storage  ********/////////////
  componentDidMount = () => {
    try {
      const options = JSON.parse(localStorage.getItem('options'))
      if (options)
        this.setState(() => ({ options }))
    } catch (error) {
      console.log({ error });
    }
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
      console.log(json);
    }
  }
  componentWillUnmount = () => {
    console.log("unmount");
  }

  //choose randomaly
  onMakeDecision = () => {
    console.log(this.state.options.length)
    const selected = Math.floor(Math.random() * this.state.options.length)
    this.setState(() => ({ selectedOption: this.state.options[selected] }))
  }

  //remove all option
  handelDeleteOptions = () => {
    this.setState(() => ({ options: [], error : undefined }))
  }
  handelDisableModel = () => {
    this.setState(() => ({ selectedOption: undefined }))
  }

  //remove single option
  handelDeleteSingleOption = (optionToDelete) => {
    console.log(optionToDelete)
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToDelete !== option
      })
    }));
  }

  addNewOption = (newOption) => {

    if (!newOption) {
      return "Field can't be empty"
    }
    else if (this.state.options.indexOf(newOption) > -1) {
      return "Option is already in List!"
    }
    this.setState(prevState => ({ options: prevState.options.concat(newOption) }));

  }


  render() {
    const title = "Indecision";
    const subTitle = "Put your life in the hands of computer";
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <div className="container">
          <Action onMakeDecision={this.onMakeDecision} hasOptions={this.state.options.length === 0} />
          <div className="widget">
            <OptionParent
              handelDeleteOptions={this.handelDeleteOptions}
              options={this.state.options}
              handelDeleteSingleOption={this.handelDeleteSingleOption} />
            <AddOption addNewOption={this.addNewOption} />
            <OptionModal
              selectedOption={this.state.selectedOption}
              handelDisableModel={this.handelDisableModel}
            />
          </div>
        </div>
      </div>
    );
  };
}