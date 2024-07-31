import {Icon} from './Icons'

export function SocialsList() {
  return (
    <>
      <Icon href='https://github.com/egarrisxn' label='GitHub' className='hover:text-green-400'>
        <path
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21'
        />
      </Icon>
      <Icon
        href='https://www.linkedin.com/in/ethan-garrison'
        label='LinkedIn'
        className='hover:text-red-400'
      >
        <g
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
        >
          <path d='M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm4 5v5m0-8v.01M12 16v-5' />
          <path d='M16 16v-3a2 2 0 0 0-4 0' />
        </g>
      </Icon>
      <Icon href='https://twitter.com/eg_xo_' label='Twitter' className='hover:text-blue-400'>
        <path
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M22 4.01c-1 .49-1.98.689-3 .99c-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4c0 0-4.182 7.433 4 11c-1.872 1.247-3.739 2.088-6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58-1.04 6.522-3.723 7.651-7.742a13.8 13.8 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z'
        />
      </Icon>
      <Icon
        href='https://open.spotify.com/user/egarrisxn'
        label='Spotify'
        className='hover:text-green-400'
      >
        <g
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
        >
          <path d='M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0' />
          <path d='M8 11.973c2.5-1.473 5.5-.973 7.5.527M9 15c1.5-1 4-1 5 .5M7 9c2-1 6-2 10 .5' />
        </g>
      </Icon>
      <Icon
        href='https://www.instagram.com/eg___xo'
        label='Instagram'
        className='hover:text-red-400'
      >
        <g
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
        >
          <path d='M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z' />
          <path d='M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m7.5-4.5v.01' />
        </g>
      </Icon>
      <Icon
        href='https://discord.com/users/eg___xo'
        label='Discord'
        className='hover:text-blue-400'
      >
        <g
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
        >
          <path d='M8 12a1 1 0 1 0 2 0a1 1 0 0 0-2 0m6 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0' />
          <path d='M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833-1.667 3.5-3c.667-1.667.5-5.833-1.5-11.5c-1.457-1.015-3-1.34-4.5-1.5l-.972 1.923a11.9 11.9 0 0 0-4.053 0L9 4c-1.5.16-3.043.485-4.5 1.5c-2 5.667-2.167 9.833-1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2-2 2-3' />
          <path d='M7 16.5c3.5 1 6.5 1 10 0' />
        </g>
      </Icon>
    </>
  )
}

export function TechList() {
  return (
    <>
      <Icon href='https://alpinejs.dev/' label='Alpine.js'>
        <path
          fill='currentColor'
          d='m24 12l-5.72 5.746l-5.724-5.741l5.724-5.75zM5.72 6.254L0 12l5.72 5.746h11.44z'
        />
      </Icon>
      <Icon href='https://angular.dev/' label='Angular'>
        <path
          fill='currentColor'
          d='m12 2.5l8.84 3.15l-1.34 11.7L12 21.5l-7.5-4.15l-1.34-11.7zm0 2.1L6.47 17h2.06l1.11-2.78h4.7L15.45 17h2.05zm1.62 7.9h-3.23L12 8.63z'
        ></path>
      </Icon>
      <Icon href='https://astro.build/' label='Astro'>
        <path
          fill='currentColor'
          d='M8.358 20.162c-1.186-1.07-1.532-3.316-1.038-4.944c.856 1.026 2.043 1.352 3.272 1.535c1.897.283 3.76.177 5.522-.678c.202-.098.388-.229.608-.36c.166.473.209.95.151 1.437c-.14 1.185-.738 2.1-1.688 2.794c-.38.277-.782.525-1.175.787c-1.205.804-1.531 1.747-1.078 3.119l.044.148a3.16 3.16 0 0 1-1.407-1.188a3.3 3.3 0 0 1-.544-1.815c-.004-.32-.004-.642-.048-.958c-.106-.769-.472-1.113-1.161-1.133c-.707-.02-1.267.411-1.415 1.09c-.012.053-.028.104-.045.165zm-5.961-4.445s3.24-1.575 6.49-1.575l2.451-7.565c.092-.366.36-.614.662-.614s.57.248.662.614l2.45 7.565c3.85 0 6.491 1.575 6.491 1.575L16.088.727C15.93.285 15.663 0 15.303 0H8.697c-.36 0-.615.285-.784.727z'
        ></path>
      </Icon>
      <Icon href='https://getbootstrap.com/' label='Bootstrap'>
        <path
          fill='currentColor'
          d='M11.79 11.5H9.72V8.19h2.47c1.26 0 1.96.56 1.96 1.59c0 1.12-.83 1.72-2.36 1.72m.37 1.13H9.72v3.64h2.56c1.56 0 2.38-.63 2.38-1.83s-.85-1.81-2.5-1.81M22 5.31v13.38C22 20.5 20.5 22 18.69 22H5.31C3.5 22 2 20.5 2 18.69V5.31C2 3.5 3.5 2 5.31 2h13.38C20.5 2 22 3.5 22 5.31m-6 9.19c0-1.38-.92-2.37-2.33-2.55v-.06c1-.18 1.79-1.18 1.79-2.26c0-1.55-1.2-2.58-2.96-2.58H8.43v10.36h4.04c2.21 0 3.53-1.09 3.53-2.91'
        ></path>
      </Icon>
      <Icon href='https://www.cprogramming.com/' label='C'>
        <path
          fill='currentColor'
          d='m15.45 15.97l.42 2.44c-.26.14-.68.27-1.24.39c-.57.13-1.24.2-2.01.2c-2.21-.04-3.87-.7-4.98-1.96c-1.14-1.27-1.68-2.88-1.68-4.83C6 9.9 6.68 8.13 8 6.89C9.28 5.64 10.92 5 12.9 5c.75 0 1.4.07 1.94.19s.94.25 1.2.4l-.6 2.49l-1.04-.34c-.4-.1-.87-.15-1.4-.15c-1.15-.01-2.11.36-2.86 1.1c-.76.73-1.14 1.85-1.18 3.34c.01 1.36.37 2.42 1.08 3.2c.71.77 1.7 1.17 2.99 1.18l1.33-.12c.43-.08.79-.19 1.09-.32'
        ></path>
      </Icon>
      <Icon href='https://www.css3.com/' label='CSS3'>
        <path
          fill='currentColor'
          d='M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438zm17.09 4.413L5.41 4.41l.213 2.622l10.125.002l-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523l-2.91.804l-2.956-.81l-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53z'
        ></path>
      </Icon>
      <Icon href='https://deno.com/' label='Deno'>
        <path
          fill='currentColor'
          d='M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12S5.373 0 12 0m-.469 6.793c-3.49 0-6.204 2.196-6.204 4.928c0 2.58 2.498 4.228 6.37 4.145l.118-.003l.425-.012l-.109.279l.013.029q.047.108.084.22l.01.028l.015.045l.021.065l.014.045l.014.047l.015.049l.021.075l.022.079l.015.054l.023.084l.022.088l.023.091l.023.095l.015.065l.024.1l.023.103l.032.143l.017.074l.024.114l.024.117l.025.12l.035.174l.029.142l.037.195l.02.1l.028.155l.03.158l.039.217l.04.225l.04.231l.041.24l.042.246l.042.254l.042.26l.032.201l.055.344l.022.14l.055.36l.045.295l.034.227l.046.308l.023.156a10.76 10.76 0 0 0 6.529-3.412l.05-.055l-.238-.891l-.633-2.37l-.395-1.47l-.348-1.296l-.213-.787l-.136-.498l-.081-.297l-.073-.264l-.032-.11l-.018-.064l-.01-.034l-.008-.026a6.04 6.04 0 0 0-2.038-2.97c-1.134-.887-2.573-1.351-4.252-1.351M8.467 19.3a.586.586 0 0 0-.714.4l-.004.013l-.527 1.953q.493.245 1.008.437l.08.03l.57-2.114l.004-.015a.586.586 0 0 0-.417-.704m3.264-1.43a.586.586 0 0 0-.715.4l-.004.014l-.796 2.953l-.004.014a.586.586 0 0 0 1.131.305l.004-.014l.797-2.953l.003-.014l.013-.067l.002-.022l-.019-.096l-.027-.138l-.018-.086a.58.58 0 0 0-.367-.295Zm-5.553-3.04a1 1 0 0 0-.037.09l-.005.02l-.797 2.953l-.004.014a.586.586 0 0 0 1.131.306l.004-.014l.723-2.678a5.3 5.3 0 0 1-1.015-.692Zm-1.9-3.397a.586.586 0 0 0-.715.4l-.004.013l-.797 2.953l-.003.015a.586.586 0 0 0 1.13.305l.005-.014l.797-2.953l.003-.015a.586.586 0 0 0-.416-.704m17.868-.67a.586.586 0 0 0-.715.399l-.004.014l-.797 2.953l-.003.014a.586.586 0 0 0 1.13.305l.005-.014l.797-2.953l.003-.014a.586.586 0 0 0-.416-.704M2.542 6.82a10.7 10.7 0 0 0-1.251 3.926a.586.586 0 0 0 1.002-.22l.004-.014l.797-2.953l.003-.014a.586.586 0 0 0-.555-.725m17.585.02a.586.586 0 0 0-.714.4l-.004.014l-.797 2.953l-.004.014a.586.586 0 0 0 1.131.305l.004-.014l.797-2.953l.004-.014a.586.586 0 0 0-.417-.704Zm-7.846 1.926a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m-6.27-4.733a.586.586 0 0 0-.715.398l-.004.015l-.797 2.953l-.004.014a.586.586 0 0 0 1.132.305l.003-.014l.797-2.953l.004-.014a.586.586 0 0 0-.417-.704Zm10.238.558a.586.586 0 0 0-.714.399l-.004.014l-.536 1.984q.521.257.99.603l.051.038l.626-2.32l.004-.014a.586.586 0 0 0-.417-.704m-5.211-3.33a11 11 0 0 0-1.115.158l-.078.015l-.742 2.753l-.004.015a.586.586 0 0 0 1.131.305l.004-.014l.797-2.953l.004-.015a.6.6 0 0 0 .003-.264m7.332 2.04l-.156.58l-.004.015a.586.586 0 0 0 1.131.305l.004-.014l.017-.063a11 11 0 0 0-.923-.772zm-4.636-1.944l-.283 1.048l-.003.014a.586.586 0 0 0 1.13.305l.005-.014l.297-1.102q-.525-.145-1.063-.237z'
        ></path>
      </Icon>

      <Icon href='https://eslint.org/' label='ESLint'>
        <path
          fill='currentColor'
          d='M7.257 9.132L11.816 6.5a.37.37 0 0 1 .368 0l4.559 2.632a.37.37 0 0 1 .184.32v5.263a.37.37 0 0 1-.184.319l-4.559 2.632a.37.37 0 0 1-.368 0l-4.559-2.632a.37.37 0 0 1-.184-.32V9.452a.37.37 0 0 1 .184-.32m16.595 2.398l-5.446-9.475c-.198-.343-.564-.596-.96-.596H6.555c-.396 0-.762.253-.96.596L.149 11.509a1.13 1.13 0 0 0 0 1.117l5.447 9.398c.197.342.563.517.959.517h10.893c.395 0 .76-.17.959-.512l5.446-9.413a1.07 1.07 0 0 0 0-1.086m-4.51 4.556a.4.4 0 0 1-.204.338L12.2 20.426a.4.4 0 0 1-.392 0l-6.943-4.002a.4.4 0 0 1-.205-.338V8.08c0-.14.083-.269.204-.338L11.8 3.74c.12-.07.272-.07.392 0l6.943 4.003a.4.4 0 0 1 .206.338z'
        ></path>
      </Icon>

      <Icon href='https://expressjs.com/' label='Express'>
        <path
          fill='currentColor'
          d='M24 18.588a1.53 1.53 0 0 1-1.895-.72l-3.45-4.771l-.5-.667l-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92l-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83l3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27c1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.08 4.08 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.42 5.42 0 0 1-2.589 3.957a6.27 6.27 0 0 1-7.306-.933a6.58 6.58 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88 88 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278c-2.882-.04-4.944 2.094-5.071 5.264z'
        ></path>
      </Icon>

      <Icon href='https://www.git-scm.com/' label='Git'>
        <path
          fill='currentColor'
          d='M2.6 10.59L8.38 4.8l1.69 1.7c-.24.85.15 1.78.93 2.23v5.54c-.6.34-1 .99-1 1.73a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.74-.4-1.39-1-1.73V9.41l2.07 2.09c-.07.15-.07.32-.07.5a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2c-.18 0-.35 0-.5.07L13.93 7.5a1.98 1.98 0 0 0-1.15-2.34c-.43-.16-.88-.2-1.28-.09L9.8 3.38l.79-.78c.78-.79 2.04-.79 2.82 0l7.99 7.99c.79.78.79 2.04 0 2.82l-7.99 7.99c-.78.79-2.04.79-2.82 0L2.6 13.41c-.79-.78-.79-2.04 0-2.82'
        ></path>
      </Icon>

      <Icon href='https://graphql.org/' label='GraphQL'>
        <path
          fill='currentColor'
          d='m12 5.37l-.44-.06L6 14.9c.24.21.4.48.47.78h11.06c.07-.3.23-.57.47-.78l-5.56-9.59zM6.6 16.53l4.28 2.53c.29-.27.69-.43 1.12-.43s.83.16 1.12.43l4.28-2.53zM12 22a1.68 1.68 0 0 1-1.68-1.68l.09-.56l-4.3-2.55c-.31.36-.76.58-1.27.58a1.68 1.68 0 0 1-1.68-1.68c0-.79.53-1.45 1.26-1.64V9.36c-.83-.11-1.47-.82-1.47-1.68A1.68 1.68 0 0 1 4.63 6c.55 0 1.03.26 1.34.66l4.41-2.53l-.06-.45c0-.93.75-1.68 1.68-1.68s1.68.75 1.68 1.68l-.06.45l4.41 2.53c.31-.4.79-.66 1.34-.66a1.68 1.68 0 0 1 1.68 1.68c0 .86-.64 1.57-1.47 1.68v5.11c.73.19 1.26.85 1.26 1.64a1.68 1.68 0 0 1-1.68 1.68c-.51 0-.96-.22-1.27-.58l-4.3 2.55l.09.56A1.68 1.68 0 0 1 12 22M10.8 4.86L6.3 7.44l.02.24c0 .71-.44 1.32-1.06 1.57l.03 5.25zm2.4 0l5.51 9.64l.03-5.25c-.62-.25-1.06-.86-1.06-1.57l.02-.24z'
        ></path>
      </Icon>

      <Icon href='https://handlebarsjs.com/' label='Handlebars'>
        <path
          fill='currentColor'
          d='M9.1 4.948a4 4 0 0 0-.398.014C6.32 5.15 5.373 6.375 4.802 6.9c-.572.525-1.656 1.763-2.376 1.545c-.721-.217-.924-1.107-.67-1.381s.454-.225.613 0c.097.18.145.383.14.587a1.36 1.36 0 0 0 .438-.665a.79.79 0 0 0-.443-1.017c-1.3-.659-2.139.514-2.26.787c-.122.273-.336.707-.2 1.695c.135.989.612 1.902 2.104 2.261a6.3 6.3 0 0 0 4.238-.495l4.41-1.84a5 5 0 0 1 .556-.101v9.864c0 .506.316.913.708.913s.707-.407.707-.913V8.29a5 5 0 0 1 .437.088l4.41 1.84a6.3 6.3 0 0 0 4.238.494c1.492-.36 1.969-1.272 2.105-2.26c.135-.989-.08-1.423-.2-1.696c-.122-.273-.962-1.446-2.261-.787a.79.79 0 0 0-.443 1.017c.076.26.229.492.437.665a1.2 1.2 0 0 1 .141-.587c.159-.225.359-.274.613 0s.051 1.164-.67 1.382c-.72.217-1.804-1.02-2.376-1.546c-.571-.525-1.518-1.75-3.9-1.938A3.45 3.45 0 0 0 12 6.653a3.45 3.45 0 0 0-2.9-1.705m12.39 2.703v.004l.006.002l-.006-.004zm-18.98 0l-.006.004l.006-.001z'
        ></path>
      </Icon>

      <Icon href='https://heroku.com/' label='Heroku'>
        <path
          fill='currentColor'
          d='M20.61 0H3.39a2.15 2.15 0 0 0-2.16 2.16v19.681A2.15 2.15 0 0 0 3.39 24h17.22a2.15 2.15 0 0 0 2.159-2.159V2.16A2.15 2.15 0 0 0 20.61 0m.96 21.841c0 .539-.421.96-.96.96H3.39a.95.95 0 0 1-.96-.96V2.16c0-.54.42-.961.96-.961h17.22a.95.95 0 0 1 .96.961zM6.63 20.399L9.33 18l-2.7-2.4zm9.72-9.719c-.479-.48-1.379-1.08-2.879-1.08c-1.621 0-3.301.421-4.5.84V3.6h-2.4v10.38l1.68-.78s2.76-1.26 5.16-1.26c1.2 0 1.5.66 1.5 1.26v7.2h2.4v-7.2c.059-.179.059-1.501-.961-2.52M13.17 7.5h2.4c1.08-1.26 1.62-2.521 1.8-3.9h-2.399c-.241 1.379-.841 2.64-1.801 3.9'
        ></path>
      </Icon>

      <Icon href='https://www.html.com/html5/' label='HTML5'>
        <path
          fill='currentColor'
          d='M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438zm7.031 9.75l-.232-2.718l10.059.003l.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426l-2.91.804l-2.955-.81l-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443l.744-8.157z'
        ></path>
      </Icon>

      <Icon href='https://htmx.org/' label='HTMX'>
        <path
          fill='currentColor'
          d='M0 13.01v-2l7.09-2.98l.58 1.94l-5.1 2.05l5.16 2.05l-.63 1.9Zm16.37 1.03l5.18-2l-5.16-2.09l.65-1.88L24 10.95v2.12L17 16zm-2.85-9.98H16l-5.47 15.88H8.05Z'
        ></path>
      </Icon>

      <Icon href='https://jquery.com/' label='jQuery'>
        <path
          fill='currentColor'
          d='M22.88 10.41a5.005 5.005 0 0 1-7.04-.62c-1.78-2.12-1.5-5.29.61-7.04l.51-.38A5.024 5.024 0 0 0 16.8 9c1.63 1.94 4.45 2.32 6.54.97zM21.1 14.5a7.48 7.48 0 0 1-10.56-.92c-2.67-3.17-2.25-7.9.92-10.58l.92-.64a7.494 7.494 0 0 0-.12 9.78c2.42 2.86 6.54 3.49 9.65 1.58zm-1.13 4.88c-4.44 3.73-11.07 3.15-14.8-1.3C1.45 13.64 2.03 7 6.47 3.29l1.11-.79c-3.51 3.8-3.73 9.73-.3 13.82c3.43 4.08 9.31 4.9 13.68 2.11z'
        ></path>
      </Icon>

      <Icon href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/' label='JavaScript'>
        <path
          fill='currentColor'
          d='M0 0h24v24H0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873c-.736-.345-1.554-.585-1.797-1.14c-.091-.33-.105-.51-.046-.705c.15-.646.915-.84 1.515-.66c.39.12.75.42.976.9c1.034-.676 1.034-.676 1.755-1.125c-.27-.42-.404-.601-.586-.78c-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005c-1.14 1.291-.811 3.541.569 4.471c1.365 1.02 3.361 1.244 3.616 2.205c.24 1.17-.87 1.545-1.966 1.41c-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109c1.74 1.756 6.09 1.666 6.871-1.004c.029-.09.24-.705.074-1.65zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805c0 1.232.063 2.363-.138 2.711c-.33.689-1.18.601-1.566.48c-.396-.196-.597-.466-.83-.855c-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517c.855.51 2.004.675 3.207.405c.783-.226 1.458-.691 1.811-1.411c.51-.93.402-2.07.397-3.346c.012-2.054 0-4.109 0-6.179z'
        ></path>
      </Icon>

      <Icon href='https://www.markdownguide.org/' label='Markdown'>
        <path
          fill='currentColor'
          d='m16 15l3-3l-1.05-1.075l-1.2 1.2V9h-1.5v3.125l-1.2-1.2L13 12zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm1.5-5H7v-4.5h1v3h1.5v-3h1V15H12v-5q0-.425-.288-.712T11 9H6.5q-.425 0-.712.288T5.5 10z'
        ></path>
      </Icon>

      <Icon href='https://mongodb.com/' label='MongoDB'>
        <path
          fill='currentColor'
          d='M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115c-.28-.394-.53-.954-.735-1.44c-.036.495-.055.685-.523 1.184c-.723.566-4.438 3.682-4.74 10.02c-.282 5.912 4.27 9.435 4.888 9.884l.07.05A74 74 0 0 1 11.91 24h.481a29 29 0 0 1 .51-3.07c.417-.296.604-.463.85-.693a11.34 11.34 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218m-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695c-.381-.045-.765-1.76-.765-2.405'
        ></path>
      </Icon>

      <Icon href='https://mysql.com/' label='MySQL'>
        <path
          fill='currentColor'
          d='M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273c.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333c-.04-.047-.046-.094-.08-.14c-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a51 51 0 0 0-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a73 73 0 0 0-.195 4.41H0q.083-2.95.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095q.363 3.024.428 5.53zm4.017-4.08q-.567 3.069-1.492 4.46q-.723 1.074-1.583 1.073q-.228 0-.566-.138v-.494q.166.026.386.026q.402 0 .647-.222q.295-.27.295-.605q0-.233-.23-.944L6.23 14.615h.91l.727 2.36q.247.804.205 1.123q.6-1.598.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5q.136-.113.255-.25q.649-.76.648-2.253q0-2.745-2.155-2.746q-1.056 0-1.65.697q-.646.762-.646 2.245q-.001 1.459.574 2.14q.524.615 1.583.615q.396 0 .725-.098l1.325.772l.36-.622zM15.5 17.588q-.337-.541-.337-1.736q0-2.09 1.27-2.09q.666 0 .977.5q.336.543.336 1.723q0 2.107-1.27 2.108q-.667 0-.978-.5zm-1.658-.425q0 .706-.516 1.156q-.514.45-1.384.45c-.543 0-1.064-.172-1.573-.515l.237-.476q.656.329 1.19.328q.498 0 .783-.22a.75.75 0 0 0 .3-.615c0-.33-.23-.61-.648-.845c-.388-.213-1.163-.657-1.163-.657c-.422-.307-.632-.636-.632-1.177q0-.674.47-1.085q.471-.416 1.22-.415q.769 0 1.4.41l-.213.476a2.7 2.7 0 0 0-1.064-.23q-.425 0-.654.206a.69.69 0 0 0-.248.524c0 .328.234.61.666.85c.393.215 1.187.67 1.187.67c.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188c-.1.04-.26.04-.274.167c.055.053.063.14.11.214c.08.134.218.313.346.407q.208.167.427.31c.26.16.555.255.81.416c.145.094.293.213.44.313c.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214c-.067-.067-.134-.127-.2-.193a3.2 3.2 0 0 0-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106c.227-.06.435-.047.67-.106q.16-.042.32-.094v-.06c-.12-.12-.21-.283-.334-.395a9 9 0 0 0-1.104-.823c-.21-.134-.476-.22-.697-.334c-.08-.04-.214-.06-.26-.127c-.12-.146-.19-.34-.275-.514a18 18 0 0 1-.547-1.163c-.12-.262-.193-.523-.34-.763c-.69-1.137-1.437-1.826-2.586-2.5c-.247-.14-.543-.2-.856-.274c-.167-.008-.334-.02-.5-.027c-.11-.047-.216-.174-.31-.235c-.38-.24-1.364-.76-1.644-.072c-.18.434.267.862.422 1.082c.115.153.26.328.34.5c.047.116.06.235.107.356c.106.294.207.622.347.897c.073.14.153.287.247.413c.054.073.146.107.167.227c-.094.136-.1.334-.154.5c-.24.757-.146 1.693.194 2.25c.107.166.362.534.703.393c.3-.12.234-.5.32-.835c.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555c.206.328.566.668.867.895c.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.5 3.5 0 0 1-.35-.4a9 9 0 0 1-.747-1.218c-.11-.21-.202-.436-.29-.643c-.04-.08-.04-.2-.107-.24c-.1.146-.247.273-.32.453c-.127.288-.14.642-.188 1.01c-.027.007-.014 0-.027.014c-.214-.052-.287-.274-.367-.46c-.2-.475-.233-1.238-.06-1.785c.047-.14.247-.582.167-.716c-.042-.127-.174-.2-.247-.303a2.5 2.5 0 0 1-.24-.427c-.16-.374-.24-.788-.414-1.162c-.08-.173-.22-.354-.334-.513c-.127-.18-.267-.307-.368-.52c-.033-.073-.08-.194-.027-.274c.014-.054.042-.075.094-.09c.088-.072.335.022.422.062c.247.1.455.194.662.334c.094.066.195.193.315.226h.14c.214.047.455.014.655.073c.355.114.675.28.962.46a5.95 5.95 0 0 1 2.085 2.286c.08.154.115.295.188.455c.14.33.313.663.455.982c.14.315.275.636.476.897c.1.14.502.213.682.286c.133.06.34.115.46.188c.23.14.454.3.67.454c.11.076.443.243.463.378'
        ></path>
      </Icon>

      <Icon href='https://netlify.com/' label='Netlify'>
        <path
          fill='currentColor'
          d='M6.49 19.04h-.23L5.13 17.9v-.23l1.73-1.71h1.2l.15.15v1.2L6.5 19.04ZM5.13 6.31V6.1l1.13-1.13h.23L8.2 6.68v1.2l-.15.15h-1.2zm9.96 9.09h-1.65l-.14-.13v-3.83c0-.68-.27-1.2-1.1-1.23c-.42 0-.9 0-1.43.02l-.07.08v4.96l-.14.14H8.9l-.13-.14V8.73l.13-.14h3.7a2.6 2.6 0 0 1 2.61 2.6v4.08l-.13.14Zm-8.37-2.44H.14L0 12.82v-1.64l.14-.14h6.58l.14.14v1.64zm17.14 0h-6.58l-.14-.14v-1.64l.14-.14h6.58l.14.14v1.64zM11.05 6.55V1.64l.14-.14h1.65l.14.14v4.9l-.14.14h-1.65zm0 15.81v-4.9l.14-.14h1.65l.14.13v4.91l-.14.14h-1.65z'
        ></path>
      </Icon>

      <Icon href='https://nextjs.org/' label='Next.js'>
        <path
          fill='currentColor'
          d='M0 13.01v-2l7.09-2.98l.58 1.94l-5.1 2.05l5.16 2.05l-.63 1.9Zm16.37 1.03l5.18-2l-5.16-2.09l.65-1.88L24 10.95v2.12L17 16zm-2.85-9.98H16l-5.47 15.88H8.05Z'
        ></path>
      </Icon>

      <Icon href='https://www.nodejs.org/' label='Node.js'>
        <path
          fill='currentColor'
          d='M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47c1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 0 1-.11-.21V7.71c0-.09.04-.17.11-.21l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.12.11.21v8.58c0 .08-.04.16-.11.21l-7.44 4.29c-.06.04-.16.04-.23 0L10 19.65c-.08-.03-.16-.04-.21-.01c-.53.3-.63.36-1.12.51c-.12.04-.31.11.07.32l2.48 1.47q.36.21.78.21t.78-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2M14 8c-2.12 0-3.39.89-3.39 2.39c0 1.61 1.26 2.08 3.3 2.28c2.43.24 2.62.6 2.62 1.08c0 .83-.67 1.18-2.23 1.18c-1.98 0-2.4-.49-2.55-1.47a.226.226 0 0 0-.22-.18h-.96c-.12 0-.21.09-.21.22c0 1.24.68 2.74 3.94 2.74c2.35 0 3.7-.93 3.7-2.55c0-1.61-1.08-2.03-3.37-2.34c-2.31-.3-2.54-.46-2.54-1c0-.45.2-1.05 1.91-1.05c1.5 0 2.09.33 2.32 1.36c.02.1.11.17.21.17h.97c.05 0 .11-.02.15-.07c.04-.04.07-.1.05-.16C17.56 8.82 16.38 8 14 8'
        ></path>
      </Icon>

      <Icon href='https://pnpm.io/' label='PNPM'>
        <path
          fill='currentColor'
          d='M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z'
        ></path>
      </Icon>

      <Icon href='https://pugjs.org/' label='Pug'>
        <path
          fill='currentColor'
          d='M12.094 4.636c-2.066 0-3.682.204-4.922.57l.091-.084c.038-.037-.05-.062-.228-.068c-.534-.018-1.867.143-2.99.705C2.772 6.358-.073 9.504 0 9.69s1.46 1.345 1.872 1.795c.262.3 1.048 2.959 1.76 2.51c.188-.131.265-.651.33-1.293c.058.497.115 1.013.193 1.48c.112.749 1.087 1.347 1.2 2.059c.138 1.014.76 1.723 1.98 2.174c.484.668 1.238.33 1.8.634c.9.487 1.91.262 2.92.262c1.012 0 1.985.186 2.92-.3c.577-.3 1.32.03 1.81-.58c1.225-.45 1.831-1.164 1.972-2.19c.112-.712 1.048-1.31 1.16-2.059c.064-.38.11-.802.158-1.203c.057.5.13.904.291 1.016c.674.449 1.498-2.21 1.76-2.51c.412-.45 1.797-1.608 1.872-1.795c.074-.188-2.808-3.333-4.08-3.932c-1.124-.562-2.457-.723-2.991-.705c-.167.005-.245.029-.225.062c-1.174-.308-2.672-.48-4.61-.48m.03.5c2.203 0 3.848.225 5.01.615c.133.045.238.098.358.147c.69.715 1.624 1.83 2.014 3.117c.025.08.04.166.063.248v.008c.045.77.316 1.417.23 1.99c-.153.998-.228 1.973-.373 2.84l-.002.004v.004c-.029.192-.218.476-.478.807c-.261.33-.596.702-.682 1.248v.006l-.002.003c-.1.733-.42 1.2-1.17 1.582c.125-.444.205-1.055.205-1.963c.037-1.123.077-1.572-.86-2.695a5.53 5.53 0 0 0-2.792-1.898c-.111-.39-.722-.836-1.551-.836s-1.415.422-1.535.82a5.53 5.53 0 0 0-2.846 1.914c-.936 1.123-.86 1.61-.86 2.696c0 .903.08 1.513.203 1.96c-.77-.384-1.107-.856-1.207-1.58v-.01c-.087-.553-.437-.923-.707-1.253s-.462-.617-.49-.801l-.002-.004V14.1c-.144-.867-.22-1.84-.373-2.838v-.002c-.085-.573.183-1.22.229-1.99v.015c.013-.143.017-.24.025-.37c.36-1.16 1.153-2.173 1.805-2.876a6 6 0 0 1 .724-.289c1.192-.391 2.86-.615 5.063-.615M6.913 8.94a1.647 1.647 0 0 0-1.635 1.648a1.647 1.647 0 0 0 1.648 1.647a1.7 1.7 0 0 0 .442-.06q.523-.564 1.111-1.042a1.7 1.7 0 0 0 .094-.545A1.647 1.647 0 0 0 6.926 8.94zm10.297 0a1.647 1.647 0 0 0-1.637 1.648a1.65 1.65 0 0 0 .15.684q.47.396.895.848a1.7 1.7 0 0 0 .604.115a1.647 1.647 0 0 0 1.646-1.647a1.647 1.647 0 0 0-1.646-1.648zm-9.871.486a.41.41 0 0 1 .41.412a.41.41 0 0 1-.41.412a.41.41 0 0 1-.413-.412a.41.41 0 0 1 .413-.412m9.47 0a.41.41 0 0 1 .413.412a.41.41 0 0 1-.412.412a.41.41 0 0 1-.412-.412a.41.41 0 0 1 .412-.412m-5.109 1.486a.15.3 17.23 0 1 .03.004a.15.3 17.23 0 1 .054.33a.15.3 17.23 0 1-.232.243a.15.3 17.23 0 1-.053-.33a.15.3 17.23 0 1 .201-.247m.672.022a.3.15 75.54 0 1 .205.254a.3.15 75.54 0 1-.07.328a.3.15 75.54 0 1-.22-.252a.3.15 75.54 0 1 .07-.328a.3.15 75.54 0 1 .015-.002m-.316.476s.035.226.185.301s.862-.15.862-.15c-.337.262-.973.263-.973.338v.373c0 .408.026 1.461-.031 1.685c.823.005 2.09 1.126 2.09 2.508v.075c-.038-1.348-1.61-2.434-2.096-2.434c-.487 0-2.06 1.048-2.098 2.434v-.075c0-1.362 1.233-2.47 2.057-2.506c-.07-.551-.073-1.137-.073-1.687V11.9a5 5 0 0 0-.656-.237c.185.033.371.05.545.05c.15-.076.188-.302.188-.302M9.015 12.76h.008a.15.15 0 0 1 .15.15a.15.15 0 0 1-.15.151a.15.15 0 0 1-.15-.15a.15.15 0 0 1 .142-.15m1.124 0h.007a.15.15 0 0 1 .15.15a.15.15 0 0 1-.15.151a.15.15 0 0 1-.15-.15a.15.15 0 0 1 .143-.15m3.67 0h.007a.15.15 0 0 1 .15.15a.15.15 0 0 1-.15.151a.15.15 0 0 1-.15-.15a.15.15 0 0 1 .143-.15m1.123 0h.008a.15.15 0 0 1 .15.15a.15.15 0 0 1-.15.151a.15.15 0 0 1-.15-.15a.15.15 0 0 1 .142-.15m-5.653.899h.008a.15.15 0 0 1 .148.15a.15.15 0 0 1-.148.15a.15.15 0 0 1-.15-.15a.15.15 0 0 1 .142-.15m5.391 0h.006a.15.15 0 0 1 .15.15a.15.15 0 0 1-.15.15a.15.15 0 0 1-.149-.15a.15.15 0 0 1 .143-.15'
        ></path>
      </Icon>

      <Icon href='https://reactjs.com/' label='React'>
        <path
          fill='currentColor'
          d='M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a23 23 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16zm6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16zm1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86zm-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86zm2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a23 23 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9'
        ></path>
      </Icon>

      <Icon href='https://sanity.io/' label='Sanity'>
        <path
          fill='currentColor'
          d='M7.394 7.31a6 6 0 0 1-.833-.68c-.913-.91-1.38-2.067-1.38-3.568v-.575C6.699.929 9.039 0 11.828 0c5.394 0 8.515 2.8 9.285 6.74H16.22c-.54-1.554-1.89-2.764-4.352-2.764c-2.422 0-4.136 1.276-4.473 3.334h-.002ZM4.683 3.062c0 3.236 2.034 5.162 6.106 6.177l4.316.983c3.854.87 6.2 3.03 6.2 6.55a6.6 6.6 0 0 1-1.436 4.239c0-3.511-1.85-5.409-6.31-6.55l-4.236-.946c-3.393-.76-6.011-2.536-6.011-6.36a6.58 6.58 0 0 1 1.37-4.093ZM17.18 16.484c-.292 2.235-2.092 3.495-4.698 3.495c-2.314 0-4.048-.946-4.703-2.99H2.694C3.518 21.44 7.224 24 12.519 24c2.828 0 5.277-.87 6.85-2.439v-.55c0-1.66-.433-2.876-1.342-3.816a5.5 5.5 0 0 0-.847-.71z'
        ></path>
      </Icon>

      <Icon href='https://svelte.dev/' label='Svelte'>
        <path
          fill='currentColor'
          d='M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767a4.1 4.1 0 0 1-.703-3.107a4 4 0 0 1 .134-.522l.105-.321l.287.21a7.2 7.2 0 0 0 2.186 1.092l.208.063l-.02.208a1.25 1.25 0 0 0 .226.83a1.34 1.34 0 0 0 1.435.533a1.2 1.2 0 0 0 .343-.15l5.59-3.562a1.16 1.16 0 0 0 .524-.778a1.24 1.24 0 0 0-.211-.937a1.34 1.34 0 0 0-1.435-.533a1.2 1.2 0 0 0-.343.15l-2.133 1.36a4 4 0 0 1-1.135.499a4.44 4.44 0 0 1-4.765-1.766a4.1 4.1 0 0 1-.702-3.108a3.86 3.86 0 0 1 1.742-2.582l5.589-3.563a4 4 0 0 1 1.135-.499a4.44 4.44 0 0 1 4.765 1.767a4.1 4.1 0 0 1 .703 3.107a4 4 0 0 1-.134.522l-.105.321l-.286-.21a7.2 7.2 0 0 0-2.187-1.093l-.208-.063l.02-.207a1.25 1.25 0 0 0-.226-.831a1.34 1.34 0 0 0-1.435-.532a1.2 1.2 0 0 0-.343.15L8.62 9.368a1.16 1.16 0 0 0-.524.778a1.24 1.24 0 0 0 .211.937a1.34 1.34 0 0 0 1.435.533a1.2 1.2 0 0 0 .344-.151l2.132-1.36a4 4 0 0 1 1.135-.498a4.44 4.44 0 0 1 4.765 1.766a4.1 4.1 0 0 1 .702 3.108a3.86 3.86 0 0 1-1.742 2.583l-5.589 3.562a4 4 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.4 6.4 0 0 0-2.896 4.295a6.75 6.75 0 0 0 .666 4.336a6.4 6.4 0 0 0-.96 2.396a6.83 6.83 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.4 6.4 0 0 0 2.896-4.295a6.76 6.76 0 0 0-.665-4.336a6.4 6.4 0 0 0 .958-2.396a6.83 6.83 0 0 0-1.167-5.168'
        ></path>
      </Icon>

      <Icon href='https://tailwindcss.com/' label='TailwindCSS'>
        <path
          fill='currentColor'
          d='M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12'
        ></path>
      </Icon>

      <Icon href='https://www.typescriptlang.org/' label='Typescript'>
        <path
          fill='currentColor'
          d='M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75q.918 0 1.627.111a6.4 6.4 0 0 1 1.306.34v2.458a4 4 0 0 0-.643-.361a5 5 0 0 0-.717-.26a5.5 5.5 0 0 0-1.426-.2q-.45 0-.819.086a2.1 2.1 0 0 0-.623.242q-.254.156-.393.374a.9.9 0 0 0-.14.49q0 .294.156.529q.156.234.443.444c.287.21.423.276.696.41q.41.203.926.416q.705.296 1.266.628q.561.333.963.753q.402.418.614.957q.213.538.214 1.253q0 .986-.373 1.656a3 3 0 0 1-1.012 1.085a4.4 4.4 0 0 1-1.487.596q-.85.18-1.79.18a10 10 0 0 1-1.84-.164a5.5 5.5 0 0 1-1.512-.493v-2.63a5.03 5.03 0 0 0 3.237 1.2q.5 0 .872-.09q.373-.09.623-.25q.249-.162.373-.38a1.02 1.02 0 0 0-.074-1.089a2.1 2.1 0 0 0-.537-.5a5.6 5.6 0 0 0-.807-.444a28 28 0 0 0-1.007-.436q-1.377-.575-2.053-1.405t-.676-2.005q0-.92.369-1.582q.368-.662 1.004-1.089a4.5 4.5 0 0 1 1.47-.629a7.5 7.5 0 0 1 1.77-.201m-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z'
        ></path>
      </Icon>

      <Icon href='https://vercel.com/' label='Vercel'>
        <path fill='currentColor' d='M24 22.525H0l12-21.05z'></path>
      </Icon>

      <Icon href='https://code.visualstudio.com/' label='Visual Studio Code'>
        <path
          fill='currentColor'
          d='M17 16.47V7.39l-6 4.54M2.22 9.19a.86.86 0 0 1-.02-1.15l1.2-1.11c.2-.18.69-.26 1.05 0l3.42 2.61l7.93-7.25c.32-.32.87-.45 1.5-.12l4 1.91c.36.21.7.54.7 1.15v13.5c0 .4-.29.83-.6 1l-4.4 2.1c-.32.13-.92.01-1.13-.2l-8.02-7.3l-3.4 2.6c-.38.26-.85.19-1.05 0l-1.2-1.1c-.32-.33-.28-.87.05-1.2l3-2.7'
        ></path>
      </Icon>

      <Icon href='https://vitejs.dev/' label='Vite'>
        <path
          fill='currentColor'
          d='m8.286 10.578l.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55l-.123.19a.3.3 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887l2.077-.4a.8.8 0 0 1 .84.369a.8.8 0 0 1 .034.783L12.9 19.93l-.013.025l-.015.023l-.122.19a.8.8 0 0 1-.672.37a.83.83 0 0 1-.634-.302a.8.8 0 0 1-.16-.67l1.029-4.981l-1.12.34a.81.81 0 0 1-.86-.262a.8.8 0 0 1-.165-.67l.63-3.08l-2.027.468a.81.81 0 0 1-.768-.233a.8.8 0 0 1-.217-.6l.389-6.57l-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9'
        ></path>
      </Icon>

      <Icon href='https://vuejs.org/' label='Vue.js'>
        <path
          fill='currentColor'
          d='M24 1.61h-9.94L12 5.16L9.94 1.61H0l12 20.78ZM12 14.08L5.16 2.23h4.43L12 6.41l2.41-4.18h4.43Z'
        ></path>
      </Icon>

      <Icon href='https://webpack.js.org/' label='Webpack'>
        <path
          fill='currentColor'
          d='M22.199 18.498L12.429 24v-4.285l6.087-3.334zm.668-.603V6.388l-3.575 2.055v7.396zm-21.066.603L11.571 24v-4.285L5.484 16.38zm-.668-.603V6.388l3.575 2.055v7.396zm.418-12.251L11.571 0v4.143L5.152 7.66l-.049.028zm20.898 0L12.429 0v4.143l6.419 3.516l.049.028zM11.57 18.74l-6.005-3.287V8.938l6.005 3.453zm.858 0l6.005-3.287V8.938l-6.005 3.453zM5.972 8.185l6.03-3.302l6.028 3.302l-6.029 3.466z'
        ></path>
      </Icon>
    </>
  )
}
