import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SQL from './SQL'; // Import the SQL component
import SQLSelect from './SQLSelect';
import TwoSections from './TwoSections';


// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';

function App() {
  return (
    <Router>
      <Container fluid>
        <Navbar />
        <Row className="flex-grow-1">
          <Col>
            <main>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/sql" element={<TwoSections />} />
                <Route path="/twosections" element={<TwoSections />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
              </Routes>
            </main>
          </Col>
        </Row>
        {/* Footer */}
        <Footer />
      </Container>
    </Router>
  );
}

export default App;