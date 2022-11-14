import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './../../scss/common.css';

function LineWidth(props) {
  const [widthVal, setWidthVal] = useState(0);

  function handleChangeVal(event) {
    setWidthVal(event.target.value);
    if(props.title === 'Point Radius') {
      props.setPointRadius(event.target.value);
    } else {
      props.setLineWidthVal(event.target.value);
    }
  }

  return (
    <div>
      <p className="text-uppercase fw-bold mt-3 sub-title">{props.title} (Pixels)</p>
        <div className='row'>
          <div className='col-sm-4'>
            <Form.Control type="number" value={widthVal} onChange={handleChangeVal} {...props.register} />
          </div>
          <div className='col-sm-8'>
            <Form.Range
              min={0}
              max={10}
              value={widthVal}
              onChange={handleChangeVal}
            />
            <div className='d-flex justify-content-between'>
              <span>0</span>
              <span>10</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LineWidth;