const client_id =
  process.env.NODE_ENV === 'production'
    ? process.env.SPOTIFY_CLIENT_ID
    : process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID

const client_secret =
  process.env.NODE_ENV === 'production'
    ? process.env.SPOTIFY_CLIENT_SECRET
    : process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET

const refresh_token =
  process.env.NODE_ENV === 'production'
    ? process.env.SPOTIFY_REFRESH_TOKEN
    : process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  })
  return response.json()
}

const getNowPlaying = async (accessToken) => {
  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
  return response
}

const getTopTracks = async (accessToken) => {
  const response = await fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
  return response
}

export async function getNowPlayingItem() {
  try {
    const {access_token} = await getAccessToken()
    const response = await getNowPlaying(access_token)

    if (response.status === 204 || response.status > 400) {
      return {
        isPlaying: false,
        albumImageUrl: '',
        artist: '',
        songUrl: '',
        title: '',
      }
    }

    const nowPlayingData = await response.json()
    const song = nowPlayingData.item
    const albumImageUrl = song.album.images[0].url
    const artist = song.artists.map((_artist) => _artist.name).join(', ')
    const isPlaying = nowPlayingData.is_playing
    const songUrl = song.external_urls.spotify
    const title = song.name

    return {
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    }
  } catch (error) {
    console.error('Error fetching now playing item:', error)
    return {
      isPlaying: false,
      albumImageUrl: '',
      artist: '',
      songUrl: '',
      title: '',
    }
  }
}

export async function getTopTracksList() {
  try {
    const {access_token} = await getAccessToken()
    const response = await getTopTracks(access_token)

    if (response.status === 204 || response.status > 400) {
      return {tracks: []}
    }

    const topTracksData = await response.json()

    const tracks = topTracksData.items.slice(0, 5).map((track) => ({
      albumImageUrl: track.album.images[0].url,
      artist: track.artists.map((_artist) => _artist.name).join(', '),
      songUrl: track.external_urls.spotify,
      title: track.name,
    }))

    return {tracks}
  } catch (error) {
    console.error('Error fetching top tracks:', error)
    return {tracks: []}
  }
}
