import {TechList} from '@/components/IconsList'
import GitHubCalendar from 'react-github-calendar'

export function AboutArticle() {
  return (
    <div className='mx-auto flex flex-col justify-center lg:mx-12 xl:mx-auto'>
      <article className='flex flex-col border-b border-green-400 py-4 pb-16 dark:border-green-300'>
        <h2 className='mb-4 text-2xl font-extrabold leading-7 shadow-foreground drop-shadow-2xl md:text-3xl lg:mx-2 lg:text-4xl lg:leading-9 lg:tracking-wide xl:text-5xl 2xl:text-6xl'>
          Hello, World! I&apos;m{' '}
          <span className='font-black text-green-400 dark:text-green-300'>Ethan</span>, a passionate
          Full Stack Developer & Digital Product Designer based in Orlando, Florida, USA.
        </h2>
        <div className='mt-4 grid grid-cols-1 gap-4 text-sm sm:text-base lg:mx-2 xl:gap-6 xl:text-xl 2xl:text-3xl dark:shadow-none dark:drop-shadow-none'>
          <p className='font-semibold shadow-foreground drop-shadow-2xl dark:font-normal'>
            After a fulfilling career run in the worlds of hospitality, management, marketing, and
            sales, I decided to embarked on a NEW and exciting journey into the world of tech! My
            foundation was built through a rigorous Full Stack Coding Boot Camp at the University of
            Central Florida, and I continually expand my skills through self-teaching and
            coursework, including Harvard&apos;s CS50x. I thrive on leveraging JavaScript libraries
            and frameworks to bring creative visions to life, ensuring each project is both
            technically robust and visually captivating.
          </p>
          <p className='font-semibold shadow-foreground drop-shadow-2xl dark:font-normal'>
            Beyond coding, I draw inspiration from exploring new music, enjoying quality time with
            family and friends, and adventuring in the great outdoors. These interests shape my
            approach, enhancing my ability to create solutions that truly resonate.
          </p>
          <p className='font-semibold shadow-foreground drop-shadow-2xl dark:font-normal'>
            Let&apos;s collaborate and work together to transform your ideas into impactful digital
            experiences.
          </p>
          <p className='font-black shadow-foreground drop-shadow-2xl dark:font-extrabold'>
            Together, I bet we could build something pretty extraordinary! -EG
          </p>
        </div>
      </article>

      <div className='pt-8 text-center text-xl shadow-foreground drop-shadow-2xl lg:border-b lg:border-green-400 lg:py-8 lg:text-3xl dark:lg:border-green-300'>
        <h3 className='mb-8 mt-4 font-semibold'>
          <span className='font-bold text-green-400 dark:text-green-300'>Technologies</span> &{' '}
          <span className='font-bold text-green-400 dark:text-green-300'>tools</span>{' '}
          <br className='sm:hidden' />
          in my arsenal:
        </h3>
        <div className='flex flex-wrap justify-center gap-4 lg:mx-8 lg:mb-4 lg:gap-8'>
          <TechList />
        </div>
      </div>

      <div className='hidden text-xl lg:mx-auto lg:flex lg:flex-col lg:pt-8 lg:text-center lg:text-3xl lg:shadow-foreground lg:drop-shadow-2xl'>
        <h3 className='mb-8 mt-4 font-semibold xl:text-3xl'>
          <span className='font-bold text-green-400 dark:text-green-300'>Contributions</span> &{' '}
          <span className='font-bold text-green-400 dark:text-green-300'>time</span> spent on
          Github:
        </h3>
        <div className='justify-center'>
          <GitHubCalendar username='EGARRISXN' />
        </div>
      </div>
    </div>
  )
}
