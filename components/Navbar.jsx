import Link from 'next/link'
import {NavItem} from './navbar-item'
import {ThemeSwap} from './theme-swap'

export function Navbar() {
  return (
    <div className='sticky top-0 z-50'>
      <nav className='flex flex-row items-center justify-between bg-background text-xs shadow-[1px_2px_8px_0px] shadow-foreground/10 sm:text-sm md:text-base lg:text-lg 2xl:text-3xl'>
        <section className='bg-foreground p-1.5 text-background md:p-4 xl:p-6'>
          <NavItem href='/' label='home'>
            EG
          </NavItem>
        </section>
        <section className='flex-grow bg-background p-1 md:p-4 xl:p-6'>
          <div className='flex sm:gap-4 md:gap-8 lg:gap-12 2xl:gap-16'>
            <NavItem href='/about' label='about'>
              ABOUT
            </NavItem>
            <NavItem href='/projects' label='projects'>
              PROJECTS
            </NavItem>
            <NavItem href='/contact' label='contact'>
              CONTACT
            </NavItem>
            <Link
              href='https://egxblog.net'
              className='hidden items-center justify-center hover:text-yellow-400 min-[380px]:flex min-[380px]:p-2'
              target='_blank'
              rel='noopener noreferrer'
            >
              BLOG
              <span className='sr-only'>blog</span>
            </Link>
          </div>
        </section>
        <section className='bg-background p-0.5 md:p-4 xl:p-6'>
          <ThemeSwap />
          <span className='sr-only'>theme</span>
        </section>
      </nav>
    </div>
  )
}
