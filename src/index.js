import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/pages/Home';
import Facilities from './components/pages/Facilities';
import Rooms from './components/pages/Rooms';
import ContactUs from './components/pages/ContactUs';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import { Container } from './components/styles/container';




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
  return(
    <React.Fragment>
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