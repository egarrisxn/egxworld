import {Banner} from '@/components/Banner'
import AboutArticle from '@/components/AboutArticle'

export default function AboutPage() {
  return (
    <main>
      <Banner className='dark:bg-green-400' src='/banners/ABOUT.svg' alt='About' />
      <AboutArticle />
    </main>
  )
}
