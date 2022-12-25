
import './App.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Container, Nav , Carousel } from 'react-bootstrap';
import { Navbar } from './component/Navbar'
import { Home } from "./pages/Home";
import { Notices } from "./pages/Notices";
import { Gallery } from "./pages/Gallery";
import { Admission } from "./pages/Admission";
import { Examination } from "./pages/Examination";
import { Contact } from "./pages/Contact";
import { Footer } from './component/Footer';

function App() {
  return (
      <>
        <Navbar/>
        <Container className='mb-4'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/notices" element={<Notices/>} />
            <Route path="/admission" element={<Admission/>} />
            <Route path="/gallery" element={<Gallery/>} />
            {/* <Route path="/exam" element={<Examination/>} /> */}
            <Route path="/contact" element={<Contact/>} />
          </Routes>
          <Notices/>
          <Gallery/>
          <Examination/>
          <Contact/>
        </Container>
        <Footer/>
      </>
  );
}

export default App;
