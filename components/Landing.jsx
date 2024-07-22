import Image from 'next/image'
import Link from 'next/link'
import Typewrite from '@/components/Typewrite'
import {SocialIcons} from '@/components/Icons'
import {Button} from '@/components/ui/button'

export default function Landing() {
  return (
    <>
      <section className='mx-auto mt-12 flex max-w-4xl xl:max-w-5xl 2xl:mt-24 2xl:max-w-none'>
        <div className='grid grid-cols-1 px-8 md:grid-cols-2'>
          <figure className='mx-auto flex justify-center'>
            <Image
              src='/other/homepageme.png'
              width={800}
              height={800}
              quality={100}
              priority
              alt='My Photo'
            />
          </figure>
          <div className='mx-auto mt-8 flex flex-col justify-center gap-4 lg:mt-0 2xl:gap-8'>
            <div className='flex items-center gap-2'>
              <span className='size-2 animate-pulse rounded-full bg-emerald-500 ring ring-emerald-500/20'></span>
              <span className='text-gray-500 dark:text-gray-400'>Available for work!</span>
            </div>
            <h2>
              My Name: <span className='font-bold text-yellow-300'>Ethan G.</span>
            </h2>
            <h2>
              I am a:
              <span className='font-bold text-blue-300'>
                <Typewrite />
              </span>
            </h2>
            <div className='flex gap-3 pt-6 text-lg md:text-xl lg:gap-4 lg:text-2xl 2xl:text-3xl'>
              <SocialIcons />
            </div>
            <div className='flex flex-col gap-4 pt-6 sm:flex-row'>
              <Button
                variant='outline'
                size='sm'
                className='dark:bg-slate-800 dark:hover:bg-slate-900'
              >
                <Link href='/about' target='_blank' rel='noopener noreferrer'>
                  Learn More
                </Link>
              </Button>
              <Button variant='outline' size='sm' className='bg-red-400 hover:bg-red-500'>
                <a href='https://www.egxblog.net/' target='_blank' rel='noopener noreferrer'>
                  New Blog!
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
