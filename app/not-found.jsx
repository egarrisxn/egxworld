import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <p className='text-2xl font-semibold'>Page not found!</p>
      <Link href='/'>
        <button className='rounded-lg border-2 bg-blue-500 px-8 shadow-lg'>Home</button>
      </Link>
    </div>
  )
}
