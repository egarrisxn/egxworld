import * as React from 'react'
import {cn} from '@/lib/utils'

const Card = React.forwardRef(({className, ...props}, ref) => (
  <div ref={ref} className={cn('text-card-foreground', className)} {...props} />
))
Card.displayName = 'Card'

const CardHeader = React.forwardRef(({className, ...props}, ref) => (
  <div ref={ref} className={cn('flex flex-col space-y-1.5 p-2 sm:p-6', className)} {...props} />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef(({className, ...props}, ref) => (
  <h3 ref={ref} className={cn('font-semibold leading-none tracking-tight', className)} {...props} />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef(({className, ...props}, ref) => (
  <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef(({className, ...props}, ref) => (
  <div ref={ref} className={cn('px-2 pb-2 pt-0 sm:px-6 sm:pb-6', className)} {...props} />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef(({className, ...props}, ref) => (
  <div ref={ref} className={cn('p-2 sm:p-6 sm:px-6 sm:pb-6 sm:pt-0', className)} {...props} />
))
CardFooter.displayName = 'CardFooter'

export {Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent}
