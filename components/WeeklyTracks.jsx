import {Popover, PopoverContent, PopoverTrigger} from './ui/popover'
import {TrackList} from '../components/SpotifyTrackList'

export function WeeklyTracks() {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <p className='group tracking-tight transition-colors duration-150 ease-in-out lg:text-lg xl:text-xl 2xl:text-3xl'>
            <span className='group-hover:text-green-400'>My top tracks this week </span>
            <span className='inline-block text-green-400 transition-transform group-hover:translate-x-1 group-hover:text-foreground motion-reduce:transform-none'>
              {''} &#8599;
            </span>
          </p>
        </PopoverTrigger>
        <PopoverContent>
          <TrackList />
        </PopoverContent>
      </Popover>
    </>
  )
}
