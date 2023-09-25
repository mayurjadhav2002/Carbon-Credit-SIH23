import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

function PendingApprovals() {
    return (
        <div className='flex justify-start gap-5'>

            <Sidebar />
            <div class="p-4 sm:ml-64 w-full mt-32">
            <h1 className='py-5 text-4xl font-bold'>Pending <span className='text-green-500'>CET</span> Approvals</h1>

                <div className='grid grid-cols-4 gap-4 items-center justify-center'>
                    <div className='px-4 py-3 bg-gray-50 border-4 border-gray-100 rounded-lg hover:scale-105 duration-200'>
                        <h1 className='text-lg font-bold'>Sugar cane Project ID #5456</h1>
                        <div className=' w-full py-2'>
                            <span className=' text-gray-700'>Requested CET: <b>150 CET</b></span>
                        </div>
              
                        <div className='flex justify-end gap-2 pt-4'>
                            <Link to={'/govt/company/approvals/details/143'} type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 
    hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 
    dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">View Details</Link>
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 
    dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Approve</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PendingApprovals