import {Banner} from '@/components/Banner'
import {TooltipProvider} from '@/components/ui/tooltip'
import {Icon} from '@/components/Icons'
import {AboutMe} from '@/components/AboutMe'

export default function AboutPage() {
  return (
    <>
      <Banner type='about' />
      <div className='mx-auto mt-12 flex w-full max-w-5xl flex-col gap-12 px-4 sm:mt-16 sm:px-8 xl:max-w-6xl 2xl:mt-24 2xl:max-w-7xl'>
        <header className='flex flex-row items-center justify-between text-sm md:px-2 md:text-lg lg:text-xl 2xl:text-4xl'>
          <h1 className='font-black uppercase tracking-widest text-green-400'>Who Am I?</h1>
          <div className='flex gap-[0.2rem] md:gap-3 lg:gap-4'>
            <TooltipProvider>
              <Icon
                href='https://twitter.com/eg_xo_'
                label='Twitter'
                className='hover:text-blue-400'
              >
                <path
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M22 4.01c-1 .49-1.98.689-3 .99c-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4c0 0-4.182 7.433 4 11c-1.872 1.247-3.739 2.088-6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58-1.04 6.522-3.723 7.651-7.742a13.8 13.8 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z'
                />
              </Icon>

              <Icon
                href='https://www.instagram.com/eg___xo'
                label='Instagram'
                className='hover:text-red-400'
              >
                <g
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                >
                  <path d='M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z' />
                  <path d='M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m7.5-4.5v.01' />
                </g>
              </Icon>

              <Icon
                href='https://open.spotify.com/user/egarrisxn'
                label='Spotify'
                className='hover:text-green-400'
              >
                <g
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                >
                  <path d='M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0' />
                  <path d='M8 11.973c2.5-1.473 5.5-.973 7.5.527M9 15c1.5-1 4-1 5 .5M7 9c2-1 6-2 10 .5' />
                </g>
              </Icon>
            </TooltipProvider>
          </div>
        </header>
        <AboutMe />
      </div>
    </>
  )
}
