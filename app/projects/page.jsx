import {Banner} from '../../components/Banner'
import {Header} from '../../components/Header'
import {ProjectList} from '../../components/ProjectList'

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

export default function ProjectsPage() {
  return (
    <main className='min-h-full border-2 border-blue-400 pb-16 dark:border-blue-300'>
      <Banner title='projects' />
      <div className='mx-auto mt-12 flex w-full max-w-5xl flex-col gap-12 px-4 sm:mt-16 sm:px-8 xl:max-w-6xl 2xl:mt-24 2xl:max-w-7xl'>
        <Header
          className='text-blue-400 dark:text-blue-300'
          title='Ongoing Work.'
          icons={projectsIcons}
        />
        <ProjectList />
      </div>
    </main>
  )
}
