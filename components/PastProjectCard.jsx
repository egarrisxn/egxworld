import Image from 'next/image'

export function PastProjectCard({project}) {
  return (
    <>
      <a href={project.repositoryLink} target='_blank' rel='noopener noreferrer'>
        <p className='mb-0.5 line-clamp-1 text-center text-sm font-medium leading-tight tracking-tight md:text-base xl:text-lg 2xl:text-xl'>
          {project.title}
        </p>
        <div className='relative rounded-lg border border-foreground bg-card shadow-[2px_4px_6px_0px_#01091c] dark:border-border dark:shadow-sm'>
          <Image
            src={project.image}
            alt={project.alt}
            width={760}
            height={430}
            className='rounded-lg border-2 transition-all duration-300 ease-in-out'
          />
          <div className='absolute inset-0 rounded-lg bg-black opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-20'></div>
        </div>
      </a>
    </>
  )
}
