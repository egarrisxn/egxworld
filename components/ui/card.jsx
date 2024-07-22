import * as React from 'react'
import {cn} from '@/lib/utils'

const Card = React.forwardRef(({className, ...props}, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-card text-card-foreground shadow sm:rounded-xl sm:border-2',
      className,
    )}
    {...props}
  />
))
Card.displayName = 'Card'

const CardHeader = React.forwardRef(({className, ...props}, ref) => (
  <div ref={ref} className={cn('mx-auto flex p-6', className)} {...props} />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef(({className, ...props}, ref) => (
  <h3 ref={ref} className={cn('text-center', className)} {...props} />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef(({className, ...props}, ref) => (
  <p ref={ref} className={cn('text-muted-foreground', className)} {...props} />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef(({className, ...props}, ref) => (
  <div ref={ref} className={cn('px-6 pb-2 text-center text-xs', className)} {...props} />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef(({className, ...props}, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center justify-center gap-4 pb-6 lg:gap-8', className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'

export {Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent}
