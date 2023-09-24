'use client';

import { Sidebar } from 'flowbite-react';
// HiInbox,HiUser
import { HiArrowSmRight, HiChartPie,  HiShoppingBag, HiTable, HiViewBoards } from 'react-icons/hi';
import {MdFactory, MdPendingActions} from 'react-icons/md'
import {TbCertificate} from 'react-icons/tb'
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
                                to={'/govt/dashboard'}
                                    icon={HiChartPie}
                                >
                                    <p>
                                        Dashboard
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Item 
                                as={Link}
                                    to={'/govt/company/data'}
                                    icon={MdFactory}
                                >
                                    <p>
                                        Companies
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Item
                                as={Link}
                                to={'/govt/company/certificates'}
                                icon={TbCertificate}
                                >
                                    <p>
                                        Certificates
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Item
                                as={Link}
                                to={'/govt/map'}
                                icon={TbCertificate}
                                >
                                    <p>
                                        Carbon Radius
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="#"
                                    icon={MdPendingActions}
                                >
                                    <p>
                                        Pending Approvals
                                    </p>
                                </Sidebar.Item>
                            </Sidebar.ItemGroup>
                            <Sidebar.ItemGroup>
                                <Sidebar.Item
                                    href="#"
                                    icon={HiViewBoards}
                                >
                                    <p>
                                        Documentation
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="#"
                                    icon={HiViewBoards}
                                >
                                    <p>
                                        Help
                                    </p>
                                </Sidebar.Item>
                            </Sidebar.ItemGroup>
                        </Sidebar.Items>
                    </Sidebar>
                </div>
            </aside>
        </div>
    )
}


