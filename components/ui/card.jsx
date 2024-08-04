import * as React from 'react'
import {cn} from '@/lib/utils'

const Card = React.forwardRef(({className, ...props}, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex flex-col justify-between gap-1 rounded-lg border border-foreground bg-white text-card-foreground shadow-[2px_4px_6px_0px_#01091c] sm:border-2 md:gap-2 lg:gap-3 lg:rounded-xl 2xl:gap-6 dark:border-none dark:bg-foreground/10',
      className,
    )}
    {...props}
  />
))
Card.displayName = 'Card'

const CardHeader = React.forwardRef(({className, ...props}, ref) => (
  <div ref={ref} className={cn('mx-auto flex justify-center', className)} {...props} />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef(({className, ...props}, ref) => (
  <h3
    ref={ref}
    className={cn(
      'px-2 pt-2 text-center text-lg font-extrabold transition-colors duration-150 ease-in-out lg:text-xl 2xl:text-3xl',
      className,
    )}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef(({className, ...props}, ref) => (
  <p ref={ref} className={cn('text-muted-foreground', className)} {...props} />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef(({className, ...props}, ref) => (
  <div
    ref={ref}
    className={cn(
      'px-6 pt-2 text-center text-xs leading-snug tracking-tight lg:text-sm 2xl:text-lg',
      className,
    )}
    {...props}
  />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef(({className, ...props}, ref) => (
  <div
    ref={ref}
    className={cn('mb-3 flex justify-center gap-5 py-4 md:gap-7 2xl:mb-5', className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'

export {Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent}
