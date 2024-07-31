import {SocialsList} from './IconsList'

export function Footer() {
  return (
    <footer className='mt-16 border-t border-foreground'>
      <div className='flex items-center justify-between p-3 sm:p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-7'>
        <p className='text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-3xl'>EG|2024</p>
        <section className='flex gap-2 text-sm sm:text-base lg:text-lg xl:gap-4 xl:text-xl 2xl:text-3xl'>
          <SocialsList />
        </section>
      </div>
    </footer>
  )
}
