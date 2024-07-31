import Image from 'next/image'
import Link from 'next/link'
import {Button} from '@/components/ui/button'
import {SocialsList} from '@/components/IconsList'

export function Hero() {
  return (
    <div className='mx-auto flex flex-col justify-center min-[400px]:mx-8 sm:mx-16 xl:mx-auto'>
      <section className='flex flex-col gap-4 md:flex-row 2xl:gap-5'>
        <figure className='max-h-24 max-w-24 md:flex md:items-center lg:max-h-full lg:max-w-full'>
          <Image src='/other/hero-image.png' width={200} height={200} priority alt='My Photo' />
        </figure>
        <header className='flex w-full flex-col gap-1 2xl:gap-3'>
          <div className='group relative overflow-hidden'>
            <div className='transition-transform duration-300 group-hover:-translate-y-32'>
              <h4 className='pointer-events-none bg-gradient-to-br from-zinc-300 to-zinc-700 bg-clip-text text-4xl font-bold tracking-wider text-transparent min-[320px]:text-5xl min-[430px]:text-6xl min-[560px]:text-7xl lg:text-[7rem] 2xl:text-[9rem]'>
                Ethan G.
              </h4>
            </div>
            <div className='absolute left-0 top-0 translate-y-32 transition-transform duration-300 group-hover:translate-y-0'>
              <h4 className='pointer-events-none bg-gradient-to-br from-zinc-600 to-zinc-950 bg-clip-text text-4xl font-bold tracking-wider text-transparent min-[320px]:text-5xl min-[430px]:text-6xl min-[560px]:text-7xl lg:text-[7rem] 2xl:text-[9rem]'>
                Ethan G.
              </h4>
            </div>
          </div>
          <div className='group relative ml-0.5 overflow-hidden lg:ml-1'>
            <div className='transition-transform duration-300 group-hover:-translate-y-16'>
              <h5 className='flex cursor-default bg-gradient-to-tl from-black to-zinc-300 bg-clip-text text-xs font-light leading-tight tracking-tight text-transparent delay-75 min-[320px]:text-base min-[430px]:text-xl min-[560px]:text-2xl lg:text-4xl 2xl:text-5xl'>
                Full Stack Developer.
              </h5>
            </div>
            <div className='absolute left-0 top-0 translate-y-16 transition-transform duration-300 group-hover:translate-y-0'>
              <h5 className='flex cursor-default bg-gradient-to-tl from-black to-zinc-300 bg-clip-text text-xs font-light leading-tight tracking-tight text-transparent delay-75 min-[320px]:text-base min-[430px]:text-xl min-[560px]:text-2xl lg:text-4xl 2xl:text-5xl'>
                Digital Product Designer.
              </h5>
            </div>
          </div>
        </header>
      </section>

      <section className='my-4 2xl:my-7'>
        <p className='text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-4xl 2xl:leading-normal'>
          &quot;Crafting innovative web technologies and applications that blend seamless
          functionality with elegant design is kind of my thing.&quot;
        </p>
      </section>

      <section className='grid grid-cols-1 2xl:gap-2'>
        <div className='order-1 my-4 flex flex-row justify-center gap-4 text-2xl min-[440px]:justify-start md:text-3xl lg:order-2 lg:text-4xl 2xl:pl-1 2xl:text-5xl'>
          <SocialsList />
        </div>
        <div className='order-2 mt-4 flex flex-col gap-4 min-[440px]:flex-row lg:order-1 lg:mb-4 2xl:gap-6'>
          <Button
            variant='outline'
            size='sm'
            className='2xl:px-6 2xl:py-4 2xl:text-3xl dark:bg-slate-800 dark:hover:bg-slate-900'
          >
            <Link href='/#about'>Learn More</Link>
          </Button>
          <Button
            variant='outline'
            size='sm'
            className='bg-red-400 hover:bg-red-500 2xl:px-6 2xl:py-4 2xl:text-3xl'
          >
            <Link href='https://www.egxblog.net/' target='_blank' rel='noopener noreferrer'>
              New Blog!
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
