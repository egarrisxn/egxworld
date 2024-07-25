import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip'

export const Icon = ({href, label, className, children}) => {
  const defaultClassName = 'hover:text-green-400'
  const iconClassName = className ? className : defaultClassName

  return (
    <Tooltip>
      <TooltipTrigger>
        <a href={href} target='_blank' rel='noopener noreferrer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1.2em'
            height='1.2em'
            viewBox='0 0 24 24'
            className={iconClassName}
          >
            {children}
          </svg>
        </a>
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  )
}
