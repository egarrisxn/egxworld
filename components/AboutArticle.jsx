import GitHubCalendar from 'react-github-calendar'
import {TechIcons} from '@/components/Icons'

export default function AboutArticle() {
  return (
    <div className='mx-auto flex max-w-5xl flex-col gap-12 px-4 sm:px-8 xl:max-w-6xl 2xl:mt-24 2xl:max-w-7xl'>
      <section className='mt-12 flex flex-col gap-12 border-b border-green-400 pb-16 sm:mt-16'>
        <h1 className='text-center text-green-400 sm:mb-2'>Who Am I?</h1>
        <article>
          <h2>
            Hello, World! I&apos;m <span className='font-black text-green-400'>Ethan</span>, a
            passionate Full Stack Developer & Digital Product Designer based in Orlando, Florida,
            USA.
          </h2>
          <h3>
            Crafting innovative web technologies and applications that blend seamless functionality
            with elegant design is my specialty.
          </h3>
          <p>
            After a fulfilling career run in the worlds of hospitality, management, marketing, and
            sales, I decided to embarked on a NEW and exciting journey into the world of tech! My
            foundation was built through a rigorous Full Stack Coding Boot Camp at the University of
            Central Florida, and I continually expand my skills through self-teaching and
            coursework, including Harvard&apos;s CS50x. I thrive on leveraging JavaScript libraries
            and frameworks to bring creative visions to life, ensuring each project is both
            technically robust and visually captivating.
          </p>
          <p>
            Beyond coding, I draw inspiration from exploring new music, enjoying quality time with
            family and friends, and adventuring in the great outdoors. These interests shape my
            approach, enhancing my ability to create solutions that truly resonate.
          </p>
          <p>
            Let&apos;s collaborate and work together to transform your ideas into impactful digital
            experiences.
            <span className='font-black lg:hidden'>
              Together, I bet we could build something pretty extraordinary! -EG
            </span>
          </p>
          <p className='hidden font-black lg:block'>
            Together, I bet we could build something pretty extraordinary! -EG
          </p>
        </article>
      </section>
      <section className='flex flex-col border-b border-green-400 pb-16'>
        <div className='mb-8 text-center'>
          <h3>
            <span className='font-bold text-green-300'>Technologies</span> &{' '}
            <span className='font-bold text-green-300'>tools</span> <br className='sm:hidden' />
            in my arsenal:
          </h3>
        </div>
        <div className='mx-auto flex max-w-5xl flex-wrap justify-center gap-8 text-xl lg:text-3xl'>
          <TechIcons />
        </div>
      </section>
      <section className='mx-auto hidden max-w-5xl flex-col lg:flex'>
        <div className='mb-8 text-center'>
          <h3>
            <span className='font-bold text-green-300'>Contributions</span> &{' '}
            <span className='font-bold text-green-300'>time</span> spent on Github:
          </h3>
        </div>
        <div className='flex justify-center'>
          <GitHubCalendar username='EGARRISXN' />
        </div>
      </section>
      <section className='lg:hidden'>
        <p className='px-2 text-center text-xs'>
          If you are on a mobile device or a tablet, there is nothing to see here..
        </p>
      </section>
    </div>
  )
}
