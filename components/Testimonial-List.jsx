import {testimonials} from '@/lib/testimonials'
import {TestimonialCard} from './Testimonial-Card'

export function TestimonialList() {
  return (
    <div className='grid grid-cols-1 gap-4'>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
    </div>
  )
}
