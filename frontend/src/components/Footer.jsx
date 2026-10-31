import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.styleHub} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Discover the latest fashion trends with StyleHub. Explore our exclusive collection of stylish clothing, designed to keep you comfortable, confident, and fashionable. Shop your favorite styles at affordable prices and enjoy a seamless online shopping experience.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 8754637962</li>
                <li>immanuvel403@gmail.com</li>
            </ul>
        </div>

      </div>

        

    </div>
  )
}

export default Footer
