'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Photo = () => {
  return (
    <div className='relative h-full w-full'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.7, duration: 2.5, ease: 'easeIn' }
        }}
      >
        {/*IMAGE*/}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.5, duration: 1.5, ease: 'easeOut' }
          }}
          className='absolute h-[298px] w-[298px] mix-blend-lighten xl:h-[498px] xl:w-[498px]'
        >
          {/*image props*/}
          <Image
            src='/hero/profile.jpg'
            priority
            className='rounded-full'
            quality={100}
            fill
            alt='profile-photo'
          />
        </motion.div>

        {/*circle absolute top-0 left-0 w-full h-full xl:w-[498px] xl:h-[498px]*/}
        <motion.svg
          className='h-[300px] w-[300px] xl:h-[506px] xl:w-[506px]'
          fill='transparent'
          viewBox='0 0 506 506'
          xmlns='http://www.w3.org/2000/svg'
        >
          {/*circle*/}
          <motion.circle
            cx='253'
            cy='253'
            r='250'
            stroke='#FFFFFF'
            strokeWidth='3.2'
            strokeLinecap='round'
            strokeLinejoin='round'
            initial={{ strokeDasharray: '24 10 0 0' }}
            animate={{
              strokeDasharray: ['15 120 25 25 ', '16 25 92 72', '4 250 22 22'],
              transition: {
                delay: 0.3,
                duration: 8.9,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse'
              },
              rotate: [120, 360]
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default Photo
