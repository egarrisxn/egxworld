import Image from 'next/image'
import Link from 'next/link'
import {Button} from './ui/button'
import {HeroName} from './animated-name'
import {AvailableBadge} from './available-badge'
import SpotifyPlayer from './spotify-player'
import {SpotifyPopover} from './spotify-popover'
import {SocialsList} from './icon-list'
import {TimeOfDay} from './time-display'

export function Hero() {
  return (
    <div className='mx-auto grid grid-cols-1 lg:mx-16 lg:grid-cols-2 xl:mx-auto'>
      <div className='space-y-2 lg:space-y-6'>
        <Image
          src='/other/hero-image.png'
          width={200}
          height={200}
          priority
          alt='My Photo'
          className='max-h-20 max-w-20 -rotate-12 rounded-full border border-foreground shadow-[2px_4px_6px_0px_#01091c] lg:max-h-32 lg:max-w-32 lg:border-2 2xl:max-h-full 2xl:max-w-full dark:border-slate-500'
        />

        <HeroName />

        <section className='ml-0.5 pt-1 lg:ml-1 lg:pt-0'>
          <AvailableBadge />
        </section>

        <section className='ml-1 max-w-md py-1.5 md:text-xl lg:max-w-full lg:py-0 lg:text-2xl xl:text-3xl 2xl:py-4 2xl:text-4xl'>
          <h4 className='tracking-tighter shadow-foreground drop-shadow-xl lg:tracking-normal'>
            &quot;Crafting{' '}
            <span className='font-semibold text-black dark:text-yellow-300'>innovative</span> web
            technologies & applications that blend{' '}
            <span className='font-semibold text-black dark:text-yellow-300'>seamless</span>{' '}
            functionality with{' '}
            <span className='font-semibold text-black dark:text-yellow-300'>elegant</span> design.
            That&apos;s what I&apos;m here for!&quot;
          </h4>
        </section>

        <section className='ml-1 flex gap-2 py-1.5 text-lg lg:py-0.5 lg:text-2xl 2xl:py-4 2xl:text-4xl'>
          <SocialsList />
        </section>

        <section className='ml-1 py-1.5 lg:hidden lg:py-0.5'>
          <div className='flex flex-row'>
            <SpotifyPlayer />
          </div>
          <div className='ml-0.5'>
            <SpotifyPopover />
          </div>
        </section>

        <section className='flex flex-col gap-3 py-1.5 lg:gap-4 2xl:gap-5'>
          <Button
            asChild
            variant='secondary'
            size='sm'
            className='max-w-72 hover:text-yellow-500 md:max-w-xs lg:max-w-sm dark:hover:text-yellow-300'
          >
            <Link href='/about'>Learn More</Link>
          </Button>
          <Button
            variant='secondary'
            size='sm'
            className='max-w-72 bg-yellow-500 text-background hover:bg-yellow-400 hover:text-black md:max-w-xs lg:max-w-sm dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:hover:text-white'
          >
            <a href='https://www.egxblog.net/' target='_blank' rel='noopener noreferrer'>
              New Blog!
            </a>
          </Button>
        </section>

        <section className='ml-1 hidden pt-1.5 lg:flex 2xl:pt-4'>
          <SpotifyPopover />
        </section>

        <section className='ml-1 flex gap-1 pt-1.5 lg:hidden'>
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
