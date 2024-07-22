'use client'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {z} from 'zod'
import {sendEmail} from '@/lib/sendEmail'
import {Button} from '@/components/ui/button'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Input} from '@/components/ui/input'

const formSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(500),
})

export default function ContactForm() {
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
    <section className='mx-auto mt-12 flex max-w-5xl flex-col gap-12 px-4 sm:mt-16 sm:px-8 xl:max-w-6xl 2xl:mt-24 2xl:max-w-7xl'>
      <h1 className='text-center text-red-400 sm:mb-2'>Let&apos;s Connect!</h1>
      <div className='md:rounded-xl md:border-2 md:border-red-400 md:p-16 md:shadow-xl 2xl:p-24 dark:shadow-red-300/20'>
        <div className='mx-auto flex w-full flex-col'>
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
              <div className='flex justify-center'>
                <Button
                  variant='outline'
                  size='sm'
                  className='w-full bg-red-400 hover:bg-red-500'
                  type='submit'
                  disabled={formState.isSubmitting}
                >
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
      <div className='mx-2 rounded-lg border bg-foreground/10 px-4 text-center text-sm text-foreground shadow-lg sm:mx-auto lg:text-lg 2xl:mt-8 2xl:text-2xl dark:shadow-red-300/10'>
        <p>Thank you for taking the time to check me out. &#9829;</p>
      </div>
    </section>
  )
}
