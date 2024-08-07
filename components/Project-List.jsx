import {currentProjects, depricatedProjects} from '@/lib/data/projects'
import {ProjectCard} from './project-card'

export function ProjectList() {
  return (
    <div className='mx-auto flex flex-col gap-8 pt-4 shadow-foreground drop-shadow-2xl md:mx-12 lg:mx-16 xl:mx-auto'>
      <section className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
        {currentProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
      <p className='text-sm font-extrabold uppercase tracking-tight text-blue-400 md:px-2 md:text-lg lg:text-2xl 2xl:text-4xl dark:text-blue-300'>
        Depricated Work.
      </p>
      <section className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
        {depricatedProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </div>
  )
}
