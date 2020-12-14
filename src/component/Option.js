import React from 'react'

const Option = function (props) {
  return (
    <div className="option">
      <p className="option__text">{props.count + `. `}{props.optionText}</p>
      <button
        className="button button--link"
        onClick={(e) => {
          props.handelDeleteSingleOption(props.optionText)
        }}>
        Remove
        </button>
    </div>
  );
}
export default Option;