import {TooltipProvider, Tooltip, TooltipTrigger, TooltipContent} from '@/components/ui/tooltip'
import {SOCIALS} from '@/lib/socialIcons'

export const Icon = ({name, href, label, className, children}) => {
  const defaultClassName = 'hover:text-green-400'
  const iconClassName = className ? className : defaultClassName

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <a href={href} aria-label={label} target='_blank' rel='noopener noreferrer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1.2em'
              height='1.2em'
              viewBox='0 0 24 24'
              className={iconClassName}
            >
              {children || SOCIALS[name]}
            </svg>
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
