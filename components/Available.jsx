export function AvailableForWork() {
  return (
    <button className='flex h-8 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#5ebe8d] via-[#66c527] to-[#09860b] p-2 2xl:h-12 2xl:px-3'>
      <div className='flex size-5 rounded-full bg-green-700 2xl:size-6'>
        <div className='m-auto size-3 animate-ping rounded-full bg-green-600 2xl:size-4'></div>
      </div>
      <span className='text-xs font-extrabold leading-snug tracking-tight text-green-900 2xl:text-base'>
        Available for work!
      </span>
    </button>
  )
}
