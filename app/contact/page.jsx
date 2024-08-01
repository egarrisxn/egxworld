import {Banner} from '@/components/Banner'
import {Header} from '@/components/Header'
import {ContactForm} from '@/components/ContactForm'

const contactIcons = [
  {
    name: 'discord',
    href: 'https://discord.com/users/eg___xo',
    label: 'Discord',
    className: 'hover:text-red-400 dark:hover:text-red-300',
  },
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/ethan-garrison',
    label: 'LinkedIn',
    className: 'hover:text-red-400 dark:hover:text-red-300',
  },
]

export default function ContactPage() {
  return (
    <>
      <section className='min-h-full border-2 border-red-400 pb-16 dark:border-red-300'>
        <Banner title='contact' />
        <div className='mx-auto mt-12 flex w-full max-w-5xl flex-col gap-12 px-4 sm:mt-16 sm:px-8 xl:max-w-6xl 2xl:mt-24 2xl:max-w-7xl'>
          <Header
            className='text-red-400 dark:text-red-300'
            title="Let's Chat!"
            icons={contactIcons}
          />
          <ContactForm />
        </div>
      </section>
    </>
  )
}
