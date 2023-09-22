'use client';

import { Sidebar } from 'flowbite-react';
// HiInbox,HiUser
import { HiArrowSmRight, HiChartPie, HiShoppingBag, HiTable, HiViewBoards } from 'react-icons/hi';
import { MdFactory, MdPendingActions } from 'react-icons/md'
import { TbCertificate } from 'react-icons/tb'
import { Link } from 'react-router-dom';

export default function ContentSeparator() {
    return (
        <div className='bg-gray-50'>
            <aside id="logo-sidebar" class="fixed top-0 left-0 h-screen pt-20 transition-transform -translate-x-
             bg-white  sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">

                    <Sidebar aria-label="Sidebar with content separator example">
                        <Sidebar.Items>
                            <Sidebar.ItemGroup>
                                <Sidebar.Item
                                    as={Link}
                                    to={'/company'}
                                    icon={HiChartPie}
                                >
                                    <p>
                                        Dashboard
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Item
                                    as={Link}
                                    to={'/company/licence-transaction'}
                                    icon={MdFactory}
                                >
                                    <p>
                                        Buy Credits
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Item
                                as={Link}
                                    to="/company/certificate"
                                    icon={TbCertificate}
                                >
                                    <div className='flex items-center justify-between'>
                                        <p>
                                            Certificates
                                        </p>

                                        <p className='px-3 rounded-full  bg-blue-600 text-white'>5</p>
                                    </div>

                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="#"
                                    icon={MdPendingActions}
                                >
                                    <p>
                                        Pending Approvals
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="#"
                                    icon={HiShoppingBag}
                                >
                                    <p>
                                        Products
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="#"
                                    icon={HiArrowSmRight}
                                >
                                    <p>
                                        Sign In
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="#"
                                    icon={HiTable}
                                >
                                    <p>
                                        Sign Up
                                    </p>
                                </Sidebar.Item>
                            </Sidebar.ItemGroup>
                            <Sidebar.ItemGroup>
                                <Sidebar.Item
                                    href="#"
                                    className="bg-red-50 hover:bg-red-100 border-2 border-red-300"
                                >
                                    <div class="grid items-center justify-start  h-24 rounded  dark:bg-gray-800">
                                        <div className=''>
                                            <p>Total Carbon Emmited</p>
                                        </div>    <hr />
                                        <div className='flex justify-start gap-4 items-center'>

                                            <HiViewBoards className='text-4xl' /> <span className='text-2xl'>455
                                                <span className='text-xl text-gray-500'> tons</span>
                                            </span>
                                        </div>


                                    </div>
                                </Sidebar.Item>
                                <Sidebar.Item
                                href="#"
                                className="bg-lime-100 hover:bg-lime-200 border-2 border-lime-300"
                            >
                                <div class="grid items-center justify-start  h-24 rounded  dark:bg-gray-800">
                                    <div className=''>
                                        <p>Credit Remaining</p>
                                    </div>    <hr />
                                    <div className='flex justify-start gap-4 items-center'>

                                        <HiViewBoards className='text-4xl' /> <span className='text-2xl'>455
                                            <span className='text-xl text-gray-500'> tons</span>
                                        </span>
                                    </div>


                                </div>
                            </Sidebar.Item>
                            </Sidebar.ItemGroup>
                        </Sidebar.Items>
                    </Sidebar>
                </div>
            </aside>
        </div>
    )
}


