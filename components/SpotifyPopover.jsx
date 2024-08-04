import {Popover, PopoverContent, PopoverTrigger} from './ui/popover'
import {TopTracks} from './TopTracks'

export function SpotifyPopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <p className='group text-sm font-semibold tracking-[-0.10em] lg:text-lg'>
          <span className='transition-all duration-150 ease-in-out group-hover:font-bold group-hover:text-green-400'>
            My top tracks this week.
          </span>
          <span className='text-green-400 transition-all duration-150 ease-in-out group-hover:font-bold group-hover:text-foreground'>
            {' '}
            &#8599;
          </span>
        </p>
      </PopoverTrigger>
      <PopoverContent>
        <TopTracks />
      </PopoverContent>
    </Popover>
  )
}
