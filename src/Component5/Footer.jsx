import React from 'react'
import '../Component5/Footer.css'
import AddLocationIcon from '@mui/icons-material/AddLocation';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import MailIcon from '@mui/icons-material/Mail';
class Footer extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <>
                <span className="main3-span1">Contact</span> <span className="main3-span2"> Site name</span>
                <div className='footer-parent'>
                    <div className='footer-block1'>
                        {<AddLocationIcon sx={{ fontSize: 100 }} className='footer-icon1' ></AddLocationIcon>}
                        <p>Our Address</p>
                        <p className='footer-p'>Yerevan, Armenia</p>
                    </div>
                    <div className='footer-block2'> {<WifiCalling3Icon sx={{ fontSize: 100 }} className='footer-icon1' ></WifiCalling3Icon>}
                        <p>Phone Number</p>
                        <p className='footer-p'>+1 856 214 632</p></div>
                    <div className='footer-block3'>
                        <div className='footer-block2'> {<MailIcon sx={{ fontSize: 100 }} className='footer-icon1' ></MailIcon>}
                            <p>E-mail</p>
                            <p className='footer-p'>info@sitee.com</p></div>
                    </div>
                </div>
                <div className='footer-textEnd'>
                    <p>Copyright 2022. All rights reserved.</p>
                </div>
            </>
        )
    }
}

export default Footer