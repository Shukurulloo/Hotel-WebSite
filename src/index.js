import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/pages/Home';
import Facilities from './components/pages/Facilities';
import Rooms from './components/pages/Rooms';
import ContactUs from './components/pages/ContactUs';
import { BrowserRouter , Route, Routes,useLocation } from 'react-router-dom';
import { Container } from './components/styles/container';
import Navbar from './components/pages/navbar/navbar';




function App () {
  return(
    <Container>
<BrowserRouter>
<MainApp/>
</BrowserRouter>
    </Container>
  )
}

function MainApp (){
  const tolocate = useLocation();
  
  const loadingPage = tolocate.pathname === "/Rooms";
  return(
    <React.Fragment>
    {loadingPage && !<Navbar />}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/facilities' element={<Facilities/>}/>
        <Route path='/Rooms' element={<Rooms/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
      </Routes>
    </React.Fragment>
  )
}

ReactDOM.render( <App />, document.getElementById('root'));