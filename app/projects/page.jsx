import {Banner} from '@/components/Banner'
import ProjectList from '@/components/ProjectList'

export default function ProjectsPage() {
  return (
    <main>
      <Banner className='dark:bg-blue-400' src='/banners/PROJECTS.svg' alt='Projects' />
      <ProjectList />
    </main>
  )
}
