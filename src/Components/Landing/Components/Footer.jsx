import React from 'react'

function Footer() {
  return (
    <div>
    
    <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
  <div class="mx-auto max-w-screen-xl text-center">
      <a href="#" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
   
      <img className="w-10 " src="./logo.jpeg"></img> <span className="font-bold text-xl text-black">Credactions</span>
      </a>
      <p class="my-6 text-gray-500 dark:text-gray-400">Open-source library of over 400+ web components and interactive elements built for better web.</p>
      <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Government</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">Feature</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Company</a>
          </li>
         
      </ul>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2021-2022 <a href="#" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
  </div>
</footer>
    </div>
  )
}

export default Footer