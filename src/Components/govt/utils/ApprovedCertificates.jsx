import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ApprovedCertificates() {

    const header = [
        {name: "Company Name"},
        {name: "Date"},
        {name:"Certificate URL"},
        {name: "Signed By"},
        {name: "Total Consumption"},


    ]
    const data = [
        {
            id: 1,
            company: "AWS summit",
            date: "today",
            url: "url"
        }
    ]


  return (
    <div >

    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">

                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                        <tr>

                        {header.map((data, index)=> 
                            <th key={index} scope="col" class="px-6 py-3">
                               {data.name}
                            </th>
                            )}
                           
                        </tr>
                    </thead>
                    <tbody className='h-2/4 overflow-scroll'>
                       
                        {data.map((data, index)=>
                            <tr key={data.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                            <th key="index" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {data.company}
                            </th>
                            <td class="px-6 py-4">
                                {data.date}
                            </td>
                     
                            <td class="px-6 py-4">
                            <Link to={data.url} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</Link>
                            </td>
                            
                   
                            </tr>
                            )}
                       
                    </tbody>
                </table>
    
    </div>
  )
}

export default ApprovedCertificates