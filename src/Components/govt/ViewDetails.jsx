import React from 'react'
import Sidebar from './Sidebar'
import { Button } from '@material-tailwind/react'
import PollutionGraph from '../miscellaneous/PollutonGraph'

function ViewDetails() {
    return (
        <div className='flex justify-start gap-5'>

            <Sidebar />
            <div class="p-4 sm:ml-64 w-full mt-32">
            <h1 className='py-5 text-4xl font-bold'>Project Details</h1>

                <div className='flex gap-4 justify-between '>
                <div className='w-2/4 h-screen bg-red-200'>
                <img src='https://assets.terrapass.com/wp-content/uploads/2022/08/carbon-dioxide-emissions-from-electricity-photo-of-factory-smoke.jpg' 
                className='w-full h-72 object-fill '
                
                />
                <h1 className='text-center text-2xl py-2 font-semibold'>Kerala EcoTourism</h1>

                </div>
                <div className='w-2/4 h-screen bg-green-200'>
                <PollutionGraph/>
                </div>

                </div>
            </div>
        </div>
    )
}

export default ViewDetails