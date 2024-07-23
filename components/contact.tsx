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
          className='flex max-w-3xl flex-1 flex-col items-start gap-y-8 rounded-md bg-black p-10'
        >
          <input
            type='text'
            placeholder='Name '
            required
            className='focus:border-blue/25 w-full border-b-2 border-white/90 bg-accent/70 p-3 outline-none transition-all placeholder:text-white/90 focus:border-black'
          />
          <input
            type='text'
            placeholder='Subject '
            required
            className='focus:border-blue/25 w-full border-b-2 border-white/90 bg-accent/70 p-3 outline-none transition-all placeholder:text-white/90 focus:border-black'
          />
          <textarea
            name='message'
            id='message'
            placeholder='Message (not a valid message form yet)'
            className='h-24 w-full border-b-2 border-white/90 bg-accent/70 p-3 outline-none transition-all placeholder:text-white/90 focus:border-black'
          ></textarea>
          <button className='w-50 mx-auto mt-12 flex items-center justify-center gap-x-2 rounded-full px-4 py-3 outline transition-all duration-300 hover:bg-accent/90 hover:text-white/90 hover:transition-all'>
            <p className='p-0 text-sm capitalize'>Send Message</p>
            <MessageSquareMore className='h-4 w-4' />
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
