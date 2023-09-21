import React from 'react'
import Sidebar from './Sidebar'
// , MdPendingActions
import { MdGeneratingTokens } from 'react-icons/md'
import { FcFactory } from 'react-icons/fc'
import Graph from './Graph'


const CompanyIndex = () => {
  const cardData = [
    {
      icon: MdGeneratingTokens,
      count: 455,
      text: 'Total Token Issued'
    },

    {
      icon: FcFactory,
      count: 14851,
      text: 'Total Companies'
    },
  ]

  return (
    <div className='flex justify-start gap-5'>

      <Sidebar />
      <div class="p-4 sm:ml-64 w-full mt-10">
        <div class="p-4  rounded-lg dark:border-gray-700 mt-14">
          <div class="grid grid-cols-5 justify-center gap-4 mb-4">
            {cardData.map((data, index) =>
              <div key={index} class="grid items-center justify-center px-5 py-3 h-24 rounded bg-gray-50 dark:bg-gray-800">
                <div className='flex justify-center gap-4 items-center'>
                  <data.icon className='text-4xl' /> <span className='text-2xl'>{data.count}</span>
                </div>
                <hr />
                <div className=''>
                  <p>{data.text}</p>
                </div>
              </div>
            )}

          </div>
          <div class=" p-5 mb-4 items-center justify-center flex rounded bg-gray-50 dark:bg-gray-800">
          
          <div className='w-4/5 '>
          <h1 className='text-center text-2xl py-5 font-bold'>Total Token Consumption Vs Profit</h1>
          
          
          <Graph/>
          </div>
          </div>





          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class=" items-center  bg-gray-50 h-auto p-9 dark:bg-gray-800">
              <h1 className='text-center text-2xl py-5 font-bold'>Total Token Consumption Vs Profit</h1>
            </div>
            <div class=" items-center  bg-gray-50 h-auto p-9 dark:bg-gray-800">
              <h2 className='text-center text-2xl py-5 font-bold'>Industries leading to C02 emmission</h2>
            </div>
           
          </div>
    
         
        </div>
      </div>

    </div>
  )
}

export default CompanyIndex
