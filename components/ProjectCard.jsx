import Image from 'next/image'
import {Card, CardHeader, CardTitle, CardContent, CardFooter} from '@/components/ui/card'
import {Button} from '@/components/ui/button'

export function ProjectCard({project}) {
  return (
    <Card>
      <CardHeader>
        <Image
          src={project.image}
          alt={project.alt}
          width={600}
          height={400}
          className='rounded-t-lg p-0.5 lg:rounded-t-xl'
        />
      </CardHeader>
      <CardTitle className='text-blue-500 hover:text-blue-400 hover:underline hover:underline-offset-4 dark:text-blue-400 dark:hover:text-blue-500'>
        <a href={project.websiteLink} target='_blank' rel='noopener noreferrer'>
          {project.title}
        </a>
      </CardTitle>
      <CardContent>
        <p className='line-clamp-4 lg:line-clamp-3'>{project.description}</p>
      </CardContent>
      <CardFooter>
        <Button
          variant='secondary'
          size='xs'
          className='border border-foreground px-7 py-1 shadow-[2px_4px_6px_0px_#01091c] hover:text-blue-400 md:px-10 lg:border-2 dark:border-0'
        >
          <a href={project.websiteLink} target='_blank' rel='noopener noreferrer'>
            Link
          </a>
        </Button>
        <Button
          variant='secondary'
          size='xs'
          className='border border-foreground px-7 py-1 shadow-[2px_4px_6px_0px_#01091c] hover:text-blue-400 md:px-10 lg:border-2 dark:border-0'
        >
          <a href={project.repositoryLink} target='_blank' rel='noopener noreferrer'>
            Repo
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
