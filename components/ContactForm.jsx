'use client'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {z} from 'zod'
import {sendEmail} from '@/lib/sendEmail'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from './ui/form'
import {Input} from './ui/input'
import {Textarea} from './ui/textarea'
import {Button} from './ui/button'
import {useToast} from './ui/use-toast'
import Image from 'next/image'

const formSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(500),
})

export function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const {handleSubmit, formState} = form

  const {toast} = useToast()

  function onSubmit(data) {
    sendEmail(data)
    toast({
      description: (
        <pre className='mx-auto w-[300px] rounded-md p-4 text-center'>
          <code>Your message has been sent!</code>
        </pre>
      ),
    })
  }

  return (
    <div className='mx-auto flex flex-col gap-16 md:flex-row md:gap-8 lg:mx-12 lg:gap-8 xl:mx-auto'>
      <section className='md:w-2/3 md:rounded-lg md:border-2 md:border-foreground md:shadow-[2px_4px_6px_0px_#01091c] lg:rounded-xl md:dark:border-foreground/40'>
        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='space-y-6 md:p-6 lg:space-y-8 lg:p-10 xl:p-12 xl:text-xl 2xl:text-2xl'
          >
            <FormField
              control={form.control}
              name='name'
              render={({field}) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Jane Doe' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({field}) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder='you@email.com' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='message'
              render={({field}) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder='Hit me with your best shot!' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='mx-auto flex justify-center p-1 2xl:pt-3'>
              <Button
                className='w-full bg-red-400 text-background hover:bg-red-500 hover:text-black dark:bg-red-300 dark:hover:bg-red-400'
                size='sm'
                variant='secondary'
                type='submit'
                disabled={formState.isSubmitting}
              >
                Submit
              </Button>
            </div>
            <div className='mx-auto max-w-sm px-4 text-center text-xs sm:text-sm 2xl:max-w-lg 2xl:text-xl'>
              <p>
                If forms aren't your thing, go ahead and email me at{' '}
                <a
                  href='mailto:egarrisxn@gmail.com'
                  className='text-slate-400 underline underline-offset-4 hover:text-slate-600'
                >
                  egarrisxn@gmail.com
                </a>
                .
              </p>
            </div>
          </form>
        </Form>
      </section>

      <section className='mt-4 flex flex-col justify-center border-t border-red-500 pt-2 md:mt-0 md:w-1/3 md:border-none md:pt-0 dark:border-red-300'>
        <h3 className='text-center text-base font-semibold tracking-tight lg:text-xl'>
          Some Positive Words<span className='text-sm font-black'>&#10549;</span>
        </h3>
        <div className='mt-4 rounded-lg bg-white p-2 shadow-md transition-shadow hover:shadow-lg lg:rounded-xl lg:p-6 dark:bg-foreground/10'>
          <blockquote className='mb-4 text-sm font-medium leading-relaxed lg:text-lg'>
            "Communication, urgency, and attenion to detail are just a few things I could praise
            Ethan for. Working with him was such a breeze!"
          </blockquote>
          <div className='flex items-center'>
            <div className='mr-4 rounded-full bg-muted p-1'>
              <Image
                src='/other/sway-avatar.png'
                width={48}
                height={48}
                alt='Sway Bae'
                className='rounded-full'
                style={{aspectRatio: '48/48', objectFit: 'cover'}}
              />
            </div>
            <div>
              <div className='text-base font-medium'>Sway Bae</div>
              <div className='text-sm text-muted-foreground'>Content Creator</div>
            </div>
          </div>
        </div>
        <div className='mt-4 rounded-lg bg-white p-2 shadow-md transition-shadow hover:shadow-lg lg:rounded-xl lg:p-6 dark:bg-foreground/20'>
          <blockquote className='mb-4 text-sm font-medium leading-relaxed lg:text-lg'>
            "I gave Ethan a blank canvas for a project and he knocked it out of the park! I will be
            working with him again."
          </blockquote>
          <div className='flex items-center'>
            <div className='mr-4 rounded-full bg-muted p-1'>
              <Image
                src='/other/jeff-avatar.png'
                width={48}
                height={48}
                alt='Sway Bae'
                className='rounded-full'
                style={{aspectRatio: '48/48', objectFit: 'cover'}}
              />
            </div>
            <div>
              <div className='text-base font-medium'>Jeff Drake</div>
              <div className='text-sm text-muted-foreground'>Mechanical Engineer</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
