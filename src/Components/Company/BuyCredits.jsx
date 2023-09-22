import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Sidebar from './Sidebar'
// import { MdGeneratingTokens, MdPendingActions } from 'react-icons/md'
// import { FcFactory } from 'react-icons/fc'
import { ImLeaf } from 'react-icons/im'
import { Button, Input } from '@material-tailwind/react'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import { useDropzone } from 'react-dropzone'
import { Link } from 'react-router-dom'


const baseStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    transition: 'border .3s ease-in-out'
};

const activeStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};
const BuyCredits = () => {

    const [files, setFiles] = useState([]);

    const onDrop = useCallback(acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
    }, []);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({
        onDrop,
    });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isDragActive,
        isDragReject,
        isDragAccept
    ]);
    const thumbs = files.map(file => (
        <div key={file.name}>
            <img
                src={file.preview}
                alt={file.name}
            />
        </div>
    ));

    // clean up
    useEffect(() => () => {
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

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


                    <div className='grid lg:grid-cols-2 '>
                        <div className='col-span-1 p-5 h-auto z-10 items-center justify-center gap-5'>
                            <div className='bg-white border-2 border-gray-400 p-5 rounded-xl '>
                                <div className='py-2' id="desc">
                                    <h1 className='text-2xl font-bold text-blue-600'>Buy Credits from Government</h1>
                                    <span className='text-gray-700 font-sans'>Transaction are made in ether, please connect to your wallet before transaction</span>

                                </div>
                                <div className="my-4 flex flex-col gap-6">
                                    <Input size="lg" label="Company UIN" className='bg-white' />
                                    <Input size="lg" label="Credits in CET" className='bg-white selection:bg-none selection:border-none border-0' />

                                    <div {...getRootProps({ style })}>
                                        <input {...getInputProps()} />
                                        <div>Drag and drop your images here.</div>

                                    </div>
                                </div>
                                <Button variant="gradient" color='blue' className="flex justify-center my-5 items-center gap-3 text-md" fullWidth>
                                    <MdOutlineAccountBalanceWallet className='text-xl' />
                                    Buy Credits
                                </Button>
                            </div>
                        </div>

                        <div className='col-span-1 bg-red-200 p-5 mt-32 rounded-3xl z-0 -ml-32'>

                            <div className='ml-28' id="desc-2">
                                <div className='py-5 px-2'>
                                    <Link to="#" className='text-2xl text-blue-600 font-bold hover:underline cursor-pointer'>Transaction to Extend your Credit Balance? click here</Link>
                                    <p>Need More CET balance because of increased production. You can choose one of the two above options, if you want to purchase it through government click above link, else you can choose to purchase it from Green Credit certified Companies.</p>
                                </div>
                                <div className='font-bold'>
                                <h2>Upon Purchasing CET from Government you will need to verify your production and required documents from government authorities by
                                the medium suggested by government authorities. 
                                </h2>
                                <h2>Failed to doing so will be rejection of your request </h2>
                                </div>
                            </div>
                        </div>

                    </div>





                </div>
            </div>

        </div>
    )
}



export default BuyCredits;