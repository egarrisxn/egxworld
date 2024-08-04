'use client'
import {useEffect, useState} from 'react'
import {getTopTracksList} from '@/lib/spotify'

export function Track({ranking, songUrl, title, artist}) {
  return (
    <div className='mt-3 flex flex-row items-baseline border-b-2 border-foreground/30'>
      <p className='text-sm font-bold text-yellow-500 dark:text-yellow-300'>{ranking}</p>
      <div className='flex flex-col pl-2'>
        <a
          className='w-60 truncate font-medium text-zinc-900 sm:w-96 dark:text-zinc-100'
          href={songUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          {title}
        </a>
        <p className='mb-2 w-60 truncate text-zinc-500 sm:w-96'>{artist}</p>
      </div>
    </div>
  )
}

export function TopTracks({client_id, client_secret, refresh_token}) {
  const [loading, setLoading] = useState(true)
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {tracks} = await getTopTracksList(client_id, client_secret, refresh_token)
        setTracks(tracks)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching top tracks:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [client_id, client_secret, refresh_token])

  return (
    <div>
      {loading ? (
        <section className='flex-grow text-sm font-bold sm:text-base'>Loading..</section>
      ) : (
        <section>
          <div className='border-b-2 border-foreground'>
            <h3 className='mb-1 font-bold'>Top tracks for the week.</h3>
          </div>

          <div>
            {tracks.map((track, index) => (
              <Track ranking={index + 1} key={track.songUrl} {...track} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
