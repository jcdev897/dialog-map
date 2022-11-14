import axios from 'axios';
import { useState, useEffect } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { GithubPicker } from 'react-color';
import { useForm } from "react-hook-form";
import BorderLeftSelect from './common/borderLeftSelect';
import EnableCheckbox from './common/enableCheckbox';
import LineWidth from './common/lineWidth';
import './../scss/leftpanel.css';

const base_url = 'http://127.0.0.1:4000';
function Frame_149(props) {
  const [dataSets, setDataSets] = useState([]);
  const [columnNames, setColumnNames] = useState([]);
  const [showPointLabel, setShowPointLabel] = useState(false);
  const colorPalettes = ["#004B80", "#0078CC", "#33ABFF", "#80CAFF", "#333380", "#8080B0"];
  const requiredCols = ['required columns', 'dd'];
  const customizeLines = ['customize line', 'dd'];
  const pointLabels = ['enable points label', 'ee'];

  function handleChangeLineColor(color, event) {
    props.setLineColor(color.hex);
  }

  function handleChangePointColor(color, event) {
    props.setPointColor(color.hex);
  }

  function handleDatasetChange(event) {
    const datasetId = event.target.value;
    axios.get(base_url + "/dataset/" + datasetId).then((res) => {
      setColumnNames(Object.keys(res.data[0]));
      props.setPointData(res.data);
    });
  }

  function handleOrginLatChange(event) {
    props.setOriginLat(event.target.value);
  }

  function handleOrginLongChange(event) {
    props.setOriginLong(event.target.value);
  }

  function handleDestLatChange(event) {
    props.setDestLat(event.target.value);
  }

  function handleDestLongChange(event) {
    props.setDestLong(event.target.value);
  }

  const { register, handleSubmit, watch } = useForm();
  const onSubmit = data => ({

  });
  
  const refs = [
    "dataset",
    "map-type",
    "required-cols",
    "origin-lat",
    "origin-long",
    "dest-lat",
    "origin-long",
    "custom-line",
    "line-color",
    "color-based",
    "line-width",
    "point-label",
    "point-label-status"
  ];
  const dataSetItems = dataSets.map((data, index) => 
    <option key={index}>{data}</option>
  );

  const columnNamesItems = columnNames.map((data, index) =>
    <option key={index}>{data}</option>
  );

  useEffect(() => {
    axios.get(base_url + "/datasets").then((res) => {
      setDataSets(res.data);
    });
  });
  return (
    <div className="bg-gray left-panel">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className='d-flex justify-content-between mt-4'>
          <h1 className="fw-bold fs-5 mb-0">Report Name</h1>
          <Button type='submit'>Save</Button>
        </div>
        <p className="text-uppercase fw-bold mt-3 sub-title">DataSet</p>
        <Form.Group>
          <Form.Label className='fw-bold text-secondary'>Select Dataset</Form.Label>
          <Form.Select {...register("dataset")} onChange={handleDatasetChange}>
            <option>---</option>
            {dataSetItems}
          </Form.Select>
        </Form.Group>
        <p className="text-uppercase fw-bold mt-3 sub-title mt-3">Map Type</p>
        <Form.Group>
          <Form.Label className='fw-bold text-secondary'>Select Map Type</Form.Label>
          <Form.Select {...register("map-type")}>
            <option>Line Map</option>
            <option>Line Map 1</option>
            <option>Line Map 2</option>
          </Form.Select>
        </Form.Group>
        <BorderLeftSelect register={register("required-cols")} values={requiredCols} />
        <p className="text-uppercase fw-bold mt-3 sub-title">Columns</p>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="6">
            Origin Latitude*
          </Form.Label>
          <Col sm="6">
            <Form.Select {...register("origin-lat", {required: true})} onChange={handleOrginLatChange}>
              {columnNamesItems}
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="6">
            Origin Longitude*
          </Form.Label>
          <Col sm="6">
            <Form.Select {...register("origin-long", {required: true})} onChange={handleOrginLongChange}>
              {columnNamesItems}
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="6">
            Destination Latitude*
          </Form.Label>
          <Col sm="6">
            <Form.Select {...register("dest-lat", {required: true})} onChange={handleDestLatChange}>
              {columnNamesItems}
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="6">
            Destination Longitude*
          </Form.Label>
          <Col sm="6">
            <Form.Select {...register("dest-long", {required: true})} onChange={handleDestLongChange}>
              {columnNamesItems}
            </Form.Select>
          </Col>
        </Form.Group>
        <BorderLeftSelect register={register("custom-line")} values={customizeLines}/>
        <p className="text-uppercase fw-bold mt-3 sub-title">Line Color</p>
        <Form.Select {...register("line-color")}>
          <option>Color Palette #1</option>
          <option>Color Palette #2</option>
        </Form.Select>
        <GithubPicker
          className='color-palette pt-2'
          colors={colorPalettes}
          triangle='hide'
          width='300'
          onChangeComplete={handleChangeLineColor}
        />
        <p className="text-uppercase fw-bold mt-3 sub-title">Color Based On</p>
        <Form.Select {...register("color-based")}>
          <option>Route ID</option>
          <option>Route ID 1</option>
        </Form.Select>
        <LineWidth register={register("line-width")} setLineWidthVal={props.setLineWidthVal} title="Line Width" />
        <BorderLeftSelect register={register("point-label")} values={pointLabels}/>
        <EnableCheckbox register={register('point-label-status')} data={columnNames} setPointLabel={props.setPointLabel} />
        <p className="text-uppercase fw-bold mt-3 sub-title">Point Color</p>
        <Form.Select {...register("point-color")}>
          <option>Color Palette #1</option>
          <option>Color Palette #2</option>
        </Form.Select>
        <GithubPicker
          className='color-palette pt-2'
          colors={colorPalettes}
          triangle='hide'
          width='300'
          onChangeComplete={handleChangePointColor}
        />
        <LineWidth register={register("point-radius")} setPointRadius={props.setPointRadius} title="Point Radius" />
      </Form>
    </div>
  )
}

export default Frame_149;
