import Image from 'next/image'
import Link from 'next/link'
import {Button} from '@/components/ui/button'
import {SocialsList} from '@/components/IconsList'
import TimeOfDay from '@/components/TimeDisplay'
import {AvailableForWork} from './Available'

export function HeroContent() {
  return (
    <div className='mx-auto grid grid-cols-1 gap-4 min-[400px]:mx-8 sm:mx-16 xl:mx-auto'>
      {/* <div className='mx-auto grid grid-cols-1 gap-4 min-[400px]:mx-8 sm:mx-16 xl:mx-auto 2xl:grid-cols-2'> */}
      <div className='flex flex-col gap-4 2xl:gap-8'>
        <section>
          <figure className='max-h-20 max-w-20 lg:max-h-28 lg:max-w-28 2xl:max-h-full 2xl:max-w-full'>
            <Image
              src='/other/hero-image.png'
              width={200}
              height={200}
              priority
              alt='My Photo'
              className='-rotate-12'
            />
          </figure>
        </section>

        <section>
          <header className='flex w-full flex-col gap-2 2xl:gap-4'>
            <div className='group relative overflow-hidden'>
              <div className='transition-transform duration-300 group-hover:-translate-y-32'>
                <h4 className='pointer-events-none bg-gradient-to-br from-zinc-300 via-zinc-500 to-zinc-800 bg-clip-text text-4xl font-bold leading-loose tracking-wide text-transparent min-[320px]:text-5xl min-[430px]:text-6xl min-[560px]:text-7xl lg:text-8xl 2xl:text-[9rem] 2xl:font-black 2xl:tracking-wider'>
                  {/* <h4 className='pointer-events-none bg-gradient-to-br from-zinc-300 via-zinc-500 to-zinc-800 bg-clip-text text-4xl font-bold tracking-wide text-transparent min-[320px]:text-5xl min-[430px]:text-6xl min-[560px]:text-7xl lg:text-8xl'> */}
                  Ethan G.
                </h4>
              </div>
              <div className='absolute left-0 top-0 translate-y-32 transition-transform duration-300 group-hover:translate-y-0'>
                <h4 className='pointer-events-none bg-gradient-to-br from-zinc-800 via-zinc-500 to-zinc-300 bg-clip-text text-4xl font-bold tracking-wide text-transparent min-[320px]:text-5xl min-[430px]:text-6xl min-[560px]:text-7xl lg:text-8xl 2xl:text-[9rem] 2xl:font-black 2xl:tracking-wider'>
                  {/* <h4 className='pointer-events-none bg-gradient-to-br from-zinc-800 via-zinc-500 to-zinc-300 bg-clip-text text-4xl font-bold tracking-wide text-transparent min-[320px]:text-5xl min-[430px]:text-6xl min-[560px]:text-7xl lg:text-8xl'> */}
                  Ethan G.
                </h4>
              </div>
            </div>

            <div className='group relative ml-1 overflow-hidden lg:ml-1.5'>
              <div className='transition-transform duration-300 group-hover:-translate-y-16'>
                <h5 className='flex cursor-default bg-gradient-to-tl from-yellow-500 via-yellow-600 to-yellow-700 bg-clip-text text-xs font-light leading-tight tracking-tight text-transparent delay-75 min-[320px]:text-base min-[430px]:text-xl min-[560px]:text-2xl lg:text-3xl 2xl:text-6xl'>
                  {/* <h5 className='flex cursor-default bg-gradient-to-tl from-yellow-500 via-yellow-600 to-yellow-700 bg-clip-text text-xs font-light leading-tight tracking-tight text-transparent delay-75 min-[320px]:text-base min-[430px]:text-xl min-[560px]:text-2xl lg:text-4xl'> */}
                  Full Stack Developer.
                </h5>
              </div>
              <div className='absolute left-0 top-0 translate-y-16 transition-transform duration-300 group-hover:translate-y-0'>
                <h5 className='flex cursor-default bg-gradient-to-tl from-zinc-300 via-zinc-500 to-zinc-700 bg-clip-text text-xs font-light leading-tight tracking-tight text-transparent delay-75 min-[320px]:text-base min-[430px]:text-xl min-[560px]:text-2xl lg:text-3xl 2xl:text-6xl'>
                  {/* <h5 className='flex cursor-default bg-gradient-to-tl from-zinc-300 via-zinc-500 to-zinc-700 bg-clip-text text-xs font-light leading-tight tracking-tight text-transparent delay-75 min-[320px]:text-base min-[430px]:text-xl min-[560px]:text-2xl lg:text-3xl'> */}
                  Digital Product Designer.
                </h5>
              </div>
            </div>
          </header>
        </section>

        <section className='ml-1'>
          <AvailableForWork />
        </section>

        <section className='ml-1'>
          <p className='ladin max-w-lg leading-snug tracking-tight lg:text-lg lg:leading-tight lg:tracking-tighter 2xl:max-w-5xl 2xl:text-4xl 2xl:leading-snug 2xl:tracking-tight'>
            &quot;Crafting{' '}
            <span className='font-semibold text-black dark:text-yellow-300'>innovative</span> web
            technologies and applications that blend{' '}
            <span className='font-semibold text-black dark:text-yellow-300'>seamless</span>{' '}
            functionality with{' '}
            <span className='font-semibold text-black dark:text-yellow-300'>elegant</span> design.
            That&apos;s what we like to see!&quot;
          </p>
        </section>

        <section className='ml-1 flex gap-2 text-lg lg:text-xl 2xl:text-3xl'>
          <SocialsList />
        </section>

        <section className='pl-1'>
          <TimeOfDay />
        </section>

        <section className='flex flex-col gap-3 lg:pl-1 2xl:gap-5'>
          <Button variant='secondary' size='sm' className='max-w-80 2xl:max-w-96'>
            <Link href='/about'>Learn More</Link>
          </Button>
          <Button
            variant='secondary'
            size='sm'
            className='max-w-80 bg-yellow-400 text-background hover:bg-yellow-500 2xl:max-w-96 dark:bg-yellow-300 dark:hover:bg-yellow-400'
          >
            <Link href='https://www.egxblog.net/' target='_blank' rel='noopener noreferrer'>
              New Blog!
            </Link>
          </Button>
        </section>
      </div>
      {/* <div className='hidden rounded-lg border-2 border-yellow-300 2xl:flex'></div> */}
    </div>
  )
}
