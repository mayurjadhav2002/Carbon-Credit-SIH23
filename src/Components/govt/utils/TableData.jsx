import React from 'react'
import { Link } from 'react-router-dom'
import {useEffect,useContext,useState} from 'react'
import Datacontext from '../../../context/Datacontext';

function TableData() {
    var context = useContext(Datacontext);
    var { getfactory,factory} = context
    
    const header=[
        {name: 'Company Name'},
        {name: 'Industry'},
        {name: 'Size'},
        {name: 'Project Details'},
        {name: 'Status'},
        {name: 'Limits'},
        {name: 'Issues'},
        {name: 'Eligible of CC'},
    ]
    const data = [].concat(
        ...factory.map((marker) => {
          var main = marker.Data;
          return main.map((mark) => ({
            key:mark._id,
            id: mark._id,
            name: mark.CompanyName,
            industry: mark.Product,
            size: mark.Size,
            project_details: 'https://details',
            status: 'pending',
            limits: mark.CarbonEmissionLimit,
            issues: mark.CarbonEmissionsProduction,
            eligible: 'No',
          }));
        })
      );
      useEffect(() => {
        if (factory.length === 0) {
            getfactory();
            getfactory();
        }
    }, [factory])
    return (
        <div>

            <div class="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
          
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                        <tr>

                        {header.map((data, index)=> 
                            <th key={index} scope="col" class="px-6 py-3">
                               {data.name}
                            </th>
                            )}
                           
                        </tr>
                    </thead>
                    <tbody>
                       
                        {data.map((data, index)=>
                            <tr key={data.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                            <th key="index" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {data.name}
                            </th>
                            <td class="px-6 py-4">
                                {data.industry}
                            </td>
                            <td class="px-6 py-4">
                                {data.size}
                            </td>
                            <td class="px-6 py-4">
                            <Link to={data.project_details} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</Link>
                            </td>
                            <td class="px-6 py-4">
                                {data.status}
                            </td>
                            <td class="px-6 py-4">
                                {data.limits} CAT
                            </td>
                            <td class="px-6 py-4">
                            {data.issues}
                        </td>
                        <td class="px-6 py-4">
                        {data.eligible}
                    </td>
                            </tr>
                            )}
                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableData