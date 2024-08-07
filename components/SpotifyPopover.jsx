import {Popover, PopoverContent, PopoverTrigger} from './ui/popover'
import {TrackList} from './SpotifyTrackList'

export function SpotifyPopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <p className='group text-sm tracking-tight lg:text-lg 2xl:text-2xl'>
          <span className='transition-all duration-150 ease-in-out group-hover:font-semibold group-hover:text-green-400'>
            My top tracks this week.
          </span>
          <span className='text-green-400 transition-all duration-150 ease-in-out group-hover:text-foreground'>
            {' '}
            &#8599;
          </span>
        </p>
      </PopoverTrigger>
      <PopoverContent>
        <TrackList />
      </PopoverContent>
    </Popover>
  )
}
