import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './../../scss/common.css';

function LineWidth(props) {
  const [widthVal, setWidthVal] = useState(0);

  function handleChangeWidth(event) {
    setWidthVal(event.target.value);
  }

  return (
    <div>
      <p className="text-uppercase fw-bold mt-3 sub-title">Line Width (Pixels)</p>
        <div className='row'>
          <div className='col-sm-4'>
            <Form.Control type="number" value={widthVal} onChange={handleChangeWidth} />
          </div>
          <div className='col-sm-8'>
            <Form.Range
              min={0}
              max={10}
              value={widthVal}
              onChange={handleChangeWidth}
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