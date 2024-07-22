export default function FUNCOMPONENT() {
  return (
    <main>
      <div className='flex flex-col items-center justify-center gap-4'>
        <div className='group relative overflow-hidden'>
          <div className='transition-transform duration-300 group-hover:-translate-y-32'>
            <h1 className='pointer-events-none bg-gradient-to-br from-zinc-300 to-zinc-700 bg-clip-text text-center font-serif text-5xl uppercase tracking-wider text-transparent lg:text-[7rem] lg:leading-[8rem]'>
              Ethan G.
            </h1>
          </div>
          <div className='absolute left-0 top-0 translate-y-32 transition-transform duration-300 group-hover:translate-y-0'>
            <h1 className='pointer-events-none bg-gradient-to-br from-zinc-600 to-zinc-950 bg-clip-text text-center font-serif text-[2.99rem] uppercase leading-[3.74rem] tracking-wider text-transparent lg:text-[6.99rem] lg:leading-[7.99rem]'>
              Ethan G.
            </h1>
          </div>
        </div>
        <div className='group relative flex w-full items-center justify-center overflow-hidden'>
          <div className='transition-transform duration-300 group-hover:-translate-y-16'>
            <p className='flex cursor-default bg-gradient-to-tl from-black to-zinc-300 bg-clip-text text-xl font-light lowercase tracking-tight text-transparent delay-75 lg:text-3xl'>
              Full Stack Developer.
            </p>
          </div>
          <div className='absolute inset-x-0 top-0 mx-auto w-max translate-y-16 transition-transform duration-300 group-hover:translate-y-0'>
            <p className='flex cursor-default bg-gradient-to-tl from-black to-zinc-300 bg-clip-text text-xl font-light lowercase tracking-tight text-transparent delay-75 lg:text-3xl'>
              Digital Product Designer.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
