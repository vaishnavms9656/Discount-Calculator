import React from 'react'
import './Discount.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function Discount() {
    const [amount, setAmount] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [savings, setSavings] = useState(0);
    const [pay, setPay] = useState(0)
    const calculate = (e) => {
        if (amount === 0 || discount === 0) {
            alert("please enter the values")
        }
        else {
            const savings = (amount * discount) / 100
            setSavings(savings)
            const pay = amount - savings
            setPay(pay)
        }
    }
    const reset = () => {
        setAmount(0)
        setDiscount(0)
        setSavings(0)
        setPay(0)
    }
    return (
        <div className='main'>
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <div className="image-section">
                            <img src="https://media1.giphy.com/media/Xed4OtbVcRjW16QZtc/source.gif" style={{ width: '600px' }} alt="" />
                        </div>

                    </Col>
                    <Col  style={{ marginTop: '150px' }}>
                        <div className="form-section">
                            <h1>Discount Calculator</h1>
                            <form action="">
                                <div className="input">
                                    <TextField id="outlined-basic" value={amount || ''} onChange={(e) => setAmount(e.target.value)} label="Amount" variant="outlined" style={{ margin: '15px' }} />
                                    <TextField id="outlined-basic" value={discount || ''} onChange={(e) => setDiscount(e.target.value)} label="Discount" variant="outlined" style={{ margin: '15px' }} />
                                    <div className="buttons">
                                        <Button variant="contained" color="secondary" onClick={(e) => calculate(e)}>
                                            Calculate
                                        </Button>
                                        <Button variant="outlined" color="error" onClick={(e) => reset(e)}>
                                            Reset
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="output">
                            <div className="saving">
                                <h1 style={{ fontSize: '20px' }}>Money Saved</h1>
                                <p>&#8377; {savings}</p>
                            </div>
                            <div className="pay">
                                <h1 style={{ fontSize: '20px' }}>Amount To Pay</h1>
                                <p>&#8377; {pay}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Discount