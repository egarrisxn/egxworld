import Image from 'next/image'
import Link from 'next/link'
import {Button} from '../components/ui/button'
import {Popover, PopoverContent, PopoverTrigger} from '../components/ui/popover'
import {Banner} from '../components/Banner'
import {SocialsList} from '../components/IconList'
import {SpotifyPlayer} from '../components/SpotifyPlayer'
import {TrackList} from '../components/SpotifyTrackList'
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
              alt='My Photo'
              className='max-h-20 max-w-20 -rotate-12 rounded-full border border-foreground shadow-[1px_3px_4px_0px_#01091c] md:max-h-28 md:max-w-28 lg:max-h-36 lg:max-w-36 lg:border-2 2xl:max-h-full 2xl:max-w-full dark:border-slate-500'
            />

            <section className='flex flex-col gap-1 lg:gap-1.5 2xl:gap-3'>
              <div className='group relative overflow-hidden'>
                <div className='transition-transform duration-300 group-hover:-translate-y-32'>
                  <h2 className='pointer-events-none bg-gradient-to-br from-zinc-300 via-zinc-500 to-zinc-800 bg-clip-text text-4xl font-bold leading-loose text-transparent shadow-foreground drop-shadow-md min-[320px]:text-6xl min-[460px]:text-7xl md:text-[5rem] lg:text-8xl xl:text-[6.5rem] 2xl:text-[8rem]'>
                    Ethan G.
                  </h2>
                </div>
                <div className='absolute left-0 top-0 translate-y-32 transition-transform duration-300 group-hover:translate-y-0'>
                  <h2 className='pointer-events-none bg-gradient-to-br from-zinc-800 via-zinc-500 to-zinc-300 bg-clip-text text-4xl font-bold text-transparent shadow-foreground drop-shadow-md min-[320px]:text-6xl min-[460px]:text-7xl md:text-[5rem] lg:text-8xl xl:text-[6.5rem] 2xl:text-[8rem]'>
                    Ethan G.
                  </h2>
                </div>
              </div>
              <div className='group relative ml-1.5 overflow-hidden'>
                <div className='transition-transform duration-300 group-hover:-translate-y-16'>
                  <h4 className='flex cursor-default bg-gradient-to-tl from-yellow-500 via-yellow-600 to-yellow-700 bg-clip-text text-xs font-light leading-tight tracking-tight text-transparent shadow-foreground drop-shadow-md delay-75 min-[320px]:text-lg min-[385px]:text-xl min-[460px]:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>
                    Full Stack Developer.
                  </h4>
                </div>
                <div className='absolute left-0 top-0 translate-y-16 shadow-foreground drop-shadow-md transition-transform duration-300 group-hover:translate-y-0'>
                  <h3 className='flex cursor-default bg-gradient-to-tl from-zinc-300 via-zinc-500 to-zinc-700 bg-clip-text text-xs font-light leading-tight tracking-tight text-transparent delay-75 min-[320px]:text-lg min-[385px]:text-xl min-[460px]:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>
                    Digital Product Designer.
                  </h3>
                </div>
              </div>
            </section>

            <section className='ml-0.5 pt-1 lg:ml-1 lg:pt-0'>
              <div className='ml-0.5 py-1 lg:ml-1'>
                <a
                  href='https://www.linkedin.com/in/ethan-garrison/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='group flex h-8 items-center justify-center gap-3 rounded-full border border-foreground bg-gradient-to-r from-[#5ebe8d] via-[#66c527] to-[#09860b] p-2 shadow-[2px_4px_6px_0px_#01091c] lg:border-2 2xl:h-12 2xl:px-3 dark:border-0'>
                    <div className='flex size-5 rounded-full bg-green-700 2xl:size-6'>
                      <div className='m-auto size-3 animate-ping rounded-full bg-green-600 2xl:size-4'></div>
                    </div>
                    <span className='text-xs font-extrabold leading-snug tracking-tight text-green-900 transition-colors duration-150 ease-in-out group-hover:text-black 2xl:text-base'>
                      Available for work!
                    </span>
                  </button>
                </a>
              </div>
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

              <section className='order-1 ml-1 flex flex-row lg:hidden'>
                <SpotifyPlayer />
              </section>
              <section className='order-2 ml-1 lg:pt-4 2xl:pt-6'>
                <Popover>
                  <PopoverTrigger>
                    <p className='group text-sm tracking-tight md:text-base lg:text-lg xl:text-xl 2xl:text-3xl'>
                      <span className='transition-all duration-150 ease-in-out group-hover:font-semibold group-hover:text-green-400'>
                        My top tracks this week.
                      </span>
                      <span className='text-green-400 transition-all duration-150 ease-in-out group-hover:text-foreground'>
                        {' '}
                        &#8599;
                      </span>
                    </p>
                  </PopoverTrigger>
                  <PopoverContent>
                    <TrackList />
                  </PopoverContent>
                </Popover>
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
