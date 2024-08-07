import {Banner} from '../../components/banner'
import {Header} from '../../components/header'
import {AboutArticle} from '../../components/about-article'

const aboutIcons = [
  {
    name: 'instagram',
    href: 'https://www.instagram.com/eg___xo',
    label: 'Instagram',
    className: 'hover:text-green-400 dark:hover:text-green-300',
  },
  {
    name: 'spotify',
    href: 'https://open.spotify.com/user/egarrisxn',
    label: 'Spotify',
    className: 'hover:text-green-400 dark:hover:text-green-300',
  },
]

export default function AboutPage() {
  return (
    <main className='min-h-full border-2 border-green-400 pb-16 dark:border-green-300'>
      <Banner title='about' />
      <div className='mx-auto mt-12 flex w-full max-w-5xl flex-col gap-12 px-4 sm:mt-16 sm:px-8 xl:max-w-6xl 2xl:mt-24 2xl:max-w-7xl'>
        <Header
          className='text-green-400 dark:text-green-300'
          title='Who Am I?'
          icons={aboutIcons}
        />
        <AboutArticle />
      </div>
    </main>
  )
}
