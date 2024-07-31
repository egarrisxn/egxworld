'use client'
import {usePathname} from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'

const pathColorMap = {
  '/#': {active: 'text-yellow-400', hover: 'hover:text-yellow-400'},
  '/#about': {active: 'text-green-400', hover: 'hover:text-green-400'},
  '/#projects': {active: 'text-blue-400', hover: 'hover:text-blue-400'},
  '/#contact': {active: 'text-red-400', hover: 'hover:text-red-400'},
}

export function NavItem({href, label, children}) {
  const pathname = usePathname()
  const isActive = pathname === href
  const colorClasses = pathColorMap[href] || {
    active: 'text-muted-foreground',
    hover: 'hover:text-muted-foreground',
  }

  return (
    <>
      <Link
        href={href}
        className={clsx(
          'flex items-center justify-center p-2 transition-colors',
          colorClasses.hover,
          {
            'underline underline-offset-4': isActive,
            [colorClasses.active]: isActive,
          },
        )}
      >
        {children}
        <span className='sr-only'>{label}</span>
      </Link>
    </>
  )
}
