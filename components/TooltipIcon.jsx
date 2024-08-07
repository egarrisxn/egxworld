import {TooltipProvider, Tooltip, TooltipTrigger, TooltipContent} from './ui/tooltip'
import {socialIcons} from '@/lib/data/icons'

export const Icon = ({name, href, label, className, children}) => {
  const defaultClassName =
    'hover:text-green-400 transition-all duration-150 ease-in-out hover:border-2 hover:p-0.5 hover:rounded-md dark:hover:border-green-300 hover:border-green-500'
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
              {children || socialIcons[name]}
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
