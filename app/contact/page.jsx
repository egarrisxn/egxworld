import {Banner} from '@/components/Banner'
import {TooltipProvider} from '@/components/ui/tooltip'
import {Icon} from '@/components/Icons'
import {ContactForm} from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <>
      <Banner type='contact' />
      <div className='mx-auto mt-12 flex w-full max-w-5xl flex-col gap-12 px-4 sm:mt-16 sm:px-8 xl:max-w-6xl 2xl:mt-24 2xl:max-w-7xl'>
        <header className='flex flex-row items-center justify-between text-sm md:px-2 md:text-lg lg:text-xl 2xl:text-4xl'>
          <h1 className='font-black uppercase tracking-widest text-red-400'>Let&apos;s Chat!</h1>
          <div className='flex gap-[0.2rem] md:gap-3 lg:gap-4'>
            <TooltipProvider>
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
          </div>
        </header>
        <ContactForm />
      </div>
    </>
  )
}
