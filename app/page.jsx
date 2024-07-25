import {Banner} from '@/components/Banner'
import {Hero} from '@/components/Hero'

export default function HomePage() {
  return (
    <>
      <Banner type='welcome' />
      <div className='mx-auto mt-12 flex w-full max-w-5xl px-4 sm:mt-16 sm:px-8 xl:max-w-6xl 2xl:mt-24 2xl:max-w-7xl'>
        <Hero />
      </div>
    </>
  )
}
