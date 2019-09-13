import React from 'react';
import '../assets/css/app.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar'
import StringInput from './string_input';

import Container from 'react-bootstrap/Container'


const App = () => (
    <div>
        <Navbar/>
        <Container>
            <StringInput/>
        </Container>
    </div>
);

export default App;
