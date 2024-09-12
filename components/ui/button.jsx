import * as React from 'react'
import {Slot} from '@radix-ui/react-slot'
import {cva} from 'class-variance-authority'
import {cn} from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap transition-colors duration-150 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground rounded-lg hover:bg-primary/90',
        main: 'bg-secondary rounded-lg text-secondary-foreground hover:bg-secondary/80 border border-foreground shadow-[1px_2px_3px_0px_#01091c] lg:border-2',
        badge:
          'rounded-full border border-foreground bg-gradient-to-r from-[#5ebe8d] via-[#66c527] to-[#09860b] shadow-[2px_4px_6px_0px_#01091c] lg:border-2 dark:border-0',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'no-underline',
        none: 'hover:text-accent-foreground',
      },
      size: {
        default: 'h-10 px-4 py-2 w-full',
        sm: 'h-7 sm:h-8 px-6 font-semibold 2xl:text-xl sm:px-7 lg:h-9 lg:px-10 2xl:px-12 2xl:h-10',
        badge: 'h-8 p-2 w-fit 2xl:h-12 2xl:p-3 ',
        icon: 'size-10 font-semibold 2xl:text-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const Button = React.forwardRef(({className, variant, size, asChild = false, ...props}, ref) => {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({variant, size, className}))} ref={ref} {...props} />
})
Button.displayName = 'Button'

export {Button, buttonVariants}
