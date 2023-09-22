import React from 'react'
import Sidebar from './Sidebar'

const Certificate = () => {

    return (
        <div className='flex justify-start gap-5'>

            <Sidebar />
            <div class="p-4 sm:ml-64 w-full mt-10">
<div className='grid grid-cols-1 lg:grid-cols-4 justify-start gap-auto mt-10'>
<div className='col  h-auto rounded shodow-md inset-1 border-[1px] border-gray-200 '>
<div className='w-full h-4/5 overflow-hidden'>
<img src='https://tailwindcomponents.com/storage/u1jvLtPrLNZBuB4E6IG0ewSlw90KAlcOCVPrkfSo.jpg' alt='' title='certificate' className='object-contain' /> 
</div>
<div className='flex justify-center px-3  py-2'>
<span className='text-lg text-ellipsis'>Signed by: RJ Prakash (chief min)</span>
</div>
<div className='flex justify-between px-3 pb-2'>
<span><span className='font-bold'>Total Emission: </span>4000 Tons</span>
<span className='text-gray-500'>19 Aug 2023</span>
</div>

</div>

</div>
            </div>

        </div>
    )
}



export default Certificate;