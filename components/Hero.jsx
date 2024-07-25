import Image from 'next/image'
import Link from 'next/link'
import {TooltipProvider} from '@/components/ui/tooltip'
import {Icon} from '@/components/Icons'
import {Button} from '@/components/ui/button'

export function Hero() {
  return (
    <div className='mx-auto flex flex-col justify-center'>
      <section className='flex flex-row gap-4'>
        <aside className='lg:mt-2 2xl:mt-3.5 2xl:hidden'>
          <Image src='/other/homepageme.png' width={100} height={100} priority alt='My Photo' />
        </aside>
        <aside className='hidden 2xl:block'>
          <Image src='/other/homepageme.png' width={200} height={200} priority alt='My Photo' />
        </aside>
        <article className='flex w-full flex-col gap-1 2xl:gap-3'>
          <div className='group relative overflow-hidden'>
            <div className='transition-transform duration-300 group-hover:-translate-y-32'>
              <h4 className='pointer-events-none bg-gradient-to-br from-zinc-300 to-zinc-700 bg-clip-text text-4xl font-bold tracking-wider text-transparent sm:text-5xl lg:text-[7rem] 2xl:text-[9rem]'>
                Ethan G.
              </h4>
            </div>
            <div className='absolute left-0 top-0 translate-y-32 transition-transform duration-300 group-hover:translate-y-0'>
              <h4 className='pointer-events-none bg-gradient-to-br from-zinc-600 to-zinc-950 bg-clip-text text-4xl font-bold tracking-wider text-transparent sm:text-5xl lg:text-[7rem] 2xl:text-[9rem]'>
                Ethan G.
              </h4>
            </div>
          </div>
          <div className='group relative ml-0.5 overflow-hidden lg:ml-1'>
            <div className='transition-transform duration-300 group-hover:-translate-y-16'>
              <h5 className='flex cursor-default bg-gradient-to-tl from-black to-zinc-300 bg-clip-text text-xs font-light leading-tight tracking-normal text-transparent delay-75 sm:text-xl lg:text-4xl 2xl:text-5xl'>
                Full Stack Developer.
              </h5>
            </div>
            <div className='absolute left-0 top-0 translate-y-16 transition-transform duration-300 group-hover:translate-y-0'>
              <h5 className='flex cursor-default bg-gradient-to-tl from-black to-zinc-300 bg-clip-text text-xs font-light leading-tight tracking-tighter text-transparent delay-75 sm:text-xl lg:text-4xl 2xl:text-5xl'>
                Digital Product Designer.
              </h5>
            </div>
          </div>
        </article>
      </section>
      <section className='my-4 lg:ml-[7rem] 2xl:my-5 2xl:ml-[12rem]'>
        <p className='text-sm xl:text-lg 2xl:text-3xl'>
          &quot;Crafting innovative web technologies and applications that blend seamless
          functionality with elegant design is kind of my thing.&quot;
        </p>
      </section>
      <section className='my-4 flex flex-col gap-4 sm:flex-row lg:ml-[7rem] 2xl:ml-[12rem] 2xl:gap-6'>
        <Button
          variant='outline'
          size='sm'
          className='2xl:text-3xl dark:bg-slate-800 dark:hover:bg-slate-900'
        >
          <Link href='/about' target='_blank' rel='noopener noreferrer'>
            Learn More
          </Link>
        </Button>
        <Button variant='outline' size='sm' className='bg-red-400 hover:bg-red-500 2xl:text-3xl'>
          <Link href='https://www.egxblog.net/' target='_blank' rel='noopener noreferrer'>
            New Blog!
          </Link>
        </Button>
      </section>
      <section className='my-4 flex flex-row justify-center gap-4 text-2xl sm:justify-start md:text-3xl lg:ml-[7rem] lg:text-4xl 2xl:ml-[12rem]'>
        <TooltipProvider>
          <Icon href='https://github.com/egarrisxn' label='GitHub' className='hover:text-green-400'>
            <path
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21'
            />
          </Icon>
          <Icon
            href='https://www.linkedin.com/in/ethan-garrison'
            label='LinkedIn'
            className='hover:text-red-400'
          >
            <g
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
            >
              <path d='M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm4 5v5m0-8v.01M12 16v-5' />
              <path d='M16 16v-3a2 2 0 0 0-4 0' />
            </g>
          </Icon>
          <Icon href='https://twitter.com/eg_xo_' label='Twitter' className='hover:text-blue-400'>
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
        </TooltipProvider>
      </section>
    </div>
  )
}
