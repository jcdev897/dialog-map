import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './../../scss/common.css';

function EnableCheckbox(props) {
  const [selectedVal, setSelectedVal] = useState('');

  function handleSelectChange(event) {
    setSelectedVal(event.target.value);
  }

  return (
    <div className='d-flex justify-content-between mt-3'>
      <p className='fw-bold fs-14'>Enable Points Label</p>
      <Form.Check
        className='point-label'
        type="switch"
        {...props.register}
      />
    </div>
  )
}

export default EnableCheckbox;