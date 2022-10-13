import { useState } from 'react';
import { Breadcrumb, Button, Container, Modal, Tab, Tabs } from 'react-bootstrap';
import Frame149 from './components/Frame_149';
import './App.css';

function App() {
  const [show, setShow] = useState(false);

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
          <Modal.Header closeButton>
            <Modal.Title id="ia-node-data-mapping">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Inventory Allocation</Breadcrumb.Item>
                <Breadcrumb.Item active>Visualization</Breadcrumb.Item>
              </Breadcrumb>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tabs
              defaultActiveKey="dashboard"
            >
              <Tab eventKey="charts" title="Charts"></Tab>
              <Tab eventKey="dashboard" title="Dashboard">
                <div className='d-flex'>
                  <Frame149 />
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
