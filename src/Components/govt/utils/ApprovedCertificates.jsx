import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ApprovedCertificates() {
    const [ state, setState ] = useState([])
    const [accessToken, setAccessToken] = useState('')
    const [url , setUrl] = useState('https://www.universal-tutorial.com/api/getaccesstoken')
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState(null)


//   req.headers({
//     "Accept": "application/json",
//     "api-token": "u9dy1zmd7m0vG2zTuMSZZONbinEDL5jizyb0lTTItP348HEJ-5TSOq-zIrtvRev_4lM",
//     "user-email": "goxolad708@bookspre.com"
//   });
    const header = [
        {name: "company Name"},
        {name: "date"},
        {name:"Certificate URL"}
    ]
    const data = [
        {
            id: 1,
            company: "AWS summit",
            date: "today",
            url: "url"
        }
    ]
    useEffect(  () => {
         fetch(url, {headers: {
            "Accept": "application/json",
            "api-token": "u9dy1zmd7m0vG2zTuMSZZONbinEDL5jizyb0lTTItP348HEJ-5TSOq-zIrtvRev_4lM",
            "user-email": "goxolad708@bookspre.com"
        }})
        .then(res => {console.log(res.json())        })
      
        .catch(error => {
            setError(error)
        })
    }, [url])
  return (
    <div>
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