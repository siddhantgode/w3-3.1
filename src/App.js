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
import CourseGallery from './courses/udemy';
import LoginPage from './components/admin';
import EdufulnessLanding from './landing';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from './Home';
import Banner2 from './Banner copy 2';
import EngCourse from './Banner copy 3';
import SqlCourse from './Banner copy 4';
import Banner from './Banner';

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
                <Route path="/landing" element={<EdufulnessLanding />}/>
                <Route path="/dataeng" element={<Banner />}/>
                <Route path="/mainsection" element={<MainSection />}/>
                <Route path="/exercise" element={<Exercise />}/>
                <Route path="/sql" element={<MainSection />}/>
                                <Route path="/twosections" element={<TwoSections />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
                <Route path="/fe_civil" element={<Banner1/>} />
                <Route path="/course2" element={<SimpleAccordion/>} />
                <Route path="/test" element={<CustomAccordion/>} />
                <Route path="/snowflake" element={<Banner2/>} />
                <Route path="/eng" element={<EngCourse/>} />
                <Route path="/sql_course" element={<SqlCourse/>} />
                <Route path="/udemy_course" element={<CourseGallery/>} />
                <Route path="/admin" element={<LoginPage/>} />

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