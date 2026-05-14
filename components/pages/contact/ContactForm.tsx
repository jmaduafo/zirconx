'use client'

import PrimaryButton from '@/components/buttons/PrimaryButton'
import InfoContainer from '@/components/containers/InfoContainer'
import MainHeader from '@/components/MainHeader'
import {Button} from '@/components/ui/button'
import {Calendar} from '@/components/ui/calendar'
import {Checkbox} from '@/components/ui/checkbox'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field'
import {Input} from '@/components/ui/input'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {Textarea} from '@/components/ui/textarea'
import Logo from '@/public/logo/zircon_logo.png'
import {navigation, services} from '@/utils/data'
import {contactSchema} from '@/zod/validation'
import {zodResolver} from '@hookform/resolvers/zod'
import {format} from 'date-fns'
import {ChevronDownIcon} from 'lucide-react'
import Image from 'next/image'
import React, {useState} from 'react'
import {Controller, useForm} from 'react-hook-form'
import {toast} from 'sonner'
import * as z from 'zod'

function ContactForm() {
  const [date, setDate] = useState<Date>()

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      type: '',
      date: '',
      guests: "",
      address: '',
      budget: "",
      additional: '',
      services: [],
    },
  })

  function onSubmit(data: z.infer<typeof contactSchema>) {
    date && console.log({...data, date: format(date, 'PPP')})
    // const result = contactSchema.safeParse(data)

    // if (!result.success) {
    //   toast('Whoops! Something went wrong', {
    //     description: result.error.issues[0].message,
    //   })

    //   console.log(data.services)

    //   return
    // }

    // const {first_name, last_name, email, phone, address, additional} = result.data

    // toast('You submitted the following values:', {
    //   description: (
    //     <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
    //       <code>{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    //   position: 'bottom-right',
    //   classNames: {
    //     content: 'flex flex-col gap-2',
    //   },
    //   style: {
    //     '--border-radius': 'calc(var(--radius)  + 4px)',
    //   } as React.CSSProperties,
    // })
  }

  return (
    <InfoContainer isMarginTop>
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="md:flex-1">
          <MainHeader
            title="Contact us"
            subtitle="From intimate gatherings to grand celebrations, we are here to create an event tailored to you."
          />
        </div>
        <form className="w-full md:flex-[2]" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className="">
            <FieldSet>
              <FieldLegend>Event Overview</FieldLegend>
              <FieldGroup>
                <div className="grid sm:grid-cols-2 gap-x-3 gap-y-4">
                  <Controller
                    name="first_name"
                    control={form.control}
                    render={({field, fieldState}) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>First name *</FieldLabel>
                        <Input
                          {...field}
                          aria-invalid={fieldState.invalid}
                          id={field.name}
                          autoComplete="off"
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
                  <Controller
                    name="last_name"
                    control={form.control}
                    render={({field, fieldState}) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>Last name *</FieldLabel>
                        <Input
                          {...field}
                          aria-invalid={fieldState.invalid}
                          id={field.name}
                          autoComplete="off"
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
                  <Controller
                    name="email"
                    control={form.control}
                    render={({field, fieldState}) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>Email address *</FieldLabel>
                        <Input
                          {...field}
                          aria-invalid={fieldState.invalid}
                          id={field.name}
                          autoComplete="off"
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
                  <Controller
                    name="phone"
                    control={form.control}
                    render={({field, fieldState}) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>Phone number *</FieldLabel>
                        <Input
                          {...field}
                          aria-invalid={fieldState.invalid}
                          id={field.name}
                          autoComplete="off"
                          minLength={10}
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
                  <Controller
                    name="type"
                    control={form.control}
                    render={({field, fieldState}) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>Event type *</FieldLabel>
                        <Select
                          name={field.name}
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            className="w-full"
                          >
                            <SelectValue placeholder="Select an event type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Types</SelectLabel>
                              {navigation
                                ?.find((item) => item.title.toLowerCase().includes('event'))
                                ?.dropdown?.map((event) => {
                                  return (
                                    <SelectItem
                                      key={event.title}
                                      className="capitalize"
                                      value={event.title}
                                    >
                                      {event.title}
                                    </SelectItem>
                                  )
                                })}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
                  <Controller
                    name="date"
                    control={form.control}
                    render={({field, fieldState}) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>Event date *</FieldLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              data-empty={!date}
                              className="normal-case px-2 border-transparent border-b border-b-foreground rounded-none justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
                            >
                              {date ? format(date, 'PPP') : <span>Pick a date</span>}
                              <ChevronDownIcon strokeWidth={1} />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              defaultMonth={date}
                            />
                          </PopoverContent>
                        </Popover>
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
                  <Controller
                    name="address"
                    control={form.control}
                    render={({field, fieldState}) => (
                      <Field data-invalid={fieldState.invalid} className="sm:col-span-2">
                        <FieldLabel htmlFor={field.name}>Location address *</FieldLabel>
                        <Input
                          {...field}
                          aria-invalid={fieldState.invalid}
                          id={field.name}
                          autoComplete="off"
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
                  <Controller
                    name="budget"
                    control={form.control}
                    render={({field, fieldState}) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>Budget (in Naira) *</FieldLabel>
                        <Input
                          {...field}
                          aria-invalid={fieldState.invalid}
                          id={field.name}
                          autoComplete="off"
                          min={1}
                          type='number'
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
                  <Controller
                    name="guests"
                    control={form.control}
                    render={({field, fieldState}) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>Number of guests *</FieldLabel>
                        <Input
                          {...field}
                          aria-invalid={fieldState.invalid}
                          id={field.name}
                          autoComplete="off"
                          type="number"
                          min={1}
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
                  <Controller
                    name="additional"
                    control={form.control}
                    render={({field, fieldState}) => (
                      <Field data-invalid={fieldState.invalid} className="sm:col-span-2">
                        <FieldLabel htmlFor={field.name}>Tell us about your event *</FieldLabel>
                        <Textarea
                          {...field}
                          aria-invalid={fieldState.invalid}
                          id={field.name}
                          autoComplete="off"
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
                </div>
              </FieldGroup>
            </FieldSet>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <FieldSet className="flex-[2]">
                <Controller
                  name="services"
                  control={form.control}
                  render={({field, fieldState}) => (
                    <>
                      <FieldLegend variant="label">Services Needed</FieldLegend>
                      <FieldGroup
                        data-slot="checkbox-group"
                        className="grid sm:grid-cols-2 gap-y-3 gap-x-6"
                      >
                        {services.map((service) => (
                          <Field
                            key={service.title}
                            orientation="horizontal"
                            data-invalid={fieldState.invalid}
                          >
                            <Checkbox
                              id={service.title
                                .toLowerCase()
                                .replace('-', ' ')
                                .split(' ')
                                .join('_')}
                              name={service.title
                                .toLowerCase()
                                .replace('-', ' ')
                                .split(' ')
                                .join('_')}
                              aria-invalid={fieldState.invalid}
                              checked={field.value.includes(service.title)}
                              onCheckedChange={(checked) => {
                                const newValue = checked
                                  ? [...field.value, service.title]
                                  : field.value.filter((value) => value !== service.title)
                                field.onChange(newValue)
                              }}
                            />
                            <FieldLabel
                              htmlFor={service.title
                                .toLowerCase()
                                .replace('-', ' ')
                                .split(' ')
                                .join('_')}
                              className="capitalize"
                            >
                              {service.title}
                            </FieldLabel>
                          </Field>
                        ))}
                      </FieldGroup>
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </>
                  )}
                />
                <FieldGroup className="mt-5">
                  <Field className='w-fit'>
                    <PrimaryButton className="scale-90" text="Submit" type="submit" />
                  </Field>
                </FieldGroup>
              </FieldSet>
              <div className="flex-1 object-cover object-top">
                <Image src={Logo} alt="logo" className="w-full h-full" />
              </div>
            </div>
          </FieldGroup>
        </form>
      </div>
    </InfoContainer>
  )
}

export default ContactForm
