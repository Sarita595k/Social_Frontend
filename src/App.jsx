import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';

import { Header } from './Pages/Header';
import { Feed } from "./Pages/Feed"
import { Signin } from "./Pages/Signin"
import { SignUp } from "./Pages/Signup"

// import { Button } from 'react-bootstrap';
const App = () => {
  return (<>
    <NavbarComponent />
    <Container className='text-center'>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/feed" element={<Feed />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
    </Container>

    {/* <Button variant="primary">Primary</Button> */}
  </>)
}

export default App