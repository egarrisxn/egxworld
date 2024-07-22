import {Banner} from '@/components/Banner'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <main>
      <Banner className='dark:bg-red-400' src='/banners/CONTACT.svg' alt='Contact' />
      <ContactForm />
    </main>
  )
}
