import {clientTestimonials} from '@/lib/data/testimonials'
import {TestimonialCard} from './TestimonialCard'

export function TestimonialList() {
  return (
    <div className='grid grid-cols-1 gap-4'>
      {clientTestimonials.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
    </div>
  )
}
