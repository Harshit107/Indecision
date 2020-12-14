import React from 'react'
//parent option
import Option from './Option'

const OptionParent = function (props) {

    return (
      <div>
      <div className="widget-header">
        <p>Your Option</p>
        <button className="button button--link"
        onClick={props.handelDeleteOptions}>
        Remove All
        </button>
      </div>
     
         
         {props.options.length === 0 ? <p className="widget__message"> Please add an option to get started</p> : undefined }
        {
          props.options.map((option, index) => (
            <Option 
            key={option} 
            count = {index + 1}
            handelDeleteSingleOption = {props.handelDeleteSingleOption}
            optionText={option} />
          ))
               
        }
      </div>
    );
}
export default OptionParent;