import {Banner} from '@/components/Banner'
import Landing from '@/components/Landing'

export default function HomePage() {
  return (
    <main>
      <Banner className='dark:bg-yellow-400' src='/banners/WELCOME.svg' alt='Welcome' />
      <Landing />
    </main>
  )
}
