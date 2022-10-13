import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './../../scss/common.css';

function BorderLeftSelect(props) {
  const [selectedVal, setSelectedVal] = useState('');

  function handleSelectChange(event) {
    setSelectedVal(event.target.value);
  }

  const vals = props.values;
  const optionItems = vals.map((val) =>
    <option value={val} key={val}>{val}</option>
  );
  return (
    <Form.Select {...props.register} className='text-uppercase fw-bold mt-3 border-left fs-14' value={selectedVal} onChange={handleSelectChange}>
      {optionItems}
    </Form.Select>
  )
}

export default BorderLeftSelect;