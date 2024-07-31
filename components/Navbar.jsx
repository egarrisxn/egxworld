import Link from 'next/link'
import {NavItem} from './NavLinks'
import {ThemeSwap} from './ThemeSwap'

export function Navbar() {
  return (
    <div className='sticky top-0 z-50 bg-background'>
      <nav className='flex flex-row items-center justify-between text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl'>
        <section className='bg-foreground p-1.5 text-background md:p-4 xl:p-6'>
          <NavItem href='/#' label='eg'>
            eg
          </NavItem>
        </section>
        <section className='flex-grow p-1.5 md:p-4 xl:p-6'>
          <div className='flex sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20'>
            <NavItem href='/#about' label='about'>
              about
            </NavItem>
            <NavItem href='/#projects' label='projects'>
              projects
            </NavItem>
            <NavItem href='/#contact' label='contact'>
              contact
            </NavItem>
            <Link
              href='https://egxblog.net'
              className='hidden items-center justify-center p-2 hover:text-yellow-400 min-[350px]:flex'
              target='_blank'
              rel='noopener noreferrer'
            >
              blog
              <span className='sr-only'>blog</span>
            </Link>
          </div>
        </section>
        <section className='p-1 md:p-4 xl:p-6'>
          <ThemeSwap />
          <span className='sr-only'>theme</span>
        </section>
      </nav>
    </div>
  )
}
