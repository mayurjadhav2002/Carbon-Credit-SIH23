import React from 'react'
import Sidebar from './Sidebar'
import {AiOutlineDownload, AiFillEye} from 'react-icons/ai'
import ApprovedCertificates from './utils/ApprovedCertificates'
const GovtCertificate = () => {

    return (
        <div className='flex justify-start gap-5'>

            <Sidebar />
            <div class="p-4 sm:ml-64 w-full mt-10">
                <div className='grid grid-cols-1 lg:grid-cols-4 justify-start gap-auto mt-10'>
                    <div className='col  h-auto rounded-lg shodow-md inset-1 border-[1px] border-gray-200 hover:scale-105 duration-500 ease-in'>
                        <div className='w-full h-4/5 overflow-hidden'>
                        <span></span>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7036S0R9rbqdnBz4pO0e_fbmBwafJBSkTERpmpYqz&s' alt='' title='certificate' className='object-cover w-full h-auto p-2' />
                        </div>
                       
                        <div className='flex justify-between px-3 pb-2 items-center'>
                            <span className='text-lg text-ellipsis'>Signed by: RJ Prakash (chief min)</span>

                            <span className='text-gray-500'>19 Aug 2023</span>
                        </div>
                        <div className='flex justify-between px-3  py-2'>
                        <span><span className='font-bold'>Total Emission: </span>4000 Tons</span>
                        <div className='flex items-center gap-2'>
                        <AiFillEye className='text-lg text-blue-500 cursor-pointer hover:scale-110' title='view certificate'/>
                        <AiOutlineDownload type='button' className='text-lg text-green-500 cursor-pointer hover:scale-110' title='download'/>
                        </div>
                        </div>

                    </div>

                </div>

                <ApprovedCertificates/>
            </div>

        </div>
    )
}



export default GovtCertificate;