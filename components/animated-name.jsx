export function HeroName() {
  return (
    <header className='flex flex-col gap-1 lg:gap-1.5 2xl:gap-3'>
      <section className='group relative overflow-hidden'>
        <div className='transition-transform duration-300 group-hover:-translate-y-32'>
          <h2 className='pointer-events-none bg-gradient-to-br from-zinc-300 via-zinc-500 to-zinc-800 bg-clip-text text-4xl font-bold leading-loose text-transparent shadow-foreground drop-shadow-md min-[320px]:text-6xl min-[460px]:text-7xl md:text-[5rem] lg:text-8xl xl:text-[6.5rem] 2xl:text-[7rem]'>
            Ethan G.
          </h2>
        </div>
        <div className='absolute left-0 top-0 translate-y-32 transition-transform duration-300 group-hover:translate-y-0'>
          <h2 className='pointer-events-none bg-gradient-to-br from-zinc-800 via-zinc-500 to-zinc-300 bg-clip-text text-4xl font-bold text-transparent shadow-foreground drop-shadow-md min-[320px]:text-6xl min-[460px]:text-7xl md:text-[5rem] lg:text-8xl xl:text-[6.5rem] 2xl:text-[7rem]'>
            Ethan G.
          </h2>
        </div>
      </section>
      <section className='group relative ml-1.5 overflow-hidden'>
        <div className='transition-transform duration-300 group-hover:-translate-y-16'>
          <h4 className='flex cursor-default bg-gradient-to-tl from-yellow-500 via-yellow-600 to-yellow-700 bg-clip-text text-xs font-light leading-tight tracking-tight text-transparent shadow-foreground drop-shadow-md delay-75 min-[320px]:text-lg min-[385px]:text-xl min-[460px]:text-2xl lg:text-3xl 2xl:text-4xl'>
            Full Stack Developer.
          </h4>
        </div>
        <div className='absolute left-0 top-0 translate-y-16 shadow-foreground drop-shadow-md transition-transform duration-300 group-hover:translate-y-0'>
          <h3 className='flex cursor-default bg-gradient-to-tl from-zinc-300 via-zinc-500 to-zinc-700 bg-clip-text text-xs font-light leading-tight tracking-tight text-transparent delay-75 min-[320px]:text-lg min-[385px]:text-xl min-[460px]:text-2xl lg:text-3xl 2xl:text-4xl'>
            Digital Product Designer.
          </h3>
        </div>
      </section>
    </header>
  )
}
