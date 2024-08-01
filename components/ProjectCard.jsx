import Image from 'next/image'
import Link from 'next/link'
import {Card, CardHeader, CardTitle, CardContent, CardFooter} from '@/components/ui/card'
import {Button} from '@/components/ui/button'

export function ProjectCard({project}) {
  return (
    <Card className='border-blue-400 dark:border-blue-300 dark:shadow-blue-300/20'>
      <CardHeader>
        <Image
          src={project.image}
          alt={project.alt}
          width={600}
          height={400}
          className='rounded-sm shadow sm:rounded-lg dark:shadow-blue-300/20'
        />
      </CardHeader>
      <CardTitle className='text-blue-400 hover:text-blue-500 hover:underline hover:underline-offset-4 dark:text-blue-300 dark:hover:text-blue-400'>
        <Link href={project.websiteLink} target='_blank' rel='noopener noreferrer'>
          {project.title}
        </Link>
      </CardTitle>
      <CardContent>
        <p className='line-clamp-4 lg:line-clamp-3'>{project.description}</p>
      </CardContent>
      <CardFooter>
        <Button variant='secondary' size='xs' className='hover:bg-blue-400 hover:text-background'>
          <Link href={project.websiteLink} target='_blank' rel='noopener noreferrer'>
            Link
          </Link>
        </Button>
        <Button variant='secondary' size='xs' className='hover:text-blue-400'>
          <Link href={project.repositoryLink} target='_blank' rel='noopener noreferrer'>
            Repo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
