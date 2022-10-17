import { useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { GithubPicker } from 'react-color';
import { useForm } from "react-hook-form";
import BorderLeftSelect from './common/borderLeftSelect';
import EnableCheckbox from './common/enableCheckbox';
import LineWidth from './common/lineWidth';
import './../scss/leftpanel.css';

function Frame_149(props) {
  const colorPalettes = ["#004B80", "#0078CC", "#33ABFF", "#80CAFF", "#333380", "#8080B0"];
  const requiredCols = ['required columns', 'dd'];
  const customizeLines = ['customize line', 'dd'];
  const pointLabels = ['enable points label', 'ee'];

  function handleChangeLineColor(color, event) {
    props.setLineColor(color.hex);
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
  // console.log(refs.map(ref => watch(ref)));

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
          <Form.Select {...register("dataset")}>
            <option>Origin_Destination_Matrix</option>
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
            <Form.Select {...register("origin-lat", {required: true})}>
              <option>Origin Latitude</option>
              <option>Origin Latitude 1</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="6">
            Origin Longitude*
          </Form.Label>
          <Col sm="6">
            <Form.Select {...register("origin-long", {required: true})}>
              <option>Origin Longitude</option>
              <option>Origin Longitude 1</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="6">
            Destination Latitude*
          </Form.Label>
          <Col sm="6">
            <Form.Select {...register("dest-lat", {required: true})}>
              <option>Destination Latitude</option>
              <option>Destination Latitude 1</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="6">
            Destination Longitude*
          </Form.Label>
          <Col sm="6">
            <Form.Select {...register("dest-long", {required: true})}>
              <option>Destination Longitude</option>
              <option>Destination Longitude 1</option>
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
        <LineWidth register={register("line-width")} setLineWidthVal={props.setLineWidthVal} />
        <BorderLeftSelect register={register("point-label")} values={pointLabels}/>
        <EnableCheckbox register={register('point-label-status')} />
      </Form>
    </div>
  )
}

export default Frame_149;
