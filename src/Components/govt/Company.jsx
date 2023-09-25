import React from 'react'
import Sidebar from './Sidebar'
// , MdPendingActions
import { MdGeneratingTokens } from 'react-icons/md'
import { FcFactory } from 'react-icons/fc'
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,

  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale,
  LinearScale,
  BarElement,
  Title,);


const Company = () => {
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
  const data = {
    labels: ['Automobile', 'Fuel', 'Oil', 'Home Decor', 'IT', 'Mining'],
    datasets: [
      {
        label: 'Carbon Emission by ',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };


  const labels = ['A', 'B'];

  const barData = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [50, 100],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [100, 5880],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  
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
          <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
              <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
              </svg>
            </p>
          </div>





          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class=" items-center  bg-gray-50 h-auto p-9 dark:bg-gray-800">
              <h1 className='text-center text-2xl py-5 font-bold'>Total Token Consumption Vs Profit</h1>
              <Bar data={barData} />
            </div>
            <div class=" items-center  bg-gray-50 h-auto p-9 dark:bg-gray-800">
              <h2 className='text-center text-2xl py-5 font-bold'>Industries leading to C02 emmission</h2>
              <Pie data={data} />
            </div>
           
          </div>
    
         
        </div>
      </div>

    </div>
  )
}

export default Company
