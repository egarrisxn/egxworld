import Link from 'next/link'
import {Button} from '../components/ui/button'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <p className='my-4 text-2xl font-semibold'>Page not found!</p>
      <Button asChild className='rounded-lg border-2 bg-blue-500 px-8 shadow-lg'>
        <Link href='/'>Home</Link>
      </Button>
    </div>
  )
}
