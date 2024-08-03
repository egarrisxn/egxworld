import {TechList} from '@/components/IconsList'
import GitHubCalendar from 'react-github-calendar'

export function AboutArticle() {
  return (
    <div className='mx-auto flex flex-col justify-center min-[400px]:mx-8 sm:mx-16 xl:mx-auto'>
      <article className='flex flex-col py-4 md:pb-8 lg:border-b lg:border-green-400 lg:pb-16 dark:lg:border-green-300'>
        <h2 className='mb-4 text-2xl font-extrabold leading-7 shadow-foreground drop-shadow-xl lg:text-3xl lg:leading-9 xl:text-4xl 2xl:text-6xl dark:shadow-none dark:drop-shadow-none'>
          Hello, World! I&apos;m{' '}
          <span className='font-black text-green-400 dark:text-green-300'>Ethan</span>, a passionate
          Full Stack Developer & Digital Product Designer based in Orlando, Florida, USA.
        </h2>
        <div className='mt-4 grid grid-cols-1 gap-4 text-sm sm:text-base xl:gap-6 xl:text-xl 2xl:text-3xl'>
          <p className='font-semibold shadow-foreground drop-shadow-xl dark:font-normal dark:shadow-none dark:drop-shadow-none'>
            After a fulfilling career run in the worlds of hospitality, management, marketing, and
            sales, I decided to embarked on a NEW and exciting journey into the world of tech! My
            foundation was built through a rigorous Full Stack Coding Boot Camp at the University of
            Central Florida, and I continually expand my skills through self-teaching and
            coursework, including Harvard&apos;s CS50x. I thrive on leveraging JavaScript libraries
            and frameworks to bring creative visions to life, ensuring each project is both
            technically robust and visually captivating.
          </p>
          <p className='font-semibold shadow-foreground drop-shadow-xl dark:font-normal dark:shadow-none dark:drop-shadow-none'>
            Beyond coding, I draw inspiration from exploring new music, enjoying quality time with
            family and friends, and adventuring in the great outdoors. These interests shape my
            approach, enhancing my ability to create solutions that truly resonate.
          </p>
          <p className='font-semibold shadow-foreground drop-shadow-xl dark:font-normal dark:shadow-none dark:drop-shadow-none'>
            Let&apos;s collaborate and work together to transform your ideas into impactful digital
            experiences.
          </p>
          <p className='font-black shadow-foreground drop-shadow-xl dark:shadow-none dark:drop-shadow-none'>
            Together, I bet we could build something pretty extraordinary! -EG
          </p>
        </div>
      </article>

      <div className='mx-auto flex flex-col py-4 text-center lg:border-b lg:border-green-400 lg:py-8 dark:lg:border-green-300'>
        <h3 className='mb-8 mt-4 text-xl font-semibold xl:text-3xl' l>
          <span className='font-bold text-green-400 dark:text-green-300'>Technologies</span> &{' '}
          <span className='font-bold text-green-400 dark:text-green-300'>tools</span>{' '}
          <br className='sm:hidden' />
          in my arsenal:
        </h3>
        <div className='mx-auto mb-4 flex flex-wrap justify-center gap-4 text-xl sm:gap-8 lg:text-3xl'>
          <TechList />
        </div>
      </div>

      <div className='mx-auto hidden flex-col text-center lg:flex lg:flex-col lg:pt-8'>
        <h3 className='mb-8 mt-4 text-xl font-semibold xl:text-3xl'>
          <span className='font-bold text-green-400 dark:text-green-300'>Contributions</span> &{' '}
          <span className='font-bold text-green-400 dark:text-green-300'>time</span> spent on
          Github:
        </h3>
        <div className='mx-auto flex justify-center text-xl lg:text-3xl'>
          <GitHubCalendar username='EGARRISXN' />
        </div>
      </div>
    </div>
  )
}
