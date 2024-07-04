import { Mail } from 'lucide-react'
import Link from 'next/link'
import Social from '@/components/social'
import Photo from '@/components/photo'


const Hero = () => {
  return (
    <section className='w-f pt-40'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col items-center justify-between gap-10 xl:flex-row xl:pt-8'>
          {/* text */}
      
          <div className='text-center xl:text-left'>
            <span>Hello World! </span>

            <h1 className='text-[40px] font-bold capitalize leading-[3rem]'>
              Mauris <br />
              <span className='under-line'>Suscipit</span>
            </h1>
            <div className='py-8'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                tristique tincidunt velit, in elementum dolor tempus quis.
                Mauris viverra eros eu felis rutrum luctus. Phasellus et
                fermentum lorem. Ut non imperdiet ante. Mauris suscipit, mauris
                et luctus faucibus, lorem ante bibendum sapien, eu viverra quam
                mauris a neque. Nam ac neque pharetra, fringilla nunc vitae,
                dignissim enim. Phasellus vel auctor nisl, nec blandit mauris.
                Nam malesuada eros in elit volutpat convallis. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Etiam vel vulputate odio. Sed lorem orci,
                faucibus convallis dictum a, posuere vitae ex. Vivamus non
                tellus posuere, pellentesque ex eget, euismod ligula. Nullam et
                aliquam arcu.
              </p>
            </div>
            <div className='mt-4 flex flex-col items-center justify-center xl:flex-row xl:justify-start xl:space-x-8'>
              <div className='flex gap-x-2'>
                <Link
                  href='mailto:jason.json@hotmail.com'
                  target='_blank'
                  className='border-blue text-blue hover:bg-blue/80 hover:text-lighted flex items-center space-x-2 rounded-full border-2 px-6 py-3 font-medium uppercase transition-all'
                >
                  <span className='text-sm'>Get in touch</span>
                  <Mail className='size-5' />
                </Link>
              </div>
              <div className='flex py-4 xl:py-0'>
                <Social />
              </div>
            </div>
          </div>
          {/* image */}

          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
