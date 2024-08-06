import Link from 'next/link'
import {buttonVariants} from '@/components/ui/button'
// import {Button} from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <p className='my-4 text-2xl font-semibold'>Page not found!</p>
      <Link href='/' className={buttonVariants({variant: 'outline'})}>
        Home
      </Link>
      {/* <Button asChild className='rounded-lg border-2 bg-blue-500 px-8 shadow-lg'>
        <Link href='/'>Home</Link>
      </Button> */}
    </div>
  )
}
