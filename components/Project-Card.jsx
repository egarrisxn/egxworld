import Image from 'next/image'
import {Card, CardHeader, CardTitle, CardContent, CardFooter} from '@/components/ui/card'
import {Button} from '@/components/ui/button'

export function ProjectCard({project}) {
  return (
    <Card className='flex flex-col rounded-lg border border-foreground bg-card text-center shadow-[2px_4px_6px_0px_#01091c] dark:border-border dark:shadow-sm'>
      <CardHeader className='mx-auto flex'>
        <Image
          src={project.image}
          alt={project.alt}
          width={760}
          height={430}
          className='rounded-t-lg'
        />
      </CardHeader>
      <CardTitle className='text-lg text-blue-500 transition-all duration-150 ease-in-out hover:text-blue-400 hover:underline hover:underline-offset-4 md:text-xl xl:text-2xl 2xl:text-3xl dark:text-blue-400 dark:hover:text-blue-600'>
        <a href={project.websiteLink} target='_blank' rel='noopener noreferrer'>
          {project.title}
        </a>
      </CardTitle>

      <CardContent className='flex flex-grow'>
        <p className='my-1 line-clamp-4 text-sm leading-tight tracking-tighter text-muted-foreground md:text-base lg:leading-snug xl:mt-3 xl:text-lg 2xl:text-2xl 2xl:leading-normal 2xl:tracking-normal'>
          {project.description}
        </p>
      </CardContent>

      <CardFooter className='flex flex-row items-center justify-center gap-6 pb-4 2xl:gap-8 2xl:pb-6'>
        <Button variant='secondary' size='sm' className='hover:border-blue-400 hover:text-blue-400'>
          <a href={project.websiteLink} target='_blank' rel='noopener noreferrer'>
            Link
          </a>
        </Button>
        <Button variant='secondary' size='sm' className='hover:border-blue-400 hover:text-blue-400'>
          <a href={project.repositoryLink} target='_blank' rel='noopener noreferrer'>
            Repo
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
