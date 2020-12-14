import Modal from 'react-modal';
import React from 'react';


const OptionModal = (props) => (
    <Modal
    isOpen={!!props.selectedOption}
    ariaHideApp={false}
    onRequestClose = {props.handelDisableModel}
    contentLabel = "Selected Label"
    closeTimeoutMS = {300}
    className="model"
    >
    <h3 className="model__title">Selected Option</h3>
    {props.selectedOption && <p className="model__body">{props.selectedOption}</p>}
    <button onClick={props.handelDisableModel}>Okay</button>
    </Modal>
);
export default OptionModal;