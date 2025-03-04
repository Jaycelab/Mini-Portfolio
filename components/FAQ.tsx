'use client'

import Image from 'next/image'
import { animate, motion } from 'framer-motion'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import FadeIn from '@/lib/variants'

import { askedQuestions } from '@/lib/data'

const slideVariant = {
  initial: {
    x: 0
  },
  animate: {
    x: '-135%',
    transition: {
      repeat: Infinity,
      duration: 20
    }
  }
}

export const tech = [
  {
    src: '/tech/express.svg',
    width: 101.2,
    height: 29.99,
    alt: 'express'
  },
  {
    src: '/tech/node.svg',
    width: 106.2,
    height: 31,
    alt: 'node js'
  },
  {
    src: '/tech/ts.svg',
    width: 46.14,
    height: 45.24,
    alt: 'typescript'
  },

  {
    src: '/tech/react.svg',
    width: 54.98,
    height: 48.73,
    alt: 'react'
  },
  {
    src: '/tech/bootstrap.svg',
    width: 54.98,
    height: 48.73,
    alt: 'bootstrap'
  },
  {
    src: '/tech/css.svg',
    width: 54.98,
    height: 48.73,
    alt: 'css'
  },
  {
    src: '/tech/html.svg',
    width: 54.98,
    height: 48.73,
    alt: 'html'
  },
  {
    src: '/tech/javascript.svg',
    width: 54.98,
    height: 48.73,
    alt: 'javascript'
  }
]

const FAQ = () => {
  return (
    <section className='bg-primary pb-20 pt-36' id='FAQ'>
      <div className='container sm:px-2'>
        <div>
          <h1 className='text-[40px] font-bold uppercase leading-[3rem]'>
            Frequently <br /> <span className='under-line'>Asked</span>
          </h1>
        </div>
        <motion.div
          variants={FadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className='mx-auto mt-12 flex max-w-3xl flex-col justify-center rounded-md bg-primary py-8 sm:px-2 xl:py-4'>
            {askedQuestions.map(qst => (
              <Accordion
                type='single'
                collapsible
                className='w-full text-left'
                key={qst.id}
              >
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='mx-2 text-xl font-medium hover:no-underline'>
                    {qst.qs}
                  </AccordionTrigger>
                  <AccordionContent className='bg-accent/70 px-2 pt-4 text-[16px] leading-6'>
                    {qst.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </motion.div>
      </div>
      <div className='center mt-36 flex justify-center py-4'>
        <div className='flex w-full max-w-[1200px] items-center justify-center overflow-x-hidden'>
          <div className='from-secondary via-secondary/90 to-secondary/0 left-0 z-40 h-full w-[150px] -translate-x-5 bg-opacity-20 bg-gradient-to-r' />
          <motion.div
            variants={slideVariant}
            initial='initial'
            animate='animate'
            className='center flex space-x-12 bg-primary'
          >
            {tech.map(item => (
              <Image
                key={item.alt}
                src={item.src}
                width={item.width}
                height={item.height}
                alt={item.alt}
              />
            ))}
          </motion.div>
          <div className='from-secondary via-secondary/90 to-secondary/0 right-0 z-40 h-full w-[150px] -translate-x-5 bg-opacity-20 bg-gradient-to-l' />
        </div>
      </div>
    </section>
  )
}
export default FAQ
