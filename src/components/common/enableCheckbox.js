import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap';
import './../../scss/common.css';

function EnableCheckbox(props) {
  const [selectedVal, setSelectedVal] = useState('');
  const [showPointLabel, setShowPointLabel] = useState(false);

  function handleSelectChange(event) {
    setShowPointLabel(event.target.checked);
  }

  function handlePointLabelChange(event) {
    props.setPointLabel(event.target.value);
  }
  const columnNamesItems = props.data.map((data, index) =>
    <option key={index}>{data}</option>
  );

  const pointLabel = <div className='d-flex'>
                      <Form.Label column sm="6">
                        Point Label
                      </Form.Label>
                      <Col sm="6">
                        <Form.Select {...props.register} onChange={handlePointLabelChange}>
                          {columnNamesItems}
                        </Form.Select>
                      </Col>
                    </div>

  return (
    <div className='row'>
      <div className='d-flex justify-content-between mt-3'>
        <p className='fw-bold fs-14'>Enable Points Label</p>
        <Form.Check
          className='point-label'
          type="switch"
          {...props.register}
          onChange={handleSelectChange}
        />
      </div>
      {showPointLabel ? pointLabel : null}
    </div>
  )
}

export default EnableCheckbox;