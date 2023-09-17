import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Typography,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Select,
    Option,
} from "@material-tailwind/react";

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

function Login() {
    const [type, setType] = React.useState("card");

    return (
        <div>

            <div className="h-screen md:flex align-middle">
                <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
                    <div>
                        <h1 className="text-white font-bold text-4xl font-sans">GoFinance</h1>
                        <p className="text-white mt-1">
                            The most popular peer to peer lending at SEA
                        </p>
                        <button
                            type="submit"
                            className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
                        >
                            Read More
                        </button>
                    </div>
                    <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
                    <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
                    <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
                    <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
                </div>
                <div className="flex md:w-1/2 justify-center align-middle items-center bg-white">





                    <Card className="w-full px-5 h-full align-middle my-auto">

                        <CardBody className='mx-auto w-full'>

                            <Tabs value="html" className="max-w-full w-full">
                                <TabsHeader
                                    className="bg-transparent gap-3"
                                    indicatorProps={{
                                        className: "bg-gray-900/10 shadow-none !text-gray-900",
                                    }}
                                >


                                    <Tab value="c" className='py-3 hover:bg-gray-100'>
                                        Company Login
                                    </Tab>
                                    <Tab value="g" className='py-3 hover:bg-gray-100'>
                                        GOvn Login
                                    </Tab>

                                </TabsHeader>
                                <TabsBody>
                                    <TabPanel value="c">
                                        <form className="mt-12 flex flex-col gap-4 px-3">
                                            <h1 className='text-2xl'>Please Login with your Official Credentials</h1>

                                            <div>
                                                <div className="mb-2 block">
                                                    <Label
                                                        htmlFor="email2"
                                                        value="Your email"
                                                    />
                                                </div>
                                                <TextInput
                                                    id="email2"
                                                    placeholder="name@flowbite.com"
                                                    required
                                                    shadow
                                                    type="email"
                                                />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label
                                                        htmlFor="password2"
                                                        value="Your password"
                                                    />
                                                </div>
                                                <TextInput
                                                    id="password2"
                                                    required
                                                    shadow
                                                    type="password"
                                                />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label
                                                        htmlFor="repeat-password"
                                                        value="Repeat password"
                                                    />
                                                </div>
                                                <TextInput
                                                    id="repeat-password"
                                                    required
                                                    shadow
                                                    type="password"
                                                />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Checkbox id="agree" />
                                                <Label
                                                    className="flex"
                                                    htmlFor="agree"
                                                >
                                                    <p>
                                                        I agree with the
                                                    </p>
                                                    <Link
                                                        className="text-cyan-600 hover:underline dark:text-cyan-500"
                                                        to={'/'}
                                                    >
                                                        <p>
                                                            terms and conditions
                                                        </p>
                                                    </Link>
                                                </Label>
                                            </div>
                                            <Button type="submit">
                                                Register new account
                                            </Button>
                                        </form>
                                    </TabPanel>

                                    <TabPanel value="g">
                                        <form className="mt-12 flex flex-col gap-4 px-3">
                                            <h1 className='text-2xl'>Please Login with your Official Credentials</h1>

                                            <div>
                                                <div className="mb-2 block">
                                                    <Label
                                                        htmlFor="email2"
                                                        value="Your email"
                                                    />
                                                </div>
                                                <TextInput
                                                    id="email2"
                                                    placeholder="name@flowbite.com"
                                                    required
                                                    shadow
                                                    type="email"
                                                />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label
                                                        htmlFor="password2"
                                                        value="Your password"
                                                    />
                                                </div>
                                                <TextInput
                                                    id="password2"
                                                    required
                                                    shadow
                                                    type="password"
                                                />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label
                                                        htmlFor="repeat-password"
                                                        value="Repeat password"
                                                    />
                                                </div>
                                                <TextInput
                                                    id="repeat-password"
                                                    required
                                                    shadow
                                                    type="password"
                                                />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Checkbox id="agree" />
                                                <Label
                                                    className="flex"
                                                    htmlFor="agree"
                                                >
                                                    <p>
                                                        I agree with the
                                                    </p>
                                                    <Link
                                                        className="text-cyan-600 hover:underline dark:text-cyan-500"
                                                        to={'/'}
                                                    >
                                                        <p>
                                                            terms and conditions
                                                        </p>
                                                    </Link>
                                                </Label>
                                            </div>
                                            <Button type="submit">
                                                Register new account
                                            </Button>
                                        </form>
                                    </TabPanel>
                                </TabsBody>

                            </Tabs>




                        </CardBody>
                    </Card>

                </div>
            </div>

        </div>
    )
}

export default Login