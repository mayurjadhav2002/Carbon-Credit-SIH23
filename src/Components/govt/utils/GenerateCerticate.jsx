import React, { useState } from 'react'
// import { MdGeneratingTokens, MdPendingActions } from 'react-icons/md'
// import { FcFactory } from 'react-icons/fc'

import Sidebar from '../Sidebar'

const GenerateCertificate = () => {
    const [UID, setUID] = useState('')
    const [sign, setSign] = useState('')
    const [credit, setCredit] = useState('')
    const [isActive, setIsActive] = useState(true)
    const [company, setCompany] = useState({
        Name: '',
        UID: '',
        Industry: '',
        State: '',
        city: '',
        date: '',
        TCE: '',
        TCP:'',
        TCU: ''
    })
    const handleLeave = () => {
        console.log("mouse leave")
        setIsActive(!isActive)
    }
    return (
        <div className='flex justify-start gap-5'>

            <Sidebar />
            <div class="p-4 sm:ml-64 w-full mt-10">
                <div class="p-4  rounded-lg dark:border-gray-700 mt-14">


                    <div class=" items-center w-full justify-center mb-4  bg-white dark:bg-gray-800">
                        <h1 className='py-5 text-4xl font-bold'>Generate Certificate</h1>




                    </div>
                    <div className='flex justify-center items-start gap-5'>

                        <div className='w-2/4'>
                            <div class="mb-6">
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company/Project UID</label>
                                <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
    focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
     dark:focus:border-blue-500 dark:shadow-sm-light
     
     " placeholder="UISID-45XXXXX XXXX"
                                    required
                                    onMouseLeave={handleLeave}
                                    onChange={(e) => setUID(e.target.value)}
                                />
                            </div>
                            <div class="mb-6">
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Signed By</label>
                                <input type="text"
                                className={`shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg 
                                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
                                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                                dark:focus:border-blue-500 dark:shadow-sm-light ${isActive ? 'bg-gray-200' : 'bg-gray-50'}`}
      placeholder="e.g. Honr. Chief Pollution officer"
                                    required
                                    onChange={(e) => setSign(e.target.value)}
                                    disabled={isActive} // Set the disabled attribute based on the isActive variable
                                    />
                            </div>


                            <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Carbon Credits purchased</label>
                            <input type="email" id="email" 
                            className={`shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                            dark:focus:border-blue-500 dark:shadow-sm-light ${isActive ? 'bg-gray-200' : 'bg-gray-50'}`}
  placeholder="e.g. Honr. Chief Pollution officer"
                                required
                                onChange={(e) => setCredit(e.target.value)}
                                disabled={isActive} // Set the disabled attribute based on the isActive variable

                            />
                        </div>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 
                        focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2
                         dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Generate Certificate</button>

                        </div>


                        <div className='w-2/4 p-5 bg-blue-100 rounded-lg'>
                        <h1 className='text-xl'>Company Details will Appear here</h1>
                        <p className='text-sm text-gray-600'>Once you enter the UID in Left side : </p>
                        <div className='py-4'>
                        <div className=' gap-3'>
                        <p className='my-1'>Company Name : <span className='text-bold'>{company.Name} </span></p>
                        <p className='my-1'>Company UID : <span className='text-bold'>{company.UID} </span></p>
                        <p className='my-1'>Industry : <span className='text-bold'>{company.Industry} </span></p>

                        <p className='my-1'>State : <span className='text-bold'>{company.State} </span></p>
                        <p className='my-1'>City : <span className='text-bold'>{company.city} </span></p>
                        <p className='my-1'>Registered Date : <span className='text-bold'>{company.date} </span></p>
                        <p className='my-1'>Total Carbon Emission (2023) : <span className='text-bold'>{company.TCE} </span></p>
                        <p className='my-1'>Total CET purchased : <span className='text-bold'>{company.TCP} </span></p>

                        <p className='my-1'>Total CET Used : <span className='text-bold'>{company.TCU} </span></p>



                        </div>
                        
                        
                        </div>
                        </div>
                    </div>








                </div>
            </div>

        </div>
    )
}



export default GenerateCertificate;