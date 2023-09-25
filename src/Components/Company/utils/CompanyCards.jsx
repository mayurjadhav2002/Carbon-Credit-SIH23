import React from 'react'
import Sidebar from './../Sidebar'
import { ImLocation } from 'react-icons/im'
import { FaCoins, FaIndustry } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function CompanyCards() {
    return (
        <div className='flex justify-start gap-5'>

            <Sidebar />
            <div class="p-4 sm:ml-64 w-full mt-10">
                <div className='grid grid-cols-1 lg:grid-cols-4 justify-start gap-4 mt-10'>
                    <div className='col p-5 bg-blue-50 rounded-2xl hover:scale-105 duration-200 ease-in '>
                        <div className='flex justify-between items-center'>
                            <div className='grid'>
                                <p className='text-xs semibold text-gray-700'>Project Name</p>
                                <h1 className='font-bold'>Tata Steel Factory</h1>
                            </div>
                            <div className='grid'>
                                <p className='text-sm text-gray-600'>19 Aug 2023</p>
                            </div>
                        </div>
                        <p className='text-xs semibold text-gray-700 mt-5'>Information</p>
                        <div className='flex justify-between items-center'>
                            <div>
                                <span className='flex items-center gap-1'><FaIndustry /> Oil</span>
                            </div>
                            <div>
                                <span className='flex items-center gap-1'><ImLocation className='text-blue-700' /> Mumbai</span>
                            </div>
                            <div>
                                <span className='flex items-center gap-1'><FaCoins className='text-yellow-300' /> 45M</span>
                            </div>
                        </div>
                        <div className=' justify-start flex gap-5 mt-5 items-center'>

                            <div><Link className='text-green-700  font-bold bg-green-100 px-1 py-1 rounded-md'>Fund Project</Link> </div>
                            <div><Link className='text-blue-500 underline font-bold'>View </Link> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyCards
