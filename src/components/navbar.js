import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render = () => {
        return(
            <Navbar bg="dark" variant="dark" >
                <Navbar.Brand>Racket Query</Navbar.Brand>                
            </Navbar>
        )
    }
}

export default Nav