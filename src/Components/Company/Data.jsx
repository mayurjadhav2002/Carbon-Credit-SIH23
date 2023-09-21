import React from 'react'
import Sidebar from './Sidebar'
// import { MdGeneratingTokens, MdPendingActions } from 'react-icons/md'
// import { FcFactory } from 'react-icons/fc'
import TableData from './utils/TableData'



const ActualCompanyData = () => {

    return (
        <div className='flex justify-start gap-5'>

            <Sidebar />
            <div class="p-4 sm:ml-64 w-full mt-10">
                <div class="p-4  rounded-lg dark:border-gray-700 mt-14">


                    <div class=" items-center w-full justify-center mb-4  bg-white dark:bg-gray-800">
                    <h1 className='py-5 text-2xl font-bold'>Industrial Information</h1>

                        <TableData/>
                    </div>








                </div>
            </div>

        </div>
    )
}



export default ActualCompanyData;