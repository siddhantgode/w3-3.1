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
import MainSection from './MainSection';
import Exercise from './Exercise';
import FeCivil from './courses/feCivil';
import Banner1 from './Banner copy';
import CustomAccordion from './accordian';
import SimpleAccordion from './accordian2';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from './Home';
import Banner2 from './Banner copy 2';

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
                <Route path="/mainsection" element={<MainSection />}/>
                <Route path="/exercise" element={<Exercise />}/>
                <Route path="/sql" element={<MainSection />}/>
                                <Route path="/twosections" element={<TwoSections />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
                <Route path="/course" element={<Banner1/>} />
                <Route path="/course2" element={<SimpleAccordion/>} />
                <Route path="/test" element={<CustomAccordion/>} />
                <Route path="/course3" element={<Banner2/>} />
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