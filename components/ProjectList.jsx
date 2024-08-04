import {currentProjects, depricatedProjects} from '@/lib/projectList'
import {ProjectCard} from '@/components/ProjectCard'

export function ProjectList() {
  return (
    <div className='mx-auto flex flex-col gap-10 md:mx-12 lg:mx-16 xl:mx-auto'>
      <section className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
        {currentProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
      <h2 className='text-sm font-black uppercase tracking-widest text-blue-400 md:text-lg lg:text-xl 2xl:text-4xl dark:text-blue-300'>
        Archived Work.
      </h2>
      <section className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
        {depricatedProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </div>
  )
}
