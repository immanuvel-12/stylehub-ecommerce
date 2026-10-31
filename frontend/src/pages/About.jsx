
import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      {/* ABOUT US */}
      <div className='text-2xl text-center pt-5 border-t [&>div]:mb-0'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='mt-3 mb-7 flex flex-col md:flex-row gap-6'>
        <img
          className='w-full md:max-w-[400px] object-cover'
          src={assets.ronaldoAbout}
          alt="About StyleHub"
        />

        <div className='flex flex-col justify-center gap-4 md:w-2/4 text-gray-600 text-[15px] md:text-base leading-relaxed'>
          <p>
            StyleHub is your destination for modern fashion and everyday style.
            We believe fashion is more than just clothing — it's a way to express
            your personality and confidence.
          </p>

          <p>
            Our collection brings together trendy, comfortable, and affordable
            clothing for every occasion. From casual wear to stylish outfits,
            we make it easy to discover your perfect look.
          </p>

          <b className='text-gray-800'>Our Mission</b>

          <p>
            Our mission is to make fashion accessible to everyone by providing
            quality products, affordable prices, and a seamless online shopping
            experience. At StyleHub, your satisfaction and style always come first.
          </p>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className='text-xl py-2 [&>div]:mb-0'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-[15px] mb-10'>

        <div className='border px-8 md:px-10 py-7 flex flex-col gap-3'>
          <b className='text-gray-800'>Quality Products</b>
          <p className='text-gray-600 leading-relaxed'>
            We focus on providing carefully selected fashion products
            with quality, comfort, and style.
          </p>
        </div>

        <div className='border px-8 md:px-10 py-7 flex flex-col gap-3'>
          <b className='text-gray-800'>Easy Shopping</b>
          <p className='text-gray-600 leading-relaxed'>
            Enjoy a smooth and user-friendly shopping experience
            with easy browsing and hassle-free ordering.
          </p>
        </div>

        <div className='border px-8 md:px-10 py-7 flex flex-col gap-3'>
          <b className='text-gray-800'>Customer Support</b>
          <p className='text-gray-600 leading-relaxed'>
            Our team is always ready to help you with your orders
            and provide a satisfying shopping experience.
          </p>
        </div>

      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
