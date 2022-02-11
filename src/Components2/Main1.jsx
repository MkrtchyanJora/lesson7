import React from "react";
import '../Components2/Main1.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import img1 from '../Components2/img1.png'



class Main1 extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <main className="main1">
                <div className="block4">
                    <span className="main1-span">FAST</span> <span className="main1-span2"> Delivery
                        Healthy food
                        Order now!</span>
                    <Button variant="contained" color="success" size="large" endIcon={<ArrowForwardIosIcon />} >
                        Learn More
                    </Button>
                </div>
                <div className="block5">
                    <img src={img1} />

                </div>

            </main>
        )
    }
}
export default Main1