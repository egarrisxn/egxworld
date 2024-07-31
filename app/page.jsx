import {Banner} from '@/components/Banner'
import {Hero} from '@/components/Hero'
import {Header} from '@/components/Header'
import {TechList} from '@/components/IconsList'
import {ProjectCard} from '@/components/ProjectCard'
import {ContactForm} from '@/components/ContactForm'
import GitHubCalendar from 'react-github-calendar'
import {currentProjects, depricatedProjects} from '@/lib/projectList'

export default function HomePage() {
  const aboutIcons = [
    {
      name: 'instagram',
      href: 'https://www.instagram.com/eg___xo',
      label: 'Instagram',
      className: 'hover:text-green-400',
    },
    {
      name: 'spotify',
      href: 'https://open.spotify.com/user/egarrisxn',
      label: 'Spotify',
      className: 'hover:text-green-400',
    },
  ]
  const projectsIcons = [
    {
      name: 'github',
      href: 'https://github.com/egarrisxn',
      label: 'Github',
      className: 'hover:text-blue-400',
    },
    {
      name: 'twitter',
      href: 'https://twitter.com/eg_xo_',
      label: 'Twitter',
      className: 'hover:text-blue-400',
    },
  ]
  const contactIcons = [
    {
      name: 'discord',
      href: 'https://discord.com/users/eg___xo',
      label: 'Discord',
      className: 'hover:text-red-400',
    },
    {
      name: 'linkedin',
      href: 'https://www.linkedin.com/in/ethan-garrison',
      label: 'LinkedIn',
      className: 'hover:text-red-400',
    },
  ]

  return (
    <main className='grid grid-cols-1 gap-8'>
      {/* //!HOME PAGE!// */}
      <section id='welcome' className='min-h-screen'>
        <Banner title='welcome' />
        <div className='mx-auto mt-12 flex w-full max-w-5xl px-4 sm:mt-16 sm:px-8 xl:max-w-6xl 2xl:mt-24 2xl:max-w-7xl'>
          <div className='mx-auto flex flex-col justify-center min-[400px]:mx-8 sm:mx-16 lg:mx-auto'>
            <Hero />
          </div>
        </div>
      </section>
      {/* //!ABOUT PAGE!// */}
      <section id='about' className='min-h-screen pt-8 md:pt-16 xl:pt-20'>
        <Banner title='about' />
        <div className='mx-auto mt-12 flex w-full max-w-5xl flex-col gap-12 px-4 sm:mt-16 sm:px-8 xl:max-w-6xl 2xl:mt-24 2xl:max-w-7xl'>
          <Header className='text-green-400' title='Who Am I?' icons={aboutIcons} />
          <article className='flex flex-col pb-2 lg:border-b lg:border-green-400 lg:pb-16'>
            <h2 className='mb-4 text-2xl font-extrabold leading-7 lg:text-3xl lg:leading-9 xl:text-4xl 2xl:text-6xl'>
              Hello, World! I&apos;m <span className='font-black text-green-400'>Ethan</span>, a
              passionate Full Stack Developer & Digital Product Designer based in Orlando, Florida,
              USA.
            </h2>
            <div className='mt-4 grid grid-cols-1 gap-4 text-sm sm:text-base xl:gap-6 xl:text-xl 2xl:text-3xl'>
              <p>
                After a fulfilling career run in the worlds of hospitality, management, marketing,
                and sales, I decided to embarked on a NEW and exciting journey into the world of
                tech! My foundation was built through a rigorous Full Stack Coding Boot Camp at the
                University of Central Florida, and I continually expand my skills through
                self-teaching and coursework, including Harvard&apos;s CS50x. I thrive on leveraging
                JavaScript libraries and frameworks to bring creative visions to life, ensuring each
                project is both technically robust and visually captivating.
              </p>
              <p>
                Beyond coding, I draw inspiration from exploring new music, enjoying quality time
                with family and friends, and adventuring in the great outdoors. These interests
                shape my approach, enhancing my ability to create solutions that truly resonate.
              </p>
              <p>
                Let&apos;s collaborate and work together to transform your ideas into impactful
                digital experiences.
              </p>
              <p className='font-black'>
                Together, I bet we could build something pretty extraordinary! -EG
              </p>
            </div>
          </article>
          <div className='flex flex-col p-4 md:pb-8 lg:border-b lg:border-green-400 lg:px-0 lg:pb-16 lg:pt-0'>
            <h3 className='mb-6 mt-2 text-center text-xl font-semibold sm:mb-8 sm:mt-4 xl:text-3xl 2xl:text-5xl'>
              <span className='font-bold text-green-400'>Technologies</span> &{' '}
              <span className='font-bold text-green-400'>tools</span> <br className='sm:hidden' />
              in my arsenal:
            </h3>
            <div className='mx-auto flex max-w-5xl flex-wrap justify-center gap-4 text-xl sm:gap-8 lg:text-3xl'>
              <TechList />
            </div>
          </div>
          <div className='mx-auto hidden max-w-5xl flex-col justify-center lg:flex'>
            <h3 className='mb-6 mt-2 text-center text-xl font-semibold sm:mb-8 sm:mt-4 xl:text-3xl 2xl:text-5xl'>
              <span className='font-bold text-green-400'>Contributions</span> &{' '}
              <span className='font-bold text-green-400'>time</span> spent on Github:
            </h3>
            <GitHubCalendar username='EGARRISXN' />
          </div>
        </div>
      </section>
      {/* //! PROJECTS PAGE !// */}
      <section id='projects' className='min-h-screen pt-8 md:pt-16 xl:pt-20'>
        <Banner title='projects' />
        <div className='mx-auto mt-12 flex w-full max-w-5xl flex-col gap-12 px-4 sm:mt-16 sm:px-8 xl:max-w-6xl 2xl:mt-24 2xl:max-w-7xl'>
          <Header className='text-blue-400' title='Ongoing Work!' icons={projectsIcons} />
          <div className='mx-auto grid grid-cols-1 gap-8 md:grid-cols-2'>
            {currentProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          <h2 className='text-sm font-black uppercase tracking-widest text-blue-400 md:text-lg lg:text-xl 2xl:text-4xl'>
            Archived Work.
          </h2>
          <div className='mx-auto grid grid-cols-1 gap-8 md:grid-cols-2'>
            {depricatedProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
      {/* //! CONTACT PAGE !// */}
      <section id='contact' className='min-h-screen pt-8 md:pt-16 xl:pt-20'>
        <Banner title='contact' />
        <div className='mx-auto mt-12 flex w-full max-w-5xl flex-col gap-12 px-4 sm:mt-16 sm:px-8 xl:max-w-6xl 2xl:mt-24 2xl:max-w-7xl'>
          <Header className='text-red-400' title="Let's Chat!" icons={contactIcons} />
          <ContactForm />
        </div>
      </section>
    </main>
  )
}

// import {Banner} from '@/components/Banner'
// import {Hero} from '@/components/Hero'

// export default function HomePage() {
//   return (
//     <>
//       <Banner title='welcome' />

//       <div className='mx-auto mt-12 flex w-full max-w-5xl px-4 sm:mt-16 sm:px-8 xl:max-w-6xl 2xl:mt-24 2xl:max-w-7xl'>
//         <div className='mx-auto flex flex-col justify-center min-[400px]:mx-8 sm:mx-16 lg:mx-auto'>
//           <Hero />
//         </div>
//       </div>
//     </>
//   )
// }
