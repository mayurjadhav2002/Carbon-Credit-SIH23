import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { AiOutlineDownload, AiFillEye } from 'react-icons/ai'
import ApprovedCertificates from './utils/ApprovedCertificates'
import { Select, Option } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';

const GovtCertificate = () => {
    const [state, setState] = useState("")

    const HandleSate = (e) => {
        // Not Working
        setState(e)
        console.log(state)
    }
    return (
        <div className='flex justify-start gap-5'>

            <Sidebar />
            <div class="p-4 sm:ml-64 w-full mt-20">
                <div className='flex justify-between items-start align-top'>
                    <div className='w-4/5 '>
                        <h1 className='text-3xl font-bold py-4 text-blue-600'>2023 - Previously Generated Certificates</h1>

                        <div className='flex justify-start gap-5 items-center py-2'>
                            <div className="w-72">
                                <Select label="Select State" onChange={HandleSate}>
                                    <Option value='1'>Material Tailwind HTML</Option>
                                    <Option value='2'>Material Tailwind React</Option>
                                    <Option value='3'>Material Tailwind Vue</Option>
                                    <Option value='4'>Material Tailwind Angular</Option>
                                    <Option value='5'>Material Tailwind Svelte</Option>
                                </Select>
                            </div>
                        </div>

                        <ApprovedCertificates />
                    </div>
                    <div className='border-l-4 border-gray-300 w-1/5 h-auto p-4'>
                    
                    <Button as={Link} to={'/govt/company/certificates/generate'}  className='px-4 py-2 bg-green-500 text-white
                   text-xl font-bold rounded-lg mx-auto text-center w-full
                    '>Generate New Certificate</Button>
                    <div className='text-ellipsis py-4'>
                    <p className='text-sans line-clamp-6 break-words my-4'>
                    Issuing certificates to companies that have effectively reduced their carbon emissions and used fewer carbon credits serves as a powerful incentive for sustainable practices. </p>
                    <p className='text-sans line-clamp-6 break-words my-4'>These certificates not only empower companies to sell surplus carbon credits, providing an economic advantage, but also signify their commitment to environmental responsibility. </p>
                    <p className='text-sans line-clamp-6 break-words my-4'>They become verifiable proof of a company's eco-friendliness, making them more attractive to environmentally conscious clients and investors. This recognition encourages a culture of emission reduction and sustainability, reinforcing the global drive to combat climate change while rewarding companies for their environmental stewardship.</p>
                
                    </div>
                        </div>

                </div>

            </div>

        </div>
    )
}



export default GovtCertificate;