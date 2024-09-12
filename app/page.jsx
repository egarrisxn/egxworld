import Image from 'next/image'
import Link from 'next/link'
import {Button} from '../components/ui/button'
import {Banner} from '../components/Banner'
import {AnimatedName} from '../components/AnimatedName'
import {WorkBadge} from '../components/WorkBadge'
import {SocialsList} from '../components/IconList'
import {SpotifyPlayer} from '../components/SpotifyPlayer'
import {WeeklyTracks} from '../components/WeeklyTracks'
import {TimeOfDay} from '../components/TimeDisplay'

export default function HomePage() {
  return (
    <main className='min-h-full border-2 border-yellow-400 pb-16 dark:border-yellow-300'>
      <Banner title='welcome' />
      <div className='mx-auto mt-12 flex w-full max-w-5xl px-4 sm:mt-16 sm:px-8 xl:max-w-6xl 2xl:mt-24 2xl:max-w-7xl'>
        <div className='mx-auto grid grid-cols-1 lg:mx-16 lg:grid-cols-2 xl:mx-auto'>
          <article className='space-y-2 md:space-y-3 lg:space-y-5'>
            <Image
              src='/other/hero-image.png'
              width={200}
              height={200}
              priority
              alt='A small photo of myself'
              className='max-h-20 max-w-20 -rotate-12 rounded-full border border-foreground shadow-[1px_3px_4px_0px_#01091c] md:max-h-28 md:max-w-28 lg:max-h-36 lg:max-w-36 lg:border-2 2xl:max-h-full 2xl:max-w-full dark:border-slate-500'
            />

            <section className='flex flex-col gap-1 lg:gap-1.5 2xl:gap-3'>
              <AnimatedName />
            </section>

            <section className='ml-0.5 pt-1 lg:ml-1 lg:pt-0'>
              <WorkBadge />
            </section>

            <section className='ml-1 max-w-md py-1.5 md:text-xl lg:max-w-full lg:py-0 lg:text-2xl xl:text-3xl 2xl:py-4 2xl:text-4xl'>
              <h4 className='tracking-tighter shadow-foreground drop-shadow-xl lg:tracking-normal'>
                &quot;Crafting{' '}
                <span className='font-semibold text-black dark:text-yellow-300'>innovative</span>{' '}
                web technologies & applications that blend{' '}
                <span className='font-semibold text-black dark:text-yellow-300'>seamless</span>{' '}
                functionality with{' '}
                <span className='font-semibold text-black dark:text-yellow-300'>elegant</span>{' '}
                design. That&apos;s what I&apos;m here for!&quot;
              </h4>
            </section>

            <section className='ml-1 flex gap-2 py-1.5 text-lg lg:pb-0 lg:pt-0.5 lg:text-2xl 2xl:text-4xl'>
              <SocialsList />
            </section>

            <div className='flex flex-col pt-1.5 lg:pt-0'>
              <section className='order-3 flex flex-col gap-3 pb-4 pt-4 lg:order-1 lg:gap-4 2xl:gap-5'>
                <Button
                  asChild
                  variant='main'
                  size='sm'
                  aria-label='Learn more about me'
                  className='max-w-72 hover:text-yellow-500 md:max-w-xs lg:max-w-sm dark:hover:text-yellow-300'
                >
                  <Link href='/about'>Learn More</Link>
                </Button>
                <Button
                  asChild
                  variant='main'
                  size='sm'
                  arial-label='Link to my new blog'
                  className='max-w-72 bg-yellow-500 text-background hover:bg-yellow-400 hover:text-black md:max-w-xs lg:max-w-sm dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:hover:text-white'
                >
                  <a href='https://www.egxblog.net/' target='_blank' rel='noopener noreferrer'>
                    New Blog!
                  </a>
                </Button>
              </section>

              <section className='order-1 ml-1 flex flex-row lg:hidden'>
                <SpotifyPlayer />
              </section>

              <section className='order-2 ml-1 lg:pt-4 2xl:pt-6'>
                <WeeklyTracks />
              </section>

              <section className='order-4 ml-1 pt-2 lg:hidden'>
                <TimeOfDay />
              </section>
            </div>
          </article>

          <aside className='hidden lg:flex lg:flex-col lg:items-end lg:justify-between'>
            <SpotifyPlayer />
            <TimeOfDay />
          </aside>
        </div>
      </div>
    </main>
  )
}
