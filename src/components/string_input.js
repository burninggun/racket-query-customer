import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class StringInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            racket_model: '',
            tension: '',
            string_model: '',
        }
    }

    handleKeyChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    render = () => {
        console.log(this.state);
        return (
            <div>
                <h4 className="my-3 " >New String Order</h4>
                <Form>
                    <Form.Group>  
                        <Form.Label>Racket Title</Form.Label>
                        <Form.Control
                            onChange={(event) => this.handleKeyChange(event)}
                            id="racket_model" 
                            placeholder="Racket Title" 
                            />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>String Tension</Form.Label>
                        <Form.Control
                            onChange={(event) => this.handleKeyChange(event)} 
                            id="tension" 
                            type="number"
                            placeholder="Enter String Tension" 
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>String Model</Form.Label>
                        <Form.Control
                            onChange={(event) => this.handleKeyChange(event)}
                            id="string_model" 
                            placeholder="Enter String Model" 
                        />
                    </Form.Group>
                        <div className="mt-5 d-flex justify-content-end" >
                            <Button variant="warning" >Checkout</Button>

                        </div>
                </Form>
            </div>
        )
    }
}


export default StringInput