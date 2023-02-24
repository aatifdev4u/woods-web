
import './App.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import React from 'react';
import { Routes, Route, BrowserRouter  } from 'react-router-dom';
import { Container, Nav , Carousel } from 'react-bootstrap';
import  NavbarCustom  from './component/NavbarCustom'
import { Home } from "./pages/Home";
import { Notices } from "./pages/Notices";
import { Gallery } from "./pages/Gallery";
import { Admission } from "./pages/Admission";
import { Team } from "./pages/Team";
import { Contact } from "./pages/Contact";
import { Footer } from './component/Footer';
import { ScrollingNotice } from './component/ScrollingNotice';
import { useSelector } from 'react-redux';

function App() {
  const currentPage = useSelector(state => state.appUtilityData.currentPage);
  let pageToDisplay = <Home/>;

  switch(currentPage){
    case 'home':
      pageToDisplay = <Home/>
      break;
    case 'notices':
      pageToDisplay = <Notices/>
      break;
    case 'admission':
      pageToDisplay = <Admission/>
      break;
    case 'gallery':
      pageToDisplay = <Gallery/>
      break;
    case 'team':
      pageToDisplay = <Team/>
      break;
    case 'contact':
      pageToDisplay = <Contact/>
      break;
    default:
      pageToDisplay = <Home/>
  }
  return (
      <>
        <NavbarCustom/>
        <ScrollingNotice/>
        <Container className='mb-4'>
          {/* <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/woods-web" element={<Home/>} />
            <Route path="/notices" element={<Notices/>} />
            <Route path="/admission" element={<Admission/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/team" element={<Team/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes> */}
          {pageToDisplay}
        </Container>
        <Footer/>
      </>
  );
}

export default App;
