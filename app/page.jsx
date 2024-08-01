import {Banner} from '@/components/Banner'
import {HeroContent} from '@/components/HeroContent'

export default function HomePage() {
  return (
    <>
      <section className='min-h-full border-2 border-yellow-400 pb-16 dark:border-yellow-300'>
        <Banner title='welcome' />
        <div className='mx-auto mt-12 flex w-full max-w-5xl px-4 sm:mt-16 sm:px-8 xl:max-w-6xl 2xl:mt-24 2xl:max-w-7xl'>
          <HeroContent />
        </div>
      </section>
    </>
  )
}
