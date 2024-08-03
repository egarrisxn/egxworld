import * as React from 'react'
import {Slot} from '@radix-ui/react-slot'
import {cva} from 'class-variance-authority'
import {cn} from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-100 ease-in focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-md hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground shadow-md hover:bg-destructive/90',
        outline:
          'border shadow-md hover:bg-accent dark:shadow-foreground/20 hover:text-accent-foreground',
        secondary:
          'bg-secondary border border-foreground text-secondary-foreground 2xl:text-2xl shadow-[2px_4px_6px_0px_#01091c] hover:bg-white dark:hover:bg-foreground/20 hover:font-bold lg:border-2 dark:border-0',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'no-underline',
        none: 'hover:text-accent-foreground',
      },
      size: {
        default: 'h-9 px-8 py-2',
        xs: 'py-1 px-7 text-xs md:text-sm lg:text-base xl:text-lg:',
        sm: 'py-1.5 px-8 text-sm xl:text-lg',
        lg: 'h-10 px-8',
        icon: 'size-9',
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
