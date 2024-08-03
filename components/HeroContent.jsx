import Image from 'next/image'
import Link from 'next/link'
import {Button} from './ui/button'
import {SocialsList} from './IconsList'
import {TimeOfDay} from './TimeDisplay'
import {AvailableButton} from './AvailableButton'
import {SpotifyTextPlayer} from './SpotifyTextPlayer'

export function HeroContent() {
  return (
    <div className='mx-auto grid grid-cols-1 gap-4 min-[400px]:mx-8 sm:mx-16 lg:mx-auto lg:grid-cols-2 lg:gap-0'>
      <div className='flex flex-col gap-4 2xl:gap-8'>
        <Image
          src='/other/hero-image.png'
          width={200}
          height={200}
          priority
          alt='My Photo'
          className='max-h-20 max-w-20 -rotate-12 rounded-full border border-foreground shadow-[2px_4px_6px_0px_#01091c] lg:max-h-32 lg:max-w-32 lg:border-2 2xl:max-h-full 2xl:max-w-full dark:border-slate-500'
        />

        <section className='flex flex-col gap-2 2xl:gap-3'>
          <header className='group relative overflow-hidden'>
            <div className='transition-transform duration-300 group-hover:-translate-y-32'>
              <h4 className='pointer-events-none bg-gradient-to-br from-zinc-300 via-zinc-500 to-zinc-800 bg-clip-text text-4xl font-bold leading-loose tracking-wide text-transparent shadow-foreground drop-shadow-md min-[320px]:text-5xl min-[430px]:text-6xl min-[560px]:text-7xl xl:text-8xl 2xl:text-[7rem]'>
                Ethan G.
              </h4>
            </div>
            <div className='absolute left-0 top-0 translate-y-32 transition-transform duration-300 group-hover:translate-y-0'>
              <h4 className='pointer-events-none bg-gradient-to-br from-zinc-800 via-zinc-500 to-zinc-300 bg-clip-text text-4xl font-bold tracking-wide text-transparent shadow-foreground drop-shadow-md min-[320px]:text-5xl min-[430px]:text-6xl min-[560px]:text-7xl xl:text-8xl 2xl:text-[7rem]'>
                Ethan G.
              </h4>
            </div>
          </header>
          <div className='group relative overflow-hidden lg:ml-1.5'>
            <div className='transition-transform duration-300 group-hover:-translate-y-16'>
              <h5 className='flex cursor-default bg-gradient-to-tl from-yellow-500 via-yellow-600 to-yellow-700 bg-clip-text text-xs font-light leading-tight tracking-tight text-transparent shadow-foreground drop-shadow-lg delay-75 min-[320px]:text-base min-[430px]:text-xl min-[560px]:text-2xl lg:text-3xl 2xl:text-4xl'>
                Full Stack Developer.
              </h5>
            </div>
            <div className='absolute left-0 top-0 translate-y-16 transition-transform duration-300 group-hover:translate-y-0'>
              <h5 className='flex cursor-default bg-gradient-to-tl from-zinc-300 via-zinc-500 to-zinc-700 bg-clip-text text-xs font-light leading-tight tracking-tight text-transparent shadow-foreground drop-shadow-lg delay-75 min-[320px]:text-base min-[430px]:text-xl min-[560px]:text-2xl lg:text-3xl 2xl:text-4xl'>
                Digital Product Designer.
              </h5>
            </div>
          </div>
        </section>

        <section className='mt-0.5 w-fit'>
          <a
            href='https://www.linkedin.com/in/ethan-garrison/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AvailableButton />
          </a>
        </section>

        <section className='mt-1'>
          <p className='max-w-lg leading-snug tracking-tight shadow-yellow-500 drop-shadow-2xl lg:text-xl lg:font-semibold 2xl:max-w-5xl 2xl:text-4xl'>
            &quot;Crafting{' '}
            <span className='font-semibold text-black lg:font-black dark:text-yellow-300'>
              innovative
            </span>{' '}
            web technologies and applications that blend{' '}
            <span className='font-semibold text-black lg:font-black dark:text-yellow-300'>
              seamless
            </span>{' '}
            functionality with{' '}
            <span className='font-semibold text-black lg:font-black dark:text-yellow-300'>
              elegant
            </span>{' '}
            design. That&apos;s what we like to see!&quot;
          </p>
        </section>

        <section className='flex gap-2 text-lg lg:text-2xl lg:font-black 2xl:text-3xl'>
          <SocialsList />
        </section>

        <section className='mt-1 flex flex-col gap-4 2xl:gap-5'>
          <Button
            variant='secondary'
            size='sm'
            className='max-w-64 border border-foreground font-medium shadow-[2px_4px_6px_0px_#01091c] hover:bg-foreground/10 sm:max-w-80 lg:border-2 dark:border-0'
          >
            <Link href='/about'>Learn More</Link>
          </Button>
          <Button
            variant='secondary'
            size='sm'
            className='max-w-64 border border-foreground bg-yellow-500 font-medium text-background shadow-[2px_4px_6px_0px_#01091c] hover:bg-yellow-600 sm:max-w-80 lg:border-2 dark:border-0 dark:bg-yellow-300 dark:hover:bg-yellow-400'
          >
            <a href='https://www.egxblog.net/' target='_blank' rel='noopener noreferrer'>
              New Blog!
            </a>
          </Button>
        </section>

        <section className='flex lg:hidden'>
          <SpotifyTextPlayer />
        </section>

        <section className='flex lg:hidden'>
          <TimeOfDay />
        </section>
      </div>

      <div className='hidden lg:flex lg:flex-col lg:items-end lg:justify-between'>
        <SpotifyTextPlayer />
        <TimeOfDay />
      </div>
    </div>
  )
}
