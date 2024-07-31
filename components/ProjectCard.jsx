import Image from 'next/image'
import Link from 'next/link'
import {Card, CardHeader, CardTitle, CardContent, CardFooter} from '@/components/ui/card'
import {Button} from '@/components/ui/button'

export function ProjectCard({project}) {
  return (
    <Card className='border-blue-400 shadow-xl dark:shadow-blue-300/20'>
      <CardHeader>
        <Image
          src={project.image}
          alt={project.alt}
          width={600}
          height={400}
          className='rounded border-2'
        />
      </CardHeader>
      <CardTitle className='text-blue-400 hover:text-yellow-400 hover:underline hover:underline-offset-4'>
        <Link href={project.websiteLink} target='_blank' rel='noopener noreferrer'>
          {project.title}
        </Link>
      </CardTitle>
      <CardContent>
        <p className='line-clamp-4'>{project.description}</p>
      </CardContent>
      <CardFooter>
        <Button variant='outline' size='sm'>
          <Link href={project.websiteLink} target='_blank' rel='noopener noreferrer'>
            Link
          </Link>
        </Button>
        <Button variant='outline' size='sm'>
          <Link href={project.repositoryLink} target='_blank' rel='noopener noreferrer'>
            Repo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
