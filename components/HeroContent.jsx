import Image from 'next/image'
import Link from 'next/link'
import {Button} from './ui/button'
import {SocialsList} from './IconsList'
import {TimeOfDay} from './TimeDisplay'
import {AvailableButton} from './AvailableButton'
import {SpotifyPlayer} from './SpotifyPlayer'
import {SpotifyPopover} from './SpotifyPopover'

export function HeroContent() {
  return (
    <div className='mx-auto grid grid-cols-1 lg:mx-16 lg:grid-cols-2 xl:mx-auto'>
      <div className='space-y-2 lg:space-y-6 2xl:space-y-8'>
        <Image
          src='/other/hero-image.png'
          width={200}
          height={200}
          priority
          alt='My Photo'
          className='max-h-20 max-w-20 -rotate-12 rounded-full border border-foreground shadow-[2px_4px_6px_0px_#01091c] lg:max-h-32 lg:max-w-32 lg:border-2 2xl:max-h-full 2xl:max-w-full dark:border-slate-500'
        />

        <section className='flex flex-col gap-1 lg:gap-1.5 2xl:gap-3'>
          <header className='group relative overflow-hidden'>
            <div className='transition-transform duration-300 group-hover:-translate-y-32'>
              <h2 className='pointer-events-none bg-gradient-to-br from-zinc-300 via-zinc-500 to-zinc-800 bg-clip-text text-4xl font-bold leading-loose text-transparent shadow-foreground drop-shadow-md min-[320px]:text-5xl min-[430px]:text-6xl min-[560px]:text-7xl xl:text-8xl 2xl:text-[7rem]'>
                Ethan G.
              </h2>
            </div>
            <div className='absolute left-0 top-0 translate-y-32 transition-transform duration-300 group-hover:translate-y-0'>
              <h2 className='pointer-events-none bg-gradient-to-br from-zinc-800 via-zinc-500 to-zinc-300 bg-clip-text text-4xl font-bold text-transparent shadow-foreground drop-shadow-md min-[320px]:text-5xl min-[430px]:text-6xl min-[560px]:text-7xl xl:text-8xl 2xl:text-[7rem]'>
                Ethan G.
              </h2>
            </div>
          </header>
          <div className='group relative ml-1.5 overflow-hidden'>
            <div className='transition-transform duration-300 group-hover:-translate-y-16'>
              <h4 className='flex cursor-default bg-gradient-to-tl from-yellow-500 via-yellow-600 to-yellow-700 bg-clip-text text-xs font-light leading-tight tracking-tight text-transparent delay-75 min-[320px]:text-base min-[430px]:text-xl min-[560px]:text-2xl lg:text-3xl 2xl:text-4xl'>
                Full Stack Developer.
              </h4>
            </div>
            <div className='absolute left-0 top-0 translate-y-16 transition-transform duration-300 group-hover:translate-y-0'>
              <h3 className='flex cursor-default bg-gradient-to-tl from-zinc-300 via-zinc-500 to-zinc-700 bg-clip-text text-xs font-light leading-tight tracking-tight text-transparent delay-75 min-[320px]:text-base min-[430px]:text-xl min-[560px]:text-2xl lg:text-3xl 2xl:text-4xl'>
                Digital Product Designer.
              </h3>
            </div>
          </div>
        </section>

        <section className='ml-0.5 py-1 lg:ml-1'>
          <a
            href='https://www.linkedin.com/in/ethan-garrison/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AvailableButton />
          </a>
        </section>

        <section className='ml-1 max-w-md pb-1 pt-3 lg:max-w-full lg:pb-0 lg:pt-1 lg:text-xl 2xl:text-4xl'>
          <h4 className='font-semibold tracking-tighter shadow-slate-500 drop-shadow-2xl lg:tracking-normal dark:font-normal'>
            &quot;Crafting{' '}
            <span className='font-black text-black dark:font-semibold dark:text-yellow-300'>
              innovative
            </span>{' '}
            web technologies & applications that blend{' '}
            <span className='font-black text-black dark:font-semibold dark:text-yellow-300'>
              seamless
            </span>{' '}
            functionality with{' '}
            <span className='font-black text-black dark:font-semibold dark:text-yellow-300'>
              elegant
            </span>{' '}
            design. That&apos;s what I&apos;m here for!&quot;
          </h4>
        </section>

        <section className='ml-1 flex gap-2 pb-3 pt-1 text-lg lg:pb-1 lg:pt-0 lg:text-2xl lg:font-black 2xl:text-3xl'>
          <SocialsList />
        </section>

        <section className='ml-1 pb-2 lg:hidden'>
          <div className='flex flex-row'>
            <SpotifyPlayer />
          </div>
          <div className='ml-0.5'>
            <SpotifyPopover />
          </div>
        </section>

        <section className='flex flex-col gap-3 py-1 lg:gap-4 2xl:gap-5'>
          <Button variant='secondary' size='sm' className='max-w-72 md:max-w-xs lg:max-w-sm'>
            <Link href='/about'>Learn More</Link>
          </Button>
          <Button
            variant='secondary'
            size='sm'
            className='max-w-72 bg-yellow-500 text-background hover:bg-yellow-400 hover:text-black md:max-w-xs lg:max-w-sm dark:bg-yellow-300 dark:hover:bg-yellow-400'
          >
            <a href='https://www.egxblog.net/' target='_blank' rel='noopener noreferrer'>
              New Blog!
            </a>
          </Button>
        </section>

        <section className='ml-1 hidden lg:flex lg:pt-1'>
          <SpotifyPopover />
        </section>

        <section className='ml-1 flex gap-1 pt-2 lg:hidden'>
          <TimeOfDay />
        </section>
      </div>

      <div className='hidden lg:flex lg:flex-col lg:items-end lg:justify-between'>
        <SpotifyPlayer />
        <TimeOfDay />
      </div>
    </div>
  )
}
