import React from 'react'
import '../Component4/Main4.css'
import EventIcon from '@mui/icons-material/Event';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
class Main4 extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <span className="main3-span1">Blog</span> <span className="main3-span2"> Site name</span>
                <div className='grid-contener'>
                    <div class="grid-item1">
                    </div>
                    <div class="grid-item2"></div>
                    <div class="grid-item3"></div>
                    <div class="grid-item4">
                        <span className='grid-item4-span'>Title of blog post</span>
                        {<EventAvailableIcon className='grid-item-icon' fontSize="large" />}
                        <span className='grid-item-span2'>10/21/2022</span>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to </p>
                    </div>
                    <div class="grid-item5">
                        <span className='grid-item4-span'>Title of blog post</span>
                        {<EventAvailableIcon className='grid-item-icon' fontSize="large" />}
                        <span className='grid-item-span2'>10/21/2022</span>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to </p>
                    </div>
                    <div class="grid-item6">       <span className='grid-item4-span'>Title of blog post</span>
                        {<EventAvailableIcon className='grid-item-icon' fontSize="large" />}
                        <span className='grid-item-span2'>10/21/2022</span>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to </p></div>
                </div>

            </div>
        )
    }
}

export default Main4