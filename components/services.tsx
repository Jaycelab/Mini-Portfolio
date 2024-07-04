'use client'
import { motion } from 'framer-motion'
import FadeIn from '../lib/variants'
import AnimatedCounter from '../lib/animatedCounter'

const Services = () => {
  return (
    <section id='services' className='m-50 z-30 -translate-y-1 bg-primary'>
      <div className='container w-full py-[100px] lg:py-[200px]'>
        <div className='flex flex-col justify-between gap-12 px-2 pt-20 lg:flex-row lg:px-0'>
          <motion.div
            variants={FadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.8 }}
            className='flex w-full flex-col justify-between gap-8 rounded-md bg-primary p-8 lg:mr-8 lg:w-1/2'
          >
            <h1 className='pb-4 text-[40px] font-bold leading-[3rem]'>
              Lorem <br />
              <span className='under-line'>VICES</span>
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
              exercitationem ad laudantium beatae nemo ratione nulla sapiente
              cum sint similique!
            </p>
            <div className='flex justify-between space-x-4 py-8'>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-lg font-semibold uppercase'> Projects</p>
                <p className='text-[36px] font-bold text-accent/70'>
                  {' '}
                  <AnimatedCounter from={0} to={69} />
                </p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-acc text-lg font-semibold uppercase'>
                  {' '}
                  Counter
                </p>
                <p className='text-[36px] font-bold text-accent/70'>
                  <AnimatedCounter from={0} to={420} />
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={FadeIn('left', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.8 }}
            className='flex h-full flex-col gap-8'
          >
            <div className='flex items-center space-x-6 bg-primary p-4'>
              <p className='text-6xl font-bold text-accent/70'>01</p>
              <div>
                <h2 className='mb-2 text-2xl font-bold'>
                  Front-End Development
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  architecto officia velit voluptatum perferendis atque quas
                  eligendi reprehenderit excepturi facilis!
                </p>
              </div>
            </div>
            <div className='flex items-center space-x-6 bg-primary p-4'>
              <p className='text-6xl font-bold text-accent/70'>02</p>
              <div>
                <h2 className='mb-2 text-2xl font-bold'>
                  Back-End Development
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  quis vel a sint corporis asperiores illo id totam voluptas
                  neque.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
