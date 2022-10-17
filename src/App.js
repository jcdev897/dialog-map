import { useState } from 'react';
import { Breadcrumb, Button, Container, Modal, Tab, Tabs } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import Frame149 from './components/Frame_149';
import './App.css';
import MapContainer from './components/mapContainer';

function App() {
  const [show, setShow] = useState(false);
  const [lineWidth, setLineWidth] = useState(1);
  const [lineColor, setLineColor] = useState('blue');
  const [pointColor, setpointColor] = useState('pink');
  const [pointRadius, setpointRadius] = useState(6);

  const gridIcon = (
            <div className='fs-14'>
              <Icon.Grid/>
              <span className='mx-1'>Dashboard</span>
            </div>
          );
  const chartIcon = (
            <div className='fs-14'>
              <Icon.BarChart/>
              <span className='mx-1'>Charts</span>
            </div>
          );

  return (
    <div className="App">
      <Container className="App-container">
        <Button variant="primary" onClick={() => setShow(true)}>
          Open Map
        </Button>

        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90wh"
          aria-labelledby="ia-node-data-mapping"
        >
          <Modal.Header closeButton className='pb-0'>
            <Modal.Title id="ia-node-data-mapping">
              <Breadcrumb>
                <Breadcrumb.Item className='fs-18 fw-600 default-color'>Inventory Allocation</Breadcrumb.Item>
                <Breadcrumb.Item className='fs-18 fw-600 default-color' active>Visualization</Breadcrumb.Item>
              </Breadcrumb>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className='px-0'>
            <Tabs
              defaultActiveKey="dashboard"
            >
              <Tab tabClassName='charts-tab above-tab' eventKey="charts" title={chartIcon}>
                <div className='d-flex'>

                </div>
              </Tab>
              <Tab tabClassName="dashboard-tab above-tab" eventKey="dashboard" title={gridIcon}>
                <div className='d-flex'>
                  <Frame149 setLineWidth={setLineWidth} setLineColor={setLineColor} />
                  <div className='flex-grow-1'>
                    <MapContainer lineColor={lineColor} lineWidth={lineWidth} pointColor={pointColor} pointRadius={pointRadius} />
                  </div>
                </div>
              </Tab>
            </Tabs>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}

export default App;
