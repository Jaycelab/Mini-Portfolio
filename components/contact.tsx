'use client'

import { MessageSquareMore } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

import FadeIn from '@/lib/variants'
const Contact = () => {
  return (
    <section id='Contact'>
      <div className='px6 container flex flex-col justify-between py-12 text-lg md:flex-row'>
        <motion.div
          variants={FadeIn('right', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.8 }}
          className='mb-12 mr-6 flex items-center py-6'
        >
          <h1 className='text-[40px] font-bold uppercase leading-[3rem]'>
            let&apos;s work <br /> <span className='under-line'>together</span>
          </h1>
        </motion.div>
        <motion.form
          variants={FadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.8 }}
          className='bg-secondary/80 flex max-w-3xl flex-1 flex-col items-start gap-y-8 rounded-md p-10'
        >
          <input
            type='text'
            placeholder='Name '
            required
            className='focus:border-blue/25 w-full border-b border-white/25 bg-transparent py-3 outline-none transition-all placeholder:text-white/50'
          />
          <input
            type='text'
            placeholder='Subject '
            required
            className='focus:border-blue/25 w-full border-b border-white/25 bg-transparent py-3 outline-none transition-all placeholder:text-white/50'
          />
          <textarea
            name='message'
            id='message'
            placeholder='Message (this is not a valid message form yet)'
            className='focus:border-blue/25 mb-12 w-full resize-none border-b border-white/25 bg-transparent py-12 outline-none transition-all placeholder:text-white/50'
          ></textarea>
          <button className='w-50 bg-blue hover:bg-lighted hover:text-secondary mt-12 flex items-center justify-center gap-x-2 rounded-full px-4 py-3 transition-all duration-300 hover:transition-all'>
            <p className='text-xl capitalize'> Send Messsage</p>
            <MessageSquareMore className='h-6 w-6' />
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
