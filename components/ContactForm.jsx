'use client'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {z} from 'zod'
import {sendEmail} from '@/lib/sendEmail'
import {Button} from './ui/button'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from './ui/form'
import {Input} from './ui/input'

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

  function onSubmit(data) {
    sendEmail(data)
  }

  return (
    <div className='mx-auto flex flex-col min-[400px]:mx-8 sm:mx-16 xl:mx-0'>
      <div className='md:rounded-xl md:border-4 md:border-red-400 md:p-16 md:shadow-lg lg:p-12 xl:p-16 dark:shadow-red-300/20'>
        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='space-y-8 xl:px-2 xl:text-xl 2xl:text-2xl'
          >
            <FormField
              control={form.control}
              name='name'
              render={({field}) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl className='border-foreground'>
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
                  <FormControl className='border-foreground'>
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
                  <FormControl className='border-foreground'>
                    <div>
                      <textarea
                        className='w-full rounded border border-foreground bg-background p-2'
                        rows={4}
                        placeholder='Your words here..'
                        {...field}
                      ></textarea>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex justify-center 2xl:pt-4'>
              <Button
                variant='outline'
                size='sm'
                className='w-full bg-red-400 hover:bg-red-500 lg:mx-52'
                type='submit'
                disabled={formState.isSubmitting}
              >
                Submit
              </Button>
            </div>
            <div className='mx-auto max-w-[24rem] px-4 pt-2 text-center text-sm sm:pt-8 lg:pt-4 2xl:pt-2 2xl:text-lg'>
              <p>
                If forms aren't your thing, go ahead and email me at{' '}
                <a
                  href='egarrisxn@gmail.com'
                  className='text-slate-400 underline underline-offset-4 hover:text-slate-600'
                >
                  egarrisxn@gmail.com
                </a>
                .
              </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
