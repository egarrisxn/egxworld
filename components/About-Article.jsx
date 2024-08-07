import {TechList} from './icon-list'
import {GitHubDisplay} from './github-display'

export function AboutArticle() {
  return (
    <article className='mx-auto grid grid-cols-1 justify-center gap-4 pt-4 font-medium shadow-foreground drop-shadow-2xl md:mx-12 lg:mx-16 xl:mx-auto'>
      <h2 className='text-2xl font-extrabold leading-7 md:text-3xl lg:text-4xl lg:leading-10 lg:tracking-wide xl:text-5xl 2xl:text-6xl'>
        Hello, World! I&apos;m <span className='text-green-400 dark:text-green-300'>Ethan</span>, a
        passionate Full Stack Developer & Digital Product Designer based in Orlando, Florida, USA.
      </h2>
      <section className='mt-4 flex flex-col gap-6 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl'>
        <p>
          After a fulfilling career run in the worlds of hospitality, management, marketing, and
          sales, I decided to embarked on a NEW and exciting journey into the world of tech! My
          foundation was built through a rigorous Full Stack Coding Boot Camp at the University of
          Central Florida, and I continually expand my skills through self-teaching and coursework,
          including Harvard&apos;s CS50x. I thrive on leveraging JavaScript libraries and frameworks
          to bring creative visions to life, ensuring each project is both technically robust and
          visually captivating.
        </p>
        <p>
          Beyond coding, I draw inspiration from exploring new music, enjoying quality time with
          family and friends, and adventuring in the great outdoors. These interests shape my
          approach, enhancing my ability to create solutions that truly resonate.
        </p>
        <p>
          Let&apos;s collaborate and work together to transform your ideas into impactful digital
          experiences.
        </p>
        <p className='font-extrabold'>
          Together, I bet we could build something pretty extraordinary! -EG
        </p>
        <div className='mt-4 flex flex-col gap-5 border-t border-green-500 pt-2 sm:flex-row sm:gap-3 sm:pt-4 md:gap-4 lg:pt-8 xl:mb-12 dark:border-green-300'>
          <p className='h-fit sm:w-1/4 sm:border-r sm:border-green-500 sm:pr-1 xl:pr-2'>
            <span className='font-bold text-green-500 dark:text-green-300'>Technologies</span> &{' '}
            <span className='font-bold text-green-500 dark:text-green-300'>tools</span> I know:
          </p>
          <div className='flex max-w-80 flex-wrap items-center gap-1.5 sm:w-3/4 md:max-w-none lg:gap-3 lg:text-lg xl:gap-4 xl:text-2xl 2xl:pr-20'>
            <TechList />
          </div>
        </div>
        <div className='mt-4 flex flex-col gap-5 border-t border-green-500 pt-2 sm:flex-row sm:gap-3 sm:pt-4 md:gap-4 lg:pt-8 2xl:mb-12 dark:border-green-300'>
          <p className='h-fit sm:w-1/4 sm:border-r sm:border-green-500 sm:pr-1 xl:pr-2'>
            <span className='font-bold text-green-500 dark:text-green-300'>Contributions</span> &{' '}
            <span className='font-bold text-green-500 dark:text-green-300'>time</span> on GitHub:
          </p>
          <div className='sm:w-3/4'>
            <GitHubDisplay />
          </div>
        </div>
      </section>
    </article>
  )
}
