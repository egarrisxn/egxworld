import {TooltipProvider} from '@/components/ui/tooltip'
import {Icon} from '@/components/Icons'

export default function Footer() {
  return (
    <footer className='mt-12 border-t border-foreground'>
      <div className='flex items-center justify-between p-2.5 sm:p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-7'>
        <section className='flex text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-3xl'>
          EG|2024
        </section>
        <section className='flex gap-2 text-sm sm:text-base lg:text-lg xl:gap-4 xl:text-xl 2xl:text-3xl'>
          <TooltipProvider>
            <Icon
              href='https://github.com/egarrisxn'
              label='GitHub'
              className='hover:text-green-400'
            >
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

            <Icon
              href='mailto:egarrisxn@gmail.com'
              label='Email'
              className='text-slate-400 hover:text-slate-600'
            >
              <g
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
              >
                <path d='M19.435 4.065H4.565a2.5 2.5 0 0 0-2.5 2.5v10.87a2.5 2.5 0 0 0 2.5 2.5h14.87a2.5 2.5 0 0 0 2.5-2.5V6.565a2.5 2.5 0 0 0-2.5-2.5m-14.87 1h14.87a1.49 1.49 0 0 1 1.49 1.39c-2.47 1.32-4.95 2.63-7.43 3.95a6 6 0 0 1-1.06.53a2.08 2.08 0 0 1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26c-1.14-.6-2.3-1.21-3.44-1.82a1.49 1.49 0 0 1 1.49-1.4m16.37 12.37a1.5 1.5 0 0 1-1.5 1.5H4.565a1.5 1.5 0 0 1-1.5-1.5V7.6c2.36 1.24 4.71 2.5 7.07 3.75a5.6 5.6 0 0 0 1.35.6a2.87 2.87 0 0 0 2-.41c1.45-.76 2.89-1.53 4.34-2.29c1.04-.56 2.07-1.1 3.11-1.65Z'></path>
              </g>
            </Icon>
          </TooltipProvider>
        </section>
      </div>
    </footer>
  )
}
