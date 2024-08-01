'use client'

export default function Error({error, reset}) {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <p className='my-4 text-2xl font-semibold'>Something went wrong!</p>
      <button onClick={reset} className='rounded-lg border-2 bg-blue-500 px-8 shadow-lg'>
        Refresh
      </button>
      <pre className='flex max-w-96 flex-wrap'>{error.message}</pre>
    </div>
  )
}
