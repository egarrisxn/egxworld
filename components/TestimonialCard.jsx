import Image from 'next/image'

export function TestimonialCard({testimonial}) {
  return (
    <div className='mt-4 rounded-lg bg-white p-2 shadow-md transition-shadow hover:shadow-lg lg:rounded-xl lg:p-6 dark:bg-foreground/10'>
      <blockquote className='mb-4 text-sm font-medium leading-relaxed lg:text-lg'>
        {testimonial.description}
      </blockquote>
      <div className='flex items-center'>
        <div className='mr-4 rounded-full bg-muted p-1'>
          <Image
            src={testimonial.image}
            alt={testimonial.alt}
            width={48}
            height={48}
            className='rounded-full'
            style={{aspectRatio: '48/48', objectFit: 'cover'}}
          />
        </div>
        <div>
          <div className='text-base font-medium'>{testimonial.client}</div>
          <div className='text-sm text-muted-foreground'>{testimonial.position}</div>
        </div>
      </div>
    </div>
  )
}
