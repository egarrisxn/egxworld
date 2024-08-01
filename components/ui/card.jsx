import * as React from 'react'
import {cn} from '@/lib/utils'

const Card = React.forwardRef(({className, ...props}, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-md border bg-card text-card-foreground shadow-lg sm:rounded-xl sm:border-2',
      className,
    )}
    {...props}
  />
))
Card.displayName = 'Card'

const CardHeader = React.forwardRef(({className, ...props}, ref) => (
  <div ref={ref} className={cn('mx-auto flex justify-center p-2', className)} {...props} />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef(({className, ...props}, ref) => (
  <h3
    ref={ref}
    className={cn('p-2 text-center text-lg font-extrabold lg:text-xl', className)}
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
    className={cn('px-4 text-center text-xs leading-snug tracking-tight lg:text-sm', className)}
    {...props}
  />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef(({className, ...props}, ref) => (
  <div ref={ref} className={cn('flex justify-center gap-6 p-4', className)} {...props} />
))
CardFooter.displayName = 'CardFooter'

export {Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent}
