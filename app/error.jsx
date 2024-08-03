'use client'

export default function Error({error, reset}) {
  return (
    <div className='mx-auto flex min-h-screen flex-col items-center justify-center text-center'>
      <p className='my-4 text-2xl font-semibold'>Something went wrong!</p>
      <button onClick={reset} className='rounded-lg border-2 bg-blue-500 px-8 shadow-lg'>
        Refresh
      </button>
      <pre className='line-clamp-1 flex w-full max-w-40 flex-row flex-wrap text-base'>
        {error.message}
      </pre>
    </div>
  )
}
