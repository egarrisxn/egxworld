import {Banner} from '@/components/Banner'
import {Header} from '@/components/Header'
import {HeroContent} from '@/components/HeroContent'
import {AboutArticle} from '@/components/AboutArticle'
import {ProjectList} from '@/components/ProjectList'
import {ContactForm} from '@/components/ContactForm'

export default function HomePage() {
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
  const projectsIcons = [
    {
      name: 'github',
      href: 'https://github.com/egarrisxn',
      label: 'Github',
      className: 'hover:text-blue-400 dark:hover:text-blue-300',
    },
    {
      name: 'twitter',
      href: 'https://twitter.com/eg_xo_',
      label: 'Twitter',
      className: 'hover:text-blue-400 dark:hover:text-blue-300',
    },
  ]
  const contactIcons = [
    {
      name: 'discord',
      href: 'https://discord.com/users/eg___xo',
      label: 'Discord',
      className: 'hover:text-red-400 dark:hover:text-red-300',
    },
    {
      name: 'linkedin',
      href: 'https://www.linkedin.com/in/ethan-garrison',
      label: 'LinkedIn',
      className: 'hover:text-red-400 dark:hover:text-red-300',
    },
  ]

  return (
    <main className='grid grid-cols-1 gap-8'>
      {/* //!HOME PAGE!// */}
      <section id='home' className='min-h-screen pt-8 md:pt-16 xl:pt-20'>
        <div className='mx-auto mt-12 flex w-full max-w-5xl px-4 sm:mt-16 sm:px-8 xl:max-w-6xl 2xl:mt-24 2xl:max-w-7xl'>
          <HeroContent />
        </div>
      </section>

      {/* //!ABOUT PAGE!// */}
      <section id='about' className='min-h-screen pt-8 md:pt-16 xl:pt-20'>
        <Banner title='about' />
        <div className='mx-auto mt-12 flex w-full max-w-5xl flex-col gap-12 px-4 sm:mt-16 sm:px-8 xl:max-w-6xl 2xl:mt-24 2xl:max-w-7xl'>
          <Header
            className='text-green-400 dark:text-green-300'
            title='Who Am I?'
            icons={aboutIcons}
          />
          <AboutArticle />
        </div>
      </section>

      {/* //! PROJECTS PAGE !// */}
      <section id='projects' className='min-h-screen pt-8 md:pt-16 xl:pt-20'>
        <Banner title='projects' />
        <div className='mx-auto mt-12 flex w-full max-w-5xl flex-col gap-12 px-4 sm:mt-16 sm:px-8 xl:max-w-6xl 2xl:mt-24 2xl:max-w-7xl'>
          <Header
            className='text-blue-400 dark:text-blue-300'
            title='Ongoing Work!'
            icons={projectsIcons}
          />
          <ProjectList />
        </div>
      </section>

      {/* //! CONTACT PAGE !// */}
      <section id='contact' className='min-h-screen pt-8 md:pt-16 xl:pt-20'>
        <Banner title='contact' />
        <div className='mx-auto mt-12 flex w-full max-w-5xl flex-col gap-12 px-4 sm:mt-16 sm:px-8 xl:max-w-6xl 2xl:mt-24 2xl:max-w-7xl'>
          <Header
            className='text-red-400 dark:text-red-300'
            title="Let's Chat!"
            icons={contactIcons}
          />
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
