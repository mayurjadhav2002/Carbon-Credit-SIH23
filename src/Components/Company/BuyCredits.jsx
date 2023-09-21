import React from 'react'
import Sidebar from './Sidebar'
// import { MdGeneratingTokens, MdPendingActions } from 'react-icons/md'
// import { FcFactory } from 'react-icons/fc'
import {ImLeaf} from 'react-icons/im'



const BuyCredits = () => {

    return (
        <div className='flex justify-start gap-5'>

            <Sidebar />
            <div class="p-4 sm:ml-64 w-full mt-10">
                <div class="p-4  rounded-lg dark:border-gray-700 mt-14">


                    <div class=" items-center w-full justify-center mb-10  bg-blue-50 dark:bg-gray-800 p-5 rounded-md">
                        <h1 className='text-2xl font-bold text-blue-500'>Need more Carbon Credits?</h1>
                        <p className='text-red-500'>Please first check out the Current carbon emmission threshhold value or limit or GHG emmission score in your area. If it found that you're area
                            is already matched threshhold value, then purchasing more <span className='text-green-500'>Credits</span> will lead to Air pollution.
                        </p>

                    </div>

<div className='flex justify-between border-t-4 py-5 items-center '>
<div>
<h1 className='text-2xl font-semibold'>Purchase Credits from Government</h1>
<p>transaction will be secured between your organization and Government.</p>
</div>
<div className='flex items-center justify-center gap-5 bg-green-100 hover:scale-105 ease-in duration-200 cursor-pointer rounded-md p-4'>
<div>
<ImLeaf className='text-2xl text-green-600' /></div>
<div > 
<h2 className='text-2xl font-bold'>
Purchase from Certified Green Company? 
</h2>
<p>Helps to maintain and build strong infrastructure of CO2 and GHG emmission of the country.</p>
</div>

</div>

</div>






                </div>
            </div>

        </div>
    )
}



export default BuyCredits;