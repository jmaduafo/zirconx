import React from 'react'

function TestimonialCard({
  testimonial,
}: {
  readonly testimonial: {
    text: string | null
    client: string | null
  }
}) {
  return (
    <div className="w-full h-[70vh] flex flex-col gap-4 py-5 px-6 bg-accent rounded-[20px]">
      <div>
        <div>
          <svg
            width="64"
            height="64"
            xmlns="http://www.w3.org/2000/svg"
            fill="#2a1b0490"
            className="bi bi-quote"
            viewBox="0 0 16 16"
          >
            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
          </svg>
        </div>
        <div className="mt-4">
          <p className="font-serif text-xl leading-snug">
            {testimonial?.text && testimonial?.text?.length > 400
              ? testimonial?.text.slice(0, 401) + '...'
              : testimonial?.text}
            <span className='font-montrealMedium text-sm '>{testimonial?.text && testimonial?.text?.length > 400 && ' Read More'}</span>
          </p>
        </div>
      </div>
      <div className="mt-auto flex justify-end">
        <p className="border border-foreground rounded-full w-fit py-1 px-3.5">
          {testimonial?.client}
        </p>
      </div>
    </div>
  )
}

export default TestimonialCard
