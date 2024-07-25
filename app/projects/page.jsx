import {Banner} from '@/components/Banner'
import {TooltipProvider} from '@/components/ui/tooltip'
import {Icon} from '@/components/Icons'
import ProjectCard from '@/components/ProjectCard'
import {currentProjects, depricatedProjects} from '@/lib/projectList'

export default function ProjectsPage() {
  return (
    <>
      <Banner type='projects' />
      <div className='mx-auto mt-12 flex w-full max-w-5xl flex-col gap-12 px-4 sm:mt-16 sm:px-8 xl:max-w-6xl 2xl:mt-24 2xl:max-w-7xl'>
        <header className='flex flex-row items-center justify-between text-sm md:px-2 md:text-lg lg:text-xl 2xl:text-4xl'>
          <h1 className='font-black uppercase tracking-widest text-blue-400'>Ongoing Work.</h1>
          <div className='flex gap-[0.2rem] md:gap-3 lg:gap-4'>
            <TooltipProvider>
              <Icon
                href='https://github.com/egarrisxn'
                label='GitHub'
                className='hover:text-green-400'
              >
                <path
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21'
                />
              </Icon>
              <Icon
                href='https://www.linkedin.com/in/ethan-garrison'
                label='LinkedIn'
                className='hover:text-red-400'
              >
                <g
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                >
                  <path d='M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm4 5v5m0-8v.01M12 16v-5' />
                  <path d='M16 16v-3a2 2 0 0 0-4 0' />
                </g>
              </Icon>
            </TooltipProvider>
          </div>
        </header>
        <section className='mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2'>
          {currentProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </section>
        <h2 className='text-sm font-black uppercase tracking-widest md:text-lg lg:text-xl 2xl:text-4xl'>
          Archived Work.
        </h2>
        <section className='mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2'>
          {depricatedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </section>
      </div>
    </>
  )
}
