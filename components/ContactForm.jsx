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
    <div className='mx-auto sm:mx-12 lg:mx-16 lg:rounded-xl lg:border-2 lg:border-foreground lg:shadow-[2px_4px_6px_0px_#01091c] dark:lg:shadow-none'>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='space-y-6 px-2 lg:space-y-8 lg:p-12 xl:p-16 xl:text-xl 2xl:text-2xl'
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
              className='w-full max-w-xl bg-red-400 text-background hover:bg-red-500 hover:text-black dark:bg-red-300 dark:hover:bg-red-400'
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
  )
}
