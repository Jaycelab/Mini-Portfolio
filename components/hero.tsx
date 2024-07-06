import { Mail } from 'lucide-react'
import Link from 'next/link'
import Social from '@/components/social'
import Photo from '@/components/photo'

const Hero = () => {
  return (
    <section className='w-f pt-40'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col items-center justify-between gap-10 xl:flex-row xl:pt-8'>
          <div>
            <Photo />
          </div>
          <div className='text-center xl:text-left'>
            {/* some animated text*/}
            <span className='text-[20px] text-accent/90'>Animated Text</span>
            {/* name?*/}
            <h1 className='text-ac text-[40px] font-bold capitalize leading-[3rem]'>
              Mauris <br />
              <span className='under-line'>Suscipit</span>
            </h1>
            <div className='py-8'>
              {/* hero heading*/}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                tristique tincidunt velit.
              </p>
            </div>
            <div className='flex flex-col items-center justify-center xl:flex-row xl:justify-start xl:space-x-8'>
              <div className='flex gap-x-2'>
                <Link
                  href='mailto:jason.json@hotmail.com'
                  target='_blank'
                  className='/80 hover:text-lighted flex items-center space-x-2 rounded-full border-2 border-red-700 px-6 py-3 font-medium uppercase text-white transition-all hover:bg-red-700'
                >
                  <span className='text-sm'>Get in touch</span>
                  <Mail className='size-5' />
                </Link>
              </div>
              <div className='mt-2 flex py-6 xl:py-0'>
                <Social />
              </div>
            </div>
          </div>
          {/* image */}
        </div>
      </div>
    </section>
  )
}

export default Hero
