import Link from 'next/link'
import {NavItem} from './NavbarItem'
import {ThemeSwap} from './ThemeSwap'
import {MobileDropdown} from './MobileDropdown'

export function Navbar() {
  return (
    <div className='sticky top-0 z-50'>
      <nav className='flex flex-row items-center justify-between bg-background shadow-[1px_2px_8px_0px] shadow-foreground/10 lg:text-lg 2xl:text-3xl'>
        <section className='bg-background p-2 sm:hidden'>
          <MobileDropdown />
        </section>
        <section className='hidden bg-foreground font-bold text-background sm:inline-block sm:p-4 md:p-6 xl:p-8'>
          <NavItem href='/' label='home'>
            EG
          </NavItem>
        </section>
        <section className='hidden bg-background sm:flex sm:flex-grow sm:gap-8 sm:p-4 md:p-6 lg:gap-8 xl:p-8 2xl:gap-16'>
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
            className='hover:text-yellow-400'
            target='_blank'
            rel='noopener noreferrer'
          >
            BLOG
            <span className='sr-only'>Blog Link</span>
          </Link>
        </section>
        <section className='bg-background p-2 md:p-4 xl:py-6'>
          <ThemeSwap />
          <span className='sr-only'>Theme Selector</span>
        </section>
      </nav>
    </div>
  )
}
