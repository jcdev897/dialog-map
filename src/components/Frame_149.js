import { Col, Form, Row } from 'react-bootstrap';
import { GithubPicker } from 'react-color';
import './../scss/leftpanel.css';
import BorderLeftSelect from './common/borderLeftSelect';
import EnableCheckbox from './common/enableCheckbox';
import LineWidth from './common/lineWidth';

function Frame_149() {
  const colorPalettes = ["#004B80", "#0078CC", "#33ABFF", "#80CAFF", "#333380", "#8080B0"];
  const requiredCols = ['required columns', 'dd'];
  const customizeLines = ['customize line', 'dd'];
  const pointLabels = ['enable points label', 'ee'];

  return (
    <div className="bg-gray left-panel">
      <h1 className="fw-bold fs-5 mt-4 mb-0">Report Name</h1>
      <Form>
        <p className="text-uppercase fw-bold mt-3 sub-title">DataSet</p>
        <Form.Group>
          <Form.Label className='fw-bold text-secondary'>Select Dataset</Form.Label>
          <Form.Select>
            <option>Origin_Destination_Matrix</option>
          </Form.Select>
        </Form.Group>
        <p className="text-uppercase fw-bold mt-3 sub-title mt-3">Map Type</p>
        <Form.Group>
          <Form.Label className='fw-bold text-secondary'>Select Map Type</Form.Label>
          <Form.Select>
            <option>Line Map</option>
          </Form.Select>
        </Form.Group>
        <BorderLeftSelect values={requiredCols} />
        <p className="text-uppercase fw-bold mt-3 sub-title">Columns</p>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="6">
            Origin Latitude*
          </Form.Label>
          <Col sm="6">
            <Form.Select>
              <option>Origin Latitude</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="6">
            Origin Longitude*
          </Form.Label>
          <Col sm="6">
            <Form.Select>
              <option>Origin Longitude</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="6">
            Destination Latitude*
          </Form.Label>
          <Col sm="6">
            <Form.Select>
              <option>Destination Latitude</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="6">
            Destination Longitude*
          </Form.Label>
          <Col sm="6">
            <Form.Select>
              <option>Destination Longitude</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <BorderLeftSelect values={customizeLines}/>
        <p className="text-uppercase fw-bold mt-3 sub-title">Line Color</p>
        <Form.Select>
          <option>Color Palette #1</option>
        </Form.Select>
        <GithubPicker className='color-palette pt-2' colors={colorPalettes} triangle='hide' width='300' />
        <p className="text-uppercase fw-bold mt-3 sub-title">Color Based On</p>
        <Form.Select>
          <option>Route ID</option>
        </Form.Select>
        <LineWidth/>
        <BorderLeftSelect values={pointLabels}/>
        <EnableCheckbox/>
      </Form>
    </div>
  )
}

export default Frame_149;
